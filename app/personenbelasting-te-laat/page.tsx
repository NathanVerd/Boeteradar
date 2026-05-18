import type { Metadata } from "next";
import PersonenbelastingTeLaatClient from "./PersonenbelastingTeLaatClient";

export const metadata: Metadata = {
  title: "Personenbelasting te laat? | BoeteRadar België",
  description:
    "Is je aangifte personenbelasting te laat, nog open of onzeker? Check wat je eerst controleert in MyMinfin, wat je bewaart en wanneer je hulp vraagt.",
  alternates: {
    canonical: "https://www.boeteradar.be/personenbelasting-te-laat",
  },
  openGraph: {
    title: "Personenbelasting te laat?",
    description:
      "Check wat je best doet als je aangifte personenbelasting te laat is of nog openstaat in MyMinfin.",
    url: "https://www.boeteradar.be/personenbelasting-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function PersonenbelastingTeLaatPage() {
  return <PersonenbelastingTeLaatClient />;
}