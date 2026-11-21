import { describe, expect, it } from "vitest";
import { allProducts } from "@/lib/catalogue";
import { caseTotal, productPrices, pricingStatus } from "@/lib/pricing";
describe("Customer and wholesale price guide", () => {
  it("provides both GBP price estimates for all 37 products", () => {
    expect(Object.keys(productPrices)).toHaveLength(37);
    for (const product of allProducts) {
      const price = productPrices[product.slug];
      expect(price).toBeDefined();
      expect(price?.retailPence).toBeGreaterThan(0);
      expect(price?.wholesalePence).toBeGreaterThan(0);
      expect(price?.retailPence).toBeGreaterThan(price?.wholesalePence ?? Infinity);
    }
  });
  it("keeps unapproved market-informed prices indicative", () =>
    expect(pricingStatus).toBe("indicative"));
  it("calculates cases with integer pence, including multiple cases", () => {
    const price = { retailPence: 285, wholesalePence: 110, caseSize: 24, unit: "pastry" };
    expect(caseTotal(price)).toBe(2640);
    expect(caseTotal(price, 3)).toBe(7920);
  });
  it("rejects zero or fractional case quantities", () => {
    const price = { retailPence: 285, wholesalePence: 110, caseSize: 24, unit: "pastry" };
    expect(() => caseTotal(price, 0)).toThrow();
    expect(() => caseTotal(price, 1.5)).toThrow();
  });
});
