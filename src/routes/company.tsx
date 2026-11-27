import { createFileRoute, Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import { company } from "@/lib/company";
import { img } from "@/lib/asset-index";

export const Route = createFileRoute("/company")({
  head: () => ({
    meta: [
      { title: "Company Information & Legal | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Registered company details for Golden Grain Bakehouse Ltd, company number 17581412, with our website privacy notice.",
      },
      { property: "og:title", content: "Company Information & Legal | Golden Grain Bakehouse" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const rows: [string, string][] = [
  ["Registered name", company.name],
  ["Company number", company.number],
  ["Company type", company.type],
  ["Company status", company.status],
  ["Registered in", company.jurisdiction],
  ["Incorporated", company.incorporated],
  ["Registered office", company.registeredOffice.join(", ")],
  ["First accounts due", `${company.firstAccountsDue} (made up to 30 November 2027)`],
  ["First confirmation statement due", company.confirmationStatementDue],
];

function Page() {
  return (
    <>
      <PageHero
        variant="centre"
        image={img("new/bakery-shop-interior")}
        eyebrow="Corporate Information"
        title="Company Information"
        intro="The registered details of the company that trades as Golden Grain Bakehouse."
      />

      <section className="mx-auto grid max-w-7xl gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.4fr_1fr]">
        <div>
          <p className="eyebrow">Companies House Record</p>
          <h2 className="mt-3 text-3xl text-primary md:text-4xl">{company.displayName}</h2>
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {rows.map(([k, v]) => (
              <div key={k} className="grid gap-1 py-4 sm:grid-cols-[230px_1fr] sm:gap-6">
                <dt className="font-display text-sm uppercase tracking-[0.14em] text-primary">
                  {k}
                </dt>
                <dd className="font-serif text-xl">{v}</dd>
              </div>
            ))}
          </dl>
          <h3 className="mt-10 font-display text-lg text-primary">
            Nature of business (SIC codes)
          </h3>
          <ul className="mt-3 divide-y divide-border border-y border-border">
            {company.sic.map(([code, text]) => (
              <li key={code} className="grid gap-1 py-3 sm:grid-cols-[90px_1fr] sm:gap-6">
                <span className="font-display text-primary">{code}</span>
                <span className="font-serif text-lg">{text}</span>
              </li>
            ))}
          </ul>
        </div>
        <aside className="self-start border-t-2 lg:sticky lg:top-32 border-gold bg-card p-7 shadow-elegant">
          <p className="font-display text-lg text-primary">Verified against the public register</p>
          <p className="mt-3 font-serif text-lg text-muted-foreground">
            These particulars were checked against the Companies House record on{" "}
            {company.verifiedOn}. The register is the authoritative source; Companies House records information as filed by the company.
          </p>
          <a
            href={company.recordUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-5 inline-flex items-center gap-2 border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.18em] text-primary"
          >
            View the official record <ExternalLink className="h-4 w-4" />
          </a>
          <p className="mt-6 font-serif text-base text-muted-foreground">
            VAT registration details will be added here once they appear on the public record.
          </p>
        </aside>
      </section>

      <section id="privacy" className="scroll-mt-40 bg-secondary">
        <div className="mx-auto max-w-4xl px-4 py-16 md:py-24">
          <p className="eyebrow">Website Notice</p>
          <h2 className="mt-3 text-3xl text-primary md:text-4xl">Privacy and Cookies</h2>
          <div className="mt-8 space-y-6 font-serif text-xl text-foreground/85">
            <p>
              <strong className="font-display text-base text-primary">Who we are.</strong>{" "}
              {company.displayName}, company number {company.number}, registered in England and
              Wales. Registered office: {company.registeredOffice.join(", ")}.
            </p>
            <p>
              <strong className="font-display text-base text-primary">
                What this website does with your details.
              </strong>{" "}
              The enquiry, quotation and trade account forms keep your data on your own device. They prepare an email in your own email application, addressed to {company.email}. Transmission begins when you send that email, and we receive only what it contains.
            </p>
            <p>
              <strong className="font-display text-base text-primary">
                Your quotation selection.
              </strong>{" "}
              Products you add to a trade quotation are held in your browser’s local storage so that
              you can return to them. They stay on your device and can be removed with “Clear the
              quote”.
            </p>
            <p>
              <strong className="font-display text-base text-primary">
                Cookies and analytics.
              </strong>{" "}
              This website is free of cookies, analytics and advertising trackers.
              Fonts are loaded from Google Fonts, which means your browser contacts Google’s servers
              when a page loads.
            </p>
            <p>
              <strong className="font-display text-base text-primary">Your rights.</strong> Where we
              hold personal data about you, you may ask us to see it, correct it or delete it. Write
              to {company.email}. You may also complain to the Information Commissioner’s Office at
              ico.org.uk.
            </p>
          </div>
          <p className="mt-8 border-l-2 border-gold pl-4 font-serif text-base text-muted-foreground">
            This notice describes how the website currently works and will be updated if that
            changes.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <p className="eyebrow">Supply</p>
        <h2 className="mt-3 text-3xl text-primary md:text-4xl">Terms and Allergens</h2>
        <div className="mt-8 space-y-6 font-serif text-xl text-foreground/85">
          <p>
            Prices, minimum orders, delivery charges and payment terms are agreed in writing with
            each trade customer. Guide prices on this website are indicative; an offer to sell is made only through a written quotation.
          </p>
          <p>
            Our products are made in a bakery that handles cereals containing gluten, milk, eggs,
            sesame, nuts and other allergens. Ingredient and allergen specifications are available
            for every line on request. Please{" "}
            <Link to="/contact" className="text-primary underline">
              contact the order desk
            </Link>{" "}
            before adding any product to your menu.
          </p>
        </div>
      </section>
    </>
  );
}
