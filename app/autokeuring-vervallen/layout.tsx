import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autokeuring vervallen in België? Check je volgende stap | BoeteRadar",
  description:
    "Check wat je best doet als je autokeuring vervallen is. Krijg een eerste risico-inschatting, praktisch stappenplan en officiële bronnen.",
  alternates: {
    canonical: "https://www.boeteradar.be/autokeuring-vervallen",
  },
  openGraph: {
    title: "Autokeuring vervallen in België?",
    description:
      "Krijg een eerste indicatie van je mogelijke risico en zie welke stappen je best controleert.",
    url: "https://www.boeteradar.be/autokeuring-vervallen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function AutokeuringVervallenLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}