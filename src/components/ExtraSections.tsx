import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { gallery as g } from "@/lib/gallery";
import logoLight from "@/assets/gg-green-band-logo-badge.png";
import { storySlug } from "@/lib/story-slug";
import { categories, allProducts } from "@/lib/catalogue";

export const btn =
  "inline-block bg-gold-gradient px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-elegant";
export const btnGhost =
  "inline-block border border-gold/60 px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold/10";
export const textLink =
  "inline-block border-b-2 border-gold pb-1 font-display text-xs uppercase tracking-[0.22em]";

export function Head({
  eyebrow,
  title,
  intro,
  light,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <div className="text-center">
      <p className={`eyebrow ${light ? "!text-gold" : ""}`}>{eyebrow}</p>
      <h2
        className={`mt-3 text-4xl md:text-5xl ${light ? "text-primary-foreground" : "text-primary"}`}
      >
        {title}
      </h2>
      <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
      {intro && (
        <p
          className={`mx-auto mt-6 max-w-2xl font-serif text-xl ${light ? "text-primary-foreground/80" : "text-muted-foreground"}`}
        >
          {intro}
        </p>
      )}
    </div>
  );
}

/* Same pattern as the original "Inside the Bakehouse" tiles: full-bleed photo, gold caption on gradient. */
export function Tile({
  src,
  title,
  text,
  className = "min-h-[320px]",
  pos = "center",
  category,
}: {
  src: string;
  title: string;
  text?: string;
  className?: string;
  pos?: string;
  category?: string;
}) {
  // Grid placement classes (col-span / row-span) must sit on the link, which is the real grid item,
  // otherwise the grid ignores them and leaves an empty cell beside the tile.
  const tokens = className.split(/\s+/).filter(Boolean);
  const place = tokens.filter((t) => /^(?:[a-z0-9]+:)*(?:col|row)-/.test(t)).join(" ");
  const inner = tokens.filter((t) => !/^(?:[a-z0-9]+:)*(?:col|row)-/.test(t)).join(" ");
  const body = (
    <figure
      className={`group relative isolate h-full overflow-hidden rounded-sm shadow-elegant ${inner}`}
    >
      <img
        src={src}
        alt={title}
        width={1264}
        height={848}
        loading="lazy"
        style={{ objectPosition: pos }}
        className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 via-40% to-ink/0" />
      <figcaption className="flex h-full flex-col justify-end p-6 text-primary-foreground [text-shadow:0_1px_10px_rgb(0_0_0/0.55)]">
        <p className="font-display text-xl text-gold">{title}</p>
        {text && (
          <p className="mt-1 max-w-md font-serif text-lg text-primary-foreground/85">{text}</p>
        )}
        <span className="mt-3 font-display text-xs uppercase tracking-[0.22em] text-gold group-hover:text-primary-foreground">
          {category ? "Browse range →" : "Read the story →"}
        </span>
      </figcaption>
    </figure>
  );
  const cls = `block h-full ${place}`;
  return category ? (
    <Link
      to="/bakehouse/$category"
      params={{ category }}
      aria-label={`Browse ${title}`}
      className={cls}
    >
      {body}
    </Link>
  ) : (
    <Link
      to="/story/$slug"
      params={{ slug: storySlug(title) }}
      aria-label={`Read the story: ${title}`}
      className={cls}
    >
      {body}
    </Link>
  );
}

