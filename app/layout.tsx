import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BoeteRadar België | Snelle checks voor administratieve fouten",
  description:
    "BoeteRadar België helpt je snel inschatten wat je mogelijk riskeert bij Belgische administratieve fouten zoals btw-aangifte te laat, belastingdeadlines, autokeuring en zelfstandigenadministratie.",
  keywords: [
    "BoeteRadar België",
    "boete berekenen België",
    "btw-aangifte te laat",
    "administratieve boete België",
    "Belgische deadlines",
    "autokeuring vervallen",
    "personenbelasting te laat",
  ],
  alternates: {
    canonical: "https://boeteradar.vercel.app",
  },
  openGraph: {
    title: "BoeteRadar België",
    description:
      "Snelle Belgische checks voor administratieve fouten, deadlines en mogelijke boetes.",
    url: "https://boeteradar.vercel.app",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
  verification: {
    google: "j51kbhPGLePnircPYs-LtkkG5C4M4PyQgJbe8EW2Co0",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="nl-BE"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        {children}
        <Analytics />
      </body>
    </html>
  );
}