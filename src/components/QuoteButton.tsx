import { useState } from "react";
import { Check, Plus } from "lucide-react";
import { quote } from "@/lib/quote";

export function AddToQuote({ slug, className = "" }: { slug: string; className?: string }) {
  const [done, setDone] = useState(false);
  return (
    <button
      type="button"
      onClick={() => {
        quote.add(slug);
        setDone(true);
        setTimeout(() => setDone(false), 1800);
      }}
      className={`inline-flex items-center justify-center gap-2 rounded-sm border border-primary px-4 py-2 font-display text-xs uppercase tracking-[0.16em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground ${className}`}
      aria-live="polite"
    >
      {done ? (
        <>
          <Check className="h-4 w-4" /> Added
        </>
      ) : (
        <>
          <Plus className="h-4 w-4" /> Add case to basket
        </>
      )}
    </button>
  );
}
