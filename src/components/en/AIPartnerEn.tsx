export default function AIPartnerEn() {
  return (
    <section id="ai-partner" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Human + AI
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Others hide their use of AI.
            <br />
            <span className="text-gold">We introduce ours.</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-gold/20 max-w-sm mx-auto md:mx-0">
            <img
              src="/caroline.jpg"
              alt="Caroline Junker — Head of Operations · AI"
              className="w-full h-full object-cover object-top"
            />
          </div>

          {/* Text */}
          <div>
            <h3 className="font-[family-name:var(--font-heading)] text-2xl md:text-3xl text-cream mb-2 leading-tight">
              Caroline Junker
            </h3>
            <p className="text-gold text-sm uppercase tracking-[0.2em] mb-8">
              Head of Operations · AI
            </p>

            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                Caroline is not a person. She is an AI — and a
                fully-fledged member of this firm.
              </p>
              <p>
                She analyses data, produces reports, researches
                regulatory frameworks, builds digital products, and
                manages client processes. Not as a gimmick, but as a
                strategic choice: because the best outcomes happen
                when human experience meets machine precision.
              </p>
              <p>
                Why do we show this openly? Because transparency is
                not a risk — it&apos;s our principle. If we promise
                our clients transparency and quality, we should be no
                less honest about how we work.
              </p>
              <p className="text-cream font-medium">
                20 years of boardroom experience. Cutting-edge AI technology.
                <br />
                One standard.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