/* Photo tile + framed text panel of identical height, so there are no empty gaps. */
export function Feature({
  src,
  title,
  caption,
  eyebrow,
  heading,
  children,
  flip,
  dark,
  pos,
}: {
  src: string;
  title: string;
  caption?: string;
  eyebrow: string;
  heading: string;
  children: ReactNode;
  flip?: boolean;
  dark?: boolean;
  pos?: string;
}) {
  return (
    <div className="grid items-stretch gap-6 lg:grid-cols-2">
      <div className={flip ? "lg:order-2" : ""}>
        <Tile
          src={src}
          title={title}
          {...(caption ? { text: caption } : {})}
          pos={pos ?? "center"}
          className="h-full min-h-[320px]"
        />
      </div>
      <div
        className={`flex flex-col justify-center rounded-sm border p-8 md:p-10 ${dark ? "border-gold/30 bg-ink/50 text-primary-foreground" : "border-border bg-card"}`}
      >
        <p className={`eyebrow ${dark ? "!text-gold" : ""}`}>{eyebrow}</p>
        <h2 className={`mt-3 text-3xl md:text-4xl ${dark ? "text-gold" : "text-primary"}`}>
          {heading}
        </h2>
        <div className="mt-4 h-px w-20 bg-gold-gradient" />
        <div
          className={`mt-6 space-y-4 font-serif text-xl leading-relaxed ${dark ? "text-primary-foreground/85" : "text-foreground/80"}`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}

export function Band({
  children,
  tone = "",
  pad = "py-20",
}: {
  children: ReactNode;
  tone?: string;
  pad?: string;
}) {
  return (
    <section className={tone}>
      <div className={`mx-auto max-w-7xl px-4 ${pad}`}>{children}</div>
    </section>
  );
}

/* 1 */ export function StatsBand() {
  return (
    <section className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-12 text-center md:grid-cols-4">
        {[
          [String(allProducts.length), "Product lines"],
          [String(categories.length), "Ranges"],
          ["4pm", "Order cut-off"],
          ["Nightly", "Baking"],
        ].map(([n, l]) => (
          <div key={l}>
            <p className="font-display text-3xl text-gold-gradient md:text-4xl">{n}</p>
            <p className="mt-2 text-xs uppercase tracking-[0.2em] text-primary-foreground/70">
              {l}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* 2 */ export function TodaysBake() {
  const items: [string, string, string][] = [
    [g.painAuChocolatTray, "Pain au Chocolat", "Laminated butter pastry, dark chocolate."],
    [g.jamDoughnut, "Jam Doughnut", "Sugared and filled to order."],
    [g.seededRollsCrate, "Seeded Rolls", "For sandwich counters and burgers."],
    [g.baguetteBasket, "French Baguette", "Crackling crust, open crumb."],
    [g.sourdoughBox, "Sourdough Boules", "Boxed warm for the morning drop."],
    [g.rollsBox, "Dinner Rolls", "Soft, golden and uniform."],
    [g.briocheTrays, "Brioche Buns", "Glazed and stacked on the rack."],
    [g.bunTrays, "Finger Rolls", "Hot-dog and sandwich rolls by the tray."],
  ];
  return (
    <Band pad="py-24">
      <Head
        eyebrow="Fresh This Morning"
        title="Today’s Bake"
        intro="A glimpse of what left our ovens before sunrise."
      />
      <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(([i, t, d]) => (
          <Tile key={t} src={i} title={t} text={d} className="aspect-[4/3] sm:aspect-[4/5]" />
        ))}
      </div>
    </Band>
  );
}

/* 3 */ export function BakersHands() {
  return (
    <Band tone="bg-secondary" pad="py-24">
      <div className="grid items-stretch gap-6 lg:grid-cols-[1fr_1.15fr_1fr]">
        <Tile
          src={g.bakerFlatbread}
          title="Flatbread, by Hand"
          text="Folded and pressed on a floured bench."
          className="min-h-[460px]"
        />
        <div className="flex flex-col items-center justify-center rounded-sm border border-gold/40 bg-card p-10 text-center shadow-elegant">
          <p className="eyebrow">The Craft</p>
          <h2 className="mt-3 text-3xl text-primary md:text-4xl">Shaped by Hand, Finished with Pride</h2>
          <div className="mt-4 h-px w-20 bg-gold-gradient" />
          <p className="mt-6 font-serif text-xl text-foreground/80">
            Machines help us keep pace, yet every flatbread, baguette and bun is still finished by a pair of skilled hands – a difference you can taste.
          </p>
          <Link to="/about" className={`mt-8 ${btn}`}>
            Meet the Bakers
          </Link>
        </div>
        <Tile
          src={g.bakerBaguette}
          title="Baguettes, Rolled"
          text="Long, even and ready for the oven."
          className="min-h-[460px]"
        />
      </div>
    </Band>
  );
}

/* 4 */ export function SourdoughSpotlight() {
  return (
    <Band pad="py-24">
      <Feature
        src={g.sourdoughBoules}
        title="Slow-Fermented Sourdough"
        caption="Blistered crust, tangy crumb."
        eyebrow="Sourdough Spotlight"
        heading="Slow-Fermented, Patiently Proved"
      >
        <p>
          Our levain is fed twice daily and our doughs rest long and cool, yielding a deep, blistered crust, a gently tangy crumb and a loaf that keeps for days.
        </p>
        <Link
          to="/bakehouse/$category"
          params={{ category: "loaves" }}
          className={`${textLink} text-primary`}
        >
          Shop loaves
        </Link>
      </Feature>
    </Band>
  );
}

/* 5 */ export function HonestIngredients() {
  return (
    <Band tone="bg-secondary" pad="py-24">
      <Feature
        flip
        src={g.flourButterTable}
        title="Four Honest Ingredients"
        caption="Flour, butter, salt and water."
        eyebrow="Honest Ingredients"
        heading="Fine Ingredients, Plainly Described"
      >
        <p>
          Every product carries a written specification listing its ingredients and allergens, and sheets are available for every range on request.
        </p>
        <ul className="grid gap-2 text-lg sm:grid-cols-2">
          {[
            "Ingredient lists",
            "Allergen sheets",
            "Weights and pack sizes",
            "Written specifications",
          ].map((x) => (
            <li key={x} className="flex gap-2">
              <span className="text-gold-deep">✦</span>
              {x}
            </li>
          ))}
        </ul>
      </Feature>
    </Band>
  );
}

/* 6 */ export function FlatbreadHeritage() {
  return (
    <Band tone="bg-ink text-primary-foreground" pad="py-24">
      <Head
        light
        eyebrow="Flatbread Heritage"
        title="From Tandoor to Table"
        intro="Afghan, Persian, Turkish and Indian traditions, fired fresh each night."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
        <Tile
          src={g.tandoorBasket}
          title="Tandoor Breads"
          text="Naan and Afghan loaves beside the open fire."
          className="min-h-[300px] md:col-span-2 md:row-span-2"
        />
        <Tile src={g.zaatarFlatbread} title="Za’atar Flatbread" text="Herbs, oil and sesame." />
        <Tile
          src={g.simitStand}
          title="Simit & Pretzel Rings"
          text="Sesame-crusted Turkish classics."
        />
      </div>
    </Band>
  );
}

/* 7 */ export function PastryCounter() {
  return (
    <Band pad="py-24">
      <Feature
        flip
        src={g.danishBox}
        title="Fruit Danish"
        caption="Boxed warm for your morning rush."
        eyebrow="The Pastry Counter"
        heading="Viennoiserie for Cafés"
      >
        <p>
          Croissants, Danish, pains au chocolat and cinnamon rolls, laminated by hand and delivered
          ready for the cabinet.
        </p>
        <Link
          to="/bakehouse/$category"
          params={{ category: "pastries" }}
          className={`${textLink} text-primary`}
        >
          Browse pastries
        </Link>
      </Feature>
    </Band>
  );
}

/* 9 */ export function TurkishTable() {
  return (
    <Band tone="bg-plum" pad="py-24">
      <Feature
        dark
        src={g.turkishTeaBaklava}
        title="Tea & Baklava"
        caption="Pistachio layers, syrup and copper."
        eyebrow="Sweet Traditions"
        heading="Baklava, Tea & Hospitality"
      >
        <p>
          Hand-layered pistachio baklava and syrup-soaked sweets for restaurants, dessert bars and celebration trays.
        </p>
        <Link
          to="/bakehouse/$category"
          params={{ category: "cakes-sweets" }}
          className={`${textLink} text-gold`}
        >
          See sweets
        </Link>
      </Feature>
    </Band>
  );
}

/* 10 */ export function SampleBox() {
  return (
    <Band pad="py-24">
      <Feature
        flip
        src={g.sampleBoxes}
        title="Sample Boxes"
        caption="A curated taste of the bakehouse."
        eyebrow="Try Before You Buy"
        heading="Accept a Complimentary Sample Box"
      >
        <p>
          New trade customers are invited to taste a box of our breads, rolls and pastries, delivered with our compliments within our London area.
        </p>
        <Link to="/contact" className={btn}>
          Request Samples
        </Link>
      </Feature>
    </Band>
  );
}

/* 11 */ export function DeliveryRound() {
  return (
    <Band tone="bg-secondary" pad="py-24">
      <Feature
        src={g.vanHandover}
        title="The Morning Round"
        caption="A friendly hello with every crate."
        eyebrow="Delivery"
        heading="Delivered Before You Open"
        pos="center 30%"
      >
        <p>
          Our own vans, our own drivers. Fresh bread arrives in clean crates, seven days a week, across London and the Home Counties.
        </p>
      </Feature>
    </Band>
  );
}

/* 12 */ export function DispatchFloor() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
      <img
        src={g.warehousePallets}
        alt="Pallets of bread in the dispatch warehouse"
        loading="lazy"
        width={1264}
        height={848}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="mx-auto flex min-h-[460px] max-w-7xl flex-col items-start justify-center px-4 py-24">
        <p className="eyebrow !text-gold">Scale Without Compromise</p>
        <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">
          <span className="text-gold-gradient">A Dispatch Floor</span>
          <br />
          Built for Volume
        </h2>
        <p className="mt-6 max-w-lg font-serif text-xl text-primary-foreground/85">
          From a single café order to full pallets, our team picks, packs and tracks every crate.
        </p>
        <Link to="/wholesale" className={`mt-8 ${btn}`}>
          Wholesale Enquiries
        </Link>
      </div>
    </section>
  );
}

/* 13 */ export function ShopWindow() {
  return (
    <Band pad="py-24">
      <Head
        eyebrow="On Your High Street"
        title="Bread for the Neighbourhood Shop"
        intro="Shelf-ready loaves and rolls, packed for independent shops and delis."
      />
      <div className="mt-14 grid gap-6 md:grid-cols-2">
        <Tile
          src={g.streetShop}
          title="The Corner Shop"
          text="Warm bread in the window by seven."
          className="aspect-[16/10]"
        />
        <Tile
          src={g.greenShopfront}
          title="The Neighbourhood Bakery"
          text="Counters stocked with our bakes."
          className="aspect-[16/10]"
        />
      </div>
    </Band>
  );
}

/* 14 */ export function ShelfReady() {
  return (
    <Band tone="bg-secondary" pad="py-24">
      <Feature
        flip
        src={g.loafShelves}
        title="Shelf Ready"
        caption="Sliced, wrapped and date-coded."
        eyebrow="Retail Range"
        heading="Packed, Labelled & Ready to Sell"
      >
        <p>
          Our retail range fills your aisle with loaves that look as good as they taste, wrapped to
          keep them fresh.
        </p>
        <Link
          to="/bakehouse/$category"
          params={{ category: "loaves" }}
          className={`${textLink} text-primary`}
        >
          See the loaves
        </Link>
      </Feature>
    </Band>
  );
}

/* 15 */ export function BakersNotebook() {
  return (
    <Band pad="py-24">
      <div className="grid items-stretch gap-6 md:grid-cols-3">
        <Tile
          src={g.scalesNotebook}
          title="Weighed Twice"
          text="Brass scales and handwritten notes."
          className="min-h-[360px] md:col-span-2"
        />
        <Tile
          src={g.doughBowl}
          title="Rising Dough"
          text="Patience is an ingredient."
          className="min-h-[360px]"
        />
      </div>
      <div className="mx-auto mt-10 max-w-2xl text-center">
        <p className="eyebrow">The Baker’s Notebook</p>
        <h2 className="mt-3 text-3xl text-primary md:text-4xl">Every Recipe, Recorded</h2>
        <p className="mt-4 font-serif text-xl text-foreground/80">
          Written recipes and specifications keep every batch consistent from one night to the next.
        </p>
      </div>
    </Band>
  );
}

/* 16 */ export function Testimonials() {
  const q = [
    [
      "Agreed in writing",
      "Prices, delivery charges, minimum orders and payment terms are set out on a written quotation before you order.",
    ],
    [
      "Specified product by product",
      "Ingredient, allergen and weight specifications are available for every line on request.",
    ],
    [
      "Ordered to a clear cut-off",
      "Orders received by 4pm are baked overnight for delivery the following morning.",
    ],
  ];
  return (
    <Band tone="bg-secondary" pad="py-24">
      <Head eyebrow="How We Work" title="What You May Expect" />
      <div className="mt-14 grid gap-6 md:grid-cols-3">
        {q.map(([t, d]) => (
          <article key={t} className="rounded-sm border border-gold/40 bg-card p-8 shadow-elegant">
            <p className="font-display text-xl text-primary">{t}</p>
            <p className="mt-4 font-serif text-xl text-foreground/85">{d}</p>
          </article>
        ))}
      </div>
    </Band>
  );
}

/* 17 */ export function LunchMenuIdeas() {
  return (
    <Band pad="py-24">
      <Feature
        src={g.pubLunch}
        title="The Ploughman’s"
        caption="Granary, butter and a proper pint."
        eyebrow="Pubs & Dining Rooms"
        heading="Bread for the Ploughman’s, Rolls for the Roast"
      >
        <p>
          Granary tins, crusty rolls and farmhouse loaves for gastropubs and carveries, cut to the
          thickness your kitchen needs.
        </p>
      </Feature>
    </Band>
  );
}

/* 18 */ export function CoffeeAndCroissant() {
  return (
    <Band tone="bg-plum" pad="py-24">
      <Feature
        dark
        flip
        src={g.icedCoffeeCroissant}
        title="The Perfect Pairing"
        caption="Pistachio croissant and iced latte."
        eyebrow="Café Culture"
        heading="Made for the Café Counter"
      >
        <p>
          Seasonal specials and café classics, from pistachio croissants to cinnamon rolls, for
          counters that sell on sight.
        </p>
        <Link to="/foods" className={btn}>
          Café Menu Ideas
        </Link>
      </Feature>
    </Band>
  );
}

/* 19 */ export function Faq() {
  const f = [
    [
      "What is the minimum order?",
      "Minimum order values are confirmed in writing when your account is opened.",
    ],
    ["Which areas do you deliver to?", "London and the Home Counties, seven days a week."],
    [
      "Can you supply allergen information?",
      "Yes. Ingredient and allergen specifications are available for every product on request.",
    ],
    [
      "Do you bake custom products?",
      "Often, yes. Ask the order desk about own-label and bespoke sizes.",
    ],
  ];
  return (
    <Band pad="py-24">
      <div className="grid items-stretch gap-6 lg:grid-cols-2">
        <div className="rounded-sm border border-border bg-card p-8 md:p-12">
          <p className="eyebrow">Good to Know</p>
          <h2 className="mt-3 text-3xl text-primary md:text-4xl">Trade FAQs</h2>
          <div className="mt-4 h-px w-20 bg-gold-gradient" />
          <div className="mt-6 divide-y divide-border">
            {f.map(([qq, a]) => (
              <details key={qq} className="group py-4">
                <summary className="flex cursor-pointer list-none items-center justify-between font-display text-lg text-primary">
                  {qq}
                  <span className="text-gold-deep transition-transform group-open:rotate-45">
                    +
                  </span>
                </summary>
                <p className="mt-3 font-serif text-xl text-muted-foreground">{a}</p>
              </details>
            ))}
          </div>
        </div>
        <Tile
          src={g.wrappedLoavesCrate}
          title="East London Bakery Dispatch"
          text="Wrapped, crated and on the road by 4am."
          className="h-full min-h-[320px]"
        />
      </div>
    </Band>
  );
}

/* 20 */ export function FinalCta() {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
      <div className="absolute inset-0 -z-10 bg-ink" />
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <img
          src={logoLight}
          alt="Golden Grain Bakehouse – Artisan Breads & Pastries"
          loading="lazy"
          width={900}
          height={659}
          className="mx-auto h-44 w-auto"
        />
        <h2 className="mt-8 text-4xl md:text-5xl">
          <span className="text-gold-gradient">At Your Service, Every Morning</span>
        </h2>
        <p className="mt-4 font-serif text-xl text-primary-foreground/85">
          Open a trade account and ask for a complimentary sample box.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link to="/wholesale" className={btn}>
            Open a Trade Account
          </Link>
          <Link to="/contact" className={btnGhost}>
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
