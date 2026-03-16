import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jens Druckenmüller — Unternehmer & Berater",
  description:
    "Unternehmer und unabhängiger Berater — mit wechselnden Themen, aber immer dem gleichen Anspruch. Luxemburg.",
  openGraph: {
    title: "Jens Druckenmüller — Unternehmer & Berater",
    description:
      "20 Jahre Boardroom. Jetzt auf eigene Rechnung.",
    url: "https://jdm-advisory.com",
    type: "website",
    locale: "de_DE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="de" className={`${playfair.variable} ${inter.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
