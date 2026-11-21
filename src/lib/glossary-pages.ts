import { glossary } from "@/lib/catalogue";
import type { GlossaryRich } from "@/lib/glossary/types";
import { content1 } from "@/lib/glossary/content-1";
import { content2 } from "@/lib/glossary/content-2";
import { content3 } from "@/lib/glossary/content-3";

export const richContent: Record<string, GlossaryRich> = { ...content1, ...content2, ...content3 };

export type GlossaryGroup =
  | "Breads & Styles"
  | "Dough & Fermentation"
  | "Technique & Science"
  | "Tools & Ovens"
  | "Ingredients";
export type GlossaryEntry = {
  slug: string;
  term: string;
  group: GlossaryGroup;
  def: string;
  body: string[];
  facts: [string, string][];
  at: string;
  related: string[];
  products: string[];
  image: string; // image key: product slug or editorial key
  rich: GlossaryRich;
};

export const termSlug = (t: string) =>
  t
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type Seed = {
  group: GlossaryGroup;
  body: string[];
  facts: [string, string][];
  at: string;
  related: string[];
  products: string[];
  image: string;
};

const seeds: Record<string, Seed> = {
  bloomer: {
    group: "Breads & Styles",
    image: "farmhouse-bloomer",
    related: ["scoring", "crust", "crumb", "tin-loaf"],
    products: ["farmhouse-bloomer", "granary-tin"],
    body: [
      "The bloomer is the British bakery’s workhorse: a long, oval, free-standing loaf with a thick, crackling crust and a soft, chewy crumb. It is baked directly on the oven floor or a tray, not in a tin, so it spreads and rises freely.",
      "Its signature diagonal slashes are not just decoration. Cutting the skin lets steam escape in a controlled way so the loaf opens along the cuts instead of splitting at random.",
    ],
    facts: [
      ["Origin", "Britain"],
      ["Shape", "Long oval, free-standing"],
      ["Signature", "Diagonal slashes across the top"],
      ["Best for", "Sandwiches, toast, soup"],
    ],
    at: "Our Farmhouse Bloomer is scored by hand, proved slowly and baked with steam for a deep golden crust.",
  },
  bap: {
    group: "Breads & Styles",
    image: "bap-barm-cake",
    related: ["barm-cake", "enriched-dough", "crumb"],
    products: ["bap-barm-cake", "sesame-burger-bun"],
    body: [
      "A bap is a soft, floury bread roll, dusted with flour before baking so the top stays pale and tender. It is the everyday roll of Scotland and the North of England, eaten for breakfast with bacon, egg or sausage.",
      "Names for the humble roll vary by region, from bap and barm to cob and bun. What they share is a soft crust and a light, absorbent crumb.",
    ],
    facts: [
      ["Origin", "Scotland & Northern England"],
      ["Texture", "Soft crust, light crumb"],
      ["Finish", "Dusted with flour"],
      ["Best for", "Breakfast rolls, fillings"],
    ],
    at: "Our Bap & Barm Cake is baked in trade-ready sizes for cafés, caterers and breakfast counters.",
  },
  "barm-cake": {
    group: "Breads & Styles",
    image: "bap-barm-cake",
    related: ["bap", "fermentation", "enriched-dough"],
    products: ["bap-barm-cake"],
    body: [
      "The barm cake is a flat, round, soft roll from Lancashire and Greater Manchester. 'Barm' is the old word for the yeasty froth skimmed from fermenting ale, once used to raise the dough.",
      "It is a lunchtime classic, split and filled with anything from chip butty to bacon and black pudding.",
    ],
    facts: [
      ["Origin", "North West England"],
      ["Name from", "Barm, brewer’s yeast froth"],
      ["Shape", "Flat, round, soft"],
      ["Best for", "Butties and hot fillings"],
    ],
    at: "Baked soft and consistent in size so every filling sits neatly.",
  },
  borek: {
    group: "Breads & Styles",
    image: "turkish-pide",
    related: ["nigella-seeds", "lamination", "stonebaked"],
    products: ["turkish-pide", "lavash-bread"],
    body: [
      "Börek is a family of savoury pastries made with thin filo or yufka dough, layered or rolled around cheese, spinach, potato or spiced meat. It is eaten across Türkiye, the Balkans and beyond, at breakfast and as a snack.",
      "Every region has its own shape: coils, triangles, long rolls or great round trays cut into squares.",
    ],
    facts: [
      ["Origin", "Türkiye & the Balkans"],
      ["Dough", "Filo or yufka"],
      ["Fillings", "Cheese, spinach, potato, meat"],
      ["Often topped", "Sesame or nigella seeds"],
    ],
    at: "Our Turkish range pairs naturally with börek on a meze or café menu.",
  },
  granary: {
    group: "Breads & Styles",
    image: "granary-tin",
    related: ["wholemeal", "tin-loaf", "crumb"],
    products: ["granary-tin", "wholemeal-loaf"],
    body: [
      "Granary is a style of brown bread made with malted wheat flakes, which give a sweet, nutty flavour and a pleasing bite. The name is a trademark, so many bakeries call the style 'malted grain'.",
      "The malted flakes are soaked and baked into the dough, which is why the crumb has that characteristic speckle.",
    ],
    facts: [
      ["Key ingredient", "Malted wheat flakes"],
      ["Flavour", "Sweet, nutty, toasty"],
      ["Colour", "Warm brown, speckled"],
      ["Best for", "Toast, cheese, ploughman’s"],
    ],
    at: "Our Granary Tin is made with malted grains for a sweet, toasty depth.",
  },
  sangak: {
    group: "Breads & Styles",
    image: "sangak-bread",
    related: ["stonebaked", "wholemeal", "tandoor"],
    products: ["sangak-bread", "barbari-bread"],
    body: [
      "Sangak is a Persian wholewheat flatbread, traditionally baked on a bed of hot river pebbles that leave small dimples in the surface. It is long, thin and slightly chewy with a toasty flavour.",
      "Eaten fresh from the oven with cheese, herbs and tea, it is one of the great breads of Iran.",
    ],
    facts: [
      ["Origin", "Iran"],
      ["Flour", "Wholewheat"],
      ["Baked on", "Hot river pebbles"],
      ["Texture", "Thin, chewy, dimpled"],
    ],
    at: "Baked on stone for the kebab houses and restaurants we supply across London.",
  },
  scone: {
    group: "Breads & Styles",
    image: "scones",
    related: ["enriched-dough", "crumb"],
    products: ["scones"],
    body: [
      "A scone is a lightly sweetened British quick bread, raised with baking powder rather than yeast. Served warm with clotted cream and jam, it is the centrepiece of afternoon tea.",
      "The great debate is the order: cream first in Devon, jam first in Cornwall. We never take sides.",
    ],
    facts: [
      ["Origin", "Britain"],
      ["Raising agent", "Baking powder"],
      ["Served with", "Clotted cream and jam"],
      ["Best for", "Afternoon tea, cafés"],
    ],
    at: "Our plain and fruit scones are baked for tea rooms, hotels and cafés.",
  },
  "vienna-loaf": {
    group: "Breads & Styles",
    image: "french-baguette",
    related: ["viennoiserie", "enriched-dough", "crust"],
    products: ["french-baguette", "white-sliced-loaf"],
    body: [
      "The Vienna loaf is a crisp, pale-crumbed bread baked with steam. In the nineteenth century, Viennese bakers popularised steam ovens, and the thin glossy crust that came with them influenced bread across Europe.",
      "It is lightly enriched with milk and a little sugar or fat, which gives a softer, finer crumb than a plain French loaf.",
    ],
    facts: [
      ["Origin", "Vienna, Austria"],
      ["Method", "Steam-injected baking"],
      ["Crumb", "Fine, pale, soft"],
      ["Crust", "Thin and glossy"],
    ],
    at: "Our steam-baked loaves and baguettes follow the same crisp, glossy tradition.",
  },
  "tin-loaf": {
    group: "Breads & Styles",
    image: "white-sliced-loaf",
    related: ["bloomer", "crumb", "proving"],
    products: ["white-sliced-loaf", "wholemeal-loaf"],
    body: [
      "A tin loaf is simply bread baked in a rectangular tin. The tin supports the dough on every side, producing a uniform shape, a softer crust and an even crumb ideal for slicing.",
      "It is the shape behind the sandwich, the toastie and the Sunday round of toast.",
    ],
    facts: [
      ["Shape", "Rectangular, uniform"],
      ["Crust", "Soft and thin"],
      ["Crumb", "Even and tender"],
      ["Best for", "Sandwiches, toast"],
    ],
    at: "Our White Sliced and Wholemeal loaves are proved slowly for a soft crumb and honest crust.",
  },
  viennoiserie: {
    group: "Breads & Styles",
    image: "butter-croissant",
    related: ["lamination", "enriched-dough", "vienna-loaf"],
    products: ["butter-croissant", "pain-au-chocolat", "danish-pastry"],
    body: [
      "Viennoiserie describes yeast-leavened, enriched pastries such as croissants, pains au chocolat, brioche and Danish. They sit halfway between bread and pastry: yeast-raised like bread, rich in butter and sugar like pastry.",
      "Many are laminated, with butter folded through the dough in layers, while others, like brioche, are simply enriched.",
    ],
    facts: [
      ["Origin", "France, inspired by Vienna"],
      ["Raised with", "Yeast"],
      ["Enriched with", "Butter, milk, eggs, sugar"],
      ["Examples", "Croissant, brioche, Danish"],
    ],
    at: "Our viennoiserie is laminated with proper butter and delivered ready to bake or freshly baked.",
  },
  autolyse: {
    group: "Dough & Fermentation",
    image: "flour-weighing",
    related: ["hydration", "fermentation", "levain"],
    products: ["sourdough-boule", "ciabatta"],
    body: [
      "Autolyse is a rest of flour and water alone, before salt and yeast or starter go in. During the rest, enzymes in the flour begin to work and gluten forms by itself, so the dough relaxes and needs less kneading.",
      "The result is a dough that is easier to shape, with a more open crumb and a deeper flavour.",
    ],
    facts: [
      ["Mix", "Flour and water only"],
      ["Typical rest", "20 to 60 minutes"],
      ["Effect", "Stronger, more extensible dough"],
      ["Used in", "Sourdough, ciabatta, baguettes"],
    ],
    at: "We use an autolyse on many of our hand-shaped breads to build structure without overworking the dough.",
  },
  "enriched-dough": {
    group: "Dough & Fermentation",
    image: "brioche-burger-bun",
    related: ["viennoiserie", "lamination", "scone"],
    products: ["brioche-burger-bun", "cinnamon-roll"],
    body: [
      "Enriched dough has butter, milk, sugar or eggs added to a basic flour, water and yeast mix. The fat tenderises the crumb, and the sugar and milk help the crust colour beautifully.",
      "Brioche, hamburger buns, cinnamon rolls and Chelsea buns all start here.",
    ],
    facts: [
      ["Added", "Butter, milk, sugar, eggs"],
      ["Crumb", "Soft, rich, tender"],
      ["Crust", "Deep golden, glossy"],
      ["Examples", "Brioche, buns, cinnamon rolls"],
    ],
    at: "Our Brioche Burger Bun and Cinnamon Roll are made from butter-enriched dough.",
  },
  fermentation: {
    group: "Dough & Fermentation",
    image: "levain-jar",
    related: ["proving", "levain", "preferment", "hydration"],
    products: ["sourdough-boule", "focaccia"],
    body: [
      "Fermentation is what happens when yeast and bacteria feed on the sugars in flour, producing gas that makes dough rise and compounds that build flavour. It is the heart of bread-making.",
      "Slow, cool fermentation tastes best. Time lets flavour develop, improves the crumb and helps the bread keep fresher for longer.",
    ],
    facts: [
      ["Driven by", "Yeast and bacteria"],
      ["Produces", "Gas, acids, flavour"],
      ["Faster when", "Warm"],
      ["Better flavour when", "Slow and cool"],
    ],
    at: "Many of our doughs ferment slowly overnight before they reach the oven.",
  },
  hydration: {
    group: "Dough & Fermentation",
    image: "flour-sacks",
    related: ["autolyse", "crumb", "preferment"],
    products: ["ciabatta", "focaccia"],
    body: [
      "Hydration is how much water a dough holds compared with its flour, expressed as a percentage. A dough with 700g of water to 1kg of flour is at 70% hydration.",
      "Higher hydration gives a more open, holey crumb and a glossier crust, but the dough is stickier and harder to handle.",
    ],
    facts: [
      ["Measured as", "Water ÷ flour weight"],
      ["Sandwich loaf", "Typically 60 to 65%"],
      ["Ciabatta", "Typically 75% or more"],
      ["Effect", "More water, more open crumb"],
    ],
    at: "Our Ciabatta and Focaccia are high-hydration doughs, handled gently to protect their open crumb.",
  },
  levain: {
    group: "Dough & Fermentation",
    image: "levain-jar",
    related: ["preferment", "fermentation", "poolish"],
    products: ["sourdough-boule"],
    body: [
      "Levain is a natural sourdough starter: flour and water left to ferment, cultivated with wild yeasts and lactic bacteria. Fed regularly, it stays alive for years and raises bread without commercial yeast.",
      "It brings a gentle tang, a chewy crumb and a crust that blisters in the oven.",
    ],
    facts: [
      ["Made of", "Flour, water, wild microbes"],
      ["Raises", "Sourdough and rye breads"],
      ["Flavour", "Mild tang, complex"],
      ["Needs", "Regular feeding"],
    ],
    at: "Our Sourdough Boule is built on a 48-hour natural levain.",
  },
  poolish: {
    group: "Dough & Fermentation",
    image: "levain-jar",
    related: ["preferment", "levain", "hydration"],
    products: ["french-baguette", "ciabatta"],
    body: [
      "A poolish is a wet preferment of equal weights of flour and water with a pinch of yeast, left to ferment for 8 to 16 hours. The name is said to come from Polish bakers who brought the method to Paris.",
      "It adds flavour, extensibility and keeping quality, and it is classic in baguettes and ciabatta.",
    ],
    facts: [
      ["Mix", "Equal flour and water, little yeast"],
      ["Time", "8 to 16 hours"],
      ["Hydration", "100%"],
      ["Used in", "Baguettes, ciabatta, focaccia"],
    ],
    at: "Our baguettes and ciabatta use a poolish for flavour and a lively crumb.",
  },
  preferment: {
    group: "Dough & Fermentation",
    image: "levain-jar",
    related: ["levain", "poolish", "fermentation"],
    products: ["french-baguette", "sourdough-boule"],
    body: [
      "A preferment is a portion of dough, or a flour, water and yeast mixture, made a day ahead and built into the final mix. It gives yeast a head start and lets flavour develop slowly.",
      "Levain, poolish and biga are all preferments, each with a different texture, flavour and hydration.",
    ],
    facts: [
      ["Types", "Levain, poolish, biga"],
      ["Made", "Hours to a day ahead"],
      ["Benefit", "Flavour and keeping quality"],
      ["Used in", "Artisan loaves and baguettes"],
    ],
    at: "Preferments are part of how we get bakery flavour at trade volumes.",
  },
  proving: {
    group: "Dough & Fermentation",
    image: "dough-shaping",
    related: ["banneton", "fermentation", "couch"],
    products: ["white-sliced-loaf", "butter-croissant"],
    body: [
      "Proving, or proofing, is the final rise of shaped dough before it goes into the oven. The dough relaxes and fills with gas, so it is light and springy when baked.",
      "Under-proved bread is dense, while over-proved bread collapses. The gentle poke test tells a baker when it is ready: the dough should spring back slowly.",
    ],
    facts: [
      ["Stage", "After shaping, before baking"],
      ["Warm prove", "About 24 to 27°C"],
      ["Cold prove", "4 to 8°C, overnight"],
      ["Test", "Slow spring-back when poked"],
    ],
    at: "Our tin loaves and pastries are proved in controlled cabinets for consistent results.",
  },
  lamination: {
    group: "Technique & Science",
    image: "butter-lamination",
    related: ["viennoiserie", "enriched-dough", "borek"],
    products: ["butter-croissant", "pain-au-chocolat", "almond-croissant"],
    body: [
      "Lamination is folding butter into dough repeatedly to build many thin alternating layers. In the oven, the butter melts and its water turns to steam, pushing the layers apart into a flaky, honeycombed pastry.",
      "It is the technique behind croissants, Danish pastry and puff pastry. Temperature control is everything: if the butter gets too warm, the layers merge.",
    ],
    facts: [
      ["Used in", "Croissant, Danish, puff"],
      ["Method", "Fold butter into dough"],
      ["Key", "Cold butter, patient rests"],
      ["Result", "Flaky, layered crumb"],
    ],
    at: "Our pastries are laminated by hand with proper butter, layer after layer.",
  },
  scoring: {
    group: "Technique & Science",
    image: "farmhouse-bloomer",
    related: ["lame", "bloomer", "crust"],
    products: ["farmhouse-bloomer", "sourdough-boule"],
    body: [
      "Scoring means cutting the skin of a loaf just before baking so it expands in a controlled, handsome way. Without a score, steam and gas push through the weakest point and the loaf bursts unpredictably.",
      "A bakery’s scoring pattern is often its signature, from simple diagonal slashes on a bloomer to a single curved ear on a boule.",
    ],
    facts: [
      ["Done with", "A lame or sharp blade"],
      ["Done when", "Just before the oven"],
      ["Purpose", "Control the expansion"],
      ["Depth", "A few millimetres"],
    ],
    at: "Our Farmhouse Bloomer and Sourdough Boule are scored by hand.",
  },
  "maillard-reaction": {
    group: "Technique & Science",
    image: "cooling-rack",
    related: ["crust", "stonebaked", "scoring"],
    products: ["sourdough-boule", "brioche-burger-bun"],
    body: [
      "The Maillard reaction is the browning that happens when amino acids and sugars react under heat, above about 140°C. It creates hundreds of flavour compounds and the deep golden colour of baked bread.",
      "It is distinct from caramelisation, which involves sugars alone. In bread, both work together on the crust.",
    ],
    facts: [
      ["Starts at", "Around 140°C"],
      ["Needs", "Amino acids and sugars"],
      ["Gives", "Toasty flavour, deep colour"],
      ["Helped by", "Milk, sugar and a dry surface"],
    ],
    at: "Milk and sugar in our enriched doughs help the crust brown to a rich, even gold.",
  },
  crumb: {
    group: "Technique & Science",
    image: "ciabatta",
    related: ["hydration", "crust", "tin-loaf"],
    products: ["ciabatta", "white-sliced-loaf"],
    body: [
      "Crumb is the interior texture of a loaf. It can be open and holey, as in ciabatta, or tight and even, as in a sandwich loaf. Neither is better; each suits a different job.",
      "Hydration, shaping, fermentation and handling all shape the crumb. A glossy, translucent crumb usually signals a well-fermented, high-hydration dough.",
    ],
    facts: [
      ["Open crumb", "Ciabatta, sourdough"],
      ["Tight crumb", "Sandwich loaf, brioche"],
      ["Shaped by", "Hydration and handling"],
      ["Judged by", "Look, feel, and chew"],
    ],
    at: "We bake for the crumb each customer needs: open for the table, even for the sandwich.",
  },
  crust: {
    group: "Technique & Science",
    image: "french-baguette",
    related: ["maillard-reaction", "stonebaked", "scoring"],
    products: ["french-baguette", "sourdough-boule"],
    body: [
      "The crust is the browned outer layer of bread, formed in the oven by the Maillard reaction and caramelisation. It can be thin and crackling, thick and chewy, or soft and golden.",
      "Steam at the start of the bake keeps the surface supple so the loaf can expand, then sets into a glossy, crisp shell.",
    ],
    facts: [
      ["Formed by", "Maillard reaction, caramelisation"],
      ["Crisper with", "Steam and a hot stone"],
      ["Softer with", "Tins and enriched doughs"],
      ["Test", "Hear it crackle as it cools"],
    ],
    at: "Our baguettes and boules are steam-baked for a crisp, blistered crust.",
  },
  banneton: {
    group: "Tools & Ovens",
    image: "sourdough-boule",
    related: ["proving", "couch", "scoring"],
    products: ["sourdough-boule"],
    body: [
      "A banneton is a wicker or cane basket used for the final prove. It holds a wet dough’s shape as it rises and wicks moisture from the surface, which makes the skin easier to score.",
      "Dusted with flour, it leaves the loaf with a pattern of pale spiral rings.",
    ],
    facts: [
      ["Made of", "Cane, wicker or wood pulp"],
      ["Also called", "Brotform, proving basket"],
      ["Used for", "Sourdough and wet doughs"],
      ["Leaves", "Spiral flour rings"],
    ],
    at: "Our sourdough is proved in bannetons before baking.",
  },
  couch: {
    group: "Tools & Ovens",
    image: "french-baguette",
    related: ["banneton", "proving", "lame"],
    products: ["french-baguette"],
    body: [
      "A couche is a heavy, floured linen cloth on which shaped loaves rest side by side. Pleats in the cloth keep long loaves like baguettes separate and supported as they prove.",
      "The linen absorbs a little surface moisture, leaving a dry skin that is easy to score and bakes to a crisp crust.",
    ],
    facts: [
      ["Made of", "Heavy floured linen"],
      ["Used for", "Baguettes, long loaves"],
      ["Works by", "Pleats support each loaf"],
      ["Also helps", "Dries the skin slightly"],
    ],
    at: "Our baguettes are proved on couches for a straight shape and a crisp crust.",
  },
  lame: {
    group: "Tools & Ovens",
    image: "bakers-tools",
    related: ["scoring", "bloomer", "banneton"],
    products: ["farmhouse-bloomer", "sourdough-boule"],
    body: [
      "A lame is a baker’s blade: a razor, usually curved, mounted on a handle. It is used to slash a loaf’s skin so it opens exactly where the baker wants.",
      "A sharp lame and a confident, quick stroke make a clean cut that opens into a neat ear.",
    ],
    facts: [
      ["Pronounced", "Lahm"],
      ["Form", "Curved razor on a handle"],
      ["Used for", "Scoring loaves"],
      ["Technique", "Quick, shallow, angled cut"],
    ],
    at: "Every Farmhouse Bloomer and boule is scored by hand with a lame.",
  },
  stonebaked: {
    group: "Tools & Ovens",
    image: "sangak-bread",
    related: ["crust", "tandoor", "maillard-reaction"],
    products: ["turkish-pide", "sangak-bread", "focaccia"],
    body: [
      "Stonebaked bread is baked directly on a hot stone deck, as in a traditional oven. The stone stores a great deal of heat and delivers it straight into the base of the loaf, for a crisper crust and a more even bake.",
      "Stone decks run at around 230 to 260°C and suit blooms, baguettes and many world breads.",
    ],
    facts: [
      ["Working heat", "About 230 to 260°C"],
      ["Gives", "Crisp base, even bake"],
      ["Suits", "Baguettes, pide, focaccia"],
      ["Contrast", "Tin-baked, softer crust"],
    ],
    at: "Our continental and world breads are baked directly on stone.",
  },
  tandoor: {
    group: "Tools & Ovens",
    image: "naan-bread",
    related: ["stonebaked", "sangak", "crust"],
    products: ["naan-bread", "taftoon-bread", "kulcha-bread"],
    body: [
      "A tandoor is a cylindrical clay oven, heated by charcoal, wood or gas to well over 400°C. Dough is slapped onto the inner wall, where it bakes in minutes and puffs, blisters and chars.",
      "It is the original oven for naan, taftoon and kulcha, and its intense heat gives a smoky flavour that is hard to copy.",
    ],
    facts: [
      ["Made of", "Clay"],
      ["Working heat", "Over 400°C"],
      ["Bake time", "Minutes"],
      ["Used for", "Naan, taftoon, kulcha"],
    ],
    at: "Our tandoor-style breads are baked fresh for kebab houses, grills and restaurants.",
  },
  "nigella-seeds": {
    group: "Ingredients",
    image: "turkish-pide",
    related: ["borek", "stonebaked"],
    products: ["turkish-pide", "naan-bread", "kulcha-bread"],
    body: [
      "Nigella seeds are small, matte-black seeds with a peppery, slightly oniony bite and a hint of oregano. They are scattered over Turkish pide, Indian naan and many world breads before baking.",
      "They are sometimes called black cumin or kalonji, though they are not related to cumin.",
    ],
    facts: [
      ["Also called", "Kalonji, black cumin"],
      ["Flavour", "Peppery, herbal, slightly bitter"],
      ["Used on", "Pide, naan, börek"],
      ["Best added", "Just before baking"],
    ],
    at: "Our Turkish Pide is egg-washed and scattered with nigella seeds.",
  },
  wholemeal: {
    group: "Ingredients",
    image: "wholemeal-loaf",
    related: ["granary", "sangak", "tin-loaf"],
    products: ["wholemeal-loaf", "sangak-bread"],
    body: [
      "Wholemeal flour is milled from the whole wheat grain, with the bran and germ included. It brings more fibre, more flavour and a heartier, denser loaf than white flour.",
      "Stoneground wholemeal keeps more of the grain’s character, with a nutty, slightly sweet taste.",
    ],
    facts: [
      ["Includes", "Bran, germ and endosperm"],
      ["Flavour", "Nutty, earthy"],
      ["Crumb", "Denser, heartier"],
      ["Absorbs", "More water than white flour"],
    ],
    at: "Our Wholemeal Loaf is made with stoneground British wholemeal flour.",
  },
};

const seen = new Set<string>();
export const glossaryEntries: GlossaryEntry[] = glossary.flatMap((g) => {
  const slug = termSlug(g.term);
  if (seen.has(slug)) return [];
  seen.add(slug);
  const s = seeds[slug];
  if (!s) throw new Error(`Missing glossary page content for ${g.term}`);
  const rich = richContent[slug];
  if (!rich) throw new Error(`Missing rich glossary content for ${g.term}`);
  return [{ slug, term: g.term, def: g.def, ...s, rich }];
});

export const glossaryBySlug = Object.fromEntries(glossaryEntries.map((e) => [e.slug, e])) as Record<
  string,
  GlossaryEntry
>;
export const glossaryGroups: GlossaryGroup[] = [
  "Breads & Styles",
  "Dough & Fermentation",
  "Technique & Science",
  "Tools & Ovens",
  "Ingredients",
];
