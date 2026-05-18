import type { Metadata } from "next";
import AutokeuringVervallenClient from "./AutokeuringVervallenClient";

export const metadata: Metadata = {
  title: "Autokeuring vervallen? | BoeteRadar België",
  description:
    "Is je autokeuring vervallen? Check hoe dringend je situatie is, wat je best bewaart en wanneer je extra voorzichtig moet zijn.",
  alternates: {
    canonical: "https://www.boeteradar.be/autokeuring-vervallen",
  },
  openGraph: {
    title: "Autokeuring vervallen?",
    description:
      "Check wat je best doet als je technische keuring verlopen is en of je extra moet opletten met rijden, bewijs en verzekering.",
    url: "https://www.boeteradar.be/autokeuring-vervallen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function AutokeuringVervallenPage() {
  return <AutokeuringVervallenClient />;
}