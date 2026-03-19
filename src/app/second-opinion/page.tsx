import Link from "next/link";

const useCases = [
  {
    icon: "🔍",
    title: "Berater-Review",
    text: "Ein externer Berater hat Ihnen ein Ergebnis geliefert — Strategie, Gutachten, Bewertung. Ist es belastbar? Wir prüfen, was andere liefern.",
  },
  {
    icon: "📊",
    title: "Due Diligence Review",
    text: "Vor einer Investition oder Übernahme: Wir prüfen die vorliegende Due Diligence auf Lücken, Inkonsistenzen und blinde Flecken.",
  },
  {
    icon: "🛡️",
    title: "Internal Audit Review",
    text: "Ihre interne Revision hat geprüft — aber wer prüft die Prüfer? Unabhängige Qualitätssicherung für Audit-Ergebnisse.",
  },
  {
    icon: "⚖️",
    title: "Entscheidungsvalidierung",
    text: "Vor einer weitreichenden Entscheidung: Ein unabhängiger Blick auf die Datenlage, Annahmen und Alternativen.",
  },
];

const process = [
  {
    nr: "01",
    title: "Erstgespräch",
    label: "Kostenlos · 30 Minuten",
    description:
      "Sie schildern die Situation, wir klären ob und wie wir helfen können. Kein Verkaufsgespräch — eine ehrliche Einschätzung.",
    deliverables: [
      "Einschätzung ob ein Review sinnvoll ist",
      "Vorschlag für Scope und Vorgehen",
      "Transparente Kostenindikation",
    ],
  },
  {
    nr: "02",
    title: "Dokumentenanalyse",
    label: "3–5 Werktage",
    description:
      "AI-gestützte Analyse der vorliegenden Unterlagen. Wir identifizieren Inkonsistenzen, Lücken und offene Fragen — schneller und gründlicher als rein manuell.",
    deliverables: [
      "Strukturierte Dokumentenanalyse",
      "Inkonsistenz- und Lückenbericht",
      "Liste offener Fragen",
      "Erste Risikobewertung",
    ],
  },
  {
    nr: "03",
    title: "Second Opinion Report",
    label: "1–2 Wochen",
    description:
      "Ein vollständiger, unabhängiger Bericht mit klarer Bewertung: Was stimmt, was fehlt, was sollten Sie hinterfragen — und was wir anders sehen.",
    deliverables: [
      "Unabhängiger Review-Bericht",
      "Bewertung der Methodik und Annahmen",
      "Identifizierte Risiken und blinde Flecken",
      "Handlungsempfehlungen",
    ],
  },
  {
    nr: "04",
    title: "Management-Briefing",
    label: "60 Minuten",
    description:
      "Persönliche Präsentation der Ergebnisse für Ihre Entscheidungsträger. Klartext, keine PowerPoint-Schlachten.",
    deliverables: [
      "Executive Summary",
      "Persönliches Briefing",
      "Q&A mit Entscheidungsträgern",
      "Dokumentierte Empfehlungen",
    ],
  },
];

const differentiators = [
  {
    title: "Unabhängig",
    text: "Keine Interessenkonflikte. Wir verkaufen keine Folgemandate aus dem Review — wir liefern eine ehrliche Einschätzung.",
  },
  {
    title: "AI-gestützt",
    text: "Hunderte Seiten in Stunden statt Wochen. KI findet Muster und Inkonsistenzen, die manuell untergehen.",
  },
  {
    title: "Erfahrungsbasiert",
    text: "20+ Jahre in Beratung, Audit und Geschäftsleitung. Wir wissen, wie gute Arbeit aussieht — und wie schlechte sich tarnt.",
  },
  {
    title: "Entscheidungsorientiert",
    text: "Kein akademischer Report. Klare Aussagen: belastbar oder nicht, Risiko oder Chance, handeln oder warten.",
  },
];

