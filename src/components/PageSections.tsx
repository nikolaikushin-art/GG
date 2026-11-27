import type { ReactNode } from "react";
import { Link } from "@tanstack/react-router";
import { gallery as g } from "@/lib/gallery";
import { pg as p } from "@/lib/pages-gallery";
import { Band, Feature, Head, Tile, btn, btnGhost, textLink } from "@/components/ExtraSections";

type T = [src: string, title: string, text: string];

export function Tiles({
  items,
  cols = "md:grid-cols-3",
  cls = "aspect-[4/5]",
}: {
  items: T[];
  cols?: string;
  cls?: string;
}) {
  return (
    <div className={`mt-12 grid gap-5 sm:grid-cols-2 ${cols}`}>
      {items.map(([s, t, d]) => (
        <Tile key={t} src={s} title={t} text={d} className={cls} />
      ))}
    </div>
  );
}

export function CtaBand({
  src,
  eyebrow,
  title,
  text,
  to = "/contact",
  label = "Speak to the Order Desk",
}: {
  src: string;
  eyebrow: string;
  title: string;
  text: string;
  to?: "/contact" | "/wholesale" | "/about";
  label?: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
      <img
        src={src}
        alt=""
        width={1264}
        height={848}
        loading="lazy"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink via-ink/80 to-ink/30" />
      <div className="mx-auto flex min-h-[420px] max-w-7xl flex-col items-start justify-center px-4 py-24">
        <p className="eyebrow !text-gold">{eyebrow}</p>
        <h2 className="mt-3 max-w-xl text-4xl md:text-5xl">{title}</h2>
        <p className="mt-5 max-w-lg font-serif text-xl text-primary-foreground/85">{text}</p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link to={to} className={btn}>
            {label}
          </Link>
          <Link to="/bakehouse" className={btnGhost}>
            Browse the Bakehouse
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ───────────── HOME (only photos not already shown on the home page) ───────────── */
export function HomeExtras({ children }: { children?: ReactNode }) {
  return (
    <>
      <Band tone="bg-secondary" pad="py-24">
        <Feature
          flip
          src={p.flatbreadSheetsBox}
          title="Flatbread Sheets, Boxed"
          caption="Stacked, separated and ready to travel."
          eyebrow="Packed to Order"
          heading="Boxed Lines for Busy Kitchens"
        >
          <p>
            Thin flatbread sheets are layered, boxed and labelled for the pass, so a kebab house or
            café can open a box and start serving.
          </p>
          <Link to="/wholesale" className={`${textLink} text-primary`}>
            See wholesale ordering
          </Link>
        </Feature>
      </Band>
      {children}
    </>
  );
}

/* ───────────── ABOUT ───────────── */
export function AboutExtras({ children }: { children?: ReactNode }) {
  return (
    <>
      <Band pad="py-24">
        <Head
          eyebrow="The People"
          title="The People Behind the Bread"
          intro="Bakers who start when the city sleeps, and who share what they know at the bench."
        />
        <Tiles
          items={[
            [
              p.bakersKneadingPair,
              "Side by Side at the Bench",
              "Two bakers work the dough together.",
            ],
            [
              p.bakerCroissantShaping,
              "Croissants, Rolled by Hand",
              "Each piece shaped on a floured bench.",
            ],
            [
              p.bakerBunProofing,
              "Trays of Dough, Proving",
              "Portioned rolls rest before they go into the oven.",
            ],
          ]}
          cls="aspect-[3/4]"
        />
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Feature
          src={p.recipeBook}
          title="The Recipe Book"
          caption="Handwritten notes, flour on the page."
          eyebrow="Recipes Worth Keeping"
          heading="Written Down, Handed On"
        >
          <p>
            Behind every loaf is a page of handwritten notes: weights, timings and adjustments. They
            are how we aim to make each delivery match the last.
          </p>
          <Link to="/glossary" className={`${textLink} text-primary`}>
            Read the baker’s glossary
          </Link>
        </Feature>
      </Band>
      <Band pad="py-24">
        <Head
          eyebrow="Many Kitchens"
          title="Bread from Many Kitchens"
          intro="Our bakers bring the traditions they grew up with, from tandoor to stone deck."
        />
        <Tiles
          cols="lg:grid-cols-4"
          items={[
            [p.tandoorRoundBread, "Tandoor Rounds", "Blistered and charred at the edges."],
            [
              p.sesameFlatbreadShelf,
              "Sesame Flatbreads",
              "Long, seeded breads cooling on the shelf.",
            ],
            [p.whiteCobTorn, "The British Cob", "A floured crust over a soft white crumb."],
            [p.lavashThin, "Thin Lavash", "Stretched until it bubbles and almost glows."],
          ]}
        />
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Feature
          flip
          src={p.bakerCustomerCrate}
          title="Tasted Before It Leaves"
          caption="A baker and a customer check the crate."
          eyebrow="Our Standard"
          heading="Every Crate Checked by a Baker"
        >
          <p>
            Before a van leaves, a baker looks over every crate. Only bread we would proudly serve at our own table goes out.
          </p>
        </Feature>
      </Band>
      <Band pad="py-24">
        <Head
          eyebrow="Through the Year"
          title="The Baking Calendar"
          intro="The seasons change the bench, while the ovens stay warm all year round."
        />
        <Tiles
          cols="lg:grid-cols-4"
          items={[
            [p.hotCrossBuns, "Spring", "Hot cross buns beside the first daffodils."],
            [p.gardenTeaCroissant, "Summer", "Croissants and tea out in the garden."],
            [p.soupAndBreadTable, "Autumn & Winter", "Thick slices of bread for the soup bowl."],
            [
              p.christmasStollenMincePies,
              "Christmas",
              "Stollen and mince pies for the festive table.",
            ],
          ]}
        />
      </Band>
      {children}
      <CtaBand
        src={p.packingFloorCrates}
        eyebrow="A Team That Packs With Pride"
        title="From Bench to Dispatch Floor"
        text="Our packers load crates by hand and check every order against your standing list before the doors open."
        to="/wholesale"
        label="Open a Trade Account"
      />
    </>
  );
}

/* ───────────── WHOLESALE ───────────── */
export function WholesaleExtras({ children }: { children?: ReactNode }) {
  return (
    <>
      <Band pad="py-24">
        <Head
          eyebrow="Who Orders"
          title="The Trade We Supply"
          intro="From hotel buffets to the corner bakery, the same bakehouse stands behind every drop."
        />
        <Tiles
          cols="lg:grid-cols-4"
          items={[
            [
              p.hotelBreakfastBuffet,
              "Hotels & Buffets",
              "Pastries and breads for the breakfast service.",
            ],
            [p.focacciaRestaurant, "Restaurants", "Focaccia and table breads at the pass."],
            [p.windowCroissantCappuccino, "Cafés", "Croissants for the window seat."],
            [p.shopfrontAwning, "High-Street Shops", "Shelves filled before the sign is turned."],
          ]}
          cls="aspect-[3/4]"
        />
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head
          eyebrow="Packed for You"
          title="Packed, Counted & Crated"
          intro="Every order is picked against your list, then bagged and crated for the morning round."
        />
        <Tiles
          cols="lg:grid-cols-4"
          cls="aspect-[4/3]"
          items={[
            [
              p.packingFloorCrates,
              "The Dispatch Floor",
              "Crates loaded by hand against each order.",
            ],
            [p.baggingLine, "The Bagging Line", "Loaves bagged on the conveyor."],
            [p.baggedRollsCrates, "Rolls by the Crate", "Bagged rolls stacked for the van."],
            [
              p.baguettesPaperTrolley,
              "Baguettes on the Trolley",
              "Paper-wrapped and ready to roll out.",
            ],
          ]}
        />
      </Band>
      <Band pad="py-24">
        <Feature
          src={p.loafHandwrittenNote}
          title="Bespoke Loaves"
          caption="A boule and a handwritten recipe note."
          eyebrow="Bespoke & Own-Label"
          heading="Your Recipe, Our Ovens"
        >
          <p>
            Send us a recipe, or just a note about the crumb and crust you want. We trial it on the
            bench, agree the weights with you and bake it under your own label.
          </p>
          <Link to="/contact" className={btn}>
            Brief the Bakers
          </Link>
        </Feature>
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head
          eyebrow="Boxed for the Trade"
          title="Boxed, Ready to Serve"
          intro="Many lines arrive in cardboard trays and boxes that go straight to the counter."
        />
        <Tiles
          cols="md:grid-cols-3"
          cls="aspect-[4/3]"
          items={[
            [p.cinnamonRollsBox, "Cinnamon Rolls", "Twelve to a box, glazed."],
            [p.pastyBox, "Golden Bakes, Boxed Warm", "Golden turnovers packed while hot."],
            [p.sesameSavourySquaresBox, "Sesame Squares", "Cut and lined with baking paper."],
          ]}
        />
      </Band>
      {children}
      <CtaBand
        src={p.christmasStollenMincePies}
        eyebrow="Festive Ordering"
        title="Plan Your Christmas Bakes Early"
        text="Stollen, mince pies and festive breads are scheduled well ahead. Tell the desk your numbers and we will hold your slots."
      />
    </>
  );
}

/* ───────────── CONTACT ───────────── */
export function ContactExtras({ children }: { children?: ReactNode }) {
  return (
    <>
      <Band pad="py-24">
        <Head
          eyebrow="Order Your Way"
          title="Three Ways to Order"
          intro="However your business runs, there is an ordering rhythm that fits."
        />
        <Tiles
          items={[
            [p.baggedRollsCrates, "Standing Orders", "The same crates, the same day, every week."],
            [
              p.bakerCustomerCrate,
              "Tasting & Samples",
              "Try the bake with a baker before you commit.",
            ],
            [
              p.christmasStollenMincePies,
              "Seasonal & Events",
              "Festive and one-off orders, planned ahead.",
            ],
          ]}
          cls="aspect-[4/3]"
        />
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Feature
          src={p.shopCounterHandover}
          title="Friendly Handovers"
          caption="A warm bag across the counter."
          eyebrow="A Real Person"
          heading="Someone Who Knows the Bakehouse"
        >
          <p>
            Write to the order desk and your message reaches someone who knows the lines, the delivery rounds and the cut-off times. We aim to reply within one working day.
          </p>
          <Link to="/wholesale" className={`${textLink} text-primary`}>
            Trade account terms
          </Link>
        </Feature>
      </Band>
      <Band pad="py-24">
        <Feature
          flip
          src={p.cinnamonRollsBox}
          title="The Sample Box"
          caption="Boxed breads and pastries to try."
          eyebrow="Free Samples"
          heading="What Goes in a Sample Box"
        >
          <p>
            We choose lines to suit your menu: a loaf or two, rolls, a pastry or a cake, boxed and
            brought to your door with our compliments.
          </p>
          <ul className="grid gap-2 text-lg sm:grid-cols-2">
            {["Breads & rolls", "Pastries", "Cakes & scones", "Allergen sheets"].map((x) => (
              <li key={x} className="flex gap-2">
                <span className="text-gold-deep">✦</span>
                {x}
              </li>
            ))}
          </ul>
        </Feature>
      </Band>
      {children}
      <CtaBand
        src={p.shopfrontAwning}
        eyebrow="Your Shop Next"
        title="Let Us Fill Your Shelves"
        text="Tell us about your counter and we will build a first order around it."
        to="/wholesale"
        label="See Trade Terms"
      />
    </>
  );
}

/* ───────────── FOODS ───────────── */
export function FoodsExtras({ children }: { children?: ReactNode }) {
  return (
    <>
      <Band pad="py-24">
        <Feature
          src={p.hotelBreakfastTable}
          title="Hotel Breakfast"
          caption="Croissants, juice and coffee by the window."
          eyebrow="Hotels & Dining Rooms"
          heading="A Breakfast Table Done Properly"
        >
          <p>
            A basket of warm croissants and pastries sets the tone for the whole stay. We bake to
            your breakfast service so everything lands fresh.
          </p>
          <Link
            to="/bakehouse/$category"
            params={{ category: "pastries" }}
            className={`${textLink} text-primary`}
          >
            Pastries range
          </Link>
        </Feature>
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head
          eyebrow="Pubs, Delis & Lunch"
          title="Bread for the Lunch Trade"
          intro="Soups, toasties and picnic boards all start with the right loaf."
        />
        <Tiles
          items={[
            [p.soupAndBreadTable, "Soup & Bread", "Thick slices with butter beside tomato soup."],
            [p.bakerToastie, "The Toastie", "Sliced bread toasted for café sandwiches."],
            [
              p.picnicBaguetteCheese,
              "Delis & Picnics",
              "Baguette with cheese, grapes and a hamper.",
            ],
          ]}
          cls="aspect-[4/3]"
        />
      </Band>
      <Band pad="py-24">
        <Feature
          flip
          src={p.hotelBreakfastBuffet}
          title="The Breakfast Buffet"
          caption="Baskets of pastries and breads at the counter."
          eyebrow="Buffets & Events"
          heading="Breads and Pastries by the Basket"
        >
          <p>
            Self-service buffets need variety and consistency. We pack mixed crates so your counter
            looks generous from the first guest to the last.
          </p>
        </Feature>
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head
          eyebrow="Tea Rooms & Events"
          title="For the Cake Stand and Beyond"
          intro="Sponges, scones and sweet slices for tea rooms, gardens and journeys."
        />
        <Tiles
          items={[
            [p.afternoonTeaSpread, "Afternoon Tea", "Scones, cakes and muffins on a china table."],
            [p.gardenTeaCroissant, "Garden Tea", "A croissant and a pot of tea outside."],
            [p.trainTeaPastry, "Tea on the Move", "A slice of baked pastry with tea and a view."],
          ]}
          cls="aspect-[4/3]"
        />
      </Band>
      {children}
      <CtaBand
        src={p.hotCrossBuns}
        eyebrow="Seasonal"
        title="Hot Cross Buns, Stollen & More"
        text="Spring, summer and festive specials are baked in limited runs. Ask the desk what is coming up."
      />
    </>
  );
}

/* ───────────── GLOSSARY ───────────── */
export function GlossaryExtras({ children }: { children?: ReactNode }) {
  return <>{children}</>;
}

/* ───────────── BAKEHOUSE INDEX ───────────── */
export function BakehouseExtras({ children }: { children?: ReactNode }) {
  const occ: [string, string, string, string][] = [
    [p.hotelBreakfastTable, "Breakfast", "Croissants, pastries and rolls.", "pastries"],
    [p.afternoonTeaSpread, "Afternoon Tea", "Scones, cakes and sweet treats.", "cakes-sweets"],
    [p.stackedFlatbreadsCrate, "From the Grill", "Warm-stacked flatbreads.", "flatbreads"],
    [p.focacciaRestaurant, "For the Table", "Focaccia and continental breads.", "continental"],
    [p.bakerToastie, "Sandwiches", "Loaves cut for the counter.", "loaves"],
    [
      p.savouryBunsTray,
      "Buns & Rolls",
      "Soft buns for burgers, hot dogs and sandwiches.",
      "rolls-buns",
    ],
  ];
  return (
    <>
      <Band pad="py-24">
        <Head
          eyebrow="Browse by Occasion"
          title="Start with the Moment"
          intro="Choose by service, then jump straight to the range that belongs there."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {occ.map(([s, t, d, c]) => (
            <Tile key={t} src={s} title={t} text={d} category={c} className="aspect-[4/3]" />
          ))}
        </div>
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head
          eyebrow="Seasonal"
          title="Bakes That Come and Go"
          intro="Limited runs through the year."
        />
        <Tiles
          items={[
            [p.hotCrossBuns, "Hot Cross Buns", "Spring, baked in trays."],
            [p.christmasStollenMincePies, "Stollen & Mince Pies", "The festive table."],
            [p.cinnamonRollsBox, "Cinnamon Rolls", "Glazed and boxed warm."],
          ]}
          cls="aspect-[4/3]"
        />
      </Band>
      {children}
    </>
  );
}

/* ───────────── CATEGORY PAGES ───────────── */
type Cat = {
  feature: {
    src: string;
    title: string;
    caption: string;
    eyebrow: string;
    heading: string;
    body: string;
  };
  bench: { title: string; intro: string; items: T[] };
  serve: { title: string; intro: string; items: T[] };
  band: { src: string; eyebrow: string; title: string; text: string };
};

const cats: Record<string, Cat> = {
  loaves: {
    feature: {
      src: p.wholemealLoafFlourSack,
      title: "Wholemeal & Granary",
      caption: "A wholemeal loaf beside a sack of stoneground flour.",
      eyebrow: "Behind the Range",
      heading: "Honest Loaves, Baked Daily",
      body: "From the tin loaf to the farmhouse cob, our loaves are made with British flour and given time to ferment. They slice cleanly, toast well and keep.",
    },
    bench: {
      title: "From the Bench",
      intro: "How a loaf is made, step by step.",
      items: [
        [p.bakerWholemealTin, "Into the Tin", "A baker shapes wholemeal dough into the tin."],
        [p.whiteCobTorn, "The Farmhouse Cob", "Floured crust over a soft, torn crumb."],
        [p.seededWholemealCrumb, "Seeds & Grains", "Oats and seeds through the crumb."],
        [p.breadRackTall, "Cooling on the Rack", "Loaves rest on tall racks before wrapping."],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Where these loaves earn their place.",
      items: [
        [p.soupAndBreadTable, "Soup & Bread", "Thick slices with butter beside tomato soup."],
        [p.bakerToastie, "The Toastie", "Sliced loaves toasted for café sandwiches."],
        [p.loafHandwrittenNote, "Deli Loaves", "A boule with a handwritten note for the counter."],
      ],
    },
    band: {
      src: p.baggingLine,
      eyebrow: "Wrapped & Ready",
      title: "Sliced, Bagged & Date-Coded",
      text: "Our bagging line wraps loaves for retail shelves, with own-label options.",
    },
  },
  continental: {
    feature: {
      src: p.focacciaRestaurant,
      title: "Focaccia for the Table",
      caption: "Focaccia with olive oil for dipping.",
      eyebrow: "Behind the Range",
      heading: "European Classics, Baked in London",
      body: "Focaccia, ciabatta, baguettes and sourdough: breads built around long fermentation, open crumb and a crisp, deeply baked crust.",
    },
    bench: {
      title: "From the Bench",
      intro: "Shaping and crating the continental range.",
      items: [
        [p.crumbSourdoughHand, "Open Crumb", "A sourdough held open to show its airy interior."],
        [p.rusticLoavesCrate, "Country Loaves", "Rustic loaves crated with a tag for the drop."],
        [
          p.baguettesPaperTrolley,
          "Baguettes on the Trolley",
          "Paper-wrapped and heading for the van.",
        ],
        [
          p.doughFlatlayOverhead,
          "Shaping Day",
          "Dough shaped on a floured bench with proving baskets.",
        ],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Continental breads at their best.",
      items: [
        [
          p.picnicBaguetteCheese,
          "Baguette & Cheese",
          "A baguette with cheese, grapes and a picnic hamper.",
        ],
        [
          p.hotelBreakfastTable,
          "Continental Breakfast",
          "A basket of rolls and croissants at the hotel table.",
        ],
        [p.briocheLoafCut, "Brioche", "Golden crumb, soft and rich."],
      ],
    },
    band: {
      src: p.bakerCustomerCrate,
      eyebrow: "Tasted Before It Leaves",
      title: "Checked by a Baker",
      text: "Each crate of continental bread is looked over before it goes on the van.",
    },
  },
  "rolls-buns": {
    feature: {
      src: p.baggedRollsCrates,
      title: "Rolls by the Crate",
      caption: "Bagged rolls stacked in grey crates.",
      eyebrow: "Behind the Range",
      heading: "Soft, Even & Ready to Fill",
      body: "Burger buns, hot-dog rolls, finger rolls and dinner rolls, baked to a consistent size so portions and plating stay predictable.",
    },
    bench: {
      title: "From the Bench",
      intro: "Rolls start as trays of portioned dough.",
      items: [
        [p.bakerBunProofing, "Proving Trays", "Portioned dough rests before baking."],
        [p.nigellaLoafTorn, "Seeded Round", "A seeded round torn open to show a soft crumb."],
        [p.briocheLoafCut, "Brioche", "Golden, rich and tender."],
        [p.hotCrossBuns, "Hot Cross Buns", "Baked in a tray for Easter."],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Buns on the menu.",
      items: [
        [p.bakerToastie, "Toasties & Sandwiches", "Soft bread for the café counter."],
        [p.cinnamonRollsBox, "Cinnamon Rolls", "Boxed in twelves, glazed."],
        [g.seededRollsCrate, "Seeded Rolls", "Golden crusts in a rustic crate."],
      ],
    },
    band: {
      src: p.packingFloorCrates,
      eyebrow: "Packed for Your Counter",
      title: "Crated by Hand, Counted Twice",
      text: "Every drop is packed against your standing order.",
    },
  },
  flatbreads: {
    feature: {
      src: p.stackedFlatbreadsCrate,
      title: "Warm-Stacked Flatbreads",
      caption: "Rounds stacked in a crate, still warm.",
      eyebrow: "Behind the Range",
      heading: "Fired Fresh, Stacked by the Hundred",
      body: "Naan, lavash, pide, barbari and paratha from the tandoor and stone deck, baked through the night and delivered warm to grills and restaurants.",
    },
    bench: {
      title: "From the Oven",
      intro: "Four breads, four traditions.",
      items: [
        [p.tandoorRoundBread, "Tandoor Breads", "Blistered rounds with charred spots."],
        [p.lavashThin, "Lavash", "Thin, bubbled and almost translucent."],
        [p.sesameFlatbreadShelf, "Sesame Flatbreads", "Long seeded breads cooling on the shelf."],
        [p.parathaPull, "Paratha", "Flaky layers pulled apart by hand."],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Flatbread on the plate.",
      items: [
        [
          p.garlicHerbFlatbread,
          "Garlic & Herb Flatbread",
          "Scattered with herbs on a wooden board.",
        ],
        [p.cheeseHerbFlatbread, "Cheese & Herb", "Melted cheese and chopped herbs."],
        [g.shawarmaWraps, "Shawarma Wraps", "Soft flatbread rolled round the filling."],
      ],
    },
    band: {
      src: p.flatbreadsClothCrate,
      eyebrow: "Wrapped to Stay Warm",
      title: "Under Cloth, Straight to the Grill",
      text: "Stacks travel wrapped in cloth so they arrive soft and warm.",
    },
  },
  pastries: {
    feature: {
      src: p.pastryBoardCoffee,
      title: "The Viennoiserie Board",
      caption: "Croissants, Danish and rolls beside a latte.",
      eyebrow: "Behind the Range",
      heading: "Laminated with Proper Butter",
      body: "Croissants, pains au chocolat, Danish and cinnamon rolls, folded by hand with real butter and baked until deeply golden.",
    },
    bench: {
      title: "From the Bench",
      intro: "The long road to a flaky layer.",
      items: [
        [p.bakerCroissantShaping, "Shaped by Hand", "A baker rolls croissants at the bench."],
        [p.butterLayers, "Butter & Dough", "Laminated layers, folded and rested."],
        [p.almondCroissantCut, "Almond Croissant", "Cut open to show the filling and layers."],
        [p.cheeseHerbPastryPull, "Cheese & Chive Pastry", "Melting cheese inside flaky pastry."],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Pastries in their setting.",
      items: [
        [
          p.windowCroissantCappuccino,
          "Window Seat",
          "A croissant and cappuccino by a London window.",
        ],
        [p.gardenTeaCroissant, "Garden Tea", "A croissant and tea on a garden table."],
        [p.hotelBreakfastTable, "Hotel Breakfast", "A basket of pastries with juice and coffee."],
      ],
    },
    band: {
      src: p.cinnamonRollsBox,
      eyebrow: "Boxed Warm",
      title: "Cinnamon Rolls by the Dozen",
      text: "Delivered in trays, ready for your cabinet.",
    },
  },
  "cakes-sweets": {
    feature: {
      src: p.afternoonTeaSpread,
      title: "The Afternoon Tea Table",
      caption: "Scones, cakes and muffins on china.",
      eyebrow: "Behind the Range",
      heading: "Sweet Bakes for the Cake Stand",
      body: "Sponges, carrot cake, muffins, doughnuts and baklava, made for elevenses, afternoon tea and the display fridge.",
    },
    bench: {
      title: "From the Bench",
      intro: "Four favourites from the cake counter.",
      items: [
        [p.carrotCakeSliceClose, "Carrot Cake", "Cream-cheese frosting and walnuts."],
        [p.blueberryMuffinsRack, "Blueberry Muffins", "Cooling on the wire rack."],
        [p.baklavaTray, "Pistachio Baklava", "Cut into diamonds, ready for the tray."],
        [p.christmasStollenMincePies, "Christmas Bakes", "Stollen and mince pies."],
      ],
    },
    serve: {
      title: "How They Are Served",
      intro: "Sweet bakes in their setting.",
      items: [
        [g.turkishTeaBaklava, "Tea & Baklava", "Pistachio baklava with Turkish tea."],
        [g.jamDoughnut, "Jam Doughnut", "Sugared and filled with jam."],
        [p.gardenTeaCroissant, "Garden Tea", "A pot of tea in the garden."],
      ],
    },
    band: {
      src: p.hotCrossBuns,
      eyebrow: "Seasonal",
      title: "Hot Cross Buns for Easter",
      text: "Baked in trays, limited run each spring.",
    },
  },
};

export function CategoryExtras({ slug, children }: { slug: string; children?: ReactNode }) {
  const c = cats[slug];
  if (!c) return null;
  return (
    <>
      <Band tone="bg-secondary" pad="py-24">
        <Feature
          src={c.feature.src}
          title={c.feature.title}
          caption={c.feature.caption}
          eyebrow={c.feature.eyebrow}
          heading={c.feature.heading}
        >
          <p>{c.feature.body}</p>
          <Link to="/wholesale" className={btn}>
            Open a Trade Account
          </Link>
        </Feature>
      </Band>
      <Band pad="py-24">
        <Head eyebrow="The Craft" title={c.bench.title} intro={c.bench.intro} />
        <Tiles items={c.bench.items} cols="lg:grid-cols-4" cls="aspect-[4/5]" />
      </Band>
      <Band tone="bg-secondary" pad="py-24">
        <Head eyebrow="On the Menu" title={c.serve.title} intro={c.serve.intro} />
        <Tiles items={c.serve.items} cls="aspect-[4/3]" />
      </Band>
      {children}
      <CtaBand src={c.band.src} eyebrow={c.band.eyebrow} title={c.band.title} text={c.band.text} />
    </>
  );
}

/* ───────────── PRODUCT PAGES ───────────── */
