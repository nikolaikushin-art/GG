import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import type { ReactNode } from "react";

import appCss from "../styles.css?url";

import { SiteHeader } from "../components/SiteHeader";
import { SiteFooter } from "../components/SiteFooter";

function NotFoundComponent() {
  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="eyebrow">Error 404</p>
        <h1 className="mt-3 text-4xl text-primary md:text-5xl">We can’t find that page</h1>
        <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        <p className="mt-6 font-serif text-xl text-muted-foreground">
          The page may have moved, or the address may contain a typing error. Try the bakehouse, or
          write to the order desk and we will help.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link
            to="/"
            className="inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
          >
            Back to the home page
          </Link>
          <Link
            to="/bakehouse"
            className="inline-block border border-primary px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Browse the bakehouse
          </Link>
        </div>
      </div>
    </section>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();

  return (
    <section className="flex min-h-[60vh] items-center justify-center bg-background px-4 py-24">
      <div className="max-w-xl text-center">
        <p className="eyebrow">Something went wrong</p>
        <h1 className="mt-3 text-4xl text-primary md:text-5xl">This page didn’t load</h1>
        <div className="mx-auto mt-4 h-px w-20 bg-gold-gradient" />
        <p className="mt-6 font-serif text-xl text-muted-foreground">
          The fault is on our side. Please try again, or return to the home page.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-block bg-gold-gradient px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-accent-foreground"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-block border border-primary px-8 py-4 font-display text-xs uppercase tracking-[0.22em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
          >
            Back to the home page
          </a>
        </div>
      </div>
    </section>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    // Replace these placeholders with the app’s name and description when first building the app.
    // Each content route, / included, must still set its own head(). Never add og:image or
    // twitter:image here: every page without its own would inherit the root’s preview image.
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Golden Grain Bakehouse – Wholesale Bakery, East London" },
      {
        name: "description",
        content:
          "Wholesale bakery in East London supplying bread, pastries and cakes to shops, restaurants, cafés and grills across London and the Home Counties.",
      },
      { name: "author", content: "Golden Grain Bakehouse" },
      { property: "og:site_name", content: "Golden Grain Bakehouse" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "icon", href: "/favicon.png", type: "image/png" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Lora:wght@400;500;600&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en-GB">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:bg-primary focus:px-4 focus:py-2 focus:font-display focus:text-sm focus:text-primary-foreground"
      >
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main" tabIndex={-1} className="min-h-[60vh] outline-none">
        <Outlet />
      </main>
      <SiteFooter />
    </QueryClientProvider>
  );
}
