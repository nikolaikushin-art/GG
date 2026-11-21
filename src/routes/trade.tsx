import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState, type FormEvent } from "react";
import { Minus, Plus, Trash2, Mail, AlertCircle } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { categories } from "@/lib/catalogue";
import { formatGBP, pricingReviewed, productPrices } from "@/lib/pricing";
import { priceLines, quote, subtotalPence, useQuote } from "@/lib/quote";
import { company } from "@/lib/company";
import { isEmail, isUkPostcode, mailtoLink } from "@/lib/mailto";
import { img } from "@/lib/asset-index";

export const Route = createFileRoute("/trade")({
  head: () => ({
    meta: [
      { title: "Trade Account & Quotation | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Build a trade quotation from the Golden Grain range and apply for a wholesale account. Prices are guides until confirmed in writing.",
      },
      { property: "og:title", content: "Trade Account & Quotation | Golden Grain Bakehouse" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const field =
  "w-full rounded-sm border border-input bg-card px-4 py-3 font-serif text-lg outline-none focus:border-gold focus-visible:ring-2 focus-visible:ring-gold/40";
const label = "mb-1 block font-display text-xs uppercase tracking-[0.18em] text-primary";
type Errors = Record<string, string>;

const pending = [
  [
    "VAT",
    "Treatment depends on the product and how it is supplied. It is shown on the written quotation, not estimated here.",
  ],
  [
    "Delivery charges",
    "Set by delivery area and order pattern. The order desk confirms any charge for your postcode.",
  ],
  ["Minimum order value", "Confirmed for your area when the account is opened."],
  [
    "Discounts and rebates",
    "None are applied automatically. Any agreed terms appear on the quotation.",
  ],
];

function Page() {
  const items = useQuote();
  const lines = useMemo(() => priceLines(items), [items]);
  const subtotal = subtotalPence(items);
  const [pick, setPick] = useState("");
  const [sent, setSent] = useState<"" | "quote" | "apply">("");
  const [qErr, setQErr] = useState<Errors>({});
  const [aErr, setAErr] = useState<Errors>({});

  const read = (e: FormEvent<HTMLFormElement>) =>
    Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;

  const submitQuote = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = read(e);
    const err: Errors = {};
    if (!lines.length) err["lines"] = "Add at least one product to your quote.";
    if (!d["name"]?.trim()) err["name"] = "Enter your name.";
    if (!d["business"]?.trim()) err["business"] = "Enter your business name.";
    if (!isEmail(d["email"] ?? "")) err["email"] = "Enter a valid email address.";
    if (d["postcode"] && !isUkPostcode(d["postcode"]))
      err["postcode"] = "Enter a valid UK postcode, for example E10 7QZ.";
    setQErr(err);
    if (Object.keys(err).length) return;
    const body = [
      `Quotation request`,
      ``,
      `Name: ${d["name"]}`,
      `Business: ${d["business"]}`,
      `Email: ${d["email"]}`,
      `Telephone: ${d["phone"] || "—"}`,
      `Delivery postcode: ${d["postcode"] || "—"}`,
      ``,
      `Products (guide prices, not confirmed):`,
      ...lines.map(
        (l) =>
          `- ${l.product.name}: ${l.cases} × case of ${l.price.caseSize} (${l.units} ${l.price.unit}s) · guide ${formatGBP(l.totalPence)}`,
      ),
      ``,
      `Guide subtotal, excluding VAT and delivery: ${formatGBP(subtotal)}`,
      ``,
      `Notes: ${d["notes"] || "—"}`,
    ].join("\n");
    window.location.href = mailtoLink(`Quotation request – ${d["business"]}`, body);
    setSent("quote");
  };
  const submitApply = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = read(e);
    const err: Errors = {};
    if (!d["business"]?.trim()) err["business"] = "Enter your business name.";
    if (!d["name"]?.trim()) err["name"] = "Enter a contact name.";
    if (!isEmail(d["email"] ?? "")) err["email"] = "Enter a valid email address.";
    if (!d["type"]) err["type"] = "Choose the type of business.";
    if (!isUkPostcode(d["postcode"] ?? ""))
      err["postcode"] = "Enter a valid UK postcode, for example E10 7QZ.";
    if (!d["consent"]) err["consent"] = "Please confirm that we may reply to this enquiry.";
    setAErr(err);
    if (Object.keys(err).length) return;
    const body = [
      `Trade account application`,
      ``,
      `Business: ${d["business"]}`,
      `Company number (if applicable): ${d["regno"] || "—"}`,
      `Type of business: ${d["type"]}`,
      `Contact: ${d["name"]}`,
      `Email: ${d["email"]}`,
      `Telephone: ${d["phone"] || "—"}`,
      `Delivery address / postcode: ${d["postcode"]}`,
      `Preferred delivery days: ${d["days"] || "—"}`,
      `Estimated weekly volume: ${d["volume"] || "—"}`,
      ``,
      `About the business:`,
      d["notes"] || "—",
    ].join("\n");
    window.location.href = mailtoLink(`Trade account application – ${d["business"]}`, body);
    setSent("apply");
  };

  const Err = ({ e, k }: { e: Errors; k: string }) =>
    e[k] ? (
      <p
        role="alert"
        className="mt-1 flex items-center gap-1 font-serif text-base text-destructive"
      >
        <AlertCircle className="h-4 w-4" />
        {e[k]}
      </p>
    ) : null;

  return (
    <>
      <PageHero
        variant="left"
        image={img("new/van-loading-dawn")}
        eyebrow="For Trade Customers"
        title="Trade Account"
        intro="Build a quotation from the range, then apply for an account. Everything is confirmed in writing before you order."
        cta={{ to: "/trade", label: "Build a quotation" }}
      />

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-px bg-border sm:grid-cols-3">
          {[
            ["1", "Choose products", "Add cases from any product page, or from the list below."],
            ["2", "Request a quotation", "Your selection is sent to the order desk by email."],
            ["3", "Confirmed in writing", "VAT, delivery and terms are agreed on the quotation."],
          ].map(([n, t, d]) => (
            <div key={n} className="bg-card px-6 py-7">
              <p className="font-display text-3xl text-gold-gradient">{n}</p>
              <p className="mt-2 font-display text-base text-primary">{t}</p>
              <p className="mt-1 font-serif text-lg text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="quote" className="mx-auto max-w-7xl scroll-mt-40 px-4 py-16 md:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow">Your Quotation</p>
          <h2 className="mt-3 text-3xl text-primary md:text-5xl">Trade Quote Builder</h2>
          <p className="mt-4 font-serif text-xl text-muted-foreground">
            Prices below are guides, last reviewed on {pricingReviewed}. They are not approved
            selling prices.
          </p>
        </div>

        <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr_1fr]">
          <div>
            <div className="flex flex-col gap-3 sm:flex-row">
              <label className="sr-only" htmlFor="pick">
                Add a product
              </label>
              <select
                id="pick"
                value={pick}
                onChange={(e) => setPick(e.target.value)}
                className={`${field} sm:flex-1`}
              >
                <option value="">Add a product to your quote…</option>
                {categories.map((c) => (
                  <optgroup key={c.slug} label={c.name}>
                    {c.products.map((p) => (
                      <option key={p.slug} value={p.slug}>
                        {p.name} – case of {productPrices[p.slug]?.caseSize}
                      </option>
                    ))}
                  </optgroup>
                ))}
              </select>
              <button
                type="button"
                disabled={!pick}
                onClick={() => {
                  quote.add(pick);
                  setPick("");
                }}
                className="rounded-sm bg-primary px-6 py-3 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground disabled:opacity-40"
              >
                Add case
              </button>
            </div>

            {lines.length === 0 ? (
              <div className="mt-8 border border-dashed border-gold/60 bg-secondary p-10 text-center">
                <p className="font-display text-xl text-primary">Your quote is empty</p>
                <p className="mt-2 font-serif text-lg text-muted-foreground">
                  Choose a product above, or{" "}
                  <Link to="/bakehouse" className="text-primary underline">
                    browse the bakehouse
                  </Link>{" "}
                  and select “Add case to quote”.
                </p>
                <Err e={qErr} k="lines" />
              </div>
            ) : (
              <ul className="mt-8 divide-y divide-border border-y border-border">
                {lines.map((l) => (
                  <li
                    key={l.slug}
                    className="grid gap-4 py-5 sm:grid-cols-[1fr_auto_auto] sm:items-center"
                  >
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
                        {l.price.unit} · {l.units} {l.price.unit}s
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
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
                        aria-label={`Cases of ${l.product.name}`}
                        className="min-w-8 text-center font-display text-xl"
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
                    <div className="flex items-center justify-between gap-4 sm:justify-end">
                      <p className="font-display text-lg text-primary">{formatGBP(l.totalPence)}</p>
                      <button
                        type="button"
                        aria-label={`Remove ${l.product.name}`}
                        onClick={() => quote.remove(l.slug)}
                        className="text-muted-foreground hover:text-destructive"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {lines.length > 0 && (
              <button
                type="button"
                onClick={() => quote.clear()}
                className="mt-4 font-serif text-base text-muted-foreground underline"
              >
                Clear the quote
              </button>
            )}
          </div>

          <aside className="self-start border-t-2 border-gold bg-card p-6 shadow-elegant">
            <p className="font-display text-lg text-primary">Guide subtotal</p>
            <p className="mt-2 font-display text-4xl text-gold-gradient" aria-live="polite">
              {formatGBP(subtotal)}
            </p>
            <p className="mt-1 font-serif text-base text-muted-foreground">
              Excludes VAT, delivery and any agreed terms.
            </p>
            <Link
              to="/basket"
              className="mt-4 flex items-center justify-center bg-gold-gradient px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-accent-foreground"
            >
              Pay by card in your basket
            </Link>
            <dl className="mt-5 space-y-3 border-t border-border pt-5">
              {pending.map(([t, d]) => (
                <div key={t}>
                  <dt className="font-display text-xs uppercase tracking-[0.16em] text-primary">
                    {t}{" "}
                    <span className="ml-1 rounded-sm bg-secondary px-1.5 py-0.5 text-xs text-muted-foreground">
                      To be confirmed
                    </span>
                  </dt>
                  <dd className="mt-1 font-serif text-base text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        <form
          onSubmit={submitQuote}
          noValidate
          className="mt-12 grid gap-4 border border-border bg-secondary p-6 sm:grid-cols-2 md:p-8"
          aria-label="Request a written quotation"
        >
          <h3 className="font-display text-xl text-primary sm:col-span-2">
            Request a written quotation
          </h3>
          <div>
            <label className={label} htmlFor="q-name">
              Your name
            </label>
            <input id="q-name" name="name" autoComplete="name" className={field} />
            <Err e={qErr} k="name" />
          </div>
          <div>
            <label className={label} htmlFor="q-business">
              Business name
            </label>
            <input id="q-business" name="business" autoComplete="organization" className={field} />
            <Err e={qErr} k="business" />
          </div>
          <div>
            <label className={label} htmlFor="q-email">
              Email address
            </label>
            <input id="q-email" name="email" type="email" autoComplete="email" className={field} />
            <Err e={qErr} k="email" />
          </div>
          <div>
            <label className={label} htmlFor="q-phone">
              Telephone (optional)
            </label>
            <input id="q-phone" name="phone" type="tel" autoComplete="tel" className={field} />
          </div>
          <div>
            <label className={label} htmlFor="q-postcode">
              Delivery postcode (optional)
            </label>
            <input id="q-postcode" name="postcode" autoComplete="postal-code" className={field} />
            <Err e={qErr} k="postcode" />
          </div>
          <div className="sm:col-span-2">
            <label className={label} htmlFor="q-notes">
              Notes (optional)
            </label>
            <textarea
              id="q-notes"
              name="notes"
              rows={3}
              className={field}
              placeholder="Delivery days, opening hours, slicing or packing requirements"
            />
          </div>
          <div className="sm:col-span-2">
            <button className="inline-flex items-center gap-2 bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground">
              <Mail className="h-4 w-4" /> Prepare quotation email
            </button>
            <p className="mt-3 font-serif text-base text-muted-foreground">
              This opens a pre-written email to {company.email} in your email application. Nothing
              is stored on this website.
            </p>
            {sent === "quote" && (
              <p
                role="status"
                className="mt-3 border-l-2 border-gold pl-4 font-serif text-lg text-primary"
              >
                Your email draft has been prepared. If it did not open, write to {company.email} and
                quote the products above.
              </p>
            )}
          </div>
        </form>
      </section>

      <section id="apply" className="scroll-mt-40 bg-secondary">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1fr_1.4fr]">
          <div>
            <p className="eyebrow">New Customers</p>
            <h2 className="mt-3 text-3xl text-primary md:text-5xl">Apply for a Trade Account</h2>
            <p className="mt-5 font-serif text-xl text-foreground/80">
              Tell us about your business and where we would be delivering. The order desk replies
              within one working day to agree samples, delivery days and terms.
            </p>
            <img
              src={img("pages/packing-floor-crates")}
              alt="Crates being packed on the bakehouse floor"
              width={1200}
              height={800}
              loading="lazy"
              className="mt-8 aspect-[4/3] w-full object-cover shadow-elegant"
            />
            <div className="mt-8 border-l-2 border-gold pl-5">
              <p className="font-display text-base text-primary">Existing customers</p>
              <p className="mt-1 font-serif text-lg text-muted-foreground">
                Online login and ordering are not yet available. Please continue to order through
                the order desk at {company.email}.
              </p>
            </div>
          </div>
          <form
            onSubmit={submitApply}
            noValidate
            className="grid gap-4 border border-border bg-card p-6 sm:grid-cols-2 md:p-8"
            aria-label="Trade account application"
          >
            <div>
              <label className={label} htmlFor="a-business">
                Business name
              </label>
              <input
                id="a-business"
                name="business"
                autoComplete="organization"
                className={field}
              />
              <Err e={aErr} k="business" />
            </div>
            <div>
              <label className={label} htmlFor="a-reg">
                Company number (optional)
              </label>
              <input id="a-reg" name="regno" inputMode="numeric" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="a-name">
                Contact name
              </label>
              <input id="a-name" name="name" autoComplete="name" className={field} />
              <Err e={aErr} k="name" />
            </div>
            <div>
              <label className={label} htmlFor="a-email">
                Email address
              </label>
              <input
                id="a-email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
              />
              <Err e={aErr} k="email" />
            </div>
            <div>
              <label className={label} htmlFor="a-phone">
                Telephone (optional)
              </label>
              <input id="a-phone" name="phone" type="tel" autoComplete="tel" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="a-postcode">
                Delivery postcode
              </label>
              <input id="a-postcode" name="postcode" autoComplete="postal-code" className={field} />
              <Err e={aErr} k="postcode" />
            </div>
            <div>
              <label className={label} htmlFor="a-type">
                Type of business
              </label>
              <select id="a-type" name="type" defaultValue="" className={field}>
                <option value="" disabled>
                  Choose…
                </option>
                {[
                  "Restaurant",
                  "Kebab house or grill",
                  "Café or coffee shop",
                  "Hotel or caterer",
                  "Shop or retailer",
                  "Wholesaler or distributor",
                  "Other",
                ].map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
              <Err e={aErr} k="type" />
            </div>
            <div>
              <label className={label} htmlFor="a-volume">
                Estimated weekly volume (optional)
              </label>
              <input
                id="a-volume"
                name="volume"
                className={field}
                placeholder="For example, 200 rolls and 40 loaves"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="a-days">
                Preferred delivery days (optional)
              </label>
              <input
                id="a-days"
                name="days"
                className={field}
                placeholder="For example, Monday, Wednesday, Friday"
              />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="a-notes">
                About your business (optional)
              </label>
              <textarea id="a-notes" name="notes" rows={4} className={field} />
            </div>
            <div className="sm:col-span-2">
              <label className="flex items-start gap-3 font-serif text-base">
                <input type="checkbox" name="consent" className="mt-1.5 h-4 w-4" /> I agree that
                Golden Grain Bakehouse Ltd may use these details to reply to this application. See
                the{" "}
                <Link to="/company" hash="privacy" className="text-primary underline">
                  privacy notice
                </Link>
                .
              </label>
              <Err e={aErr} k="consent" />
            </div>
            <div className="sm:col-span-2">
              <button className="inline-flex items-center gap-2 bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground">
                <Mail className="h-4 w-4" /> Prepare application email
              </button>
              {sent === "apply" && (
                <p
                  role="status"
                  className="mt-3 border-l-2 border-gold pl-4 font-serif text-lg text-primary"
                >
                  Your email draft has been prepared. If it did not open, write to {company.email}.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <div className="text-center">
          <p className="eyebrow">Before You Order</p>
          <h2 className="mt-3 text-3xl text-primary md:text-4xl">How Pricing Is Confirmed</h2>
        </div>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {[
            [
              "Are these the prices I will pay?",
              "No. They are planning estimates in pounds sterling. The price you pay is the one on your written quotation.",
            ],
            [
              "Where do the guide prices come from?",
              "They are internal planning figures informed by published trade price lists, and have not yet been approved as Golden Grain selling prices.",
            ],
            [
              "Is there an online account?",
              "Not yet. Login, saved orders and online checkout need a secure account service that has not been connected. Until then, quotations and orders are handled by the order desk.",
            ],
            [
              "Is my quote saved?",
              "Your selection is kept in your own browser so that you can return to it. It is not sent to us until you choose to email it.",
            ],
          ].map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-display text-base text-primary">
                {q}
                <span className="text-gold-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-serif text-lg text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
      </section>
    </>
  );
}
