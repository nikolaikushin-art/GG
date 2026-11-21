import { useSyncExternalStore } from "react";
import { productPrices, caseTotal } from "@/lib/pricing";
import { allProducts } from "@/lib/catalogue";

export type QuoteLine = { slug: string; cases: number };
const KEY = "ggb-trade-quote-v1";
const EMPTY: QuoteLine[] = [];
let lines: QuoteLine[] = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    const parsed = raw ? (JSON.parse(raw) as QuoteLine[]) : [];
    lines = parsed.filter(
      (l) =>
        l && productPrices[l.slug] && Number.isInteger(l.cases) && l.cases > 0 && l.cases <= 999,
    );
  } catch {
    lines = EMPTY;
  }
}
function commit(next: QuoteLine[]) {
  lines = next.length ? next : EMPTY;
  try {
    window.localStorage.setItem(KEY, JSON.stringify(lines));
  } catch {
    /* storage unavailable: basket lasts for the visit */
  }
  listeners.forEach((l) => l());
}

export const quote = {
  add(slug: string, cases = 1) {
    load();
    if (!productPrices[slug]) return;
    const existing = lines.find((l) => l.slug === slug);
    commit(
      existing
        ? lines.map((l) => (l.slug === slug ? { ...l, cases: Math.min(999, l.cases + cases) } : l))
        : [...lines, { slug, cases }],
    );
  },
  set(slug: string, cases: number) {
    load();
    if (!Number.isInteger(cases) || cases < 1) return;
    commit(lines.map((l) => (l.slug === slug ? { ...l, cases: Math.min(999, cases) } : l)));
  },
  remove(slug: string) {
    load();
    commit(lines.filter((l) => l.slug !== slug));
  },
  clear() {
    load();
    commit([]);
  },
};

export function useQuote(): QuoteLine[] {
  return useSyncExternalStore(
    (cb) => {
      load();
      listeners.add(cb);
      return () => {
        listeners.delete(cb);
      };
    },
    () => {
      load();
      return lines;
    },
    () => EMPTY,
  );
}

export function priceLines(items: QuoteLine[]) {
  return items.flatMap((l) => {
    const product = allProducts.find((p) => p.slug === l.slug);
    const price = productPrices[l.slug];
    if (!product || !price) return [];
    return [
      {
        ...l,
        product,
        price,
        units: l.cases * price.caseSize,
        totalPence: caseTotal(price, l.cases),
      },
    ];
  });
}
export const subtotalPence = (items: QuoteLine[]) =>
  priceLines(items).reduce((n, l) => n + l.totalPence, 0);
