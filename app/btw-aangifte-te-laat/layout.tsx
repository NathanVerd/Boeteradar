import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Btw-aangifte te laat in België? Check je mogelijke risico | BoeteRadar",
  description:
    "Check wat je mogelijk riskeert als je btw-aangifte te laat is in België. Krijg een eerste indicatie, stappenplan, officiële bronnen en btw-deadline checklist.",
  alternates: {
    canonical: "https://boeteradar.vercel.app/btw-aangifte-te-laat",
  },
  openGraph: {
    title: "Btw-aangifte te laat in België?",
    description:
      "Krijg een eerste indicatie van je mogelijke risico en zie wat je best controleert bij een te late btw-aangifte.",
    url: "https://boeteradar.vercel.app/btw-aangifte-te-laat",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

export default function BtwAangifteTeLaatLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}