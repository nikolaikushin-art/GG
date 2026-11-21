import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Menu, Mail, ShoppingBasket, Truck, Search, X, Wheat } from "lucide-react";
import logo from "@/assets/golden-grain-badge.png";
import { categories } from "@/lib/catalogue";
import { glossaryEntries, glossaryGroups } from "@/lib/glossary-pages";
import { Button } from "@/components/ui/button";
import { useQuote } from "@/lib/quote";

type MenuKey = "bakehouse" | "foods" | "glossary" | "more" | null;

export function SiteHeader() {
  const [open, setOpen] = useState<MenuKey>(null);
  const [mobile, setMobile] = useState(false);
  const quoteCount = useQuote().length;
  const close = () => {
    setOpen(null);
    setMobile(false);
  };

  const trigger = (key: Exclude<MenuKey, null>, label: string, to: string) => (
    <div onMouseEnter={() => setOpen(key)} className="h-full">
      <Link
        to={to}
        onClick={close}
        className="flex h-full items-center gap-1 px-4 font-display text-[0.8rem] uppercase tracking-[0.18em] text-primary transition-colors hover:text-gold-deep"
        activeProps={{ className: "text-gold-deep" }}
      >
        {label}{" "}
        <ChevronDown
          className={`h-3.5 w-3.5 transition-transform ${open === key ? "rotate-180" : ""}`}
        />
      </Link>
    </div>
  );

  return (
    <header className="sticky top-0 z-50" onMouseLeave={() => setOpen(null)}>
      {/* Utility bar */}
      <div className="bg-ink text-primary-foreground/80">
        <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-2 text-xs">
          <p className="flex min-w-0 items-center gap-2 truncate">
            <Truck className="h-3.5 w-3.5 shrink-0 text-gold" />
            <span className="sm:hidden">Overnight delivery · order by 4pm</span>
            <span className="hidden sm:inline">
              Overnight delivery across London &amp; the Home Counties – order by 4pm
            </span>
          </p>
          <div className="hidden items-center gap-5 md:flex">
            <a
              href="mailto:orders@goldengrain.co.uk"
              className="flex items-center gap-1.5 hover:text-gold"
            >
              <Mail className="h-3.5 w-3.5" /> orders@goldengrain.co.uk
            </a>
            <Link to="/trade" className="text-gold hover:underline">
              Trade Account
            </Link>
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div className="border-b-2 border-gold/50 bg-background shadow-elegant">
        <div className="mx-auto flex h-[96px] max-w-7xl items-center justify-between px-4">
          <Link
            to="/"
            onClick={close}
            className="flex shrink-0 items-center self-center"
            aria-label="Golden Grain Bakehouse home"
          >
            <img
              src={logo}
              alt="Golden Grain Bakehouse"
              width={900}
              height={659}
              className="h-[78px] w-auto md:h-[88px]"
            />
          </Link>
          <nav className="hidden h-full items-stretch lg:flex">
            {trigger("bakehouse", "Bakehouse", "/bakehouse")}
            {trigger("foods", "Foods", "/foods")}
            {trigger("glossary", "Glossary", "/glossary")}
            <div onMouseEnter={() => setOpen(null)} className="h-full">
              <Link
                to="/wholesale"
                className="flex h-full items-center px-4 font-display text-[0.8rem] uppercase tracking-[0.18em] text-primary hover:text-gold-deep"
                activeProps={{ className: "text-gold-deep" }}
              >
                Wholesale
              </Link>
            </div>
            {trigger("more", "More", "/about")}
          </nav>
          <div className="flex items-center gap-3">
            <Link
              to="/bakehouse"
              className="hidden rounded-sm p-3 text-primary hover:text-gold-deep sm:block"
              aria-label="Browse products"
            >
              <Search className="h-5 w-5" />
            </Link>
            <Link
              to="/basket"
              className="relative rounded-sm p-3 text-primary hover:text-gold-deep"
              aria-label={`Basket, ${quoteCount} ${quoteCount === 1 ? "line" : "lines"}`}
            >
              <ShoppingBasket className="h-5 w-5" />
              {quoteCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-4 min-w-4 items-center justify-center rounded-full bg-gold-gradient px-1 text-xs font-semibold text-accent-foreground">
                  {quoteCount}
                </span>
              )}
            </Link>
            <Link
              to="/trade"
              hash="apply"
              className="hidden rounded-sm bg-gold-gradient px-5 py-2.5 font-display text-xs uppercase tracking-[0.2em] text-accent-foreground shadow-elegant transition-transform hover:-translate-y-0.5 sm:inline-block"
            >
              Open an Account
            </Link>
            <Button
              variant="ghost"
              size="icon"
              className="h-11 w-11 text-primary lg:hidden"
              onClick={() => setMobile(!mobile)}
              aria-label="Menu"
              aria-expanded={mobile}
            >
              {mobile ? <X /> : <Menu />}
            </Button>
          </div>
        </div>

        {/* Mega panels */}
        {open && (
          <div className="absolute inset-x-0 top-full hidden animate-mega border-t-2 border-gold bg-card shadow-elegant lg:block">
            <div className="mx-auto max-w-7xl px-4 py-10">
              {open === "bakehouse" && (
                <div className="grid grid-cols-[1fr_1fr_1fr_1fr_280px] gap-8">
                  {categories.map((c) => (
                    <div key={c.slug}>
                      <Link
                        to="/bakehouse/$category"
                        params={{ category: c.slug }}
                        onClick={close}
                        className="font-display text-sm text-primary hover:text-gold-deep"
                      >
                        {c.name}
                      </Link>
                      <ul className="mt-3 space-y-1.5">
                        {c.products.slice(0, 5).map((p) => (
                          <li key={p.slug}>
                            <Link
                              to="/bakehouse/$category/$product"
                              params={{ category: c.slug, product: p.slug }}
                              onClick={close}
                              className="font-serif text-[1.02rem] text-muted-foreground hover:text-foreground"
                            >
                              {p.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                  <div className="col-start-5 row-span-2 row-start-1 flex flex-col justify-between rounded-sm bg-primary p-6 text-primary-foreground">
                    <div>
                      <Wheat className="h-8 w-8 text-gold" />
                      <p className="mt-4 font-display text-lg">The Full Bakehouse</p>
                      <p className="mt-2 font-serif text-base text-primary-foreground/75">
                        Every line in the catalogue, baked fresh and delivered to the trade.
                      </p>
                    </div>
                    <Link
                      to="/bakehouse"
                      onClick={close}
                      className="mt-6 inline-block bg-gold-gradient px-4 py-2 text-center font-display text-xs uppercase tracking-[0.2em] text-accent-foreground"
                    >
                      View all products
                    </Link>
                  </div>
                </div>
              )}
              {open === "foods" && (
                <div className="grid grid-cols-4 gap-8">
                  {[
                    ["For Restaurants", "Table breads, focaccia and dinner rolls."],
                    ["For Kebab & Grill Houses", "Pitta, naan, lavash and Turkish pide."],
                    ["For Cafés & Coffee Shops", "Viennoiserie, cakes, scones and muffins."],
                    ["For Retailers & Wholesalers", "Packaged loaves and own-label bread."],
                  ].map(([t, d]) => (
                    <Link
                      key={t}
                      to="/foods"
                      onClick={close}
                      className="group border-l-2 border-gold/40 pl-4 hover:border-gold"
                    >
                      <p className="font-display text-sm text-primary group-hover:text-gold-deep">
                        {t}
                      </p>
                      <p className="mt-2 font-serif text-base text-muted-foreground">{d}</p>
                    </Link>
                  ))}
                </div>
              )}
              {open === "glossary" && (
                <div className="grid grid-cols-[repeat(5,1fr)_240px] gap-8">
                  {glossaryGroups.map((grp) => (
                    <div key={grp}>
                      <p className="font-display text-sm text-primary">{grp}</p>
                      <ul className="mt-3 space-y-1.5">
                        {glossaryEntries
                          .filter((g) => g.group === grp)
                          .map((g) => (
                            <li key={g.slug}>
                              <Link
                                to="/glossary/$term"
                                params={{ term: g.slug }}
                                onClick={close}
                                className="font-serif text-[1.02rem] text-muted-foreground hover:text-foreground"
                              >
                                {g.term}
                              </Link>
                            </li>
                          ))}
                      </ul>
                    </div>
                  ))}
                  <div className="flex flex-col justify-between rounded-sm bg-primary p-6 text-primary-foreground">
                    <div>
                      <Wheat className="h-8 w-8 text-gold" />
                      <p className="mt-4 font-display text-lg">The Baker’s Lexicon</p>
                      <p className="mt-2 font-serif text-base text-primary-foreground/75">
                        {glossaryEntries.length} terms, each with its own page.
                      </p>
                    </div>
                    <Link
                      to="/glossary"
                      onClick={close}
                      className="mt-6 inline-block bg-gold-gradient px-4 py-2 text-center font-display text-xs uppercase tracking-[0.2em] text-accent-foreground"
                    >
                      View all terms
                    </Link>
                  </div>
                </div>
              )}
              {open === "more" && (
                <div className="grid grid-cols-3 gap-6">
                  {(
                    [
                      ["/about", "Our Story", "How the bakehouse works and what it stands for."],
                      [
                        "/trade",
                        "Trade Account & Quote",
                        "Build a quotation and apply for an account.",
                      ],
                      [
                        "/wholesale",
                        "Wholesale Terms",
                        "Cut-offs, delivery days and account terms.",
                      ],
                      [
                        "/delivery",
                        "Delivery Areas",
                        "Where we deliver, and how a delivery day runs.",
                      ],
                      ["/company", "Company Information", "Registered details and privacy notice."],
                      ["/contact", "Contact & Ordering", "Speak with the order desk."],
                    ] as const
                  ).map(([to, t, d]) => (
                    <Link
                      key={t}
                      to={to}
                      onClick={close}
                      className="group rounded-sm border border-border p-5 hover:border-gold"
                    >
                      <p className="font-display text-sm text-primary group-hover:text-gold-deep">
                        {t}
                      </p>
                      <p className="mt-2 font-serif text-base text-muted-foreground">{d}</p>
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}

        {mobile && (
          <nav className="border-t border-gold/30 bg-primary px-4 pb-6 lg:hidden">
            {(
              [
                ["/bakehouse", "Bakehouse"],
                ["/foods", "Foods"],
                ["/glossary", "Glossary"],
                ["/wholesale", "Wholesale"],
                ["/trade", "Trade Account & Quote"],
                ["/delivery", "Delivery Areas"],
                ["/about", "Our Story"],
                ["/company", "Company Information"],
                ["/contact", "Contact"],
              ] as const
            ).map(([to, l]) => (
              <Link
                key={to}
                to={to}
                onClick={close}
                className="block border-b border-primary-foreground/10 py-3 font-display text-sm uppercase tracking-[0.18em] text-primary-foreground"
              >
                {l}
              </Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-1">
              {categories.map((c) => (
                <Link
                  key={c.slug}
                  to="/bakehouse/$category"
                  params={{ category: c.slug }}
                  onClick={close}
                  className="py-1.5 font-serif text-primary-foreground/70"
                >
                  {c.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
