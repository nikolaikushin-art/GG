import { Link } from "@tanstack/react-router";
import { ExternalLink } from "lucide-react";
import logo from "@/assets/gg-footer-logo-badge.png";
import { categories } from "@/lib/catalogue";
import { company } from "@/lib/company";

const link = "hover:text-gold focus-visible:text-gold";

export function SiteFooter() {
  return (
    <footer className="bg-plum text-primary-foreground/75">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-16 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr_1.2fr]">
        <div>
          <img
            src={logo}
            alt="Golden Grain Bakehouse"
            width={900}
            height={659}
            loading="lazy"
            className="h-32 w-auto drop-shadow-[0_6px_18px_rgba(0,0,0,0.35)]"
          />
          <p className="mt-4 max-w-xs font-serif text-base">
            Wholesale bakery supplying shops, restaurants, cafés and grills across London and the
            Home Counties.
          </p>
        </div>
        <nav aria-label="The Bakehouse">
          <p className="eyebrow">The Bakehouse</p>
          <ul className="mt-4 space-y-2 font-serif">
            {categories.map((c) => (
              <li key={c.slug}>
                <Link to="/bakehouse/$category" params={{ category: c.slug }} className={link}>
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <nav aria-label="Trade customers">
          <p className="eyebrow">Trade Customers</p>
          <ul className="mt-4 space-y-2 font-serif">
            <li>
              <Link to="/trade" hash="apply" className={link}>
                Apply for an account
              </Link>
            </li>
            <li>
              <Link to="/trade" hash="quote" className={link}>
                Build a quotation
              </Link>
            </li>
            <li>
              <Link to="/wholesale" className={link}>
                Wholesale terms
              </Link>
            </li>
            <li>
              <Link to="/delivery" className={link}>
                Delivery areas
              </Link>
            </li>
            <li>
              <Link to="/foods" className={link}>
                Foods &amp; sectors
              </Link>
            </li>
            <li>
              <Link to="/contact" className={link}>
                Contact the order desk
              </Link>
            </li>
          </ul>
        </nav>
        <nav aria-label="Company">
          <p className="eyebrow">Company</p>
          <ul className="mt-4 space-y-2 font-serif">
            <li>
              <Link to="/about" className={link}>
                Our story
              </Link>
            </li>
            <li>
              <Link to="/glossary" className={link}>
                Baker’s glossary
              </Link>
            </li>
            <li>
              <Link to="/company" className={link}>
                Company information
              </Link>
            </li>
            <li>
              <Link to="/company" hash="privacy" className={link}>
                Privacy &amp; cookies
              </Link>
            </li>
          </ul>
        </nav>
        <div>
          <p className="eyebrow">Order Desk</p>
          <address className="mt-4 font-serif not-italic leading-relaxed">
            Golden Grain Bakehouse
            <br />
            {company.registeredOffice.map((l) => (
              <span key={l}>
                {l}
                <br />
              </span>
            ))}
            <a href={`mailto:${company.email}`} className="inline-block py-2 text-gold">
              {company.email}
            </a>
          </address>
          <p className="mt-3 font-serif text-sm text-primary-foreground/60">
            Orders by 4pm for next-morning delivery. Allergen and specification sheets on request.
          </p>
        </div>
      </div>
      <div className="border-t border-primary-foreground/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-4 py-6 text-xs leading-relaxed text-primary-foreground/65 md:flex-row md:items-center md:justify-between">
          <p>
            {company.displayName} is registered in England and Wales. Company number{" "}
            {company.number}. Registered office: {company.registeredOffice.join(", ")}.{" "}
            <a
              href={company.recordUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 underline hover:text-gold"
            >
              Companies House record <ExternalLink className="h-3 w-3" aria-hidden />
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          </p>
          <p className="shrink-0">
            © {new Date().getFullYear()} {company.displayName}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
