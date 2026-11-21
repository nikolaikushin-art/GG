import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import type { GlossaryEntry } from "@/lib/glossary-pages";
import type { Palette } from "@/lib/glossary-visuals";
import type { GlossaryPhotos } from "@/lib/glossary/images";
import { allProducts } from "@/lib/catalogue";
import { productImages } from "@/lib/photography";
import { FromPrice } from "@/components/ProductPricing";

export type Ctx = {
  e: GlossaryEntry;
  p: Palette;
  ph: GlossaryPhotos;
  products: typeof allProducts;
  related: GlossaryEntry[];
  prev: GlossaryEntry;
  next: GlossaryEntry;
  v: number;
};
type V = { c: Ctx; v: number; tone: "light" | "band" };

export const pill =
  "inline-block rounded-full border px-7 py-3 font-display text-sm tracking-wide transition-opacity hover:opacity-80";
const colours = (c: Ctx, tone: "light" | "band") =>
  tone === "band"
    ? {
        bg: c.p.band,
        fg: c.p.bandFg,
        hd: c.p.bandFg === "#3b2a18" ? c.p.accent : c.p.bandFg,
        ac: c.p.bandFg,
      }
    : { bg: c.p.bg, fg: c.p.fg, hd: c.p.accent, ac: c.p.accent };
const Section = ({
  c,
  tone,
  children,
  id,
  pad = "py-16 md:py-24",
}: {
  c: Ctx;
  tone: "light" | "band";
  children: ReactNode;
  id?: string;
  pad?: string;
}) => {
  const k = colours(c, tone);
  return (
    <section id={id} style={{ background: k.bg, color: k.fg }}>
      <div className={`mx-auto max-w-7xl px-5 md:px-8 ${pad}`}>{children}</div>
    </section>
  );
};
const Eyebrow = ({
  c,
  tone,
  children,
}: {
  c: Ctx;
  tone: "light" | "band";
  children: ReactNode;
}) => (
  <p
    className="font-display text-xs uppercase tracking-[0.28em]"
    style={{ color: colours(c, tone).ac, opacity: 0.85 }}
  >
    {children}
  </p>
);
const H2 = ({
  c,
  tone,
  children,
  className = "",
}: {
  c: Ctx;
  tone: "light" | "band";
  children: ReactNode;
  className?: string;
}) => (
  <h2
    className={`text-3xl leading-tight md:text-5xl ${className}`}
    style={{ color: colours(c, tone).hd }}
  >
    {children}
  </h2>
);
const Photo = ({
  src,
  alt = "",
  ratio = "aspect-[4/3]",
  className = "",
}: {
  src: string;
  alt?: string;
  ratio?: string;
  className?: string;
}) => (
  <img
    src={src}
    alt={alt}
    width={1400}
    height={1050}
    loading="lazy"
    decoding="async"
    className={`${ratio} w-full object-cover ${className}`}
  />
);

/* ───────────── Heroes: six distinct openings ───────────── */
const Lead = ({ c, cls = "" }: { c: Ctx; cls?: string }) => (
  <div className={`space-y-5 font-serif text-lg leading-relaxed md:text-xl ${cls}`}>
    {c.e.body.map((b) => (
      <p key={b}>{b}</p>
    ))}
  </div>
);
const Tab = ({ c }: { c: Ctx }) => (
  <div className="absolute inset-x-0 bottom-0 flex justify-center">
    <span
      className="rounded-t-3xl px-8 pb-3 pt-4 font-display text-xs uppercase tracking-[0.2em] md:text-sm"
      style={{ background: c.p.tab, color: c.p.accent }}
    >
      {c.e.group}
    </span>
  </div>
);

