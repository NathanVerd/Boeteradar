import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Autokeuring vervallen? Dit regel je eerst | BoeteRadar",
  description:
    "Is je autokeuring vervallen in België? Bekijk wat je best meteen regelt, wat je bewaart en welke officiële bronnen je kan controleren.",
  alternates: {
    canonical: "https://www.boeteradar.be/autokeuring-vervallen",
  },
  openGraph: {
    title: "Autokeuring vervallen?",
    description:
      "Bekijk wat je eerst doet als je technische keuring verlopen is.",
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