import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw-aangifte te laat? Boete berekenen & stappenplan | BoeteRadar België",
  description:
    "Bereken snel je risico bij een te late btw-aangifte in België. Bekijk mogelijke gevolgen, praktische stappen en officiële bronnen. Geen juridisch advies.",
  keywords: [
    "btw-aangifte te laat",
    "boete btw aangifte",
    "btw boete België",
    "btw aangifte vergeten",
    "BoeteRadar België",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app/btw-aangifte-te-laat",
  },
  openGraph: {
    title: "Btw-aangifte te laat? Bereken je risico",
    description:
      "Snelle Belgische stress-calculator voor een te late btw-aangifte. Met stappenplan en disclaimer.",
    url: "https://boeteradar.vercel.app/btw-aangifte-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwAangifteTeLaatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}