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

const complianceSteps = [
  {
    nr: "01",
    title: "Initial Consultation",
    price: "Free",
    duration: "15 minutes",
    description:
      "We clarify where you stand and what the most sensible next step is. You receive a written summary.",
    deliverables: [
      "Initial assessment of your needs",
      "Written summary",
      "Proposed next steps",
    ],
  },
  {
    nr: "02",
    title: "Overview Workshop",
    price: "€350",
    duration: "90 minutes",
    description:
      "Everything you need to know about the EU Directive: obligations, deadlines, risks and first quick wins.",
    deliverables: [
      "Compact overview of all obligations",
      "Deadlines and timeline",
      "Risk assessment at a glance",
      "Initial recommendations",
    ],
  },
  {
    nr: "03",
    title: "Gap Assessment",
    price: "€2,500",
    duration: "Half day + follow-up",
    description:
      "Systematic review of your compensation structure. You receive a complete report with action plan.",
    deliverables: [
      "18-point gap assessment",
      "Risk rating (traffic light system)",
      "Action plan with priorities",
      "Justification catalogue for pay differences",
    ],
  },
  {
    nr: "04",
    title: "Compliance Package",
    price: "Custom",
    duration: "As needed",
    description:
      "Implementation of all measures to achieve full compliance: reporting, processes, documentation.",
    deliverables: [
      "Information request process setup",
      "GPG reporting preparation",
      "Employment contract review",
      "Management training",
    ],
  },
];

const transformSteps = [
  {
    nr: "01",
    title: "Understand",
    label: "Strategy Session",
    price: "Free",
    duration: "30 minutes",
    description:
      "Where does your compensation system stand today? What are your goals as an employer? We think beyond compliance.",
    deliverables: [
      "Analysis of your starting position",
      "Identification of strategic opportunities",
      "Roadmap proposal",
    ],
  },
  {
    nr: "02",
    title: "Uncover",
    label: "Compensation Diagnosis",
    price: "From €5,000",
    duration: "1–2 weeks",
    description:
      "Deep analysis of your entire compensation system: job evaluation, salary bands, variable pay, equivalence.",
    deliverables: [
      "Complete compensation analysis",
      "Equivalence assessment of all roles",
      "Benchmark against market data",
      "Vulnerability report with action areas",
    ],
  },
  {
    nr: "03",
    title: "Design",
    label: "System Design",
    price: "From €10,000",
    duration: "4–8 weeks",
    description:
      "We design your new compensation system: gender-neutral, transparent, competitive. A system that attracts and retains talent.",
    deliverables: [
      "Gender-neutral job evaluation system",
      "Salary bands and career levels",
      "Transparent compensation policy",
      "Modern bonus and benefits structure",
    ],
  },
  {
    nr: "04",
    title: "Embed",
    label: "Implementation",
    price: "Based on scope",
    duration: "3–6 months",
    description:
      "Rollout, training, change management. Your new system is lived — not just documented. Compliance comes automatically.",
    deliverables: [
      "Implementation and rollout",
      "Management training",
      "Change communication",
      "Ongoing monitoring and reporting",
      "Compliance as a by-product ✓",
    ],
  },
];

const benefits = [
  {
    title: "Win Talent",
    text: "Transparent salaries in job postings — confidently, because your system is sound.",
  },
  {
    title: "Retain Talent",
    text: "No more unpleasant surprises. Employees understand why they earn what they earn.",
  },
  {
    title: "Empower Leaders",
    text: "Salary decisions based on clear criteria — not gut feeling and negotiation poker.",
  },
  {
    title: "Strengthen Your Brand",
    text: "Fair pay as a USP. Not because you have to, but because you mean it.",
  },
];

