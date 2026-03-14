export default function SecondOpinion() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-r from-gold-dim/0 via-gold-dim to-gold-dim/0" />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
          Coming Soon
        </p>
        <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-5xl text-cream mb-6 leading-tight">
          Your Second Opinion
        </h2>
        <div className="w-16 h-px bg-gold/60 mx-auto mb-8" />
        <p className="text-slate text-lg leading-relaxed max-w-2xl mx-auto mb-8">
          An independent review firm built for the age of AI.
          Combining human expertise with machine intelligence to deliver
          second opinions at scale.
        </p>
        <p className="text-cream/60 text-sm italic">
          yoursecondopinion.com — launching soon
        </p>
      </div>
    </section>
  );
}
