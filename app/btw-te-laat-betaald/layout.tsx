import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw te laat betaald? Dit controleer je eerst | BoeteRadar",
  description:
    "Heb je je btw te laat betaald in België? Bekijk wat je best nakijkt, welk bewijs je bewaart en welke officiële bronnen je kan controleren.",
  alternates: {
    canonical: "https://www.boeteradar.be/btw-te-laat-betaald",
  },
  openGraph: {
    title: "Btw te laat betaald?",
    description:
      "Bekijk wat je eerst controleert als je btw te laat betaald is.",
    url: "https://www.boeteradar.be/btw-te-laat-betaald",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwTeLaatBetaaldLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}