import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { CheckCircle2, Loader2, AlertTriangle } from "lucide-react";
import { quote } from "@/lib/quote";
import { formatGBP } from "@/lib/pricing";
import { company } from "@/lib/company";

export const Route = createFileRoute("/order/success")({
  validateSearch: (s: Record<string, unknown>) => ({
    session_id: typeof s["session_id"] === "string" ? s["session_id"] : "",
  }),
  head: () => ({
    meta: [
      { title: "Order Received | Golden Grain Bakehouse" },
      { name: "robots", content: "noindex" },
    ],
  }),
  component: Page,
});

type Status = {
  paid: boolean;
  amount?: number;
  email?: string;
  deliveryDate?: string;
  business?: string;
};

function Page() {
  const { session_id } = Route.useSearch();
  const [s, setS] = useState<Status | "loading" | "error">("loading");
  useEffect(() => {
    if (!session_id) {
      setS("error");
      return;
    }
    fetch(`/api/checkout-status?session_id=${encodeURIComponent(session_id)}`)
      .then((r) => r.json())
      .then((d: Status) => {
        setS(d);
        if (d.paid) quote.clear();
      })
      .catch(() => setS("error"));
  }, [session_id]);
  return (
    <div className="mx-auto max-w-2xl px-4 py-24 text-center">
      {s === "loading" && (
        <>
          <Loader2 className="mx-auto h-10 w-10 animate-spin text-gold-deep" />
          <p className="mt-4 font-serif text-xl">Confirming your payment…</p>
        </>
      )}
      {s !== "loading" && s !== "error" && s.paid && (
        <>
          <CheckCircle2 className="mx-auto h-12 w-12 text-gold-deep" />
          <h1 className="mt-4 text-4xl text-primary">
            Thank you{s.business ? `, ${s.business}` : ""}
          </h1>
          <p className="mt-4 font-serif text-xl text-muted-foreground">
            Your payment of {formatGBP(s.amount ?? 0)} has been received. Stripe has emailed a
            receipt{s.email ? ` to ${s.email}` : ""}.
          </p>
          {s.deliveryDate && (
            <p className="mt-2 font-serif text-xl text-muted-foreground">
              Requested delivery date: {s.deliveryDate}. The order desk will confirm by email.
            </p>
          )}
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link
              to="/bakehouse"
              className="bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
            >
              Continue browsing
            </Link>
          </div>
        </>
      )}
      {s !== "loading" && (s === "error" || !s.paid) && (
        <>
          <AlertTriangle className="mx-auto h-12 w-12 text-destructive" />
          <h1 className="mt-4 text-3xl text-primary">We could not confirm a payment</h1>
          <p className="mt-4 font-serif text-xl text-muted-foreground">
            Nothing has been charged on this page. If you believe you were charged, write to{" "}
            {company.email} and quote your Stripe receipt.
          </p>
          <Link
            to="/basket"
            className="mt-8 inline-block border border-primary px-8 py-3 font-display text-xs uppercase tracking-[0.18em] text-primary"
          >
            Back to your basket
          </Link>
        </>
      )}
    </div>
  );
}