export default function SecondOpinionPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide"
          >
            JDM
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="/#services"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors hidden md:inline"
            >
              Leistungen
            </a>
            <Link
              href="/blog"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Blog
            </Link>
            <a
              href="#kontakt"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Kontakt
            </a>
            <Link
              href="/en/second-opinion"
              className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              EN
            </Link>
          </div>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Ihr Arzt hat eine Diagnose.
              <br />
              <span className="text-gold">Sie holen sich eine zweite Meinung.</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Ihr Berater hat geliefert. Ihre Due Diligence ist fertig.
              Ihr Audit liegt vor. Aber können Sie sich darauf verlassen?
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Wir prüfen, was andere liefern. Unabhängig, AI-gestützt, auf den Punkt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#vorgehen"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                So funktioniert es
              </a>
              <a
                href="#kontakt"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Erstgespräch vereinbaren
              </a>
            </div>
          </div>
        </section>

        {/* Use Cases */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Wann Sie uns brauchen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Vertrauen ist gut. Prüfen ist besser.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="p-8 border border-navy-lighter rounded-sm"
                >
                  <span className="text-3xl mb-4 block">{u.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                    {u.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="vorgehen" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Vorgehen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Von der Frage zum Ergebnis
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Klar strukturiert, individuell zugeschnitten. Scope und Kosten besprechen wir im Erstgespräch — kostenlos und unverbindlich.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((s) => (
                <div
                  key={s.nr}
                  className="p-6 border border-navy-lighter rounded-sm"
                >
                  <span className="text-slate/30 font-[family-name:var(--font-heading)] text-3xl font-light">
                    {s.nr}
                  </span>
                  <h4 className="text-cream font-medium mt-3 mb-1">
                    {s.title}
                  </h4>
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-3">
                    {s.label}
                  </p>
                  <p className="text-slate text-xs leading-relaxed mb-4">
                    {s.description}
                  </p>
                  <ul className="space-y-1">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-1.5 text-xs text-slate/80"
                      >
                        <span className="text-gold/60 mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Warum wir
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Was uns unterscheidet
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {differentiators.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <span className="text-gold text-xl mt-1">→</span>
                  <div>
                    <h3 className="text-cream font-medium mb-1">{d.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Trust */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Wer dahinter steht
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Jens Druckenmüller
              </h2>
            </div>

            <div className="text-center space-y-5 text-slate leading-relaxed max-w-2xl mx-auto">
              <p>
                Über 20 Jahre Erfahrung in Unternehmensberatung, Internal Audit
                und Geschäftsleitung — zuletzt als Direktor und Generalsekretär
                eines luxemburgischen Staatsunternehmens.
              </p>
              <p>
                Ich kenne die Perspektive des Beraters und die des
                Auftraggebers. Ich weiß, was ein gutes Gutachten ausmacht — und
                wo die typischen Schwachstellen liegen.
              </p>
              <p className="text-cream/60 text-sm italic">
                Standorte: Luxemburg · United Arab Emirates
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="kontakt" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Nächster Schritt
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                30 Minuten, keine Verpflichtung. Sie schildern die Situation,
                wir sagen Ihnen ehrlich, ob ein Review sinnvoll ist.
              </p>
            </div>

            {/* Calendly placeholder */}
            <div className="mb-16 p-12 border border-dashed border-navy-lighter rounded-sm text-center">
              <p className="text-slate text-sm mb-4">
                Calendly-Buchungswidget
              </p>
              <a
                href="#"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Termin wählen
              </a>
              <p className="text-slate/40 text-xs mt-3">
                Wird aktiviert sobald Calendly verbunden ist
              </p>
            </div>

            <div className="text-center">
              <p className="text-slate text-sm mb-2">Oder direkt per E-Mail:</p>
              <a
                href="mailto:jens.druckenmueller@jdm-advisory.com?subject=Second%20Opinion%20Erstgespr%C3%A4ch"
                className="inline-block text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest"
              >
                jens.druckenmueller@jdm-advisory.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Disclaimer */}
      <section className="py-8 border-t border-navy-lighter">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate/40 text-xs leading-relaxed text-center">
            <strong className="text-slate/50">Hinweis:</strong> Die Inhalte dieser Seite dienen
            der allgemeinen Information und stellen keine Rechtsberatung dar. Für
            verbindliche rechtliche Einschätzungen wenden Sie sich bitte an einen
            spezialisierten Rechtsanwalt. Trotz sorgfältiger Recherche übernehmen
            wir keine Haftung für die Richtigkeit, Vollständigkeit und Aktualität
            der bereitgestellten Informationen.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/"
            className="text-slate/50 text-xs hover:text-slate transition-colors"
          >
            ← Zurück zu jdm-advisory.com
          </Link>
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
        </div>
      </footer>
    </>
  );
}
