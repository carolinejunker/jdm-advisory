const ventures = [
  {
    title: "Equal Pay Compliance",
    subtitle: "EU Pay Transparency Directive 2026",
    description:
      "From initial assessment to full implementation — making sure your organisation is compliant before the June 2026 deadline.",
    href: "/en/equal-pay",
    badge: "New",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
      </svg>
    ),
  },
  {
    title: "Your Second Opinion",
    subtitle: "Independent Reviews & Due Diligence",
    description:
      "The second opinion for private equity, family offices, and executive teams. AI-augmented analysis, human judgement.",
    href: "/en/second-opinion",
    badge: null,
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
];

export default function ServicesEn() {
  return (
    <section id="services" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Services & Products
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            What I&apos;m working on
          </h2>
          <p className="text-slate mt-4 max-w-xl mx-auto">
            Each topic runs deep. Click to learn more.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                Learn more →
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
