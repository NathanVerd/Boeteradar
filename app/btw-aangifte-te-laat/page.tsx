import type { Metadata } from "next";
import BtwAangifteTeLaatClient from "./BtwAangifteTeLaatClient";

export const metadata: Metadata = {
  title: "Btw-aangifte te laat? | BoeteRadar België",
  description:
    "Is je btw-aangifte te laat of nog niet ingediend? Bereken een indicatie, controleer betaling en zie wat je best eerst doet.",
  alternates: {
    canonical: "https://www.boeteradar.be/btw-aangifte-te-laat",
  },
  openGraph: {
    title: "Btw-aangifte te laat?",
    description:
      "Check wat je best doet als je btw-aangifte te laat is, nog openstaat of samenvalt met een betalingsprobleem.",
    url: "https://www.boeteradar.be/btw-aangifte-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwAangifteTeLaatPage() {
  return <BtwAangifteTeLaatClient />;
}