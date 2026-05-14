import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bronnen en updatebeleid | BoeteRadar België",
  description:
    "Lees hoe BoeteRadar België omgaat met officiële bronnen, updates en vereenvoudigde informatie.",
  alternates: {
    canonical: "https://boeteradar.vercel.app/bronnen",
  },
  openGraph: {
    title: "Bronnen en updatebeleid | BoeteRadar België",
    description:
      "Hoe BoeteRadar officiële bronnen gebruikt en waarom controle nodig blijft.",
    url: "https://boeteradar.vercel.app/bronnen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BronnenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}