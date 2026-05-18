import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Feedback geven | Help BoeteRadar verbeteren",
  description:
    "Mis je een situatie op BoeteRadar of wil je feedback geven? Stel een nieuwe check voor of deel wat onduidelijk is.",
  alternates: {
    canonical: "https://www.boeteradar.be/feedback",
  },
  openGraph: {
    title: "Feedback geven aan BoeteRadar",
    description:
      "Help BoeteRadar verbeteren door ontbrekende situaties of onduidelijke checks door te geven.",
    url: "https://www.boeteradar.be/feedback",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const existingChecks = [
  {
    label: "Btw-aangifte te laat",
    href: "/btw-aangifte-te-laat",
  },
  {
    label: "Btw te laat betaald",
    href: "/btw-te-laat-betaald",
  },
  {
    label: "Personenbelasting te laat",
    href: "/personenbelasting-te-laat",
  },
  {
    label: "Autokeuring vervallen",
    href: "/autokeuring-vervallen",
  },
  {
    label: "Student te veel gewerkt",
    href: "/student-te-veel-gewerkt",
  },
];

const feedbackExamples = [
  "Een administratieve fout die nog ontbreekt.",
  "Een check die onduidelijk of te algemeen voelt.",
  "Een resultaat dat volgens jou beter uitgelegd moet worden.",
  "Een bron, regel of situatie die volgens jou extra aandacht verdient.",
];

export default function FeedbackPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Feedback"
        subtitle="Help BoeteRadar nuttiger en duidelijker maken."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Feedback
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Welke situatie moet BoeteRadar nog kunnen checken?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar wordt stap voor stap verbeterd. Jouw feedback helpt om te
            zien welke administratieve situaties onduidelijk zijn en welke checks
            het meeste nut hebben.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Je hoeft geen lang verhaal te schrijven. Een concrete situatie is al
            genoeg: wat gebeurde er, waar twijfelde je over en wat had je willen
            weten?
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white transition hover:bg-orange-700"
            >
              Feedbackformulier openen
            </a>

            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Bekijk bestaande checks
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-600">
              Wat kan je doorgeven?
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Vooral concrete situaties zijn nuttig.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-700">
              {feedbackExamples.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-300">
              Goed om te weten
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Deel geen gevoelige gegevens.
            </h2>

            <p className="mt-4 leading-7 text-slate-300">
              Stuur geen rijksregisternummer, klantnummer, officiële documenten,
              medische gegevens of andere gevoelige persoonlijke informatie door.
              Beschrijf je situatie liever algemeen.
            </p>

            <p className="mt-4 leading-7 text-slate-300">
              BoeteRadar behandelt geen persoonlijke dossiers. Feedback wordt
              gebruikt om de website en toekomstige checks beter te maken.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Bestaande checks
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Misschien staat je situatie er al tussen.
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            BoeteRadar heeft momenteel deze checks. Mis je iets dat hier niet
            tussen staat, dan is dat precies de feedback die nuttig is.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {existingChecks.map((check) => (
              <Link
                key={check.href}
                href={check.href}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-4 font-bold text-slate-800 transition hover:border-orange-200 hover:bg-orange-50 hover:text-orange-700"
              >
                {check.label} →
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Nieuwe check voorstellen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat zou jij willen kunnen berekenen of controleren?
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Denk aan situaties zoals een brief van FOD Financiën, een
            onduidelijk aanslagbiljet, een administratieve deadline, een
            verkeersdocument of een probleem rond werk, studie of zelfstandige
            administratie.
          </p>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-flex rounded-full bg-orange-600 px-6 py-3 font-black text-white transition hover:bg-orange-700"
          >
            Geef feedback →
          </a>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}