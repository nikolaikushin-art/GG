import { createFileRoute } from "@tanstack/react-router";
import {
  buildSession,
  encodeForm,
  readConfig,
  validateCustomer,
  validateLines,
  type CheckoutCustomer,
} from "@/lib/stripe-checkout";

const json = (body: unknown, status = 200) =>
  new Response(JSON.stringify(body), {
    status,
    headers: { "content-type": "application/json", "cache-control": "no-store" },
  });

export const Route = createFileRoute("/api/checkout")({
  server: {
    handlers: {
      // Tells the basket what is switched on. Never exposes the secret key.
      GET: async () => {
        const key = process.env["STRIPE_SECRET_KEY"];
        return json({
          enabled: Boolean(key),
          testMode: Boolean(key?.startsWith("sk_test_")),
          ...readConfig(process.env),
        });
      },
      POST: async ({ request }) => {
        const key = process.env["STRIPE_SECRET_KEY"];
        if (!key)
          return json(
            {
              error:
                "Card payment is not switched on yet. Please request a written quotation instead.",
            },
            503,
          );
        let body: { lines?: unknown; customer?: Partial<CheckoutCustomer> };
        try {
          body = await request.json();
        } catch {
          return json({ error: "Invalid request." }, 400);
        }
        const lines = validateLines(body.lines);
        if (!lines.ok) return json({ error: lines.error }, 400);
        const bad = validateCustomer(body.customer);
        if (bad) return json({ error: bad }, 400);
        const cfg = readConfig(process.env);
        if (cfg.minOrderPence && lines.subtotalPence < cfg.minOrderPence)
          return json(
            { error: `The minimum order is £${(cfg.minOrderPence / 100).toFixed(2)}.` },
            400,
          );
        const origin = process.env["SITE_URL"] || new URL(request.url).origin;
        const params = buildSession(lines.lines, body.customer as CheckoutCustomer, cfg, origin);
        const res = await fetch(
          `${process.env["STRIPE_API_BASE"] || "https://api.stripe.com"}/v1/checkout/sessions`,
          {
            method: "POST",
            headers: {
              authorization: `Bearer ${key}`,
              "content-type": "application/x-www-form-urlencoded",
            },
            body: encodeForm(params).join("&"),
          },
        );
        const data = (await res.json()) as { url?: string; error?: { message?: string } };
        if (!res.ok || !data.url)
          return json(
            {
              error:
                "The payment service could not start your checkout. Please try again, or request a written quotation.",
            },
            502,
          );
        return json({ url: data.url });
      },
    },
  },
});
