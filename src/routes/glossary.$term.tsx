import { createFileRoute, notFound } from "@tanstack/react-router";
import { glossaryBySlug, glossaryEntries } from "@/lib/glossary-pages";
import { allProducts } from "@/lib/catalogue";
import { looks } from "@/lib/glossary-visuals";
import {
  Faq,
  Facts,
  Foot,
  Hero,
  Pull,
  Range,
  Steps,
  Story,
  type Ctx,
} from "@/components/GlossarySections";

export const Route = createFileRoute("/glossary/$term")({
  loader: ({ params }) => {
    const entry = glossaryBySlug[params.term];
    if (!entry) throw notFound();
    return { entry };
  },
  head: ({ loaderData }) => {
    const t = loaderData
      ? `${loaderData.entry.term} – Baker’s Glossary | Golden Grain Bakehouse`
      : "Term not found | Golden Grain Bakehouse";
    const d = loaderData ? loaderData.entry.def : "Baker’s glossary term.";
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
  const { entry } = Route.useLoaderData();
  const look = looks[entry.slug]!;
  const idx = glossaryEntries.findIndex((x) => x.slug === entry.slug);
  const prev = glossaryEntries[(idx - 1 + glossaryEntries.length) % glossaryEntries.length]!;
  const next = glossaryEntries[(idx + 1) % glossaryEntries.length]!;
  const products = entry.products
    .map((s: string) => allProducts.find((p) => p.slug === s))
    .filter(Boolean) as typeof allProducts;
  const c: Ctx = {
    e: entry,
    p: look.palette,
    ph: look.photos,
    products,
    related: [],
    prev,
    next,
    v: look.variant,
  };

  // Backgrounds alternate down the page, so adjacent sections never share a ground.
  let toggle = look.hero % 2 === 0;
  const tone = () => {
    toggle = !toggle;
    return toggle ? ("band" as const) : ("light" as const);
  };
  const removed = ["mosaic", "table", "notes"];
  const body = look.sequence
    .filter((k) => !removed.includes(k))
    .map((key, pos) => {
      const v = (look.variant + pos) % 3;
      switch (key) {
        case "story":
          return <Story key={key} c={c} v={v} tone={tone()} />;
        case "steps":
          return <Steps key={key} c={c} v={v} tone={tone()} />;
        case "faq":
          return <Faq key={key} c={c} v={v} tone={tone()} />;
        case "pull":
          return <Pull key={key} c={c} v={v} />;
        default:
          return null;
      }
    });
  return (
    <>
      <Hero c={c} kind={look.hero} />
      <Facts c={c} tone="band" />
      {body}
      <Range c={c} tone="light" />
      <Foot c={c} />
    </>
  );
}
