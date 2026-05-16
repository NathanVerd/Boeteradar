import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Personenbelasting noodchecklist België | BoeteRadar",
  description:
    "Gratis noodchecklist voor een te late of onduidelijke aangifte personenbelasting. Controleer MyMinfin, aanslagjaar, fiscale fiches, bewijsstukken en boekhoudercommunicatie.",
  alternates: {
    canonical:
      "https://www.boeteradar.be/checklists/personenbelasting-noodchecklist",
  },
  openGraph: {
    title: "Personenbelasting noodchecklist België",
    description:
      "Verzamel snel wat je nodig hebt als je aangifte personenbelasting te laat is of nog openstaat.",
    url: "https://www.boeteradar.be/checklists/personenbelasting-noodchecklist",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function PersonenbelastingNoodchecklistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}