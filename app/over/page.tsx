import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Over BoeteRadar | Belgische checks voor administratieve fouten",
  description:
    "Lees wat BoeteRadar is, hoe de checks werken, welke bronnen gebruikt worden en waarom de site geen juridisch, fiscaal of boekhoudkundig advies geeft.",
  alternates: {
    canonical: "https://www.boeteradar.be/over",
  },
  openGraph: {
    title: "Over BoeteRadar",
    description:
      "BoeteRadar helpt je sneller overzicht krijgen bij Belgische administratieve fouten.",
    url: "https://www.boeteradar.be/over",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const whatItDoes = [
  "Je situatie omzetten naar duidelijke vragen.",
  "Een indicatieve berekening of risico-inschatting tonen.",
  "Aangeven wat je best controleert, bewaart of eerst doet.",
  "Doorverwijzen naar officiële bronnen waar dat nodig is.",
];

const whatItDoesNotDo = [
  "BoeteRadar neemt geen beslissingen zoals een overheid of administratie.",
  "BoeteRadar vervangt geen boekhouder, jurist, verzekeraar of officiële dienst.",
  "BoeteRadar kan niet garanderen dat een boete, interest of gevolg exact zo zal zijn.",
  "BoeteRadar behandelt geen persoonlijke dossiers.",
];

export default function OverPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Over BoeteRadar"
        subtitle="Waarom deze site bestaat en hoe je de checks gebruikt."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Over BoeteRadar
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Sneller weten waar je moet beginnen.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar is gemaakt voor mensen die plots twijfelen over een
            administratieve fout: een btw-deadline gemist, een betaling te laat,
            een belastingaangifte die nog openstaat, een vervallen autokeuring of
            onzekerheid rond studentenwerk.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            De site geeft geen officiële beslissing en geen persoonlijk advies.
            Het doel is eenvoudiger: je snel tonen wat je best nakijkt, welk
            bewijs je bewaart en wanneer je beter hulp vraagt.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Naar de checks
            </Link>

            <Link
              href="/bronnen"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Bekijk bronnen
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-600">
              Wat BoeteRadar wel doet
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Een duidelijk startpunt geven.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-700">
              {whatItDoes.map((item) => (
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
              Wat BoeteRadar niet doet
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Geen valse zekerheid geven.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-300">
              {whatItDoesNotDo.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-orange-300">
                    !
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Hoe de checks werken
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Je vult een paar gegevens in. BoeteRadar maakt er overzicht van.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Je kiest je situatie</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bijvoorbeeld btw te laat betaald, aangifte te laat of
                autokeuring vervallen.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Je vult gegevens in</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Zoals een bedrag, datum, status of vraag over documenten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Je krijgt houvast</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Je ziet een indicatie, aandachtspunten en mogelijke volgende
                stappen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Bronnen en voorzichtigheid
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Officiële bronnen blijven leidend.
          </h2>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            BoeteRadar verwijst waar mogelijk naar officiële websites zoals FOD
            Financiën, Vlaanderen.be, Student@work of andere bevoegde diensten.
            Die bronnen blijven belangrijker dan de samenvatting of berekening
            op deze site.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Regels, bedragen, deadlines en procedures kunnen wijzigen. Daarom
            staat op de pagina’s ook wanneer de inhoud laatst werd nagekeken en
            wordt bij twijfel altijd aangeraden om een officiële bron of
            professional te raadplegen.
          </p>

          <Link
            href="/bronnen"
            className="mt-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-black text-orange-700 transition hover:bg-orange-100"
          >
            Naar bronnen →
          </Link>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Feedback
          </p>

          <h2 className="mt-2 text-2xl font-black">
            BoeteRadar wordt stap voor stap verbeterd.
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Mis je een situatie, klopt iets niet duidelijk genoeg of voelt een
            check onvolledig? Dan is feedback welkom. Vooral concrete situaties
            helpen om betere checks te bouwen.
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

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}