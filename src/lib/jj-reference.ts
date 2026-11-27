// JJ Foodservice (https://www.jjfoodservice.com) price basis.
//
// Rule agreed with the business: Golden Grain trade price = JJ Foodservice price − 10%.
// JJ figure used = JJ's published DELIVERED price, standard 1–9 case tier, per single unit
// (pack price ÷ pieces in the pack). Prices are as published on jjfoodservice.com on
// 27 November 2026 and change often, so re-check before publishing a price list.
//
// "like-for-like" = same kind of product as the nearest JJ line.
// "proxy"         = nearest JJ line that is not the same product (see note).
// Four lines JJ does not list (ciabatta, focaccia, danish, doughnut) use another published UK
// wholesale price instead, shown in `source`; the same 10% reduction is applied.
// Products with no entry here have NO UK wholesale benchmark found; they keep their old,
// unverified trade price (see pricing.ts and PRICE_AUDIT.md).

export const JJ_DISCOUNT = 0.1;
export const jjPricesChecked = "27 November 2026";

export type JJReference = {
  code: string; // JJ product code
  name: string; // JJ product name
  packPricePence: number; // JJ delivered price for one pack, 1–9 tier, in pence
  packQty: number; // pieces in that pack
  basis: "like-for-like" | "proxy";
  source?: "JJ Foodservice" | "Hunts Food Group" | "A to Z Catering"; // default JJ Foodservice
  note?: string;
};

export const jjReference: Record<string, JJReference> = {
  "white-sliced-loaf": { code: "BRE061", name: "Kingsmill Great Everyday Soft Medium Sliced White 800g", packPricePence: 179, packQty: 1, basis: "like-for-like" },
  "wholemeal-loaf": { code: "BRE063", name: "Kingsmill Tasty Medium Sliced Wholemeal 800g", packPricePence: 189, packQty: 1, basis: "like-for-like" },
  "farmhouse-bloomer": { code: "BRE118", name: "Kara Medium Malted Bloomer (Frozen) 6x800g", packPricePence: 300, packQty: 1, basis: "proxy", note: "JJ shows £3.00 per loaf; frozen, and not stocked at every branch." },
  "granary-tin": { code: "BRE064", name: "Kingsmill Tasty Thick Sliced Wholemeal 800g", packPricePence: 189, packQty: 1, basis: "proxy", note: "JJ has no granary tin loaf; thick-sliced wholemeal used." },
  "sourdough-boule": { code: "BRE139", name: "Bridor Part Baked Sourdough Plain Loaf 14x540g", packPricePence: 2799, packQty: 14, basis: "like-for-like" },
  "french-baguette": { code: "BAK448", name: "La Lorraine Part Baked Baguette 57cm 25x250g", packPricePence: 2099, packQty: 25, basis: "like-for-like" },
  "turkish-simit": { code: "BAK402", name: "Letsdough Istanbul Style Simit 4x100g", packPricePence: 319, packQty: 4, basis: "like-for-like", note: "Standard price, not the temporary online-payment offer." },
  "brioche-burger-bun": { code: "BUN028", name: "Letsdough 4.5\" Gourmet Sliced Brioche Buns 1x48", packPricePence: 2599, packQty: 48, basis: "like-for-like" },
  "sesame-burger-bun": { code: "BUN017", name: "Letsdough 4\" Seeded Burger Buns 1x48", packPricePence: 1349, packQty: 48, basis: "like-for-like" },
  "hot-dog-roll": { code: "BAK440", name: "Americana 8.5\" Brioche Top Sliced Hot Dog Rolls 1x48", packPricePence: 2899, packQty: 48, basis: "proxy", note: "JJ's only hot dog roll is a jumbo brioche." },
  "bap-barm-cake": { code: "BAK081", name: "Letsdough 5\" Sandwich Floured Baps 48x86g", packPricePence: 1579, packQty: 48, basis: "like-for-like" },
  "pitta-shawarma-bread": { code: "BRE026", name: "JJ Large Frozen Pitta Breads 20x6", packPricePence: 1849, packQty: 120, basis: "like-for-like" },
  "naan-bread": { code: "BRE092", name: "Baked Earth Large Folded Naan Bread 24x80g", packPricePence: 1499, packQty: 24, basis: "like-for-like" },
  "lavash-bread": { code: "BRE148", name: "KaterBake 12\" Lebanese Flatbread Khobez 1x100", packPricePence: 2799, packQty: 100, basis: "proxy", note: "Nearest thin flatbread on JJ." },
  "paratha": { code: "BAK506", name: "Humza Paratha Original 20 Pieces 1x1.6kg", packPricePence: 349, packQty: 20, basis: "like-for-like" },
  "butter-croissant": { code: "BAK538", name: "Bridor Fully Baked Fine Butter Croissant 20x60g", packPricePence: 1349, packQty: 20, basis: "like-for-like", note: "JJ croissant is 60g." },
  "pain-au-chocolat": { code: "BAK539", name: "Bridor Fully Baked Fine Butter Pain au Chocolat 20x70g", packPricePence: 1449, packQty: 20, basis: "like-for-like" },
  "pistachio-croissant": { code: "BAK490", name: "Bridor Ready to Bake Fine Butter Pistachio Croissant 50x85g", packPricePence: 3599, packQty: 50, basis: "like-for-like", note: "JJ sells this ready-to-bake, not fully baked." },
  "almond-croissant": { code: "BAK351", name: "Bridor Almond Croissant 60x95g", packPricePence: 4599, packQty: 60, basis: "like-for-like" },
  "victoria-sponge": { code: "DES427", name: "Letscake Carrot Cake 2kg Pre-Sliced 1x16ptn", packPricePence: 2099, packQty: 16, basis: "proxy", note: "JJ has no Victoria sponge; nearest pre-cut classic cake price used." },
  "carrot-cake-slice": { code: "DES427", name: "Letscake Carrot Cake 2kg Pre-Sliced 1x16ptn", packPricePence: 2099, packQty: 16, basis: "like-for-like" },
  "ciabatta": { code: "54944", name: "Planete Pain Oval Ciabatta 40x100g", packPricePence: 2468, packQty: 40, basis: "proxy", source: "Hunts Food Group", note: "JJ lists no ciabatta. Hunts' five ciabatta roll lines range £0.49–£1.03 each; this is the middle one." },
  "focaccia": { code: "78498", name: "Speciality Breads Rosemary Focaccia Roll 40x100g", packPricePence: 4237, packQty: 40, basis: "proxy", source: "Hunts Food Group", note: "100g roll used for a 'portion'." },
  "danish-pastry": { code: "20110", name: "Schulstad Vanilla Creme Crown 48x97g", packPricePence: 2996, packQty: 48, basis: "proxy", source: "Hunts Food Group", note: "Full-size danish; Brakes mini danish is £0.68 each." },
  "doughnut": { code: "AAK012", name: "Sugared Ring Doughnuts 36x45g", packPricePence: 1799, packQty: 36, basis: "like-for-like", source: "A to Z Catering", note: "Delivered price." },
  "blueberry-muffin": { code: "MUF033", name: "Kara Filled Blueberry Tulip Muffins 24x100g", packPricePence: 2399, packQty: 24, basis: "like-for-like" },
};

/** JJ delivered price per single unit, in pence (unrounded). */
export const jjUnitPence = (ref: JJReference) => ref.packPricePence / ref.packQty;

/** Golden Grain trade price per unit: JJ minus the agreed discount, whole pence. */
export const tradePriceFromJJ = (ref: JJReference) =>
  Math.round(jjUnitPence(ref) * (1 - JJ_DISCOUNT));
