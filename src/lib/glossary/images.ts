import { assetIndex } from "@/lib/asset-index";
import { smallImages } from "./small-images";
import type { GlossaryRich } from "./types";

export type GlossaryPhotos = {
  hero: string;
  story: string;
  pull: string;
  mosaic: [string, string, string];
  keys: string[];
};

const wanted =
  /baker|dough|flour|loaf|loaves|bread|bun|roll|crumb|crust|mill|boule|baguette|sourdough|flatbread/;
const unwanted =
  /cake|sponge|muffin|danish|croissant|cinnamon|baklava|pistachio|doughnut|tea|scone|bunting|flower|skyline|map|handshake|counter|shopfront|shop-|street|van-|pallet|box|crate|pasty|pasties|hot-dog|stollen|hot-cross|fete|garden|iftar/;
const rank = (k: string) => (wanted.test(k) ? 2 : 0) - (unwanted.test(k) ? 3 : 0);
const generic = Object.keys(assetIndex)
  .filter((k) => /^(new|pages|gallery)\//.test(k))
  .sort((a, b) => rank(b) - rank(a));

/**
 * Gives every glossary page its own six photographs. No photograph is used twice across the glossary.
 * The hero and the full-width quote slot always receive a photograph wide enough for a full-bleed crop.
 */
export function allocatePhotos(
  order: string[],
  rich: Record<string, GlossaryRich>,
): { photos: Record<string, GlossaryPhotos>; fallbacks: Record<string, string[]> } {
  const used = new Set<string>();
  const preferred = new Set(order.flatMap((s) => rich[s]!.imgs));
  const photos: Record<string, GlossaryPhotos> = {};
  const fallbacks: Record<string, string[]> = {};
  for (const slug of order) {
    const candidates = rich[slug]!.imgs.filter((k) => k in assetIndex && !used.has(k));
    const extra = generic.filter(
      (k) => !used.has(k) && !preferred.has(k) && !candidates.includes(k),
    );
    const pool = [...candidates, ...extra];
    const take = (pred: (k: string) => boolean) => {
      const k = pool.find((x) => !used.has(x) && pred(x));
      if (!k) throw new Error(`No photograph left for ${slug}`);
      used.add(k);
      if (!candidates.includes(k)) (fallbacks[slug] ??= []).push(k);
      return k;
    };
    const large = (k: string) => !smallImages.has(k);
    const hero = take(large);
    const story = take(() => true);
    const pull = take(large);
    const m1 = take(() => true),
      m2 = take(() => true),
      m3 = take(() => true);
    const keys = [hero, story, pull, m1, m2, m3];
    photos[slug] = {
      hero: assetIndex[hero]!,
      story: assetIndex[story]!,
      pull: assetIndex[pull]!,
      mosaic: [assetIndex[m1]!, assetIndex[m2]!, assetIndex[m3]!],
      keys,
    };
  }
  return { photos, fallbacks };
}
