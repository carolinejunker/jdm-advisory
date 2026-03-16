export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] rounded-sm overflow-hidden border border-gold/20">
            <div className="absolute inset-0 bg-navy/20 mix-blend-multiply z-10" />
            <img
              src="/jens.jpg"
              alt="Jens Druckenmüller"
              className="w-full h-full object-cover object-top grayscale-[30%] brightness-90 contrast-105"
            />
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Über mich
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-8 leading-tight">
              Vom Boardroom
              <br />
              <span className="text-gold">zum eigenen Weg</span>
            </h2>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                Über 20 Jahre habe ich Unternehmen von innen gesehen — als
                Berater, als Prüfer, als Mitglied der Geschäftsleitung. Zuletzt
                als Direktor und Generalsekretär eines luxemburgischen
                Staatsunternehmens und in mehreren Verwaltungsratsmandaten.
              </p>
              <p>
                Heute bin ich Unternehmer. Ich baue Beratungsprodukte, digitale
                Kurse und Services für Entscheidungsträger, die Klarheit
                brauchen — ob bei Compliance-Fragen, unabhängigen Reviews oder
                strategischen Entscheidungen.
              </p>
              <p>
                Was sich nicht ändert: Mein Anspruch an Qualität, Unabhängigkeit
                und einen frischen Blick auf komplexe Sachverhalte.
              </p>
              <p className="text-cream font-medium">
                Standort Luxemburg. International vernetzt.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
