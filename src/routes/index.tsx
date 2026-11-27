import {
  TodaysBake,
  BakersHands,
  SourdoughSpotlight,
  FlatbreadHeritage,
  PastryCounter,
  TurkishTable,
  DispatchFloor,
  ShopWindow,
  Faq,
  FinalCta,
} from "@/components/ExtraSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { useEffect, useRef } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { Wheat, Flame, Truck, Award } from "lucide-react";
import { editorialImages, productImages } from "@/lib/photography";
import { storySlug } from "@/lib/story-slug";
import { categories } from "@/lib/catalogue";
import {
  categoryImages,
  bakersNight,
  bakerySpread,
  tandoorFlatbread,
} from "@/lib/images";
import { newEditorialImages } from "@/lib/new-editorial-photography";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Golden Grain Bakehouse – Fine Wholesale Bakers, East London" },
      {
        name: "description",
        content:
          "Fine bread, pastries and cakes, baked overnight in London and delivered by dawn to the capital’s shops, restaurants, cafés and grills.",
      },
      { property: "og:title", content: "Golden Grain Bakehouse – Fine Wholesale Bakers, East London" },
      {
        property: "og:description",
        content:
          "Fine bread, pastries and cakes, baked overnight in London and delivered by dawn to the capital’s shops, restaurants, cafés and grills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const totalProducts = categories.reduce((n, c) => n + c.products.length, 0);

/** Hero background video. React doesn't set the `muted` attribute on <video>, which makes
 *  browsers block autoplay - so we set it in the DOM and call play() ourselves, retrying
 *  on first interaction if the browser still refuses (e.g. Low Power Mode). */
function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.setAttribute("muted", "");
    v.setAttribute("playsinline", "");

    const tryPlay = () => {
      v.play().catch(() => {});
    };
    tryPlay();
    v.addEventListener("loadeddata", tryPlay);
    v.addEventListener("canplay", tryPlay);

    const events = ["pointerdown", "touchstart", "keydown", "scroll", "mousemove"] as const;
    const unlock = () => {
      tryPlay();
      if (!v.paused) events.forEach((e) => window.removeEventListener(e, unlock));
    };
    events.forEach((e) => window.addEventListener(e, unlock, { passive: true }));

    return () => {
      v.removeEventListener("loadeddata", tryPlay);
      v.removeEventListener("canplay", tryPlay);
      events.forEach((e) => window.removeEventListener(e, unlock));
    };
  }, []);

  return (
    <video
      ref={ref}
      className="absolute inset-0 -z-20 h-full w-full -scale-x-100 object-cover object-center"
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      poster="/hero/hero-poster.jpg"
      aria-hidden="true"
    >
      <source src="/hero/hero.mp4" type="video/mp4" />
      <source src="/hero/hero.webm" type="video/webm" />
    </video>
  );
}

