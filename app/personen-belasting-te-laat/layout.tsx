import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personenbelasting te laat? Risico & stappenplan | BoeteRadar België",
  description:
    "Check snel wat je best doet als je aangifte personenbelasting te laat is in België. Met risico-inschatting, stappenplan en officiële bronnen. Geen juridisch advies.",
  keywords: [
    "personenbelasting te laat",
    "belastingaangifte te laat",
    "aangifte personenbelasting vergeten",
    "Tax-on-web te laat",
    "BoeteRadar België",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app/personenbelasting-te-laat",
  },
  openGraph: {
    title: "Personenbelasting te laat? Check je risico",
    description:
      "Snelle Belgische checker voor een laattijdige belastingaangifte. Met stappenplan en officiële bronnen.",
    url: "https://boeteradar.vercel.app/personenbelasting-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function PersonenbelastingTeLaatLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}