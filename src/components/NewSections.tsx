import type { ReactNode } from "react";
import { n } from "@/lib/new-photos";
import { Band, Feature, Head } from "@/components/ExtraSections";
import { Tiles, CtaBand } from "@/components/PageSections";

type Item = [src: string, title: string, text: string];
type TilesBlock = {
  k: "t";
  eyebrow: string;
  title: string;
  intro: string;
  items: Item[];
  cols?: string;
  cls?: string;
};
type FeatBlock = {
  k: "f";
  src: string;
  title: string;
  caption: string;
  eyebrow: string;
  heading: string;
  body: string;
  flip?: boolean;
};
type CtaBlock = {
  k: "c";
  src: string;
  eyebrow: string;
  title: string;
  text: string;
  to?: "/contact" | "/wholesale" | "/about";
};
type Block = TilesBlock | FeatBlock | CtaBlock;

const C4 = "lg:grid-cols-4";
const WIDE = "aspect-[4/3]";
const TALL = "aspect-[3/4]";

function Blocks({ blocks }: { blocks: Block[] }): ReactNode {
  let band = 0;
  return (
    <>
      {blocks.map((b, i) => {
        if (b.k === "c")
          return (
            <CtaBand
              key={i}
              src={b.src}
              eyebrow={b.eyebrow}
              title={b.title}
              text={b.text}
              {...(b.to ? { to: b.to } : {})}
            />
          );
        const tone = band++ % 2 ? "bg-secondary" : "";
        if (b.k === "f") {
          return (
            <Band key={i} tone={tone} pad="py-24">
              <Feature
                src={b.src}
                title={b.title}
                caption={b.caption}
                eyebrow={b.eyebrow}
                heading={b.heading}
                {...(b.flip ? { flip: true } : {})}
              >
                <p>{b.body}</p>
              </Feature>
            </Band>
          );
        }
        return (
          <Band key={i} tone={tone} pad="py-24">
            <Head eyebrow={b.eyebrow} title={b.title} intro={b.intro} />
            <Tiles
              items={b.items}
              {...(b.cols ? { cols: b.cols } : {})}
              {...(b.cls ? { cls: b.cls } : {})}
            />
          </Band>
        );
      })}
    </>
  );
}

