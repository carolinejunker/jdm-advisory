"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

interface NavProps {
  locale?: "en" | "de";
}

const translations = {
  en: {
    about: "About",
    services: "Services",
    track: "Track Record",
    blog: "Insights",
    blogHref: "/en/blog",
    contact: "Contact",
    switchLabel: "DE",
    switchHref: "/",
    home: "/en",
  },
  de: {
    about: "Über mich",
    services: "Leistungen",
    track: "Stationen",
    blog: "Blog",
    blogHref: "/blog",
    contact: "Kontakt",
    switchLabel: "EN",
    switchHref: "/en",
    home: "/",
  },
};

export default function Nav({ locale = "de" }: NavProps) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = translations[locale];
  const pathname = usePathname();

  // Check if we're on the homepage (where anchor links work directly)
  const isHome = pathname === "/" || pathname === "/en";
  const prefix = isHome ? "" : t.home;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: `${prefix}#about`, label: t.about },
    { href: `${prefix}#services`, label: t.services },
    { href: `${prefix}#track`, label: t.track },
    { href: t.blogHref, label: t.blog },
    { href: `${prefix}#contact`, label: t.contact },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-navy/95 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="/"
          className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide"
        >
          JDM
        </a>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-slate text-sm uppercase tracking-widest hover:text-gold transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href={t.switchHref}
            className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200"
          >
            {t.switchLabel}
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-cream"
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-navy-light/95 backdrop-blur-md border-t border-navy-lighter">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              className="block px-6 py-3 text-slate text-sm uppercase tracking-widest hover:text-gold transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href={t.switchHref}
            className="block px-6 py-3 text-gold/60 text-sm uppercase tracking-widest hover:text-gold transition-colors"
          >
            {t.switchLabel}
          </a>
        </div>
      )}
    </nav>
  );
}
