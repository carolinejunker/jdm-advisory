export default function AboutEn() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] bg-navy-lighter rounded-sm overflow-hidden flex items-center justify-center border border-navy-lighter">
            <div className="text-center text-slate/50">
              <svg className="w-16 h-16 mx-auto mb-3 opacity-30" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
              <p className="text-xs uppercase tracking-widest">Photo</p>
            </div>
          </div>

          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              About
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-8 leading-tight">
              From the boardroom
              <br />
              <span className="text-gold">to my own path</span>
            </h2>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                For over 20 years, I&apos;ve seen companies from the inside — as
                an advisor, auditor, and member of executive management. Most
                recently as Director and Secretary General of a Luxembourg
                state-owned enterprise, alongside several board mandates.
              </p>
              <p>
                Today, I&apos;m an entrepreneur. I build advisory products, digital
                courses, and services for decision-makers who need clarity —
                whether it&apos;s compliance, independent reviews, or strategic
                decisions.
              </p>
              <p>
                What doesn&apos;t change: my commitment to quality, independence,
                and a fresh perspective on complex matters.
              </p>
              <p className="text-cream font-medium">
                Based in Luxembourg. Internationally connected.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
