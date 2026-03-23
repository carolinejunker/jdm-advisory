const milestones = [
  {
    period: "2004 – 2018",
    role: "Unternehmensberatung & Audit",
    detail: "Due Diligence, Internal Audit, General Advisory für internationale Mandanten",
  },
  {
    period: "2018 – 2024",
    role: "Direktor & Generalsekretär",
    detail: "Geschäftsleitung luxemburgischer Staatsunternehmen",
  },
  {
    period: "Seit 2024",
    role: "Verwaltungsratsmandate",
    detail: "Board-Erfahrung in verschiedenen Organisationen",
  },
  {
    period: "2025",
    role: "Firmengründung Dubai",
    detail: "Internationaler Beratungshub in den Vereinigten Arabischen Emiraten",
  },
  {
    period: "2026",
    role: "Unternehmer auf eigene Rechnung",
    detail: "Beratung, digitale Produkte und Services — aus Luxemburg heraus",
  },
];

export default function Track() {
  return (
    <section id="track" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Stationen
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Der Weg hierher
          </h2>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-navy-lighter" />

          <div className="space-y-12">
            {milestones.map((m, i) => (
              <div
                key={m.period}
                className={`relative flex items-start gap-8 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 md:left-1/2 -translate-x-1/2 w-2.5 h-2.5 rounded-full bg-gold mt-2" />

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12 md:text-right" : "md:pl-12"}`}>
                  <p className="text-gold text-sm font-medium mb-1">{m.period}</p>
                  <h3 className="text-cream font-medium mb-1">{m.role}</h3>
                  <p className="text-slate text-sm">{m.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
