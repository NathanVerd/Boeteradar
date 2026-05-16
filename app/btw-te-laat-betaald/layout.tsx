import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw te laat betaald in België? Check je mogelijke risico | BoeteRadar",
  description:
    "Check wat je mogelijk riskeert als je btw te laat betaald is. Krijg een eerste indicatie, praktische stappen, officiële bronnen en een btw-deadline checklist.",
  alternates: {
    canonical: "https://www.boeteradar.be/btw-te-laat-betaald",
  },
  openGraph: {
    title: "Btw te laat betaald in België?",
    description:
      "Krijg een eerste indicatie van je mogelijke risico en zie welke stappen je best controleert.",
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