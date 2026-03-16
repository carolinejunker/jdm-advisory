import Link from "next/link";

const risks = [
  {
    icon: "⚖️",
    title: "Unbegrenzter Schadensersatz",
    text: "Volle Nachzahlung inkl. Boni, Sachleistungen, immaterieller Schaden und Zinsen — ohne Obergrenze.",
  },
  {
    icon: "🔄",
    title: "Beweislastumkehr",
    text: "Nicht der Beschäftigte muss Diskriminierung beweisen — Sie müssen beweisen, dass keine vorliegt.",
  },
  {
    icon: "📊",
    title: "Paarvergleich (BAG 2025)",
    text: "Ein einziger besser bezahlter Kollege des anderen Geschlechts genügt als Benchmark — Anpassung auf dessen Gehalt.",
  },
  {
    icon: "🚫",
    title: "Vergabeausschluss",
    text: "Ausschluss von öffentlichen Aufträgen bei Verstoß gegen Entgeltgleichheitspflichten.",
  },
];

const steps = [
  {
    nr: "01",
    title: "Kostenloses Erstgespräch",
    price: "0 €",
    duration: "15 Minuten",
    description:
      "Wir lernen uns kennen, ich verschaffe mir einen ersten Überblick über Ihre Situation. Im Anschluss erhalten Sie eine schriftliche Zusammenfassung und einen Vorschlag für die weitere Zusammenarbeit.",
    deliverables: [
      "Erste Einschätzung Ihres Handlungsbedarfs",
      "Schriftliche Zusammenfassung",
      "Vorschlag nächste Schritte",
    ],
    cta: "Erstgespräch buchen",
    highlight: false,
  },
  {
    nr: "02",
    title: "Überblicks-Workshop",
    price: "298 €",
    duration: "90 Minuten",
    description:
      "Sie erfahren alles, was Sie über die EU-Entgelttransparenzrichtlinie wissen müssen: Pflichten, Fristen, Risiken und erste Quick Wins für Ihr Unternehmen.",
    deliverables: [
      "Kompakter Überblick über alle Pflichten",
      "Fristen und Zeitplan für Ihr Unternehmen",
      "Risikobewertung auf einen Blick",
      "Erste Handlungsempfehlungen",
    ],
    cta: "Workshop buchen",
    highlight: false,
  },
  {
    nr: "03",
    title: "Gap-Assessment & Arbeitssitzung",
    price: "1.998 €",
    duration: "Halber Tag + Nachbereitung",
    description:
      "Wir gehen Ihre Vergütungsstruktur systematisch durch. Sie erhalten ein vollständiges Gap-Assessment, identifizierte Risiken, Quick Wins und einen konkreten Maßnahmenplan.",
    deliverables: [
      "Vollständiges Gap-Assessment (18 Prüfpunkte)",
      "Risikobewertung pro Bereich (Ampelsystem)",
      "Konkreter Maßnahmenplan mit Prioritäten",
      "Quick Wins und To-Dos als schriftliches Dokument",
      "Begründungskatalog für Entgeltunterschiede",
    ],
    cta: "Assessment buchen",
    highlight: true,
  },
  {
    nr: "04",
    title: "Implementierungsbegleitung",
    price: "Individuell",
    duration: "Nach Komplexität",
    description:
      "Von der Bestandsaufnahme bis zur vollständigen Compliance: Stellenbewertungssystem, Reporting, Betriebsratseinbindung, Schulung der Führungskräfte.",
    deliverables: [
      "Geschlechtsneutrales Stellenbewertungssystem",
      "Vorbereitung GPG-Reporting (7 Kennzahlen)",
      "Auskunftsprozess etablieren",
      "Schulung Führungskräfte & HR",
      "Laufende Begleitung bis zur Compliance",
    ],
    cta: "Angebot anfragen",
    highlight: false,
  },
];

const timeline = [
  { date: "Jetzt", event: "Bestandsaufnahme starten, Geheimhaltungsklauseln prüfen", urgent: true },
  { date: "7. Juni 2026", event: "Richtlinie tritt in Kraft — alle Grundpflichten gelten", urgent: true },
  { date: "7. Juni 2027", event: "Erstes GPG-Reporting (ab 150 Beschäftigte)", urgent: false },
  { date: "7. Juni 2031", event: "Reporting auch für Unternehmen ab 100 Beschäftigte", urgent: false },
];

const pflichten = [
  { text: "Gehaltsspannen in allen Stellenausschreibungen", size: "Alle" },
  { text: "Verbot der Frage nach dem bisherigen Gehalt", size: "Alle" },
  { text: "Individuelles Auskunftsrecht der Beschäftigten", size: "Alle" },
  { text: "Aufhebung von Gehaltsgeheimhaltungsklauseln", size: "Alle" },
  { text: "Gender Pay Gap Reporting (7 Kennzahlen)", size: "Ab 100 MA" },
  { text: "Gemeinsame Entgeltbewertung bei GPG ≥ 5%", size: "Ab 100 MA" },
];

