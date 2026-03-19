import Link from "next/link";

const challenges = [
  {
    icon: "📋",
    title: "KI-Kompetenzpflicht",
    text: "Seit Februar 2025 müssen alle Unternehmen, die KI einsetzen, die KI-Kompetenz ihrer Mitarbeiter sicherstellen. Die meisten wissen das nicht.",
    tag: "Gilt bereits",
  },
  {
    icon: "🔍",
    title: "Transparenzpflichten",
    text: "Ab August 2026: Wer KI-Systeme einsetzt, die mit Menschen interagieren, muss dies offenlegen. Wer KI-generierte Inhalte veröffentlicht, muss das kennzeichnen.",
    tag: "Ab Aug 2026",
  },
  {
    icon: "⚠️",
    title: "Hochrisiko-Bereiche",
    text: "KI im Recruiting, in der Leistungsbewertung, bei Kreditentscheidungen oder in der Versicherung — hier gelten die strengsten Auflagen.",
    tag: "Ab Aug 2026",
  },
  {
    icon: "🚫",
    title: "Verbotene Praktiken",
    text: "Emotionserkennung am Arbeitsplatz, Social Scoring, manipulative KI — bereits verboten seit Februar 2025.",
    tag: "Gilt bereits",
  },
];

const services = [
  {
    nr: "01",
    title: "Erstgespräch",
    label: "Kostenlos · 30 Minuten",
    description:
      "Wo steht Ihr Unternehmen beim Thema KI? Wir verschaffen uns gemeinsam einen Überblick und klären, welche Schritte sinnvoll sind.",
    deliverables: [
      "Erste Einschätzung Ihrer Situation",
      "Überblick über relevante Pflichten",
      "Vorschlag für nächste Schritte",
    ],
  },
  {
    nr: "02",
    title: "AI Act Awareness Workshop",
    label: "90 Minuten",
    description:
      "Was bedeutet der EU AI Act für Ihr Unternehmen? Ein kompakter Workshop für Geschäftsleitung und Führungskräfte — praxisnah, verständlich, ohne Juristendeutsch.",
    deliverables: [
      "Überblick: Risikoklassen, Pflichten, Fristen",
      "Relevanz für Ihre Branche und Ihre KI-Nutzung",
      "Erste Handlungsempfehlungen",
      "Beitrag zur KI-Kompetenzpflicht (Art. 4)",
    ],
  },
  {
    nr: "03",
    title: "KI-Readiness-Assessment",
    label: "Halber Tag + Nachbereitung",
    description:
      "Systematische Bestandsaufnahme: Welche KI-Systeme setzen Sie ein? In welche Risikoklasse fallen sie? Wo sehen wir Handlungsbedarf?",
    deliverables: [
      "KI-Inventur aller eingesetzten Systeme",
      "Zuordnung zu Risikoklassen",
      "Handlungsfelder mit Ampelbewertung",
      "Empfehlungen für nächste Schritte",
    ],
  },
  {
    nr: "04",
    title: "Governance-Aufbau & Implementierung",
    label: "Individuell",
    description:
      "Wir helfen Ihnen, die organisatorischen Strukturen aufzubauen: Verantwortlichkeiten, Prozesse, Dokumentation, Schulungskonzepte — damit KI-Governance im Alltag funktioniert.",
    deliverables: [
      "KI-Governance-Framework",
      "Dokumentations- und Monitoring-Prozesse",
      "Schulungskonzept für Mitarbeiter",
      "Human-Oversight-Prozesse für Hochrisiko-Systeme",
    ],
  },
];

const differentiators = [
  {
    title: "Praxis statt Paragrafen",
    text: "Wir übersetzen Regulierung in operative Maßnahmen. Keine Gutachten, die im Schrank verstauben — sondern Prozesse, die im Alltag funktionieren.",
  },
  {
    title: "Unternehmensberatung, nicht Rechtsberatung",
    text: "Wir helfen bei der organisatorischen Umsetzung. Für rechtliche Einzelfallbewertungen arbeiten wir mit spezialisierten Kanzleien zusammen.",
  },
  {
    title: "KI aus eigener Erfahrung",
    text: "Wir setzen selbst KI ein — transparent und dokumentiert. Wir verkaufen keine Theorie, sondern teilen, was wir in der Praxis gelernt haben.",
  },
  {
    title: "Brücke zwischen Regulierung und Geschäftsleitung",
    text: "20+ Jahre Erfahrung in Unternehmensberatung und Geschäftsleitung. Wir sprechen die Sprache der Entscheider, nicht der Juristen.",
  },
];

