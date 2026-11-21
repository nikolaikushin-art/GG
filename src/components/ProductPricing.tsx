import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Minus, Plus, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { productPrices, formatGBP, caseTotal } from "@/lib/pricing";
import { AddToQuote } from "@/components/QuoteButton";

export function PriceSummary({ slug }: { slug: string }) {
  const price = productPrices[slug];
  if (!price) return null;
  return (
    <div className="mt-5 grid grid-cols-2 gap-4 border-t border-border pt-4">
      <div>
        <p className="text-xs text-muted-foreground">Guide price · unconfirmed</p>
        <p className="mt-1 font-display text-lg text-primary">
          {formatGBP(price.retailPence)}
          <span className="ml-1 font-serif text-sm">/{price.unit}</span>
        </p>
      </div>
      <div>
        <p className="text-xs text-muted-foreground">Trade guide · unconfirmed</p>
        <p className="mt-1 font-display text-lg text-gold-deep">
          {formatGBP(price.wholesalePence)}
          <span className="ml-1 font-serif text-sm">/{price.unit}</span>
        </p>
      </div>
    </div>
  );
}

export function ProductPricing({ slug }: { slug: string }) {
  const [cases, setCases] = useState(1);
  const price = productPrices[slug];
  if (!price) return null;
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-16">
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Customer & Trade</p>
            <h2 className="mt-3 text-3xl text-primary">Guide Prices &amp; Pack Planning</h2>
            <PriceSummary slug={slug} />
            <p className="mt-5 font-serif text-lg text-muted-foreground">
              These are planning estimates in pounds sterling, not approved selling prices. Pack
              sizes are proposed. VAT, delivery charges, minimum order value and availability are
              confirmed only in a written quotation from the order desk.
            </p>
            <Button asChild variant="link" className="mt-3 px-0 text-primary">
              <Link to="/basket">
                Open your basket <ArrowUpRight />
              </Link>
            </Button>
          </div>
          <div className="border-t-2 border-gold pt-5">
            <p className="font-display text-lg text-primary">Wholesale case estimate</p>
            <p className="mt-2 font-serif text-lg text-muted-foreground">
              {price.caseSize} × {price.unit} per proposed case · {formatGBP(caseTotal(price))} per
              case
            </p>
            <div className="mt-6 flex items-center justify-between gap-4">
              <span className="font-serif text-lg">Cases</span>
              <div className="flex items-center gap-4">
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="Remove a case"
                  disabled={cases === 1}
                  onClick={() => setCases((n) => Math.max(1, n - 1))}
                >
                  <Minus />
                </Button>
                <output
                  aria-label="Case quantity"
                  className="min-w-8 text-center font-display text-xl"
                >
                  {cases}
                </output>
                <Button
                  size="icon"
                  variant="outline"
                  aria-label="Add a case"
                  onClick={() => setCases((n) => n + 1)}
                >
                  <Plus />
                </Button>
              </div>
            </div>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="flex justify-between py-4">
                <dt>Total units</dt>
                <dd>{cases * price.caseSize}</dd>
              </div>
              <div className="flex justify-between py-4 font-display text-xl text-primary">
                <dt>Estimated total</dt>
                <dd aria-label="Estimated case total">{formatGBP(caseTotal(price, cases))}</dd>
              </div>
            </dl>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <AddToQuote slug={slug} />
              <Button asChild className="bg-primary text-primary-foreground">
                <Link to="/trade">
                  Go to basket <ArrowUpRight />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function FromPrice({
  slug,
  tone = "light",
  className = "",
}: {
  slug: string;
  tone?: "light" | "dark";
  className?: string;
}) {
  const price = productPrices[slug];
  if (!price) return null;
  const dark = tone === "dark";
  return (
    <p className={`mt-4 flex flex-wrap items-baseline gap-x-3 gap-y-1 ${className}`}>
      <span className={`font-display text-lg ${dark ? "text-gold" : "text-primary"}`}>
        <span
          className={`mr-1.5 text-xs uppercase tracking-[0.18em] ${dark ? "text-primary-foreground/70" : "text-muted-foreground"}`}
        >
          Guide
        </span>
        {formatGBP(price.retailPence)}
        <span className="ml-1 font-serif text-sm">/ {price.unit}</span>
      </span>
      <span
        className={`font-serif text-base ${dark ? "text-primary-foreground/75" : "text-muted-foreground"}`}
      >
        Trade guide {formatGBP(price.wholesalePence)}
      </span>
    </p>
  );
}
