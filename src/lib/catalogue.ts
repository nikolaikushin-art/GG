export type Product = { slug: string; name: string; note: string; origin: string };
export type Category = {
  slug: string;
  name: string;
  strap: string;
  intro: string;
  products: Product[];
};

const p = (name: string, note: string, origin = "British Isles"): Product => ({
  slug: name
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, ""),
  name,
  note,
  origin,
});

export const categories: Category[] = [
  {
    slug: "loaves",
    name: "Loaves & Tin Breads",
    strap: "The daily staples of the British table",
    intro:
      "Baked through the night in our East London ovens and on the van before the kettle’s boiled. Our tin loaves are proved slowly for a soft crumb and honest crust.",
    products: [
      p("White Sliced Loaf", "Soft, even crumb – the classic sandwich loaf."),
      p("Wholemeal Loaf", "Stoneground British wholemeal flour, nutty and hearty."),
      p("Farmhouse Bloomer", "Scored, crusty top with an open, chewy crumb."),
      p("Granary Tin", "Malted grains for a sweet, toasty depth."),
      p("Sourdough Boule", "48-hour natural levain, blistered crust.", "Artisan"),
    ],
  },
  {
    slug: "continental",
    name: "Continental Breads",
    strap: "European classics, baked in London",
    intro:
      "From Parisian baguettes to Ligurian focaccia, our continental range brings the café counter to your kitchen.",
    products: [
      p("French Baguette", "Crisp crackling crust, airy crumb.", "France"),
      p("Ciabatta", "High-hydration dough, olive-oil kissed.", "Italy"),
      p("Focaccia", "Rosemary, sea salt and Kalamata olives.", "Italy"),
      p("Turkish Simit", "Sesame-crusted, molasses-dipped ring.", "Türkiye"),
    ],
  },
  {
    slug: "rolls-buns",
    name: "Rolls & Buns",
    strap: "For burger bars, cafés and caterers",
    intro:
      "Consistent size, golden glaze and a bun that holds its own against the juiciest fillings.",
    products: [
      p("Brioche Burger Bun", "Butter-enriched, glossy, toasts beautifully."),
      p("Sesame Burger Bun", "Soft classic with a toasted seed top."),
      p("Hot Dog Roll", "Long, soft and split-ready."),
      p("Bap & Barm Cake", "Floury northern favourite."),
    ],
  },
  {
    slug: "flatbreads",
    name: "Flatbreads & World Breads",
    strap: "Fresh from the tandoor and stone oven",
    intro:
      "Supplying kebab houses, grills and restaurants across London with authentic breads from Persia, Afghanistan, Türkiye and South Asia.",
    products: [
      p("Pitta / Shawarma Bread", "Pockets that puff perfectly.", "Levant"),
      p("Naan Bread", "Tandoor-baked, garlic & coriander option.", "South Asia"),
      p("Sangak Bread", "Pebble-baked wholewheat flatbread.", "Iran"),
      p("Barbari Bread", "Ridged, sesame-topped Persian loaf.", "Iran"),
      p("Taftoon Bread", "Thin, soft clay-oven bread.", "Iran"),
      p("Lavash Bread", "Paper-thin, ideal for wraps.", "Armenia"),
      p("Turkish Pide", "Egg-washed, nigella-scattered.", "Türkiye"),
      p("Afghan Roghani", "Oil-rich flatbread with finger grooves and seeds.", "Afghanistan"),
      p("Paratha", "Flaky, layered South Asian flatbread.", "South Asia"),
      p("Khameeri Bread", "Soft, fluffy Afghan & Central Asian round.", "Afghanistan"),
      p("Kulcha Bread", "Soft, herb-topped leavened bread.", "Punjab"),
      p("Nan-e Tiri", "Thin Iranian crisp bread.", "Iran"),
    ],
  },
  {
    slug: "pastries",
    name: "Pastries & Viennoiserie",
    strap: "Laminated with proper butter",
    intro:
      "Many fine layers of all-butter pastry, folded by hand. Delivered ready to bake or freshly baked.",
    products: [
      p("Butter Croissant", "Crisp shell, honeycomb interior.", "France"),
      p("Pain au Chocolat", "Two batons of dark chocolate.", "France"),
      p("Pistachio Croissant", "Filled and topped with pistachio cream."),
      p("Almond Croissant", "Twice-baked with frangipane."),
      p("Danish Pastry", "Seasonal British fruit.", "Denmark"),
      p("Cinnamon Roll", "Soft enriched swirl, cinnamon sugar, iced glaze."),
    ],
  },
  {
    slug: "cakes-sweets",
    name: "Cakes & Sweet Treats",
    strap: "Elevenses, afternoon tea and beyond",
    intro: "From a proper Victoria sponge to pistachio baklava – the sweet side of the bakehouse.",
    products: [
      p("Victoria Sponge", "Strawberry jam and vanilla buttercream."),
      p("Carrot Cake Slice", "Walnut, spice and cream-cheese frosting."),
      p("Blueberry Muffin", "Bursting with fruit, crumble top."),
      p("Doughnut", "Glazed or jam-filled, sugared."),
      p("Pistachio Baklava", "Syrup-soaked filo layers.", "Türkiye"),
      p("Scones", "Plain and fruit – clotted cream essential."),
    ],
  },
];

