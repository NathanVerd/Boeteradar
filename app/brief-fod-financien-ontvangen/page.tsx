import type { Metadata } from "next";
import BriefFodFinancienClient from "./BriefFodFinancienClient";

export const metadata: Metadata = {
  title: "Brief van FOD Financiën ontvangen? | BoeteRadar België",
  description:
    "Kreeg je een brief, eBox-bericht of MyMinfin-melding van FOD Financiën? Check hoe dringend het is, wat je moet bewaren en wanneer je hulp vraagt.",
  alternates: {
    canonical: "https://www.boeteradar.be/brief-fod-financien-ontvangen",
  },
  openGraph: {
    title: "Brief van FOD Financiën ontvangen?",
    description:
      "Check wat een brief, eBox-bericht of MyMinfin-melding van FOD Financiën mogelijk betekent en wat je eerst doet.",
    url: "https://www.boeteradar.be/brief-fod-financien-ontvangen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BriefFodFinancienOntvangenPage() {
  return <BriefFodFinancienClient />;
}