import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useMemo, useState, type FormEvent } from "react";
import { AlertCircle, Lock, Mail, Minus, Plus, Trash2, Truck, Undo2 } from "lucide-react";
import { productImages } from "@/lib/photography";
import { formatGBP, pricingReviewed } from "@/lib/pricing";
import { priceLines, quote, subtotalPence, useQuote, type QuoteLine } from "@/lib/quote";
import { areasFor, deliveryDates } from "@/lib/delivery-areas";
import { validateCustomer, type CheckoutConfig } from "@/lib/stripe-checkout";
import { isUkPostcode, mailtoLink } from "@/lib/mailto";
import { company } from "@/lib/company";

export const Route = createFileRoute("/basket")({
  head: () => ({
    meta: [
      { title: "Your Basket | Golden Grain Bakehouse" },
      { name: "robots", content: "noindex" },
      {
        name: "description",
        content: "Review your trade order, choose a delivery date and pay securely by card.",
      },
    ],
  }),
  component: Page,
});

type Config = CheckoutConfig & { enabled: boolean; testMode: boolean };
const field =
  "w-full rounded-sm border border-input bg-card px-4 py-3 font-serif text-lg outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/40";
const lab = "mb-1 block font-display text-xs uppercase tracking-[0.18em] text-primary";

function Page() {
  const items = useQuote();
  const lines = useMemo(() => priceLines(items), [items]);
  const subtotal = subtotalPence(items);
  const dates = useMemo(() => deliveryDates(), []);
  const [cfg, setCfg] = useState<Config | null>(null);
  const [removed, setRemoved] = useState<QuoteLine | null>(null);
  const [f, setF] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    postcode: "",
    deliveryDate: dates[0]?.value ?? "",
    notes: "",
  });
  const [touched, setTouched] = useState(false);
  const [busy, setBusy] = useState(false);
  const [msg, setMsg] = useState("");

  useEffect(() => {
    fetch("/api/checkout")
      .then((r) => r.json())
      .then(setCfg)
      .catch(() => setCfg(null));
  }, []);
  useEffect(() => {
    if (!removed) return;
    const t = setTimeout(() => setRemoved(null), 8000);
    return () => clearTimeout(t);
  }, [removed]);

  const set = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((s) => ({ ...s, [k]: e.target.value }));
  const err = touched ? validateCustomer(f) : null;
  const area = f.postcode && isUkPostcode(f.postcode) ? areasFor(f.postcode) : null;
  const min = cfg?.minOrderPence ?? 0;
  const delivery = cfg?.deliveryChargePence ?? 0;
  const belowMin = min > 0 && subtotal < min;
  const units = lines.reduce((n, l) => n + l.units, 0);

  const pay = async (e: FormEvent) => {
    e.preventDefault();
    setTouched(true);
    setMsg("");
    if (!lines.length) {
      setMsg("Your basket is empty.");
      return;
    }
    if (validateCustomer(f)) return;
    if (belowMin) {
      setMsg(
        `The minimum order is ${formatGBP(min)}. Add ${formatGBP(min - subtotal)} more to continue.`,
      );
      return;
    }
    setBusy(true);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ lines: items, customer: f }),
      });
      const data = (await res.json()) as { url?: string; error?: string };
      if (res.ok && data.url) {
        window.location.href = data.url;
        return;
      }
      setMsg(data.error ?? "Payment was unable to begin.");
    } catch {
      setMsg("The payment service was out of reach. Please check your connection and try again.");
    }
    setBusy(false);
  };

  const emailQuote = () => {
    setTouched(true);
    const bad = validateCustomer(f);
    if (bad) return;
    const body = [
      "Quotation request",
      "",
      `Name: ${f.name}`,
      `Business: ${f.business}`,
      `Email: ${f.email}`,
      `Telephone: ${f.phone || "—"}`,
      `Postcode: ${f.postcode}`,
      `Preferred delivery: ${dates.find((d) => d.value === f.deliveryDate)?.label}`,
      "",
      ...lines.map(
        (l) =>
          `- ${l.product.name}: ${l.cases} × case of ${l.price.caseSize} · guide ${formatGBP(l.totalPence)}`,
      ),
      "",
      `Guide subtotal excluding VAT and delivery: ${formatGBP(subtotal)}`,
      "",
      f.notes || "",
    ].join("\n");
    window.location.href = mailtoLink(`Quotation request – ${f.business}`, body);
  };

  const E = ({ ok, children }: { ok: boolean; children: string }) =>
    ok ? (
      <p
        role="alert"
        className="mt-1 flex items-center gap-1 font-serif text-base text-destructive"
      >
        <AlertCircle className="h-4 w-4" />
        {children}
      </p>
    ) : null;

  return (
    <div className="bg-[#faf5ec]">
      <div className="mx-auto max-w-7xl px-4 pb-32 pt-12 lg:pb-20">
        <p className="eyebrow">Secure Checkout</p>
        <h1 className="mt-2 text-4xl text-primary md:text-6xl">Your Basket</h1>
        <p className="mt-3 font-serif text-xl text-muted-foreground">
          {lines.length
            ? `${lines.length} ${lines.length === 1 ? "product" : "products"}, ${units} items`
            : "Your basket awaits its first loaf."}
        </p>

        {removed && (
          <div
            role="status"
            className="mt-6 flex items-center justify-between gap-4 border-l-2 border-gold bg-card px-5 py-3 font-serif text-lg"
          >
            <span>Removed from your basket.</span>
            <button
              type="button"
              onClick={() => {
                quote.add(removed.slug, removed.cases);
                setRemoved(null);
              }}
              className="inline-flex items-center gap-1 font-display text-xs uppercase tracking-[0.16em] text-primary underline"
            >
              <Undo2 className="h-4 w-4" /> Undo
            </button>
          </div>
        )}

        {lines.length === 0 ? (
          <div className="mt-12 border border-dashed border-gold/60 bg-card p-12 text-center">
            <p className="font-display text-2xl text-primary">Your basket is empty</p>
            <p className="mt-2 font-serif text-xl text-muted-foreground">
              Add cases from the bakehouse to build your order.
            </p>
            <Link
              to="/bakehouse"
              className="mt-6 inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
            >
              Browse the bakehouse
            </Link>
          </div>
        ) : (
          <form onSubmit={pay} noValidate className="mt-10 grid gap-10 lg:grid-cols-[1.5fr_1fr]">
            <div className="space-y-10">
              <ul className="divide-y divide-border border-y border-border bg-card">
                {lines.map((l) => (
                  <li
                    key={l.slug}
                    className="grid grid-cols-[88px_1fr] gap-4 p-4 sm:grid-cols-[110px_1fr_auto] sm:items-center"
                  >
                    <img
                      src={productImages[l.slug]}
                      alt=""
                      width={220}
                      height={220}
                      loading="lazy"
                      className="aspect-square w-full object-cover"
                    />
                    <div className="min-w-0">
                      <Link
                        to="/bakehouse/$category/$product"
                        params={{ category: l.product.category.slug, product: l.slug }}
                        className="font-display text-lg text-primary hover:text-gold-deep"
                      >
                        {l.product.name}
                      </Link>
                      <p className="mt-1 font-serif text-base text-muted-foreground">
                        Case of {l.price.caseSize} · {formatGBP(l.price.wholesalePence)} per{" "}
                        {l.price.unit}
                      </p>
                      <p className="font-serif text-base text-muted-foreground">
                        {l.units} {l.price.unit}s in total
                      </p>
                    </div>
                    <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          aria-label={`Remove a case of ${l.product.name}`}
                          disabled={l.cases === 1}
                          onClick={() => quote.set(l.slug, l.cases - 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border disabled:opacity-40"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <output
                          className="min-w-8 text-center font-display text-xl"
                          aria-label={`Cases of ${l.product.name}`}
                        >
                          {l.cases}
                        </output>
                        <button
                          type="button"
                          aria-label={`Add a case of ${l.product.name}`}
                          onClick={() => quote.set(l.slug, l.cases + 1)}
                          className="flex h-9 w-9 items-center justify-center rounded-sm border border-border"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                      <div className="flex items-center gap-3">
                        <p className="font-display text-lg text-primary">
                          {formatGBP(l.totalPence)}
                        </p>
                        <button
                          type="button"
                          aria-label={`Remove ${l.product.name}`}
                          onClick={() => {
                            setRemoved({ slug: l.slug, cases: l.cases });
                            quote.remove(l.slug);
                          }}
                          className="text-muted-foreground hover:text-destructive"
                        >
                          <Trash2 className="h-5 w-5" />
                        </button>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>

              <fieldset className="grid gap-4 border border-border bg-card p-6 sm:grid-cols-2 md:p-8">
                <legend className="px-2 font-display text-lg text-primary">
                  Delivery and contact details
                </legend>
                <div>
                  <label className={lab} htmlFor="b-name">
                    Your name
                  </label>
                  <input
                    id="b-name"
                    autoComplete="name"
                    value={f.name}
                    onChange={set("name")}
                    className={field}
                  />
                </div>
                <div>
                  <label className={lab} htmlFor="b-biz">
                    Business name
                  </label>
                  <input
                    id="b-biz"
                    autoComplete="organization"
                    value={f.business}
                    onChange={set("business")}
                    className={field}
                  />
                </div>
                <div>
                  <label className={lab} htmlFor="b-email">
                    Email address
                  </label>
                  <input
                    id="b-email"
                    type="email"
                    autoComplete="email"
                    value={f.email}
                    onChange={set("email")}
                    className={field}
                  />
                </div>
                <div>
                  <label className={lab} htmlFor="b-tel">
                    Telephone (optional)
                  </label>
                  <input
                    id="b-tel"
                    type="tel"
                    autoComplete="tel"
                    value={f.phone}
                    onChange={set("phone")}
                    className={field}
                  />
                </div>
                <div>
                  <label className={lab} htmlFor="b-pc">
                    Delivery postcode
                  </label>
                  <input
                    id="b-pc"
                    autoComplete="postal-code"
                    value={f.postcode}
                    onChange={set("postcode")}
                    className={field}
                  />
                  {area && (
                    <p
                      className={`mt-1 flex items-center gap-1 font-serif text-base ${area.length ? "text-primary" : "text-destructive"}`}
                    >
                      <Truck className="h-4 w-4" />
                      {area.length
                        ? `Within our ${area.map((a) => a.name).join(" / ")} delivery area.`
                        : "Outside our listed areas. The order desk will confirm whether we can deliver."}
                    </p>
                  )}
                </div>
                <div>
                  <label className={lab} htmlFor="b-date">
                    Delivery date
                  </label>
                  <select
                    id="b-date"
                    value={f.deliveryDate}
                    onChange={set("deliveryDate")}
                    className={field}
                  >
                    {dates.map((d) => (
                      <option key={d.value} value={d.value}>
                        {d.label}
                      </option>
                    ))}
                  </select>
                  <p className="mt-1 font-serif text-sm text-muted-foreground">
                    Orders placed by 4pm are delivered from the next morning.
                  </p>
                </div>
                <div className="sm:col-span-2">
                  <label className={lab} htmlFor="b-notes">
                    Delivery notes (optional)
                  </label>
                  <textarea
                    id="b-notes"
                    rows={3}
                    value={f.notes}
                    onChange={set("notes")}
                    className={field}
                    placeholder="Opening hours, access, who to ask for"
                  />
                </div>
                {err && (
                  <div className="sm:col-span-2">
                    <E ok>{err}</E>
                  </div>
                )}
              </fieldset>
            </div>

            <aside className="self-start lg:sticky lg:top-40">
              <div className="border-t-2 border-gold bg-card p-6 shadow-elegant">
                <p className="font-display text-xl text-primary">Order summary</p>
                <dl className="mt-5 space-y-3 font-serif text-lg">
                  <div className="flex justify-between">
                    <dt>Subtotal</dt>
                    <dd className="font-display text-primary">{formatGBP(subtotal)}</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>Delivery</dt>
                    <dd className="text-right">
                      {delivery ? (
                        formatGBP(delivery)
                      ) : (
                        <span className="text-muted-foreground">Confirmed with your order</span>
                      )}
                    </dd>
                  </div>
                  <div className="flex justify-between">
                    <dt>VAT</dt>
                    <dd className="text-right">
                      {cfg?.automaticTax ? (
                        <span className="text-muted-foreground">Calculated at payment</span>
                      ) : (
                        <span className="text-muted-foreground">Shown on your invoice</span>
                      )}
                    </dd>
                  </div>
                </dl>
                {min > 0 && (
                  <div className="mt-4">
                    <div className="h-2 overflow-hidden rounded-full bg-secondary">
                      <div
                        className="h-full bg-gold-gradient"
                        style={{ width: `${Math.min(100, (subtotal / min) * 100)}%` }}
                      />
                    </div>
                    <p className="mt-2 font-serif text-base text-muted-foreground">
                      {belowMin
                        ? `Add ${formatGBP(min - subtotal)} more to reach the ${formatGBP(min)} minimum order.`
                        : "Minimum order reached."}
                    </p>
                  </div>
                )}
                <button
                  disabled={busy}
                  className="mt-6 flex w-full items-center justify-center gap-2 bg-gold-gradient px-6 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground disabled:opacity-60"
                >
                  <Lock className="h-4 w-4" />
                  {busy ? "Starting secure checkout…" : "Pay securely by card"}
                </button>
                {msg && (
                  <p
                    role="alert"
                    className="mt-3 flex items-start gap-2 font-serif text-base text-destructive"
                  >
                    <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" />
                    {msg}
                  </p>
                )}
                {cfg && !cfg.enabled && (
                  <p className="mt-3 border-l-2 border-gold pl-3 font-serif text-sm text-muted-foreground">
                    Card payment is awaiting activation for this site, and this button will explain as much. A written quotation may be requested instead.
                  </p>
                )}
                {cfg?.testMode && (
                  <p className="mt-3 border-l-2 border-gold pl-3 font-serif text-sm text-muted-foreground">
                    Test mode: payments are simulated. Use card 4242 4242 4242 4242.
                  </p>
                )}
                <button
                  type="button"
                  onClick={emailQuote}
                  className="mt-3 flex w-full items-center justify-center gap-2 border border-primary px-6 py-3 font-display text-xs uppercase tracking-[0.18em] text-primary hover:bg-primary hover:text-primary-foreground"
                >
                  <Mail className="h-4 w-4" /> Request a written quotation
                </button>
                <p className="mt-4 font-serif text-sm text-muted-foreground">
                  Payments are handled securely by Stripe, so your card details stay with them alone. Guide
                  prices were last reviewed on {pricingReviewed}; your confirmation states the final
                  amount. Questions: {company.email}.
                </p>
                <button
                  type="button"
                  onClick={() => quote.clear()}
                  className="mt-3 font-serif text-sm text-muted-foreground underline"
                >
                  Empty the basket
                </button>
              </div>
            </aside>
          </form>
        )}
      </div>

      {lines.length > 0 && (
        <div
          className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 p-3 backdrop-blur lg:hidden"
          style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}
        >
          <div className="mx-auto flex max-w-xl items-center justify-between gap-4">
            <div>
              <p className="font-serif text-sm text-muted-foreground">Subtotal</p>
              <p className="font-display text-xl text-primary">{formatGBP(subtotal)}</p>
            </div>
            <button
              type="button"
              onClick={(e) => pay(e as unknown as FormEvent)}
              disabled={busy}
              className="flex items-center gap-2 bg-gold-gradient px-6 py-3 font-display text-xs uppercase tracking-[0.18em] text-accent-foreground disabled:opacity-60"
            >
              <Lock className="h-4 w-4" /> Pay by card
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