export const glossary: { term: string; def: string }[] = [
  {
    term: "Bloomer",
    def: "A long, crusty British loaf with diagonal slashes across the top, baked free-standing rather than in a tin.",
  },
  {
    term: "Bap",
    def: "A soft, floury bread roll, especially beloved across Scotland and the North of England.",
  },
  {
    term: "Barm Cake",
    def: "A flat, round, soft roll from the North West – named after the yeasty froth once used to leaven it.",
  },
  {
    term: "Börek",
    def: "A family of filled filo pastries from Türkiye and the Balkans, filled with cheese, spinach, potato or meat.",
  },
  { term: "Crumb", def: "The interior texture of a loaf – open and holey, or tight and even." },
  {
    term: "Crust",
    def: "The browned outer layer, formed by the Maillard reaction and caramelisation in the oven.",
  },
  {
    term: "Granary",
    def: "A trademarked style of brown bread made with malted wheat flakes, giving a sweet, nutty flavour.",
  },
  {
    term: "Lamination",
    def: "Folding butter into dough repeatedly to create the many thin layers of croissants and puff pastry.",
  },
  {
    term: "Levain",
    def: "A natural sourdough starter of flour and water, cultivated with wild yeasts and bacteria.",
  },
  { term: "Proving", def: "The final rise of shaped dough before baking. Also called proofing." },
  {
    term: "Sangak",
    def: "A Persian wholewheat flatbread traditionally baked on a bed of hot river pebbles.",
  },
  {
    term: "Scone",
    def: "A lightly sweetened British quick bread, served with clotted cream and jam. Cream first in Devon, jam first in Cornwall.",
  },
  {
    term: "Tandoor",
    def: "A cylindrical clay oven used for naan, taftoon and kulcha, reaching over 400°C.",
  },
  {
    term: "Vienna Loaf",
    def: "A crisp, pale-crumbed loaf baked with steam, the style that gave us the bread roll.",
  },
  {
    term: "Tin Loaf",
    def: "Bread baked in a rectangular tin, producing the uniform shape ideal for slicing.",
  },
  {
    term: "Viennoiserie",
    def: "Yeast-leavened, enriched pastries such as croissants and brioche – halfway between bread and pastry.",
  },
  {
    term: "Autolyse",
    def: "A rest of flour and water alone before kneading, so the dough relaxes and needs less work.",
  },
  {
    term: "Banneton",
    def: "A wicker or cane proving basket that holds a loose dough’s shape and leaves its spiral flour mark.",
  },
  {
    term: "Couch",
    def: "A floured canvas tray on which shaped loaves rest side by side, supported by the folds of cloth.",
  },
  {
    term: "Enriched Dough",
    def: "Dough with butter, milk, sugar or eggs added – brioche, buns and Chelsea buns all start here.",
  },
  {
    term: "Fermentation",
    def: "Yeast and bacteria eating flour sugars and producing gas and flavour. Slow, cool fermentation tastes best.",
  },
  {
    term: "Hydration",
    def: "How much water a dough holds against its flour, as a percentage. High hydration means an open, holey crumb.",
  },
  {
    term: "Lame",
    def: "A curved blade on a handle, used to slash a loaf’s skin so it opens where you want it to.",
  },
  {
    term: "Maillard Reaction",
    def: "The browning of crust and crumb that gives baked bread its toasty flavour and deep colour.",
  },
  {
    term: "Nigella Seeds",
    def: "Matador-black seeds with a peppery bite, scattered over Turkish pide and many world breads.",
  },
  {
    term: "Poolish",
    def: "A wet preferment of flour, water and a pinch of yeast, left overnight for flavour and keeping.",
  },
  {
    term: "Preferment",
    def: "A portion of dough made a day ahead and built into the final mix – levain, poolish or biga.",
  },
  {
    term: "Scoring",
    def: "Cutting the skin of a loaf before baking so it expands in a controlled, handsome way.",
  },
  {
    term: "Stonebaked",
    def: "Baked directly on a hot stone deck, as in a traditional oven – crisper crust, more even bake.",
  },
  {
    term: "Tandoor",
    def: "A cylindrical clay oven used for naan, taftoon and kulcha, reaching over 400°C.",
  },
  {
    term: "Wholemeal",
    def: "Flour milled from the whole wheat grain, bran and germ included, for a heartier loaf.",
  },
];

export const allProducts = categories.flatMap((c) =>
  c.products.map((pr) => ({ ...pr, category: c })),
);
