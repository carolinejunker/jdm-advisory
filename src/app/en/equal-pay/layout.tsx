import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Equal Pay Compliance — EU Directive by June 2026 | Jens Druckenmüller",
  description:
    "The EU Pay Transparency Directive takes effect on 7 June 2026. Gap assessment, compliance review and implementation support for companies of all sizes.",
  openGraph: {
    title: "Equal Pay Compliance — Jens Druckenmüller",
    description:
      "Your company must be compliant by June 2026. We show you how.",
    url: "https://jdm-advisory.com/en/equal-pay",
    type: "website",
    locale: "en_US",
  },
};

export default function EqualPayEnLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="en">{children}</div>;
}
