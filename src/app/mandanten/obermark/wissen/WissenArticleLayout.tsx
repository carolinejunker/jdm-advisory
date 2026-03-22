"use client";

/**
 * Shared layout for Obermark Wissens-Artikel pages.
 * Renders blog content HTML with Obermark styling, rewrites internal links.
 * Client component for dynamic deadline countdown.
 */

import { useEffect, useRef } from "react";

interface WissenArticleLayoutProps {
  title: string;
  content: string;
}

function rewriteLinks(html: string): string {
  // Rewrite any internal links (e.g. /equal-pay, /blog/...) to the Obermark contact section
  return html
    .replace(/href="\/equal-pay[^"]*"/g, 'href="/mandanten/obermark#kontakt"')
    .replace(/href="\/blog[^"]*"/g, 'href="/mandanten/obermark#kontakt"')
    .replace(/href="\/kontakt[^"]*"/g, 'href="/mandanten/obermark#kontakt"')
    .replace(/href="\/leistungen[^"]*"/g, 'href="/mandanten/obermark#kontakt"')
    .replace(/href="\/en\/equal-pay[^"]*"/g, 'href="/mandanten/obermark#kontakt"');
}

export default function WissenArticleLayout({
  title,
  content,
}: WissenArticleLayoutProps) {
  const articleRef = useRef<HTMLElement>(null);
  const cleanContent = rewriteLinks(content);

  useEffect(() => {
    if (!articleRef.current) return;

    const els = articleRef.current.querySelectorAll<HTMLSpanElement>(
      "span[data-deadline]"
    );

    els.forEach((el) => {
      const dateStr = el.getAttribute("data-deadline");
      if (!dateStr) return;

      const deadline = new Date(`${dateStr}T00:00:00+02:00`);
      const now = new Date();
      const diff = Math.ceil(
        (deadline.getTime() - now.getTime()) / (1000 * 60 * 60 * 24)
      );

      if (diff <= 0) {
        el.textContent =
          el.getAttribute("data-fallback") || "Die Frist ist abgelaufen.";
      } else {
        el.textContent = `${diff} Tage`;
      }
    });
  }, [cleanContent]);

  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </span>
          <a
            href="/mandanten/obermark"
            className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
          >
            ← Zurück zum Mandantenbereich
          </a>
        </div>
      </nav>

      <main className="pt-24 pb-16">
        {/* Article Header */}
        <div className="max-w-3xl mx-auto px-6 mb-12">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl lg:text-5xl font-light tracking-tight text-cream mb-6 leading-tight">
            {title}
          </h1>
          <div className="w-16 h-px bg-gold/60" />
        </div>

        {/* Article Content */}
        <article
          ref={articleRef}
          className="max-w-3xl mx-auto px-6 prose-obermark"
          dangerouslySetInnerHTML={{ __html: cleanContent }}
        />

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 mt-16 pt-12 border-t border-navy-lighter">
          <div className="text-center">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Nächster Schritt
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-cream mb-4">
              Lassen Sie uns Ihren Handlungsbedarf besprechen
            </h2>
            <p className="text-slate max-w-xl mx-auto mb-8 text-sm">
              Jede Ausgangslage ist anders. In einem ersten Gespräch klären wir,
              wo Sie stehen und welche Schritte sinnvoll sind.
            </p>
            <a
              href="mailto:jens.druckenmueller@jdm-advisory.com?subject=Entgelttransparenz%20%E2%80%94%20Gespr%C3%A4chsanfrage"
              className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
            >
              Gespräch vereinbaren
            </a>
          </div>
        </div>
      </main>

      {/* Disclaimer */}
      <section className="py-8 border-t border-navy-lighter">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate/40 text-xs leading-relaxed text-center">
            <strong className="text-slate/50">Hinweis:</strong> Die Inhalte
            dieser Seite dienen der allgemeinen Information und stellen keine
            Rechtsberatung dar. Für verbindliche rechtliche Einschätzungen
            wenden Sie sich bitte an einen spezialisierten Rechtsanwalt. Trotz
            sorgfältiger Recherche übernehmen wir keine Haftung für die
            Richtigkeit, Vollständigkeit und Aktualität der bereitgestellten
            Informationen.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
        </div>
      </footer>
    </>
  );
}
