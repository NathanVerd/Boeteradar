import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Student te veel gewerkt? Uren & risico checken | BoeteRadar België",
  description:
    "Check snel je risico als je denkt dat je te veel gewerkt hebt als student in België. Bekijk studentenuren, Groeipakket, stappenplan en officiële bronnen.",
  keywords: [
    "student te veel gewerkt",
    "jobstudent 650 uur",
    "studentenuren overschreden",
    "Groeipakket student werken",
    "Student@work uren",
    "BoeteRadar België",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app/student-te-veel-gewerkt",
  },
  openGraph: {
    title: "Student te veel gewerkt? Check je risico",
    description:
      "Snelle Belgische checker voor studentenuren, Groeipakket en mogelijke gevolgen.",
    url: "https://boeteradar.vercel.app/student-te-veel-gewerkt",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function StudentTeVeelGewerktLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}