/* ───────────── HOME ───────────── */
const home: Block[] = [
  {
    k: "t",
    eyebrow: "The City We Feed",
    title: "London on the Doorstep",
    intro: "From café terraces to flower-market streets, our bread goes wherever London eats.",
    cls: WIDE,
    items: [
      [
        n.londonCafeCroissant,
        "Café Terrace Croissant",
        "A croissant and a cappuccino on a cobbled London street.",
      ],
      [
        n.londonFlowerMarket,
        "Market-Street Mornings",
        "Flower stalls and busy crowds, in the neighbourhoods we deliver to.",
      ],
      [
        n.londonSkylineDusk,
        "The Capital at Dusk",
        "Our vans cross the river long before the city wakes.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Counter Favourites",
    title: "Four Bakes That Sell Themselves",
    intro: "The ones that make a customer stop at the glass.",
    cols: C4,
    items: [
      [
        n.croissantHoneycombCut,
        "Honeycomb Croissant",
        "Cut it open and the laminated layers tell the whole story.",
      ],
      [
        n.focacciaOliveRosemary,
        "Olive & Rosemary Focaccia",
        "Dimpled, glossy with oil and baked with olives on top.",
      ],
      [
        n.blueberryMuffinBroken,
        "Blueberry Muffin",
        "Broken open, with purple fruit and a crumble crust.",
      ],
      [
        n.sconeJamCream,
        "Scone, Jam & Cream",
        "A split scone with strawberry jam and clotted cream.",
      ],
    ],
  },
  {
    k: "c",
    src: n.wheatFieldSunrise,
    eyebrow: "Where It Starts",
    title: "Grown, Milled, Baked",
    text: "Wheat from the field at sunrise becomes the flour in every loaf we bake overnight.",
    to: "/about",
  },
];

/* ───────────── ABOUT ───────────── */
const about: Block[] = [
  {
    k: "t",
    eyebrow: "Field to Bench",
    title: "From Field to Bench",
    intro: "We know where our grain comes from and how long our dough should rest.",
    cols: C4,
    items: [
      [
        n.farmerBakerHandshake,
        "Farmers We Know",
        "A handshake in the wheat between a farmer and a baker.",
      ],
      [
        n.stoneMillMiller,
        "The Old Stone Mill",
        "A miller tips grain into the stones, the slow way to flour.",
      ],
      [
        n.flourSacksPallet,
        "Flour, Stored Dry",
        "Sacks stacked on pallets in a clean, cool store room.",
      ],
      [
        n.bulkDoughTub,
        "Dough, Left to Rest",
        "A tub of dough fermenting slowly before it is shaped.",
      ],
    ],
  },
  {
    k: "f",
    src: n.bakersLaughingBench,
    title: "Breaking Bread Together",
    caption: "The team shares a bench, a pot of tea and a laugh.",
    eyebrow: "The Team",
    heading: "A Bakery That Eats Together",
    body: "Shifts end around the bench with tea and something warm from the oven. It is how new bakers learn what a good loaf should taste like.",
  },
  {
    k: "t",
    eyebrow: "Hands at Work",
    title: "Shaped by Hand, Every Night",
    intro: "Machines help with the weight, but the shaping stays human.",
    cols: C4,
    cls: TALL,
    items: [
      [
        n.bakerShapingLongDough,
        "A Long Dough, Laid Out",
        "A baker shapes a long loaf on a floured bench.",
      ],
      [
        n.bakerStretchingDough,
        "Stretching the Dough",
        "Wet dough pulled and folded to build strength.",
      ],
      [
        n.bakerKneadingSeededDough,
        "Kneading in Seeds",
        "A ball of dough rolled through a bed of seeds.",
      ],
      [n.bakerRollingDough, "Rolling It Out", "Dough rolled flat for flatbreads and pastry."],
    ],
  },
  {
    k: "f",
    src: n.familyBakersShop,
    flip: true,
    title: "Behind the Counter",
    caption: "A family at work behind a bakery counter.",
    eyebrow: "Family",
    heading: "Bakers in the Family",
    body: "Recipes get handed down in a bakery the same way they do at home: by watching, helping and finally being trusted with the dough.",
  },
  {
    k: "t",
    eyebrow: "Between the Ovens",
    title: "Shaping, Proving, Baking",
    intro: "The quiet middle of the night shift, when dough becomes bread.",
    cls: WIDE,
    items: [
      [
        n.bakerShapingBoule,
        "Shaping a Boule",
        "A round loaf formed with floured hands on the bench.",
      ],
      [
        n.bakerBanneton,
        "Into the Banneton",
        "A baker settles shaped dough into its proving basket.",
      ],
      [
        n.bakerTrolleyDoughBalls,
        "Rolls Off the Trolley",
        "A tray of golden rolls is pulled from the rack.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Weighed & Measured",
    title: "Every Batch the Same",
    intro: "Consistency is a promise to the shops that sell our bread.",
    cls: WIDE,
    items: [
      [
        n.bakerWeighingClipboard,
        "Weighed to the Gram",
        "Scales and a clipboard keep each batch on spec.",
      ],
      [n.mixerBowlDough, "The Mixer at Work", "A large bowl of dough turns in the spiral mixer."],
      [
        n.bakerDoughDivider,
        "Portioning by Machine",
        "A divider cuts dough into even pieces for the rolls.",
      ],
    ],
  },
  {
    k: "f",
    src: n.bakerHoldingLoafFace,
    title: "Proud of the Loaf",
    caption: "A baker holds a fresh crust close.",
    eyebrow: "Pride",
    heading: "A Loaf Worth Holding",
    body: "A good crust crackles as it cools. After thousands of loaves, our bakers still lift the first one out of every bake to listen to it.",
  },
  {
    k: "t",
    eyebrow: "Records & Racks",
    title: "Old Recipes, New Racks",
    intro: "Handwritten notes on one side of the hall, tomorrow’s bread on the other.",
    cls: "aspect-[16/10]",
    cols: "md:grid-cols-2",
    items: [
      [n.oldRecipeBookWheat, "The Old Recipe Book", "An open recipe book beside a sheaf of wheat."],
      [
        n.racksTrolleysBakery,
        "Racks of Tomorrow’s Bread",
        "Trolleys loaded with trays in the bakery.",
      ],
    ],
  },
  {
    k: "c",
    src: n.productionHallOvens,
    eyebrow: "The Production Hall",
    title: "Where the Night’s Bread Begins",
    text: "Deck ovens, racks and a team that starts while London sleeps.",
    to: "/wholesale",
  },
];

/* ───────────── WHOLESALE ───────────── */
const wholesale: Block[] = [
  {
    k: "t",
    eyebrow: "Before Dawn",
    title: "Loaded Before the City Wakes",
    intro: "Vans leave the yard while the streets are still quiet.",
    cls: WIDE,
    items: [
      [n.vanLoadingDawn, "Vans at First Light", "A delivery van is loaded at the depot at dawn."],
      [
        n.streetDeliveryHandover,
        "A Handover on the Doorstep",
        "A baker hands a crate to a shop owner.",
      ],
      [
        n.palletBreadCrates,
        "Pallets of Bread Crates",
        "Crates stacked high and ready for the round.",
      ],
    ],
  },
  {
    k: "f",
    src: n.coldStoreBoxes,
    title: "Dry Store & Cold Store",
    caption: "Boxes and shelving, labelled and stacked.",
    eyebrow: "Stock Control",
    heading: "Everything Has Its Place",
    body: "Packaging and ingredients sit on labelled shelves in clean, cool rooms, so every order is picked, packed and traced the same way.",
  },
  {
    k: "t",
    eyebrow: "Packed Your Way",
    title: "Boxes, Bags & Crates",
    intro: "However your shop or kitchen likes to receive it.",
    cols: C4,
    items: [
      [n.crateBaggedBuns, "Bagged Buns in Crates", "Buns bagged and crated for the shop shelf."],
      [
        n.cratePaperBaggedLoaves,
        "Paper-Bagged Loaves",
        "Loaves in paper bags, stacked in a wooden crate.",
      ],
      [
        n.boxFlatbreadStacks,
        "Boxed Flatbread Stacks",
        "Thin flatbreads layered in a cardboard box.",
      ],
      [n.stackedCakeBoxes, "Cake Boxes, Stacked", "White boxes ready for the next café delivery."],
    ],
  },
  {
    k: "t",
    eyebrow: "Shelves That Sell",
    title: "Where Our Bread Ends Up",
    intro: "Neighbourhood shops across London and the Home Counties.",
    cls: WIDE,
    items: [
      [n.shopWindowLoaves, "The Shop Window", "Loaves in a basket behind the glass."],
      [
        n.shopkeeperCounterFlowers,
        "Behind the Counter",
        "A shopkeeper beside flowers and full shelves.",
      ],
      [
        n.bakeryShopInterior,
        "A Shop Full of Bread",
        "A neighbourhood bakery with a customer browsing.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Trade Everywhere",
    title: "Counters, Stalls & Doorsteps",
    intro: "Wholesale reaches further than the shop front.",
    cls: WIDE,
    items: [
      [n.busyBakeryCounter, "Busy Counters", "Customers queue at a crowded bakery counter."],
      [n.farmersMarketStall, "Market Stalls", "A farmers' market stall under a blue canopy."],
      [n.bakerHandingBasket, "Doorstep Service", "A baker hands a basket of bread to a customer."],
    ],
  },
  {
    k: "f",
    src: n.deliveryRouteMap,
    flip: true,
    title: "Planning Your Round",
    caption: "A route map pinned on the bakery wall.",
    eyebrow: "Delivery",
    heading: "Your Round, Planned",
    body: "Every drop is mapped by hand and checked against your opening hours, so the bread arrives when your staff are there to take it in.",
  },
];

/* ───────────── CONTACT ───────────── */
const contact: Block[] = [
  {
    k: "f",
    src: n.orderDeskPhoneNotebook,
    title: "The Order Desk",
    caption: "A phone, a notebook and a floury desk.",
    eyebrow: "The Order Desk",
    heading: "Written Down, Read Back",
    body: "Orders are written down, read back and checked against your standing list, so what you asked for is what arrives.",
  },
  {
    k: "t",
    eyebrow: "Sample Boxes",
    title: "What Arrives in a Sample Box",
    intro: "Small, warm and boxed, so you can taste before you commit.",
    cls: WIDE,
    items: [
      [n.boxGoldenSesameBakes, "Golden Bakes, Boxed", "Bakes packed in a plain cardboard box."],
      [
        n.boxSmallRoundBakes,
        "Small Round Bakes",
        "A box lined edge to edge with small round bakes.",
      ],
      [n.boxSeededBuns, "Seeded Buns", "A box of buns with a golden, seeded top."],
    ],
  },
];

/* ───────────── FOODS ───────────── */
const foods: Block[] = [
  {
    k: "t",
    eyebrow: "Hotels & Restaurants",
    title: "Service at the Pass",
    intro: "Bread baskets, breakfast counters and tables dressed in white.",
    cls: WIDE,
    items: [
      [
        n.restaurantDiningHall,
        "The Dining Room",
        "White tablecloths, bread baskets and a full house.",
      ],
      [
        n.hotelBuffetPastryTray,
        "Hotel Breakfast Counter",
        "A tray of pastries beside the coffee urns.",
      ],
      [
        n.breakfastBoardPastries,
        "The Breakfast Board",
        "Breads, pastries and butter laid out to share.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Cafés & Counters",
    title: "Bakes for the Coffee Trade",
    intro: "Easy to display, quick to serve, good beside a flat white.",
    cols: C4,
    items: [
      [
        n.rainyWindowCinnamonRoll,
        "Rainy-Day Cinnamon Roll",
        "A cinnamon roll and a cappuccino by a wet London window.",
      ],
      [
        n.stationMuffinCoffee,
        "Muffin & Coffee",
        "A muffin on a station table, next to the morning paper.",
      ],
      [n.coupleCafeBread, "A Bread Board to Share", "Two friends tearing bread at a café table."],
      [
        n.deliSandwichesPaper,
        "Deli Sandwiches",
        "Stuffed bread halves on paper at a deli counter.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Burgers, Wraps & Fireside",
    title: "Buns and Breads for the Hot Line",
    intro: "Bakes that stand up to fillings, sauce and a busy kitchen.",
    cls: WIDE,
    items: [
      [
        n.burgerKitchenLine,
        "The Burger Kitchen",
        "A busy line of cooks building burgers on soft buns.",
      ],
      [n.shawarmaWrapCounter, "Shawarma Wrap", "A wrap in paper at a kebab counter."],
      [
        n.bonfireNightHotDog,
        "Bonfire-Night Hot Dog",
        "A hot dog in a roll, with a sparkler and a bonfire behind.",
      ],
    ],
  },
  {
    k: "t",
    eyebrow: "Celebrations & Tea",
    title: "Tables Set for the Occasion",
    intro: "Street parties, iftar tables and long afternoons with cake.",
    cls: WIDE,
    items: [
      [n.friendsTeaCake, "Cake with Friends", "Friends sharing a sponge cake over tea."],
      [n.iftarTableDates, "The Iftar Table", "Dates, doughnuts and sweets on a festive tray."],
      [
        n.streetPartyBunting,
        "The Street Party",
        "Long tables of cakes under bunting on a terraced street.",
      ],
    ],
  },
];

/* ───────────── GLOSSARY ───────────── */
const glossary: Block[] = [
  {
    k: "t",
    eyebrow: "Terms You Can See",
    title: "Crumb, Crust, Layers & Baskets",
    intro: "Four words from the bakehouse, each beside the thing itself.",
    cols: C4,
    items: [
      [n.sourdoughCrumbSlice, "Crumb", "The open, holey inside of a sourdough slice."],
      [n.sourdoughCrustCloseup, "Crust", "A blistered, deep-brown crust close up."],
      [n.painAuChocolatCut, "Lamination", "Flaky layers in a halved pain au chocolat."],
      [n.bannetonShelves, "Banneton", "Shelves of proving baskets, ready for the next shape."],
    ],
  },
  {
    k: "t",
    eyebrow: "More Terms",
    title: "Couche & Simit",
    intro: "Two more words you will hear on the bakery floor.",
    cls: "aspect-[16/10]",
    cols: "md:grid-cols-2",
    items: [
      [n.baguettesOnCouche, "Couche", "Baguettes resting in the folds of a floured linen."],
      [n.sesameSimitTorn, "Simit", "A sesame-crusted ring torn open to show a soft centre."],
    ],
  },
];

/* ───────────── BAKEHOUSE INDEX ───────────── */
const bakehouse: Block[] = [
  {
    k: "t",
    eyebrow: "Through the Day",
    title: "From Morning Toast to Evening Trays",
    intro: "Breakfast, afternoon tea and the late bakes coming off the racks.",
    cls: WIDE,
    items: [
      [
        n.windowTeaToast,
        "Morning Toast & Tea",
        "Toast, a pot of tea and the garden through the window.",
      ],
      [
        n.gardenTeaTableWisteria,
        "Afternoon Tea in the Garden",
        "A teapot, scones and cream among the wisteria.",
      ],
      [
        n.trolleyTraysGoldenStrips,
        "Trays Off the Trolley",
        "Golden bakes cooling on a trolley before boxing.",
      ],
    ],
  },
];

/* ───────────── CATEGORY PAGES ───────────── */
const category: Record<string, Block[]> = {
  loaves: [
    {
      k: "t",
      eyebrow: "Crumb & Crust",
      title: "Open It Up",
      intro: "The best test of a loaf is the first slice.",
      cols: C4,
      items: [
        [
          n.sourdoughBouleCutOpen,
          "Sourdough Boule, Cut Open",
          "A big, blistered crust and a wide-open crumb.",
        ],
        [n.loafCutOpenCrumb, "A Loaf Split in Half", "Even holes through a pale, soft inside."],
        [
          n.longLoafCutCrumb,
          "A Long Loaf, Sliced",
          "Crackling crust and tender crumb on the board.",
        ],
        [
          n.sourdoughBouleBoard,
          "Boule on the Board",
          "A flour-dusted round loaf cooling by the window.",
        ],
      ],
    },
    {
      k: "f",
      src: n.handsTearingWarmLoaf,
      title: "Torn While Warm",
      caption: "Hands pull apart a steaming loaf.",
      eyebrow: "Fresh Bread",
      heading: "Best Eaten Warm",
      body: "The first loaves out of the oven still steam when they are broken, and the crust shatters at the touch.",
    },
    {
      k: "t",
      eyebrow: "Sliced, Tinned & Crated",
      title: "Ready for the Counter",
      intro: "Sandwich loaves and rustic rounds, packed for service.",
      cls: WIDE,
      items: [
        [
          n.slicedWhiteLoafCloth,
          "Sliced White Loaf",
          "A white loaf cut into thick slices on linen.",
        ],
        [n.tinLoafOutOfTin, "Tin Loaf Turned Out", "A baker slides a tin loaf from its tin."],
        [n.crateRusticBoules, "Crate of Rustic Boules", "Floury round loaves in a wooden crate."],
      ],
    },
  ],
  continental: [
    {
      k: "t",
      eyebrow: "Table Breads",
      title: "Oil, Herbs & Dimples",
      intro: "Breads that arrive at the table already glistening.",
      cls: WIDE,
      items: [
        [n.ciabattaOliveOil, "Ciabatta & Olive Oil", "Rustic loaves beside a bottle of olive oil."],
        [
          n.bakerPressingFocaccia,
          "Focaccia, Pressed by Hand",
          "A baker presses fingertips into a tray of focaccia.",
        ],
        [
          n.dimpledSeededBread,
          "Seeded Dimpled Bread",
          "A textured loaf with deep dimples and a seeded top.",
        ],
      ],
    },
    {
      k: "f",
      src: n.chefHoldingLoafKitchen,
      title: "Straight to the Pass",
      caption: "A chef checks a loaf in a restaurant kitchen.",
      eyebrow: "Restaurant Kitchens",
      heading: "Bread Chefs Trust",
      body: "Kitchens that plate dozens of covers an hour rely on bread that arrives on time and bakes the same way every day.",
    },
  ],
  "rolls-buns": [
    {
      k: "t",
      eyebrow: "By the Tray & Crate",
      title: "Rolls by the Hundred",
      intro: "Plain, seeded and soft, baked in even batches.",
      cols: C4,
      items: [
        [n.whiteRollsWoodenTray, "Tray of White Rolls", "A wooden tray of floury white rolls."],
        [n.whiteRollsCrate, "Crate of Floured Rolls", "Round white rolls in a rustic crate."],
        [n.seededRollsCrate, "Crate of Seeded Rolls", "Brown rolls crusted with seeds."],
        [n.softDinnerRollsTray, "Soft Dinner Rolls", "A tray of rolls baked tight together."],
      ],
    },
    {
      k: "f",
      src: n.glazedBunsTray,
      title: "Glazed Buns, Fresh from the Oven",
      caption: "A tray of shiny, golden buns.",
      eyebrow: "Enriched Dough",
      heading: "Glossy Tops, Soft Middles",
      body: "Brioche-style buns are glazed as they leave the oven, so they hold a shine and stay soft for a burger or a sandwich.",
    },
    {
      k: "t",
      eyebrow: "Ways to Serve",
      title: "Baskets, Buns & Burgers",
      intro: "Rolls that earn their place on the table or the pass.",
      cols: C4,
      items: [
        [n.sesameBunCut, "Sesame Bun, Cut Open", "A sesame-topped bun split on a board."],
        [
          n.basketRusticRolls,
          "Basket of Rustic Rolls",
          "Crusty rolls piled in a basket on the counter.",
        ],
        [
          n.basketRoundRolls,
          "Round Rolls in a Basket",
          "Floury rolls ready for the lunchtime rush.",
        ],
        [
          n.seededRollsBenchCrates,
          "Crates of Seeded Rolls",
          "Seeded rolls in wooden crates on a steel bench.",
        ],
      ],
    },
    {
      k: "t",
      eyebrow: "Out & About",
      title: "Packed to Go",
      intro: "From the foil tray to a seaside bench.",
      cols: C4,
      cls: WIDE,
      items: [
        [n.seafrontBagBuns, "A Bag of Buns by the Sea", "A paper bag of buns on a seafront bench."],
        [n.boxBriocheRolls, "Brioche Rolls in a Box", "Soft rolls boxed on baking paper."],
        [n.foilTrayGoldenBuns, "Foil Tray of Golden Buns", "Rows of buns baked in a foil tray."],
        [n.boxBreadTwists, "Bread Twists, Boxed", "Golden twists packed in a cardboard box."],
      ],
    },
  ],
  flatbreads: [
    {
      k: "t",
      eyebrow: "Tandoor & Stone",
      title: "Charred, Blistered, Baked Hot",
      intro: "Flatbreads need fierce heat for those dark spots.",
      cols: C4,
      items: [
        [
          n.largeCharredFlatbread,
          "Large Charred Flatbread",
          "A wide flatbread blistered in the oven.",
        ],
        [
          n.charredRoundFlatbread,
          "Charred Round Flatbread",
          "Black blisters across a golden round.",
        ],
        [n.spiralCoiledBreads, "Spiral-Coiled Breads", "Round coiled breads on a floured bench."],
        [n.pideOvalsParchment, "Pide Ovals on Parchment", "Oval flatbreads baked on paper."],
      ],
    },
    {
      k: "f",
      src: n.lavashCrateTandoor,
      title: "Stacked by the Tandoor",
      caption: "A crate of thin lavash beside the clay oven.",
      eyebrow: "Behind the Range",
      heading: "Baked Through the Night",
      body: "Thin lavash and sangak come off the oven in stacks and are crated while still warm, ready for the early drops.",
    },
    {
      k: "t",
      eyebrow: "Barbari & Sangak",
      title: "Persian Breads",
      intro: "Long, seeded and ridged breads from the Persian table.",
      cols: C4,
      items: [
        [
          n.barbariSeededCloseup,
          "Barbari, Close Up",
          "Sesame and nigella seeds on a ridged crust.",
        ],
        [
          n.barbariNigellaLoaf,
          "Barbari with Nigella",
          "A long loaf with deep ridges and black seeds.",
        ],
        [n.sangakInPaper, "Sangak in Paper", "Ribbed sangak wrapped in baking paper."],
        [n.sangakDryingRack, "Sangak Drying on the Rack", "Dark sangak hung beside the oven."],
      ],
    },
    {
      k: "t",
      eyebrow: "Stacked & Folded",
      title: "Thin, Soft & Ready to Roll",
      intro: "Wraps, kebabs and mezze all start with a stack.",
      cols: C4,
      items: [
        [
          n.oiledFlatbreadStackTray,
          "Flatbread with Herb Oil",
          "A stack on a tray with a dish of oil and herbs.",
        ],
        [
          n.thinFlatbreadStackCloth,
          "Thin Flatbreads on Linen",
          "A stack of thin breads on a cloth.",
        ],
        [n.foldedLavashLinen, "Folded Lavash", "Neatly folded lavash on a linen cloth."],
        [n.flatbreadStackBasket, "Flatbreads in a Basket", "A basket of stacked flatbreads."],
      ],
    },
    {
      k: "t",
      eyebrow: "Counter & Boxes",
      title: "From the Basket to the Box",
      intro: "However your kitchen takes delivery.",
      cols: C4,
      cls: WIDE,
      items: [
        [n.pitaRoundsBasket, "Pitta Rounds in a Basket", "Soft pitta breads in a woven basket."],
        [
          n.herbFlatbreadsTray,
          "Herb Flatbreads, Stacked",
          "Herb-topped flatbreads piled on a tray.",
        ],
        [
          n.flatbreadSpreadOverhead,
          "A Table of Flatbreads",
          "Naan, lavash and barbari laid out with dips.",
        ],
        [
          n.flatbreadSheetsTray,
          "Flatbread Sheets on a Tray",
          "Thin sheets stacked in a steel tray.",
        ],
      ],
    },
  ],
  pastries: [
    {
      k: "t",
      eyebrow: "Laminated & Layered",
      title: "Butter, Almonds & Pistachio",
      intro: "Croissants in the styles that sell.",
      cols: C4,
      items: [
        [
          n.pistachioCroissantCut,
          "Pistachio Croissant",
          "A halved croissant with green pistachio cream.",
        ],
        [
          n.almondCroissantsBench,
          "Almond Croissants",
          "Almond-topped croissants on a baker’s bench.",
        ],
        [
          n.pistachioCroissantsPlate,
          "Pistachio Croissants on a Plate",
          "Croissants scattered with chopped pistachios.",
        ],
        [
          n.windowTrayCroissants,
          "The Patisserie Window",
          "A tray of croissants behind a shop window.",
        ],
      ],
    },
    {
      k: "f",
      src: n.bakerPipingPistachio,
      title: "Piped by Hand",
      caption: "A pastry chef pipes pistachio cream.",
      eyebrow: "Finishing",
      heading: "Filled Fresh, After Baking",
      body: "Pistachio cream and custard go in after baking, so the pastry stays crisp until it is bitten.",
    },
    {
      k: "t",
      eyebrow: "From the Bench",
      title: "Rolled, Brushed & Filled",
      intro: "Pastry is patient work.",
      cols: C4,
      cls: TALL,
      items: [
        [n.bakerLaminatingButter, "Laminating Butter", "A pastry chef folds butter into dough."],
        [
          n.pastryChefFillingDanish,
          "Filling Danish",
          "A pastry chef fills Danish pastries on a tray.",
        ],
        [n.bakerBrushingFilo, "Brushing the Filo", "Butter brushed over a sheet of filo."],
        [
          n.bakerFillingPistachioCroissants,
          "Filling Pistachio Croissants",
          "A baker works at a bench full of croissants.",
        ],
      ],
    },
    {
      k: "t",
      eyebrow: "Danish & Cinnamon",
      title: "Fruit, Custard & Spice",
      intro: "Sweet pastries that sell at the till.",
      cols: C4,
      items: [
        [n.fruitDanishBerries, "Fruit Danish", "A Danish topped with berries and custard."],
        [
          n.fruitDanishTray,
          "Tray of Fruit Danishes",
          "Strawberry and apricot Danishes on a board.",
        ],
        [n.cinnamonRollPulled, "Cinnamon Roll, Pulled Apart", "A soft, sticky roll pulled in two."],
        [n.cinnamonRollsTray, "Tray of Cinnamon Rolls", "Rolls baked side by side in one tray."],
      ],
    },
    {
      k: "t",
      eyebrow: "Boxed & Displayed",
      title: "Ready for the Cabinet",
      intro: "Packed for the van and set out for the day.",
      cls: WIDE,
      items: [
        [n.boxCroissants, "A Box of Croissants", "Croissants packed in a cardboard box."],
        [n.boxCinnamonBuns, "Cinnamon Buns, Boxed", "A box of swirled cinnamon buns."],
        [
          n.displayTrayGoldenPastries,
          "Golden Pastries on Display",
          "A tray of golden pastries in a glass counter.",
        ],
      ],
    },
  ],
  "cakes-sweets": [
    {
      k: "t",
      eyebrow: "The Cake Stand",
      title: "Sponge, Jam & Carrot Cake",
      intro: "Classic British cakes, cut generously.",
      cols: C4,
      items: [
        [
          n.victoriaSpongeSlice,
          "Victoria Sponge Slice",
          "Jam and cream between two golden sponges.",
        ],
        [n.spongeCakeStand, "Sponge on a Cake Stand", "A sponge beside a teapot by the window."],
        [
          n.carrotCakeSlicePlate,
          "Carrot Cake Slice",
          "A slice with cream-cheese frosting and walnuts.",
        ],
        [
          n.carrotCakeTrayBake,
          "Carrot Cake Tray Bake",
          "A tray of frosted carrot cake, ready to cut.",
        ],
      ],
    },
    {
      k: "f",
      src: n.baklavaFoilTray,
      title: "Baklava, Fresh from the Oven",
      caption: "A foil tray of pistachio baklava.",
      eyebrow: "Sweet Traditions",
      heading: "Syrup, Filo & Pistachio",
      body: "Baklava is cut before it bakes and syrup-soaked as it comes out, so every piece is crisp on top and sticky below.",
    },
    {
      k: "t",
      eyebrow: "Tea Time",
      title: "Gardens, Fêtes & Cream Teas",
      intro: "Cakes that belong outdoors.",
      cls: WIDE,
      items: [
        [
          n.gardenBenchTeaCake,
          "Tea on the Garden Bench",
          "A slice of cake and a cup of tea among the flowers.",
        ],
        [n.villageFeteSponge, "The Village Fête", "A slice of sponge under the bunting."],
        [n.sconesCoolingRack, "Scones on the Rack", "Fruit scones cooling on a wire rack."],
      ],
    },
    {
      k: "t",
      eyebrow: "On Display",
      title: "For the Counter and the Tea Room",
      intro: "Cakes and buns under glass, set out to sell.",
      cls: "aspect-[16/10]",
      cols: "md:grid-cols-2",
      items: [
        [n.clocheCakeDisplay, "Cloches over Sweet Buns", "Glass domes shielding cinnamon rolls."],
        [n.cafeCakeTables, "The Café Cake Tables", "Cakes and scones on a crowded tea-room table."],
      ],
    },
  ],
};

export const HomeMore = () => <Blocks blocks={home} />;
export const AboutMore = () => <Blocks blocks={about} />;
export const WholesaleMore = () => <Blocks blocks={wholesale} />;
export const ContactMore = () => <Blocks blocks={contact} />;
export const FoodsMore = () => <Blocks blocks={foods} />;
export const GlossaryMore = () => <Blocks blocks={glossary} />;
export const BakehouseMore = () => <Blocks blocks={bakehouse} />;
export const CategoryMore = ({ slug }: { slug: string }) => (
  <Blocks blocks={category[slug] ?? []} />
);
