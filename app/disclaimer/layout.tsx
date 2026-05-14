import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | BoeteRadar België",
  description:
    "Lees de disclaimer van BoeteRadar België. BoeteRadar geeft informatieve checks en vereenvoudigde indicaties, maar geen juridisch, fiscaal of boekhoudkundig advies.",
  alternates: {
    canonical: "https://boeteradar.vercel.app/disclaimer",
  },
  openGraph: {
    title: "Disclaimer | BoeteRadar België",
    description:
      "BoeteRadar geeft informatie en vereenvoudigde checks, geen professioneel advies.",
    url: "https://boeteradar.vercel.app/disclaimer",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function DisclaimerLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}