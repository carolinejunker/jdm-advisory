import Link from "next/link";

const useCases = [
  {
    icon: "🔍",
    title: "Advisory Review",
    text: "An external advisor delivered a strategy, valuation, or report. Is it sound? We review what others deliver.",
  },
  {
    icon: "📊",
    title: "Due Diligence Review",
    text: "Before an investment or acquisition: We review existing due diligence for gaps, inconsistencies, and blind spots.",
  },
  {
    icon: "🛡️",
    title: "Internal Audit Review",
    text: "Your internal audit has reported — but who audits the auditors? Independent quality assurance for audit findings.",
  },
  {
    icon: "⚖️",
    title: "Decision Validation",
    text: "Before a major decision: An independent look at the data, assumptions, and alternatives on the table.",
  },
];

const process = [
  {
    nr: "01",
    title: "Initial Call",
    price: "Free",
    duration: "30 minutes",
    description:
      "You describe the situation, we assess whether and how we can help. No sales pitch — an honest assessment.",
    deliverables: [
      "Assessment of whether a review adds value",
      "Proposed scope and approach",
      "Transparent cost indication",
    ],
  },
  {
    nr: "02",
    title: "Document Analysis",
    price: "From €2,500",
    duration: "3–5 business days",
    description:
      "AI-augmented analysis of existing materials. We identify inconsistencies, gaps, and open questions — faster and more thorough than purely manual review.",
    deliverables: [
      "Structured document analysis",
      "Inconsistency and gap report",
      "List of open questions",
      "Initial risk assessment",
    ],
  },
  {
    nr: "03",
    title: "Second Opinion Report",
    price: "From €5,000",
    duration: "1–2 weeks",
    description:
      "A complete, independent report with a clear verdict: What holds up, what's missing, what you should challenge — and where we see it differently.",
    deliverables: [
      "Independent review report",
      "Assessment of methodology and assumptions",
      "Identified risks and blind spots",
      "Actionable recommendations",
    ],
  },
  {
    nr: "04",
    title: "Management Briefing",
    price: "Included",
    duration: "60 minutes",
    description:
      "Personal presentation of findings for your decision-makers. Straight talk, no death-by-PowerPoint.",
    deliverables: [
      "Executive summary",
      "Personal briefing",
      "Q&A with decision-makers",
      "Documented recommendations",
    ],
  },
];

const differentiators = [
  {
    title: "Independent",
    text: "No conflicts of interest. We don't sell follow-up engagements from our reviews — we deliver an honest assessment.",
  },
  {
    title: "AI-Augmented",
    text: "Hundreds of pages in hours, not weeks. AI finds patterns and inconsistencies that manual review misses.",
  },
  {
    title: "Experience-Based",
    text: "20+ years in consulting, audit, and executive management. We know what good work looks like — and how bad work disguises itself.",
  },
  {
    title: "Decision-Oriented",
    text: "No academic report. Clear statements: reliable or not, risk or opportunity, act or wait.",
  },
];

export default function SecondOpinionPageEn() {
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
              href="/second-opinion"
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
            <h1 className="font-[family-name:var(--font-heading)] text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-cream mb-6">
              Your doctor gave a diagnosis.
              <br />
              <span className="text-gold">You get a second opinion.</span>
            </h1>

            <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

            <p className="text-lg md:text-xl text-cream/90 max-w-3xl mx-auto leading-relaxed mb-4">
              Your advisor has delivered. Your due diligence is done.
              Your audit report is in. But can you rely on it?
            </p>

            <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
              We review what others deliver. Independent, AI-augmented, to the point.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#process"
                className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
              >
                How it works
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

        {/* Use Cases */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                When you need us
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                Trust, but verify.
              </h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {useCases.map((u) => (
                <div
                  key={u.title}
                  className="p-8 border border-navy-lighter rounded-sm"
                >
                  <span className="text-3xl mb-4 block">{u.icon}</span>
                  <h3 className="font-[family-name:var(--font-heading)] text-xl text-cream mb-3">
                    {u.title}
                  </h3>
                  <p className="text-slate text-sm leading-relaxed">{u.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Process */}
        <section id="process" className="py-24 md:py-32">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Process
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
                From question to answer
              </h2>
              <p className="text-slate mt-4 max-w-2xl mx-auto">
                Clearly structured, transparently priced. You know what you get before you commit.
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6">
              {process.map((s) => (
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
          </div>
        </section>

        {/* Differentiators */}
        <section className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Why us
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

        {/* About / Trust */}
        <section className="py-24 md:py-32">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-12">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Who&apos;s behind this
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
                I know the advisor&apos;s perspective and the client&apos;s. I know what
                good deliverables look like — and where the typical weaknesses hide.
              </p>
              <p className="text-cream/60 text-sm italic">
                Based in Luxembourg · Dubai
              </p>
            </div>
          </div>
        </section>

        {/* CTA / Contact */}
        <section id="contact" className="py-24 md:py-32 bg-navy-light/30">
          <div className="max-w-4xl mx-auto px-6">
            <div className="text-center mb-16">
              <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
                Next step
              </p>
              <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
                Let&apos;s talk
              </h2>
              <p className="text-slate max-w-xl mx-auto">
                30 minutes, no obligation. You describe the situation,
                we&apos;ll tell you honestly whether a review makes sense.
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
                href="mailto:jens.druckenmueller@jdm-advisory.com?subject=Second%20Opinion%20Initial%20Call"
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
            for general information purposes only and does not constitute legal advice. For
            binding legal assessments, please consult a qualified attorney. Despite careful
            research, we assume no liability for the accuracy, completeness, or timeliness of the
            information provided.
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
