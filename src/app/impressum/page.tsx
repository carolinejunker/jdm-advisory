import Link from "next/link";

export const metadata = {
  title: "Impressum — Jens Druckenmüller",
};

export default function ImpressumPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </Link>
          <Link href="/en/imprint" className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200">
            EN
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-12">
            Impressum
          </h1>

          <div className="space-y-8 text-slate leading-relaxed">
            <section>
              <h2 className="text-cream font-medium mb-3">Angaben gemäß Artikel 4 des luxemburgischen Gesetzes vom 14. August 2000 über den elektronischen Geschäftsverkehr</h2>
              <div className="space-y-1">
                <p className="text-cream font-medium">Jens Druckenmüller</p>
                <p>Freiberuflicher Unternehmensberater</p>
                <p>1, enner Fuuss</p>
                <p>L-5441 Remerschen</p>
                <p>Luxemburg</p>
              </div>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Kontakt</h2>
              <p>Telefon: <a href="tel:+352621751959" className="text-gold hover:text-gold-light transition-colors">+352 621 751 959</a></p>
              <p>E-Mail: <a href="mailto:jens.druckenmueller@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens.druckenmueller@jdm-advisory.com</a></p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Registrierung</h2>
              <p>Registre de Commerce et des Sociétés (RCS) Luxembourg: A46720</p>
              <p>Autorisation d&apos;établissement: erteilt durch das Ministère de l&apos;Économie, Luxembourg</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Umsatzsteuer</h2>
              <p>TVA intracommunautaire / USt-IdNr.: LU37248217</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Verantwortlich für den Inhalt</h2>
              <p>Jens Druckenmüller</p>
              <p>Anschrift wie oben</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Zuständige Aufsichtsbehörde</h2>
              <p>Ministère de l&apos;Économie</p>
              <p>Direction générale PME et Entrepreneuriat</p>
              <p>19-21, boulevard Royal</p>
              <p>L-2449 Luxembourg</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Streitbeilegung</h2>
              <p>
                Plattform der Europäischen Kommission zur Online-Streitbeilegung (OS):{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Zuständige Verbraucherschlichtungsstelle in Luxemburg:{" "}
                Service National du Médiateur de la Consommation, Ancien Hôtel de la Monnaie,
                6, rue du Palais de Justice, L-1841 Luxembourg.{" "}
                <a href="https://mediateur.lu" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  mediateur.lu
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Haftungshinweis</h2>
              <p>
                Trotz sorgfältiger inhaltlicher Kontrolle übernehme ich keine Haftung
                für die Inhalte externer Links. Für den Inhalt der verlinkten Seiten
                sind ausschließlich deren Betreiber verantwortlich.
              </p>
              <p className="mt-2">
                Die Inhalte dieser Website werden mit größtmöglicher Sorgfalt erstellt.
                Ich übernehme jedoch keine Gewähr für die Richtigkeit, Vollständigkeit
                und Aktualität der bereitgestellten Inhalte.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Urheberrecht</h2>
              <p>
                Die durch den Betreiber dieser Seite erstellten Inhalte und Werke
                unterliegen dem luxemburgischen und europäischen Urheberrecht. Die
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung
                außerhalb der Grenzen des Urheberrechts bedürfen der schriftlichen
                Zustimmung des Autors.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-slate/50 text-xs hover:text-slate transition-colors">← Zurück zur Startseite</Link>
          <Link href="/datenschutz" className="text-slate/50 text-xs hover:text-slate transition-colors">Datenschutzerklärung</Link>
        </div>
      </footer>
    </>
  );
}