export default function EqualPayPage() {
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
          <a
            href="#kontakt"
            className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
          >
            Kontakt
          </a>
        </div>
      </nav>

      <main>
        {/* Hero */}
        <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden pt-20">
          <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

          <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
            {/* Urgency badge */}
            <div className="inline-block mb-8 px-4 py-2 border border-red-500/30 bg-red-500/10 rounded-sm">
              <p className="text-red-400 text-sm font-medium tracking-wide">
                ⏰ Umsetzungsfrist: 7. Juni 2026 — weniger als 3 Monate
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Equal Pay
              <br />
              <span className="text-gold">Compliance</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Die EU-Entgelttransparenzrichtlinie verändert alles.
              Unbegrenzter Schadensersatz, Beweislastumkehr, Vergabeausschluss.
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Ich begleite Ihr Unternehmen von der Bestandsaufnahme bis zur
              vollständigen Compliance — strukturiert, praxisnah, auf den Punkt.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#produkte"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Leistungen ansehen
              </a>
              <a
                href="#kontakt"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Erstgespräch buchen
              </a>
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-400 text-sm uppercase tracking-[0.3em] mb-4">
                Risiken
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Was Unternehmen droht, die nicht handeln
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {risks.map((r) => (
                <div
                  key={r.title}
                  className="p-8 border border-navy-lighter rounded-sm"
                >
                  <span className="text-3xl mb-4 block">{r.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                    {r.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-12 p-8 border border-red-500/20 bg-red-500/5 rounded-sm text-center">
              <p className="text-cream text-lg font-medium mb-2">
                Deutschland hat einen Gender Pay Gap von 16% — einen der höchsten in der EU.
              </p>
              <p className="text-slate text-sm">
                Das BAG-Urteil vom 23.10.2025 gilt bereits heute. Klagen sind jetzt schon möglich und erfolgreich.
              </p>
            </div>
          </div>
        </section>

        {/* Pflichten */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Pflichten
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Was auf Sie zukommt
              </h2>
              <p className="text-slate mt-4">
                Die Grundpflichten gelten für <strong className="text-cream">alle Unternehmen</strong> — unabhängig von der Größe.
              </p>
            </div>

            <div className="space-y-4">
              {pflichten.map((p) => (
                <div
                  key={p.text}
                  className="flex items-center justify-between p-5 border border-navy-lighter rounded-sm"
                >
                  <div className="flex items-center gap-4">
                    <span className="text-gold">✓</span>
                    <span className="text-cream text-sm">{p.text}</span>
                  </div>
                  <span className="text-xs uppercase tracking-widest text-gold/60 whitespace-nowrap ml-4">
                    {p.size}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Zeitplan
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Kritische Fristen
              </h2>
            </div>

            <div className="relative">
              <div className="absolute left-4 top-0 bottom-0 w-px bg-navy-lighter" />
              <div className="space-y-8">
                {timeline.map((t) => (
                  <div key={t.date} className="relative flex items-start gap-6 ml-4">
                    <div
                      className={`absolute left-0 -translate-x-1/2 w-3 h-3 rounded-full mt-1.5 ${
                        t.urgent ? "bg-red-400" : "bg-gold"
                      }`}
                    />
                    <div className="ml-6">
                      <p
                        className={`text-sm font-medium mb-1 ${
                          t.urgent ? "text-red-400" : "text-gold"
                        }`}
                      >
                        {t.date}
                      </p>
                      <p className="text-cream text-sm">{t.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Products */}
        <section id="produkte" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Leistungen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Von der Ersteinschätzung bis zur Compliance
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Vier Stufen — Sie entscheiden, wie tief wir gehen.
                Jede Stufe baut auf der vorherigen auf.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {steps.map((s) => (
                <div
                  key={s.nr}
                  className={`relative p-8 border rounded-sm ${
                    s.highlight
                      ? "border-gold/40 bg-gold/5"
                      : "border-navy-lighter"
                  }`}
                >
                  {s.highlight && (
                    <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-sm">
                      Empfohlen
                    </span>
                  )}

                  <span className="text-gold/30 font-[family-name:var(--font-heading)] text-4xl font-light">
                    {s.nr}
                  </span>

                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mt-4 mb-1">
                    {s.title}
                  </h3>

                  <div className="flex items-baseline gap-3 mb-4">
                    <span className="text-gold text-2xl font-medium">
                      {s.price}
                    </span>
                    <span className="text-slate text-xs uppercase tracking-wider">
                      {s.duration}
                    </span>
                  </div>

                  <p className="text-slate text-sm leading-relaxed mb-6">
                    {s.description}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {s.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate"
                      >
                        <span className="text-gold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>

                  <a
                    href="#kontakt"
                    className={`inline-block text-sm uppercase tracking-widest px-6 py-2.5 transition-all duration-300 ${
                      s.highlight
                        ? "bg-gold text-navy hover:bg-gold-light"
                        : "border border-gold/40 text-gold hover:bg-gold hover:text-navy"
                    }`}
                  >
                    {s.cta}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About / Trust */}
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
                Über 20 Jahre Erfahrung in Unternehmensberatung, Internal Audit und
                Geschäftsleitung — zuletzt als Direktor und Generalsekretär eines
                luxemburgischen Staatsunternehmens.
              </p>
              <p>
                Das Thema Equal Pay Compliance verbindet meine Expertise in
                Compliance, Audit und Unternehmensführung. Ich kenne die
                Anforderungen aus Unternehmenssicht und weiß, was in der Praxis
                funktioniert.
              </p>
              <p className="text-cream font-medium">
                Aktuell begleite ich erste Pilotprojekte zur Implementierung
                der EU-Entgelttransparenzrichtlinie.
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
                Kostenloses Erstgespräch
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                15 Minuten. Keine Verpflichtung. Wir klären, wo Sie stehen und
                was der sinnvollste nächste Schritt ist.
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
                href="mailto:jens@jdm-advisory.com?subject=Equal%20Pay%20Erstgespr%C3%A4ch"
                className="inline-block text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest"
              >
                jens@jdm-advisory.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="text-slate/50 text-xs hover:text-slate transition-colors"
            >
              ← Zurück zu jdm-advisory.com
            </Link>
          </div>
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
        </div>
      </footer>
    </>
  );
}
