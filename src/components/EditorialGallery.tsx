import { Link } from "@tanstack/react-router";
import { ArrowUpRight } from "lucide-react";
import { storySlug } from "@/lib/story-slug";
import { Button } from "@/components/ui/button";

export type EditorialScene = { image: string | undefined; title: string; description: string };

export function EditorialGallery({
  eyebrow,
  title,
  intro,
  scenes,
}: {
  eyebrow: string;
  title: string;
  intro: string;
  scenes: EditorialScene[];
}) {
  return (
    <section className="border-y border-border bg-secondary">
      <div className="mx-auto max-w-7xl px-4 py-20 md:py-24">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div className="max-w-2xl">
            <p className="eyebrow">{eyebrow}</p>
            <h2 className="mt-3 text-3xl text-primary md:text-4xl">{title}</h2>
            <p className="mt-4 font-serif text-xl text-muted-foreground">{intro}</p>
          </div>
          <Button
            asChild
            variant="outline"
            className="shrink-0 border-gold bg-transparent font-display"
          >
            <Link to="/contact">
              Discuss your range <ArrowUpRight />
            </Link>
          </Button>
        </div>
        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {scenes
            .filter((scene) => scene.image)
            .map((scene) => (
              <figure key={scene.title} className="min-w-0">
                <Link
                  to="/story/$slug"
                  params={{ slug: storySlug(scene.title) }}
                  aria-label={`Open ${scene.title}`}
                  className="block aspect-[4/3] overflow-hidden"
                >
                  <img
                    src={scene.image}
                    alt={scene.title}
                    width={480}
                    height={480}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </Link>
                <figcaption className="mt-5 border-t border-gold/50 pt-4">
                  <h3 className="text-lg text-primary">
                    <Link to="/story/$slug" params={{ slug: storySlug(scene.title) }}>
                      {scene.title}
                    </Link>
                  </h3>
                  <p className="mt-3 font-serif text-lg text-muted-foreground">
                    {scene.description}
                  </p>
                </figcaption>
              </figure>
            ))}
        </div>
      </div>
    </section>
  );
}
