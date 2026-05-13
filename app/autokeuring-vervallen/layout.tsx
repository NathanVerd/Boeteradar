import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autokeuring vervallen? Risico & stappenplan | BoeteRadar België",
  description:
    "Check snel wat je best doet als je autokeuring vervallen is. Bekijk risico, stappenplan en officiële bronnen. Geen juridisch advies.",
  keywords: [
    "autokeuring vervallen",
    "autokeuring te laat",
    "keuring verlopen",
    "vervallen autokeuring boete",
    "BoeteRadar België",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app/autokeuring-vervallen",
  },
  openGraph: {
    title: "Autokeuring vervallen? Check je risico",
    description:
      "Snelle Belgische checker voor een vervallen autokeuring. Met stappenplan en officiële bronnen.",
    url: "https://boeteradar.vercel.app/autokeuring-vervallen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function AutokeuringVervallenLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}