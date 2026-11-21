import { WholesaleMore } from "@/components/NewSections";
import { WholesaleExtras } from "@/components/PageSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import { editorialImages } from "@/lib/photography";
import { dispatchCrates } from "@/lib/images";

export const Route = createFileRoute("/wholesale")({
  head: () => ({
    meta: [
      { title: "Wholesale & Trade Accounts | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Open a Golden Grain trade account for next-morning bakery deliveries across London and the Home Counties.",
      },
      { property: "og:title", content: "Wholesale & Trade Accounts | Golden Grain Bakehouse" },
      {
        property: "og:description",
        content:
          "Open a Golden Grain trade account for next-morning bakery deliveries across London and the Home Counties.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const steps = [
  ["Get in touch", "Tell us about your business, your hours and the lines you need."],
  [
    "Taste & sample",
    "We’ll bring a sample box to your door so you can bake it, cut it and serve it.",
  ],
  ["Open your account", "Agree delivery days, standing orders and how you’d like to pay."],
  [
    "Fresh every morning",
    "Your van arrives before you turn the sign, and the same driver keeps your round.",
  ],
];

const benefits = [
  [
    "Next-morning delivery",
    "Orders received by 4pm are baked overnight for delivery before opening.",
  ],
  ["A fixed drop time", "A consistent delivery slot agreed when your account is set up."],
  [
    "Bespoke and own-label",
    "Breads to your specification and under your own label, by arrangement.",
  ],
  ["Frozen and part-baked", "Longer shelf life for lines that sell more slowly, where available."],
  [
    "Full specifications",
    "Ingredients, allergens, weights and nutritional data for every product.",
  ],
  ["Clear pricing", "Prices and terms are set out in a written quotation before you order."],
];

const terms = [
  ["Order cut-off", "4pm, Sunday to Saturday, for delivery the following morning."],
  [
    "Delivery area",
    "Greater London and the Home Counties – Essex, Hertfordshire, Kent and Surrey.",
  ],
  ["Delivery days", "Seven days a week, including bank holidays."],
  ["Minimum order", "Confirmed in writing for your area when the account is opened."],
  ["Payment", "Agreed with each customer when the account is opened."],
  [
    "Returns & credits",
    "Short or wrong items sorted on the spot by your driver, or credited the same day.",
  ],
];

const faqs = [
  [
    "Can I change my standing order?",
    "Yes – tell your driver or the order desk before the 4pm cut-off and tonight’s bake can change.",
  ],
  [
    "Do you deliver at Christmas?",
    "We do, with cut-offs moved forward on the run-up. The desk sends the full schedule each December.",
  ],
  [
    "Can you hold stock for me?",
    "Frozen and part-baked lines can be held and released on your schedule.",
  ],
  [
    "Do you supply outside London?",
    "Sometimes – speak to the desk with your postcode and volumes and we’ll tell you honestly.",
  ],
];

function Page() {
  return (
    <>
      <PageHero
        variant="left"
        cta={{ to: "/trade", label: "Open a trade account" }}
        image={editorialImages["sample-box"]}
        eyebrow="For the Trade"
        title="Wholesale"
        intro="Reliable, fresh and fairly priced – bakery supply for London’s food businesses."
      />

      <div className="mx-auto max-w-6xl px-4 py-20">
        <div className="grid gap-6 md:grid-cols-4">
          {steps.map(([t, d], i) => (
            <div key={t} className="rounded-sm border border-border bg-card p-6">
              <p className="font-display text-4xl text-gold-gradient">{i + 1}</p>
              <p className="mt-3 font-display text-sm text-primary">{t}</p>
              <p className="mt-2 font-serif text-lg text-muted-foreground">{d}</p>
            </div>
          ))}
        </div>
        <div className="mt-16 grid gap-8 rounded-sm bg-primary p-10 text-primary-foreground md:grid-cols-3">
          {[
            ["Order cut-off", "4pm for next morning"],
            ["Delivery area", "Greater London & Home Counties"],
            ["Delivery days", "Seven days a week"],
          ].map(([t, d]) => (
            <div key={t}>
              <p className="eyebrow !text-gold">{t}</p>
              <p className="mt-2 font-display text-xl">{d}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <img
              src={dispatchCrates}
              alt="Crates of wrapped loaves and baguettes stacked in the dispatch room before dawn"
              width={1600}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full rounded-sm object-cover shadow-elegant"
            />
            <div>
              <p className="eyebrow">What an Account Gets You</p>
              <h2 className="mt-3 text-3xl text-primary md:text-4xl">
                More Than a Van on Your Step
              </h2>
              <p className="mt-5 font-serif text-xl text-foreground/80">
                Opening an account means a bakehouse that knows your name, your menu and your busy
                Saturdays.
              </p>
              <ul className="mt-8 grid gap-x-8 gap-y-5 sm:grid-cols-2">
                {benefits.map(([t, d]) => (
                  <li key={t}>
                    <p className="font-display text-sm uppercase tracking-[0.16em] text-primary">
                      {t}
                    </p>
                    <p className="mt-1 font-serif text-lg text-muted-foreground">{d}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-20">
        <div className="text-center">
          <p className="eyebrow">The Small Print, in Plain English</p>
          <h2 className="mt-3 text-3xl text-primary">Delivery &amp; Account Terms</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        </div>
        <dl className="mt-12 divide-y divide-border border-y border-border">
          {terms.map(([t, d]) => (
            <div key={t} className="grid gap-2 py-5 md:grid-cols-[220px_1fr] md:gap-8">
              <dt className="font-display text-base text-primary">{t}</dt>
              <dd className="font-serif text-xl text-foreground/80">{d}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="relative isolate overflow-hidden bg-plum text-primary-foreground">
        <img
          src={editorialImages["green-delivery"]}
          alt="A delivery van leaving the bakehouse at dawn"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-30"
        />
        <div className="mx-auto max-w-4xl px-4 py-24 text-center">
          <p className="eyebrow !text-gold">Before the Kettle Boils</p>
          <p className="mt-4 font-display text-3xl leading-snug md:text-4xl">
            “Our vans leave in the small hours so your counter is full before the first customer
            walks in.”
          </p>
          <Link
            to="/trade"
            hash="apply"
            className="mt-9 inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
          >
            Apply for a trade account
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-20">
        <div className="text-center">
          <p className="eyebrow">Good to Know</p>
          <h2 className="mt-3 text-3xl text-primary">Trade Questions</h2>
        </div>
        <div className="mt-10 divide-y divide-border border-y border-border">
          {faqs.map(([q, a]) => (
            <details key={q} className="group py-4">
              <summary className="flex cursor-pointer list-none items-center justify-between font-display text-base text-primary">
                {q}
                <span className="text-gold-deep transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 font-serif text-lg text-muted-foreground">{a}</p>
            </details>
          ))}
        </div>
        <p className="mt-8 text-center font-serif text-lg text-muted-foreground">
          Anything else? The order desk answers in one working day.
        </p>
      </section>
      <WholesaleExtras>
        <WholesaleMore />
      </WholesaleExtras>
      <EditorialGallery
        eyebrow="From the Bench to Your Business"
        title="A Thoughtful First Order"
        intro="Build a useful selection around your service, storage and busiest hours."
        scenes={[
          {
            image: editorialImages["bread-wrapping"],
            title: "Choose the Presentation",
            description:
              "Let us know whether your bakes are for a bread basket, a display counter or a retail shelf.",
          },
          {
            image: editorialImages["flour-weighing"],
            title: "Discuss the Quantity",
            description:
              "Bring an estimate of daily covers or sales so the conversation starts with your actual needs.",
          },
          {
            image: editorialImages["retail-shelves"],
            title: "Plan Your Space",
            description:
              "Consider how each line will fit into your display, preparation area and available storage.",
          },
        ]}
      />
    </>
  );
}
