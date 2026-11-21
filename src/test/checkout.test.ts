import { describe, expect, it } from "vitest";
import {
  buildSession,
  encodeForm,
  readConfig,
  validateCustomer,
  validateLines,
} from "@/lib/stripe-checkout";
import { productPrices } from "@/lib/pricing";

const cust = {
  name: "A Baker",
  business: "Test Café",
  email: "a@b.co.uk",
  phone: "",
  postcode: "E10 7QZ",
  deliveryDate: "2026-11-20",
  notes: "",
};

describe("checkout", () => {
  it("prices lines from the catalogue, never from the browser", () => {
    const slug = Object.keys(productPrices)[0]!;
    const p = productPrices[slug]!;
    const v = validateLines([{ slug, cases: 3, unitAmount: 1 }]);
    expect(v.ok).toBe(true);
    if (v.ok) expect(v.subtotalPence).toBe(p.wholesalePence * p.caseSize * 3);
  });
  it("rejects unknown products, bad quantities and empty baskets", () => {
    expect(validateLines([]).ok).toBe(false);
    expect(validateLines([{ slug: "nope", cases: 1 }]).ok).toBe(false);
    expect(validateLines([{ slug: Object.keys(productPrices)[0], cases: 0 }]).ok).toBe(false);
    expect(validateLines([{ slug: Object.keys(productPrices)[0], cases: 1.5 }]).ok).toBe(false);
  });
  it("validates customer details", () => {
    expect(validateCustomer(cust)).toBeNull();
    expect(validateCustomer({ ...cust, email: "x" })).toMatch(/email/);
    expect(validateCustomer({ ...cust, postcode: "12345" })).toMatch(/postcode/);
  });
  it("applies only commercial settings that are set", () => {
    expect(readConfig({})).toEqual({
      minOrderPence: 0,
      deliveryChargePence: 0,
      automaticTax: false,
    });
    expect(
      readConfig({
        MIN_ORDER_PENCE: "5000",
        DELIVERY_CHARGE_PENCE: "750",
        STRIPE_AUTOMATIC_TAX: "true",
      }),
    ).toEqual({ minOrderPence: 5000, deliveryChargePence: 750, automaticTax: true });
  });
  it("builds a Stripe session in pounds sterling", () => {
    const slug = Object.keys(productPrices)[0]!;
    const v = validateLines([{ slug, cases: 2 }]);
    if (!v.ok) throw new Error("invalid");
    const body = encodeForm(buildSession(v.lines, cust, readConfig({}), "https://x.test")).join(
      "&",
    );
    expect(body).toContain("line_items%5B0%5D%5Bprice_data%5D%5Bcurrency%5D=gbp");
    expect(body).toContain("line_items%5B0%5D%5Bquantity%5D=2");
    expect(body).not.toContain("shipping_options");
  });
});
