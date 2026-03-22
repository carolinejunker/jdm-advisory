import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equal Pay Compliance — JDM Advisory",
  description: "EU-Entgelttransparenzrichtlinie: Handlungsbedarf und Umsetzung für Ihr Unternehmen.",
  robots: {
    index: false,
    follow: false,
  },
};

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

const timeline = [
  { date: "Jetzt", event: "Bestandsaufnahme starten", urgent: true },
  { date: "7. Juni 2026", event: "Richtlinie tritt in Kraft — alle Grundpflichten gelten", urgent: true },
  { date: "7. Juni 2027", event: "Erstes GPG-Reporting (ab 150 Beschäftigte)", urgent: false },
  { date: "7. Juni 2031", event: "Reporting auch für Unternehmen ab 100 Beschäftigte", urgent: false },
];

const handlungsfelder = [
  {
    nr: "01",
    title: "Bestandsaufnahme & Gap-Assessment",
    description:
      "Systematische Erfassung Ihrer aktuellen Vergütungsstrukturen und -prozesse. Wir identifizieren Lücken gegenüber den Anforderungen der EU-Entgelttransparenzrichtlinie und bewerten Ihr Risikoprofil.",
    deliverables: [
      "Erfassung bestehender Vergütungsstrukturen",
      "Abgleich mit den Anforderungen der EU-Richtlinie",
      "Risikobewertung und Priorisierung",
      "Dokumentation des Ist-Zustands",
    ],
  },
  {
    nr: "02",
    title: "Vergütungsanalyse & Stellenbewertung",
    description:
      "Tiefenanalyse Ihrer Vergütungsdaten und geschlechtsneutrale Bewertung aller Stellen. Wir prüfen Gleichwertigkeit, analysieren Entgeltunterschiede und schaffen die Grundlage für ein transparentes System.",
    deliverables: [
      "Analyse der Entgeltstrukturen nach Geschlecht",
      "Geschlechtsneutrale Stellenbewertung",
      "Prüfung der Gleichwertigkeit von Tätigkeiten",
      "Identifikation und Begründung von Entgeltdifferenzen",
    ],
  },
  {
    nr: "03",
    title: "Systemdesign & Richtlinienentwicklung",
    description:
      "Entwicklung eines transparenten, geschlechtsneutralen Vergütungssystems. Wir gestalten Gehaltsbänder, Karrierestufen und Vergütungsrichtlinien, die den gesetzlichen Anforderungen entsprechen und Ihr Unternehmen als Arbeitgeber stärken.",
    deliverables: [
      "Geschlechtsneutrales Vergütungssystem",
      "Gehaltsbänder und Karrierestufen",
      "Transparente Vergütungsrichtlinie",
      "Regelwerk für Gehaltsanpassungen und variable Vergütung",
    ],
  },
  {
    nr: "04",
    title: "Implementierung, Schulung & Reporting",
    description:
      "Begleitung bei der Umsetzung: Rollout des neuen Systems, Schulung der Führungskräfte, Etablierung von Auskunftsprozessen und Vorbereitung des gesetzlich geforderten Reportings.",
    deliverables: [
      "Umsetzungsbegleitung und Change Management",
      "Schulung von Führungskräften und HR",
      "Etablierung des Auskunftsprozesses",
      "Aufbau des GPG-Reportings",
    ],
  },
];

