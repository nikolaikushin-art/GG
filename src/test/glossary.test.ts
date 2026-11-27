import { describe, expect, it } from "vitest";
import { glossaryEntries } from "@/lib/glossary-pages";
import { looks, photoFallbacks } from "@/lib/glossary-visuals";
import { hasAsset } from "@/lib/asset-index";

describe("glossary", () => {
  it("has a bespoke page for each of the terms", () => {
    expect(glossaryEntries.length).toBeGreaterThanOrEqual(30);
    for (const e of glossaryEntries) {
      expect(e.rich.story.p.length).toBeGreaterThanOrEqual(2);
      expect(e.rich.steps.items).toHaveLength(4);
      expect(e.rich.table.rows).toHaveLength(4);
      expect(e.rich.faq.length).toBeGreaterThanOrEqual(3);
    }
  });
  it("gives every page its own running order", () => {
    const orders = glossaryEntries.map((e) => looks[e.slug]!.sequence.join());
    expect(new Set(orders).size).toBe(orders.length);
  });
  it("never repeats a photograph across the glossary", () => {
    const all = glossaryEntries.flatMap((e) => looks[e.slug]!.photos.keys);
    expect(new Set(all).size).toBe(all.length);
    for (const k of all) expect(hasAsset(k)).toBe(true);
  });
  it("reports fallbacks", () => {
    console.log(JSON.stringify(photoFallbacks));
  });
});
