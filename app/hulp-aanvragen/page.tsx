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
      "Beschrijf kort je administratieve situatie en vraag hulp als je twijfelt over je volgende stap.",
    url: "https://www.boeteradar.be/hulp-aanvragen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const situations = [
  "Btw-aangifte te laat",
  "Btw te laat betaald",
  "Brief van FOD Financiën",
  "Personenbelasting",
  "Aanslag van ambtswege",
  "Voorstel van wijziging",
  "Betalingsprobleem",
  "Iets anders",
];

const profiles = [
  "Particulier",
  "Student",
  "Zelfstandige",
  "Vennootschap",
  "Ik weet het niet",
];

const deadlines = [
  "Ja, minder dan 7 dagen",
  "Ja, 7 tot 30 dagen",
  "Ja, meer dan 30 dagen",
  "Nee",
  "Ik weet het niet",
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
            Vul hieronder kort je situatie in. BoeteRadar is geen officiële
            instantie en geeft zelf geen juridisch, fiscaal of boekhoudkundig
            advies, maar je aanvraag kan helpen om duidelijk te maken welke
            ondersteuning je mogelijk nodig hebt.
          </p>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="font-black text-orange-900">
              Deel geen gevoelige gegevens.
            </p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Stuur geen rijksregisternummer, klantnummer, officiële documenten,
              medische gegevens of volledige brieven door. Beschrijf je situatie
              algemeen en concreet.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Aanvraagformulier
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Beschrijf kort waar je mee vastzit.
          </h2>

          <form action="/api/hulp-aanvragen" method="post" className="mt-6 grid gap-5">
            <label className="font-bold">
              Waarover gaat je situatie?
              <select
                name="situation"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="">Kies een situatie</option>
                {situations.map((situation) => (
                  <option key={situation} value={situation}>
                    {situation}
                  </option>
                ))}
              </select>
            </label>

            <label className="font-bold">
              Ben je particulier, student, zelfstandige of vennootschap?
              <select
                name="profile"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="">Kies je profiel</option>
                {profiles.map((profile) => (
                  <option key={profile} value={profile}>
                    {profile}
                  </option>
                ))}
              </select>
            </label>

            <label className="font-bold">
              Is er een termijn of deadline?
              <select
                name="deadline"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="">Kies een optie</option>
                {deadlines.map((deadline) => (
                  <option key={deadline} value={deadline}>
                    {deadline}
                  </option>
                ))}
              </select>
            </label>

            <label className="font-bold">
              Staat er een bedrag in de brief of situatie?
              <select
                name="amountMentioned"
                required
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="">Kies een optie</option>
                <option value="Ja">Ja</option>
                <option value="Nee">Nee</option>
                <option value="Ik weet het niet">Ik weet het niet</option>
              </select>
            </label>

            <label className="font-bold">
              Beschrijf kort je situatie
              <textarea
                name="message"
                required
                minLength={20}
                rows={6}
                placeholder="Bijvoorbeeld: Ik kreeg een brief van FOD Financiën over mijn aangifte. Er staat een termijn in, maar ik weet niet wat ik nu eerst moet doen."
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal leading-7"
              />
            </label>

            <div className="grid gap-5 md:grid-cols-2">
              <label className="font-bold">
                E-mailadres
                <input
                  name="email"
                  type="email"
                  required
                  placeholder="jij@email.be"
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                />
              </label>

              <label className="font-bold">
                Telefoonnummer optioneel
                <input
                  name="phone"
                  type="tel"
                  placeholder="+32 ..."
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                />
              </label>
            </div>

            <label className="flex gap-3 rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700">
              <input
                name="consent"
                type="checkbox"
                required
                value="Akkoord"
                className="mt-1 h-4 w-4 shrink-0"
              />
              <span>
                Ik begrijp dat BoeteRadar geen officiële instantie is en dat ik
                geen gevoelige gegevens zoals rijksregisternummer, klantnummer of
                officiële documenten mag doorsturen.
              </span>
            </label>

            <button
              type="submit"
              className="rounded-xl bg-orange-600 px-5 py-4 font-black text-white transition hover:bg-orange-700"
            >
              Hulpaanvraag verzenden
            </button>
          </form>
        </section>

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Belangrijk
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Dit vervangt geen professioneel advies.
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Bij dringende termijnen, officiële beslissingen, grote bedragen,
            boetes of aanslagen controleer je altijd de officiële bron of vraag
            je rechtstreeks advies aan een bevoegde professional.
          </p>

          <Link
            href="/disclaimer"
            className="mt-5 inline-flex rounded-full border border-orange-200 bg-orange-50 px-6 py-3 font-black text-orange-700 transition hover:bg-orange-100"
          >
            Lees de disclaimer
          </Link>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}