export function Hero({ c, kind }: { c: Ctx; kind: number }) {
  const { e, p, ph } = c;
  if (kind === 0)
    return (
      <section className="relative isolate overflow-hidden text-center text-white">
        <img
          src={ph.hero}
          alt=""
          width={1800}
          height={1100}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div className="absolute inset-0 -z-10" style={{ background: p.overlay }} />
        <div className="mx-auto max-w-3xl px-6 py-24 md:py-36">
          <p className="font-display text-xs uppercase tracking-[0.3em] text-white/75">{e.group}</p>
          <h1 className="mt-4 text-3xl min-[400px]:text-4xl sm:text-5xl md:text-8xl break-words break-words">
            {e.term}
          </h1>
          <div className="my-8 h-px w-full bg-white/60" />
          <p className="font-serif text-xl leading-relaxed md:text-2xl">{e.def}</p>
        </div>
      </section>
    );
  if (kind === 1)
    return (
      <section className="relative isolate overflow-hidden text-white">
        <img
          src={ph.hero}
          alt=""
          width={1800}
          height={1100}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0 -z-10"
          style={{ background: `linear-gradient(90deg, ${p.overlay}, rgba(0,0,0,.25))` }}
        />
        <div className="mx-auto max-w-7xl px-5 py-20 md:px-8 md:py-32">
          <div className="max-w-2xl">
            <p className="font-display text-xs uppercase tracking-[0.3em] text-white/75">
              {e.group}
            </p>
            <h1 className="mt-4 text-5xl md:text-7xl">{e.term}</h1>
            <div className="my-7 h-px w-full bg-white/60" />
            <p className="font-serif text-xl italic md:text-2xl">{e.def}</p>
            <Lead c={c} cls="mt-6 text-white/90" />
          </div>
        </div>
      </section>
    );
  if (kind === 2)
    return (
      <section style={{ background: p.bg, color: p.fg }}>
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 py-14 md:px-8 md:py-20 lg:grid-cols-[1fr_1fr]">
          <div>
            <p className="font-display text-xs uppercase tracking-[0.3em] opacity-70">{e.group}</p>
            <h1 className="mt-4 text-5xl md:text-7xl" style={{ color: p.accent }}>
              {e.term}
            </h1>
            <div className="my-6 h-px w-24" style={{ background: p.accent }} />
            <p className="font-serif text-xl italic md:text-2xl">{e.def}</p>
            <Lead c={c} cls="mt-6" />
          </div>
          <img
            src={ph.hero}
            alt=""
            width={1400}
            height={1500}
            fetchPriority="high"
            className="aspect-[5/6] w-full object-cover lg:max-h-[640px]"
          />
        </div>
      </section>
    );
  if (kind === 3)
    return (
      <section style={{ background: p.bg, color: p.fg }}>
        <div className="mx-auto max-w-5xl px-5 pb-10 pt-16 text-center md:pt-24">
          <p className="font-display text-xs uppercase tracking-[0.3em] opacity-70">{e.group}</p>
          <h1
            className="mt-4 text-3xl min-[400px]:text-4xl sm:text-5xl md:text-8xl break-words break-words"
            style={{ color: p.accent }}
          >
            {e.term}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl font-serif text-xl md:text-2xl">{e.def}</p>
        </div>
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <img
            src={ph.hero}
            alt=""
            width={2000}
            height={900}
            fetchPriority="high"
            className="aspect-[16/9] w-full object-cover md:aspect-[21/9]"
          />
        </div>
        <div className="mx-auto grid max-w-6xl gap-6 px-5 py-14 md:grid-cols-2 md:gap-14 md:px-8 md:py-20">
          {e.body.map((b) => (
            <p key={b} className="font-serif text-lg leading-relaxed md:text-xl">
              {b}
            </p>
          ))}
        </div>
      </section>
    );
  if (kind === 4)
    return (
      <section style={{ background: p.bg, color: p.fg }}>
        <div className="mx-auto max-w-4xl px-5 pb-10 pt-16 text-center md:pt-24">
          <h1
            className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-8xl break-words break-words"
            style={{ color: p.accent }}
          >
            {e.term}
          </h1>
          <p
            className="mx-auto mt-5 max-w-2xl font-serif text-xl md:text-2xl"
            style={{ color: p.accent }}
          >
            {e.def}
          </p>
          <Link
            to="/bakehouse"
            className={`${pill} mt-8`}
            style={{ borderColor: p.accent, color: p.accent }}
          >
            See the range
          </Link>
        </div>
        <div className="mx-auto max-w-[1600px] px-5 md:px-8">
          <img
            src={ph.hero}
            alt=""
            width={2000}
            height={900}
            fetchPriority="high"
            className="aspect-[4/3] w-full object-cover md:aspect-[21/9]"
          />
        </div>
        <div className="mx-auto max-w-3xl px-5 py-14 md:py-20">
          <Lead c={c} />
        </div>
      </section>
    );
  return (
    <section>
      <div className="relative isolate overflow-hidden text-white">
        <img
          src={ph.hero}
          alt=""
          width={1800}
          height={1100}
          fetchPriority="high"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={{ filter: "sepia(.35)" }}
        />
        <div className="absolute inset-0 -z-10" style={{ background: p.overlay }} />
        <div className="mx-auto max-w-4xl px-6 pb-32 pt-24 text-center md:pt-36">
          <h1 className="text-3xl min-[400px]:text-4xl sm:text-5xl md:text-8xl break-words break-words">
            {e.term}
          </h1>
          <div className="my-8 h-px w-full bg-white/60" />
          <p className="font-serif text-xl leading-relaxed md:text-2xl">{e.def}</p>
        </div>
        <Tab c={c} />
      </div>
      <div style={{ background: p.bg, color: p.fg }}>
        <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2 md:gap-14 md:px-8 md:py-20">
          {e.body.map((b) => (
            <p key={b} className="font-serif text-lg leading-relaxed md:text-xl">
              {b}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────── Quick facts ───────────── */
export function Facts({ c, tone }: { c: Ctx; tone: "light" | "band" }) {
  const k = colours(c, tone);
  return (
    <Section c={c} tone={tone} pad="py-12 md:py-16">
      <Eyebrow c={c} tone={tone}>
        {c.e.group} · at a glance
      </Eyebrow>
      <dl className="mt-6 grid gap-x-10 gap-y-7 sm:grid-cols-2 lg:grid-cols-4">
        {c.e.facts.map(([key, val]) => (
          <div key={key} className="border-t pt-4" style={{ borderColor: k.ac }}>
            <dt className="font-display text-xs uppercase tracking-[0.2em]" style={{ color: k.ac }}>
              {key}
            </dt>
            <dd className="mt-2 font-serif text-xl">{val}</dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

/* ───────────── Story ───────────── */
export function Story({ c, v, tone }: V) {
  const s = c.e.rich.story;
  const text = (
    <div className="space-y-5 font-serif text-lg leading-relaxed md:text-xl">
      {s.p.map((t) => (
        <p key={t}>{t}</p>
      ))}
    </div>
  );
  if (v === 2)
    return (
      <Section c={c} tone={tone}>
        <Eyebrow c={c} tone={tone}>
          The background
        </Eyebrow>
        <H2 c={c} tone={tone} className="mt-3 max-w-4xl">
          {s.h}
        </H2>
        <Photo src={c.ph.story} ratio="aspect-[4/3] md:aspect-[21/9]" className="mt-10" />
        <div className="mt-10 grid gap-6 font-serif text-lg leading-relaxed md:grid-cols-2 md:gap-14 md:text-xl">
          {s.p.map((t) => (
            <p key={t}>{t}</p>
          ))}
        </div>
      </Section>
    );
  return (
    <Section c={c} tone={tone}>
      <div
        className={`grid items-center gap-10 lg:grid-cols-2 lg:gap-16 ${v === 1 ? "lg:[&>*:first-child]:order-2" : ""}`}
      >
        <div>
          <Eyebrow c={c} tone={tone}>
            The background
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            {s.h}
          </H2>
          <div className="my-6 h-px w-20" style={{ background: colours(c, tone).ac }} />
          {text}
        </div>
        <div className="relative">
          <Photo src={c.ph.story} ratio="aspect-[4/5] sm:aspect-[4/3] lg:aspect-[4/5]" />
          <div
            className="pointer-events-none absolute -bottom-3 -right-3 hidden h-full w-full border md:block"
            style={{ borderColor: colours(c, tone).ac, opacity: 0.5 }}
          />
        </div>
      </div>
    </Section>
  );
}

/* ───────────── Steps ───────────── */
export function Steps({ c, v, tone }: V) {
  const s = c.e.rich.steps;
  const k = colours(c, tone);
  if (v === 0)
    return (
      <Section c={c} tone={tone}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-40 lg:self-start">
            <Eyebrow c={c} tone={tone}>
              Process
            </Eyebrow>
            <H2 c={c} tone={tone} className="mt-3">
              {s.h}
            </H2>
            <p className="mt-5 font-serif text-lg md:text-xl">{s.intro}</p>
          </div>
          <ol className="relative space-y-9 border-l pl-8" style={{ borderColor: k.ac }}>
            {s.items.map(([t, d], i) => (
              <li key={t} className="relative">
                <span
                  className="absolute -left-[45px] top-0 flex h-8 w-8 items-center justify-center rounded-full font-display text-sm"
                  style={{ background: k.ac, color: k.bg }}
                >
                  {i + 1}
                </span>
                <p className="font-display text-xl">{t}</p>
                <p className="mt-2 font-serif text-lg opacity-85 md:text-xl">{d}</p>
              </li>
            ))}
          </ol>
        </div>
      </Section>
    );
  if (v === 1)
    return (
      <Section c={c} tone={tone}>
        <div className="max-w-3xl">
          <Eyebrow c={c} tone={tone}>
            Process
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            {s.h}
          </H2>
          <p className="mt-5 font-serif text-lg md:text-xl">{s.intro}</p>
        </div>
        <ol className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {s.items.map(([t, d], i) => (
            <li key={t} className="border-t-2 pt-5" style={{ borderColor: k.ac }}>
              <p className="font-display text-5xl" style={{ color: k.ac }}>
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className="mt-3 font-display text-lg">{t}</p>
              <p className="mt-2 font-serif text-lg opacity-85">{d}</p>
            </li>
          ))}
        </ol>
      </Section>
    );
  return (
    <Section c={c} tone={tone}>
      <div className="text-center">
        <Eyebrow c={c} tone={tone}>
          Process
        </Eyebrow>
        <H2 c={c} tone={tone} className="mt-3">
          {s.h}
        </H2>
        <p className="mx-auto mt-5 max-w-2xl font-serif text-lg md:text-xl">{s.intro}</p>
      </div>
      <ol className="mx-auto mt-12 max-w-5xl divide-y" style={{ borderColor: k.ac }}>
        {s.items.map(([t, d], i) => (
          <li
            key={t}
            className="grid gap-2 py-6 md:grid-cols-[90px_260px_1fr] md:gap-8"
            style={{ borderColor: `${k.ac}66` }}
          >
            <span className="font-display text-3xl" style={{ color: k.ac }}>
              {i + 1}
            </span>
            <p className="font-display text-xl">{t}</p>
            <p className="font-serif text-lg opacity-85 md:text-xl">{d}</p>
          </li>
        ))}
      </ol>
    </Section>
  );
}

/* ───────────── Table ───────────── */
export function Table({ c, v, tone }: V) {
  const t = c.e.rich.table;
  const k = colours(c, tone);
  const grid = (
    <div>
      <div
        className="hidden grid-cols-3 gap-6 border-b-2 pb-3 font-display text-xs uppercase tracking-[0.2em] md:grid"
        style={{ borderColor: k.ac, color: k.ac }}
      >
        {t.head.map((h) => (
          <span key={h}>{h}</span>
        ))}
      </div>
      {t.rows.map((r) => (
        <div
          key={r[0]}
          className="grid gap-1 border-b py-4 md:grid-cols-3 md:gap-6 md:py-5"
          style={{ borderColor: `${k.ac}55` }}
        >
          {r.map((cell, i) => (
            <p
              key={i}
              className={
                i === 0 ? "font-display text-lg" : "font-serif text-lg opacity-90 md:text-xl"
              }
            >
              <span
                className="mr-2 font-display text-xs uppercase tracking-[0.18em] md:hidden"
                style={{ color: k.ac }}
              >
                {t.head[i]}:
              </span>
              {cell}
            </p>
          ))}
        </div>
      ))}
    </div>
  );
  if (v === 2)
    return (
      <Section c={c} tone={tone}>
        <div className="max-w-3xl">
          <Eyebrow c={c} tone={tone}>
            Reference
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            {t.h}
          </H2>
          <p className="mt-5 font-serif text-lg md:text-xl">{t.intro}</p>
        </div>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {t.rows.map((r) => (
            <div key={r[0]} className="border p-6" style={{ borderColor: `${k.ac}88` }}>
              <p className="font-display text-xl" style={{ color: k.hd }}>
                {r[0]}
              </p>
              <dl className="mt-4 space-y-3 font-serif text-lg">
                {[1, 2].map((i) => (
                  <div key={i}>
                    <dt
                      className="font-display text-xs uppercase tracking-[0.2em]"
                      style={{ color: k.ac }}
                    >
                      {t.head[i]}
                    </dt>
                    <dd className="opacity-90">{r[i]}</dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </div>
      </Section>
    );
  return (
    <Section c={c} tone={tone}>
      <div className={`grid gap-10 ${v === 1 ? "lg:grid-cols-[1fr_1.6fr] lg:gap-20" : ""}`}>
        <div className={v === 1 ? "" : "max-w-3xl"}>
          <Eyebrow c={c} tone={tone}>
            Reference
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            {t.h}
          </H2>
          <p className="mt-5 font-serif text-lg md:text-xl">{t.intro}</p>
        </div>
        {grid}
      </div>
    </Section>
  );
}

/* ───────────── Mosaic ───────────── */
export function Mosaic({ c, v, tone }: V) {
  const [a, b, d] = c.ph.mosaic;
  const caps = c.e.rich.caps;
  const k = colours(c, tone);
  const cap = (i: number) => (
    <p className="mt-3 font-serif text-base italic opacity-80 md:text-lg" style={{ color: k.fg }}>
      {caps[i]}
    </p>
  );
  return (
    <Section c={c} tone={tone}>
      <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
        <div>
          <Eyebrow c={c} tone={tone}>
            Photographs
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            {c.e.term}, in pictures
          </H2>
        </div>
      </div>
      {v === 0 && (
        <div className="grid gap-5 lg:grid-cols-12">
          <figure className="lg:col-span-7">
            <Photo src={a} ratio="aspect-[4/3]" />
            {cap(0)}
          </figure>
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
            <figure>
              <Photo src={b} ratio="aspect-[4/3]" />
              {cap(1)}
            </figure>
            <figure>
              <Photo src={d} ratio="aspect-[4/3]" />
              {cap(2)}
            </figure>
          </div>
        </div>
      )}
      {v === 1 && (
        <div className="grid gap-6 md:grid-cols-3">
          <figure>
            <Photo src={a} ratio="aspect-[4/5]" />
            {cap(0)}
          </figure>
          <figure className="md:mt-12">
            <Photo src={b} ratio="aspect-[4/5]" />
            {cap(1)}
          </figure>
          <figure className="md:mt-24">
            <Photo src={d} ratio="aspect-[4/5]" />
            {cap(2)}
          </figure>
        </div>
      )}
      {v === 2 && (
        <div className="grid gap-5 md:grid-cols-2">
          <figure>
            <Photo src={a} ratio="aspect-[4/3]" />
            {cap(0)}
          </figure>
          <figure>
            <Photo src={b} ratio="aspect-[4/3]" />
            {cap(1)}
          </figure>
          <figure className="md:col-span-2">
            <Photo src={d} ratio="aspect-[4/3] md:aspect-[21/9]" />
            {cap(2)}
          </figure>
        </div>
      )}
    </Section>
  );
}

/* ───────────── Notes ───────────── */
export function Notes({ c, v, tone }: V) {
  const n = c.e.rich.notes;
  const k = colours(c, tone);
  if (v === 1)
    return (
      <Section c={c} tone={tone}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Eyebrow c={c} tone={tone}>
              Practical advice
            </Eyebrow>
            <H2 c={c} tone={tone} className="mt-3">
              {n.h}
            </H2>
          </div>
          <ul className="divide-y" style={{ borderColor: k.ac }}>
            {n.items.map(([t, d], i) => (
              <li
                key={t}
                className="grid grid-cols-[3rem_1fr] gap-4 py-6"
                style={{ borderColor: `${k.ac}55` }}
              >
                <span className="font-display text-3xl" style={{ color: k.ac }}>
                  {i + 1}
                </span>
                <div>
                  <p className="font-display text-xl">{t}</p>
                  <p className="mt-2 font-serif text-lg opacity-85 md:text-xl">{d}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </Section>
    );
  return (
    <Section c={c} tone={tone}>
      <div className={v === 2 ? "text-center" : ""}>
        <Eyebrow c={c} tone={tone}>
          Practical advice
        </Eyebrow>
        <H2 c={c} tone={tone} className="mt-3">
          {n.h}
        </H2>
      </div>
      <div className="mt-10 grid gap-8 md:grid-cols-3">
        {n.items.map(([t, d]) => (
          <article
            key={t}
            className={v === 2 ? "border p-7" : "border-t-2 pt-5"}
            style={{ borderColor: v === 2 ? `${k.ac}88` : k.ac }}
          >
            <p className="font-display text-xl" style={{ color: k.hd }}>
              {t}
            </p>
            <p className="mt-3 font-serif text-lg opacity-85 md:text-xl">{d}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

/* ───────────── FAQ ───────────── */
export function Faq({ c, v, tone }: V) {
  const k = colours(c, tone);
  const items = c.e.rich.faq;
  const list = items.map(([q, a]) => (
    <details key={q} className="group border-b py-5" style={{ borderColor: `${k.ac}66` }}>
      <summary className="flex cursor-pointer list-none items-start justify-between gap-6 font-display text-lg md:text-xl">
        {q}
        <span
          className="mt-1 shrink-0 text-2xl leading-none transition-transform group-open:rotate-45"
          style={{ color: k.ac }}
        >
          +
        </span>
      </summary>
      <p className="mt-3 max-w-3xl font-serif text-lg opacity-90 md:text-xl">{a}</p>
    </details>
  ));
  if (v === 1)
    return (
      <Section c={c} tone={tone}>
        <div className="grid gap-10 lg:grid-cols-[1fr_1.7fr] lg:gap-20">
          <div>
            <Eyebrow c={c} tone={tone}>
              Questions
            </Eyebrow>
            <H2 c={c} tone={tone} className="mt-3">
              Asked at the counter
            </H2>
            <p className="mt-5 font-serif text-lg md:text-xl">
              Answers to the questions we hear most often about {c.e.term.toLowerCase()}.
            </p>
          </div>
          <div className="border-t" style={{ borderColor: `${k.ac}66` }}>
            {list}
          </div>
        </div>
      </Section>
    );
  if (v === 2)
    return (
      <Section c={c} tone={tone}>
        <div className="text-center">
          <Eyebrow c={c} tone={tone}>
            Questions
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            Common questions answered
          </H2>
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {items.map(([q, a]) => (
            <article key={q} className="border-t-2 pt-5" style={{ borderColor: k.ac }}>
              <p className="font-display text-xl" style={{ color: k.hd }}>
                {q}
              </p>
              <p className="mt-3 font-serif text-lg opacity-90 md:text-xl">{a}</p>
            </article>
          ))}
        </div>
      </Section>
    );
  return (
    <Section c={c} tone={tone}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <Eyebrow c={c} tone={tone}>
            Questions
          </Eyebrow>
          <H2 c={c} tone={tone} className="mt-3">
            Good to know
          </H2>
        </div>
        <div className="mt-10 border-t" style={{ borderColor: `${k.ac}66` }}>
          {list}
        </div>
      </div>
    </Section>
  );
}

/* ───────────── Pull quote on photograph ───────────── */
export function Pull({ c, v }: { c: Ctx; v: number }) {
  const align = v === 0 ? "text-center mx-auto" : v === 1 ? "text-left" : "text-right ml-auto";
  return (
    <section className="relative isolate overflow-hidden text-white">
      <img
        src={c.ph.pull}
        alt=""
        width={1800}
        height={1000}
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10" style={{ background: c.p.overlay }} />
      <div className="mx-auto max-w-6xl px-6 py-24 md:py-36">
        <p
          className="font-display text-xs uppercase tracking-[0.3em] text-white/75"
          style={{ textAlign: v === 0 ? "center" : v === 1 ? "left" : "right" }}
        >
          {c.e.term}
        </p>
        <p className={`mt-5 max-w-3xl font-display text-3xl leading-snug md:text-5xl ${align}`}>
          {c.e.rich.pull}
        </p>
      </div>
    </section>
  );
}

/* ───────────── In our range ───────────── */
export function Range({ c, tone }: { c: Ctx; tone: "light" | "band" }) {
  const k = colours(c, tone);
  return (
    <Section c={c} tone={tone}>
      <div className="mx-auto max-w-4xl text-center">
        <Eyebrow c={c} tone={tone}>
          At Golden Grain
        </Eyebrow>
        <H2 c={c} tone={tone} className="mt-3">
          Where you will find {c.e.term}
        </H2>
        <div className="mx-auto my-6 h-px w-20" style={{ background: k.ac }} />
        <p className="font-display text-xl md:text-2xl">{c.e.at}</p>
        <p className="mt-5 font-serif text-lg opacity-90 md:text-xl">{c.e.rich.trade}</p>
        <div className="flex justify-center"></div>
      </div>
      {c.products.length > 0 && (
        <div className="mt-14 flex flex-wrap justify-center gap-8">
          {c.products.map((p) => (
            <article
              key={p.slug}
              className="w-full max-w-[22rem] sm:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.4rem)]"
            >
              <div className="aspect-[4/5] overflow-hidden">
                <img
                  src={productImages[p.slug]}
                  alt={p.name}
                  width={1200}
                  height={1500}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                />
              </div>
              <h3 className="mt-4 text-2xl">{p.name}</h3>
              <p className="mt-1 font-serif text-lg opacity-80">{p.note}</p>
              <FromPrice slug={p.slug} tone={tone === "band" ? "dark" : "light"} />
              <Link
                to="/bakehouse/$category/$product"
                params={{ category: p.category.slug, product: p.slug }}
                className={`${pill} mt-4 !px-5 !py-2`}
                style={{ borderColor: "currentColor" }}
              >
                View product <ArrowUpRight className="ml-1 inline h-4 w-4" />
              </Link>
            </article>
          ))}
        </div>
      )}
    </Section>
  );
}

/* ───────────── prev/next ───────────── */
export function Foot({ c }: { c: Ctx }) {
  return (
    <>
      <section style={{ background: c.p.bg, color: c.p.fg }}>
        <div className="mx-auto grid max-w-7xl gap-5 px-5 py-10 md:grid-cols-3 md:items-center md:px-8">
          <Link
            to="/glossary/$term"
            params={{ term: c.prev.slug }}
            className="font-display text-lg hover:underline"
          >
            ← {c.prev.term}
          </Link>
          <Link
            to="/glossary"
            className={`${pill} justify-self-center text-center`}
            style={{ borderColor: c.p.fg }}
          >
            All terms
          </Link>
          <Link
            to="/glossary/$term"
            params={{ term: c.next.slug }}
            className="font-display text-lg hover:underline md:justify-self-end"
          >
            {c.next.term} →
          </Link>
        </div>
      </section>
    </>
  );
}
