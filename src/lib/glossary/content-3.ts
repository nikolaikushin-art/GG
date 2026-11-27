import type { GlossaryRich } from "./types";

export const content3: Record<string, GlossaryRich> = {
  "maillard-reaction": {
    imgs: [
      "new/sourdough-boule-cut-open",
      "new/sesame-simit-torn",
      "new/charred-round-flatbread",
      "new/large-charred-flatbread",
      "pages/baker-wholemeal-tin",
      "new/window-tea-toast-2",
      "pages/cheese-herb-flatbread",
    ],
    story: {
      h: "The chemistry of a golden crust",
      p: [
        "The Maillard reaction is a family of chemical reactions between amino acids and reducing sugars that begins at around 140°C. It was described by the French chemist Louis-Camille Maillard in 1912, and it is responsible for the colour, aroma and savoury depth of everything from roast coffee to seared steak. In bread, it produces the deep golden brown of the crust and hundreds of flavour compounds.",
        "Caramelisation is a separate process, involving sugars alone at higher temperatures, though in a baked loaf both occur together. Several factors encourage the Maillard reaction: a dry crust surface, the presence of milk proteins and sugars, and a hot oven. That is why enriched doughs, which contain milk and sugar, brown so readily.",
      ],
    },
    steps: {
      h: "How a crust browns",
      intro: "The reaction proceeds in phases as the loaf bakes.",
      items: [
        [
          "Steam keeps the surface moist",
          "In the first minutes, steam holds the crust temperature below the browning point and lets the loaf expand.",
        ],
        [
          "The surface dries out",
          "As water evaporates, the surface temperature rises above 100°C.",
        ],
        [
          "Browning begins",
          "Above about 140°C, amino acids and sugars start to react and colour appears.",
        ],
        [
          "Flavour compounds form",
          "Hundreds of aromatic compounds form, creating the toasty, nutty, roasted flavours of a baked crust.",
        ],
      ],
    },
    table: {
      h: "Maillard reaction and caramelisation",
      intro: "Two browning processes that work together in the oven.",
      head: ["Feature", "Maillard reaction", "Caramelisation"],
      rows: [
        ["Needs", "Amino acids and sugars", "Sugars only"],
        ["Starts at", "About 140°C", "About 160°C and above, depending on the sugar"],
        ["Flavour", "Savoury, toasty, roasted", "Sweet, buttery, slightly bitter"],
        ["Helped by", "Milk, eggs, a dry surface", "Sugar, high heat"],
      ],
    },
    faq: [
      [
        "Why do enriched breads brown faster?",
        "Milk, eggs and sugar provide additional proteins and sugars for the reaction, so the crust browns at a lower temperature.",
      ],
      [
        "What is the effect of an egg wash?",
        "The proteins in the egg give a rich colour and a glossy surface, as well as contributing to Maillard browning.",
      ],
      [
        "Is browning the same as burning?",
        "No. Burning is the point at which compounds break down into bitter, acrid products. A good crust stops just before.",
      ],
    ],
    notes: {
      h: "In the oven",
      items: [
        ["Watch the colour", "Bakers judge doneness by colour as much as by time. Ovens vary."],
        [
          "Reduce heat late",
          "If a crust colours too quickly, lowering the heat allows the interior to finish baking.",
        ],
        [
          "Leave room around each loaf",
          "A loaded oven loses heat and steam behaves differently, giving uneven colour.",
        ],
      ],
    },
    pull: "Colour is flavour. A well-coloured loaf is a finished loaf; a pale one is merely unfinished.",
    trade:
      "Our enriched products, including the Brioche Burger Bun and Cinnamon Roll, show the Maillard reaction at its most visible. Ask the order desk about finish and glaze.",
    caps: [
      "A boule cut to show the deep crust",
      "Simit, torn open after baking",
      "The char of a hot oven on flatbread",
    ],
  },
  crumb: {
    imgs: [
      "pages/crumb-sourdough-hand",
      "new/long-loaf-cut-crumb-2",
      "new/loaf-cut-open-crumb-2",
      "new/sourdough-crumb-slice-2",
      "new/pain-au-chocolat-cut-2",
      "new/croissant-honeycomb-cut",
      "pages/brioche-loaf-cut-2",
      "new/focaccia-olive-rosemary-2",
      "new/ciabatta-olive-oil-2",
      "serving/ciabatta",
      "serving/white-sliced-loaf",
      "serving/granary-tin",
    ],
    story: {
      h: "What the inside of a loaf tells you",
      p: [
        "Crumb is the interior of a loaf: the network of cells, walls and gluten that give the bread its texture. Bakers cut a loaf open to read it. An even, tight crumb suits a sandwich loaf, while an open, irregular crumb with large, glossy holes is the sign of a wet, well-fermented dough such as ciabatta.",
        "The crumb is shaped by hydration, the strength of the flour, how the dough is fermented and how gently it is handled. Careful shaping preserves gas cells, and rough handling destroys them. Neither open nor tight is superior. Each suits a different purpose, and it is a matter of matching the crumb to the use.",
      ],
    },
    steps: {
      h: "Reading a crumb",
      intro: "A loaf cut in half offers several clues.",
      items: [
        [
          "Look at the cell size",
          "Large, irregular holes point to high hydration and gentle handling. Small, even cells suggest a tighter dough.",
        ],
        [
          "Check the cell walls",
          "Thin, glossy walls are a sign of good gluten development and fermentation.",
        ],
        [
          "Feel the texture",
          "The crumb should feel moist, springy and slightly elastic, pleasantly moist rather than gummy or dry.",
        ],
        [
          "Note any dense layer",
          "A dense band near the base or crust can point to underproving or poor shaping.",
        ],
      ],
    },
    table: {
      h: "Crumb types and their uses",
      intro: "A guide to what different crumbs are good for.",
      head: ["Crumb", "Typical bread", "Best for"],
      rows: [
        ["Open, irregular", "Ciabatta, sourdough", "Dipping, bruschetta, table bread"],
        ["Even, soft", "Tin loaf, bap", "Sandwiches, toast"],
        ["Tight, rich", "Brioche, buns", "Burgers, French toast"],
        ["Flaky, honeycombed", "Croissant", "Breakfast, coffee service"],
      ],
    },
    faq: [
      [
        "What causes large holes in bread?",
        "Wet dough, strong flour, long fermentation, gentle shaping and a hot oven with steam all promote open crumb.",
      ],
      [
        "Why is my crumb gummy?",
        "Common causes are underbaking, cutting the loaf while it is still hot, or an overly wet dough.",
      ],
      [
        "Is an open crumb always better?",
        "No. For sandwiches, an open crumb lets fillings drip through. A tighter crumb is more practical.",
      ],
    ],
    notes: {
      h: "Judging the loaf",
      items: [
        [
          "Wait before cutting",
          "Let the loaf cool for at least an hour so that the crumb finishes setting.",
        ],
        ["Use a serrated knife", "A bread knife cuts cleanly through the crumb."],
        ["Check consistency", "A reliable bakery produces the same crumb batch after batch."],
      ],
    },
    pull: "The crust is what you see. The crumb is what you eat. A good baker pays attention to both.",
    trade:
      "Different crumb styles suit different menus. Describe your use to the order desk, whether sandwiches, table bread or toast, and ask for a recommendation.",
    caps: [
      "A sourdough crumb, held to the light",
      "Honeycomb in a cut croissant",
      "Brioche, sliced to show its tender interior",
    ],
  },
  crust: {
    imgs: [
      "new/sourdough-crust-closeup",
      "new/hands-tearing-warm-loaf",
      "pages/bread-rack-tall",
      "pages/baker-oven-trays",
      "new/production-hall-ovens",
      "new/sesame-simit-torn-2",
      "pages/wholemeal-loaf-flour-sack",
    ],
    story: {
      h: "The first thing you taste, and the first thing you hear",
      p: [
        "The crust is the browned outer layer of a loaf, formed in the oven by the Maillard reaction and caramelisation. It can be thin and crackling, thick and chewy, or soft and golden, depending on the dough, the oven and the use of steam. A great crust has colour, aroma and a clean snap as it is broken.",
        "A characteristic sound accompanies a freshly baked crusty loaf: a delicate crackling as it cools, called singing. It is caused by tiny cracks forming as the crust contracts and the temperature inside and outside equalises. For bakers it is a sign that the loaf has been baked properly and the crust is crisp.",
      ],
    },
    steps: {
      h: "How a crust is made",
      intro: "Several controls determine the final result.",
      items: [
        [
          "Steam at the start",
          "Moist heat keeps the surface supple during the early bake so that the loaf can expand freely.",
        ],
        ["High heat", "A hot oven drives off surface moisture and sets the crust."],
        [
          "Colour development",
          "The Maillard reaction and caramelisation turn the surface golden and then deep brown.",
        ],
        [
          "Cooling",
          "As the loaf cools, the crust contracts and cracks gently, producing the characteristic singing.",
        ],
      ],
    },
    table: {
      h: "Crust styles",
      intro: "Common crust types, and how they are achieved.",
      head: ["Crust", "Typical bread", "How it forms"],
      rows: [
        ["Thin and crackling", "Baguette", "High steam, high heat, lean dough"],
        ["Thick and chewy", "Sourdough boule", "Long bake, high hydration, strong colour"],
        ["Soft and golden", "Tin loaf, bun", "Tin or enriched dough, moderate heat"],
        ["Glossy and sweet", "Brioche", "Egg wash, sugar and milk in the dough"],
      ],
    },
    faq: [
      [
        "Why does a crust go soft?",
        "Moisture from the crumb moves outwards as the loaf stands. Storing bread in a sealed bag speeds this up.",
      ],
      [
        "How do I crisp a stale crust?",
        "A short time in a hot oven drives off excess surface moisture and brings back crispness.",
      ],
      [
        "Is a darker crust better?",
        "A deeper colour means more flavour, though too dark can taste bitter. Taste is the final judge.",
      ],
    ],
    notes: {
      h: "Handling and storage",
      items: [
        [
          "Store crusty bread in paper",
          "Paper lets the crust breathe, whereas plastic traps moisture and softens it.",
        ],
        ["Keep at room temperature", "Chilling accelerates staling, so bread keeps best on the counter."],
        ["Refresh before serving", "A few minutes in the oven wakes up the crust."],
      ],
    },
    pull: "A crust should crackle when you press it and snap when you break it. A silent crust signals a bake cut short.",
    trade:
      "Crisp-crust breads such as baguettes and boules are best delivered fresh and served the same day. Ask the order desk about timings that suit your service.",
    caps: ["Close-up of a blistered crust", "Torn, still warm", "Loaves on the cooling rack"],
  },
  banneton: {
    imgs: [
      "new/baker-banneton",
      "new/banneton-shelves",
      "new/spiral-coiled-breads",
      "new/baker-shaping-boule",
      "new/crate-rustic-boules",
      "new/baker-dough-divider-2",
      "gallery/sourdough-box-2",
      "serving/sourdough-boule",
      "products/sourdough-boule",
      "editorial/pastry-cutting",
    ],
    story: {
      h: "A basket that gives bread its shape and its rings",
      p: [
        "A banneton, known in German as a brotform, is a basket used to support shaped dough during its final prove. It is usually made of cane, wicker or compressed wood pulp, and is lined with linen or dusted with flour. Its job is to hold a wet, slack dough upright until it reaches the oven, where it is turned out on to a peel or tray.",
        "The basket also draws moisture from the surface of the dough, which forms a thin dry skin that is easier to score and bakes to a crisp crust. The pattern of concentric rings left by the cane, pale where flour has collected, has become a recognisable mark of artisan sourdough bread.",
      ],
    },
    steps: {
      h: "Using a banneton",
      intro: "The method is straightforward, but preparation is important.",
      items: [
        [
          "Flour thoroughly",
          "Rice flour or a mix of rice and wheat flour stops the dough from sticking.",
        ],
        [
          "Place the dough seam-up",
          "The shaped dough is set into the basket with the seam facing upward, which will become the base.",
        ],
        [
          "Prove in the basket",
          "The dough rests, often in a cool place, until it has risen and passes the poke test.",
        ],
        [
          "Turn out and score",
          "The dough is tipped out on to a peel, so the smooth side faces up, then scored and loaded.",
        ],
      ],
    },
    table: {
      h: "Banneton materials",
      intro: "The main types, and how they behave.",
      head: ["Material", "Features", "Care"],
      rows: [
        ["Cane", "Classic, strong ring pattern", "Brush out and air dry; keep well away from soap"],
        ["Wood pulp", "Smooth, even surface, lightweight", "Brush out and dry"],
        ["Linen-lined", "Smooth finish, less pattern", "Brush out, wash liner as needed"],
        ["Plastic", "Easy to clean and moisture-resistant", "Wash and dry"],
      ],
    },
    faq: [
      [
        "Do I have to use a banneton?",
        "No. A bowl lined with a floured cloth works well. A banneton is more convenient and leaves a distinctive pattern.",
      ],
      [
        "How do I stop dough sticking?",
        "Use plenty of rice flour. It takes up moisture differently from wheat flour and releases more cleanly.",
      ],
      [
        "How do I clean a banneton?",
        "Brush out dried flour once the banneton is fully dry. Avoid washing cane baskets, as damp promotes mould.",
      ],
    ],
    notes: {
      h: "Caring for baskets",
      items: [
        ["Keep dry between uses", "Moisture left in a basket causes mould."],
        ["Season new baskets", "A first dusting of flour builds a coating that helps release."],
        ["Store in a ventilated space", "Air circulation prolongs the life of the cane."],
      ],
    },
    pull: "The rings on a loaf are the signature of the basket. They are also proof that the dough was properly supported while it proved.",
    trade:
      "Our Sourdough Boule is proved in bannetons before baking. Ask the order desk for the current specification.",
    caps: [
      "A floured basket, ready for dough",
      "Baskets stacked on the prove shelves",
      "The spiral left by the cane",
    ],
  },
  couch: {
    imgs: [
      "new/baguettes-on-couche",
      "gallery/baker-baguette",
      "pages/baguettes-paper-trolley",
      "gallery/baguette-basket-2",
      "new/long-loaf-cut-crumb-3",
      "new/baker-shaping-long-dough",
      "pages/picnic-baguette-cheese-2",
      "serving/french-baguette",
      "products/french-baguette",
      "editorial/bread-wrapping",
      "editorial/dough-shaping",
    ],
    story: {
      h: "A cloth that holds a long loaf upright",
      p: [
        "A couche is a heavy, floured linen cloth used to support long loaves, particularly baguettes, during proving. The cloth is pleated into folds, and each shaped loaf rests in a fold, supported by the cloth on both sides. The pleats keep neighbouring loaves apart, preserve their shape and prevent them spreading.",
        "Linen also absorbs a little moisture from the surface of the dough, leaving a thin dry skin that is easy to score and bakes to a crisp, golden crust. The cloth is kept unwashed, since washing removes the flour that builds up in the weave and keeps dough from sticking. It is shaken out and brushed instead.",
      ],
    },
    steps: {
      h: "Proving on a couche",
      intro: "The technique is used for baguettes and other long loaves.",
      items: [
        [
          "Prepare the cloth",
          "The couche is laid on a board or tray and dusted generously with flour.",
        ],
        [
          "Pleat to separate",
          "A fold is raised between each loaf so that they are supported and kept apart.",
        ],
        [
          "Place seam-up",
          "Loaves go on seam-side up, so the smooth side faces up once they are turned over.",
        ],
        [
          "Transfer and score",
          "Each loaf is rolled gently on to a peel, scored and loaded into the oven.",
        ],
      ],
    },
    table: {
      h: "Couche, banneton and tin",
      intro: "The three main ways to hold dough during proving.",
      head: ["Support", "Used for", "Effect"],
      rows: [
        ["Couche", "Baguettes, long loaves", "Straight shape, dry skin"],
        ["Banneton", "Rounds, sourdough", "Round shape, spiral pattern"],
        ["Tin", "Sandwich loaves", "Uniform shape, soft crust"],
        ["Tray", "Rolls, flatbreads", "Free form, even bake"],
      ],
    },
    faq: [
      [
        "Why is a couche kept unwashed?",
        "The built-up flour in the linen is what stops the dough sticking. Washing removes it and causes dough to cling.",
      ],
      [
        "Can I use a tea towel?",
        "A heavy floured linen cloth works. Thin cotton absorbs too much moisture and may stick.",
      ],
      [
        "How do I keep loaves straight?",
        "Pleat the cloth firmly so that each loaf is supported. A baguette left unsupported will spread.",
      ],
    ],
    notes: {
      h: "Looking after linen",
      items: [
        ["Shake out the flour", "Brush and shake the cloth after each use."],
        ["Store dry", "Damp linen develops mould. Air thoroughly before folding."],
        ["Flour generously", "A well-floured couche releases easily and cleanly."],
      ],
    },
    pull: "A couche looks modest: a cloth, a fold and some flour. And it makes a straight baguette.",
    trade:
      "Our baguettes are proved on couches for a straight shape and crisp crust, as described in the catalogue. Ask the order desk for the current specification.",
    caps: [
      "Baguettes resting in the folds",
      "A baker lifting a baguette",
      "Baked and stacked on the trolley",
    ],
  },
  lame: {
    imgs: [
      "editorial/bakers-tools",
      "new/baker-holding-loaf-face",
      "new/baker-handing-basket",
      "new/chef-holding-loaf-kitchen-2",
      "new/baker-shaping-boule-2",
      "gallery/scales-notebook-2",
      "pages/loaf-handwritten-note-2",
      "serving/farmhouse-bloomer",
      "products/farmhouse-bloomer",
      "editorial/sample-box",
    ],
    story: {
      h: "A razor on a stick, and the most personal tool in the bakery",
      p: [
        "A lame, pronounced lahm, is a baker’s blade: a razor blade, usually curved, fixed to a handle. It is used to cut the surface of a loaf before baking. The word is French for blade. Many bakers make their own, by mounting a blade on a wooden stick, a metal skewer or even a coffee stirrer.",
        "A lame cuts more cleanly than an ordinary knife because the blade is thin and extremely sharp, and the curve lets the cutter control the angle and depth. A clean cut leaves a crisp edge that lifts into an ear. A dull blade drags and tears, and the loaf bursts untidily.",
      ],
    },
    steps: {
      h: "Using a lame well",
      intro: "Technique matters as much as the blade.",
      items: [
        ["Hold it lightly", "A relaxed grip gives more control than a tight one."],
        [
          "Choose the angle",
          "Hold the blade almost flat for an ear, or upright for a plain slash.",
        ],
        [
          "Cut in one motion",
          "A single smooth stroke, with consistent depth, works better than several shorter ones.",
        ],
        ["Replace blades", "A blade dulls quickly on a floury surface. Change it often."],
      ],
    },
    table: {
      h: "Scoring tools",
      intro: "Options for cutting a loaf, and their characteristics.",
      head: ["Tool", "Advantages", "Limitations"],
      rows: [
        ["Lame", "Clean cut, curved blade, controllable angle", "Blades need replacing"],
        ["Razor blade", "Very sharp, cheap", "Hard to hold safely"],
        ["Serrated knife", "Always to hand", "Tends to drag and tear"],
        ["Scissors", "Good for wheat-ear patterns", "Best kept for wheat-ear patterns"],
      ],
    },
    faq: [
      ["How do you pronounce lame?", "It is pronounced lahm, as in the French word."],
      [
        "Can I use a kitchen knife?",
        "A very sharp, thin blade can work, but most kitchen knives are too thick for a clean cut.",
      ],
      [
        "How should I store a lame?",
        "Keep the blade covered between uses, and store out of reach of children.",
      ],
    ],
    notes: {
      h: "Safety and care",
      items: [
        ["Cover the blade", "A guard or cap protects both hand and blade."],
        ["Change the blade often", "A fresh blade gives a clean cut and is safer than a dull one."],
        ["Keep it dry", "Rust dulls the edge quickly."],
      ],
    },
    pull: "The tool costs very little. The skill takes years.",
    trade:
      "Hand scoring is a feature of our Farmhouse Bloomer and Sourdough Boule. Ask the order desk for details of the current specification.",
    caps: ["A baker’s tools, laid out", "A loaf held up to the light", "The first cut"],
  },
  stonebaked: {
    imgs: [
      "new/pide-ovals-parchment",
      "gallery/simit-stand",
      "new/production-hall-ovens-2",
      "new/focaccia-olive-rosemary",
      "new/pita-rounds-basket",
      "new/herb-flatbreads-tray",
      "new/flatbread-stack-basket",
      "products/turkish-pide",
      "serving/sangak-bread",
    ],
    story: {
      h: "Heat stored in the floor of the oven",
      p: [
        "A stonebaked loaf is baked directly on a heated stone or masonry deck. The stone stores a great deal of heat and releases it straight into the base of the loaf, which gives a strong initial burst of energy, a crisp base and an even bake. The same principle underlies the brick ovens of Naples and the stone ovens of Persia.",
        "Stone decks typically run at 230 to 260°C, though temperatures vary with the bread. They are used for baguettes, boules, pizza, pide and focaccia, and they favour breads that benefit from a hot base and good oven spring. The finish is distinctive: a base with a fine, even bake and slight charring.",
      ],
    },
    steps: {
      h: "Baking on stone",
      intro: "A stone deck oven requires a different technique from a tray oven.",
      items: [
        [
          "Preheat thoroughly",
          "The stone must be fully heated through, which takes much longer than heating the air in the oven.",
        ],
        ["Load with a peel", "Loaves are slid from a peel directly on to the hot stone."],
        [
          "Add steam",
          "Steam is injected at loading to keep the surface supple and let the loaf expand.",
        ],
        [
          "Unload promptly",
          "Bread is removed once its colour is right, since the stone continues to transfer heat.",
        ],
      ],
    },
    table: {
      h: "Stone deck and other ovens",
      intro: "How common bakery ovens differ.",
      head: ["Oven", "Heat source", "Typical use"],
      rows: [
        ["Stone deck", "Heated stone floor", "Baguettes, boules, pide, pizza"],
        ["Rack oven", "Hot circulating air", "Rolls, tin loaves, pastries"],
        ["Tandoor", "Clay wall, charcoal or gas", "Naan, taftoon, kulcha"],
        ["Tunnel oven", "Conveyor, continuous", "High-volume bread production"],
      ],
    },
    faq: [
      [
        "Is a baking stone at home worth having?",
        "A baking stone or steel absorbs and releases heat much like a deck oven and improves the crust of home-baked bread and pizza.",
      ],
      [
        "Why is stone better than a tray?",
        "Stone retains heat well. A tray quickly loses heat when cold dough is placed on it.",
      ],
      [
        "Is stonebaked always better?",
        "Only some. Tin loaves and pastries are better suited to other ovens.",
      ],
    ],
    notes: {
      h: "Why bakers like stone",
      items: [
        ["Strong oven spring", "Heat from below makes dough spring upward quickly."],
        ["Crisp, even base", "The stone gives a well-defined, golden base."],
        [
          "Authentic character",
          "Stone-baked bread has a flavour and look that is difficult to reproduce.",
        ],
      ],
    },
    pull: "A stone deck stores heat like a good cast-iron pan. The loaf takes what it needs.",
    trade:
      "Our catalogue describes continental and world breads as baked directly on stone. Ask the order desk for the current specification of any line.",
    caps: [
      "Pide, ready from the stone",
      "A simit stand in the street",
      "Herb flatbreads, fresh from the deck",
    ],
  },
  tandoor: {
    imgs: [
      "gallery/tandoor-basket",
      "new/lavash-crate-tandoor",
      "pages/tandoor-round-bread",
      "new/charred-round-flatbread-2",
      "pages/paratha-pull",
      "pages/garlic-herb-flatbread",
      "new/oiled-flatbread-stack-tray",
    ],
    story: {
      h: "A clay oven that bakes in minutes",
      p: [
        "A tandoor is a cylindrical clay oven, heated by charcoal, wood or gas, in which food is cooked at temperatures well over 400°C. The dough is slapped against the hot inner wall, where it blisters and bakes in two or three minutes. The result is a soft, puffed interior, a charred exterior and a smoky flavour that is difficult to reproduce.",
        "Variants of the clay oven are used from North Africa to Central Asia. In Iran and Afghanistan it is called a tanur, in the Caucasus a tone, and in India and Pakistan a tandoor. Breads baked on its walls include naan, taftoon, kulcha and lavash, and meat and vegetables are also cooked on skewers within it.",
      ],
    },
    steps: {
      h: "At the tandoor",
      intro: "A skilled tandoor baker works quickly, and at some risk to their forearms.",
      items: [
        [
          "Heat the clay",
          "The oven is lit and left until the walls glow, giving radiant heat from every side.",
        ],
        [
          "Shape the dough",
          "Dough is stretched or patted into a round or oval, often on a cushion.",
        ],
        [
          "Slap onto the wall",
          "The shaped dough is pressed on to the hot inner wall, where it adheres.",
        ],
        [
          "Lift out",
          "After a minute or two the bread is hooked off the wall, brushed with butter or ghee and served.",
        ],
      ],
    },
    table: {
      h: "Breads from the tandoor and beyond",
      intro: "Some of the most common breads baked in clay ovens.",
      head: ["Bread", "Region", "Character"],
      rows: [
        ["Naan", "South Asia, Central Asia", "Soft, leavened, often brushed with butter"],
        ["Taftoon", "Iran", "Thin, light, slightly crisp"],
        ["Kulcha", "Punjab", "Soft, sometimes filled or topped with herbs"],
        ["Lavash", "Armenia, Iran", "Paper-thin, foldable"],
      ],
    },
    faq: [
      [
        "Why are tandoors so hot?",
        "The thick clay walls retain intense heat, and the closed shape traps it. High heat bakes thin dough in minutes.",
      ],
      [
        "Can naan be made in a home oven?",
        "A very hot oven with a pizza stone, or a heavy griddle, will approximate it, with a gentler, less smoky flavour.",
      ],
      [
        "Is it the same as a pizza oven?",
        "Close, yet distinct. A pizza oven is a dome with a floor, while a tandoor is a vertical cylinder.",
      ],
    ],
    notes: {
      h: "At the table",
      items: [
        ["Eat soon after baking", "Tandoor bread is at its best warm and soft."],
        [
          "Butter or ghee finish",
          "A brush of melted butter adds richness and softens the surface.",
        ],
        ["Pair with grilled dishes", "Naan is ideal with curry, kebabs and dips."],
      ],
    },
    pull: "A tandoor is hot enough to bake a flatbread in under three minutes, and it leaves its mark on every one.",
    trade:
      "Our Naan, Taftoon and Kulcha breads are described in the catalogue as tandoor-style breads. Ask the order desk for the specification and supply format.",
    caps: [
      "A basket of tandoor breads",
      "Lavash, stacked after baking",
      "Round bread, charred at the edges",
    ],
  },
  "nigella-seeds": {
    imgs: [
      "pages/nigella-loaf-torn",
      "new/barbari-nigella-loaf",
      "new/barbari-seeded-closeup",
      "new/box-flatbread-stacks",
      "pages/sesame-flatbread-shelf",
      "new/dimpled-seeded-bread-2",
      "pages/cheese-herb-flatbread-2",
      "serving/turkish-pide",
      "serving/naan-bread",
    ],
    story: {
      h: "Small black seeds, with a big flavour",
      p: [
        "Nigella seeds come from Nigella sativa, a flowering plant native to South and Southwest Asia. The seeds are small, matt black and angular, with a peppery, slightly bitter flavour and notes of oregano and onion. They are sometimes called black cumin, black onion seed or kalonji, though they belong to an entirely different plant family from cumin or onion.",
        "They are used widely in Turkish, Persian, Indian and Middle Eastern baking. Scattered over a Turkish pide, folded into a naan, or sprinkled on a barbari loaf, they add a visual contrast and a gentle bite. They are best added just before baking, so they stay in place and toast lightly in the heat.",
      ],
    },
    steps: {
      h: "Using nigella in the bakehouse",
      intro: "A little goes a long way.",
      items: [
        [
          "Apply before baking",
          "Seeds are scattered over a glaze or brushed surface so that they stick.",
        ],
        [
          "Use an egg wash",
          "A coat of egg wash or milk helps the seeds adhere and gives a glossy finish.",
        ],
        ["Season lightly", "A light scattering is enough, as the flavour is strong."],
        [
          "Toast lightly",
          "The seeds toast in the oven and release their aroma straight from the jar.",
        ],
      ],
    },
    table: {
      h: "Seeds on breads",
      intro: "How nigella compares with other common bread seeds.",
      head: ["Seed", "Flavour", "Typical bread"],
      rows: [
        ["Nigella", "Peppery, herbal, slightly bitter", "Pide, naan, barbari, börek"],
        ["Sesame", "Nutty, mild, sweet when toasted", "Simit, burger buns, flatbreads"],
        ["Poppy", "Nutty, delicate", "Bagels, rolls, loaves"],
        ["Caraway", "Aniseed, earthy", "Rye breads, central European loaves"],
      ],
    },
    faq: [
      [
        "Is nigella the same as black sesame?",
        "No. Black sesame seeds are rounder and nuttier. Nigella seeds are matt black and angular, with a peppery taste.",
      ],
      [
        "Does nigella contain allergens?",
        "Nigella sits outside the fourteen major allergens named in UK law, though allergies to it can occur. Check specifications for individual products.",
      ],
      [
        "How should the seeds be stored?",
        "Keep in an airtight container in a cool, dark place to protect the flavour.",
      ],
    ],
    notes: {
      h: "In the kitchen",
      items: [
        [
          "Pairs with cheese",
          "The peppery seeds are a classic partner to white cheese and yoghurt.",
        ],
        ["Use in dips", "A pinch over hummus or labneh adds colour and flavour."],
        ["Toast to refresh", "A few seconds in a dry pan wakes up stale seeds."],
      ],
    },
    pull: "Black seeds on a pale crust are a small detail, and it is often the one customers remember.",
    trade:
      "Our Turkish Pide is listed as egg-washed and scattered with nigella seeds. Ask the order desk for the specification, including seed allergens.",
    caps: [
      "Nigella on a torn loaf",
      "A barbari, scattered with seeds",
      "Close-up of the seeded crust",
    ],
  },
  wholemeal: {
    imgs: [
      "pages/baker-wholemeal-tin",
      "pages/wholemeal-loaf-flour-sack",
      "new/stone-mill-miller-2",
      "pages/seeded-wholemeal-crumb-2",
      "new/wheat-field-sunrise",
      "new/sliced-white-loaf-cloth-2",
      "new/bakers-laughing-bench",
      "serving/wholemeal-loaf",
      "products/wholemeal-loaf",
      "editorial/flour-sacks",
      "editorial/flour-weighing",
    ],
    story: {
      h: "The whole grain, milled and baked",
      p: [
        "Wholemeal flour is milled from the entire wheat grain: the starchy endosperm, the fibrous bran and the oily germ. White flour is made from the endosperm alone. Wholemeal therefore brings more fibre, more minerals and a deeper, nuttier flavour, and a denser, heartier loaf.",
        "Stoneground wholemeal is produced by grinding the grain between millstones. It retains more of the grain’s character, since the slower grinding generates less heat. The bran and germ also absorb more water than refined flour and interrupt the gluten network, so wholemeal doughs need more water and usually produce a closer crumb.",
      ],
    },
    steps: {
      h: "Baking with wholemeal",
      intro: "It behaves differently from white flour.",
      items: [
        [
          "Add more water",
          "Bran and germ absorb water, so wholemeal doughs generally need higher hydration.",
        ],
        ["Rest the dough", "A longer rest or autolyse allows the bran to soften and hydrate."],
        ["Handle gently", "Bran particles can cut gluten strands, so over-kneading is avoided."],
        ["Prove carefully", "Wholemeal dough ferments quickly and can collapse if overproved."],
      ],
    },
    table: {
      h: "Wholemeal, brown and white flour",
      intro: "A simple guide to the main flour types.",
      head: ["Flour", "Contains", "Typical effect"],
      rows: [
        ["Wholemeal", "Bran, germ and endosperm", "Dense, nutty, high in fibre"],
        ["Brown", "Part of the bran and germ", "Medium density, mild flavour"],
        ["White", "Endosperm only", "Light, soft, mild"],
        [
          "Stoneground wholemeal",
          "Whole grain, milled between stones",
          "Rich, coarse, full flavour",
        ],
      ],
    },
    faq: [
      [
        "Is wholemeal healthier than white?",
        "Wholemeal contains more fibre and some nutrients than white. Both can form part of a balanced diet.",
      ],
      [
        "Why is wholemeal bread denser?",
        "Bran and germ interrupt the gluten network, which limits how far the dough can rise.",
      ],
      [
        "Does it keep longer?",
        "Because wholemeal flour contains oils from the germ, it can go rancid in storage, so fresh flour is important.",
      ],
    ],
    notes: {
      h: "On the menu",
      items: [
        [
          "Suits savoury toppings",
          "Wholemeal toast with eggs, cheese or avocado is a popular breakfast.",
        ],
        ["Good for soup", "A slice of wholemeal stands up to dipping."],
        [
          "Say what is in it",
          "Customers value clear labelling of wholemeal and whole grain content.",
        ],
      ],
    },
    pull: "Wholemeal flour keeps every part of the grain. That is why it tastes of something.",
    trade:
      "Our Wholemeal Loaf is listed in the catalogue as made with stoneground British wholemeal flour. Ask the order desk for the current specification before you menu it.",
    caps: [
      "A wholemeal tin, fresh from the oven",
      "Flour sacks and a finished loaf",
      "A miller at the stones",
    ],
  },
};
