import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Personenbelasting te laat in België? Check je mogelijke risico | BoeteRadar",
  description:
    "Check wat je best doet als je aangifte personenbelasting te laat is of nog niet werd ingediend. Krijg een eerste indicatie, stappenplan, officiële bronnen en noodchecklist.",
  alternates: {
    canonical: "https://boeteradar.vercel.app/personenbelasting-te-laat",
  },
  openGraph: {
    title: "Personenbelasting te laat in België?",
    description:
      "Krijg een eerste indicatie van je mogelijke risico en zie wat je best controleert via MyMinfin, Tax-on-web of je boekhouder.",
    url: "https://boeteradar.vercel.app/personenbelasting-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function PersonenbelastingTeLaatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}