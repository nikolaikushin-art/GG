import { BakehouseMore } from "@/components/NewSections";
import { BakehouseExtras } from "@/components/PageSections";
import { editorialImages } from "@/lib/photography";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import { AddToQuote } from "@/components/QuoteButton";
import { categories } from "@/lib/catalogue";
import { PageHero } from "@/components/PageHero";
import { scoringLoaf } from "@/lib/images";
import bakehouseHero from "@/assets/bakehouse-range-hero.jpg";
import { FromPrice } from "@/components/ProductPricing";
import { productImages } from "@/lib/photography";

export const Route = createFileRoute("/bakehouse/")({
  head: () => ({
    meta: [
      { title: "The Bakehouse – All Products | Golden Grain" },
      {
        name: "description",
        content: "Browse every bread, pastry and cake from Golden Grain Bakehouse, East London.",
      },
      { property: "og:title", content: "The Bakehouse – All Products | Golden Grain" },
      {
        property: "og:description",
        content: "Browse every bread, pastry and cake from Golden Grain Bakehouse, East London.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const totalProducts = categories.reduce((n, c) => n + c.products.length, 0);

function Page() {
  const [q, setQ] = useState("");
  const [cat, setCat] = useState("all");
  const shown = useMemo(() => {
    const needle = q.trim().toLowerCase();
    return categories
      .filter((c) => cat === "all" || c.slug === cat)
      .map((c) => ({
        ...c,
        products: c.products.filter(
          (p) => !needle || `${p.name} ${p.note} ${p.origin}`.toLowerCase().includes(needle),
        ),
      }))
      .filter((c) => c.products.length > 0);
  }, [q, cat]);
  const count = shown.reduce((n, c) => n + c.products.length, 0);
  return (
    <>
      <PageHero
        eyebrow="The Complete Range"
        title="The Bakehouse"
        variant="centre"
        cta={{ to: "/contact", label: "Start an order" }}
        image={bakehouseHero}
        intro={`Every loaf, roll, pastry and bake we make – ${totalProducts} lines across ${categories.length} ranges. Click through for the full detail on each.`}
      />

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl gap-6 px-4 py-8 sm:grid-cols-3">
          {[
            [String(totalProducts), "Product lines"],
            [String(categories.length), "Ranges"],
            ["Nightly", "Baked to order"],
          ].map(([n, l]) => (
            <div key={l} className="text-center">
              <p className="font-display text-3xl text-gold-gradient">{n}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.2em] text-muted-foreground">{l}</p>
            </div>
          ))}
        </div>
      </section>

      <section
        className="sticky top-[132px] z-30 border-b border-border bg-background/95 backdrop-blur"
        aria-label="Filter the range"
      >
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-4 md:flex-row md:items-center">
          <label className="relative block md:w-80">
            <span className="sr-only">Search products</span>
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="search"
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search the range, for example naan"
              className="w-full rounded-sm border border-input bg-card py-2.5 pl-9 pr-3 font-serif text-lg outline-none focus:border-gold"
            />
          </label>
          <div
            className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 md:flex-wrap md:overflow-visible"
            role="group"
            aria-label="Product ranges"
          >
            {[["all", "All ranges"], ...categories.map((c) => [c.slug, c.name] as const)].map(
              ([slug, name]) => (
                <button
                  key={slug}
                  type="button"
                  aria-pressed={cat === slug}
                  onClick={() => setCat(slug!)}
                  className={`shrink-0 rounded-full border px-4 py-1.5 font-display text-xs tracking-wide ${cat === slug ? "border-primary bg-primary text-primary-foreground" : "border-border text-primary hover:border-gold"}`}
                >
                  {name}
                </button>
              ),
            )}
          </div>
          <p className="font-serif text-base text-muted-foreground md:ml-auto" aria-live="polite">
            {count} {count === 1 ? "product" : "products"}
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-7xl space-y-20 px-4 py-16 md:py-20">
        {shown.length === 0 && (
          <p className="py-16 text-center font-serif text-xl text-muted-foreground">
            No products match your search. Try a different word, or{" "}
            <button
              type="button"
              className="text-primary underline"
              onClick={() => {
                setQ("");
                setCat("all");
              }}
            >
              clear the filters
            </button>
            .
          </p>
        )}
        {shown.map((c) => (
          <section key={c.slug}>
            <div className="flex flex-wrap items-end justify-between gap-4 border-b border-gold/40 pb-4">
              <div>
                <p className="eyebrow">{c.strap}</p>
                <h2 className="mt-2 text-3xl text-primary">{c.name}</h2>
              </div>
              <Link
                to="/bakehouse/$category"
                params={{ category: c.slug }}
                className="font-display text-xs uppercase tracking-[0.2em] text-gold-deep hover:underline"
              >
                View range →
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap justify-center gap-5">
              {c.products.map((p) => (
                <div
                  key={p.slug}
                  className="group flex w-[calc(50%-0.625rem)] flex-col rounded-sm border border-border bg-card hover:border-gold hover:shadow-elegant md:w-[calc(33.333%-0.84rem)] lg:w-[calc(20%-1rem)]"
                >
                  <Link
                    to="/bakehouse/$category/$product"
                    params={{ category: c.slug, product: p.slug }}
                    className="block flex-1"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={productImages[p.slug]}
                        alt={p.name}
                        width={1200}
                        height={800}
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-3">
                      <p className="font-display text-sm text-primary group-hover:text-gold-deep">
                        {p.name}
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">{p.origin}</p>
                      <FromPrice slug={p.slug} className="!mt-2 !text-sm" />
                    </div>
                  </Link>
                  <div className="p-3 pt-0">
                    <AddToQuote slug={p.slug} className="w-full !px-2 !text-xs" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={scoringLoaf}
          alt="A baker scoring a floured sourdough loaf"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="max-w-xl">
            <p className="eyebrow !text-gold">Ordering</p>
            <h2 className="mt-3 text-4xl">Three Steps to a Full Counter</h2>
            <ol className="mt-8 space-y-5">
              {[
                [
                  "Pick your lines",
                  "Browse the ranges above and note what you’d like – or send us your menu.",
                ],
                [
                  "Taste before you commit",
                  "We’ll bring a sample box so you can bake it and cut it first.",
                ],
                [
                  "Set your standing order",
                  "Tell us the numbers and the day, and it arrives every week without a phone call.",
                ],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4 border-l-2 border-gold pl-5">
                  <span className="font-display text-2xl text-gold">{i + 1}</span>
                  <div>
                    <p className="font-display text-lg">{t}</p>
                    <p className="mt-1 font-serif text-lg text-primary-foreground/80">{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            <Link
              to="/contact"
              className="mt-9 inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
            >
              Start an order
            </Link>
          </div>
        </div>
      </section>
      <BakehouseExtras>
        <BakehouseMore />
      </BakehouseExtras>
      <EditorialGallery
        eyebrow="Make It Your Range"
        title="Bakes for Your Kind of Service"
        intro="Start with the occasion, then explore the breads and pastries that belong there."
        scenes={[
          {
            image: editorialImages["restaurant-table"],
            title: "For the Table",
            description:
              "Choose contrasting shapes and textures to create a thoughtful restaurant bread basket.",
          },
          {
            image: editorialImages["coffee-service"],
            title: "For the Coffee Counter",
            description:
              "A balanced pastry selection offers familiar favourites alongside something a little different.",
          },
          {
            image: editorialImages["grill-counter"],
            title: "For the Grill",
            description:
              "Soft, flexible flatbreads provide a good starting point for wraps, dips and grilled dishes.",
          },
        ]}
      />
    </>
  );
}
