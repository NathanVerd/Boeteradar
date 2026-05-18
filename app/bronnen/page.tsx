import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bronnen | Hoe BoeteRadar officiële bronnen gebruikt",
  description:
    "Lees hoe BoeteRadar officiële Belgische bronnen gebruikt voor btw, personenbelasting, brieven van FOD Financiën, autokeuring, studentenwerk en administratieve checks.",
  alternates: {
    canonical: "https://www.boeteradar.be/bronnen",
  },
  openGraph: {
    title: "Bronnen van BoeteRadar",
    description:
      "BoeteRadar verwijst naar officiële bronnen en gebruikt die als basis voor Belgische administratieve checks.",
    url: "https://www.boeteradar.be/bronnen",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const sourceGroups = [
  {
    title: "Btw en ondernemingen",
    description:
      "Voor btw-aangifte, btw-betaling, Intervat, boetes en nalatigheidsinteresten.",
    links: [
      {
        label: "FOD Financiën — Btw",
        href: "https://financien.belgium.be/nl/ondernemingen/btw",
      },
      {
        label: "FOD Financiën — Intervat",
        href: "https://financien.belgium.be/nl/E-services/Intervat",
      },
      {
        label: "FOD Financiën — Btw betalen",
        href: "https://financien.belgium.be/nl/ondernemingen/btw/betaling-teruggave/betaling",
      },
      {
        label: "FOD Financiën — Btw-boeten",
        href: "https://financien.belgium.be/nl/ondernemingen/btw/boeten",
      },
    ],
  },
  {
    title: "Personenbelasting",
    description:
      "Voor Tax-on-web, MyMinfin, aangiftestatus, indieningstermijnen en communicatie met FOD Financiën.",
    links: [
      {
        label: "FOD Financiën — Tax-on-web",
        href: "https://financien.belgium.be/nl/E-services/Tax-on-web",
      },
      {
        label: "FOD Financiën — MyMinfin",
        href: "https://financien.belgium.be/nl/E-services/MyMinfin",
      },
      {
        label: "FOD Financiën — Indieningstermijnen aangiften",
        href: "https://financien.belgium.be/nl/experten_partners/economische-beroepen/indieningstermijnen-aangiften",
      },
    ],
  },
  {
    title: "Brief of bericht van FOD Financiën",
    description:
      "Voor brieven, eBox-berichten, MyMinfin-meldingen, contact met FOD Financiën en het opvolgen van officiële communicatie.",
    links: [
      {
        label: "FOD Financiën — MyMinfin",
        href: "https://financien.belgium.be/nl/E-services/MyMinfin",
      },
      {
        label: "FOD Financiën — Contact",
        href: "https://financien.belgium.be/nl/Contact",
      },
      {
        label: "FOD Financiën — e-services",
        href: "https://financien.belgium.be/nl/E-services",
      },
      {
        label: "eBox — Officiële digitale brievenbus",
        href: "https://myebox.be/",
      },
    ],
  },
  {
    title: "Autokeuring",
    description:
      "Voor technische keuring, keuringscentra en algemene informatie rond voertuigkeuring.",
    links: [
      {
        label: "Vlaanderen.be — Technische keuring",
        href: "https://www.vlaanderen.be/auto-en-motor/technische-keuring-van-voertuigen",
      },
      {
        label: "GOCA Vlaanderen — Keuringscentra",
        href: "https://www.gocavlaanderen.be",
      },
    ],
  },
  {
    title: "Studentenwerk",
    description:
      "Voor Student@work, studentenuren, Groeipakket en werken als jobstudent.",
    links: [
      {
        label: "Student@work — Urenpakket en impact",
        href: "https://www.studentatwork.be/nl/urenpakket-en-impact.html",
      },
      {
        label: "Vlaanderen.be — Werken als jobstudent",
        href: "https://www.vlaanderen.be/werken-als-jobstudent",
      },
      {
        label: "Vlaanderen.be — Groeipakket behouden als student",
        href: "https://www.vlaanderen.be/algemene-voorwaarden-en-procedure-voor-het-groeipakket/groeipakket-behouden-voor-wie-werkt-en-studeert",
      },
    ],
  },
];

const checks = [
  {
    label: "Btw-aangifte te laat",
    href: "/btw-aangifte-te-laat",
  },
  {
    label: "Btw te laat betaald",
    href: "/btw-te-laat-betaald",
  },
  {
    label: "Brief van FOD Financiën ontvangen",
    href: "/brief-fod-financien-ontvangen",
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

export default function BronnenPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Bronnen"
        subtitle="Hoe BoeteRadar officiële bronnen gebruikt."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Bronnen
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Officiële bronnen blijven leidend.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar probeert elke check te koppelen aan officiële Belgische
            bronnen. De site vertaalt die informatie naar eenvoudige vragen,
            indicaties en stappen, maar vervangt nooit de officiële bron zelf.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Regels, bedragen, deadlines en procedures kunnen wijzigen. Gebruik
            BoeteRadar dus als startpunt en controleer bij twijfel altijd verder
            bij de bevoegde instantie of een professional.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              href="/"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Naar de checks
            </Link>

            <Link
              href="/over"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Over BoeteRadar
            </Link>
          </div>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black text-orange-600">1</p>
            <h2 className="mt-2 text-2xl font-black">Officiële bron</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              Waar mogelijk verwijzen checks naar FOD Financiën, Vlaanderen.be,
              Student@work, GOCA of andere bevoegde diensten.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black text-orange-600">2</p>
            <h2 className="mt-2 text-2xl font-black">Eenvoudige uitleg</h2>
            <p className="mt-3 text-sm leading-6 text-slate-700">
              BoeteRadar vat complexe informatie samen in vragen, indicaties en
              praktische stappen.
            </p>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-8">
            <p className="text-sm font-black text-orange-300">3</p>
            <h2 className="mt-2 text-2xl font-black">Geen eindbeslissing</h2>
            <p className="mt-3 text-sm leading-6 text-slate-300">
              De echte beoordeling blijft bij de administratie, overheid,
              verzekeraar, uitbetaler of bevoegde expert.
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Bronnen per thema
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Waar de checks naar verwijzen.
          </h2>

          <div className="mt-6 grid gap-5">
            {sourceGroups.map((group) => (
              <div
                key={group.title}
                className="rounded-2xl border border-slate-200 bg-slate-50 p-5"
              >
                <div className="grid gap-4 md:grid-cols-[0.9fr_1.1fr]">
                  <div>
                    <h3 className="text-xl font-black">{group.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-slate-700">
                      {group.description}
                    </p>
                  </div>

                  <div className="grid gap-2">
                    {group.links.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target="_blank"
                        rel="noreferrer"
                        className="rounded-xl bg-white px-4 py-3 text-sm font-bold text-slate-800 transition hover:bg-orange-50 hover:text-orange-700"
                      >
                        {link.label} →
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Checks op BoeteRadar
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Elke check toont ook eigen bronnen.
          </h2>

          <p className="mt-3 max-w-3xl leading-7 text-slate-700">
            Onderaan elke checkpagina staan de bronnen die het meest relevant
            zijn voor die situatie. Zo kan je snel doorklikken naar de originele
            informatie.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            {checks.map((check) => (
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

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-600">
              Updates
            </p>

            <h2 className="mt-2 text-2xl font-black">
              “Laatst nagekeken” betekent geen garantie.
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Op checkpagina’s staat wanneer de inhoud laatst inhoudelijk werd
              nagekeken. Dat helpt om transparanter te zijn, maar het betekent
              niet dat de informatie nadien niet kan wijzigen.
            </p>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-700">
              Belangrijk
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Gebruik BoeteRadar niet als enige bron.
            </h2>

            <p className="mt-4 leading-7 text-slate-700">
              Voor concrete beslissingen contacteer je best een boekhouder,
              jurist, verzekeraar, uitbetaler, officiële dienst of andere
              bevoegde expert.
            </p>

            <Link
              href="/disclaimer"
              className="mt-6 inline-flex rounded-full bg-slate-950 px-5 py-3 text-sm font-black text-white transition hover:bg-slate-800"
            >
              Lees de disclaimer →
            </Link>
          </div>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}