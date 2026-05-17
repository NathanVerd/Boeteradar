import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw-aangifte te laat? Dit kan je nu doen | BoeteRadar",
  description:
    "Is je btw-aangifte te laat in België? Bekijk wat je best eerst doet, wat je moet bewaren en welke officiële bronnen je kan controleren.",
  alternates: {
    canonical: "https://www.boeteradar.be/btw-aangifte-te-laat",
  },
  openGraph: {
    title: "Btw-aangifte te laat?",
    description:
      "Bekijk wat je nu best doet bij een te late btw-aangifte in België.",
    url: "https://www.boeteradar.be/btw-aangifte-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwAangifteTeLaatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}