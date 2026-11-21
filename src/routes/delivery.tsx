import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { PageHero } from "@/components/PageHero";
import { img } from "@/lib/asset-index";
import { company } from "@/lib/company";
import { areas } from "@/lib/delivery-areas";

export const Route = createFileRoute("/delivery")({
  head: () => ({
    meta: [
      { title: "Delivery Areas & Schedule | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Where Golden Grain Bakehouse delivers, order cut-off times and how a trade delivery works.",
      },
      { property: "og:title", content: "Delivery Areas & Schedule | Golden Grain Bakehouse" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const day = [
  [
    "By 4pm",
    "Order cut-off",
    "Orders and changes received by 4pm are included in that night’s bake, for delivery the following morning.",
  ],
  [
    "Overnight",
    "Baking",
    "Doughs are mixed, proved and baked through the night, with bread and pastry finished in the small hours.",
  ],
  [
    "Before dawn",
    "Packing and dispatch",
    "Orders are packed to each customer’s delivery note and loaded in round order.",
  ],
  [
    "Early morning",
    "On your step",
    "Deliveries are made ahead of opening, to the drop time agreed when your account is set up.",
  ],
];

function Page() {
  const [code, setCode] = useState("");
  const [result, setResult] = useState<null | { ok: boolean; text: string }>(null);
  const check = () => {
    const outward = code
      .trim()
      .toUpperCase()
      .replace(/\s+/g, "")
      .match(/^([A-Z]{1,2})\d/);
    if (!outward) {
      setResult({ ok: false, text: "Enter the start of a UK postcode, for example E10 or SW1A." });
      return;
    }
    const hit = areas.filter((a) => a.codes.includes(outward[1]!));
    setResult(
      hit.length
        ? {
            ok: true,
            text: `${outward[1]} falls within our stated ${hit.map((h) => h.name).join(" / ")} delivery area. The order desk confirms each address and drop time.`,
          }
        : {
            ok: false,
            text: `${outward[1]} is outside the areas we list. Write to the order desk with your postcode and expected volumes, and we will say plainly whether we can serve you.`,
          },
    );
  };
  return (
    <>
      <PageHero
        variant="banner"
        image={img("new/delivery-route-map")}
        eyebrow="Delivery"
        title="Delivery Areas & Schedule"
        intro="Baked overnight and delivered before you open. This is how our rounds work and where they run."
        cta={{ to: "/trade", label: "Open a trade account" }}
      />

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:items-start">
          <div>
            <p className="eyebrow">Check Your Postcode</p>
            <h2 className="mt-3 text-3xl text-primary md:text-4xl">Do We Deliver to You?</h2>
            <p className="mt-4 font-serif text-xl text-muted-foreground">
              A quick guide based on the start of your postcode. It is indicative, not a promise of
              service.
            </p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                check();
              }}
              className="mt-6 flex flex-col gap-3 sm:flex-row"
              aria-label="Postcode check"
            >
              <label htmlFor="pc" className="sr-only">
                Postcode
              </label>
              <input
                id="pc"
                value={code}
                onChange={(e) => setCode(e.target.value)}
                placeholder="For example, E10 7QZ"
                autoComplete="postal-code"
                className="w-full rounded-sm border border-input bg-card px-4 py-3 font-serif text-lg outline-none focus:border-gold sm:flex-1"
              />
              <button className="rounded-sm bg-primary px-6 py-3 font-display text-xs uppercase tracking-[0.18em] text-primary-foreground">
                Check
              </button>
            </form>
            {result && (
              <p
                role="status"
                className={`mt-4 border-l-2 pl-4 font-serif text-lg ${result.ok ? "border-gold text-primary" : "border-destructive text-foreground"}`}
              >
                {result.text}
              </p>
            )}
          </div>
          <div className="overflow-hidden border border-border">
            <div className="hidden grid-cols-[170px_1fr] bg-secondary px-5 py-3 font-display text-xs uppercase tracking-[0.18em] text-primary sm:grid">
              <span>Area</span>
              <span>Coverage</span>
            </div>
            {areas.map((a) => (
              <div
                key={a.name}
                className="grid gap-1 border-t border-border px-5 py-4 sm:grid-cols-[170px_1fr] sm:gap-6"
              >
                <p className="font-display text-base text-primary">{a.name}</p>
                <p className="font-serif text-lg text-muted-foreground">{a.note}</p>
              </div>
            ))}
            <div className="grid gap-1 border-t border-border px-5 py-4 sm:grid-cols-[170px_1fr] sm:gap-6">
              <p className="font-display text-base text-primary">Further afield</p>
              <p className="font-serif text-lg text-muted-foreground">
                By arrangement. Send your postcode and volumes to the order desk.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-16 md:py-24">
          <p className="eyebrow !text-gold">The Delivery Day</p>
          <h2 className="mt-3 text-3xl md:text-5xl">From Order to Opening Time</h2>
          <ol className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {day.map(([when, t, d], i) => (
              <li key={t} className="border-t border-gold/60 pt-5">
                <p className="font-display text-xs uppercase tracking-[0.22em] text-gold">
                  {String(i + 1).padStart(2, "0")} · {when}
                </p>
                <p className="mt-3 font-display text-xl">{t}</p>
                <p className="mt-2 font-serif text-lg text-primary-foreground/80">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <img
            src={img("new/street-delivery-handover")}
            alt="A driver handing over crates at a shop door"
            width={1400}
            height={1000}
            loading="lazy"
            className="aspect-[4/3] w-full object-cover shadow-elegant"
          />
          <div>
            <p className="eyebrow">On Receipt</p>
            <h2 className="mt-3 text-3xl text-primary md:text-4xl">Checking Your Delivery</h2>
            <dl className="mt-8 divide-y divide-border border-y border-border">
              {[
                [
                  "Delivery note",
                  "Check the crates against the note while the driver is with you.",
                ],
                [
                  "Short or wrong items",
                  "Raise them on the spot. They are put right by your driver, or credited the same day.",
                ],
                [
                  "Changes to an order",
                  "Tell your driver or the order desk before the 4pm cut-off.",
                ],
                ["Allergen information", "Specifications are available for every line on request."],
              ].map(([t, d]) => (
                <div key={t} className="grid gap-1 py-4 sm:grid-cols-[190px_1fr] sm:gap-6">
                  <dt className="font-display text-base text-primary">{t}</dt>
                  <dd className="font-serif text-lg text-muted-foreground">{d}</dd>
                </div>
              ))}
            </dl>
            <p className="mt-6 font-serif text-lg text-muted-foreground">
              Delivery charges and minimum order values are confirmed on your written quotation.
              Write to{" "}
              <a className="text-primary underline" href={`mailto:${company.email}`}>
                {company.email}
              </a>{" "}
              or see{" "}
              <Link to="/wholesale" className="text-primary underline">
                wholesale terms
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
