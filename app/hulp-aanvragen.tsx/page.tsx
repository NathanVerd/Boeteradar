import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hulp aanvragen | BoeteRadar België",
  description:
    "Vraag hulp aan als je twijfelt over een btw-probleem, brief van FOD Financiën, personenbelasting of een administratieve deadline.",
  alternates: {
    canonical: "https://www.boeteradar.be/hulp-aanvragen",
  },
  openGraph: {
    title: "Hulp aanvragen via BoeteRadar",
    description:
      "Laat weten waar je mee vastzit en welke administratieve situatie je wil laten nakijken.",
    url: "https://www.boeteradar.be/hulp-aanvragen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const helpSituations = [
  "Je kreeg een brief, eBox-bericht of MyMinfin-melding van FOD Financiën.",
  "Je btw-aangifte of btw-betaling is mogelijk te laat.",
  "Je personenbelasting is nog open, onzeker of te laat.",
  "Je kreeg een voorstel van wijziging, boete, herinnering of aanslag.",
  "Je weet niet welke documenten je moet bewaren of doorsturen.",
];

const whatToPrepare = [
  "Over welk probleem het gaat.",
  "Of er een termijn of datum in de brief staat.",
  "Of je al gereageerd of betaald hebt.",
  "Of je met een boekhouder werkt.",
  "Welke officiële berichten je hebt ontvangen.",
];

export default function HulpAanvragenPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Hulp aanvragen"
        subtitle="Voor wanneer je niet zeker weet wat je volgende stap is."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Hulp aanvragen
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Twijfel je over een brief, boete of deadline?
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar helpt je eerst zelf overzicht krijgen. Als je daarna nog
            twijfelt, kan je een hulpaanvraag indienen. Dan beschrijf je kort je
            situatie, zodat duidelijk wordt welke ondersteuning je nodig hebt.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Deel geen rijksregisternummer, klantnummer, officiële documenten of
            gevoelige persoonsgegevens via het formulier. Beschrijf je situatie
            algemeen en concreet.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white transition hover:bg-orange-700"
            >
              Hulpaanvraag openen
            </a>

            <Link
              href="/"
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Eerst een check doen
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-600">
              Wanneer gebruiken?
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Vooral bij fiscale of administratieve twijfel.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-700">
              {helpSituations.map((item) => (
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
              Voor je begint
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Leg eerst de basisinformatie klaar.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-300">
              {whatToPrepare.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-orange-300">
                    ✓
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Belangrijk
          </p>

          <h2 className="mt-2 text-2xl font-black">
            BoeteRadar is geen officiële instantie.
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Een hulpaanvraag via BoeteRadar vervangt geen juridisch, fiscaal of
            boekhoudkundig advies. Bij dringende termijnen, boetes, grote
            bedragen of officiële beslissingen controleer je altijd de officiële
            bron of contacteer je een bevoegde professional.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white transition hover:bg-orange-700"
            >
              Hulpaanvraag indienen →
            </a>

            <Link
              href="/disclaimer"
              className="rounded-full border border-orange-200 bg-white px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Lees de disclaimer
            </Link>
          </div>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}