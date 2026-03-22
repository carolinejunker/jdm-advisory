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

const holdingChallenges = [
  {
    icon: "📋",
    title: "Mehrfache Berichtspflicht",
    text: "Jede Beteiligungsgesellschaft muss ein eigenes Reporting erstellen — abhängig von der jeweiligen Beschäftigtenzahl. Bei sechs Unternehmen bedeutet das sechs separate Analysen, sechs eigenständige Berichte und sechs individuelle Fristen.",
  },
  {
    icon: "📏",
    title: "Unterschiedliche Unternehmensgrößen",
    text: "Die EU-Richtlinie staffelt Pflichten nach Beschäftigtenzahl (100/150/250). Jedes Unternehmen Ihrer Gruppe kann in eine andere Kategorie fallen — mit unterschiedlichen Fristen, Berichtsintervallen und Anforderungen.",
  },
  {
    icon: "🏭",
    title: "Branchen- und Standortvielfalt",
    text: "Unterschiedliche Industriebereiche — von Elektronik über Pumpen bis zu Barcode-Sicherheit — bedeuten unterschiedliche Vergütungsstrukturen, Job-Grading-Systeme und Marktbenchmarks. Ein einheitlicher Ansatz muss diese Vielfalt abbilden.",
  },
  {
    icon: "🔗",
    title: "Gruppenweite Konsistenz",
    text: "Als Holding müssen Sie sicherstellen, dass die Vergütungssysteme Ihrer Beteiligungsgesellschaften zwar eigenständig, aber nach einheitlichen Standards entwickelt werden — um gruppenweites Compliance-Risiko zu minimieren.",
  },
  {
    icon: "⚡",
    title: "Effizienzvorteil nutzen",
    text: "Bei sechs Einzelgesellschaften lohnt sich ein strukturierter Ansatz besonders: Methodik einmal entwickeln, sechsmal anwenden. Das spart Zeit, Kosten und sichert Qualität über alle Beteiligungen hinweg.",
  },
  {
    icon: "👔",
    title: "Führungskräfte-Vergütung auf Holding-Ebene",
    text: "Die Vergütung von Führungskräften, die auf Holding-Ebene angesiedelt sind, muss ebenfalls transparent und nachvollziehbar gestaltet werden — mit eigenen Kriterien und eigenständiger Dokumentation.",
  },
];

const wissenArticles = [
  {
    title: "EU-Entgelttransparenzrichtlinie 2026: Was Unternehmen jetzt tun müssen",
    description: "Vollständiger Überblick über die Richtlinie: Pflichten, Fristen, Sanktionen und die fünf Schritte, die Sie sofort angehen sollten.",
    href: "/mandanten/obermark/wissen/entgelttransparenzrichtlinie-2026",
    tag: "Grundlagen",
  },
  {
    title: "Entgelt-Gap-Assessment: Gehaltsunterschiede systematisch aufdecken",
    description: "Wie Sie Vergütungsdaten strukturiert analysieren, die 5%-Schwelle verstehen und Ihre Datenbasis richtlinienkonform aufbereiten.",
    href: "/mandanten/obermark/wissen/gap-assessment",
    tag: "Analyse",
  },
  {
    title: "Equal Pay Compliance: Die Checkliste für Geschäftsführer",
    description: "Sieben Sofortmaßnahmen für Geschäftsführer — von der Vertragsprüfung über das Auskunftsrecht bis zur Datenerhebung.",
    href: "/mandanten/obermark/wissen/compliance-checkliste",
    tag: "Umsetzung",
  },
  {
    title: "Vergütungssysteme neu denken: Warum Compliance nicht reicht",
    description: "Das Daimler-Urteil als Weckruf: Warum transparente Vergütungssysteme nicht nur Pflicht, sondern strategischer Vorteil sind.",
    href: "/mandanten/obermark/wissen/vergutungssysteme-neu-denken",
    tag: "Strategie",
  },
  {
    title: "Entgelttransparenz für KMU: Auch kleine Unternehmen müssen handeln",
    description: "Warum die Richtlinie auch für Unternehmen unter 100 Beschäftigten gilt — und wie die pragmatische Umsetzung gelingt.",
    href: "/mandanten/obermark/wissen/entgelttransparenz-kmu",
    tag: "KMU",
  },
];

