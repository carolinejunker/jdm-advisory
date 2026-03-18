export default function AboutEn() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-gold/20 bg-[#1c1f26]">
            <img
              src="/jens.jpg"
              alt="Jens Druckenmüller"
              className="w-full h-full object-cover object-top brightness-75 contrast-110 saturate-[0.9]"
            />
            <div className="absolute inset-0 bg-[#1c1f26]/30 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-[#1c1f26]/50 via-transparent to-[#1c1f26]/30" />
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
