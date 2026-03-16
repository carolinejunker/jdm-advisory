import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equal Pay Compliance — EU-Richtlinie bis Juni 2026 | Jens Druckenmüller",
  description:
    "Die EU-Entgelttransparenzrichtlinie tritt am 7. Juni 2026 in Kraft. Bestandsaufnahme, Gap-Assessment und Implementierungsbegleitung für Unternehmen jeder Größe.",
  openGraph: {
    title: "Equal Pay Compliance — Jens Druckenmüller",
    description:
      "Ihr Unternehmen muss bis Juni 2026 compliant sein. Wir zeigen Ihnen wie.",
    url: "https://jdm-advisory.com/equal-pay",
    type: "website",
    locale: "de_DE",
  },
};

export default function EqualPayLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
