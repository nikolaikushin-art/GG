import { ContactMore } from "@/components/NewSections";
import { ContactExtras } from "@/components/PageSections";
import { editorialImages } from "@/lib/photography";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { company } from "@/lib/company";
import { isEmail, mailtoLink } from "@/lib/mailto";
import { PageHero } from "@/components/PageHero";
import contactHero from "@/assets/contact-desk-hero.jpg";
import { cafeCounter } from "@/lib/images";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Ordering | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Speak to the Golden Grain order desk about trade accounts, samples and deliveries.",
      },
      { property: "og:title", content: "Contact & Ordering | Golden Grain Bakehouse" },
      {
        property: "og:description",
        content:
          "Speak to the Golden Grain order desk about trade accounts, samples and deliveries.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const d = Object.fromEntries(new FormData(e.currentTarget).entries()) as Record<string, string>;
    if (!isEmail(d["email"] ?? "")) {
      setErr("Enter a valid email address.");
      return;
    }
    setErr("");
    window.location.href = mailtoLink(
      `Enquiry – ${d["business"]}`,
      [
        `Name: ${d["name"]}`,
        `Business: ${d["business"]}`,
        `Email: ${d["email"]}`,
        `Telephone: ${d["phone"] || "—"}`,
        `Type of business: ${d["type"] || "—"}`,
        "",
        d["message"] || "—",
      ].join("\n"),
    );
    setSent(true);
  };
  const field =
    "w-full rounded-sm border border-input bg-card px-4 py-3 font-serif text-lg outline-none focus:border-gold";
  return (
    <>
      <PageHero
        variant="banner"
        image={contactHero}
        eyebrow="The Order Desk"
        title="Contact Us"
        intro="Write to the order desk; we aim to reply within one working day."
      />

      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-20 md:grid-cols-[1fr_2fr]">
        <div className="space-y-6 font-serif text-lg">
          <div>
            <p className="eyebrow">Email</p>
            <a href={`mailto:${company.email}`} className="break-all text-primary">
              {company.email}
            </a>
          </div>
          <div>
            <p className="eyebrow">Bakehouse</p>
            <address className="not-italic">
              {company.registeredOffice.map((l) => (
                <span key={l}>
                  {l}
                  <br />
                </span>
              ))}
            </address>
          </div>
          <div>
            <p className="eyebrow">Order desk hours</p>
            <p>Mon–Sun, 6am – 6pm</p>
          </div>
          <div>
            <p className="eyebrow">Order cut-off</p>
            <p>4pm for next-morning delivery</p>
          </div>
          <div>
            <p className="eyebrow">Allergens &amp; specs</p>
            <p>Full ingredient and allergen sheets for every line, on request.</p>
          </div>
        </div>
        {sent ? (
          <div className="rounded-sm border border-gold bg-card p-10 text-center">
            <h2 className="text-2xl text-primary">Your email draft is ready</h2>
            <p className="mt-3 font-serif text-xl">
              Please send it from your email application. Should it fail to open, write to{" "}
              {company.email}.
            </p>
          </div>
        ) : (
          <form
            noValidate
            onSubmit={submit}
            className="grid gap-4 rounded-sm border border-border bg-secondary p-8 sm:grid-cols-2"
          >
            <input
              required
              name="name"
              aria-label="Your name"
              autoComplete="name"
              placeholder="Your name"
              className={field}
            />
            <input
              required
              name="business"
              aria-label="Business name"
              autoComplete="organization"
              placeholder="Business name"
              className={field}
            />
            <input
              required
              name="email"
              aria-label="Email address"
              type="email"
              autoComplete="email"
              placeholder="Email address"
              className={field}
            />
            <input
              name="phone"
              aria-label="Telephone"
              type="tel"
              autoComplete="tel"
              placeholder="Telephone (optional)"
              className={field}
            />
            <select
              name="type"
              aria-label="Type of business"
              className={`${field} sm:col-span-2`}
              defaultValue=""
            >
              <option value="" disabled>
                Type of business
              </option>
              <option>Restaurant</option>
              <option>Kebab house / grill</option>
              <option>Café</option>
              <option>Shop / retailer</option>
              <option>Wholesaler</option>
            </select>
            <textarea
              name="message"
              aria-label="Your enquiry"
              rows={5}
              placeholder="What would you like to order?"
              className={`${field} sm:col-span-2`}
            />
            <button className="bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground sm:col-span-2">
              Prepare enquiry email
            </button>
            {err && (
              <p role="alert" className="font-serif text-base text-destructive sm:col-span-2">
                {err}
              </p>
            )}
            <p className="font-serif text-sm text-muted-foreground sm:col-span-2">
              This opens a pre-written email in your email application; your details travel by email alone.
            </p>
          </form>
        )}
      </div>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-20 lg:grid-cols-2">
          <img
            src={cafeCounter}
            alt="A British café counter with croissants, buns and cakes"
            width={1600}
            height={1008}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-sm object-cover shadow-elegant"
          />
          <div>
            <p className="eyebrow">What Happens Next</p>
            <h2 className="mt-3 text-3xl text-primary md:text-4xl">
              From Enquiry to First Delivery
            </h2>
            <ol className="mt-8 space-y-5">
              {[
                [
                  "We reply within one working day",
                  "Usually the same afternoon, once the vans are back.",
                ],
                [
                  "A quick chat about your needs",
                  "Your menu, your hours, your volumes and your postcode.",
                ],
                [
                  "Samples to your door",
                  "A box of the lines that interest you, with our compliments.",
                ],
                [
                  "Your first drop",
                  "Standing order agreed, and bread on your step the next morning.",
                ],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 border-l-2 border-gold pl-5">
                  <span className="font-display text-2xl text-gold-deep">{i + 1}</span>
                  <div>
                    <p className="font-display text-lg text-primary">{t}</p>
                    <p className="mt-1 font-serif text-lg text-muted-foreground">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <EditorialGallery
        eyebrow="Before We Speak"
        title="Bring Your Menu to the Conversation"
        intro="A few useful details help the order desk understand what your business needs."
        scenes={[
          {
            image: editorialImages["sample-box"],
            title: "Your Shortlist",
            description:
              "Make a note of the products that interest you, including any alternatives you would like to compare.",
          },
          {
            image: editorialImages["restaurant-table"],
            title: "Your Service",
            description:
              "Tell us how you plan to serve the bakes, from breakfast baskets to a busy evening kitchen.",
          },
          {
            image: editorialImages["flour-sacks"],
            title: "Your Requirements",
            description:
              "Ask for the current specifications and tell us about any ingredient or preparation requirements.",
          },
        ]}
      />
      <ContactExtras>
        <ContactMore />
      </ContactExtras>
    </>
  );
}
