import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw te laat betaald? Interest & stappenplan | BoeteRadar België",
  description:
    "Check snel je mogelijke risico als je btw te laat betaald hebt in België. Bekijk een ruwe interestindicatie, stappenplan en officiële bronnen. Geen juridisch advies.",
  keywords: [
    "btw te laat betaald",
    "btw betaling te laat",
    "nalatigheidsinterest btw",
    "btw betalen België",
    "BoeteRadar België",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app/btw-te-laat-betaald",
  },
  openGraph: {
    title: "Btw te laat betaald? Check je risico",
    description:
      "Snelle Belgische checker voor een laattijdige btw-betaling. Met stappenplan en officiële bronnen.",
    url: "https://boeteradar.vercel.app/btw-te-laat-betaald",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwTeLaatBetaaldLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}