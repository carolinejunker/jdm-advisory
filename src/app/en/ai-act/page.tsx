import Link from "next/link";

const challenges = [
  {
    icon: "📋",
    title: "AI Literacy Obligation",
    text: "Since February 2025, every company using AI must ensure its staff has sufficient AI competence. Most companies don\u2019t even know this.",
    tag: "Already in effect",
  },
  {
    icon: "🔍",
    title: "Transparency Obligations",
    text: "From August 2026: If you deploy AI systems that interact with people, you must disclose this. AI-generated content published to inform the public must be labelled.",
    tag: "From Aug 2026",
  },
  {
    icon: "⚠️",
    title: "High-Risk Areas",
    text: "AI in recruitment, performance evaluation, credit scoring or insurance \u2014 these face the strictest requirements under the Act.",
    tag: "From Aug 2026",
  },
  {
    icon: "🚫",
    title: "Prohibited Practices",
    text: "Emotion recognition in the workplace, social scoring, manipulative AI \u2014 already banned since February 2025.",
    tag: "Already in effect",
  },
];

const services = [
  {
    nr: "01",
    title: "Initial Call",
    label: "Free \u00b7 30 minutes",
    description:
      "Where does your organisation stand on AI? We\u2019ll get an overview together and discuss which steps make sense.",
    deliverables: [
      "Initial assessment of your situation",
      "Overview of relevant obligations",
      "Proposed next steps",
    ],
  },
  {
    nr: "02",
    title: "AI Act Awareness Workshop",
    label: "90 minutes",
    description:
      "What does the EU AI Act mean for your company? A compact workshop for leadership and management \u2014 practical, clear, no legalese.",
    deliverables: [
      "Overview: risk classes, obligations, deadlines",
      "Relevance for your industry and AI usage",
      "Initial recommendations for action",
      "Contributes to AI literacy obligation (Art. 4)",
    ],
  },
  {
    nr: "03",
    title: "AI Readiness Assessment",
    label: "Half day + follow-up",
    description:
      "Systematic stocktake: Which AI systems do you use? What risk class do they fall into? Where do we see areas for action?",
    deliverables: [
      "AI inventory of all deployed systems",
      "Risk class mapping",
      "Action areas with traffic-light rating",
      "Recommendations for next steps",
    ],
  },
  {
    nr: "04",
    title: "Governance Setup & Implementation",
    label: "Individual",
    description:
      "We help you build the organisational structures: responsibilities, processes, documentation, training concepts \u2014 so that AI governance works in practice.",
    deliverables: [
      "AI governance framework",
      "Documentation and monitoring processes",
      "Staff training concept",
      "Human oversight processes for high-risk systems",
    ],
  },
];

const differentiators = [
  {
    title: "Practice, not paragraphs",
    text: "We translate regulation into operational measures. No expert opinions gathering dust \u2014 processes that work in daily business.",
  },
  {
    title: "Management consulting, not legal advice",
    text: "We help with the organisational implementation. For legal assessments of individual cases, we work with specialised law firms.",
  },
  {
    title: "AI from first-hand experience",
    text: "We use AI ourselves \u2014 transparently and documented. We don\u2019t sell theory; we share what we\u2019ve learned in practice.",
  },
  {
    title: "Bridging regulation and the boardroom",
    text: "20+ years in management consulting and executive leadership. We speak the language of decision-makers, not lawyers.",
  },
];

const timeline = [
  { date: "Feb 2025", event: "AI literacy obligation + prohibited practices", urgent: true },
  { date: "Aug 2025", event: "GPAI rules + national authorities + penalty rules", urgent: false },
  { date: "Aug 2026", event: "Transparency + high-risk rules + deployer obligations", urgent: true },
  { date: "Aug 2027", event: "Product safety AI + legacy GPAI", urgent: false },
];

