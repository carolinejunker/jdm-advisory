export default function Contact() {
  return (
    <section id="contact" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Kontakt
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Lass uns sprechen
          </h2>
          <p className="text-slate mt-4 max-w-lg mx-auto">
            Du hast eine Frage, ein Projekt oder willst einfach mal hören,
            ob ich der Richtige bin? Meld dich.
          </p>
        </div>

        {/* Calendly placeholder */}
        <div className="mb-16 p-12 border border-dashed border-navy-lighter rounded-sm text-center">
          <p className="text-slate text-sm mb-4">Calendly-Buchungswidget</p>
          <a
            href="#"
            className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
          >
            Erstgespräch buchen
          </a>
          <p className="text-slate/40 text-xs mt-3">
            Wird aktiviert sobald Calendly verbunden ist
          </p>
        </div>

        {/* Direct contact */}
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
              Instagram — bald
            </a>
          </div>

          <p className="mt-12 text-slate/40 text-xs">
            Standort Luxemburg · International verfügbar
          </p>
        </div>
      </div>
    </section>
  );
}