const faqItems = [
  {
    question: "Ab wann gilt die EU-Entgelttransparenzrichtlinie?",
    answer: "Die Mitgliedstaaten der EU müssen die Richtlinie (EU) 2023/970 bis zum 7. Juni 2026 in nationales Recht umsetzen. Ab diesem Datum gelten die neuen Pflichten — unabhängig davon, ob der jeweilige Mitgliedstaat die Umsetzung fristgerecht abgeschlossen hat. Stand März 2026 hat Deutschland noch keinen Referentenentwurf vorgelegt.",
  },
  {
    question: "Gilt die Richtlinie auch für kleine Unternehmen?",
    answer: "Ja. Die Kernpflichten — Gehaltsangaben in Stellenausschreibungen, das Verbot der Gehaltsfrage, geschlechtsneutrale Stellentitel, transparente Vergütungskriterien und das individuelle Auskunftsrecht — gelten für alle Arbeitgeber, unabhängig von der Unternehmensgröße. Nur die regelmäßigen Berichtspflichten sind nach Beschäftigtenzahl gestaffelt (ab 100 Beschäftigten).",
  },
  {
    question: "Was ist der Paarvergleich nach dem BAG-Urteil?",
    answer: "Das Bundesarbeitsgericht hat am 23.10.2025 (Az. 8 AZR 300/24) entschieden, dass für den Nachweis einer geschlechtsbezogenen Entgeltbenachteiligung ein Paarvergleich genügt. Es reicht, wenn ein einziger Kollege des anderen Geschlechts in gleicher oder gleichwertiger Position besser bezahlt wird, um eine Vermutung der Diskriminierung zu begründen. Kein statistischer Gruppenvergleich erforderlich.",
  },
  {
    question: "Welche Sanktionen drohen bei Verstößen?",
    answer: "Unbegrenzter Schadensersatz ohne Deckelung, automatische Beweislastumkehr bei Transparenzverstößen, wirksame und abschreckende Bußgelder (in Frankreich bereits bis zu 1 % des Jahresumsatzes), möglicher Ausschluss von öffentlichen Aufträgen sowie ein Verbandsklagerecht für Gewerkschaften.",
  },
  {
    question: "Was ist ein Entgelt-Gap-Assessment?",
    answer: "Eine systematische Analyse der Vergütungsstrukturen eines Unternehmens mit dem Ziel, geschlechtsbezogene Entgeltunterschiede zu identifizieren, zu quantifizieren und zu bewerten. Es umfasst die Erhebung aller relevanten Vergütungsdaten, die Bildung von Beschäftigtenkategorien und den Vergleich der Vergütung nach Geschlecht — aufgeschlüsselt nach Grundgehalt, variabler Vergütung und Gesamtvergütung.",
  },
  {
    question: "Ab welchem Gap wird es kritisch?",
    answer: "Nach Art. 10 der Richtlinie wird ein geschlechtsspezifischer Entgeltunterschied von über 5 % in einer Beschäftigtenkategorie kritisch, wenn er nicht durch objektive, geschlechtsneutrale Kriterien gerechtfertigt werden kann. Kann der Gap nicht innerhalb von sechs Monaten behoben oder erklärt werden, ist eine gemeinsame Entgeltbewertung mit dem Betriebsrat verpflichtend.",
  },
  {
    question: "Welche Vergütungsbestandteile zählen zum Entgelt?",
    answer: "Der Entgeltbegriff ist weit gefasst: Grundgehalt, variable Vergütungsbestandteile (Boni, Prämien), Sachleistungen (Dienstwagen, Firmenwohnung), betriebliche Altersvorsorge, Überstundenvergütung, Zuschläge sowie sonstige geldwerte Vorteile (Aktienoptionen, Weiterbildungsbudgets). Ein Gap-Assessment, das nur das Grundgehalt vergleicht, ist nicht richtlinienkonform.",
  },
  {
    question: "Müssen Gehälter in Stellenanzeigen stehen?",
    answer: "Ja. Nach Art. 5 der Richtlinie müssen Bewerber vor dem Vorstellungsgespräch über die Gehaltsspanne oder das Einstiegsgehalt informiert werden. Zusätzlich dürfen Arbeitgeber nicht mehr nach dem bisherigen Gehalt fragen — weder direkt noch indirekt.",
  },
  {
    question: "Ist Verhandlungsgeschick ein Grund für Gehaltsunterschiede?",
    answer: "Nein. Nach der Richtlinie und der BAG-Rechtsprechung ist individuelles Verhandlungsgeschick keine sachliche Rechtfertigung. Verhandlungsstärke korreliert nachweislich mit Geschlecht, Sozialisation und Machtposition. Zulässig sind nur objektive, geschlechtsneutrale Kriterien wie messbare Leistung, einschlägige Berufserfahrung oder nachweisbare Qualifikationen.",
  },
  {
    question: "Was hat das Daimler-Urteil für Arbeitgeber zu bedeuten?",
    answer: "Das BAG-Urteil im Daimler-Fall (Az. 8 AZR 300/24) zeigt: Intransparente Vergütungssysteme sind vor Gericht nicht verteidigbar. Eine einzelne Klage führte zu Forderungen von 420.000 Euro. Das BAG kritisierte das Entgeltsystem als intransparent und nicht an fixen Kriterien orientiert. 90 % der Frauen bei Daimler Trucks lagen unter dem männlichen Median — weitere Klagen folgten.",
  },
  {
    question: "Welche Fristen gelten für das Reporting?",
    answer: "Ab 250 Beschäftigte: Jährliche Berichterstattung ab dem 7. Juni 2027. 150–249 Beschäftigte: Alle 3 Jahre ab dem 7. Juni 2027. 100–149 Beschäftigte: Alle 3 Jahre ab dem 7. Juni 2031. Wichtig: Die Datenbasis für den ersten Bericht ist das Kalenderjahr 2026 — die Datenerhebung muss jetzt vorbereitet werden.",
  },
  {
    question: "Dürfen Mitarbeiter über ihr Gehalt sprechen?",
    answer: "Ja — und das wird ausdrücklich geschützt. Art. 7 Abs. 5 der Richtlinie hebt Gehaltsgeheimhaltungsklauseln auf. Beschäftigte dürfen frei über ihre Vergütung kommunizieren. Vertragliche Klauseln, die dies untersagen, werden unwirksam und sollten proaktiv entfernt werden.",
  },
  {
    question: "Was sind objektive Kriterien für die Vergütung?",
    answer: "Die Richtlinie definiert vier Bewertungskriterien: Kompetenzen (Ausbildung, Berufserfahrung, fachliche und soziale Fähigkeiten), Belastungen (physische, psychische und emotionale Anforderungen), Verantwortung (Entscheidungsbefugnis, Führungs- und Finanzverantwortung) und Arbeitsbedingungen. Art. 4 Abs. 4 verlangt ausdrücklich, dass auch Soft Skills angemessen berücksichtigt werden.",
  },
  {
    question: "Muss der Betriebsrat einbezogen werden?",
    answer: "Ja, und zwar frühzeitig. Bei einem Gender Pay Gap über 5 % ist die gemeinsame Entgeltbewertung mit dem Betriebsrat verpflichtend (Art. 10). Auch die Entwicklung transparenter Vergütungskriterien ist häufig mitbestimmungspflichtig. Frühzeitige Einbindung schafft Kooperation statt Konfrontation.",
  },
  {
    question: "Können Unternehmen von öffentlichen Aufträgen ausgeschlossen werden?",
    answer: "Ja. Art. 24 der Richtlinie ermöglicht den Ausschluss von der Vergabe öffentlicher Aufträge bei Verstößen gegen die Entgelttransparenzpflichten. Für Unternehmen, die regelmäßig an Ausschreibungen teilnehmen, ist Equal Pay Compliance damit nicht nur rechtliche Pflicht, sondern Geschäftsvoraussetzung.",
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
              href="#wissen"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors hidden md:inline"
            >
              Wissen
            </a>
            <a
              href="#faq"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors hidden md:inline"
            >
              FAQ
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

        {/* Holding Challenges */}
        <section id="holding" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Unternehmensgruppen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-6">
                Besondere Herausforderungen
                <br />
                <span className="text-gold">für Ihre Holding-Struktur</span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Bei einer Gruppe mit sechs eigenständigen Beteiligungsgesellschaften
                multipliziert sich die Komplexität der Entgelttransparenzrichtlinie.
                Wir verstehen diese Herausforderungen — und haben den Ansatz, sie
                effizient zu lösen.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {holdingChallenges.map((c) => (
                <div
                  key={c.title}
                  className="p-6 border border-gold/15 bg-navy/40 rounded-sm"
                >
                  <span className="text-2xl mb-3 block">{c.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream mb-2">
                    {c.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{c.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Wissensbereich */}
        <section id="wissen" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Hintergrundwissen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-6">
                Ressourcen zur
                <br />
                <span className="text-gold">Entgelttransparenzrichtlinie</span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Fundierte Analysen zu den wichtigsten Aspekten der Richtlinie —
                von den rechtlichen Grundlagen bis zur praktischen Umsetzung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {wissenArticles.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  className="group p-6 border border-navy-lighter hover:border-gold/30 rounded-sm transition-all duration-300 flex flex-col"
                >
                  <span className="text-gold/60 text-xs uppercase tracking-widest mb-3">
                    {a.tag}
                  </span>
                  <h3 className="font-[family-name:var(--font-heading)] text-lg text-cream group-hover:text-gold transition-colors mb-3 flex-grow">
                    {a.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed mb-4">
                    {a.description}
                  </p>
                  <span className="text-gold text-sm group-hover:translate-x-1 transition-transform inline-block">
                    Artikel lesen →
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Häufige Fragen
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                FAQ zur Entgelttransparenzrichtlinie
              </h2>
            </div>

            <div className="space-y-3">
              {faqItems.map((item, i) => (
                <details
                  key={i}
                  className="group border border-navy-lighter rounded-sm overflow-hidden"
                >
                  <summary className="flex items-center justify-between cursor-pointer p-5 hover:bg-navy-light/20 transition-colors list-none [&::-webkit-details-marker]:hidden">
                    <span className="text-cream text-sm md:text-base font-medium pr-4">
                      {item.question}
                    </span>
                    <span className="text-gold text-lg flex-shrink-0 group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-slate text-sm leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </details>
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
        <section id="kontakt" className="py-24 md:py-32 bg-navy-light/30">
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
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
        </div>
      </footer>
    </>
  );
}