export default function AIActPageEn() {
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
              Blog
            </Link>
            <a
              href="#contact"
              className="text-gold text-sm uppercase tracking-widest hover:text-gold-light transition-colors"
            >
              Contact
            </a>
            <Link
              href="/ai-act"
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
                ⏰ AI literacy obligation already in effect since February 2025
              </p>
            </div>

            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              You use AI.
              <br />
              <span className="text-gold">The EU regulates it.</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              The EU AI Act is the world&apos;s first comprehensive AI law.
              Some obligations are already in force — the rest follows in August 2026.
              Every company using AI is affected.
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              We help you get the organisational side under control.
              Structured, practical, understandable.
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
                Book a call
              </a>
            </div>
          </div>
        </section>

        {/* Challenges */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                What&apos;s coming
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                The AI Act affects your business — now
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {challenges.map((c) => (
                <div
                  key={c.title}
                  className="relative p-8 border border-navy-lighter rounded-sm"
                >
                  <span className={`absolute top-4 right-4 text-[10px] uppercase tracking-widest px-2 py-1 rounded-sm ${
                    c.tag === "Already in effect"
                      ? "text-red-400 bg-red-500/10"
                      : "text-gold bg-gold/10"
                  }`}>
                    {c.tag}
                  </span>
                  <span className="text-3xl mb-4 block">{c.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                    {c.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{c.text}</p>
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

        {/* Penalties */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-red-400 text-sm uppercase tracking-[0.3em] mb-4">
              Penalty framework
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream leading-tight mb-6">
              Up to <span className="text-gold">€35 million</span> or{" "}
              <span className="text-gold">7%</span> of global annual turnover
            </h2>
            <p className="text-slate max-w-2xl mx-auto mb-4">
              The AI Act&apos;s sanctions mirror the GDPR — with even higher
              ceilings in some cases. Reduced rates apply for SMEs.
            </p>
            <p className="text-slate/60 text-sm max-w-xl mx-auto">
              The amount depends on the type of infringement, company size, and
              willingness to cooperate with authorities.
            </p>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Services
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                From stocktake to implementation
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Strategic management consulting for AI governance. We discuss
                scope and fees in the initial call — free and no obligation.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {services.map((s) => (
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
                  <p className="text-gold/60 text-xs uppercase tracking-wider mb-3">
                    {s.label}
                  </p>
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
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Our approach
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                What sets us apart
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {differentiators.map((d) => (
                <div key={d.title} className="flex gap-4">
                  <span className="text-gold text-xl mt-1">→</span>
                  <div>
                    <h3 className="text-cream font-medium mb-1">{d.title}</h3>
                    <p className="text-slate text-sm leading-relaxed">
                      {d.text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Your advisor
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Jens Druckenmüller
              </h2>
            </div>

            <div className="text-center space-y-5 text-slate leading-relaxed max-w-2xl mx-auto">
              <p>
                20+ years of experience in management consulting, internal audit,
                and executive leadership — most recently as Director and Secretary
                General of a Luxembourg state-owned enterprise.
              </p>
              <p>
                I know regulation from the advisor&apos;s perspective and from the
                perspective of the organisation that has to implement it. The AI Act
                sits at the intersection of technology, governance, and executive
                leadership — exactly my terrain.
              </p>
              <p className="text-cream/60 text-sm italic">
                Based in Luxembourg · United Arab Emirates
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Next step
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                30 minutes, no obligation. We&apos;ll get an overview together and
                discuss where you stand.
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
                href="mailto:jens.druckenmueller@jdm-advisory.com?subject=AI%20Act%20Initial%20Call"
                className="inline-block text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest"
              >
                jens.druckenmueller@jdm-advisory.com
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Disclaimer */}
      <section className="py-8 border-t border-navy-lighter">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-slate/40 text-xs leading-relaxed text-center">
            <strong className="text-slate/50">Disclaimer:</strong> The content on this page is
            for general information purposes only and does not constitute legal advice. JDM Advisory
            provides strategic management consulting for the organisational implementation of the EU
            AI Act — not legal services. For binding legal assessments, we recommend consulting a
            specialised attorney.
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
