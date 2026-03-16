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

const complianceSteps = [
  {
    nr: "01",
    title: "Erstgespräch",
    price: "Kostenlos",
    duration: "15 Minuten",
    description:
      "Wir klären, wo Sie stehen und was der sinnvollste nächste Schritt ist. Sie erhalten eine schriftliche Zusammenfassung.",
    deliverables: [
      "Erste Einschätzung Ihres Handlungsbedarfs",
      "Schriftliche Zusammenfassung",
      "Vorschlag nächste Schritte",
    ],
  },
  {
    nr: "02",
    title: "Überblicks-Workshop",
    price: "350 €",
    duration: "90 Minuten",
    description:
      "Alles, was Sie über die EU-Richtlinie wissen müssen: Pflichten, Fristen, Risiken und erste Quick Wins.",
    deliverables: [
      "Kompakter Überblick über alle Pflichten",
      "Fristen und Zeitplan",
      "Risikobewertung auf einen Blick",
      "Erste Handlungsempfehlungen",
    ],
  },
  {
    nr: "03",
    title: "Gap-Assessment",
    price: "2.500 €",
    duration: "Halber Tag + Nachbereitung",
    description:
      "Systematische Prüfung Ihrer Vergütungsstruktur. Sie erhalten einen vollständigen Bericht mit Maßnahmenplan.",
    deliverables: [
      "18-Punkte Gap-Assessment",
      "Risikobewertung (Ampelsystem)",
      "Maßnahmenplan mit Prioritäten",
      "Begründungskatalog für Entgeltunterschiede",
    ],
  },
  {
    nr: "04",
    title: "Compliance-Paket",
    price: "Individuell",
    duration: "Nach Bedarf",
    description:
      "Umsetzung aller Maßnahmen bis zur vollständigen Compliance: Reporting, Prozesse, Dokumentation.",
    deliverables: [
      "Auskunftsprozess etablieren",
      "GPG-Reporting vorbereiten",
      "Arbeitsverträge bereinigen",
      "Schulung Führungskräfte",
    ],
  },
];

const transformSteps = [
  {
    nr: "01",
    title: "Verstehen",
    label: "Strategiegespräch",
    price: "Kostenlos",
    duration: "30 Minuten",
    description:
      "Wo steht Ihr Vergütungssystem heute? Was sind Ihre Ziele als Arbeitgeber? Wir denken über Compliance hinaus.",
    deliverables: [
      "Analyse Ihrer Ausgangslage",
      "Identifikation strategischer Chancen",
      "Roadmap-Vorschlag",
    ],
  },
  {
    nr: "02",
    title: "Aufdecken",
    label: "Vergütungsdiagnose",
    price: "5.000 €",
    duration: "1–2 Wochen",
    description:
      "Tiefenanalyse Ihres gesamten Vergütungssystems: Stellenbewertung, Gehaltsbänder, variable Vergütung, Gleichwertigkeit.",
    deliverables: [
      "Vollständige Vergütungsanalyse",
      "Gleichwertigkeitsbewertung aller Stellen",
      "Benchmark gegen Marktdaten",
      "Schwachstellenbericht mit Handlungsfeldern",
    ],
  },
  {
    nr: "03",
    title: "Gestalten",
    label: "Systemdesign",
    price: "Ab 10.000 €",
    duration: "4–8 Wochen",
    description:
      "Wir designen Ihr neues Vergütungssystem: geschlechtsneutral, transparent, wettbewerbsfähig. Ein System, das Talente anzieht und hält.",
    deliverables: [
      "Geschlechtsneutrales Stellenbewertungssystem",
      "Gehaltsbänder und Karrierestufen",
      "Transparente Vergütungsrichtlinie",
      "Moderne Bonus- und Benefits-Struktur",
    ],
  },
  {
    nr: "04",
    title: "Verankern",
    label: "Implementierung",
    price: "Nach Umfang",
    duration: "3–6 Monate",
    description:
      "Rollout, Schulung, Change Management. Ihr neues System wird gelebt — nicht nur dokumentiert. Compliance kommt automatisch.",
    deliverables: [
      "Implementierung und Rollout",
      "Führungskräfte-Training",
      "Change-Kommunikation",
      "Laufendes Monitoring und Reporting",
      "Compliance als Nebenprodukt ✓",
    ],
  },
];

const benefits = [
  {
    title: "Talente gewinnen",
    text: "Transparente Gehälter in Stellenausschreibungen — selbstbewusst, weil Ihr System sauber ist.",
  },
  {
    title: "Talente halten",
    text: "Keine bösen Überraschungen mehr. Beschäftigte verstehen, warum sie verdienen was sie verdienen.",
  },
  {
    title: "Führungskräfte entlasten",
    text: "Gehaltsentscheidungen auf Basis klarer Kriterien — statt Bauchgefühl und Verhandlungspoker.",
  },
  {
    title: "Arbeitgebermarke stärken",
    text: "Faire Vergütung als USP. Nicht weil Sie müssen, sondern weil Sie es ernst meinen.",
  },
];

