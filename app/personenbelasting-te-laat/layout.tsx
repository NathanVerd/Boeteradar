import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personenbelasting te laat? Dit kan je nu doen | BoeteRadar",
  description:
    "Is je aangifte personenbelasting te laat of nog niet ingediend? Bekijk wat je best eerst nakijkt via MyMinfin, Tax-on-web of je boekhouder.",
  alternates: {
    canonical: "https://www.boeteradar.be/personenbelasting-te-laat",
  },
  openGraph: {
    title: "Personenbelasting te laat?",
    description:
      "Bekijk wat je eerst doet als je belastingaangifte te laat is of nog openstaat.",
    url: "https://www.boeteradar.be/personenbelasting-te-laat",
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