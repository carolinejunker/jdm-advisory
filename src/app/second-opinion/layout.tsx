import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Second Opinion — Unabhängige Reviews & Due Diligence | Jens Druckenmüller",
  description:
    "Unabhängige Prüfung von Berater-Ergebnissen, Due Diligence und Internal Audit Reviews. AI-gestützte Analyse, menschliches Urteil. Luxemburg & UAE.",
  openGraph: {
    title: "Your Second Opinion — Jens Druckenmüller",
    description:
      "Die zweite Meinung für Private Equity, Family Offices und Geschäftsleitungen.",
    url: "https://jdm-advisory.com/second-opinion",
    type: "website",
    locale: "de_DE",
  },
};

export default function SecondOpinionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
