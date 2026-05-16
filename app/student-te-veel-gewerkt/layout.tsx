import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Te veel gewerkt als student in België? Check je mogelijke risico | BoeteRadar",
  description:
    "Check studentenuren, mogelijke gevolgen voor sociale bijdragen, Groeipakket en officiële bronnen als je denkt dat je te veel gewerkt hebt als student.",
  alternates: {
    canonical: "https://www.boeteradar.be/student-te-veel-gewerkt",
  },
  openGraph: {
    title: "Te veel gewerkt als student in België?",
    description:
      "Controleer studentenuren, mogelijke gevolgen voor Groeipakket en welke officiële bronnen je moet nakijken.",
    url: "https://www.boeteradar.be/student-te-veel-gewerkt",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function StudentTeVeelGewerktLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}