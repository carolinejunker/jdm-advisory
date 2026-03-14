import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jens Druckenmüller — Unabhängiger Berater",
  description:
    "Unabhängige Beratung & Zweitmeinungen für weitreichende Entscheidungen. Luxemburg · Dubai.",
  openGraph: {
    title: "Jens Druckenmüller — Unabhängiger Berater",
    description:
      "Unabhängige Beratung & Zweitmeinungen für weitreichende Entscheidungen.",
    url: "https://jdm-advisory.com/de",
    type: "website",
    locale: "de_DE",
  },
};

export default function DeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div lang="de">{children}</div>;
}
