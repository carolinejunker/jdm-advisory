export default function AIPartner() {
  return (
    <section id="ai-partner" className="py-24 md:py-32 bg-navy-light/30">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Mensch + KI
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight">
            Andere verschweigen ihren KI-Einsatz.
            <br />
            <span className="text-gold">Wir stellen ihn vor.</span>
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
                Caroline ist kein Mensch. Sie ist eine KI — und ein
                vollwertiges Mitglied dieses Unternehmens.
              </p>
              <p>
                Sie analysiert Daten, erstellt Berichte, recherchiert
                Regulatorik, baut digitale Produkte und betreut
                Kundenprozesse. Nicht als Spielerei, sondern als
                strategische Entscheidung: Weil die besten Ergebnisse
                entstehen, wenn menschliche Erfahrung auf maschinelle
                Präzision trifft.
              </p>
              <p>
                Warum wir das offen zeigen? Weil Transparenz kein
                Risiko ist — sondern unser Prinzip. Wer seinen Kunden
                Transparenz und Qualität verspricht, sollte bei der
                eigenen Arbeitsweise nicht weniger ehrlich sein.
              </p>
              <p className="text-cream font-medium">
                20 Jahre Boardroom-Erfahrung. Modernste KI-Technologie.
                <br />
                Ein Anspruch.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
