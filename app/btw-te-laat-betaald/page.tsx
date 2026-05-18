import type { Metadata } from "next";
import BtwTeLaatBetaaldClient from "./BtwTeLaatBetaaldClient";

export const metadata: Metadata = {
  title: "Btw te laat betaald? | BoeteRadar België",
  description:
    "Btw te laat betaald of nog niet betaald? Bereken een indicatie van nalatigheidsinterest, controleer je betaling en zie wat je best eerst doet.",
  alternates: {
    canonical: "https://www.boeteradar.be/btw-te-laat-betaald",
  },
  openGraph: {
    title: "Btw te laat betaald?",
    description:
      "Check wat je best doet als je btw te laat betaald is, nog openstaat of samenvalt met een te late aangifte.",
    url: "https://www.boeteradar.be/btw-te-laat-betaald",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwTeLaatBetaaldPage() {
  return <BtwTeLaatBetaaldClient />;
}