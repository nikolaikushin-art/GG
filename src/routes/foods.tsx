import { FoodsMore } from "@/components/NewSections";
import { FoodsExtras } from "@/components/PageSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import foodsHero from "@/assets/foods-table-hero.jpg";
import { editorialImages, productImages } from "@/lib/photography";
import { restaurantBread } from "@/lib/images";
import { newEditorialImages } from "@/lib/new-editorial-photography";
const sectorPhotos = ["restaurant-table", "grill-counter", "coffee-service", "retail-shelves"];
const menuPhotos = [
  "pain-au-chocolat",
  "cinnamon-roll",
  "focaccia",
  "turkish-pide",
  "victoria-sponge",
  "wholemeal-loaf",
];

export const Route = createFileRoute("/foods")({
  head: () => ({
    meta: [
      { title: "Foods & Sectors We Supply | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "Bread and bakes for restaurants, kebab houses, cafés, retailers and wholesalers across London.",
      },
      { property: "og:title", content: "Foods & Sectors We Supply | Golden Grain Bakehouse" },
      {
        property: "og:description",
        content:
          "Bread and bakes for restaurants, kebab houses, cafés, retailers and wholesalers across London.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

const sectors = [
  {
    t: "Restaurants & Hotels",
    d: "Table breads, sourdough, focaccia and dinner rolls to set the tone before the first course arrives. We match size and crumb to your menu, and bake to your service times so bread lands warm.",
    items: ["Sourdough Boule", "Focaccia", "Ciabatta", "Brioche Buns", "Dinner Rolls"],
    cat: "continental",
  },
  {
    t: "Kebab Houses & Grills",
    d: "Authentic flatbreads baked to order – the backbone of London’s late-night food scene. Tandoor and stone-deck lines are baked through the night.",
    items: ["Pitta", "Naan", "Lavash", "Turkish Pide", "Barbari", "Roghani"],
    cat: "flatbreads",
  },
  {
    t: "Cafés & Coffee Shops",
    d: "All-butter croissants, muffins, scones and cinnamon rolls your regulars queue for. Delivered baked, or part-baked so you can finish them off in your own oven.",
    items: ["Croissants", "Scones", "Muffins", "Cinnamon Rolls", "Chelsea Buns"],
    cat: "pastries",
  },
  {
    t: "Shops & Wholesalers",
    d: "Consistent packaged loaves and rolls with dependable shelf life and next-morning delivery. Own-label wrapping and date coding available on request.",
    items: ["White Sliced", "Wholemeal", "Rolls", "Baps", "Buns"],
    cat: "loaves",
  },
];

const menus: [string, string, string][] = [
  [
    "Breakfast & Coffee",
    "The counter fillers: all-butter croissants, pain au chocolat, scones, muffins and cinnamon rolls.",
    "pastries",
  ],
  [
    "Lunch & Grab-and-Go",
    "Sandwich-ready rolls, buns and baps, plus soft flatbreads for wraps and kebabs, boxed for the lunchtime rush.",
    "rolls-buns",
  ],
  [
    "Dinner Service",
    "Bread that arrives before the first course: sourdough, focaccia, ciabatta and soft dinner rolls for the table.",
    "continental",
  ],
  [
    "Late Night & Grills",
    "The flatbread shift: pitta, naan, lavash, kulcha and pide, baked through the night and stacked warm.",
    "flatbreads",
  ],
  [
    "Afternoon Tea & Sweets",
    "Victoria sponge, carrot cake, doughnuts and pistachio baklava for the cake stand and the display fridge.",
    "cakes-sweets",
  ],
  [
    "Bread & Sandwich Trade",
    "Sliced tins, granary, bloomer and baguette – the loaves behind a good sandwich counter.",
    "loaves",
  ],
];

function Page() {
  return (
    <>
      <PageHero
        eyebrow="Who We Feed"
        title="Foods & Sectors"
        variant="split"
        cta={{ to: "/contact", label: "Speak to the order desk" }}
        image={foodsHero}
        intro="Whatever’s on your menu, there’s a Golden Grain bake to go with it."
      />

      <div className="mx-auto max-w-7xl space-y-16 px-4 py-20">
        {sectors.map((s, i) => (
          <section key={s.t} className="grid items-center gap-10 md:grid-cols-2">
            <img
              src={editorialImages[sectorPhotos[i] ?? ""]}
              alt={s.t}
              width={1200}
              height={800}
              loading="lazy"
              className={`aspect-[4/3] w-full rounded-sm object-cover shadow-elegant ${i % 2 ? "md:order-2" : ""}`}
            />
            <div>
              <p className="eyebrow">Sector {i + 1}</p>
              <h2 className="mt-2 text-3xl text-primary">{s.t}</h2>
              <p className="mt-4 font-serif text-xl text-foreground/80">{s.d}</p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {s.items.map((x) => (
                  <li key={x} className="border border-gold/50 bg-card px-3 py-1 font-serif">
                    {x}
                  </li>
                ))}
              </ul>
              <Link
                to="/bakehouse/$category"
                params={{ category: s.cat }}
                className="mt-6 inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.2em] text-primary"
              >
                See the range
              </Link>
            </div>
          </section>
        ))}
      </div>

      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={restaurantBread}
          alt="Baskets of bread and flatbreads on a restaurant pass"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-40"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-transparent" />
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="max-w-xl">
            <p className="eyebrow !text-gold">On the Pass</p>
            <h2 className="mt-3 text-4xl">What Lands on Your Counter</h2>
            <p className="mt-5 font-serif text-xl text-primary-foreground/85">
              Every order is packed by range and by drop, so the bread you need is the first thing
              off the van. Crates come back with the next delivery – nothing to store, nothing to
              throw away.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {[
                "Baked fresh overnight",
                "Part-baked or frozen lines",
                "Warm-stacked flatbreads",
                "Own-label wrapping",
                "Allergen sheets with every drop",
                "Crate exchange, no waste",
              ].map((x) => (
                <li key={x} className="border-l-2 border-gold pl-4 font-serif text-lg">
                  {x}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">By the Menu</p>
          <h2 className="mt-3 text-4xl text-primary">Bakes for Every Part of the Day</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {menus.map(([t, d, cat], i) => (
            <Link
              key={t}
              to="/bakehouse/$category"
              params={{ category: cat }}
              className="group overflow-hidden rounded-sm border border-border bg-card p-7 transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
            >
              <img
                src={productImages[menuPhotos[i] ?? ""]}
                alt={t}
                width={480}
                height={480}
                loading="lazy"
                className="mb-6 aspect-[4/3] w-full object-cover"
              />
              <p className="font-display text-lg text-primary group-hover:text-gold-deep">{t}</p>
              <p className="mt-3 font-serif text-lg text-muted-foreground">{d}</p>
              <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold-deep">
                Browse the range →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-plum text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.2fr_1fr]">
            <div>
              <p className="eyebrow !text-gold">Volumes &amp; Minimums</p>
              <h2 className="mt-3 text-3xl md:text-4xl">From One Tray to Ten Thousand</h2>
              <p className="mt-5 font-serif text-xl text-primary-foreground/85">
                We supply the single café round the corner and the wholesaler loading three pallets.
                Minimums are kept modest so independents can order with us, and standing orders mean
                you do not have to repeat the same order every week.
              </p>
            </div>
            <dl className="grid gap-6 sm:grid-cols-2">
              {[
                ["Order cut-off", "4pm for next-morning delivery"],
                ["Delivery days", "Seven days a week"],
                ["Minimum order", "Modest – ask the desk"],
                ["Lead time", "Same-week for new lines"],
              ].map(([t, d]) => (
                <div key={t} className="border-t-2 border-gold pt-3">
                  <dt className="font-display text-sm uppercase tracking-[0.18em] text-gold">
                    {t}
                  </dt>
                  <dd className="mt-2 font-serif text-xl">{d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-20 text-center">
        <p className="eyebrow">Next</p>
        <h2 className="mt-3 text-3xl text-primary">Tell Us What You Need on Your Counter</h2>
        <p className="mx-auto mt-4 max-w-xl font-serif text-xl text-muted-foreground">
          Send us your menu or your wish list and we’ll quote, sample and schedule a drop.
        </p>
        <Link
          to="/contact"
          className="mt-8 inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
        >
          Speak to our order desk
        </Link>
      </section>
      <EditorialGallery
        eyebrow="Building Your Menu"
        title="Texture Makes the Difference"
        intro="Think beyond a product name: consider how the bread will cut, toast, wrap and hold its filling."
        scenes={[
          {
            image: editorialImages["butter-lamination"],
            title: "A Crisp Start",
            description:
              "Laminated pastry adds a delicate contrast to coffee service and breakfast counters.",
          },
          {
            image: newEditorialImages.flatbreads,
            title: "A Basket of Possibilities",
            description:
              "Ridged barbari, quilted pide and thin lavash offer different textures for sharing, dipping and wrapping. Accompaniments are serving suggestions.",
          },
          {
            image: editorialImages["bread-wrapping"],
            title: "Ready for Your Counter",
            description:
              "Discuss presentation and packaging alongside your chosen range, before confirming an order.",
          },
        ]}
      />
      <FoodsExtras>
        <FoodsMore />
      </FoodsExtras>
    </>
  );
}
