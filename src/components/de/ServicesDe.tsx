const services = [
  {
    title: "Unabhängige Überprüfung",
    description:
      "Gründliche, unvoreingenommene Prüfung von Arbeitsergebnissen externer Berater, Wirtschaftsprüfer und Gutachter. Wir finden, was andere übersehen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Due Diligence Review",
    description:
      "Zweitprüfung von Due-Diligence-Berichten vor Unternehmenskäufen. Annahmen hinterfragen, Vollständigkeit prüfen, Schlussfolgerungen challengen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "KI-gestützte Analyse",
    description:
      "Kombination aus erfahrenem Berater-Urteil und künstlicher Intelligenz zur Erkennung von Inkonsistenzen, Benchmarking und Beschleunigung von Review-Zyklen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: "Internal Audit Beratung",
    description:
      "Strategische Begleitung interner Revisionsfunktionen — vom Framework-Design über Qualitätsbewertungen bis zur Überwachung von Maßnahmenumsetzungen.",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
      </svg>
    ),
  },
];

export default function ServicesDe() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Leistungen
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Wir prüfen, was andere liefern.
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="group p-8 border border-navy-lighter hover:border-gold/30 transition-all duration-300 rounded-sm"
            >
              <div className="text-gold mb-4">{s.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                {s.title}
              </h3>
              <p className="text-slate text-sm leading-relaxed">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
