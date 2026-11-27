import type { GlossaryRich } from "./types";

export const content2: Record<string, GlossaryRich> = {
  autolyse: {
    imgs: [
      "new/baker-stretching-dough",
      "new/mixer-bowl-dough",
      "new/baker-rolling-dough",
      "pages/bakers-kneading-pair",
      "new/baker-dough-divider",
      "pages/recipe-book",
      "new/baker-shaping-long-dough",
      "serving/focaccia",
      "products/focaccia",
    ],
    story: {
      h: "A pause that does the kneading",
      p: [
        "Autolyse is a rest. Flour and water are mixed just until combined and then left, covered, before salt and yeast or starter are added. The technique is credited to the French baking professor Raymond Calvel, who described it in the 1970s as a way of improving the quality of bread made with machine mixing.",
        "During the rest, enzymes in the flour begin to break down starch and protein, and gluten forms by itself as the flour hydrates. When the dough is mixed again it is already smooth, extensible and easier to work. It needs less mixing, which in turn limits oxidation and preserves the creamy colour and wheaty flavour of the crumb.",
      ],
    },
    steps: {
      h: "How an autolyse is run",
      intro: "It adds a stage to the day but saves effort elsewhere.",
      items: [
        [
          "Mix flour and water",
          "Only the flour and the water are combined, to a shaggy mass with every trace of dry flour absorbed.",
        ],
        [
          "Cover and rest",
          "The dough is covered and left, typically for twenty minutes to an hour, depending on the flour and the room.",
        ],
        [
          "Add salt and leaven",
          "Salt is added after the rest because it tightens gluten. Yeast or starter goes in with it.",
        ],
        [
          "Mix and ferment",
          "The dough is mixed briefly to incorporate the additions, then goes into bulk fermentation.",
        ],
      ],
    },
    table: {
      h: "What changes with an autolyse",
      intro: "A comparison of the same dough, mixed straight through and mixed after a rest.",
      head: ["Quality", "Straight to mix", "With autolyse"],
      rows: [
        ["Mixing time", "Longer", "Shorter"],
        ["Dough feel", "Tighter, springs back", "Smooth, extensible"],
        ["Crumb", "Often tighter", "More open, easier to achieve"],
        ["Flavour", "Can be flatter if overmixed", "Sweeter, more wheaten"],
      ],
    },
    faq: [
      [
        "Should I include the starter in an autolyse?",
        "Many bakers hold it back, as fermentation begins as soon as the starter is added. Others include it as a variant, sometimes called a fermentolyse.",
      ],
      [
        "Does it suit enriched dough?",
        "It is less useful for heavily enriched doughs, where fat and sugar change how the flour hydrates.",
      ],
      [
        "Can it go on too long?",
        "Yes. With very weak flour, a long rest can allow enzymes to break down too much gluten.",
      ],
    ],
    notes: {
      h: "Practical notes",
      items: [
        [
          "Use it for wetter doughs",
          "High hydration breads gain the most from the rest, since the flour has more time to absorb water.",
        ],
        [
          "Wholemeal benefits most",
          "Bran takes longer to hydrate, so wholemeal doughs improve noticeably after a rest.",
        ],
        [
          "Keep covered",
          "A dry skin on the surface forms lumps that stay separate within the final dough.",
        ],
      ],
    },
    pull: "The simplest technique in the book: stop, and let the flour do the work.",
    trade:
      "Autolyse is a production technique rather than a product. If you need a long-fermented loaf for a menu, speak to the order desk about the breads in our Loaves and Continental ranges.",
    caps: [
      "Dough stretched by hand",
      "Flour and water, resting in the bowl",
      "Shaped after a patient rest",
    ],
  },
  "enriched-dough": {
    imgs: [
      "gallery/brioche-trays",
      "new/box-brioche-rolls",
      "pages/brioche-loaf-cut",
      "new/glazed-buns-tray",
      "new/foil-tray-golden-buns",
      "new/sesame-bun-cut",
      "new/cinnamon-roll-pulled",
    ],
    story: {
      h: "When bread is given butter, milk and sugar",
      p: [
        "An enriched dough starts from the same flour, water and yeast as a plain loaf and then adds richness: butter, milk, eggs, sugar, sometimes cream. Each ingredient changes the bread. Fat tenderises the crumb, sugar feeds the yeast and encourages browning, and milk and eggs add colour and a softer, finer texture.",
        "The range is wide. Hot cross buns, Chelsea buns and teacakes are enriched, so are brioche, burger buns and cinnamon rolls. At the lightly enriched end are soft sandwich rolls, and at the other end brioche may contain butter at half the weight of the flour.",
      ],
    },
    steps: {
      h: "Working with richness",
      intro: "Enrichment slows yeast down and demands patience from the baker.",
      items: [
        [
          "Mix flour, water, yeast first",
          "The gluten is developed before fat is added, since fat coats the proteins and slows their bonding.",
        ],
        [
          "Add fat gradually",
          "Soft butter is incorporated in stages, giving the dough time to take it up and stay smooth.",
        ],
        [
          "Ferment slowly and cold",
          "A long, cool rest lets flavour build and firms the butter for easier shaping.",
        ],
        [
          "Egg wash and bake",
          "A glaze of egg and milk gives gloss. The sugar caramelises quickly, so the oven temperature is moderate.",
        ],
      ],
    },
    table: {
      h: "A spectrum of enrichment",
      intro: "From lightly enriched to rich, with typical uses.",
      head: ["Product", "Level of enrichment", "Typical use"],
      rows: [
        ["Soft roll", "Light", "Sandwiches, breakfast"],
        ["Burger bun", "Moderate", "Burgers, grilled fillings"],
        ["Cinnamon roll", "Moderate to rich", "Coffee counter, brunch"],
        ["Brioche", "Rich", "Fine dining, premium burgers, patisserie"],
      ],
    },
    faq: [
      [
        "Why does enriched dough take longer to rise?",
        "Sugar, salt and fat all slow yeast activity. More time or more yeast is needed to compensate.",
      ],
      [
        "Does it stay fresh longer?",
        "Fat and sugar help retain moisture, so enriched breads tend to stale more slowly than lean breads.",
      ],
      [
        "Is brioche always laminated?",
        "Brioche is enriched rather than laminated: butter and eggs are worked into the dough itself, whereas laminated doughs, such as croissants, fold butter in layers.",
      ],
    ],
    notes: {
      h: "On the menu",
      items: [
        [
          "Toast beautifully",
          "Sugar and milk help the crumb brown evenly, so buns toast well on the griddle.",
        ],
        [
          "Hold up to juicy fillings",
          "A tender crumb with a firm glazed top copes well with sauce and juices.",
        ],
        [
          "Mind the allergens",
          "Milk, eggs, wheat and sometimes sesame are likely. Always check the specification.",
        ],
      ],
    },
    pull: "Enrichment is craft, not ornament: every ingredient added to the dough changes how it bakes and how it eats.",
    trade:
      "Our Brioche Burger Bun, Cinnamon Roll and Sesame Burger Bun are made from enriched doughs. Ask the order desk for current specifications, including allergens.",
    caps: [
      "Brioche, baked and trayed",
      "Glazed buns with a golden top",
      "A cinnamon roll, pulled apart",
    ],
  },
  fermentation: {
    imgs: [
      "new/bulk-dough-tub",
      "new/sourdough-crumb-slice",
      "new/cold-store-boxes",
      "new/baker-weighing-clipboard",
      "pages/dough-flatlay-overhead",
      "new/racks-trolleys-bakery",
      "pages/baker-bun-proofing",
    ],
    story: {
      h: "Where flavour comes from",
      p: [
        "Fermentation is the process by which yeast and bacteria consume the sugars in flour and release carbon dioxide, alcohol and a range of organic acids. The gas inflates the dough, and the by-products supply much of bread’s flavour and aroma.",
        "Time and temperature are the two controls. A warm dough ferments quickly and produces a simpler, blunter flavour. A cool dough ferments slowly and develops a more complex taste, a better crumb and a longer shelf life. Many bakeries use refrigeration to slow the process to fit an overnight schedule, which is also why bread can be baked fresh for early morning delivery.",
      ],
    },
    steps: {
      h: "The stages of fermentation",
      intro: "The journey from mixing to baking passes through several distinct phases.",
      items: [
        [
          "Bulk fermentation",
          "After mixing, the dough rests as a single mass. Gluten strengthens and the first flavour compounds develop.",
        ],
        [
          "Division and shaping",
          "The dough is divided, rounded and shaped, with gas redistributed into smaller, finer cells.",
        ],
        [
          "Final proof",
          "Shaped pieces rest and rise to their final volume, warm for speed or cold for flavour.",
        ],
        [
          "Oven spring",
          "In the oven, yeast produces a last burst of gas before it is killed by heat and the crumb sets.",
        ],
      ],
    },
    table: {
      h: "Fast against slow",
      intro: "The trade-off between speed and flavour in bakery fermentation.",
      head: ["Factor", "Warm and fast", "Cool and slow"],
      rows: [
        ["Typical time", "1 to 3 hours", "12 to 24 hours or more"],
        ["Flavour", "Mild, simple", "Deeper, more complex"],
        ["Crumb", "Tighter, finer", "Often more open"],
        ["Keeping quality", "Shorter", "Usually longer"],
      ],
    },
    faq: [
      [
        "Does slow fermentation make bread healthier?",
        "Longer fermentation can change how some compounds in flour behave, but claims about health benefits vary. Our breads are described by flavour and craft alone.",
      ],
      [
        "What is the difference between yeast and sourdough fermentation?",
        "Baker’s yeast is a single cultivated strain. Sourdough uses a mixed culture of wild yeast and lactic acid bacteria, which adds acidity and a tang.",
      ],
      [
        "Can dough over-ferment?",
        "Yes. An over-fermented dough loses structure, bakes flat and tastes sour or alcoholic.",
      ],
    ],
    notes: {
      h: "Controlling the process",
      items: [
        [
          "Temperature is the lever",
          "A few degrees' difference in dough temperature changes the timing considerably.",
        ],
        [
          "Use the retarder",
          "Chilling dough overnight allows bakers to schedule production around early deliveries.",
        ],
        [
          "Let the dough set the pace",
          "Visible expansion and a light, airy feel are better guides than a timer.",
        ],
      ],
    },
    pull: "Anyone can make dough rise. Fermentation is the craft of deciding how long to wait.",
    trade:
      "Several of our breads, including the Sourdough Boule and Focaccia, rely on slow fermentation. Ask the order desk for the current production notes on any line.",
    caps: [
      "Dough in bulk fermentation",
      "Chilled and boxed for overnight rest",
      "The open crumb a slow rise produces",
    ],
  },
  hydration: {
    imgs: [
      "new/flour-sacks-pallet",
      "gallery/flour-butter-table",
      "new/stone-mill-miller",
      "new/ciabatta-olive-oil",
      "new/focaccia-olive-rosemary",
      "gallery/scales-notebook",
      "pages/flour-grains-bowls",
    ],
    story: {
      h: "The arithmetic of a wetter loaf",
      p: [
        "Hydration is the weight of water in a dough expressed as a percentage of the weight of flour. A dough with 700 grams of water to one kilogram of flour is at 70 per cent hydration. It is the figure bakers reach for first when describing a dough, because it predicts so much about its behaviour.",
        "A low-hydration dough is stiff, easy to handle and bakes into a tight, even crumb. A high-hydration dough is slack and sticky, and demands more skill, but produces a more open crumb, a thinner crust and a moist, glossy interior. Ciabatta and focaccia are typical high-hydration breads, while bagels and many flatbreads sit at the lower end.",
      ],
    },
    steps: {
      h: "Handling a wet dough",
      intro: "Working at higher hydration calls for different habits.",
      items: [
        [
          "Use strong flour",
          "A higher protein flour has the strength to hold more water and stay upright.",
        ],
        [
          "Mix in stages",
          "Water is added gradually so that the gluten can develop before the dough becomes too slack.",
        ],
        [
          "Build strength by folding",
          "Stretch and fold sessions during bulk fermentation add structure with only light handling.",
        ],
        [
          "Handle with wet hands",
          "Wet or lightly oiled hands prevent sticking and avoid tearing the delicate gas structure.",
        ],
      ],
    },
    table: {
      h: "Typical hydration by bread",
      intro: "Approximate ranges for common breads. Individual recipes vary.",
      head: ["Bread", "Hydration", "Result"],
      rows: [
        ["Bagel", "About 50 to 57%", "Dense, chewy"],
        ["Sandwich loaf", "About 60 to 65%", "Even, soft, sliceable"],
        ["Baguette", "About 65 to 75%", "Crisp crust, open crumb"],
        ["Ciabatta", "About 75 to 85%", "Very open, glossy, irregular"],
      ],
    },
    faq: [
      [
        "Is higher hydration always better?",
        "No. Different breads need different hydration. A sandwich loaf made too wet would be difficult to slice and hold fillings.",
      ],
      [
        "How do you calculate hydration?",
        "Divide the weight of water by the weight of flour and multiply by 100. Water in starters and other liquids counts toward the total.",
      ],
      [
        "Does wholemeal flour need more water?",
        "Yes. Bran and germ absorb more water than refined white flour, so wholemeal doughs generally need higher hydration to feel equivalent.",
      ],
    ],
    notes: {
      h: "In practice",
      items: [
        [
          "Flour varies",
          "Absorption changes with the flour, the season and even the storage conditions.",
        ],
        [
          "Scale accurately",
          "Weigh everything. Only weight measures are accurate enough to control hydration.",
        ],
        [
          "Bake hot and steamy",
          "Wet doughs need strong heat and steam to set their structure before they spread.",
        ],
      ],
    },
    pull: "A few percentage points of water change how a loaf looks, tastes and eats, which is why bakers weigh everything.",
    trade:
      "Our Ciabatta and Focaccia are higher-hydration breads in the Continental range. Ask the order desk about the current pack sizes and specifications.",
    caps: [
      "Flour, delivered by the pallet",
      "Butter and flour, weighed out on the bench",
      "Olive oil and rosemary on a wet dough",
    ],
  },
  levain: {
    imgs: [
      "new/sourdough-boule-board",
      "gallery/sourdough-boules",
      "gallery/sourdough-box",
      "new/baker-shaping-boule",
      "new/crate-paper-bagged-loaves",
      "new/farmers-market-stall",
      "new/wheat-field-sunrise",
    ],
    story: {
      h: "A culture that lives on flour and water",
      p: [
        "Levain is the French word for a natural leaven, a culture of wild yeasts and lactic acid bacteria sustained on flour and water. It is the engine of sourdough bread. When fed regularly, a healthy levain can be kept alive for years, and many bakeries maintain theirs continuously.",
        "Compared with commercial yeast, levain works slowly and adds acidity. Lactic acid gives a gentle tang, acetic acid a sharper note, and the combination improves keeping quality because acidity slows staling and mould. A well-managed levain gives a chewy crumb, a blistered crust and a flavour that is difficult to achieve any other way.",
      ],
    },
    steps: {
      h: "Keeping a levain healthy",
      intro: "A starter is a living thing and has routine needs.",
      items: [
        [
          "Feed regularly",
          "A portion of the culture is refreshed with new flour and water at set intervals, usually daily in a busy bakery.",
        ],
        [
          "Control the temperature",
          "A warm levain turns acidic more quickly. A cool one is milder and slower.",
        ],
        [
          "Build before mixing",
          "The day before baking, the levain is built up to the quantity required, called the final build.",
        ],
        [
          "Use at its peak",
          "The levain is used when it is domed, bubbly and aromatic, before it begins to collapse.",
        ],
      ],
    },
    table: {
      h: "Levain, poolish and biga",
      intro: "The three most common preferments compared.",
      head: ["Preferment", "Leavened by", "Character"],
      rows: [
        ["Levain", "Wild yeast and bacteria", "Tangy, complex, chewy"],
        ["Poolish", "Commercial yeast", "Mild, extensible, nutty"],
        ["Biga", "Commercial yeast", "Stiff, Italian, slightly sweet"],
        ["Straight dough", "Commercial yeast only", "Simple, quick, neutral"],
      ],
    },
    faq: [
      [
        "Is sourdough the same as levain?",
        "Sourdough is the bread. Levain is the culture used to leaven it.",
      ],
      [
        "Does sourdough contain yeast?",
        "It contains wild yeast, naturally present in the culture. Commercial baker’s yeast is typically left out, unless a baker adds some for reliability.",
      ],
      [
        "Is sourdough suitable for people with coeliac disease?",
        "Sourdough made from wheat or rye contains gluten and is therefore unsuitable for people with coeliac disease.",
      ],
    ],
    notes: {
      h: "Why bakers value it",
      items: [
        [
          "Flavour",
          "A levain contributes layers of taste that a straight yeast dough rarely matches.",
        ],
        ["Keeping quality", "Acidity slows staling, so the loaf stays fresh for longer."],
        [
          "Character",
          "Each bakery’s levain develops a flavour of its own, shaped by flour, water and routine.",
        ],
      ],
    },
    pull: "A levain is a living thing. It rewards routine, and punishes neglect.",
    trade:
      "Our Sourdough Boule is described in the catalogue as built on a 48-hour natural levain. Ask the order desk for the specification and production schedule.",
    caps: [
      "Boules on the board",
      "Sourdough, boxed for delivery",
      "A baker shaping a boule by hand",
    ],
  },
  poolish: {
    imgs: [
      "gallery/dough-bowl",
      "new/baker-pressing-focaccia",
      "pages/focaccia-restaurant",
      "pages/hotel-breakfast-table",
      "new/restaurant-dining-hall",
      "new/couple-cafe-bread",
      "new/baker-handing-basket",
    ],
    story: {
      h: "A wet starter with a Polish accent",
      p: [
        "A poolish is a loose preferment of equal weights of flour and water with a small pinch of yeast, left to ferment for several hours before it is added to the final dough. It is at 100 per cent hydration, so it looks like a thick batter, and it becomes bubbly, domed and slightly alcoholic in aroma when ready.",
        "The name suggests Polish origins. A popular account holds that Polish bakers brought the method to Vienna and then Paris in the nineteenth century, though historians remain cautious about the details. Its use is nevertheless well established in baguette and ciabatta making, where it contributes extensibility, a creamy crumb and an enhanced wheat flavour.",
      ],
    },
    steps: {
      h: "Making and using a poolish",
      intro: "It is among the simplest preferments to prepare.",
      items: [
        [
          "Weigh equal flour and water",
          "Equal weights of flour and water are mixed with a tiny amount of yeast.",
        ],
        [
          "Ferment for 8 to 16 hours",
          "Left covered at cool room temperature, it rises and eventually begins to dome and fall.",
        ],
        [
          "Use at its peak",
          "The poolish is added to the final dough when bubbles cover the surface and it has just begun to recede.",
        ],
        [
          "Adjust the final dough",
          "Flour and water already in the poolish are counted when calculating the overall recipe.",
        ],
      ],
    },
    table: {
      h: "Poolish compared with other preferments",
      intro: "Key differences, at a glance.",
      head: ["Feature", "Poolish", "Biga"],
      rows: [
        ["Consistency", "Liquid batter", "Stiff dough"],
        ["Hydration", "100%", "About 50 to 60%"],
        ["Typical use", "Baguette, ciabatta, focaccia", "Ciabatta, pizza, Italian breads"],
        ["Flavour", "Creamy, mild, nutty", "Slightly sweet, robust"],
      ],
    },
    faq: [
      [
        "How much flour in a recipe goes into the poolish?",
        "Commonly between 20 and 50 per cent of the total flour, depending on the bread.",
      ],
      [
        "Can I leave it too long?",
        "A poolish that has collapsed and smells sharply acidic is past its best and can weaken the dough.",
      ],
      [
        "Do I still need yeast in the final dough?",
        "Usually yes, though less than in a straight dough.",
      ],
    ],
    notes: {
      h: "For the baker",
      items: [
        ["Use a large container", "It will expand and then recede. Allow room to at least double."],
        ["Cool slows it down", "A cool kitchen allows a longer, more flavoursome fermentation."],
        [
          "Keep notes",
          "Record the time and temperature so that the result can be repeated consistently.",
        ],
      ],
    },
    pull: "A little yeast and a lot of time: the poolish asks for very little and gives back a great deal.",
    trade:
      "Our French Baguette and Ciabatta are described in the catalogue as using a poolish. Ask the order desk for the current specification.",
    caps: [
      "A bowl of fermenting dough",
      "Focaccia, pressed by hand",
      "Bread basket at a restaurant table",
    ],
  },
  preferment: {
    imgs: [
      "new/old-recipe-book-wheat",
      "pages/recipe-book",
      "new/baker-weighing-clipboard-2",
      "new/order-desk-phone-notebook",
      "new/bakery-shop-interior",
      "new/production-hall-ovens",
      "new/baker-handing-basket-2",
      "products/ciabatta",
      "products/granary-tin",
      "editorial/levain-jar",
    ],
    story: {
      h: "Building flavour the day before",
      p: [
        "A preferment is a portion of the final dough, or a flour-and-water mixture, prepared hours or days before the main mix. It gives yeast and bacteria a head start, so that more of the fermentation has taken place before the loaf is shaped. The preferment is then incorporated into the dough, together with fresh flour, water and salt.",
        "The family is large. Poolish is liquid. Biga is stiff. Pâte fermentée is simply a piece of old dough kept from the previous day. Levain is a natural sourdough starter. All of them extend fermentation time while keeping the baker’s time at the bench short, which is why commercial bakeries rely on them.",
      ],
    },
    steps: {
      h: "Why add a preferment",
      intro: "It brings practical benefits as well as flavour.",
      items: [
        ["Flavour", "Longer fermentation builds a deeper taste and aroma in the finished loaf."],
        [
          "Structure",
          "Enzyme activity and acidity improve the dough’s extensibility and gas retention.",
        ],
        [
          "Keeping quality",
          "Preferment breads often stay fresher for longer than straight doughs.",
        ],
        [
          "Planning",
          "The mixture can be made the day before, fitting neatly around an overnight production schedule.",
        ],
      ],
    },
    table: {
      h: "A guide to preferments",
      intro: "The main types, and where each is typically used.",
      head: ["Type", "Consistency", "Typical bread"],
      rows: [
        ["Poolish", "Liquid, 100% hydration", "Baguette, ciabatta"],
        ["Biga", "Stiff, about 50 to 60%", "Italian breads, pizza"],
        ["Pâte fermentée", "Dough, old and ripe", "Baguettes, rustic breads"],
        ["Levain", "Variable, wild culture", "Sourdough, rye"],
      ],
    },
    faq: [
      [
        "Is a preferment the same as a starter?",
        "A starter, such as a levain, is a preferment that is kept alive and refreshed. Other preferments are made fresh for each batch.",
      ],
      [
        "Can I make a preferment at home?",
        "Yes. A poolish needs only flour, water and a small pinch of yeast, left overnight.",
      ],
      [
        "Does it make bread sour?",
        "Sourness comes chiefly from acidic preferments, like levain.",
      ],
    ],
    notes: {
      h: "In the bakery",
      items: [
        [
          "Record everything",
          "Weights, times and temperatures are written down so that the result is repeatable.",
        ],
        [
          "Count the flour",
          "The flour and water in the preferment are part of the overall recipe percentage.",
        ],
        ["Use at the peak", "A preferment past its peak will weaken the final dough."],
      ],
    },
    pull: "A preferment is bread’s slow cooker: the work is done in advance, and the baker simply collects the flavour.",
    trade:
      "Several breads in our Loaves and Continental ranges use preferments. Ask the order desk for the specification of any line you are considering.",
    caps: [
      "A recipe book, much consulted",
      "Notes and measures at the desk",
      "The production floor before dawn",
    ],
  },
  proving: {
    imgs: [
      "new/baker-trolley-dough-balls",
      "pages/baker-croissant-shaping",
      "new/banneton-shelves",
      "new/baker-shaping-long-dough",
      "pages/baker-oven-trays-2",
      "new/trolley-trays-golden-strips",
      "new/almond-croissants-bench",
      "serving/brioche-burger-bun",
      "serving/hot-dog-roll",
    ],
    story: {
      h: "The final rise, and the moment of judgement",
      p: [
        "Proving, or proofing, is the final rise of shaped dough before it goes into the oven. During this rest the yeast produces gas, the gluten relaxes and the dough fills out, so that it is light and springy when baked. It is the stage that most often separates a good loaf from a poor one.",
        "Underproved dough bakes dense, with a tight crumb and a loaf that may burst at the side. Overproved dough has used up its gas, collapses when it meets the heat, and tastes slightly sour or alcoholic. Bakers judge the moment by touch: a lightly floured finger pressed into the dough should leave a dent that fills slowly.",
      ],
    },
    steps: {
      h: "The poke test",
      intro: "A simple check, used in bakeries everywhere.",
      items: [
        ["Flour a fingertip", "A light dusting prevents the dough from sticking."],
        ["Press gently", "Press about a centimetre into the dough, and then lift away."],
        [
          "Watch the dent",
          "If it springs back at once, the dough needs longer. If it fills slowly and partially, it is ready.",
        ],
        [
          "If it stays, bake now",
          "A dent that stays put means the dough risks overproving. Bake at once.",
        ],
      ],
    },
    table: {
      h: "Warm prove and cold prove",
      intro: "The two main approaches, with their typical conditions.",
      head: ["Feature", "Warm prove", "Cold prove"],
      rows: [
        ["Temperature", "About 24 to 30°C", "About 3 to 8°C"],
        ["Duration", "45 minutes to 2 hours", "8 to 18 hours"],
        ["Flavour", "Mild", "Deeper, more complex"],
        ["Scheduling", "Immediate bake", "Fits an overnight schedule"],
      ],
    },
    faq: [
      [
        "What is the difference between proving and proofing?",
        "The terms are interchangeable. Proving is more common in British bakeries.",
      ],
      [
        "Can I prove in the fridge?",
        "Yes. Cold proving slows the yeast and builds flavour. Bake directly from the fridge for a better score.",
      ],
      [
        "Why do tin loaves prove to the rim?",
        "The dough needs enough gas to spring in the oven, and the tin height is a convenient visual guide.",
      ],
    ],
    notes: {
      h: "At the bench",
      items: [
        [
          "Humidity matters",
          "A dry atmosphere forms a skin on the dough. Cover or use a humid cabinet.",
        ],
        ["Allow time", "A warmer prove is faster but can sacrifice flavour and structure."],
        ["Mind the clock", "Keep a note of the time that each tray goes in."],
      ],
    },
    pull: "Proving is the one step that rewards patience and allows a single attempt. Get it right once.",
    trade:
      "Our tin loaves, buns and pastries are proved before baking. Contact the order desk for production and delivery timings.",
    caps: [
      "Trolleys of dough, resting",
      "Shaped, proving on the tray",
      "Pastries ready for the oven",
    ],
  },
  lamination: {
    imgs: [
      "new/baker-laminating-butter",
      "pages/butter-layers",
      "new/pastry-chef-filling-danish",
      "new/almond-croissants-bench",
      "new/pain-au-chocolat-cut",
      "new/pistachio-croissant-cut",
      "pages/almond-croissant-cut",
    ],
    story: {
      h: "Hundreds of layers from three ingredients",
      p: [
        "Lamination is the process of folding fat into dough repeatedly to build alternating layers. A block of cold butter is enclosed in a yeasted or plain dough, rolled out, folded and chilled, and the sequence is repeated several times. A classic croissant has between 27 and 81 layers, depending on the number of folds and the method used.",
        "In the oven, the butter melts and its water content turns to steam, pushing each layer of dough upward and apart. The fat prevents the layers from joining, so they set separately into a honeycombed, flaky interior. The technique is used in croissants, Danish pastry, puff pastry and many regional specialities.",
      ],
    },
    steps: {
      h: "The folds",
      intro: "Lamination is a sequence of rolling, folding and resting.",
      items: [
        [
          "Enclose the butter",
          "A flat slab of cold butter is wrapped inside the dough, with the edges sealed.",
        ],
        [
          "Roll and fold",
          "The package is rolled to a long rectangle and folded in thirds, called a letter fold, or in fourths, a book fold.",
        ],
        [
          "Rest between turns",
          "The dough is chilled between folds so the butter stays firm and the gluten relaxes.",
        ],
        [
          "Cut, shape and prove",
          "After the final turn, the sheet is rolled thin, cut, shaped and proved in a controlled warmth.",
        ],
      ],
    },
    table: {
      h: "Folds and layers",
      intro: "Approximate layer counts for common fold sequences, for a standard laminated dough.",
      head: ["Folds", "Layers", "Typical use"],
      rows: [
        ["3 single folds", "About 27", "Croissant, a classic number"],
        ["2 double folds", "About 16", "Simplified croissant dough"],
        ["1 double and 2 single folds", "About 36", "Danish pastry, depending on method"],
        ["6 single folds", "About 729", "Classic puff pastry"],
      ],
    },
    faq: [
      [
        "Why does butter temperature matter?",
        "Butter that is too cold shatters in the dough. Butter that is too warm is absorbed into it. Both ruin the layers.",
      ],
      [
        "What is the difference between laminated pastry and puff pastry?",
        "Croissant dough is laminated with yeast. Puff pastry is unleavened and relies on steam alone.",
      ],
      [
        "Why is butter used instead of margarine?",
        "Butter has a lower melting point and a richer flavour. Margarine is sometimes used for different textures and cost.",
      ],
    ],
    notes: {
      h: "Keeping the layers",
      items: [
        ["Work cool", "A cool room, chilled surfaces and cold butter make the work easier."],
        [
          "Roll with restraint",
          "Pulling the dough rather than rolling it tears layers and spoils the finished pastry.",
        ],
        [
          "Chill before cutting",
          "Firm dough cuts cleanly and keeps its layers visible at the edges.",
        ],
      ],
    },
    pull: "Lamination is the longest route to a simple result: a crisp shell, a honeycomb crumb, and butter in every bite.",
    trade:
      "Our butter croissant, pain au chocolat, almond and pistachio croissants and Danish pastries are laminated pastries. Ask the order desk about supply formats.",
    caps: ["Butter folded into dough", "The layers, exposed", "A filled pastry on the bench"],
  },
  scoring: {
    imgs: [
      "new/chef-holding-loaf-kitchen",
      "new/baker-holding-loaf-face",
      "new/sourdough-boule-board-2",
      "new/crate-rustic-boules-2",
      "new/barbari-nigella-loaf",
      "new/baker-banneton",
      "new/hands-tearing-warm-loaf-2",
      "products/sourdough-boule",
      "products/white-sliced-loaf",
      "editorial/cooling-rack",
    ],
    story: {
      h: "Cutting the loaf so it opens where you want it to",
      p: [
        "Scoring means making shallow cuts in the surface of a loaf just before it goes into the oven. As the loaf heats, trapped gas expands and steam builds. In an unscored loaf, the pressure forces its way through the weakest point of the crust, producing an irregular split. A cut gives the loaf a planned way to open.",
        "A score is also a signature. Diagonal slashes suit a bloomer, a single curved cut raises a bold ear on a boule, and a grid or a wheat-ear pattern is used on decorative breads. Each bakery’s pattern is part of its identity, and a skilled baker can score hundreds of loaves an hour, each one subtly its own.",
      ],
    },
    steps: {
      h: "Scoring well",
      intro: "Four principles apply to almost every loaf.",
      items: [
        [
          "Use a sharp blade",
          "A razor or a very sharp knife cuts the skin cleanly rather than dragging and tearing it.",
        ],
        [
          "Cut at an angle",
          "A shallow angle, around thirty degrees, lifts a flap of crust that becomes the ear.",
        ],
        [
          "Keep it shallow",
          "Cuts are usually a few millimetres deep. Deeper cuts can deflate a delicate dough.",
        ],
        [
          "Move decisively",
          "A quick, confident stroke is cleaner than a slow one. Hesitation leaves ragged edges.",
        ],
      ],
    },
    table: {
      h: "Patterns and their breads",
      intro: "Common scoring patterns and where they are used.",
      head: ["Pattern", "Bread", "Effect"],
      rows: [
        ["Diagonal slashes", "Bloomer, baguette", "Even, elongated splits"],
        ["Single curved cut", "Boule, batard", "A raised ear, one dramatic split"],
        ["Cross or square", "Cob, round loaves", "Even expansion in all directions"],
        ["Wheat ear", "Fancy decorative bread", "A decorative edge, cut with scissors"],
      ],
    },
    faq: [
      [
        "Do all breads need scoring?",
        "Many do. Tin loaves, pan breads and many enriched doughs are held by the tin or are soft enough to bake smoothly as they are.",
      ],
      [
        "Why does a score open into an ear?",
        "The cut allows steam and gas to escape through a controlled path. The flap of crust lifts and sets in the heat.",
      ],
      [
        "Can I use scissors?",
        "Yes. Scissors are used for decorative patterns such as the wheat ear.",
      ],
    ],
    notes: {
      h: "On the bench",
      items: [
        [
          "Flour the surface lightly",
          "A dusting of flour gives a pale contrast against the dark crust once opened.",
        ],
        ["Chill helps", "A cold dough is firmer and easier to cut cleanly."],
        ["Bake immediately", "A scored loaf left standing will sag and the cuts will close up."],
      ],
    },
    pull: "Every cut is a decision about where the loaf should open. The bread does the rest.",
    trade:
      "Our Farmhouse Bloomer and Sourdough Boule are listed with scored crusts. Ask the order desk about presentation and any requests for your menu.",
    caps: [
      "Fresh loaf, held up for inspection",
      "A scored loaf at the baker’s face",
      "A wheat-ear pattern on a loaf",
    ],
  },
};
