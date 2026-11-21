import { Link } from "@tanstack/react-router";
export type HeroVariant = "centre" | "left" | "split" | "banner" | "tab";

const ctaCls =
  "inline-block rounded-full border px-8 py-3 font-display text-sm tracking-wide transition-opacity hover:opacity-80";

export function PageHero({
  eyebrow,
  title,
  intro,
  image,
  variant = "centre",
  cta,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  image?: string | undefined;
  variant?: HeroVariant;
  cta?: {
    to: "/contact" | "/bakehouse" | "/wholesale" | "/trade" | "/delivery" | "/company";
    label: string;
  };
}) {
  const button = (cls: string) =>
    cta && (
      <Link to={cta.to} className={`${ctaCls} mt-9 ${cls}`}>
        {cta.label}
      </Link>
    );
  if (variant === "split") {
    return (
      <section className="bg-[#faf5ec] text-[#2a1b10]">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-16 lg:grid-cols-[1fr_1.1fr]">
          <div className="lg:pr-10">
            <p className="font-display text-xs uppercase tracking-[0.3em] opacity-70">{eyebrow}</p>
            <h1 className="mt-4 text-5xl text-[#9a7524] md:text-7xl">{title}</h1>
            <div className="my-6 h-px w-full bg-[#9a7524]/50" />
            <p className="font-serif text-2xl leading-relaxed">{intro}</p>
            {button("border-[#9a7524] text-[#9a7524]")}
          </div>
          {image && (
            <img
              src={image}
              alt=""
              width={1400}
              height={1600}
              className="aspect-[4/5] w-full object-cover"
            />
          )}
        </div>
      </section>
    );
  }
  if (variant === "banner") {
    return (
      <section className="bg-[#f1eeea] text-[#9a7524]">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center">
          <p className="font-display text-xs uppercase tracking-[0.3em] opacity-80">{eyebrow}</p>
          <h1 className="mt-4 text-[2rem] min-[400px]:text-[2.5rem] sm:text-6xl md:text-8xl break-words">
            {title}
          </h1>
          <p className="mx-auto mt-5 max-w-2xl font-serif text-2xl">{intro}</p>
          {button("border-[#9a7524]")}
        </div>
        {image && (
          <div className="mx-auto max-w-[1600px] px-4 pb-4">
            <img
              src={image}
              alt=""
              width={2000}
              height={900}
              className="aspect-[21/9] w-full object-cover"
            />
          </div>
        )}
      </section>
    );
  }
  const overlay =
    variant === "tab"
      ? "rgba(90,62,34,.55)"
      : variant === "left"
        ? "rgba(20,12,6,.7)"
        : "rgba(20,12,6,.62)";
  return (
    <section className="relative isolate overflow-hidden text-white">
      {image && (
        <img
          src={image}
          alt=""
          width={1800}
          height={1100}
          className="absolute inset-0 -z-10 h-full w-full object-cover"
          style={variant === "tab" ? { filter: "sepia(.45)" } : undefined}
        />
      )}
      <div
        className="absolute inset-0 -z-10 bg-primary"
        style={image ? { background: overlay } : undefined}
      />
      <div
        className={`mx-auto max-w-6xl px-6 ${variant === "tab" ? "pb-40 pt-28 text-center md:pt-40" : "py-28 md:py-40"} ${variant === "centre" ? "text-center" : variant === "tab" ? "" : ""}`}
      >
        <p className="font-display text-xs uppercase tracking-[0.3em] text-white/70">{eyebrow}</p>
        <h1
          className={`mt-4 text-3xl min-[400px]:text-4xl sm:text-5xl md:text-8xl break-words ${variant === "left" ? "max-w-3xl" : ""}`}
        >
          {title}
        </h1>
        <div className="my-8 h-px w-full bg-white/60" />
        <p
          className={`font-serif text-2xl leading-relaxed ${variant === "left" ? "max-w-xl" : "mx-auto max-w-2xl"}`}
        >
          {intro}
        </p>
        {button("border-white text-white")}
      </div>
      {variant === "tab" && (
        <div className="absolute inset-x-0 bottom-0 flex justify-center">
          <span className="rounded-t-3xl bg-[#f6ef8a] px-8 pb-3 pt-4 font-display text-sm uppercase tracking-[0.2em] text-[#9a7524]">
            {eyebrow}
          </span>
        </div>
      )}
    </section>
  );
}

export function ImageSlot({ label, className = "" }: { label: string; className?: string }) {
  return (
    <div
      className={`flex items-center justify-center border border-dashed border-gold/50 bg-secondary font-serif italic text-muted-foreground ${className}`}
    >
      {label}
    </div>
  );
}