const timeline = [
  { date: "Now", event: "Start assessment", urgent: true },
  { date: "7 June 2026", event: "Directive takes effect — all basic obligations apply", urgent: true },
  { date: "7 June 2027", event: "First GPG reporting (from 150 employees)", urgent: false },
  { date: "7 June 2031", event: "Reporting also for companies from 100 employees", urgent: false },
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
              href="/en#services"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors hidden md:inline"
            >
              Services
            </a>
            <Link
              href="/en/blog"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Insights
            </Link>
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
                ⏰ EU Pay Transparency Directive — Deadline: 7 June 2026
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Equal Pay is not
              <br />
              <span className="text-gold">the goal.</span>
              <br />
              It&apos;s the beginning.
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              The EU Directive forces you to act.
              The question is: Do you just tick a box —
              or do you seize the moment?
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              Others make you compliant. I make you better.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#paths"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                See both paths
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
                Why act now
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                What happens if you do nothing
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
        <section id="paths" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Two Paths
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream leading-tight mb-6">
                Do you just want to be compliant?
                <br />
                <span className="text-gold">
                  Or do you want a modern compensation system?
                </span>
              </h2>
              <p className="text-slate max-w-2xl mx-auto">
                Both paths are valid. But only one turns an obligation into a
                competitive advantage.
              </p>
            </div>

            {/* Track A: Compliance */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-slate/30" />
                <h3 className="text-slate text-sm uppercase tracking-[0.3em]">
                  Path A — Compliance
                </h3>
                <div className="flex-1 h-px bg-slate/30" />
              </div>

              <p className="text-slate mb-8 max-w-3xl">
                You want to meet the EU Directive requirements, minimise risk
                and act quickly. Pragmatic, efficient, to the point.
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
                  href="#contact"
                  className="inline-block border border-slate/30 text-slate text-sm uppercase tracking-widest px-6 py-2.5 hover:border-gold/40 hover:text-gold transition-all duration-300"
                >
                  Start compliance path
                </a>
              </div>
            </div>

            {/* Track B: Transformation */}
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-px bg-gold/40" />
                <h3 className="text-gold text-sm uppercase tracking-[0.3em]">
                  Path B — Transformation
                </h3>
                <div className="flex-1 h-px bg-gold/40" />
                <span className="text-[10px] uppercase tracking-widest text-navy bg-gold px-2 py-1 rounded-sm">
                  Recommended
                </span>
              </div>

              <p className="text-cream mb-8 max-w-3xl text-lg">
                You use the Directive as an opportunity to fundamentally rethink
                compensation. Fair, transparent, competitive — a system that attracts
                and retains talent. Compliance comes automatically.
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
                  href="#contact"
                  className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-6 py-2.5 hover:bg-gold-light transition-all duration-300"
                >
                  Start transformation path
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Why Transform
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                What a modern compensation system gives you
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

        {/* About */}
        <section className="py-24 md:py-32">
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
                Over 20 years of experience in management consulting, internal
                audit and executive management — most recently as Director and
                Secretary General of a Luxembourg state-owned enterprise.
              </p>
              <p>
                I know compensation systems from both sides: as an advisor who
                reviews them, and as an executive who owns them. This topic sits
                at the intersection of compliance, HR strategy and corporate
                governance — exactly my terrain.
              </p>
              <p className="text-cream font-medium">
                Currently guiding first pilot projects for the implementation
                of modern compensation systems in the context of the EU Directive.
              </p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Next Step
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                Whether compliance or transformation — everything starts with a
                conversation. 15 minutes, no obligation.
              </p>
            </div>

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
                href="mailto:jens@jdm-advisory.com?subject=Equal%20Pay%20Consultation"
                className="inline-block text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest"
              >
                jens@jdm-advisory.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Disclaimer */}
      <section className="py-8 border-t border-navy-lighter">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate/40 text-xs leading-relaxed text-center">
            <strong className="text-slate/50">Disclaimer:</strong> The contents of this page are
            for general information purposes only and do not constitute legal advice.
            For binding legal assessments, please consult a qualified lawyer. Despite
            careful research, we assume no liability for the accuracy, completeness,
            or timeliness of the information provided.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link
            href="/en"
            className="text-slate/50 text-xs hover:text-slate transition-colors"
          >
            ← Back to jdm-advisory.com
          </Link>
          <p className="text-slate/50 text-xs">
            © {new Date().getFullYear()} Jens Druckenmüller
          </p>
        </div>
      </footer>
    </>
  );
}
