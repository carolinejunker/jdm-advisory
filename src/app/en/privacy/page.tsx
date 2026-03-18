import Link from "next/link";

export const metadata = {
  title: "Privacy Policy — Jens Druckenmüller",
};

export default function PrivacyPage() {
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-md shadow-lg">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/en" className="text-gold font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
            JDM
          </Link>
          <Link href="/datenschutz" className="text-gold/60 text-xs uppercase tracking-widest border border-gold/20 px-3 py-1 hover:border-gold/50 hover:text-gold transition-all duration-200">
            DE
          </Link>
        </div>
      </nav>

      <main className="pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="font-[family-name:var(--font-heading)] text-3xl md:text-4xl text-cream mb-4">
            Privacy Policy
          </h1>
          <p className="text-slate text-sm mb-12">Last updated: March 2026</p>

          <div className="space-y-10 text-slate leading-relaxed">

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">1. Controller</h2>
              <p>The controller responsible for data processing on this website:</p>
              <div className="mt-2 space-y-1">
                <p className="text-cream">Jens Druckenmüller</p>
                <p>1, enner Fuuss, L-5441 Remerschen, Luxembourg</p>
                <p>Email: <a href="mailto:jens.druckenmueller@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens.druckenmueller@jdm-advisory.com</a></p>
                <p>Phone: <a href="tel:+352621751959" className="text-gold hover:text-gold-light transition-colors">+352 621 751 959</a></p>
              </div>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">2. Overview</h2>
              <p>
                This privacy policy informs you about the nature, scope, and purpose
                of the processing of personal data on the website www.jdm-advisory.com.
                The legal basis is Regulation (EU) 2016/679 (General Data Protection
                Regulation, GDPR) and the Luxembourg Law of 1 August 2018 on the
                organisation of the Commission Nationale pour la Protection des
                Données (CNPD).
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">3. Hosting</h2>
              <p>
                This website is hosted by <strong className="text-cream">Vercel Inc.</strong> (440 N
                Barranca Ave #4133, Covina, CA 91723, USA). When you visit this
                website, Vercel automatically collects information in server log files
                that your browser transmits. This includes:
              </p>
              <ul className="mt-2 space-y-1 list-disc list-inside">
                <li>IP address of the requesting device</li>
                <li>Date and time of access</li>
                <li>Name and URL of the requested page</li>
                <li>Amount of data transferred</li>
                <li>Browser type and version</li>
                <li>Operating system</li>
                <li>Referrer URL</li>
              </ul>
              <p className="mt-2">
                Legal basis: Art. 6(1)(f) GDPR (legitimate interest in the secure and
                efficient provision of the website). Data processing is based on the
                EU Commission&apos;s Standard Contractual Clauses (Art. 46(2)(c) GDPR) and
                the EU-US Data Privacy Framework.
              </p>
              <p className="mt-2">
                More information: <a href="https://vercel.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Vercel Privacy Policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">4. Contact by Email</h2>
              <p>
                If you contact us by email, your details (name, email address, message
                content) are processed and stored to handle your enquiry. Legal basis:
                Art. 6(1)(b) GDPR (pre-contractual measures) or Art. 6(1)(f) GDPR
                (legitimate interest in responding to enquiries).
              </p>
              <p className="mt-2">
                Your data will be deleted once the purpose of storage no longer applies
                and no statutory retention obligations prevent deletion.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">5. Appointment Booking (Calendly)</h2>
              <p>
                We use <strong className="text-cream">Calendly LLC</strong> (3423 Piedmont Road NE,
                Atlanta, GA 30305, USA) for booking consultations. When you book an
                appointment, your name, email address, and any additional information
                you provide are transmitted to Calendly.
              </p>
              <p className="mt-2">
                Legal basis: Art. 6(1)(b) GDPR (performance of pre-contractual
                measures). Data transfer to the USA is based on the EU-US Data Privacy
                Framework.
              </p>
              <p className="mt-2">
                More information: <a href="https://calendly.com/privacy" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">Calendly Privacy Policy</a>
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">6. Google Fonts</h2>
              <p>
                This website uses the typefaces &quot;Playfair Display&quot; and &quot;Inter&quot; from
                Google. The fonts are embedded locally during the build process and
                served directly from our server. <strong className="text-cream">No connection to Google
                servers</strong> is made when you visit the site.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">7. Cookies</h2>
              <p>
                This website currently <strong className="text-cream">does not use cookies</strong>.
                Should this change in the future (e.g. through the integration of
                analytics or marketing tools), we will update this privacy policy
                accordingly and implement a cookie consent banner where required.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">8. Analytics and Tracking</h2>
              <p>
                This website currently <strong className="text-cream">does not use any analytics or
                tracking tools</strong>. No user profiles are created and no tracking
                code is deployed.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">9. Newsletter (planned)</h2>
              <p>
                We plan to set up a newsletter service. Once available, we will update
                this privacy policy with the relevant information. Subscription will
                exclusively use a double opt-in process.
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">10. Your Rights</h2>
              <p>Under the GDPR, you have the following rights:</p>
              <ul className="mt-2 space-y-2">
                <li><strong className="text-cream">Right of access</strong> (Art. 15 GDPR) — You may request information about your stored data.</li>
                <li><strong className="text-cream">Right to rectification</strong> (Art. 16 GDPR) — You may request correction of inaccurate data.</li>
                <li><strong className="text-cream">Right to erasure</strong> (Art. 17 GDPR) — You may request deletion of your data.</li>
                <li><strong className="text-cream">Right to restriction of processing</strong> (Art. 18 GDPR) — You may request restriction of processing.</li>
                <li><strong className="text-cream">Right to data portability</strong> (Art. 20 GDPR) — You may receive your data in a common format.</li>
                <li><strong className="text-cream">Right to object</strong> (Art. 21 GDPR) — You may object to the processing of your data.</li>
              </ul>
              <p className="mt-4">
                To exercise your rights, contact:{" "}
                <a href="mailto:jens.druckenmueller@jdm-advisory.com" className="text-gold hover:text-gold-light transition-colors">jens.druckenmueller@jdm-advisory.com</a>
              </p>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">11. Right to Lodge a Complaint</h2>
              <p>
                You have the right to lodge a complaint with a data protection
                supervisory authority. The competent authority in Luxembourg:
              </p>
              <div className="mt-2 space-y-1">
                <p className="text-cream">Commission Nationale pour la Protection des Données (CNPD)</p>
                <p>15, Boulevard du Jazz</p>
                <p>L-4370 Belvaux</p>
                <p>Luxembourg</p>
                <p>
                  <a href="https://cnpd.public.lu" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-light transition-colors">cnpd.public.lu</a>
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-cream font-medium text-lg mb-3">12. Changes</h2>
              <p>
                We reserve the right to update this privacy policy to ensure it always
                complies with current legal requirements and reflects the actual state
                of data processing. The current version can always be found on this page.
              </p>
            </section>

          </div>
        </div>
      </main>

      <footer className="py-8 border-t border-navy-lighter">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <Link href="/en" className="text-slate/50 text-xs hover:text-slate transition-colors">← Back to homepage</Link>
          <Link href="/en/imprint" className="text-slate/50 text-xs hover:text-slate transition-colors">Legal Notice</Link>
        </div>
      </footer>
    </>
  );
}