const timeline = [
  { date: "Jetzt", event: "Bestandsaufnahme starten", urgent: true },
  { date: "7. Juni 2026", event: "Richtlinie tritt in Kraft — alle Grundpflichten gelten", urgent: true },
  { date: "7. Juni 2027", event: "Erstes GPG-Reporting (ab 150 Beschäftigte)", urgent: false },
  { date: "7. Juni 2031", event: "Reporting auch für Unternehmen ab 100 Beschäftigte", urgent: false },
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
          <div className="flex items-center gap-6">
            <a
              href="#wege"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Leistungen
            </a>
            <a
              href="#kontakt"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Kontakt
            </a>
            <Link
              href="/en/equal-pay"
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
                ⏰ EU-Entgelttransparenzrichtlinie — Frist: 7. Juni 2026
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Equal Pay ist nicht
              <br />
              <span className="text-gold">das Ziel.</span>
              <br />
              Es ist der Anfang.
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Die EU-Richtlinie zwingt Sie zum Handeln.
              Die Frage ist: Haken Sie nur eine Pflicht ab —
              oder nutzen Sie den Moment?
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Andere machen Sie compliant. Ich mache Sie besser.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#wege"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                Zwei Wege ansehen
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

        {/* Risks (compact) */}
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

            {/* Timeline compact */}
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

        {/* THE CHOICE — Two Tracks */}
        <section id="wege" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Zwei Wege
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream leading-tight mb-6">
                Wollen Sie nur compliant sein?
                <br />
                <span className="text-gold">
                  Oder wollen Sie ein modernes Vergütungssystem?
                </span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Beide Wege sind valide. Aber nur einer macht aus einer Pflicht einen
                Wettbewerbsvorteil.
              </p>
            </div>

            {/* Track A: Compliance */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-slate/30" />
                <h3 className="text-slate text-sm uppercase tracking-[0.3em]">
                  Weg A — Compliance
                </h3>
                <div className="flex-1 h-px bg-slate/30" />
              </div>

              <p className="text-slate mb-8 max-w-3xl">
                Sie wollen die Anforderungen der EU-Richtlinie erfüllen, Risiken
                minimieren und schnell handlungsfähig sein. Pragmatisch, effizient,
                auf den Punkt.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {complianceSteps.map((s) => (
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
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-gold text-lg font-medium">
                        {s.price}
                      </span>
                      <span className="text-slate text-xs">{s.duration}</span>
                    </div>
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

              <div className="mt-6 text-center">
                <a
                  href="#kontakt"
                  className="inline-block border border-slate/30 text-slate text-sm uppercase tracking-widest px-6 py-2.5 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  Compliance-Weg starten
                </a>
              </div>
            </div>

            {/* Track B: Transformation */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold/40" />
                <h3 className="text-gold text-sm uppercase tracking-[0.3em]">
                  Weg B — Transformation
                </h3>
                <div className="flex-1 h-px bg-gold/40" />
                <span className="text-[10px] uppercase tracking-widest text-navy bg-gold px-2 py-1 rounded-sm">
                  Empfohlen
                </span>
              </div>

              <p className="text-cream mb-8 max-w-3xl text-lg">
                Sie nutzen die Richtlinie als Anlass, Vergütung grundlegend neu zu
                denken. Fair, transparent, wettbewerbsfähig — ein System, das Talente
                anzieht und hält. Compliance kommt automatisch.
              </p>

              <div className="grid md:grid-cols-4 gap-6">
                {transformSteps.map((s) => (
                  <div
                    key={s.nr}
                    className="p-6 border border-gold/20 bg-gold/5 rounded-sm"
                  >
                    <span className="text-gold/30 font-[family-name:var(--font-heading)] text-3xl font-light">
                      {s.nr}
                    </span>
                    <p className="text-gold text-xs uppercase tracking-wider mt-2">
                      {s.title}
                    </p>
                    <h4 className="text-cream font-medium mt-1 mb-1">
                      {s.label}
                    </h4>
                    <div className="flex items-baseline gap-2 mb-3">
                      <span className="text-gold text-lg font-medium">
                        {s.price}
                      </span>
                      <span className="text-slate text-xs">{s.duration}</span>
                    </div>
                    <p className="text-slate text-xs leading-relaxed mb-4">
                      {s.description}
                    </p>
                    <ul className="space-y-1">
                      {s.deliverables.map((d) => (
                        <li
                          key={d}
                          className="flex items-start gap-1.5 text-xs text-slate/80"
                        >
                          <span className="text-gold mt-0.5">✓</span>
                          <span>{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              <div className="mt-6 text-center">
                <a
                  href="#kontakt"
                  className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-gold-light transition-all duration-300"
                >
                  Transformations-Weg starten
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits — Why Transform */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Warum Transformation
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Was ein modernes Vergütungssystem Ihnen bringt
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {benefits.map((b) => (
                <div key={b.title} className="flex gap-4">
                  <span className="text-gold text-xl mt-1">→</span>
                  <div>
                    <h3 className="text-cream font-medium mb-1">{b.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {b.text}
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
                Ich kenne Vergütungssysteme von beiden Seiten: als Berater, der
                sie prüft, und als Geschäftsleiter, der sie verantwortet. Dieses
                Thema verbindet Compliance, HR-Strategie und
                Unternehmensführung — genau mein Terrain.
              </p>
              <p className="text-cream font-medium">
                Aktuell begleite ich erste Pilotprojekte zur Implementierung
                moderner Vergütungssysteme im Kontext der EU-Richtlinie.
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
                Egal ob Compliance oder Transformation — alles beginnt mit einem
                Gespräch. 15 Minuten, keine Verpflichtung.
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
