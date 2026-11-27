import { FromPrice, ProductPricing } from "@/components/ProductPricing";
import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Check, Utensils } from "lucide-react";
import { categories } from "@/lib/catalogue";
import { productDetails } from "@/lib/product-details";
import { productImages } from "@/lib/photography";
import { servingImages } from "@/lib/serving-photography";

export const Route = createFileRoute("/bakehouse/$category_/$product")({
  loader: ({ params }) => {
    const category = categories.find((c) => c.slug === params.category);
    const product = category?.products.find((p) => p.slug === params.product);
    if (!category || !product) throw notFound();
    return { category, product, detail: productDetails[product.slug] ?? null };
  },
  head: ({ loaderData }) => {
    const t = loaderData
      ? `${loaderData.product.name} – Wholesale | Golden Grain Bakehouse`
      : "Product unavailable | Golden Grain";
    const d = loaderData
      ? (loaderData.detail?.description ??
        `${loaderData.product.name}: ${loaderData.product.note} Baked in East London.`)
      : "Golden Grain Bakehouse product.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "product" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { category, product, detail } = Route.useLoaderData();
  const img = productImages[product.slug];
  const sameRange = category.products.filter((p) => p.slug !== product.slug);
  const fill = categories
    .filter((c) => c.slug !== category.slug)
    .flatMap((c) => c.products.map((p) => ({ p, c })))
    .filter(({ p }) => productImages[p.slug])
    .slice(0, 4)
    .map(({ p, c }) => ({ ...p, rangeSlug: c.slug }));
  const others = [...sameRange.map((p) => ({ ...p, rangeSlug: category.slug })), ...fill].slice(
    0,
    4,
  );
  const filled = sameRange.length < 4;
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 md:py-24 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <nav className="text-xs uppercase tracking-[0.2em] text-primary-foreground/60">
              <Link to="/bakehouse" className="hover:text-gold">
                Bakehouse
              </Link>{" "}
              /{" "}
              <Link
                to="/bakehouse/$category"
                params={{ category: category.slug }}
                className="hover:text-gold"
              >
                {category.name}
              </Link>
            </nav>
            <p className="eyebrow mt-8 !text-gold">{product.origin}</p>
            <h1 className="mt-3 max-w-3xl text-5xl text-gold-gradient md:text-7xl">
              {product.name}
            </h1>
            <p className="mt-4 font-serif text-2xl italic text-primary-foreground/85">
              {detail?.tagline ?? product.note}
            </p>
            {detail?.description && (
              <p className="mt-6 max-w-2xl font-serif text-xl text-primary-foreground/75">
                {detail.description}
              </p>
            )}
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/contact"
                className="bg-gold-gradient px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-elegant"
              >
                Request trade price
              </Link>
              <Link
                to="/wholesale"
                className="border border-gold/60 px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold/10"
              >
                Open an account
              </Link>
            </div>
            <FromPrice slug={product.slug} tone="dark" className="mt-6" />
          </div>
          <img
            src={img}
            alt={product.name}
            width={480}
            height={480}
            className="aspect-square w-full max-w-lg justify-self-center object-cover shadow-elegant ring-1 ring-gold/40 lg:max-w-none"
          />
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-4 py-16">
        <div>
          <p className="eyebrow">The Baker’s Selection</p>
          <h2 className="mt-3 text-3xl text-primary">A Closer Look at {product.name}</h2>
          {detail && (
            <p className="mt-5 font-serif text-xl text-muted-foreground">{product.note}</p>
          )}
          <dl className="mt-8 divide-y divide-border border-y border-border">
            {[
              ["Range", category.name],
              ["Inspiration", product.origin],
            ].map(([label, value]) => (
              <div key={label} className="grid gap-2 py-4 sm:grid-cols-2">
                <dt className="font-display text-sm text-primary">{label}</dt>
                <dd className="font-serif text-lg text-muted-foreground">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {detail && (
        <>
          <section className="mx-auto grid max-w-7xl gap-8 px-4 py-20 lg:grid-cols-3">
            <div className="rounded-sm border border-border bg-card p-8 shadow-elegant lg:col-span-2">
              <p className="eyebrow">Product Specification</p>
              <h2 className="mt-2 text-3xl text-primary">At a Glance</h2>
              <dl className="mt-6 divide-y divide-border">
                {detail.specs.map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-3 sm:grid-cols-[200px_1fr]">
                    <dt className="font-display text-sm text-gold-deep">{k}</dt>
                    <dd className="font-serif text-lg">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="rounded-sm bg-primary p-8 text-primary-foreground">
              <p className="eyebrow !text-gold">What Goes In</p>
              <h2 className="mt-2 text-3xl">Ingredients</h2>
              <ul className="mt-6 space-y-3">
                {detail.ingredients.map((i) => (
                  <li key={i} className="flex items-start gap-3 font-serif text-lg">
                    <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                    {i}
                  </li>
                ))}
              </ul>
              <p className="mt-6 border-t border-primary-foreground/15 pt-4 text-sm text-primary-foreground/60">
                Full allergen specifications available on request.
              </p>
            </div>
          </section>
        </>
      )}

      {servingImages[product.slug] && (
        <section className="border-y border-border bg-secondary">
          <div
            className={`mx-auto grid items-center gap-10 px-4 py-16 ${detail ? "max-w-7xl md:grid-cols-2" : "max-w-3xl"}`}
          >
            <img
              src={servingImages[product.slug]}
              alt={`${product.name} serving suggestion`}
              width={960}
              height={960}
              loading="lazy"
              className="aspect-[4/3] w-full object-cover"
            />
            {detail && (
              <div>
                <p className="eyebrow">On the Table</p>
                <h2 className="mt-3 text-3xl text-primary">Enjoying {product.name}</h2>
                <p className="mt-5 font-serif text-xl text-muted-foreground">
                  {detail.serving.join(" · ")}
                </p>
              </div>
            )}
          </div>
        </section>
      )}

      <ProductPricing slug={product.slug} />

      {others.length > 0 && (
        <section className="mx-auto max-w-7xl px-4 py-20">
          <h2 className="text-3xl text-primary">
            {filled ? "More from the Bakehouse" : `More from ${category.name}`}
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-5 md:grid-cols-4">
            {others.map((p) => (
              <Link
                key={p.slug}
                to="/bakehouse/$category/$product"
                params={{ category: p.rangeSlug, product: p.slug }}
                className="group rounded-sm border border-border bg-card hover:border-gold hover:shadow-elegant"
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
                <p className="p-4 font-display text-sm text-primary group-hover:text-gold-deep">
                  {p.name}
                </p>
                <div className="px-4 pb-4">
                  <FromPrice slug={p.slug} className="!mt-0" />
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
