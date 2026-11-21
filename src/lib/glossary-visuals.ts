import { glossaryEntries, richContent } from "@/lib/glossary-pages";
import { allocatePhotos, type GlossaryPhotos } from "@/lib/glossary/images";
import type { SectionKey } from "@/lib/glossary/types";

export type Palette = {
  name: string;
  bg: string;
  fg: string;
  accent: string;
  band: string;
  bandFg: string;
  tab: string;
  overlay: string;
};
export const palettes: Palette[] = [
  {
    name: "ink",
    bg: "#faf5ec",
    fg: "#2a1b10",
    accent: "#9a7524",
    band: "#1d130b",
    bandFg: "#f6ead3",
    tab: "#f6ef8a",
    overlay: "rgba(20,12,6,.62)",
  },
  {
    name: "forest",
    bg: "#f4efe4",
    fg: "#1c3326",
    accent: "#a67f2c",
    band: "#17372a",
    bandFg: "#f3e7c9",
    tab: "#e8cf86",
    overlay: "rgba(14,42,30,.6)",
  },
  {
    name: "linen",
    bg: "#f1eeea",
    fg: "#3b2a18",
    accent: "#8a6a1c",
    band: "#e4d8c3",
    bandFg: "#3b2a18",
    tab: "#f6ef8a",
    overlay: "rgba(40,28,14,.5)",
  },
  {
    name: "plum",
    bg: "#f8f1ee",
    fg: "#3a1d2c",
    accent: "#a2692f",
    band: "#3a1d2c",
    bandFg: "#f8e9d6",
    tab: "#f0cf9a",
    overlay: "rgba(48,20,36,.62)",
  },
  {
    name: "sepia",
    bg: "#f5ecde",
    fg: "#4a3320",
    accent: "#8a5a1e",
    band: "#6b4a2b",
    bandFg: "#fbefd9",
    tab: "#f2dd9a",
    overlay: "rgba(90,62,34,.55)",
  },
];

const MIDDLE: SectionKey[] = ["story", "steps", "table", "mosaic", "notes", "faq", "pull"];

/** Deterministic shuffle so that every term gets its own running order. */
function order(seed: number): SectionKey[] {
  let s = (seed * 2654435761) % 4294967296;
  const rnd = () => (s = (s * 1664525 + 1013904223) % 4294967296) / 4294967296;
  for (let attempt = 0; attempt < 200; attempt++) {
    const a = [...MIDDLE];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(rnd() * (i + 1));
      [a[i], a[j]] = [a[j]!, a[i]!];
    }
    const ok =
      ["story", "steps", "table"].includes(a[0]!) &&
      a[a.length - 1] !== "pull" &&
      Math.abs(a.indexOf("pull") - a.indexOf("mosaic")) > 1;
    if (ok) return a;
  }
  return [...MIDDLE];
}

const slugs = glossaryEntries.map((e) => e.slug);
const { photos, fallbacks } = allocatePhotos(slugs, richContent);
export const photoFallbacks = fallbacks;

export type Look = {
  hero: number;
  palette: Palette;
  photos: GlossaryPhotos;
  sequence: SectionKey[];
  variant: number;
};

const seen = new Set<string>();
export const looks: Record<string, Look> = Object.fromEntries(
  glossaryEntries.map((e, i) => {
    let seed = i + 1,
      seq = order(seed);
    while (seen.has(seq.join())) seq = order(++seed + 100);
    seen.add(seq.join());
    return [
      e.slug,
      {
        hero: i % 6,
        palette: palettes[Math.floor(i / 6) % palettes.length]!,
        photos: photos[e.slug]!,
        sequence: seq,
        variant: i % 3,
      },
    ];
  }),
);
