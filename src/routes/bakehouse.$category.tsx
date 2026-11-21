import { CategoryMore } from "@/components/NewSections";
import { CategoryExtras } from "@/components/PageSections";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { categories } from "@/lib/catalogue";
import { FromPrice } from "@/components/ProductPricing";
import { PageHero } from "@/components/PageHero";
import { productImages } from "@/lib/photography";
import { categoryImages } from "@/lib/images";

export const Route = createFileRoute("/bakehouse/$category")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.category);
    if (!category) throw notFound();
    return { category };
  },
  head: ({ loaderData }) => {
    const t = loaderData
      ? `${loaderData.category.name} | Golden Grain Bakehouse`
      : "Range not found | Golden Grain";
    const d = loaderData?.category.intro ?? "Golden Grain Bakehouse range.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "website" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { category } = Route.useLoaderData();
  return (
    <>
      <PageHero
        variant={
          (["split", "banner", "left", "tab", "centre", "split"] as const)[
            categories.findIndex((c) => c.slug === category.slug) % 6
          ]!
        }
        cta={{ to: "/contact", label: "Enquire about this range" }}
        eyebrow={category.strap}
        title={category.name}
        intro={category.intro}
        image={categoryImages[category.slug]}
      />
      <div className="mx-auto max-w-7xl px-4 py-16">
        <nav className="mb-12 flex flex-wrap gap-2">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/bakehouse/$category"
              params={{ category: c.slug }}
              className="rounded-sm border border-border px-4 py-2 font-display text-xs uppercase tracking-[0.15em] text-muted-foreground hover:border-gold"
              activeProps={{ className: "!border-gold bg-primary !text-gold" }}
            >
              {c.name}
            </Link>
          ))}
        </nav>
        <div className="space-y-10">
          {category.products.map((p, i) => (
            <article
              id={p.slug}
              key={p.slug}
              className={`grid scroll-mt-40 items-center gap-8 border-b border-border pb-10 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}
            >
              <div className="aspect-[4/3] overflow-hidden rounded-sm">
                <img
                  src={productImages[p.slug]}
                  alt={p.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <p className="eyebrow">
                  No. {String(i + 1).padStart(2, "0")} · {p.origin}
                </p>
                <h2 className="mt-2 text-3xl text-primary">{p.name}</h2>
                <p className="mt-4 font-serif text-xl text-foreground/80">{p.note}</p>
                <dl className="mt-6 grid grid-cols-3 gap-4 border-t border-border pt-5 text-sm">
                  <div>
                    <dt className="text-muted-foreground">Supplied</dt>
                    <dd className="font-display text-primary">Fresh / Frozen</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Packed</dt>
                    <dd className="font-display text-primary">Trade cases</dd>
                  </div>
                  <div>
                    <dt className="text-muted-foreground">Allergens</dt>
                    <dd className="font-display text-primary">On request</dd>
                  </div>
                </dl>
                <Link
                  to="/bakehouse/$category/$product"
                  params={{ category: category.slug, product: p.slug }}
                  className="mr-3 mt-6 inline-block border border-gold px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-primary hover:bg-gold/10"
                >
                  Full details
                </Link>
                <Link
                  to="/contact"
                  className="mt-6 inline-block bg-gold-gradient px-6 py-3 font-display text-xs uppercase tracking-[0.2em] text-accent-foreground"
                >
                  Enquire about this line
                </Link>
                <FromPrice slug={p.slug} />
              </div>
            </article>
          ))}
        </div>
      </div>
      <CategoryExtras slug={category.slug}>
        <CategoryMore slug={category.slug} />
      </CategoryExtras>
    </>
  );
}