export default function ObermarkPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <span className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </span>
          <div className="flex items-center gap-6">
            <a
              href="#handlungsfelder"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors hidden md:inline"
            >
              Handlungsfelder
            </a>
            <a
              href="#kontakt"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Kontakt
            </a>
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
                ⏰ EU-Entgelttransparenzrichtlinie — Frist: 7. Juni 2026
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Entgelttransparenz
              <br />
              <span className="text-gold">wird Pflicht.</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Die EU-Entgelttransparenzrichtlinie tritt am 7. Juni 2026 in Kraft.
              Unternehmen müssen geschlechtsneutrale Vergütungsstrukturen nachweisen,
              Auskunftspflichten erfüllen und regelmäßig berichten.
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Wir unterstützen Sie dabei, die Anforderungen strukturiert und
              fristgerecht umzusetzen — von der Bestandsaufnahme bis zum Reporting.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#handlungsfelder"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Handlungsfelder ansehen
              </a>
              <a
                href="#kontakt"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Gespräch vereinbaren
              </a>
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-400 text-sm uppercase tracking-[0.3em] mb-4">
                Warum jetzt handeln
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Was passiert, wenn Sie nichts tun
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

        {/* Handlungsfelder */}
        <section id="handlungsfelder" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Unser Ansatz
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream leading-tight mb-6">
                Vier Handlungsfelder
                <br />
                <span className="text-gold">für Ihre Compliance</span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Wir begleiten Sie ganzheitlich — von der ersten Analyse bis zur
                vollständigen Umsetzung. Jedes Handlungsfeld baut auf dem
                vorherigen auf und kann an Ihre spezifische Situation angepasst werden.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {handlungsfelder.map((h) => (
                <div
                  key={h.nr}
                  className="p-8 border border-gold/20 bg-gold/5 rounded-sm"
                >
                  <span className="text-gold/30 font-[family-name:var(--font-heading)] text-3xl font-light">
                    {h.nr}
                  </span>
                  <h3 className="text-cream font-[family-name:var(--font-heading)] text-xl mt-3 mb-3">
                    {h.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {h.description}
                  </p>
                  <ul className="space-y-1.5">
                    {h.deliverables.map((d) => (
                      <li
                        key={d}
                        className="flex items-start gap-2 text-sm text-slate/80"
                      >
                        <span className="text-gold mt-0.5">✓</span>
                        <span>{d}</span>
                      </li>
                    ))}
                  </ul>
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
                Jens Druckenmüller, LL.M.
              </h2>
            </div>

            <div className="text-center space-y-5 text-slate leading-relaxed max-w-2xl mx-auto">
              <p>
                Über 20 Jahre Erfahrung in Unternehmensberatung, Internal Audit
                und Geschäftsleitung — zuletzt als Direktor und Generalsekretär
                eines luxemburgischen Staatsunternehmens.
              </p>
              <p>
                Wir kennen Vergütungssysteme von beiden Seiten: als Berater, die
                sie prüfen, und aus der Geschäftsleitung, die sie verantwortet. Dieses
                Thema verbindet Compliance, HR-Strategie und
                Unternehmensführung — genau unser Terrain.
              </p>
              <p className="text-cream font-medium">
                Aktuell begleiten wir erste Pilotprojekte zur Implementierung
                moderner Vergütungssysteme im Kontext der EU-Richtlinie.
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
                Lassen Sie uns Ihren konkreten
                <br />
                Handlungsbedarf besprechen
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                Jede Ausgangslage ist anders. In einem ersten Gespräch klären wir,
                wo Sie stehen und welche Schritte für Ihr Unternehmen sinnvoll sind.
              </p>
            </div>

            <div className="text-center">
              <a
                href="mailto:jens.druckenmueller@jdm-advisory.com?subject=Entgelttransparenz%20%E2%80%94%20Gespr%C3%A4chsanfrage"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300 mb-4"
              >
                Gespräch vereinbaren
              </a>
              <p className="text-slate text-sm">
                <a
                  href="mailto:jens.druckenmueller@jdm-advisory.com?subject=Entgelttransparenz%20%E2%80%94%20Gespr%C3%A4chsanfrage"
                  className="text-gold hover:text-gold-light transition-colors tracking-wide"
                >
                  jens.druckenmueller@jdm-advisory.com
                </a>
              </p>
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
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
          <div className="flex items-center gap-4">
            <a
              href="/impressum"
              className="text-slate/50 text-xs hover:text-slate transition-colors"
            >
              Impressum
            </a>
            <a
              href="/datenschutz"
              className="text-slate/50 text-xs hover:text-slate transition-colors"
            >
              Datenschutz
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
