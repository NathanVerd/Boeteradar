import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Disclaimer | BoeteRadar geeft geen professioneel advies",
  description:
    "Lees de disclaimer van BoeteRadar. De site geeft informatieve checks en indicatieve berekeningen, maar geen juridisch, fiscaal, sociaal, boekhoudkundig of verzekeringsadvies.",
  alternates: {
    canonical: "https://www.boeteradar.be/disclaimer",
  },
  openGraph: {
    title: "Disclaimer van BoeteRadar",
    description:
      "BoeteRadar geeft informatie en indicatieve berekeningen, geen professioneel advies.",
    url: "https://www.boeteradar.be/disclaimer",
    siteName: "BoeteRadar België",
    locale: "nl_BE",
    type: "website",
  },
};

const mainPoints = [
  {
    title: "Geen professioneel advies",
    text: "De informatie op BoeteRadar is algemeen en informatief. Ze vervangt geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies.",
  },
  {
    title: "Indicatieve berekeningen",
    text: "Calculators gebruiken vereenvoudigde regels en aannames. De echte boete, interest of gevolgen kunnen afwijken.",
  },
  {
    title: "Officiële bronnen blijven leidend",
    text: "Controleer altijd de officiële bron of bevoegde dienst voordat je een beslissing neemt.",
  },
];

const limits = [
  "BoeteRadar neemt geen beslissingen zoals een overheid, administratie, verzekeraar of uitbetaler.",
  "BoeteRadar behandelt geen persoonlijke dossiers en kan geen bindend oordeel geven.",
  "BoeteRadar kan fouten, verouderde informatie of onvolledigheden bevatten.",
  "BoeteRadar kan niet garanderen dat een indicatie exact overeenkomt met je uiteindelijke situatie.",
];

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Disclaimer"
        subtitle="Wat BoeteRadar wel en niet voor je kan doen."
      />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Disclaimer
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            BoeteRadar geeft informatie, geen professioneel advies.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar België is bedoeld om administratieve situaties sneller
            begrijpelijk te maken. De site geeft eenvoudige checks, indicatieve
            berekeningen, checklists en stappen, maar vervangt geen professioneel
            advies.
          </p>

          <p className="mt-4 max-w-3xl leading-7 text-slate-700">
            Gebruik BoeteRadar als startpunt om overzicht te krijgen. Voor
            concrete beslissingen controleer je altijd officiële bronnen of
            vraag je advies aan een bevoegde professional.
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

        <section className="mt-6 grid gap-6 md:grid-cols-3">
          {mainPoints.map((point, index) => (
            <div
              key={point.title}
              className={`rounded-[2rem] p-7 shadow-sm md:p-8 ${
                index === 1
                  ? "border border-orange-200 bg-orange-50"
                  : "bg-white"
              }`}
            >
              <p className="text-sm font-black text-orange-600">
                {index + 1}
              </p>

              <h2 className="mt-2 text-2xl font-black">{point.title}</h2>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                {point.text}
              </p>
            </div>
          ))}
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Advies
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Geen juridisch, fiscaal, boekhoudkundig, sociaal of
            verzekeringsadvies.
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            De informatie op BoeteRadar is algemeen. Ze is niet afgestemd op je
            volledige persoonlijke situatie, dossier, documenten, bewijsstukken,
            communicatie met instanties of eerdere problemen.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Voor beslissingen met mogelijke financiële, juridische, fiscale,
            sociale of verzekeringsgevolgen contacteer je best een boekhouder,
            jurist, verzekeraar, officiële dienst, uitbetaler of andere bevoegde
            expert.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Berekeningen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Calculators geven een indicatie, geen definitief bedrag.
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            De calculators op BoeteRadar gebruiken vereenvoudigde
            rekenvoorbeelden, vuistregels of scenario’s. Een uitkomst kan helpen
            om de grootteorde of dringendheid van een situatie beter te
            begrijpen, maar is geen officiële berekening.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            De echte boete, interest, sanctie of gevolg kan afhangen van onder
            meer bedragen, termijnen, regio, bewijs, eerdere fouten,
            communicatie, verwerking door de administratie en je concrete
            situatie.
          </p>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Bronnen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Officiële bronnen blijven belangrijker dan BoeteRadar.
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            BoeteRadar probeert te verwijzen naar officiële of relevante bronnen
            zoals FOD Financiën, Vlaanderen.be, Student@work, GOCA Vlaanderen en
            andere bevoegde instanties. Toch kunnen regels, bedragen,
            procedures, deadlines en interpretaties wijzigen.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Controleer daarom altijd de officiële bron voordat je actie
            onderneemt. Bij twijfel vraag je best professioneel advies.
          </p>

          <Link
            href="/bronnen"
            className="mt-6 inline-flex rounded-full border border-orange-200 bg-orange-50 px-5 py-3 text-sm font-black text-orange-700 transition hover:bg-orange-100"
          >
            Naar bronnen →
          </Link>
        </section>

        <section className="mt-6 grid gap-6 md:grid-cols-2">
          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-300">
              Beperkingen
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Wat je niet mag verwachten.
            </h2>

            <ul className="mt-5 space-y-3 leading-7 text-slate-300">
              {limits.map((item) => (
                <li key={item} className="flex gap-3">
                  <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/10 text-sm font-black text-orange-300">
                    !
                  </span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
            <p className="text-sm font-black uppercase tracking-wide text-orange-700">
              Praktisch gebruik
            </p>

            <h2 className="mt-2 text-2xl font-black">
              Gebruik BoeteRadar als startpunt, niet als eindpunt.
            </h2>

            <ol className="mt-5 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Gebruik de check om je situatie sneller te begrijpen.</li>
              <li>Controleer de officiële bronnen die bij de check staan.</li>
              <li>Bewaar bewijs van aangifte, betaling, afspraak of communicatie.</li>
              <li>Vraag professioneel advies als er twijfel of risico is.</li>
            </ol>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Geen persoonlijke dossiers
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Deel geen gevoelige gegevens via BoeteRadar.
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            BoeteRadar is geen loket en behandelt geen individuele dossiers.
            Deel geen rijksregisternummer, klantnummer, officiële documenten,
            medische gegevens, bankgegevens of andere gevoelige persoonlijke
            informatie via feedbackformulieren of externe links.
          </p>

          <p className="mt-4 leading-7 text-slate-700">
            Beschrijf feedback of ontbrekende situaties liever algemeen, zonder
            gegevens waarmee jij of iemand anders rechtstreeks geïdentificeerd
            kan worden.
          </p>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}