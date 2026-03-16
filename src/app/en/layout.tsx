import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jens Druckenmüller — Entrepreneur & Advisor",
  description:
    "Entrepreneur and independent advisor — the topics change, but the standards never do.",
  openGraph: {
    title: "Jens Druckenmüller — Entrepreneur & Advisor",
    description:
      "20 years in the boardroom. Now on my own terms.",
    url: "https://jdm-advisory.com/en",
    type: "website",
    locale: "en_US",
  },
};

export default function EnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="en">{children}</div>;
}
