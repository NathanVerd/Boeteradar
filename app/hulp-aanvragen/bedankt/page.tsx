import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hulpaanvraag ontvangen | BoeteRadar België",
  description:
    "Je hulpaanvraag via BoeteRadar is ontvangen. Bekijk wat je ondertussen best bewaart of controleert.",
  alternates: {
    canonical: "https://www.boeteradar.be/hulp-aanvragen/bedankt",
  },
  robots: {
    index: false,
    follow: false,
  },
};

export default function HulpAanvragenBedanktPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Aanvraag ontvangen"
        subtitle="Je hulpaanvraag is verzonden."
      />

      <section className="mx-auto max-w-4xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Bedankt
          </p>

          <h1 className="text-4xl font-black tracking-tight md:text-5xl">
            Je hulpaanvraag is ontvangen.
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-700">
            We hebben je aanvraag doorgestuurd. Bewaar intussen alle relevante
            documenten, datums, betalingsbewijzen, berichten en screenshots.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="font-black text-orange-900">
              Heb je een dringende termijn?
            </p>
            <p className="mt-2 leading-7 text-slate-700">
              Wacht dan niet af. Controleer de officiële brief, MyMinfin, eBox
              of contacteer rechtstreeks een boekhouder, fiscalist, jurist of de
              bevoegde instantie.
            </p>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Terug naar homepage
            </Link>

            <Link
              href="/bronnen"
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Officiële bronnen bekijken
            </Link>
          </div>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}