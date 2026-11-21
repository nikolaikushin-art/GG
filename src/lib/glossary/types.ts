export type SectionKey = "story" | "steps" | "table" | "mosaic" | "notes" | "faq" | "pull";

export type GlossaryRich = {
  /** Heading and paragraphs for the long-form editorial section. */
  story: { h: string; p: string[] };
  /** A process, shown as numbered stages. */
  steps: { h: string; intro: string; items: [string, string][] };
  /** A comparison or reference table with three columns. */
  table: {
    h: string;
    intro: string;
    head: [string, string, string];
    rows: [string, string, string][];
  };
  faq: [string, string][];
  notes: { h: string; items: [string, string][] };
  pull: string;
  /** Guidance for trade buyers. Contains no claims beyond what the catalogue already states. */
  trade: string;
  /** Captions for the three photographs in the mosaic. */
  caps: [string, string, string];
  /** Candidate photographs in order of preference ("folder/name"); the allocator guarantees no repeats. */
  imgs: string[];
};
