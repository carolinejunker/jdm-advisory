export default function ContactEn() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Contact
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Let&apos;s talk
          </h2>
          <p className="text-slate mt-4 max-w-lg mx-auto">
            Got a question, a project, or just want to find out if I&apos;m the
            right fit? Get in touch.
          </p>
        </div>

        {/* Calendly placeholder */}
        <div className="mb-16 p-12 border border-dashed border-navy-lighter rounded-sm text-center">
          <p className="text-slate text-sm mb-4">Calendly booking widget</p>
          <a
            href="#"
            className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Book a call
          </a>
          <p className="text-slate/40 text-xs mt-3">
            Will be activated once Calendly is connected
          </p>
        </div>

        <div className="text-center">
          <a
            href="mailto:jens@jdm-advisory.com"
            className="inline-block text-gold hover:text-gold-light transition-colors text-sm uppercase tracking-widest"
          >
            jens@jdm-advisory.com
          </a>

          <div className="mt-8 flex items-center justify-center gap-8">
            <a
              href="https://www.linkedin.com/in/jens-druckenmueller-ll-m-3b835185/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate hover:text-gold transition-colors text-sm uppercase tracking-widest"
            >
              LinkedIn
            </a>
            <a
              href="#"
              className="text-slate/40 text-sm uppercase tracking-widest cursor-default"
            >
              Instagram — coming soon
            </a>
          </div>

          <p className="mt-12 text-slate/40 text-xs">
            Based in Luxembourg · Available internationally
          </p>
        </div>
      </div>
    </section>
  );
}
