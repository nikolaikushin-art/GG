import { allProducts } from "@/lib/catalogue";
import { jjPricesChecked, jjReference, tradePriceFromJJ } from "@/lib/jj-reference";

export type ProductPrice = {
  retailPence: number;
  wholesalePence: number;
  caseSize: number;
  unit: string;
};
// Trade (wholesale) prices are published UK wholesale delivered price (mainly JJ Foodservice) minus 10%
// (see jj-reference.ts). Lines with no JJ equivalent keep their earlier unverified
// estimate. Guide (retail) prices are unchanged. Still not approved Golden Grain selling
// prices: VAT and delivery depend on the final product/service and must be confirmed in a
// quotation.
export const pricingStatus = "indicative" as const;
export const pricingReviewed = jjPricesChecked;
const rows: [string, number, number, number, string][] = [
  ["white-sliced-loaf", 250, 145, 8, "loaf"],
  ["wholemeal-loaf", 285, 165, 8, "loaf"],
  ["farmhouse-bloomer", 350, 205, 6, "loaf"],
  ["granary-tin", 325, 190, 8, "loaf"],
  ["sourdough-boule", 495, 295, 6, "loaf"],
  ["french-baguette", 275, 95, 20, "baguette"],
  ["ciabatta", 195, 75, 20, "bread"],
  ["focaccia", 350, 165, 12, "portion"],
  ["turkish-simit", 200, 80, 24, "ring"],
  ["brioche-burger-bun", 95, 42, 48, "bun"],
  ["sesame-burger-bun", 65, 25, 48, "bun"],
  ["hot-dog-roll", 65, 25, 48, "roll"],
  ["bap-barm-cake", 65, 25, 48, "roll"],
  ["pitta-shawarma-bread", 65, 22, 60, "bread"],
  ["naan-bread", 150, 55, 30, "bread"],
  ["sangak-bread", 350, 175, 15, "bread"],
  ["barbari-bread", 250, 125, 20, "bread"],
  ["taftoon-bread", 100, 38, 40, "bread"],
  ["lavash-bread", 85, 30, 50, "bread"],
  ["turkish-pide", 275, 135, 20, "bread"],
  ["afghan-roghani", 250, 120, 20, "bread"],
  ["paratha", 150, 48, 40, "bread"],
  ["khameeri-bread", 225, 105, 20, "bread"],
  ["kulcha-bread", 175, 65, 30, "bread"],
  ["nan-e-tiri", 95, 32, 40, "bread"],
  ["butter-croissant", 285, 110, 24, "pastry"],
  ["pain-au-chocolat", 315, 125, 24, "pastry"],
  ["pistachio-croissant", 450, 225, 12, "pastry"],
  ["almond-croissant", 395, 185, 12, "pastry"],
  ["danish-pastry", 325, 135, 24, "pastry"],
  ["cinnamon-roll", 350, 150, 16, "bun"],
  ["victoria-sponge", 425, 195, 12, "slice"],
  ["carrot-cake-slice", 425, 195, 12, "slice"],
  ["blueberry-muffin", 295, 145, 24, "muffin"],
  ["doughnut", 225, 85, 24, "doughnut"],
  ["pistachio-baklava", 250, 110, 24, "piece"],
  ["scones", 195, 65, 24, "scone"],
];
export const productPrices: Record<string, ProductPrice> = Object.fromEntries(
  rows.map(([slug, retailPence, fallbackWholesalePence, caseSize, unit]) => {
    const jj = jjReference[slug];
    const wholesalePence = jj ? tradePriceFromJJ(jj) : fallbackWholesalePence;
    return [slug, { retailPence, wholesalePence, caseSize, unit }];
  }),
);
export const formatGBP = (pence: number) =>
  new Intl.NumberFormat("en-GB", { style: "currency", currency: "GBP" }).format(pence / 100);
export const caseTotal = (price: ProductPrice, cases = 1) => {
  if (!Number.isInteger(cases) || cases < 1) throw new Error("Choose at least one whole case.");
  return price.wholesalePence * price.caseSize * cases;
};
export const pricedProducts = allProducts.map((product) => ({
  ...product,
  price: productPrices[product.slug],
}));
export const marketReferences = [
  {
    name: "JJ Foodservice – bakery & trade packs",
    url: "https://www.jjfoodservice.com/category/england/Bakery/",
    note: "Trade prices are set at published UK wholesale price (JJ Foodservice, else Hunts Food Group / A to Z Catering) minus 10% (see src/lib/jj-reference.ts). Frozen lines and volume offers differ from fresh artisan supply.",
  },
  {
    name: "Brakes – bakery price benchmarks",
    url: "https://www.brake.co.uk/bakery",
    note: "Public trade prices and pack sizes, including rolls, baguettes and muffins.",
  },
  {
    name: "GAIL’s – retail bakery comparison",
    url: "https://bestmarketsale.com/restaurants/gail-s-bakery-parsons-green/",
    note: "Third-party delivery-menu comparison dated 6 October 2026; delivery pricing may exceed shop prices.",
  },
];
