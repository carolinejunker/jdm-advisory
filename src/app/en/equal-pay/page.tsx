import Link from "next/link";

const risks = [
  {
    icon: "⚖️",
    title: "Unlimited Damages",
    text: "Full back pay including bonuses, benefits in kind, non-material damages and interest — with no cap.",
  },
  {
    icon: "🔄",
    title: "Reversal of Burden of Proof",
    text: "Employees don't have to prove discrimination — you have to prove there is none.",
  },
  {
    icon: "📊",
    title: "Pair Comparison (BAG 2025)",
    text: "A single higher-paid colleague of the other gender is enough as a benchmark — adjustment to their salary level.",
  },
  {
    icon: "🚫",
    title: "Public Procurement Exclusion",
    text: "Exclusion from public tenders for breaching pay equality obligations.",
  },
];

const steps = [
  {
    nr: "01",
    title: "Free Initial Consultation",
    price: "€0",
    duration: "15 minutes",
    description:
      "We get to know each other and I get a first overview of your situation. Afterwards you receive a written summary and a proposal for next steps.",
    deliverables: [
      "Initial assessment of your compliance needs",
      "Written summary",
      "Proposed next steps",
    ],
    cta: "Book a call",
    highlight: false,
  },
  {
    nr: "02",
    title: "Overview Workshop",
    price: "€298",
    duration: "90 minutes",
    description:
      "Everything you need to know about the EU Pay Transparency Directive: obligations, deadlines, risks and first quick wins for your company.",
    deliverables: [
      "Compact overview of all obligations",
      "Deadlines and timeline for your company",
      "Risk assessment at a glance",
      "Initial recommendations",
    ],
    cta: "Book workshop",
    highlight: false,
  },
  {
    nr: "03",
    title: "Gap Assessment & Working Session",
    price: "€1,998",
    duration: "Half day + follow-up",
    description:
      "We systematically review your compensation structure. You receive a complete gap assessment, identified risks, quick wins and a concrete action plan.",
    deliverables: [
      "Complete gap assessment (18 checkpoints)",
      "Risk rating per area (traffic light system)",
      "Concrete action plan with priorities",
      "Quick wins and to-dos as a written document",
      "Justification catalogue for pay differences",
    ],
    cta: "Book assessment",
    highlight: true,
  },
  {
    nr: "04",
    title: "Implementation Support",
    price: "Custom",
    duration: "Based on complexity",
    description:
      "From initial assessment to full compliance: job evaluation system, reporting, works council involvement, management training.",
    deliverables: [
      "Gender-neutral job evaluation system",
      "GPG reporting preparation (7 indicators)",
      "Information request process setup",
      "Management & HR training",
      "Ongoing support until compliance",
    ],
    cta: "Request a quote",
    highlight: false,
  },
];

const timeline = [
  { date: "Now", event: "Start assessment, review confidentiality clauses", urgent: true },
  { date: "7 June 2026", event: "Directive takes effect — all basic obligations apply", urgent: true },
  { date: "7 June 2027", event: "First GPG reporting (from 150 employees)", urgent: false },
  { date: "7 June 2031", event: "Reporting also for companies from 100 employees", urgent: false },
];

const obligations = [
  { text: "Salary ranges in all job postings", size: "All" },
  { text: "Ban on asking about previous salary", size: "All" },
  { text: "Individual right to pay information", size: "All" },
  { text: "Removal of pay secrecy clauses", size: "All" },
  { text: "Gender Pay Gap reporting (7 indicators)", size: "100+ emp." },
  { text: "Joint pay assessment when GPG ≥ 5%", size: "100+ emp." },
];

export default function EqualPayEnPage() {
  return (
    <>
      {/* Nav */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link
            href="/en"
            className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide"
          >
            JDM
          </Link>
          <div className="flex items-center gap-6">
            <a
              href="#contact"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Contact
            </a>
            <Link
              href="/equal-pay"
              className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200"
            >
              DE
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
                ⏰ Deadline: 7 June 2026 — less than 3 months away
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Equal Pay
              <br />
              <span className="text-gold">Compliance</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              The EU Pay Transparency Directive changes everything.
              Unlimited damages, reversal of burden of proof, procurement exclusion.
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              I guide your company from initial assessment to full
              compliance — structured, practical, to the point.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#services"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                View services
              </a>
              <a
                href="#contact"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Book a free call
              </a>
            </div>
          </div>
        </section>

        {/* Risks */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-red-400 text-sm uppercase tracking-[0.3em] mb-4">
                Risks
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                What companies face if they don&apos;t act
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
                Germany has a Gender Pay Gap of 16% — one of the highest in the EU.
              </p>
              <p className="text-slate text-sm">
                The Federal Labour Court ruling of 23 Oct 2025 already applies today. Claims are possible and successful right now.
              </p>
            </div>
          </div>
        </section>

        {/* Obligations */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Obligations
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                What&apos;s coming your way
              </h2>
              <p className="text-slate mt-4">
                The basic obligations apply to <strong className="text-cream">all companies</strong> — regardless of size.
              </p>
            </div>

            <div className="space-y-4">
              {obligations.map((p) => (
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
                Timeline
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Critical deadlines
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

        {/* Services */}
        <section id="services" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Services
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                From initial assessment to full compliance
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Four levels — you decide how deep we go.
                Each level builds on the previous one.
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
                      Recommended
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
                    href="#contact"
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
                Your Advisor
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Jens Druckenmüller
              </h2>
            </div>

            <div className="text-center space-y-5 text-slate leading-relaxed max-w-2xl mx-auto">
              <p>
                Over 20 years of experience in management consulting, internal audit
                and executive management — most recently as Director and Secretary
                General of a Luxembourg state-owned enterprise.
              </p>
              <p>
                Equal Pay Compliance combines my expertise in compliance, audit
                and corporate governance. I understand the requirements from a
                business perspective and know what works in practice.
              </p>
              <p className="text-cream font-medium">
                Currently guiding first pilot projects for the implementation
                of the EU Pay Transparency Directive.
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Next Step
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Free Initial Consultation
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                15 minutes. No obligation. We clarify where you stand and
                what the most sensible next step is.
              </p>
            </div>

            {/* Calendly placeholder */}
            <div className="mb-16 p-12 border border-dashed border-navy-lighter rounded-sm text-center">
              <p className="text-slate text-sm mb-4">
                Calendly booking widget
              </p>
              <a
                href="#"
                className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
              >
                Choose a time
              </a>
              <p className="text-slate/40 text-xs mt-3">
                Will be activated once Calendly is connected
              </p>
            </div>

            <div className="text-center">
              <p className="text-slate text-sm mb-2">Or reach out directly:</p>
              <a
                href="mailto:jens@jdm-advisory.com?subject=Equal%20Pay%20Initial%20Consultation"
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
              href="/en"
              className="text-slate/50 text-xs hover:text-slate transition-colors"
            >
              ← Back to jdm-advisory.com
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
