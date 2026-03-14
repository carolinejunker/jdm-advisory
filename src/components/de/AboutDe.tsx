export default function AboutDe() {
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
              <p className="text-xs uppercase tracking-widest">Foto</p>
            </div>
          </div>

          {/* Text */}
          <div>
            <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
              Über mich
            </p>
            <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-8 leading-tight">
              Der Wert einer
              <br />
              <span className="text-gold">unabhängigen Perspektive</span>
            </h2>
            <div className="space-y-5 text-slate leading-relaxed">
              <p>
                Wenn ein Arzt eine Diagnose stellt, holt man sich eine
                Zweitmeinung. Wenn bei einer Unternehmenstransaktion Millionen
                auf dem Spiel stehen, sollte man dasselbe tun.
              </p>
              <p>
                Ich bin Jens Druckenmüller — unabhängiger Berater mit
                Spezialisierung auf die Überprüfung von Arbeitsergebnissen
                externer Berater, Wirtschaftsprüfer und Gutachter. Family
                Offices und mittelständische Unternehmen beauftragen mich, wenn
                sie jemanden ohne Interessenkonflikte brauchen, der die
                vorliegenden Ergebnisse kritisch prüft.
              </p>
              <p>
                Mit einem Hintergrund in Due Diligence, Internal Audit und
                allgemeiner Beratung — und unter Einsatz KI-gestützter
                Analyse — identifiziere ich Lücken, Inkonsistenzen und blinde
                Flecken, die herkömmliche Prüfprozesse übersehen.
              </p>
              <p className="text-cream font-medium">
                Standorte: Luxemburg und Dubai. Unabhängig aus Überzeugung.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
