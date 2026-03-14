export default function About() {
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

          {/* Text */}
          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              About
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-8 leading-tight">
              The value of an
              <br />
              <span className="text-gold">independent perspective</span>
            </h2>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                When a doctor gives you a diagnosis, you get a second opinion.
                When millions are at stake in a business transaction, you should
                do the same.
              </p>
              <p>
                I&apos;m Jens Druckenmüller — an independent advisor specialising in
                the review of work delivered by consultants, auditors, and
                advisors. Family offices and mid-market companies bring me in
                when they need someone with no conflicts of interest to take a
                hard look at what&apos;s on the table.
              </p>
              <p>
                With a background spanning due diligence, internal audit, and
                general advisory — and leveraging AI-augmented analysis — I
                identify gaps, inconsistencies, and blind spots that traditional
                review processes miss.
              </p>
              <p className="text-cream font-medium">
                Based in Luxembourg and Dubai. Independent by design.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
