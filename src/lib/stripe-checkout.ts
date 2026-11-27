import { productPrices } from "@/lib/pricing";
import { allProducts } from "@/lib/catalogue";

export type CheckoutLine = { slug: string; cases: number };
export type CheckoutCustomer = {
  name: string;
  business: string;
  email: string;
  phone: string;
  postcode: string;
  deliveryDate: string;
  notes: string;
};
export type CheckoutConfig = {
  minOrderPence: number;
  deliveryChargePence: number;
  automaticTax: boolean;
};

/** Reads commercial settings from the environment. Zero means "not set"; nothing is invented. */
export function readConfig(env: Record<string, string | undefined>): CheckoutConfig {
  const n = (v?: string) => {
    const x = Number.parseInt(v ?? "", 10);
    return Number.isFinite(x) && x > 0 ? x : 0;
  };
  return {
    minOrderPence: n(env["MIN_ORDER_PENCE"]),
    deliveryChargePence: n(env["DELIVERY_CHARGE_PENCE"]),
    automaticTax: env["STRIPE_AUTOMATIC_TAX"] === "true",
  };
}

export type Validated =
  | {
      ok: true;
      lines: {
        slug: string;
        name: string;
        cases: number;
        unitAmount: number;
        description: string;
      }[];
      subtotalPence: number;
    }
  | { ok: false; error: string };

/** Prices are always taken from the catalogue on the server, never from the browser. */
export function validateLines(input: unknown): Validated {
  if (!Array.isArray(input) || input.length === 0 || input.length > 60)
    return { ok: false, error: "Your basket is empty." };
  const seen = new Set<string>();
  const lines: Extract<Validated, { ok: true }>["lines"] = [];
  for (const raw of input as CheckoutLine[]) {
    const price = raw && productPrices[raw.slug];
    const product = raw && allProducts.find((p) => p.slug === raw.slug);
    if (!price || !product || seen.has(raw.slug))
      return { ok: false, error: "A product in your basket is no longer available." };
    if (!Number.isInteger(raw.cases) || raw.cases < 1 || raw.cases > 999)
      return { ok: false, error: "Check the number of cases." };
    seen.add(raw.slug);
    lines.push({
      slug: raw.slug,
      name: product.name,
      cases: raw.cases,
      unitAmount: price.wholesalePence * price.caseSize,
      description: `Case of ${price.caseSize} (${price.unit})`,
    });
  }
  return { ok: true, lines, subtotalPence: lines.reduce((n, l) => n + l.unitAmount * l.cases, 0) };
}

export function validateCustomer(c: Partial<CheckoutCustomer> | undefined): string | null {
  if (!c) return "Enter your details.";
  if (!c.name?.trim()) return "Enter your name.";
  if (!c.business?.trim()) return "Enter your business name.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(c.email?.trim() ?? ""))
    return "Enter a valid email address.";
  if (!/^[A-Z]{1,2}\d[A-Z\d]? ?\d[A-Z]{2}$/i.test(c.postcode?.trim() ?? ""))
    return "Enter a valid UK postcode.";
  if (!/^\d{4}-\d{2}-\d{2}$/.test(c.deliveryDate ?? "")) return "Choose a delivery date.";
  return null;
}

/** Stripe’s API takes form-encoded bodies with bracketed keys. */
export function encodeForm(obj: Record<string, unknown>, prefix = ""): string[] {
  return Object.entries(obj).flatMap(([k, v]) => {
    const key = prefix ? `${prefix}[${k}]` : k;
    if (v === undefined || v === null) return [];
    return typeof v === "object"
      ? encodeForm(v as Record<string, unknown>, key)
      : [`${encodeURIComponent(key)}=${encodeURIComponent(String(v))}`];
  });
}

export function buildSession(
  lines: Extract<Validated, { ok: true }>["lines"],
  c: CheckoutCustomer,
  cfg: CheckoutConfig,
  origin: string,
) {
  const line_items = Object.fromEntries(
    lines.map((l, i) => [
      i,
      {
        quantity: l.cases,
        price_data: {
          currency: "gbp",
          unit_amount: l.unitAmount,
          ...(cfg.automaticTax ? { tax_behavior: "exclusive" } : {}),
          product_data: { name: l.name, description: l.description },
        },
      },
    ]),
  );
  return {
    mode: "payment",
    success_url: `${origin}/order/success?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${origin}/basket`,
    customer_email: c.email.trim(),
    billing_address_collection: "required",
    phone_number_collection: { enabled: "true" },
    shipping_address_collection: { allowed_countries: { 0: "GB" } },
    line_items,
    ...(cfg.automaticTax ? { automatic_tax: { enabled: "true" } } : {}),
    ...(cfg.deliveryChargePence
      ? {
          shipping_options: {
            0: {
              shipping_rate_data: {
                type: "fixed_amount",
                display_name: "Delivery",
                fixed_amount: { amount: cfg.deliveryChargePence, currency: "gbp" },
              },
            },
          },
        }
      : {}),
    metadata: {
      business: c.business.trim().slice(0, 200),
      contact: c.name.trim().slice(0, 200),
      phone: (c.phone ?? "").slice(0, 40),
      postcode: c.postcode.trim().toUpperCase(),
      delivery_date: c.deliveryDate,
      notes: (c.notes ?? "").slice(0, 450),
    },
    payment_intent_data: {
      description: `Golden Grain trade order – ${c.business.trim().slice(0, 100)}`,
      receipt_email: c.email.trim(),
    },
  };
}
