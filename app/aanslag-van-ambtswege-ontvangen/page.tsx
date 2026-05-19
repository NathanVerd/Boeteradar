import type { Metadata } from "next";
import AanslagVanAmbtswegeClient from "./AanslagVanAmbtswegeClient";

export const metadata: Metadata = {
  title: "Aanslag van ambtswege ontvangen? | BoeteRadar België",
  description:
    "Kreeg je een aanslag van ambtswege van FOD Financiën? Check hoe dringend je situatie is, wat je moet bewaren en wanneer je hulp vraagt.",
  alternates: {
    canonical: "https://www.boeteradar.be/aanslag-van-ambtswege-ontvangen",
  },
  openGraph: {
    title: "Aanslag van ambtswege ontvangen?",
    description:
      "Check wat een aanslag van ambtswege mogelijk betekent, welke termijn belangrijk is en wat je nu eerst doet.",
    url: "https://www.boeteradar.be/aanslag-van-ambtswege-ontvangen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function AanslagVanAmbtswegeOntvangenPage() {
  return <AanslagVanAmbtswegeClient />;
}