function Index() {
  return (
    <>
      <section className="relative isolate overflow-hidden bg-ink text-primary-foreground">
        <HeroVideo />
        {/* Light green wash + left-side fade: text stays readable, video stays clearly visible */}
        <div className="absolute inset-0 -z-10 bg-ink/15" />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-ink/90 via-ink/50 to-transparent lg:via-ink/35 lg:to-transparent" />
        <div className="mx-auto flex min-h-[520px] max-w-7xl flex-col items-start justify-start px-4 pb-16 pt-10 lg:min-h-[600px] lg:pt-12">
          <div className="max-w-4xl">
            <p className="eyebrow !text-gold">Wholesale Bakers · London</p>
            <h1 className="mt-5 leading-[1.1]">
              <span className="text-gold-gradient block text-xl sm:text-3xl md:text-4xl lg:text-5xl">
                Baked through the night,
              </span>
              <span className="mt-2 block text-2xl sm:text-4xl md:text-5xl lg:text-6xl">
                Delivered by first light,
              </span>
              <span className="mt-2 block text-[1.7rem] sm:text-5xl md:text-6xl lg:text-7xl">
                Bread of distinction.
              </span>
            </h1>
            <p className="mt-7 max-w-lg font-serif text-xl text-primary-foreground/85">
              From the classic English tin loaf to Persian sangak, Golden Grain serves the capital’s
              shops, cafés, restaurants and grills – fresh at your door every morning.
            </p>
            <div className="mt-9 flex flex-wrap gap-4">
              <Link
                to="/bakehouse"
                className="bg-gold-gradient px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground shadow-elegant"
              >
                Discover the Bakehouse
              </Link>
              <Link
                to="/trade"
                className="border border-gold/60 px-7 py-3.5 font-display text-xs uppercase tracking-[0.22em] text-gold hover:bg-gold/10"
              >
                Open a Trade Account
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-6 px-4 py-10 md:grid-cols-4">
          {[
            [Flame, "Baked by Night", "Fresh from the oven before dawn"],
            [Truck, "Delivered by Dawn", "London & the Home Counties"],
            [Wheat, "Fully Specified", "Ingredients and allergens, always to hand"],
            [Award, `${totalProducts} Product Lines`, "Breads, pastries and cakes of distinction"],
          ].map(([I, t, d]) => {
            const Icon = I as typeof Flame;
            return (
              <div key={t as string} className="flex items-start gap-3">
                <Icon className="mt-1 h-6 w-6 shrink-0 text-gold-deep" />
                <div>
                  <p className="font-display text-sm text-primary">{t as string}</p>
                  <p className="font-serif text-muted-foreground">{d as string}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">The Bakehouse</p>
          <h2 className="mt-3 text-4xl text-primary">The Collection</h2>
          <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        </div>
        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((c) => (
            <Link
              key={c.slug}
              to="/bakehouse/$category"
              params={{ category: c.slug }}
              className="group overflow-hidden rounded-sm border border-border bg-card transition-all hover:-translate-y-1 hover:border-gold hover:shadow-elegant"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={categoryImages[c.slug]}
                  alt={c.name}
                  width={1200}
                  height={800}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/60 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="text-lg text-primary group-hover:text-gold-deep">{c.name}</h3>
                <p className="mt-1 font-serif text-lg italic text-muted-foreground">{c.strap}</p>
                <p className="mt-4 text-xs uppercase tracking-[0.2em] text-gold-deep">
                  {c.products.length} products →
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center">
          <p className="eyebrow">Inside the Bakehouse</p>
          <h2 className="mt-3 text-4xl text-primary md:text-5xl">
            Crafted by Hand, Through the Night
          </h2>
          <p className="mx-auto mt-4 max-w-2xl font-serif text-xl text-muted-foreground">
            From the first mix at dusk to the last tray out at dawn, every loaf, flatbread and pastry passes through skilled and careful hands.
          </p>
        </div>
        <div className="mt-14 grid gap-5 md:grid-cols-3 md:grid-rows-2">
          {(
            [
              [
                bakersNight,
                "The Night Shift",
                "Dough divided, weighed and shaped by our bakers at long, floured benches.",
                "md:col-span-2 md:row-span-2",
              ],
              [
                tandoorFlatbread,
                "Fired in Clay",
                "Naan and Afghan breads blistered against the walls of our tandoors.",
                "",
              ],
              [
                bakerySpread,
                "Sweet Bakes",
                "Viennoiserie, scones and cakes for the capital’s finest cafés.",
                "",
              ],
            ] as const
          ).map(([img, t, d, cls]) => (
            <Link
              key={t}
              to="/story/$slug"
              params={{ slug: storySlug(t) }}
              className={`block ${cls}`}
            >
              <figure className="group relative isolate h-full min-h-[260px] overflow-hidden rounded-sm shadow-elegant">
                <img
                  src={img}
                  alt={t}
                  width={1600}
                  height={1008}
                  loading="lazy"
                  className="absolute inset-0 -z-10 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink/90 via-ink/50 via-40% to-ink/0" />
                <figcaption className="flex h-full flex-col justify-end p-6 text-primary-foreground [text-shadow:0_1px_10px_rgb(0_0_0/0.55)]">
                  <p className="font-display text-xl text-gold">{t}</p>
                  <p className="mt-1 max-w-md font-serif text-lg text-primary-foreground/85">{d}</p>
                </figcaption>
              </figure>
            </Link>
          ))}
        </div>
      </section>

      <EditorialGallery
        eyebrow="The Golden Grain Journal"
        title="Small Details. Fine Baking."
        intro="A closer look at the ingredients, methods and time-honoured rituals behind the counter."
        scenes={[
          {
            image: newEditorialImages.baguettes,
            title: "A Golden Crust",
            description:
              "Deep scoring, a crisp exterior and an airy crumb: the details that make a baguette.",
          },
          {
            image: newEditorialImages.cinnamon,
            title: "The Finishing Touch",
            description:
              "Spiralled dough and a delicate glaze bring cinnamon rolls to the coffee counter.",
          },
          {
            image: newEditorialImages.tea,
            title: "Made for the British Table",
            description:
              "Scones served with jam and cream turn a pot of tea into an occasion. Accompaniments are serving suggestions.",
          },
        ]}
      />
      <TodaysBake />
      <BakersHands />
      <SourdoughSpotlight />
      <FlatbreadHeritage />
      <PastryCounter />
      <TurkishTable />
      <DispatchFloor />
      <ShopWindow />
      <Faq />
      <FinalCta />
    </>
  );
}
