import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw-deadline checklist België | BoeteRadar",
  description:
    "Gratis btw-deadline checklist voor België. Controleer Intervat, btw-aangifte, betaling, bewijsstukken en boekhoudercontrole.",
  alternates: {
    canonical:
      "https://www.boeteradar.be/checklists/btw-deadline-checklist",
  },
  openGraph: {
    title: "Btw-deadline checklist België",
    description:
      "Gebruik een praktische checklist om je btw-aangifte, betaling en bewijsstukken beter op te volgen.",
    url: "https://www.boeteradar.be/checklists/btw-deadline-checklist",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwDeadlineChecklistLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}