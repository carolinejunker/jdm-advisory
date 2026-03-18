import Link from "next/link";

export const metadata = {
  title: "Legal Notice — Jens Druckenmüller",
};

export default function ImprintPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/en" className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </Link>
          <Link href="/impressum" className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200">
            DE
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-12">
            Legal Notice
          </h1>

          <div className="space-y-8 text-slate leading-relaxed">
            <section>
              <h2 className="text-cream font-medium mb-3">Information pursuant to Article 4 of the Luxembourg Law of 14 August 2000 on Electronic Commerce</h2>
              <div className="space-y-1">
                <p className="text-cream font-medium">Jens Druckenmüller</p>
                <p>Independent Management Consultant</p>
                <p>1, enner Fuuss</p>
                <p>L-5441 Remerschen</p>
                <p>Luxembourg</p>
              </div>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Contact</h2>
              <p>Phone: <a href="tel:+352621751959" className="text-gold hover:text-gold-light transition-colors">+352 621 751 959</a></p>
              <p>Email: <a href="mailto:jens.druckenmueller@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens.druckenmueller@jdm-advisory.com</a></p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Registration</h2>
              <p>Registre de Commerce et des Sociétés (RCS) Luxembourg: A46720</p>
              <p>Autorisation d&apos;établissement: granted by the Ministère de l&apos;Économie, Luxembourg</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">VAT</h2>
              <p>Intra-Community VAT Number: LU37248217</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Responsible for Content</h2>
              <p>Jens Druckenmüller</p>
              <p>Address as above</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Supervisory Authority</h2>
              <p>Ministère de l&apos;Économie</p>
              <p>Direction générale PME et Entrepreneuriat</p>
              <p>19-21, boulevard Royal</p>
              <p>L-2449 Luxembourg</p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Dispute Resolution</h2>
              <p>
                European Commission Online Dispute Resolution (ODR) platform:{" "}
                <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  https://ec.europa.eu/consumers/odr
                </a>
              </p>
              <p className="mt-2">
                Consumer mediation body in Luxembourg:{" "}
                Service National du Médiateur de la Consommation, Ancien Hôtel de la Monnaie,
                6, rue du Palais de Justice, L-1841 Luxembourg.{" "}
                <a href="https://mediateur.lu" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">
                  mediateur.lu
                </a>
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Disclaimer</h2>
              <p>
                Despite careful content control, I assume no liability for the content
                of external links. The operators of linked sites are solely responsible
                for their content.
              </p>
              <p className="mt-2">
                The contents of this website are created with the utmost care. However,
                I cannot guarantee the accuracy, completeness, or timeliness of the
                content provided.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium mb-3">Copyright</h2>
              <p>
                The content and works on this website are subject to Luxembourg and
                European copyright law. Reproduction, editing, distribution, and any
                kind of use beyond the limits of copyright law require the written
                consent of the author.
              </p>
            </section>
          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/en" className="text-slate/50 text-xs hover:text-slate transition-colors">← Back to homepage</Link>
          <Link href="/en/privacy" className="text-slate/50 text-xs hover:text-slate transition-colors">Privacy Policy</Link>
        </div>
      </footer>
    </>
  );
}
