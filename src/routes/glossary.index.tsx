import { GlossaryExtras } from "@/components/PageSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { glossaryEntries, glossaryGroups } from "@/lib/glossary-pages";
import { looks } from "@/lib/glossary-visuals";
import { PageHero } from "@/components/PageHero";
import { editorialImages } from "@/lib/photography";
import { scoringLoaf } from "@/lib/images";

export const Route = createFileRoute("/glossary/")({
  head: () => ({
    meta: [
      { title: "Baker’s Glossary | Golden Grain Bakehouse" },
      {
        name: "description",
        content: "From bloomer to börek – a plain-English glossary of bread and baking terms.",
      },
      { property: "og:title", content: "Baker’s Glossary | Golden Grain Bakehouse" },
      {
        property: "og:description",
        content: "From bloomer to börek – a plain-English glossary of bread and baking terms.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const measures = [
  ["Tandoor", "Over 400°C", "Naan, taftoon and kulcha slapped against the clay wall."],
  ["Stone deck", "230–260°C", "Blooms, baguettes and world breads baked directly on the stone."],
  ["Convection", "180–200°C", "Cakes, scones and viennoiserie, with fans for an even bake."],
  ["Proving", "24–27°C", "Where shaped dough rests and rises before the oven."],
  ["Cold retard", "4–8°C", "An overnight chill that builds flavour in sourdough."],
];

const methods = [
  ["Straight dough", "Everything mixed at once. Quick, honest and the backbone of the tin loaf."],
  [
    "Long fermentation",
    "Dough proved slowly, often overnight, so flavour and keeping both improve.",
  ],
  [
    "Preferment",
    "A piece of the dough made the day before – levain, poolish or biga – then built into the final mix.",
  ],
  [
    "Lamination",
    "Butter folded into dough again and again to make the layers in croissants and puff pastry.",
  ],
  [
    "Stone baking",
    "Baked directly on a hot deck for a crisp base and strong oven spring on baguettes, pide and flatbreads.",
  ],
  [
    "Steam baking",
    "A burst of steam at the start of the bake for a crisp, glossy crust on baguettes and blooms.",
  ],
];

function Page() {
  return (
    <>
      <PageHero
        variant="left"
        image={editorialImages["bakers-tools"]}
        eyebrow="The Baker’s Lexicon"
        title="Glossary"
        intro="Bloomers, barm cakes and börek – the language of the bakehouse, explained in plain English."
      />

      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={scoringLoaf}
          alt="A baker scoring a floured sourdough loaf"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="mx-auto max-w-4xl px-4 py-20 text-center">
          <p className="eyebrow !text-gold">{glossaryEntries.length} Terms, No Nonsense</p>
          <p className="mt-4 font-serif text-2xl leading-relaxed text-primary-foreground/85">
            Bakers talk a lot. Here’s what we actually mean – useful whether you’re writing a menu,
            checking a spec sheet or arguing about cream first.
          </p>
        </div>
      </section>

      <div className="bg-[#faf5ec]">
        <section className="mx-auto max-w-7xl px-4 py-16 md:py-20">
          <nav aria-label="Glossary groups" className="mb-12 flex flex-wrap justify-center gap-3">
            {glossaryGroups.map((grp) => (
              <span
                key={grp}
                className="rounded-full border border-[#9a7524]/50 px-5 py-2 font-display text-xs uppercase tracking-[0.18em] text-[#9a7524]"
              >
                {grp} · {glossaryEntries.filter((g) => g.group === grp).length}
              </span>
            ))}
          </nav>
          {/* Terms are laid out in one continuous grid, three to a row on desktop, so no row is ever left short. */}
          <div className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
            {glossaryEntries.map((g) => (
              <Link
                key={g.slug}
                to="/glossary/$term"
                params={{ term: g.slug }}
                className="group flex flex-col"
              >
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    src={looks[g.slug]!.photos.hero}
                    alt=""
                    width={1000}
                    height={1250}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <p className="mt-5 font-display text-xs uppercase tracking-[0.22em] text-[#9a7524]">
                  {g.group}
                </p>
                <h3 className="mt-2 text-4xl text-[#2a1b10]">{g.term}</h3>
                <div className="my-4 h-px bg-[#2a1b10]/40" />
                <p className="line-clamp-3 flex-1 font-serif text-lg text-[#2a1b10]/80">{g.def}</p>
                <span className="mt-5 inline-block self-start rounded-full bg-[#1d130b] px-7 py-2.5 font-display text-sm text-[#f6ead3]">
                  Read more
                </span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="text-center">
            <p className="eyebrow">In the Oven</p>
            <h2 className="mt-3 text-3xl text-primary">How We Bake Each Range</h2>
            <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
          </div>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {methods.map(([t, d]) => (
              <div key={t} className="border-t-2 border-gold bg-card p-6">
                <p className="font-display text-lg text-primary">{t}</p>
                <p className="mt-2 font-serif text-lg text-muted-foreground">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20">
        <div className="text-center">
          <p className="eyebrow">Heat &amp; Time</p>
          <h2 className="mt-3 text-3xl text-primary">Baker’s Measures</h2>
        </div>
        <div className="mt-10 overflow-x-auto rounded-sm border border-border">
          <table className="w-full text-left">
            <thead className="bg-primary text-primary-foreground">
              <tr>
                {["Oven / Stage", "Working Heat", "What It’s For"].map((h) => (
                  <th
                    key={h}
                    className="px-5 py-3 font-display text-xs uppercase tracking-[0.18em]"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-card">
              {measures.map(([a, b, c]) => (
                <tr key={a}>
                  <td className="px-5 py-4 font-display text-base text-primary">{a}</td>
                  <td className="whitespace-nowrap px-5 py-4 font-serif text-lg text-gold-deep">
                    {b}
                  </td>
                  <td className="px-5 py-4 font-serif text-lg text-muted-foreground">{c}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-8 text-center font-serif text-lg text-muted-foreground">
          Looking for a word we’ve missed? Tell the order desk and we’ll add it.
        </p>
        <div className="mt-6 text-center">
          <Link
            to="/contact"
            className="inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.22em] text-primary"
          >
            Ask a baker
          </Link>
        </div>
      </section>
      <GlossaryExtras />
      <EditorialGallery
        eyebrow="A Visual Baker\u2019s Notebook"
        title="See the Craft Behind the Words"
        intro="Three familiar baking terms, seen up close rather than left on a specification sheet."
        scenes={[
          {
            image: editorialImages["levain-jar"],
            title: "Levain",
            description:
              "A lively mixture of flour and water, cultivated as a natural starter for sourdough.",
          },
          {
            image: editorialImages["pastry-cutting"],
            title: "Lamination",
            description:
              "Distinct layers of dough and butter separate in the oven to form flaky pastry.",
          },
          {
            image: editorialImages["cooling-rack"],
            title: "Crumb & Crust",
            description:
              "A loaf continues to settle as it cools; the inside texture and outer shell each have their own character.",
          },
        ]}
      />
    </>
  );
}
