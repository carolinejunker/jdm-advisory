export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Let&apos;s talk
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Luxembourg */}
          <div className="p-8 border border-navy-lighter rounded-sm">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3">
              Luxembourg
            </p>
            <p className="text-slate text-sm leading-relaxed">
              Available for engagements across the EU.
            </p>
          </div>

          {/* Dubai */}
          <div className="p-8 border border-navy-lighter rounded-sm">
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-3">
              Dubai
            </p>
            <p className="text-slate text-sm leading-relaxed">
              Serving clients in the UAE and wider GCC region.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="mailto:jens@jdm-advisory.com"
            className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
          >
            jens@jdm-advisory.com
          </a>
          <div className="mt-6 flex items-center justify-center gap-6">
            <a
              href="https://www.linkedin.com/in/jens-druckenmueller-ll-m-3b835185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
