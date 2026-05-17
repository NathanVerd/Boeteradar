import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Te veel gewerkt als student? Dit kijk je na | BoeteRadar",
  description:
    "Denk je dat je te veel gewerkt hebt als student? Bekijk wat je best nakijkt rond Student@work, studentenuren, Groeipakket en bewijsstukken.",
  alternates: {
    canonical: "https://www.boeteradar.be/student-te-veel-gewerkt",
  },
  openGraph: {
    title: "Te veel gewerkt als student?",
    description:
      "Bekijk wat je eerst controleert als je twijfelt over je studentenuren.",
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