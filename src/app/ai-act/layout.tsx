import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EU AI Act — KI-Governance für Unternehmen | Jens Druckenmüller",
  description:
    "EU AI Act: Pflichten gelten bereits. KI-Inventur, Readiness-Assessment und Governance-Aufbau für Unternehmen. Strategische Beratung, keine Rechtsberatung.",
  openGraph: {
    title: "EU AI Act — KI-Governance für Unternehmen | Jens Druckenmüller",
    description:
      "Der EU AI Act betrifft jedes Unternehmen, das KI einsetzt. Wir helfen bei der organisatorischen Umsetzung.",
    url: "https://jdm-advisory.com/ai-act",
    type: "website",
    locale: "de_DE",
  },
};

export default function AIActLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
