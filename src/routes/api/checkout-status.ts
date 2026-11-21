import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/api/checkout-status")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const key = process.env["STRIPE_SECRET_KEY"];
        const id = new URL(request.url).searchParams.get("session_id") ?? "";
        const headers = { "content-type": "application/json", "cache-control": "no-store" };
        if (!key || !/^cs_(test|live)_[A-Za-z0-9]+$/.test(id))
          return new Response(JSON.stringify({ paid: false }), { status: 400, headers });
        const res = await fetch(
          `${process.env["STRIPE_API_BASE"] || "https://api.stripe.com"}/v1/checkout/sessions/${id}`,
          { headers: { authorization: `Bearer ${key}` } },
        );
        if (!res.ok) return new Response(JSON.stringify({ paid: false }), { status: 502, headers });
        const s = (await res.json()) as {
          payment_status?: string;
          amount_total?: number;
          customer_details?: { email?: string };
          metadata?: { delivery_date?: string; business?: string };
        };
        return new Response(
          JSON.stringify({
            paid: s.payment_status === "paid",
            amount: s.amount_total ?? 0,
            email: s.customer_details?.email ?? "",
            deliveryDate: s.metadata?.delivery_date ?? "",
            business: s.metadata?.business ?? "",
          }),
          { headers },
        );
      },
    },
  },
});
