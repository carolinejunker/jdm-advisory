import { BlogPost } from "./types";

export const blogPosts: BlogPost[] = [
  {
    slug: "entgelttransparenzrichtlinie-2026",
    title:
      "EU-Entgelttransparenzrichtlinie 2026: Was Unternehmen jetzt tun müssen",
    description:
      "Die EU-Entgelttransparenzrichtlinie tritt im Juni 2026 in Kraft. Erfahren Sie, welche Pflichten auf Arbeitgeber zukommen und wie Sie sich rechtzeitig vorbereiten.",
    date: "2026-03-15",
    author: "Jens Druckenmüller",
    keywords: [
      "Entgelttransparenzrichtlinie",
      "EU Pay Transparency",
      "Equal Pay",
      "Gehaltstransparenz",
      "Lohngleichheit",
      "EU-Richtlinie 2023/970",
      "Luxemburg",
      "Compliance",
    ],
    lang: "de",
    content: `
      <p>Im Juni 2026 tritt die EU-Entgelttransparenzrichtlinie (Richtlinie 2023/970) in Kraft. Sie verpflichtet Arbeitgeber in der gesamten EU zu mehr Transparenz bei Gehältern — und verändert damit grundlegend, wie Unternehmen Vergütung kommunizieren und dokumentieren müssen.</p>

      <h2>Was bedeutet die Richtlinie konkret?</h2>
      <p>Die Richtlinie verfolgt ein klares Ziel: gleiches Entgelt für gleiche oder gleichwertige Arbeit — unabhängig vom Geschlecht. Arbeitgeber müssen künftig:</p>
      <ul>
        <li>Gehaltsstrukturen offenlegen und geschlechtsspezifische Entgeltlücken dokumentieren</li>
        <li>Bei Stellenausschreibungen Gehaltsspannen angeben</li>
        <li>Mitarbeitenden auf Anfrage Vergleichsdaten zur Verfügung stellen</li>
        <li>Ab 100 Mitarbeitenden regelmäßig über die Entgeltlücke berichten</li>
      </ul>

      <h2>Wer ist betroffen?</h2>
      <p>Grundsätzlich alle Arbeitgeber in der EU — unabhängig von der Größe. Die Berichtspflichten greifen gestaffelt:</p>
      <ul>
        <li><strong>Ab 250 Mitarbeitende:</strong> Jährliche Berichterstattung ab 2027</li>
        <li><strong>150–249 Mitarbeitende:</strong> Alle drei Jahre ab 2027</li>
        <li><strong>100–149 Mitarbeitende:</strong> Alle drei Jahre ab 2031</li>
      </ul>

      <h2>Was müssen Unternehmen jetzt tun?</h2>
      <p>Die Umsetzungsfrist endet am 7. Juni 2026. Unternehmen sollten jetzt handeln:</p>
      <ol>
        <li><strong>Bestandsaufnahme:</strong> Aktuelle Vergütungsstrukturen analysieren und dokumentieren</li>
        <li><strong>Gap-Analyse:</strong> Geschlechtsspezifische Entgeltunterschiede identifizieren und bewerten</li>
        <li><strong>Prozesse anpassen:</strong> Stellenausschreibungen, Gehaltsverhandlungen und Reporting-Prozesse überarbeiten</li>
        <li><strong>Schulungen:</strong> HR-Teams und Führungskräfte auf die neuen Anforderungen vorbereiten</li>
      </ol>

      <h2>Besonderheiten in Luxemburg</h2>
      <p>Luxemburg muss die EU-Richtlinie in nationales Recht umsetzen. Dabei können strengere Regelungen gelten als das EU-Minimum. Unternehmen mit Sitz in Luxemburg sollten die nationale Umsetzung genau verfolgen und sich frühzeitig beraten lassen.</p>

      <h2>Wie JDM Advisory unterstützt</h2>
      <p>Als unabhängiger Berater begleite ich Unternehmen bei der Vorbereitung auf die Entgelttransparenzrichtlinie — von der Erstanalyse bis zur Implementierung konformer Prozesse. Mein Ansatz: pragmatisch, datengestützt, ohne Overhead.</p>
    `,
    faqItems: [
      {
        question:
          "Ab wann gilt die EU-Entgelttransparenzrichtlinie?",
        answer:
          "Die Mitgliedstaaten müssen die Richtlinie bis zum 7. Juni 2026 in nationales Recht umsetzen. Ab diesem Datum gelten die neuen Regelungen.",
      },
      {
        question:
          "Müssen auch kleine Unternehmen Gehälter offenlegen?",
        answer:
          "Die Informationspflichten gegenüber Bewerbern und Mitarbeitenden gelten für alle Arbeitgeber. Die regelmäßigen Berichtspflichten greifen jedoch erst ab 100 Mitarbeitenden.",
      },
      {
        question:
          "Was passiert bei Verstößen gegen die Richtlinie?",
        answer:
          "Die Richtlinie sieht wirksame, verhältnismäßige und abschreckende Sanktionen vor. Bei einer geschlechtsspezifischen Entgeltlücke von mehr als 5 % ohne sachliche Rechtfertigung muss eine gemeinsame Entgeltbewertung mit Arbeitnehmervertretern durchgeführt werden.",
      },
      {
        question:
          "Muss ich in Stellenanzeigen ein Gehalt angeben?",
        answer:
          "Ja — Arbeitgeber müssen künftig vor dem Vorstellungsgespräch die Gehaltsspanne oder das Einstiegsgehalt mitteilen, entweder in der Stellenausschreibung oder auf andere Weise.",
      },
    ],
  },
];

export function getPostsByLang(lang: "de" | "en"): BlogPost[] {
  return blogPosts.filter((post) => post.lang === lang);
}

export function getPostBySlug(
  slug: string,
  lang: "de" | "en"
): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug && post.lang === lang);
}

export function getAllSlugs(): { slug: string; lang: "de" | "en" }[] {
  return blogPosts.map((post) => ({ slug: post.slug, lang: post.lang }));
}
