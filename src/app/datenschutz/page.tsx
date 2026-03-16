import Link from "next/link";

export const metadata = {
  title: "Datenschutzerklärung — Jens Druckenmüller",
};

export default function DatenschutzPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </Link>
          <Link href="/en/privacy" className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200">
            EN
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-4">
            Datenschutzerklärung
          </h1>
          <p className="text-slate text-sm mb-12">Stand: März 2026</p>

          <div className="space-y-10 text-slate leading-relaxed">

            {/* 1 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">1. Verantwortlicher</h2>
              <p>Verantwortlich für die Datenverarbeitung auf dieser Website:</p>
              <div className="mt-2 space-y-1">
                <p className="text-cream">Jens Druckenmüller</p>
                <p>1, enner Fuuss, L-5441 Remerschen, Luxemburg</p>
                <p>E-Mail: <a href="mailto:jens@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens@jdm-advisory.com</a></p>
                <p>Telefon: <a href="tel:+352621751959" className="text-gold hover:text-gold-light transition-colors">+352 621 751 959</a></p>
              </div>
            </section>

            {/* 2 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">2. Überblick</h2>
              <p>
                Diese Datenschutzerklärung informiert Sie über Art, Umfang und Zweck
                der Verarbeitung personenbezogener Daten auf der Website
                www.jdm-advisory.com. Rechtsgrundlage ist die Verordnung (EU) 2016/679
                (Datenschutz-Grundverordnung, DSGVO) sowie das luxemburgische Gesetz
                vom 1. August 2018 zur Organisation der Commission Nationale pour la
                Protection des Données (CNPD).
              </p>
            </section>

            {/* 3 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">3. Hosting</h2>
              <p>
                Diese Website wird bei <strong className="text-cream">Vercel Inc.</strong> gehostet
                (440 N Barranca Ave #4133, Covina, CA 91723, USA). Beim Aufruf dieser
                Website erfasst Vercel automatisch Informationen in sogenannten
                Server-Log-Dateien, die Ihr Browser übermittelt. Dazu gehören:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>IP-Adresse des anfragenden Rechners</li>
                <li>Datum und Uhrzeit des Zugriffs</li>
                <li>Name und URL der abgerufenen Seite</li>
                <li>Übertragene Datenmenge</li>
                <li>Browser-Typ und -Version</li>
                <li>Betriebssystem</li>
                <li>Referrer-URL</li>
              </ul>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse
                an der sicheren und effizienten Bereitstellung der Website). Die
                Datenverarbeitung erfolgt auf Grundlage der Standardvertragsklauseln
                der EU-Kommission (Art. 46 Abs. 2 lit. c DSGVO) sowie des EU-US Data
                Privacy Frameworks.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Vercel Privacy Policy</a>
              </p>
            </section>

            {/* 4 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">4. Kontaktaufnahme per E-Mail</h2>
              <p>
                Wenn Sie uns per E-Mail kontaktieren, werden Ihre Angaben (Name,
                E-Mail-Adresse, Inhalt der Nachricht) zur Bearbeitung Ihrer Anfrage
                verarbeitet und gespeichert. Rechtsgrundlage ist Art. 6 Abs. 1 lit. b
                DSGVO (vorvertragliche Maßnahmen) bzw. Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Beantwortung von Anfragen).
              </p>
              <p className="mt-2">
                Ihre Daten werden gelöscht, sobald der Zweck der Speicherung entfällt
                und keine gesetzlichen Aufbewahrungspflichten entgegenstehen.
              </p>
            </section>

            {/* 5 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">5. Terminbuchung (Calendly)</h2>
              <p>
                Für die Buchung von Erstgesprächen nutzen wir den Dienst
                <strong className="text-cream"> Calendly LLC</strong> (3423 Piedmont Road NE,
                Atlanta, GA 30305, USA). Bei der Terminbuchung werden Ihr Name, Ihre
                E-Mail-Adresse sowie ggf. weitere von Ihnen eingegebene Daten an
                Calendly übermittelt.
              </p>
              <p className="mt-2">
                Rechtsgrundlage ist Art. 6 Abs. 1 lit. b DSGVO (Durchführung
                vorvertraglicher Maßnahmen). Die Datenübermittlung in die USA erfolgt
                auf Grundlage des EU-US Data Privacy Frameworks.
              </p>
              <p className="mt-2">
                Weitere Informationen: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Calendly Privacy Policy</a>
              </p>
            </section>

            {/* 6 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">6. Google Fonts</h2>
              <p>
                Diese Website nutzt die Schriftarten „Playfair Display" und „Inter"
                von Google. Die Schriften werden beim Build-Prozess lokal eingebunden
                und direkt von unserem Server ausgeliefert. Es findet
                <strong className="text-cream"> keine Verbindung zu Google-Servern</strong> beim
                Seitenaufruf statt.
              </p>
            </section>

            {/* 7 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">7. Cookies</h2>
              <p>
                Diese Website verwendet derzeit <strong className="text-cream">keine Cookies</strong>.
                Sollte sich dies in Zukunft ändern (z.B. durch die Einbindung von
                Analyse-Tools oder Marketing-Diensten), werden wir diese
                Datenschutzerklärung entsprechend aktualisieren und ggf. einen
                Cookie-Consent-Banner einsetzen.
              </p>
            </section>

            {/* 8 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">8. Analyse und Tracking</h2>
              <p>
                Diese Website nutzt derzeit <strong className="text-cream">keine Analyse- oder
                Tracking-Tools</strong>. Es werden keine Nutzungsprofile erstellt und
                kein Tracking-Code eingesetzt.
              </p>
            </section>

            {/* 9 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">9. Newsletter (geplant)</h2>
              <p>
                Wir planen, einen Newsletter-Dienst einzurichten. Sobald dieser
                verfügbar ist, werden wir diese Datenschutzerklärung um die
                entsprechenden Informationen ergänzen. Die Anmeldung erfolgt
                ausschließlich im Double-Opt-in-Verfahren.
              </p>
            </section>

            {/* 10 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">10. Ihre Rechte</h2>
              <p>Sie haben nach der DSGVO folgende Rechte:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cream">Auskunftsrecht</strong> (Art. 15 DSGVO) — Sie können Auskunft über Ihre gespeicherten Daten verlangen.</li>
                <li><strong className="text-cream">Berichtigungsrecht</strong> (Art. 16 DSGVO) — Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong className="text-cream">Löschungsrecht</strong> (Art. 17 DSGVO) — Sie können die Löschung Ihrer Daten verlangen.</li>
                <li><strong className="text-cream">Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO) — Sie können die Einschränkung der Verarbeitung verlangen.</li>
                <li><strong className="text-cream">Datenübertragbarkeit</strong> (Art. 20 DSGVO) — Sie können Ihre Daten in einem gängigen Format erhalten.</li>
                <li><strong className="text-cream">Widerspruchsrecht</strong> (Art. 21 DSGVO) — Sie können der Verarbeitung Ihrer Daten widersprechen.</li>
              </ul>
              <p className="mt-4">
                Zur Ausübung Ihrer Rechte wenden Sie sich an:{" "}
                <a href="mailto:jens@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens@jdm-advisory.com</a>
              </p>
            </section>

            {/* 11 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">11. Beschwerderecht</h2>
              <p>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
                beschweren. Zuständige Aufsichtsbehörde in Luxemburg:
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-cream">Commission Nationale pour la Protection des Données (CNPD)</p>
                <p>15, Boulevard du Jazz</p>
                <p>L-4370 Belvaux</p>
                <p>Luxemburg</p>
                <p>
                  <a href="https://cnpd.public.lu" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">cnpd.public.lu</a>
                </p>
              </div>
            </section>

            {/* 12 */}
            <section>
              <h2 className="text-cream font-medium text-lg mb-3">12. Änderungen</h2>
              <p>
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, um sie
                stets den aktuellen rechtlichen Anforderungen und tatsächlichen
                Gegebenheiten anzupassen. Die jeweils aktuelle Version finden Sie
                auf dieser Seite.
              </p>
            </section>

          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/" className="text-slate/50 text-xs hover:text-slate transition-colors">← Zurück zur Startseite</Link>
          <Link href="/impressum" className="text-slate/50 text-xs hover:text-slate transition-colors">Impressum</Link>
        </div>
      </footer>
    </>
  );
}
