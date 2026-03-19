import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EU AI Act — AI Governance for Businesses | Jens Druckenmüller",
  description:
    "EU AI Act: Obligations are already in effect. AI inventory, readiness assessment and governance setup for businesses. Strategic consulting, not legal advice.",
  openGraph: {
    title: "EU AI Act — AI Governance for Businesses | Jens Druckenmüller",
    description:
      "The EU AI Act affects every company using AI. We help with the organisational implementation.",
    url: "https://jdm-advisory.com/en/ai-act",
    type: "website",
    locale: "en_US",
  },
};

export default function AIActLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
