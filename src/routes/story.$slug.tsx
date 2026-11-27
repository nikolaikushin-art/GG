import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { stories, storyBySlug } from "@/lib/stories-data";
import { allProducts } from "@/lib/catalogue";
import { heroOven } from "@/lib/images";

export const Route = createFileRoute("/story/$slug")({
  loader: ({ params }) => {
    const story = storyBySlug[params.slug];
    if (!story) throw notFound();
    return { story };
  },
  head: ({ loaderData }) => {
    const t = loaderData
      ? `${loaderData.story.title} | Golden Grain Bakehouse`
      : "Story Unavailable | Golden Grain";
    const d =
      loaderData?.story.text ||
      "A closer look at the breads, pastries and people of Golden Grain Bakehouse, East London.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: Page,
});

function Page() {
  const { story } = Route.useLoaderData();
  const i = stories.findIndex((x) => x.slug === story.slug);
  const n = stories.length;
  const at = (k: number) => stories[(i + k + n) % n]!;
  const lower = story.title.toLowerCase();
  const product = allProducts.find(
    (p) =>
      lower.includes(p.name.toLowerCase().replace(/ \/ .*/, "")) ||
      p.name.toLowerCase().includes(lower),
  );
  const seen = new Set<string | undefined>([story.src]);
  const more: typeof stories = [];
  for (let k = 1; k < n && more.length < 3; k++) {
    const c = at(k);
    if (seen.has(c.src)) continue;
    seen.add(c.src);
    more.push(c);
  }

  return (
    <>
      <section className="relative isolate flex min-h-[70vh] items-end overflow-hidden text-white">
        <img
          src={story.src ?? heroOven}
          alt={story.title}
          width={1800}
          height={1100}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-black/80 via-black/35 to-black/10" />
        <div className="mx-auto w-full max-w-7xl px-4 pb-14 pt-40">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/75">
            {product ? `${product.category.name} · ${product.origin}` : "From the bakehouse"}
          </p>
          <h1 className="mt-4 max-w-4xl break-words text-3xl min-[400px]:text-4xl sm:text-5xl md:text-7xl">
            {story.title}
          </h1>
          {story.text && (
            <p className="mt-5 max-w-2xl font-serif text-2xl leading-relaxed text-white/90">
              {story.text}
            </p>
          )}
          <p className="mt-8 text-xs uppercase tracking-[0.2em] text-white/60">
            Illustrative photograph
          </p>
        </div>
      </section>

      {product && (
        <section className="mx-auto max-w-3xl px-4 py-16 text-center">
          <p className="eyebrow">In the range</p>
          <h2 className="mt-3 text-3xl text-primary">{product.name}</h2>
          <p className="mt-4 font-serif text-xl text-muted-foreground">{product.note}</p>
          <Link
            to="/bakehouse/$category/$product"
            params={{ category: product.category.slug, product: product.slug }}
            className="mt-8 inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.2em] text-primary"
          >
            See {product.name} →
          </Link>
        </section>
      )}

      <section className="border-t border-border bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-16">
          <p className="eyebrow">More from the bakehouse</p>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {more.map((m) => (
              <Link
                key={m.slug}
                to="/story/$slug"
                params={{ slug: m.slug }}
                className="group block"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={m.src ?? heroOven}
                    alt={m.title}
                    width={1000}
                    height={750}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-4 font-display text-2xl text-primary group-hover:text-gold-deep">
                  {m.title}
                </p>
                {m.text && (
                  <p className="mt-2 line-clamp-2 font-serif text-lg text-muted-foreground">
                    {m.text}
                  </p>
                )}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
