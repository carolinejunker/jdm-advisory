"use client";

const risks = [
  {
    label: "Einmaliges Nachzahlungsrisiko",
    sublabel: "3 Jahre rückwirkend (Art. 21 EU-RL 2023/970)",
    amount: 1140000,
    color: "bg-red-500",
    barWidth: "100%",
  },
  {
    label: "Jährliche Mehrkosten",
    sublabel: "Dauerhafte Gehaltsanpassungen + Sozialversicherung",
    amount: 390000,
    color: "bg-amber-500",
    barWidth: "34%",
  },
];

const assumptions = [
  { label: "Geschätzte Belegschaft (6 Beteiligungen)", value: "~725" },
  { label: "Geschätzter Frauenanteil (Industrie)", value: "~25 %" },
  { label: "Bereinigter Gender Pay Gap (Destatis 2025)", value: "6 %" },
  { label: "Ø Bruttojahresgehalt (Mischkalkulation)", value: "50.000 €" },
  { label: "Betroffene Mitarbeiterinnen (konservativ)", value: "~108" },
];

function formatEuro(n: number) {
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(2).replace(".", ",")} Mio. €`;
  if (n >= 1000) return `${Math.round(n / 1000)}k €`;
  return `${n} €`;
}

export default function ObermarkRisk() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-[0.3em] mb-4">
            Risikoanalyse
          </p>
          <h2 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream leading-tight mb-4">
            Was Nichtstun kostet
          </h2>
          <p className="text-slate max-w-2xl mx-auto">
            Geschätzte finanzielle Risiken bei Nicht-Compliance mit der
            EU-Entgelttransparenzrichtlinie — basierend auf öffentlichen
            Branchendaten für eine Industriegruppe Ihrer Größe.
          </p>
        </div>

        {/* Big Numbers */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {risks.map((r) => (
            <div key={r.label} className="border border-navy-lighter p-8 rounded-sm">
              <p className="text-slate text-sm uppercase tracking-wider mb-2">
                {r.label}
              </p>
              <p className="font-[family-name:var(--font-heading)] text-4xl md:text-5xl text-cream mb-3">
                {formatEuro(r.amount)}
              </p>
              <p className="text-slate/60 text-sm mb-6">{r.sublabel}</p>
              <div className="w-full h-2 bg-navy-lighter rounded-full overflow-hidden">
                <div
                  className={`h-full ${r.color} rounded-full transition-all duration-1000`}
                  style={{ width: r.barWidth }}
                />
              </div>
            </div>
          ))}
        </div>

        {/* 5-Year Cumulative */}
        <div className="border border-gold/30 bg-gold/5 p-8 rounded-sm text-center mb-16">
          <p className="text-gold text-sm uppercase tracking-wider mb-2">
            Kumuliertes Risiko über 5 Jahre
          </p>
          <p className="font-[family-name:var(--font-heading)] text-5xl md:text-6xl text-gold mb-3">
            ~3,1 Mio. €
          </p>
          <p className="text-slate text-sm">
            Nachzahlung + dauerhafte Mehrkosten — ohne Bußgelder, Rechtskosten und Reputationsschäden
          </p>
        </div>

        {/* Assumptions */}
        <div className="border border-navy-lighter p-8 rounded-sm">
          <p className="text-gold text-sm uppercase tracking-wider mb-6">
            Berechnungsgrundlage
          </p>
          <div className="space-y-4">
            {assumptions.map((a) => (
              <div
                key={a.label}
                className="flex justify-between items-center border-b border-navy-lighter/50 pb-3 last:border-0 last:pb-0"
              >
                <span className="text-slate text-sm">{a.label}</span>
                <span className="text-cream font-medium">{a.value}</span>
              </div>
            ))}
          </div>
          <p className="text-slate/50 text-xs mt-6">
            Quellen: Statistisches Bundesamt (2025), Hans-Böckler-Stiftung, EU-Richtlinie 2023/970 Art. 21.
            Alle Werte sind konservative Schätzungen auf Basis öffentlich verfügbarer Daten.
            Die tatsächlichen Risiken können nur durch eine Ist-Analyse mit realen Entgeltdaten ermittelt werden.
          </p>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-slate mb-6">
            Diese Zahlen basieren auf Branchendurchschnitten. Wie sieht es bei
            Ihnen <span className="text-cream font-medium">wirklich</span> aus?
          </p>
          <a
            href="#kontakt"
            className="inline-block bg-gold text-navy text-sm uppercase tracking-widest px-8 py-3 hover:bg-gold-light transition-all duration-300"
          >
            Ist-Analyse anfragen
          </a>
        </div>
      </div>
    </section>
  );
}
