import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Your Second Opinion — Independent Reviews & Due Diligence | Jens Druckenmüller",
  description:
    "Independent review of advisory deliverables, due diligence and internal audit. AI-augmented analysis, human judgement. Luxembourg & Dubai.",
  openGraph: {
    title: "Your Second Opinion — Jens Druckenmüller",
    description:
      "The second opinion for private equity, family offices, and executive teams.",
    url: "https://jdm-advisory.com/en/second-opinion",
    type: "website",
    locale: "en_US",
  },
};

export default function SecondOpinionLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
