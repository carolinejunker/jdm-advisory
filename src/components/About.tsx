export default function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Photo placeholder */}
          <div className="relative aspect-[3/4] bg-navy-lighter rounded-sm overflow-hidden flex items-center justify-center border border-navy-lighter">
            <div className="text-center text-slate/50">
              <svg
                className="w-16 h-16 mx-auto mb-3 opacity-30"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={1}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
              <p className="text-xs uppercase tracking-widest">Foto</p>
            </div>
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
