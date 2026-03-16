export default function HeroEn() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy via-navy-light/50 to-navy" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <h1 className="font-[family-name:var(--font-heading)] text-5xl md:text-7xl lg:text-8xl font-light tracking-tight text-cream mb-6">
          Jens
          <br />
          <span className="text-gold">Druckenmüller</span>
        </h1>

        <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />

        <p className="text-lg md:text-xl text-cream/90 max-w-2xl mx-auto leading-relaxed mb-4 font-medium">
          20 years in the boardroom. Now on my own terms.
        </p>

        <p className="text-base md:text-lg text-slate max-w-2xl mx-auto leading-relaxed mb-12">
          Entrepreneur and independent advisor — the topics change,
          but the standards never do.
        </p>

        <a
          href="#contact"
          className="inline-block border border-gold/40 text-gold text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold hover:text-navy transition-all duration-300"
        >
          Book a call
        </a>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-px h-8 bg-gradient-to-b from-gold/40 to-transparent" />
      </div>
    </section>
  );
}
