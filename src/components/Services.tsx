const ventures = [
  {
    title: "Equal Pay Compliance",
    subtitle: "EU-Entgelttransparenzrichtlinie 2026",
    description:
      "Von der Bestandsaufnahme bis zur vollständigen Implementierung — damit Ihr Unternehmen bis Juni 2026 compliant ist.",
    href: "/equal-pay",
    badge: "Neu",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Your Second Opinion",
    subtitle: "Unabhängige Reviews & Due Diligence",
    description:
      "Die zweite Meinung für Private Equity, Family Offices und Geschäftsleitungen. AI-gestützte Analyse, menschliches Urteil.",
    href: "/second-opinion",
    badge: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    title: "EU AI Act Readiness",
    subtitle: "KI-Governance für Unternehmen",
    description:
      "Erste Pflichten gelten bereits. Wir helfen bei KI-Inventur, Readiness-Assessment und Governance-Aufbau — praxisnah und verständlich.",
    href: "/ai-act",
    badge: "Neu",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 00.659 1.591L19 14.5M14.25 3.104c.251.023.501.05.75.082M19 14.5l-2.47 2.47a2.25 2.25 0 01-1.591.659H9.061a2.25 2.25 0 01-1.591-.659L5 14.5m14 0V17a2.25 2.25 0 01-2.25 2.25H7.25A2.25 2.25 0 015 17v-2.5" />
      </svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Leistungen & Produkte
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Woran ich gerade arbeite
          </h2>
          <p className="text-slate mt-4 max-w-xl mx-auto">
            Jedes Thema hat seine eigene Tiefe. Erfahren Sie mehr.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {ventures.map((v) => (
            <a
              key={v.title}
              href={v.href}
              className="group relative p-8 border border-navy-lighter hover:border-gold/30 transition-all duration-300 rounded-sm block"
            >
              {v.badge && (
                <span className="absolute top-4 right-4 text-[10px] uppercase tracking-widest text-gold bg-gold/10 px-2 py-1 rounded-sm">
                  {v.badge}
                </span>
              )}
              <div className="text-gold mb-4">{v.icon}</div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-1">
                {v.title}
              </h3>
              <p className="text-gold/60 text-xs uppercase tracking-wider mb-4">
                {v.subtitle}
              </p>
              <p className="text-slate text-sm leading-relaxed">
                {v.description}
              </p>
              <div className="mt-6 text-gold text-sm uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Mehr erfahren →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
