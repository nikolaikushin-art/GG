export type ProductDetail = {
  tagline: string;
  description: string;
  ingredients: string[];
  steps: { title: string; text: string }[];
  specs: [string, string][];
  serving: string[];
};

// Content taken from Golden Grain’s product sheets. Internal costings and competitor prices are deliberately not published.
export const productDetails: Record<string, ProductDetail> = {
  "cinnamon-roll": {
    tagline: "Cinnamon Swirl · Artisan bread & pastry",
    description:
      "A soft, enriched yeast dough made with milk, eggs and butter, rolled around a generous cinnamon and brown sugar filling and finished with a sugar icing glaze.",
    ingredients: [
      "Strong white bread flour",
      "Milk",
      "Water",
      "Yeast",
      "Sugar",
      "Salt",
      "Free-range eggs",
      "Butter (dough & filling)",
      "Brown sugar",
      "Ground cinnamon",
      "Icing sugar",
    ],
    steps: [
      {
        title: "Mix the dough",
        text: "Flour, milk, water, yeast, sugar, salt and eggs are kneaded before the softened butter is worked in until smooth and elastic.",
      },
      {
        title: "Bulk fermentation",
        text: "The dough rests, covered, until doubled in size – about 60–90 minutes.",
      },
      { title: "Roll the dough", text: "Rolled into a large, even rectangle." },
      {
        title: "Add the filling",
        text: "Spread with softened butter and scattered with brown sugar and cinnamon.",
      },
      {
        title: "Roll and cut",
        text: "Rolled tightly into a log and cut into even 90–100 g spirals.",
      },
      { title: "Proof", text: "Arranged on trays and proved until puffy, 30–60 minutes." },
      { title: "Bake", text: "Baked at 180–190°C for 18–25 minutes until golden." },
      { title: "Finish", text: "Cooled slightly and drizzled with icing." },
    ],
    specs: [
      ["Product", "Cinnamon Roll / Cinnamon Swirl"],
      ["Dough piece", "90 – 100 g (raw)"],
      ["Dough type", "Soft enriched yeast dough (milk, eggs, butter)"],
      ["Filling", "Cinnamon and brown sugar with butter"],
      ["Finish", "Iced (sugar icing glaze)"],
      ["Suitable for", "Cafés, coffee shops, hotels, restaurants and wholesale"],
    ],
    serving: ["With coffee or tea", "Warmed with vanilla icing", "Café breakfast pastry"],
  },
  paratha: {
    tagline: "Flaky, layered South Asian flatbread",
    description:
      "Thin sheets of dough brushed with oil or ghee, folded and coiled into a 'snail' to create dozens of flaky layers, then griddled until golden.",
    ingredients: [
      "Strong white bread flour",
      "Water",
      "Yeast",
      "Salt",
      "Sugar",
      "Vegetable oil",
      "Oil or ghee for layering",
    ],
    steps: [
      {
        title: "Mix ingredients",
        text: "Flour, yeast, sugar, salt, oil and most of the water are mixed for 5–8 minutes.",
      },
      { title: "Knead", text: "8–10 minutes until smooth, soft and elastic." },
      { title: "Rest", text: "Covered and rested for 20–30 minutes." },
      {
        title: "Roll and oil",
        text: "Each ball is rolled into a thin 25–30 cm sheet and brushed with oil or ghee.",
      },
      {
        title: "Layer and coil",
        text: "Folded into a long strip and coiled into a round snail shape.",
      },
      { title: "Rest again", text: "10–15 minutes to relax the dough and set the layers." },
      { title: "Final roll", text: "Gently rolled to 16–20 cm and 3–5 mm thick." },
      { title: "Cook", text: "Griddled with a little oil or ghee, 2–3 minutes per side." },
    ],
    specs: [
      ["Type", "Layered paratha (South Asian style)"],
      ["Dough piece", "120 – 130 g (typical 125 g)"],
      ["Finished size", "Approx. 16 – 20 cm diameter"],
      ["Thickness", "Approx. 3 – 5 mm (layered)"],
      ["Texture", "Flaky, soft inside, slightly crisp outside"],
      ["Appearance", "Round, golden brown with visible layers"],
      ["Suitable for", "Takeaways, restaurants, caterers, retail and wholesale"],
      ["Shelf life", "1 – 2 days ambient (up to 3 months frozen)"],
    ],
    serving: [
      "With curry – chana, chicken or lamb",
      "Kebab wrap (paratha roll)",
      "Breakfast paratha with egg, cheese or vegetables",
    ],
  },
  "khameeri-bread": {
    tagline: "Traditional Afghan & Central Asian soft bread",
    description:
      "A pillowy, yeasted round with a tender crust, dimpled by hand and scattered with sesame or nigella seeds before a blast in a hot deck oven or tandoor.",
    ingredients: [
      "Strong white bread flour",
      "Water",
      "Yeast",
      "Salt",
      "Sugar",
      "Vegetable oil or ghee",
      "Plain yoghurt (for extra softness)",
      "Sesame or nigella seeds",
    ],
    steps: [
      {
        title: "Mix ingredients",
        text: "Flour, yeast, sugar, salt, oil, yoghurt and most of the water, mixed 5–8 minutes.",
      },
      { title: "Knead", text: "8–12 minutes until smooth, soft and elastic." },
      { title: "First fermentation", text: "60–90 minutes at 24–28°C until doubled." },
      { title: "Divide", text: "Into 300–330 g pieces." },
      { title: "Shape", text: "Into round, slightly thick discs of 18–20 cm." },
      { title: "Second rise", text: "Proved for 20–30 minutes until puffy." },
      { title: "Prepare and top", text: "Dimpled, brushed with egg or milk and seeded." },
      { title: "Bake", text: "240–260°C in a deck oven or tandoor for 10–14 minutes." },
    ],
    specs: [
      ["Type", "Khameeri bread"],
      ["Dough piece", "300 – 330 g (typical 320 g)"],
      ["Finished size", "Approx. 18 – 20 cm diameter"],
      ["Thickness", "Approx. 2 – 3 cm"],
      ["Texture", "Very soft, fluffy and airy with a tender crust"],
      ["Appearance", "Round, golden, dimpled with sesame or nigella"],
      ["Suitable for", "Breakfast, kebab shops, Afghan & Asian cuisine, retail and wholesale"],
      ["Shelf life", "1 – 2 days ambient (up to 1 month frozen)"],
    ],
    serving: [
      "Breakfast bread with egg & tomatoes",
      "With kebabs, traditional style",
      "With chana, lentil or meat curry",
    ],
  },
  "french-baguette": {
    tagline: "Classic French bread · Crisp crust & airy crumb",
    description:
      "Made with just four ingredients and plenty of time. An autolyse rest and gentle folds give the open, chewy interior; a steamy bake gives the crackling crust.",
    ingredients: ["Strong white bread flour", "Water", "Salt", "Yeast"],
    steps: [
      {
        title: "Mix and rest (autolyse)",
        text: "Flour and most of the water rest for 20 minutes to build strength and flavour.",
      },
      {
        title: "Add yeast and salt",
        text: "Mixed for 8–10 minutes until smooth and well developed.",
      },
      {
        title: "Bulk fermentation",
        text: "90–120 minutes at 24–26°C with one or two gentle folds.",
      },
      {
        title: "Divide and shape",
        text: "300 g pieces, pre-shaped, rested, then rolled to 50–60 cm.",
      },
      {
        title: "Proof and bake",
        text: "Scored three to five times and baked at 230–250°C with steam for 20–25 minutes.",
      },
      {
        title: "Cool and pack",
        text: "Oven vented to crisp the crust, then cooled for at least an hour.",
      },
    ],
    specs: [
      ["Dough piece", "300 g per baguette"],
      ["Baked weight", "250 – 270 g"],
      ["Length", "Approx. 50 – 60 cm"],
      ["Texture", "Crisp golden crust, open airy and chewy interior"],
      ["Suitable for", "Sandwiches, garlic bread, soups and catering"],
      ["Storage", "Cool, dry place; best within 1 – 2 days"],
    ],
    serving: ["Baguette sandwich", "Garlic bread", "With soup"],
  },
  "afghan-roghani": {
    tagline: "Traditional Afghan oil-rich flatbread",
    description:
      "A soft, slightly chewy bread enriched with oil and yoghurt, pressed with traditional finger grooves, glazed with egg and showered with sesame and nigella seeds.",
    ingredients: [
      "Strong white bread flour",
      "Water",
      "Yeast",
      "Salt",
      "Sugar",
      "Vegetable oil or ghee",
      "Plain yoghurt",
      "Egg (for glaze)",
      "Sesame and nigella seeds",
    ],
    steps: [
      {
        title: "Mix ingredients",
        text: "Flour, yeast, sugar, salt, yoghurt and water, mixed 5–8 minutes.",
      },
      { title: "Knead", text: "8–12 minutes until smooth, soft and elastic." },
      { title: "First fermentation", text: "60–90 minutes at 24–28°C until doubled." },
      { title: "Divide", text: "Into 350–380 g pieces." },
      { title: "Shape", text: "Flattened into 22–26 cm rounds, 1.5–2 cm thick." },
      {
        title: "Create pattern",
        text: "Three to five parallel finger grooves; brushed generously with egg and oil.",
      },
      { title: "Top", text: "Sprinkled with sesame and nigella seeds." },
      {
        title: "Bake",
        text: "240–260°C in a deck oven or tandoor for 10–14 minutes until glossy.",
      },
    ],
    specs: [
      ["Type", "Afghan Roghani (oil bread)"],
      ["Dough piece", "350 – 380 g (typical 360 g)"],
      ["Finished size", "Approx. 22 – 26 cm diameter"],
      ["Thickness", "Approx. 1.5 – 2.0 cm"],
      ["Texture", "Soft, fluffy, slightly chewy with a rich buttery taste"],
      ["Appearance", "Round, golden, glossy with finger grooves and seeds"],
      ["Suitable for", "Breakfast, kebab shops, restaurants, Afghan & Persian cuisine, retail"],
      ["Shelf life", "1 – 2 days ambient (up to 1 month frozen)"],
    ],
    serving: ["With tea, the traditional way", "With kebabs", "Breakfast platter"],
  },
  "wholemeal-loaf": {
    tagline: "Natural, nutritious & full of fibre",
    description:
      "A hearty 800 g tin loaf made from wholemeal bread flour. An autolyse rest hydrates the bran for a softer crumb, and every loaf is sliced and bagged once fully cooled.",
    ingredients: [
      "Wholemeal bread flour",
      "Water",
      "Sugar or honey",
      "Salt",
      "Yeast",
      "Vegetable oil",
      "Vital wheat gluten (optional)",
    ],
    steps: [
      {
        title: "Hydrate and prepare",
        text: "Flour and water rest 10–20 minutes to soften the bran.",
      },
      {
        title: "Mix and knead",
        text: "Yeast, sugar or honey, salt and oil added; mixed 8–12 minutes.",
      },
      { title: "Bulk ferment", text: "60–90 minutes at 26–28°C until roughly doubled." },
      {
        title: "Divide and mould",
        text: "Moulded into tight loaves and placed into greased tins.",
      },
      { title: "Final proof", text: "45–60 minutes at 28–32°C until near the top of the tins." },
      { title: "Bake", text: "200–215°C for 25–30 minutes to an internal 96°C." },
      {
        title: "Cool, slice and pack",
        text: "Cooled for an hour, sliced 14–18 ways and packed in printed bags.",
      },
    ],
    specs: [
      ["Baked weight", "800 g per loaf"],
      ["Slices", "Approx. 14 – 18"],
      ["Shelf life", "3 – 5 days ambient"],
      ["Storage", "Cool, dry place away from direct sunlight"],
      ["Suitable for", "Sandwiches, toast, healthy and high-fibre menus"],
    ],
    serving: ["Sandwiches", "Toast", "With soup"],
  },
  "turkish-pide": {
    tagline: "Traditional Turkish oval bread (sade pide)",
    description:
      "A soft, airy oval with a golden crust and the signature dimple pattern, brushed with egg and finished with sesame and nigella seeds.",
    ingredients: [
      "Strong white bread flour",
      "Water",
      "Yeast",
      "Salt",
      "Sugar",
      "Vegetable or olive oil",
      "Egg (for glaze)",
      "Sesame and nigella seeds",
    ],
    steps: [
      {
        title: "Mix ingredients",
        text: "Flour, yeast, sugar, salt, oil and most of the water, mixed 5–8 minutes.",
      },
      { title: "Knead", text: "8–12 minutes until smooth, soft and elastic." },
      { title: "First fermentation", text: "45–60 minutes at 24–28°C until roughly doubled." },
      { title: "Divide", text: "Into 330–370 g pieces." },
      { title: "Shape", text: "Stretched into ovals 30–35 cm long and 12–15 cm wide." },
      { title: "Prepare for baking", text: "Dimpled by hand and brushed with beaten egg." },
      { title: "Top", text: "Sprinkled with sesame and nigella seeds." },
      { title: "Bake", text: "230–260°C on a deck or stone oven for 8–12 minutes." },
    ],
    specs: [
      ["Type", "Turkish pide (oval)"],
      ["Dough piece", "330 – 370 g (typical 350 g)"],
      ["Finished size", "Approx. 30 – 35 cm × 12 – 15 cm"],
      ["Thickness", "Approx. 2.5 – 3.5 cm"],
      ["Texture", "Soft and airy with a golden crust and dimples"],
      ["Suitable for", "Kebab shops, Turkish restaurants, breakfast, sandwiches, retail"],
      ["Shelf life", "1 – 2 days ambient (up to 1 month frozen)"],
    ],
    serving: [
      "Plain pide, breakfast or side",
      "Cheese pide (kaşarlı)",
      "Minced meat pide (kıymalı)",
    ],
  },
};
