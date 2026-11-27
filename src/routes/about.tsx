import { AboutMore } from "@/components/NewSections";
import { AboutExtras } from "@/components/PageSections";
import { EditorialGallery } from "@/components/EditorialGallery";
import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/PageHero";
import storyHero from "@/assets/our-story-hero.jpg";
import { editorialImages } from "@/lib/photography";
import { bakersNight } from "@/lib/images";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "Our Story | Golden Grain Bakehouse" },
      {
        name: "description",
        content:
          "A London wholesale bakery of distinction, making bread, pastries and cakes for shops, restaurants, cafés and grills.",
      },
      { property: "og:title", content: "Our Story | Golden Grain Bakehouse" },
      {
        property: "og:description",
        content:
          "A London wholesale bakery of distinction, making bread, pastries and cakes for shops, restaurants, cafés and grills.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Page,
});

function Page() {
  return (
    <>
      <PageHero
        eyebrow="About the Bakehouse"
        title="Our Story"
        variant="tab"
        image={storyHero}
        intro="Flour, water, salt and time – baked overnight, with care, for the London trade."
      />
      <div className="mx-auto max-w-4xl space-y-8 px-4 py-20 font-serif text-xl leading-relaxed text-foreground/85">
        <p>
          Golden Grain Bakehouse is a wholesale bakery, supplying breads, pastries and cakes to the shops, restaurants, cafés and grills of London and the Home Counties. The range runs from the British tin loaf and bloomer to continental baguettes, flatbreads from across the world and hand-laminated pastry.
        </p>
        <img
          src={editorialImages["cooling-rack"]}
          alt="Loaves cooling on a bakery rack"
          width={1200}
          height={800}
          loading="lazy"
          className="aspect-[16/8] w-full rounded-sm object-cover shadow-elegant"
        />
        <p>
          The bakehouse draws on British, European, Persian, Turkish, Afghan and South Asian baking
          traditions. Hence a farmhouse bloomer may sit beside a stone-baked sangak in the same order, and each product is described with care and accuracy.
        </p>
      </div>
      <section className="relative isolate overflow-hidden bg-plum text-primary-foreground">
        <img
          src={bakersNight}
          alt="Golden Grain bakers shaping dough at night"
          width={1600}
          height={1008}
          loading="lazy"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-35"
        />
        <div className="mx-auto max-w-4xl px-4 py-28 text-center">
          <p className="eyebrow !text-gold">Through the Small Hours</p>
          <p className="mt-4 font-display text-3xl md:text-4xl">
            “Good bread asks for patience, flour and careful hands.”
          </p>
        </div>
      </section>

      <AboutExtras>
        <AboutMore />
      </AboutExtras>
      <EditorialGallery
        eyebrow="The Craft Behind the Crust"
        title="Ingredients, Patience & Care"
        intro="The details that turn a simple mixture into something worth sharing."
        scenes={[
          {
            image: editorialImages["flour-sacks"],
            title: "The Foundation",
            description:
              "Flour gives a loaf its structure. Different breads ask for different strengths, textures and grain blends.",
          },
          {
            image: editorialImages["levain-jar"],
            title: "Living Dough",
            description:
              "A starter develops its own character over time, bringing depth to the breads it helps to raise.",
          },
          {
            image: editorialImages["pastry-cutting"],
            title: "Layers of Care",
            description:
              "Clean folds and careful cutting preserve the delicate layers that make pastry crisp and light.",
          },
        ]}
      />
    </>
  );
}
