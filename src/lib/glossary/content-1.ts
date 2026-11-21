import type { GlossaryRich } from "./types";

export const content1: Record<string, GlossaryRich> = {
  bloomer: {
    imgs: [
      "pages/rustic-loaves-crate",
      "new/crate-rustic-boules",
      "new/shop-window-loaves",
      "pages/soup-and-bread-table",
      "new/baker-holding-loaf-face",
      "gallery/loaf-shelves",
      "new/crate-paper-bagged-loaves",
    ],
    story: {
      h: "A loaf that earned its place on the British table",
      p: [
        "The bloomer takes its name from the way the loaf blooms in the oven. The dough is left a little slack, shaped into a plump oval and baked without the support of a tin, so it spreads and lifts in the heat and finishes with a split, floury top and a tight, even shoulder.",
        "It became the standard shop loaf of the English high street because it does so much with so little. A bloomer slices cleanly for sandwiches, toasts well, and keeps a crust that stays crisp for a day without turning leathery. Bakers regard it as a good test of fermentation and shaping, because there is nowhere for a poorly handled dough to hide.",
      ],
    },
    steps: {
      h: "From mixing bowl to oven floor",
      intro:
        "A bloomer is straightforward in outline and unforgiving in detail. These are the stages that matter.",
      items: [
        [
          "Mix to a supple dough",
          "A moderately hydrated white dough is mixed until smooth and extensible, with enough strength to hold a rounded shape without a tin.",
        ],
        [
          "Shape the oval",
          "Pieces are scaled, rested, then rolled into a tight oval. Surface tension is what gives the loaf its height.",
        ],
        [
          "Prove until just ready",
          "The loaves are proved seam-down on a floured surface. A gentle press should spring back slowly, not at once and not at all.",
        ],
        [
          "Slash and bake with steam",
          "Diagonal cuts are made immediately before loading. Steam in the first minutes keeps the skin supple so the slashes open cleanly.",
        ],
      ],
    },
    table: {
      h: "Bloomer, tin loaf and cob compared",
      intro: "Three everyday British loaves, distinguished mainly by how they are baked.",
      head: ["Loaf", "Baked", "Character"],
      rows: [
        ["Bloomer", "Free-standing, slashed", "Crisp crust, chewy open crumb"],
        ["Tin loaf", "In a rectangular tin", "Soft crust, even crumb, uniform slices"],
        ["Cob", "Free-standing, round", "Thick crust, dense centre, often dusted with flour"],
        ["Farmhouse", "In a tin, split top", "Between a tin loaf and a bloomer"],
      ],
    },
    faq: [
      [
        "Why are the slashes diagonal?",
        "Diagonal cuts open into the long, even ears typical of the style. They also guide the expansion along the length of the loaf rather than letting it burst at the side.",
      ],
      [
        "Is a bloomer a sourdough?",
        "Not traditionally. A classic bloomer is raised with baker’s yeast, though a long, cool fermentation will give it more flavour.",
      ],
      [
        "How long will it keep?",
        "A bloomer eats best on the day it is baked and remains good for sandwiches the next day. The crust softens as it stands in a bag.",
      ],
    ],
    notes: {
      h: "Baker’s notes",
      items: [
        [
          "Steam sets the finish",
          "Too little steam gives a dull, thick skin; too much can leave the crust soft. Timing matters more than volume.",
        ],
        [
          "Slash with confidence",
          "A single decisive stroke at a shallow angle opens better than several hesitant ones.",
        ],
        [
          "Cool before slicing",
          "The crumb continues to set as the loaf cools. Cutting too soon compresses it and makes slices gummy.",
        ],
      ],
    },
    pull: "A good bloomer has nowhere to hide. The shaping, the prove and the bake are all there to be read in the crust.",
    trade:
      "Bloomers suit counters, sandwich bars and table service where a free-standing loaf adds visual weight. State your preferred slicing and wrapping when you order, and ask the order desk for the current specification.",
    caps: [
      "Free-standing loaves, baked without a tin",
      "A crust that crackles as it cools",
      "Cut across to show the even, chewy crumb",
    ],
  },
  bap: {
    imgs: [
      "new/white-rolls-wooden-tray",
      "new/white-rolls-crate",
      "new/basket-round-rolls",
      "new/deli-sandwiches-paper",
      "pages/baker-toastie",
      "new/soft-dinner-rolls-tray",
      "new/basket-rustic-rolls",
    ],
    story: {
      h: "The everyday roll, and its many names",
      p: [
        "A bap is a soft white roll with a light dusting of flour on top. It is rarely the star of the plate, which is exactly the point: it is there to carry bacon, egg, sausage or a hot filling without competing with it.",
        "Regional names for the roll run all the way from bap and barm to cob, bun, batch and teacake, and the argument about which is correct has never been settled. What the family has in common is a thin, tender crust and a light, absorbent crumb that takes butter and sauce without collapsing.",
      ],
    },
    steps: {
      h: "What makes a good bap",
      intro: "The qualities that matter to a café or breakfast counter come down to four things.",
      items: [
        [
          "Even size",
          "Rolls are scaled by weight so that every filling sits the same way and every portion costs the same to prepare.",
        ],
        [
          "A soft, enriched dough",
          "A little fat and sugar tenderise the crumb and help the crust colour without hardening.",
        ],
        [
          "Flour dusting",
          "A light coating before baking keeps the top pale and gives the roll its familiar matt finish.",
        ],
        [
          "Proper cooling",
          "Rolls are cooled fully before bagging so that steam does not make the crust damp and sticky.",
        ],
      ],
    },
    table: {
      h: "A guide to regional rolls",
      intro:
        "The same idea under different names. Boundaries are loose, and local usage varies from street to street.",
      head: ["Name", "Usually found", "Typical form"],
      rows: [
        ["Bap", "Scotland, Northern England, London", "Soft, floury, slightly flattened"],
        ["Barm cake", "Lancashire, Greater Manchester", "Flat, round, very soft"],
        ["Cob", "East Midlands", "Round, firm crust"],
        ["Bun", "Widespread", "Small, round, often sweetened"],
      ],
    },
    faq: [
      [
        "Is a bap the same as a burger bun?",
        "They are close relatives. A bap is usually plainer and flour-dusted, while burger buns are generally glazed and often seeded or enriched.",
      ],
      [
        "Should baps be toasted?",
        "Split and lightly toasted works well for hot fillings. For cold fillings, a fresh, untoasted roll is usually better.",
      ],
      [
        "How should baps be stored?",
        "Keep them in a sealed bag or covered container at room temperature. Refrigeration dries a roll more quickly than leaving it out.",
      ],
    ],
    notes: {
      h: "At the breakfast counter",
      items: [
        [
          "Match roll to filling",
          "A larger bap suits a full breakfast; a smaller roll suits a single egg or a slice of bacon.",
        ],
        ["Warm, not hot", "A brief warm through refreshes the crumb. Overheating dries it out."],
        [
          "Order by the tray",
          "Rolls delivered in trays arrive with their shape intact and are quicker to handle at service.",
        ],
      ],
    },
    pull: "The best roll is the one you stop noticing, because the filling is all you taste.",
    trade:
      "Baps are a staple for cafés, caterers and breakfast counters. Tell the order desk how many covers you serve and whether you want them split, so that the delivery fits your service.",
    caps: [
      "Soft white rolls on a wooden tray",
      "Crated and ready for the morning rush",
      "A bap built for a café breakfast",
    ],
  },
  "barm-cake": {
    imgs: [
      "new/crate-bagged-buns",
      "pages/bagged-rolls-crates",
      "new/seafront-bag-buns",
      "new/burger-kitchen-line",
      "new/bonfire-night-hot-dog",
      "new/box-small-round-bakes",
      "new/basket-rustic-rolls",
    ],
    story: {
      h: "Named for the froth on the ale",
      p: [
        "Barm is an old English word for the yeasty foam that rises on fermenting ale. Brewers' barm was once the standard way to raise bread in the North West, and the flat, soft roll that took its name has outlasted the practice by a few centuries.",
        "The barm cake is wider and flatter than a bap, with a very tender crumb and a thin, pale crust. In Lancashire and Greater Manchester it is the natural partner of a chip butty, a bacon sandwich or a slice of meat and potato pie, and it is judged by how well it stays soft under hot fillings.",
      ],
    },
    steps: {
      h: "How a barm cake is made",
      intro: "The process is simple, but a soft roll depends on the details.",
      items: [
        [
          "A slack, well-mixed dough",
          "A softer dough gives the characteristic open, tender crumb, so mixing is thorough but unhurried.",
        ],
        [
          "Moulded flat and round",
          "Each piece is rounded and then flattened slightly, giving the wide, low shape that holds a filling well.",
        ],
        [
          "Proved in the warm",
          "A full prove is essential. Under-proved barm cakes bake with a tight, doughy centre.",
        ],
        [
          "Baked pale, cooled gently",
          "The rolls are baked to a light golden colour and cooled uncovered, then bagged once the steam has gone.",
        ],
      ],
    },
    table: {
      h: "Barm cake, bap and bun",
      intro: "How the three most familiar soft rolls compare.",
      head: ["Roll", "Shape", "Best used for"],
      rows: [
        ["Barm cake", "Wide, flat, very soft", "Chip butties, bacon, hot fillings"],
        ["Bap", "Rounder, slightly firmer", "Breakfast rolls, cold fillings"],
        ["Burger bun", "Domed, often glazed", "Burgers and grilled fillings"],
        ["Hot dog roll", "Long, split-ready", "Sausages and hot dogs"],
      ],
    },
    faq: [
      [
        "Is barm cake only eaten in the North West?",
        "It is most closely associated with Lancashire and Greater Manchester, though the name and the roll are understood across the North.",
      ],
      [
        "Why is it called a cake?",
        "In northern usage, bread products were often called cakes, such as oatcakes and teacakes. The word does not refer to a sweet bake.",
      ],
      [
        "Does it freeze well?",
        "Soft rolls freeze satisfactorily if bagged while fresh. Defrost in the bag so that moisture returns to the crumb rather than escaping.",
      ],
    ],
    notes: {
      h: "Serving advice",
      items: [
        [
          "Butter to the edge",
          "Spreading butter fully to the edge stops hot fillings soaking straight into the crumb.",
        ],
        [
          "Keep covered",
          "A barm cake loses its softness quickly in open air, so keep stock covered between services.",
        ],
        [
          "Choose the right size",
          "A wider roll suits sliced fillings; a smaller one suits a single sausage or egg.",
        ],
      ],
    },
    pull: "Some foods belong to a place. The barm cake belongs to the North West, and it is none the worse for being plain.",
    trade:
      "Barm cakes are supplied to cafés, takeaways and caterers who need a soft, consistent roll. Please confirm size, count per bag and packaging with the order desk before your first order.",
    caps: [
      "Bagged and crated for delivery",
      "Buns ready for the lunchtime queue",
      "A roll made for hot fillings",
    ],
  },
  borek: {
    imgs: [
      "gallery/spiral-borek",
      "pages/spinach-feta-pie-slice",
      "new/baker-brushing-filo",
      "pages/cheese-herb-pastry-pull",
      "new/iftar-table-dates",
      "new/baklava-foil-tray",
      "gallery/turkish-tea-baklava",
    ],
    story: {
      h: "Layers of paper-thin dough, from Anatolia to the Balkans",
      p: [
        "Börek is the common name for a large family of savoury pastries made from filo or yufka, the paper-thin doughs of the former Ottoman world. Sheets are brushed with oil, butter or a milk-and-egg wash, then layered, rolled or folded around a filling and baked until crisp and golden.",
        "Fillings are as varied as the regions that make them: white cheese with parsley, spinach, potato, spiced minced meat. Some are coiled into spirals, some cut into squares from a great tray, and some rolled into long cigar shapes. It is eaten at breakfast, as a snack, and at the table during Ramadan.",
      ],
    },
    steps: {
      h: "How börek is built",
      intro: "The technique is one of patient layering rather than complicated shaping.",
      items: [
        [
          "Open the dough",
          "Yufka is rolled very thin, or ready-made filo is used. The sheets must stay covered or they dry and crack.",
        ],
        [
          "Brush every layer",
          "Each sheet receives a thin coat of fat or wash, which separates the layers and makes them crisp.",
        ],
        [
          "Add the filling",
          "A moist but not wet filling is spread evenly. Watery spinach or cheese is the commonest cause of a soggy base.",
        ],
        [
          "Shape and bake",
          "Rolled, coiled or layered, the börek is baked until the top is deeply golden and the layers have set.",
        ],
      ],
    },
    table: {
      h: "Common börek styles",
      intro: "A short guide to some of the shapes and fillings you will see on a Turkish table.",
      head: ["Style", "Shape", "Typical filling"],
      rows: [
        ["Su böreği", "Boiled layered sheets, baked in a tray", "White cheese and parsley"],
        ["Sigara böreği", "Thin rolled cigar", "Cheese, often with herbs"],
        ["Kol böreği", "Long coil, cut into slices", "Spinach, cheese or minced meat"],
        ["Burma", "Twisted, crumpled spiral", "Cheese, potato or spinach"],
      ],
    },
    faq: [
      [
        "Is börek the same as baklava?",
        "They share the same family of dough but not the same purpose. Börek is savoury and baked with fillings; baklava is sweet, syruped and layered with nuts.",
      ],
      [
        "What is the difference between filo and yufka?",
        "Both are thin unleavened doughs. Yufka is usually a little thicker and used for rolled and layered savoury dishes, while filo is thinner and more common in sweet pastries.",
      ],
      [
        "Can börek be reheated?",
        "Yes. Reheat in a hot oven rather than a microwave to restore the crisp layers.",
      ],
    ],
    notes: {
      h: "On the menu",
      items: [
        [
          "A natural meze partner",
          "Served in small pieces, börek pairs well with olives, white cheese, tomatoes and bread.",
        ],
        [
          "Serve warm",
          "The layers are crispest soon after baking. Reheat briefly to refresh them.",
        ],
        [
          "Pair with tea or ayran",
          "Sharp, salty cheese fillings suit a glass of tea or a cool ayran.",
        ],
      ],
    },
    pull: "Börek is a lesson in restraint: a handful of ingredients, and the skill is in the layers.",
    trade:
      "Börek is not currently a separate line in our catalogue. Our Turkish pide and lavash are made for the same tables, and the order desk can advise on suitable breads to serve alongside.",
    caps: [
      "A spiral of crisp, golden layers",
      "Cheese and herb filling, pulled apart",
      "Filo brushed by hand, sheet by sheet",
    ],
  },
  granary: {
    imgs: [
      "pages/seeded-wholemeal-crumb",
      "new/dimpled-seeded-bread",
      "new/baker-kneading-seeded-dough",
      "new/seeded-rolls-crate",
      "new/seeded-rolls-bench-crates",
      "pages/flour-grains-bowls",
      "new/box-seeded-buns",
    ],
    story: {
      h: "Malted wheat, and a name with a trademark",
      p: [
        "Granary is best understood as a flavour and a texture. Malted wheat flakes are soaked and folded into a brown dough, then baked into the crumb, where they leave a sweet, nutty taste and a pleasing speckle. The name itself is a registered trademark, so many bakers describe the style as malted grain.",
        "Malting is a controlled sprouting of the wheat berry. The grain develops sugars as it sprouts and is then dried, which is where the toasty sweetness comes from. A malted loaf eats particularly well with strong cheese, ham or soup, and makes excellent toast.",
      ],
    },
    steps: {
      h: "From grain to loaf",
      intro: "A malted grain loaf has more stages than a plain white tin.",
      items: [
        [
          "Malt the wheat",
          "Wheat is sprouted briefly, dried and then kibbled or flaked. This is where most of the character originates.",
        ],
        [
          "Soak the flakes",
          "Malted flakes are soaked before mixing so that they soften and do not draw water from the dough.",
        ],
        [
          "Mix a brown dough",
          "The flakes are folded into a wholemeal or brown flour dough, mixed to develop the gluten without tearing the grain.",
        ],
        [
          "Prove and bake",
          "The loaf is proved in the tin and baked until the crust is deep brown and the sides are firm.",
        ],
      ],
    },
    table: {
      h: "Granary, wholemeal and white compared",
      intro: "How the three common tin loaves differ in flour and flavour.",
      head: ["Loaf", "Flour", "Flavour"],
      rows: [
        ["Granary-style", "Brown flour with malted wheat flakes", "Sweet, nutty, toasty"],
        ["Wholemeal", "Whole grain, bran and germ", "Earthy, robust, slightly bitter"],
        ["White", "Refined flour, bran removed", "Mild, soft, neutral"],
        ["Seeded brown", "Brown flour with mixed seeds", "Nutty, with a crunch"],
      ],
    },
    faq: [
      [
        "Why is it sometimes called malted grain?",
        "Granary is a trademark owned by a flour miller. Other bakeries use malted grain or malted wheat for the same style.",
      ],
      [
        "Is a granary loaf wholemeal?",
        "Not necessarily. It is usually made with brown flour and malted flakes rather than whole grain flour alone.",
      ],
      [
        "Does malted flour contain added sugar?",
        "Malted flour gets its sweetness from sugars that develop in the grain as it sprouts. Check the specification for each product for exact ingredients.",
      ],
    ],
    notes: {
      h: "At the table",
      items: [
        [
          "Excellent toasted",
          "The malted flakes caramelise lightly under heat and deepen the flavour.",
        ],
        ["Strong flavours welcome", "Mature cheddar, smoked fish and roast beef suit it well."],
        ["Slice thick for soup", "A sturdy crumb holds up to dipping without falling apart."],
      ],
    },
    pull: "Malted grain is the quiet sweetness in a good brown loaf. You notice it when it is missing.",
    trade:
      "Our Granary Tin is listed in the Loaves range. Ask for the current ingredient and allergen specification, which will confirm cereals, seeds and any gluten-containing ingredients.",
    caps: [
      "Seeded crumb, close up",
      "Seeded rolls, boxed for delivery",
      "Dough with seeds, worked by hand",
    ],
  },
  sangak: {
    imgs: [
      "new/thin-flatbread-stack-cloth",
      "new/sangak-drying-rack",
      "new/sangak-in-paper",
      "new/flatbread-sheets-tray",
      "pages/flatbread-sheets-box",
      "gallery/baker-flatbread",
      "new/box-flatbread-stacks",
    ],
    story: {
      h: "The pebble-baked bread of Iran",
      p: [
        "Sangak means little stone in Persian, and the name describes the method exactly. A thin sheet of wholewheat dough is stretched over a bed of hot pebbles in a large oven and baked until it blisters and sets. The pebbles leave the underside dimpled, and the bread is lifted off with the stones sometimes still pressed into it.",
        "It is long, flat, a little chewy and richly toasted, and it is eaten almost at once. In Iran it is bought hot from the baker, torn into pieces and served with white cheese, herbs, walnuts and tea. A sourdough-style fermentation is traditional, which gives a gentle tang to the wholewheat flavour.",
      ],
    },
    steps: {
      h: "How sangak is baked",
      intro: "Sangak depends on heat, speed and a practised hand.",
      items: [
        [
          "Ferment the dough",
          "A wholewheat dough is fermented until soft and slightly acidic, and is left slack so that it can be stretched very thin.",
        ],
        [
          "Stretch onto the paddle",
          "The dough is pulled into a long oval and laid onto a paddle or cushion, ready for the oven.",
        ],
        [
          "Bake on hot pebbles",
          "The sheet is placed on the heated stones and baked for just a few minutes until it blisters and browns.",
        ],
        [
          "Lift and serve",
          "The bread is removed with a hook or peel, shaken free of any stones, and served while still warm.",
        ],
      ],
    },
    table: {
      h: "Persian and Central Asian flatbreads",
      intro: "Sangak sits alongside several other breads baked in similar traditions.",
      head: ["Bread", "Baked", "Character"],
      rows: [
        ["Sangak", "On hot pebbles", "Wholewheat, long, chewy, dimpled"],
        ["Barbari", "On a hot stone or in a deck oven", "Thick, ridged, sesame-topped"],
        ["Lavash", "Against oven wall or on a griddle", "Paper-thin, soft, foldable"],
        ["Taftoon", "In a clay oven", "Thin, light, slightly crisp"],
      ],
    },
    faq: [
      [
        "Is sangak wholewheat?",
        "Traditionally yes. It is made from wholewheat flour, which gives the bread its colour and its earthy flavour.",
      ],
      [
        "How should I eat it?",
        "Torn into pieces, still warm if possible, with cheese, fresh herbs and tea. It is also used to wrap kebabs.",
      ],
      [
        "Does it keep?",
        "It is best on the day it is baked. If it stiffens, a brief pass over a hot pan restores it.",
      ],
    ],
    notes: {
      h: "Serving ideas",
      items: [
        [
          "Breakfast the Iranian way",
          "White cheese, walnuts, mint and tea, with the bread torn to share.",
        ],
        ["Wrap a kebab", "A single piece lined with grilled meat makes a generous, sturdy wrap."],
        ["Crisp it lightly", "A few seconds on a hot griddle brings back crispness at the edges."],
      ],
    },
    pull: "Sangak is judged within minutes of leaving the oven. It does not wait.",
    trade:
      "Sangak is part of our Flatbreads & World Breads range and is supplied for restaurants and grills. Confirm pack size and specification with the order desk.",
    caps: [
      "Thin sheets stacked on linen",
      "Hung to cool after baking",
      "Wrapped in paper for the table",
    ],
  },
  scone: {
    imgs: [
      "new/scones-cooling-rack",
      "new/scone-jam-cream",
      "pages/afternoon-tea-spread",
      "new/garden-tea-table-wisteria",
      "new/friends-tea-cake",
      "new/garden-bench-tea-cake",
      "new/window-tea-toast",
    ],
    story: {
      h: "Afternoon tea’s most argued-over item",
      p: [
        "A scone is a lightly sweetened quick bread raised with baking powder rather than yeast. It is mixed briefly, cut, glazed and baked in a hot oven until it rises tall with a soft, crumbly centre. Plain and fruit versions are the classic pair.",
        "The ritual is as important as the bake. Split by hand, not cut, then topped with clotted cream and jam. Devon is said to put the cream first and Cornwall the jam, and the debate has outlived most of the people who started it. Both versions are eaten with equal enthusiasm.",
      ],
    },
    steps: {
      h: "The method behind a good scone",
      intro: "Scones reward a light touch, and punish an enthusiastic one.",
      items: [
        [
          "Rub in cold butter",
          "Butter is worked into the flour until the mixture resembles breadcrumbs. Warm hands or warm butter make a heavy scone.",
        ],
        [
          "Bring together gently",
          "Liquid is added all at once and the dough is mixed only until it just holds together.",
        ],
        [
          "Cut straight down",
          "A sharp cutter is pressed straight down and lifted without twisting, which allows an even rise.",
        ],
        [
          "Glaze and bake hot",
          "Tops are brushed with egg or milk and baked in a hot oven so that the scones rise quickly.",
        ],
      ],
    },
    table: {
      h: "Cream tea, two ways",
      intro: "The great regional disagreement, set out as plainly as possible.",
      head: ["County", "Order", "Notes"],
      rows: [
        ["Devon", "Cream first, then jam", "Cream is spread as if it were butter"],
        ["Cornwall", "Jam first, then cream", "A spoonful of clotted cream sits on top"],
        ["Either", "Warm scone, split by hand", "Eat soon after baking"],
        ["Variations", "Plain, fruit, cheese", "Cheese scones are a savoury alternative"],
      ],
    },
    faq: [
      [
        "How do you pronounce scone?",
        "Both skone and skon are in common use across Britain. Neither is incorrect.",
      ],
      [
        "Why did my scones not rise?",
        "Common causes are old baking powder, overworked dough, or twisting the cutter when cutting. Using a hot oven also helps.",
      ],
      [
        "Should scones be eaten warm?",
        "They are at their best the day they are baked, ideally still slightly warm, and can be refreshed briefly in the oven.",
      ],
    ],
    notes: {
      h: "Serving a cream tea",
      items: [
        [
          "Clotted cream, not whipped",
          "Proper clotted cream has a rich, thick texture and a golden crust on top.",
        ],
        [
          "Strawberry is traditional",
          "Smooth strawberry jam is the standard, though raspberry is also common.",
        ],
        [
          "Pair with a pot of tea",
          "A good black tea, such as an English breakfast blend, balances the richness.",
        ],
      ],
    },
    pull: "Cream first or jam first? We are happy to supply the scone and leave you to settle the argument.",
    trade:
      "Our plain and fruit scones are listed in the Cakes & Sweet Treats range, suited to tea rooms, hotels and cafés. Ask the order desk about pack sizes and delivery days.",
    caps: [
      "Fresh from the oven, cooling on a rack",
      "Split, jammed and creamed",
      "An afternoon tea laid out",
    ],
  },
  "vienna-loaf": {
    imgs: [
      "gallery/baguette-basket",
      "new/long-loaf-cut-crumb",
      "pages/baguettes-paper-trolley",
      "pages/picnic-baguette-cheese",
      "gallery/baker-baguette",
      "new/sliced-white-loaf-cloth",
      "new/couple-cafe-bread",
    ],
    story: {
      h: "How steam changed the bread of Europe",
      p: [
        "The Vienna loaf takes its name from the bakers of nineteenth-century Vienna, who developed steam-injected ovens and discovered what steam does to a crust. A burst of moist heat at the start of baking keeps the surface flexible, so the loaf expands fully, and then sets into a thin, glossy, crisp shell.",
        "Viennese dough is also lightly enriched with milk, a little sugar and sometimes a small amount of fat. The result is a finer, softer, paler crumb than a plain French loaf. The technique spread to Paris, where it shaped the French baguette tradition, and later to Britain, where it influenced the fancy and Vienna breads of the Victorian baker.",
      ],
    },
    steps: {
      h: "What steam does in the oven",
      intro: "The principle is simple, and it explains much of what makes a crisp loaf.",
      items: [
        [
          "Steam is injected",
          "As the loaf enters the oven, steam condenses on the cold dough surface and keeps it moist.",
        ],
        [
          "The loaf expands",
          "While the skin is still elastic, the gas inside the dough expands and the loaf springs to its full volume.",
        ],
        [
          "Starch gelatinises",
          "Moisture on the surface gelatinises starch, which later dries into a thin, glossy film.",
        ],
        [
          "Steam is released",
          "The vent is opened partway through, letting the crust dry, crisp and colour.",
        ],
      ],
    },
    table: {
      h: "Vienna, French and tin compared",
      intro: "Three familiar loaves and the baking choices behind them.",
      head: ["Loaf", "Dough", "Result"],
      rows: [
        ["Vienna", "Lean, lightly enriched", "Thin glossy crust, soft fine crumb"],
        ["Baguette", "Lean: flour, water, salt, yeast", "Crisp crust, open crumb"],
        ["Tin loaf", "Often enriched", "Soft crust, even crumb"],
        ["Brioche", "Heavily enriched", "Rich, soft, golden"],
      ],
    },
    faq: [
      [
        "Is a Vienna loaf the same as a baguette?",
        "No. A baguette is traditionally lean, while the Vienna style is lightly enriched, giving a softer crumb.",
      ],
      [
        "Why is the crust glossy?",
        "The shine comes from steam gelatinising the surface starch early in the bake.",
      ],
      [
        "Can I create steam at home?",
        "A tray of boiling water in the base of the oven, or a preheated pan and a splash of water, produces enough for a domestic bake.",
      ],
    ],
    notes: {
      h: "At the counter",
      items: [
        [
          "Best on the day",
          "The thin crust loses its crispness as it absorbs moisture from the crumb.",
        ],
        [
          "Slice at an angle",
          "A diagonal cut exposes more crumb and suits canapés and bruschetta.",
        ],
        [
          "Refresh in the oven",
          "A few minutes in a hot oven restores some of the original crackle.",
        ],
      ],
    },
    pull: "Steam is the baker’s quietest tool. You can’t see it working, but you can taste the difference.",
    trade:
      "Our French Baguette and White Sliced Loaf follow the same traditions of steam-baked crust and fine crumb. Ask the order desk about the specification for each.",
    caps: [
      "Baguettes in a basket, ready to serve",
      "A long loaf cut to show the fine crumb",
      "A crisp loaf at a picnic table",
    ],
  },
  "tin-loaf": {
    imgs: [
      "pages/crumb-white-loaf",
      "new/tin-loaf-out-of-tin",
      "new/loaf-cut-open-crumb",
      "pages/white-cob-torn",
      "new/window-tea-toast",
      "pages/loaf-handwritten-note",
      "new/hands-tearing-warm-loaf",
    ],
    story: {
      h: "The loaf that built the British sandwich",
      p: [
        "A tin loaf is simply bread baked in a rectangular tin. The sides of the tin support the dough as it rises and sets, which produces a uniform shape, a soft thin crust and an even crumb. Slices come out the same size and thickness from end to end.",
        "That uniformity made it indispensable once sliced bread and mass sandwich-making arrived. It also made it a canvas. White, wholemeal, granary, seeded, milk and malted are all variations on the same shape. For bakers, a good tin loaf is a test of consistency: it must be identical from the first loaf of the morning to the last.",
      ],
    },
    steps: {
      h: "From dough to sliced loaf",
      intro: "Consistency is the point, and each stage is controlled.",
      items: [
        [
          "Scale accurately",
          "Each piece of dough is weighed so that every loaf fills its tin to the same height.",
        ],
        [
          "Mould and place in the tin",
          "The dough is moulded into a tight cylinder and placed seam-down in a greased tin.",
        ],
        [
          "Prove to the rim",
          "The tin loaf is proved until the dough rises just above the top of the tin and springs back slowly when pressed.",
        ],
        [
          "Bake, depan and cool",
          "The loaf is baked until the sides are firm, tipped out and cooled fully before slicing and wrapping.",
        ],
      ],
    },
    table: {
      h: "Common tin loaf variations",
      intro: "One shape, many flours.",
      head: ["Variation", "Flour", "Typical use"],
      rows: [
        ["White", "Refined wheat", "Sandwiches, toast"],
        ["Wholemeal", "Whole grain wheat", "Toast, health-conscious menus"],
        ["Granary-style", "Brown flour, malted flakes", "Toast, cheese, soup"],
        ["Seeded", "Brown or white with seeds", "Breakfast, deli sandwiches"],
      ],
    },
    faq: [
      [
        "Why does a tin loaf have a soft crust?",
        "The tin shields the dough from direct heat and traps steam, so the crust stays thin and tender.",
      ],
      [
        "Can it be frozen?",
        "Yes. Freeze pre-sliced so that slices can be removed individually and toasted from frozen.",
      ],
      [
        "What is a split tin?",
        "A loaf baked in a tin with a cut across the top, giving a distinctive split crust. It sits between a tin loaf and a bloomer.",
      ],
    ],
    notes: {
      h: "Kitchen practicalities",
      items: [
        [
          "Slice thickness matters",
          "Thicker slices suit toast and hot sandwiches; thinner slices suit afternoon tea.",
        ],
        [
          "Store in a cool place",
          "Keep bread out of direct sunlight and away from heat sources, in a clean breathable container.",
        ],
        [
          "Rotate stock",
          "Use older loaves first, and keep delivery dates visible on shelf and in the kitchen.",
        ],
      ],
    },
    pull: "The tin loaf is the most ordinary bread in the country, and the hardest to make consistently.",
    trade:
      "Our White Sliced and Wholemeal loaves are in the Loaves range. Please ask the order desk to confirm slice thickness, wrapping and the current specification.",
    caps: [
      "A loaf turned out of its tin",
      "Sliced to show the even crumb",
      "Toast, butter and a window seat",
    ],
  },
  viennoiserie: {
    imgs: [
      "new/london-cafe-croissant",
      "new/box-croissants",
      "new/window-tray-croissants",
      "pages/window-croissant-cappuccino",
      "gallery/iced-coffee-croissant",
      "new/breakfast-board-pastries",
      "new/croissant-honeycomb-cut",
    ],
    story: {
      h: "Between bread and pastry",
      p: [
        "Viennoiserie is the French term for yeast-raised, enriched pastries such as croissants, pains au chocolat, brioche and Danish pastries. The name acknowledges the Viennese bakers who brought the idea to Paris, while the technique of lamination was developed in France.",
        "These are yeast doughs, risen like bread, but they are rich in butter, milk, eggs and sugar like pastry. Some are laminated, with butter folded between layers of dough, and others, like brioche, are simply enriched. The result is a family of breakfast and coffee-counter staples with a distinctive aroma and a delicate, flaky or tender crumb.",
      ],
    },
    steps: {
      h: "A day in the life of a croissant",
      intro: "Viennoiserie moves slowly. This is how a laminated pastry is produced.",
      items: [
        [
          "Make the détrempe",
          "A yeasted dough of flour, milk, sugar, salt and a little butter is mixed and chilled overnight.",
        ],
        [
          "Lock in the butter",
          "A flat block of cold butter is enclosed in the dough, then rolled and folded in turns.",
        ],
        [
          "Shape and prove",
          "The sheet is cut into triangles, rolled, curved and proved in a warm cabinet until light and wobbly.",
        ],
        [
          "Glaze and bake",
          "Egg wash gives colour and gloss. Baking in a hot oven melts the butter and creates steam between the layers.",
        ],
      ],
    },
    table: {
      h: "The viennoiserie family",
      intro: "Some of the most familiar pastries and how they differ.",
      head: ["Pastry", "Dough", "Finish"],
      rows: [
        ["Croissant", "Laminated, yeast-raised", "Crisp, flaky, honeycombed"],
        ["Pain au chocolat", "Laminated, chocolate batons", "Flaky, with melted chocolate"],
        ["Danish pastry", "Laminated, sweeter", "Fruit, custard or almond topping"],
        ["Brioche", "Enriched, not laminated", "Soft, golden, rich"],
      ],
    },
    faq: [
      [
        "Is a croissant French or Austrian?",
        "The ancestor is the Austrian kipferl, but the laminated croissant as we know it was developed in France in the nineteenth and early twentieth centuries.",
      ],
      [
        "Why is butter so important?",
        "Butter provides flavour and creates the layers. Margarine gives a different texture and a less rounded taste.",
      ],
      [
        "Can viennoiserie be frozen?",
        "Many are supplied frozen, either baked or ready to bake. Check the specification for each product.",
      ],
    ],
    notes: {
      h: "At the coffee counter",
      items: [
        ["Serve warm", "A brief reheat refreshes the layers and releases the butter aroma."],
        [
          "Offer a pairing",
          "A croissant with a cortado or flat white is a well-established morning combination.",
        ],
        [
          "Display with care",
          "Keep pastries covered or in a cabinet to protect the crisp surface from humidity.",
        ],
      ],
    },
    pull: "A croissant is mostly air and butter. The skill is in keeping the two apart.",
    trade:
      "Our Pastries & Viennoiserie range includes butter croissants, pains au chocolat, almond, pistachio and Danish pastries. Ask the order desk whether you would prefer them freshly baked or ready to bake.",
    caps: [
      "Croissants in the window",
      "Boxed for the morning delivery",
      "The honeycomb that lamination gives",
    ],
  },
};