const timeline = [
  { date: "Feb 2025", event: "KI-Kompetenzpflicht + Verbotene Praktiken", urgent: true },
  { date: "Aug 2025", event: "GPAI-Regeln + Nationale Aufsichtsbehörden + Strafregeln", urgent: false },
  { date: "Aug 2026", event: "Transparenzpflichten + Hochrisiko-Regeln + Deployer-Pflichten", urgent: true },
  { date: "Aug 2027", event: "Produktsicherheits-KI + Legacy-GPAI", urgent: false },
];

export default function AIActPage() {
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
              href="/en/ai-act"
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
            <div className="inline-block mb-8 px-4 py-2 border border-red-500/30 bg-red-500/10 rounded-sm">
              <p className="text-red-400 text-sm font-medium tracking-wide">
                ⏰ KI-Kompetenzpflicht gilt bereits seit Februar 2025
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Sie nutzen KI.
              <br />
              <span className="text-gold">Die EU reguliert sie.</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Der EU AI Act ist das weltweit erste umfassende KI-Gesetz.
              Erste Pflichten gelten bereits — der Rest kommt im August 2026.
              Betroffen ist jedes Unternehmen, das KI einsetzt.
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Wir helfen Ihnen, die organisatorische Umsetzung in den Griff zu bekommen.
              Strukturiert, praxisnah, verständlich.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#leistungen"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Leistungen ansehen
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

        {/* Challenges */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Was auf Sie zukommt
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Der AI Act betrifft Ihr Unternehmen — jetzt
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="relative p-8 border border-navy-lighter rounded-sm"
                >
                  <span className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${
                    c.tag === "Gilt bereits"
                      ? "text-red-400 bg-red-500/10"
                      : "text-gold bg-gold/10"
                  }`}>
                    {c.tag}
                  </span>
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                    {c.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>

            {/* Timeline */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
              {timeline.map((t) => (
                <div
                  key={t.date}
                  className={`p-4 border rounded-sm text-center ${
                    t.urgent
                      ? "border-red-500/20 bg-red-500/5"
                      : "border-navy-lighter"
                  }`}
                >
                  <p
                    className={`text-sm font-medium mb-1 ${
                      t.urgent ? "text-red-400" : "text-gold"
                    }`}
                  >
                    {t.date}
                  </p>
                  <p className="text-slate text-xs">{t.event}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Penalties */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-400 text-sm uppercase tracking-[0.3em] mb-4">
              Bußgeldrahmen
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream leading-tight mb-6">
              Bis zu <span className="text-gold">35 Mio. €</span> oder{" "}
              <span className="text-gold">7 %</span> des weltweiten Jahresumsatzes
            </h2>
            <p className="text-slate max-w-2xl mx-auto mb-4">
              Die Sanktionen des AI Acts orientieren sich an der DSGVO — mit teils
              noch höheren Obergrenzen. Für KMU gelten reduzierte Sätze.
            </p>
            <p className="text-slate/60 text-sm max-w-xl mx-auto">
              Die Höhe hängt von der Art des Verstoßes, der Unternehmensgröße und
              der Kooperationsbereitschaft mit den Behörden ab.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="leistungen" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Leistungen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Von der Bestandsaufnahme bis zur Umsetzung
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Strategische Unternehmensberatung zur KI-Governance. Scope und
                Kosten besprechen wir im Erstgespräch — kostenlos und unverbindlich.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {services.map((s) => (
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
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Unser Ansatz
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

        {/* About */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Ihr Berater
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
                Ich kenne Regulierung aus der Perspektive des Beraters und aus
                der des Unternehmens, das sie umsetzen muss. Der AI Act verbindet
                Technologie, Governance und Unternehmensführung — genau mein
                Terrain.
              </p>
              <p className="text-cream/60 text-sm italic">
                Standorte: Luxemburg · United Arab Emirates
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="kontakt" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Nächster Schritt
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Lassen Sie uns sprechen
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                30 Minuten, keine Verpflichtung. Wir verschaffen uns gemeinsam
                einen Überblick und klären, wo Sie stehen.
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
                href="mailto:jens.druckenmueller@jdm-advisory.com?subject=AI%20Act%20Erstgespr%C3%A4ch"
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
            der allgemeinen Information und stellen keine Rechtsberatung dar. JDM Advisory erbringt
            strategische Unternehmensberatung zur organisatorischen Umsetzung des EU AI Acts — keine
            Rechtsdienstleistungen im Sinne des Rechtsdienstleistungsgesetzes (RDG). Für verbindliche
            rechtliche Einschätzungen empfehlen wir die Hinzuziehung eines spezialisierten Rechtsanwalts.
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
