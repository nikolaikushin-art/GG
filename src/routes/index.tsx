import { HomeMore } from "@/components/NewSections";
import {
  TodaysBake,
  BakersHands,
  SourdoughSpotlight,
  HonestIngredients,
  FlatbreadHeritage,
  PastryCounter,
  TurkishTable,
  SampleBox,
  DispatchFloor,
  ShopWindow,
  ShelfReady,
  BakersNotebook,
  Testimonials,
  LunchMenuIdeas,
  CoffeeAndCroissant,
  Faq,
  FinalCta,
} from "@/components/ExtraSections";
import { HomeExtras } from "@/components/PageSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Wheat, Flame, Truck, Award } from "lucide-react";
import { editorialImages, productImages } from "@/lib/photography";
import { storySlug } from "@/lib/story-slug";
import { categories } from "@/lib/catalogue";
import {
  categoryImages,
  heroOven,
  bakersNight,
  bakerySpread,
  tandoorFlatbread,
} from "@/lib/images";
import { newEditorialImages } from "@/lib/new-editorial-photography";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Grain Bakehouse – Wholesale Bakery, East London" },
      {
        name: "description",
        content:
          "Bread, pastries and cakes baked overnight in London for shops, restaurants, cafés and grills.",
      },
      { property: "og:title", content: "Golden Grain Bakehouse – Wholesale Bakery, East London" },
      {
        property: "og:description",
        content:
          "Bread, pastries and cakes baked overnight in London for shops, restaurants, cafés and grills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const totalProducts = categories.reduce((n, c) => n + c.products.length, 0);

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <img
          src={heroOven}
          alt="Wood-fired oven with fresh sourdough loaves"
          width={1600}
          height={1008}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/10" />
        <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-start justify-start px-4 pb-16 pt-10 lg:min-h-[600px] lg:pt-12">
          <div className="max-w-2xl">
            <p className="eyebrow !text-gold">Wholesale Bakery · London</p>
            <h1 className="mt-5 text-5xl leading-tight md:text-7xl">
              <span className="text-gold-gradient">Proper bread,</span>
              <br />
              baked while London sleeps.
            </h1>
            <p className="mt-6 max-w-lg font-serif text-xl text-primary-foreground/80">
              From the humble tin loaf to Persian sangak, Golden Grain supplies the capital’s shops,
              cafés, restaurants and kebab houses – fresh every morning.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/bakehouse"
                className="bg-gold-gradient px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-elegant"
              >
                Explore the Bakehouse
              </Link>
              <Link
                to="/trade"
                className="border border-gold/60 px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold/10"
              >
                Open a Trade Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            [Flame, "Baked Overnight", "Ready for early-morning delivery"],
            [Truck, "Next-Morning Delivery", "London & Home Counties"],
            [Wheat, "Specifications", "Ingredients and allergens on request"],
            [Award, `${totalProducts} Product Lines`, "Breads, pastries and cakes"],
          ].map(([I, t, d]) => {
            const Icon = I as typeof Flame;
            return (
              <div key={t as string} className="flex items-start gap-3">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                <div>
                  <p className="font-display text-sm text-primary">{t as string}</p>
                  <p className="font-serif text-muted-foreground">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">The Bakehouse</p>
          <h2 className="mt-3 text-4xl text-primary">Our Ranges</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/bakehouse/$category"
              params={{ category: c.slug }}
              className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={categoryImages[c.slug]}
                  alt={c.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-primary group-hover:text-gold-deep">{c.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-muted-foreground">{c.strap}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-deep">
                  {c.products.length} products →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-24 lg:grid-cols-2">
          <div className="relative">
            <img
              src={editorialImages["butter-lamination"]}
              alt="Butter folded into layered pastry dough"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-square w-full rounded-sm object-cover shadow-elegant"
            />
            <div className="absolute -bottom-6 right-0 hidden border border-gold bg-primary px-8 py-6 text-center shadow-elegant md:block">
              <p className="font-display text-sm uppercase tracking-[0.3em] text-primary-foreground">
                Baked in
              </p>
              <p className="font-display text-3xl text-gold-gradient">London</p>
            </div>
          </div>
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-4xl text-primary">A London Bakehouse</h2>
            <p className="mt-6 font-serif text-xl leading-relaxed text-foreground/80">
              Golden Grain Bakehouse bakes bread, pastries and cakes for the trade, from the tin
              loaf to Persian sangak. The range draws on British, continental and world baking
              traditions, made overnight and delivered before opening.
            </p>
            <Link
              to="/about"
              className="mt-8 inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.22em] text-primary"
            >
              Read our story
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">From Flour to Front Door</p>
          <h2 className="mt-3 text-4xl text-primary">How Your Bread Is Made</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl text-muted-foreground">
            Every night, the same careful ritual – so that every morning, your counter is full.
          </p>
        </div>
        <ol className="relative mt-16 grid gap-10 md:grid-cols-5">
          <div className="absolute left-0 right-0 top-7 hidden h-px bg-gold/40 md:block" />
          {[
            [
              "4pm",
              "Orders In",
              "Your order lands with our desk and is scheduled for tonight’s bake.",
            ],
            [
              "8pm",
              "Mixing",
              "British flour, water, salt and time. Doughs rest and ferment slowly.",
            ],
            ["Midnight", "Shaping", "Every loaf and pastry is shaped and finished by hand."],
            ["2am", "Baking", "Into the ovens – stone decks, tandoor and convection."],
            ["5am", "Delivered", "Our vans reach your door before you’ve turned the sign."],
          ].map(([t, h, d], i) => (
            <li key={h} className="relative text-center">
              <div className="relative mx-auto grid h-14 w-14 place-items-center rounded-full border border-gold bg-primary font-display text-gold">
                {i + 1}
              </div>
              <p className="mt-4 eyebrow">{t}</p>
              <p className="mt-1 font-display text-lg text-primary">{h}</p>
              <p className="mt-2 font-serif text-lg text-muted-foreground">{d}</p>
            </li>
          ))}
        </ol>
      </section>

      <section className="relative isolate overflow-hidden bg-plum text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="text-center">
            <p className="eyebrow !text-gold">Who We Feed</p>
            <h2 className="mt-3 text-4xl">Baking for Every Kind of Kitchen</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              ["Restaurants & Hotels", "Sourdough, focaccia and dinner rolls for the table."],
              ["Kebab Houses & Grills", "Pitta, naan, lavash and pide, baked to order."],
              ["Cafés & Coffee Shops", "Croissants, scones and muffins for the counter."],
              ["Shops & Wholesalers", "Packaged loaves, rolls and savouries for the shelf."],
            ].map(([t, d]) => (
              <Link
                key={t}
                to="/foods"
                className="group border border-gold/30 bg-ink/50 p-7 backdrop-blur transition-colors hover:border-gold"
              >
                <p className="font-display text-lg text-gold">{t}</p>
                <p className="mt-3 font-serif text-lg text-primary-foreground/80">{d}</p>
                <p className="mt-6 text-xs uppercase tracking-[0.2em] text-gold group-hover:underline">
                  Learn more →
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">Inside the Bakehouse</p>
          <h2 className="mt-3 text-4xl text-primary md:text-5xl">
            Made by Hand, Through the Night
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-xl text-muted-foreground">
            From the first mix in the evening to the last tray out at dawn, every loaf, flatbread
            and pastry passes through skilled hands.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {(
            [
              [
                bakersNight,
                "The Night Shift",
                "Dough divided, weighed and shaped by our bakers on long floured benches.",
                "md:col-span-2 md:row-span-2",
              ],
              [
                tandoorFlatbread,
                "Fired in Clay",
                "Naan and Afghan breads blistered against the walls of our tandoors.",
                "",
              ],
              [
                bakerySpread,
                "Sweet Bakes",
                "Viennoiserie, scones and cakes for cafés across the capital.",
                "",
              ],
            ] as const
          ).map(([img, t, d, cls]) => (
            <Link
              key={t}
              to="/story/$slug"
              params={{ slug: storySlug(t) }}
              className={`block ${cls}`}
            >
              <figure className="group relative isolate h-full min-h-[260px] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={img}
                  alt={t}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink via-ink/70 via-45% to-ink/0" />
                <figcaption className="flex h-full flex-col justify-end p-6 text-primary-foreground [text-shadow:0_1px_10px_rgb(0_0_0/0.55)]">
                  <p className="font-display text-xl text-gold">{t}</p>
                  <p className="mt-1 max-w-md font-serif text-lg text-primary-foreground/85">{d}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Signature Bakes</p>
            <h2 className="mt-3 text-4xl text-primary">Five Lines to Start With</h2>
            <p className="mt-6 font-serif text-xl text-foreground/80">
              A few favourites from across the range, a sensible place to begin a first order.
            </p>
            <ul className="mt-8 divide-y divide-border border-y border-border">
              {(
                [
                  ["Farmhouse Bloomer", "loaves"],
                  ["Pebble-baked Sangak", "flatbreads"],
                  ["All-butter Croissant", "pastries"],
                  ["Soft Dinner Roll", "rolls-buns"],
                  ["Victoria Sponge", "cakes-sweets"],
                ] as const
              ).map(([n, c]) => (
                <li key={n}>
                  <Link
                    to="/bakehouse/$category"
                    params={{ category: c }}
                    className="flex items-center justify-between py-4 font-display text-lg text-primary hover:text-gold-deep"
                  >
                    {n}
                    <span className="text-gold-deep">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <img
              src={productImages["farmhouse-bloomer"]}
              alt="Farmhouse bloomer"
              width={1200}
              height={800}
              loading="lazy"
              className="aspect-[3/4] w-full rounded-sm object-cover shadow-elegant"
            />
            <img
              src={productImages["butter-croissant"]}
              alt="All-butter croissant"
              width={1200}
              height={800}
              loading="lazy"
              className="mt-12 aspect-[3/4] w-full rounded-sm object-cover shadow-elegant"
            />
          </div>
        </div>
      </section>

      <section className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 py-24">
          <div className="text-center">
            <p className="eyebrow">Trade Customers</p>
            <h2 className="mt-3 text-4xl text-primary">Working With Us</h2>
          </div>
          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              [
                "Apply for an account",
                "Tell us about your business and delivery postcode. The order desk replies within one working day.",
                "/trade",
              ],
              [
                "Build a quotation",
                "Choose cases from the range and request a written quotation with VAT and delivery confirmed.",
                "/trade",
              ],
              [
                "Check your delivery area",
                "See where our rounds run and how a delivery day works.",
                "/delivery",
              ],
            ].map(([t, d, to]) => (
              <Link
                key={t}
                to={to as "/trade" | "/delivery"}
                className="group flex flex-col border-t-2 border-gold bg-card p-8 shadow-elegant"
              >
                <p className="font-display text-xl text-primary group-hover:text-gold-deep">{t}</p>
                <p className="mt-3 flex-1 font-serif text-xl text-foreground/85">{d}</p>
                <span className="mt-6 inline-block self-start border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.2em] text-primary">
                  Continue
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-24 text-center">
        <p className="eyebrow">Where We Deliver</p>
        <h2 className="mt-3 text-4xl text-primary md:text-5xl">
          Across London &amp; the Home Counties
        </h2>
        <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        <p className="mx-auto mt-6 max-w-2xl font-serif text-xl text-foreground/80">
          Vans leave the bakehouse in the small hours for deliveries across the capital and the Home
          Counties. Check your area and delivery days on our delivery page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-2">
          {[
            "East London",
            "Central London",
            "North London",
            "South London",
            "West London",
            "Essex",
            "Hertfordshire",
            "Kent",
            "Surrey",
          ].map((a) => (
            <span key={a} className="border border-gold/50 bg-card px-3 py-1.5 font-serif">
              {a}
            </span>
          ))}
        </div>
        <Link
          to="/delivery"
          className="mt-8 inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.22em] text-primary"
        >
          Check your delivery area
        </Link>
      </section>

      <EditorialGallery
        eyebrow="The Golden Grain Journal"
        title="Small Details. Proper Baking."
        intro="A closer look at the ingredients, methods and rituals behind the counter."
        scenes={[
          {
            image: newEditorialImages.baguettes,
            title: "A Golden Crust",
            description:
              "Deep scoring, a crisp exterior and an airy crumb: the details that make a baguette.",
          },
          {
            image: newEditorialImages.cinnamon,
            title: "The Finishing Touch",
            description:
              "Spiralled dough and a delicate glaze bring cinnamon rolls to the coffee counter.",
          },
          {
            image: newEditorialImages.tea,
            title: "Made for the British Table",
            description:
              "Scones served with jam and cream turn a pot of tea into an occasion. Accompaniments are serving suggestions.",
          },
        ]}
      />
      <TodaysBake />
      <BakersHands />
      <SourdoughSpotlight />
      <HonestIngredients />
      <FlatbreadHeritage />
      <PastryCounter />
      <TurkishTable />
      <SampleBox />
      <DispatchFloor />
      <ShopWindow />
      <ShelfReady />
      <BakersNotebook />
      <Testimonials />
      <LunchMenuIdeas />
      <CoffeeAndCroissant />
      <HomeExtras>
        <HomeMore />
      </HomeExtras>
      <Faq />
      <FinalCta />
    </>
  );
}
