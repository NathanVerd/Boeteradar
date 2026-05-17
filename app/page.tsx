import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const checks = [
  {
    title: "Btw-aangifte te laat",
    description:
      "Bekijk je mogelijke administratieve boete, risico en eerste stappen als je btw-aangifte te laat werd ingediend.",
    href: "/btw-aangifte-te-laat",
    category: "Btw",
    signal: "Voor zelfstandigen",
  },
  {
    title: "Btw te laat betaald",
    description:
      "Bereken een indicatie van mogelijke nalatigheidsinteresten en zie wat je best controleert.",
    href: "/btw-te-laat-betaald",
    category: "Btw",
    signal: "Betaling & bewijs",
  },
  {
    title: "Personenbelasting te laat",
    description:
      "Check wat je kan doen als je aangifte personenbelasting te laat is of dreigt te laat te zijn.",
    href: "/personenbelasting-te-laat",
    category: "Belastingen",
    signal: "MyMinfin & Tax-on-web",
  },
  {
    title: "Autokeuring vervallen",
    description:
      "Bekijk je mogelijke risico’s en praktische stappen als je technische keuring verlopen is.",
    href: "/autokeuring-vervallen",
    category: "Auto",
    signal: "Keuring & verzekering",
  },
  {
    title: "Student te veel gewerkt",
    description:
      "Controleer studentenuren, mogelijke gevolgen voor Groeipakket en welke bronnen je moet nakijken.",
    href: "/student-te-veel-gewerkt",
    category: "Student",
    signal: "Student@work",
  },
];

const trustItems = [
  {
    title: "Eerste indicatie",
    text: "Geen definitieve beslissing, wel een duidelijke inschatting van je situatie.",
  },
  {
    title: "Officiële bronnen",
    text: "Elke check verwijst naar relevante Belgische instanties of officiële informatie.",
  },
  {
    title: "Praktische volgorde",
    text: "Je ziet wat je eerst moet controleren, bewaren of doen.",
  },
];

const steps = [
  {
    number: "01",
    title: "Kies je situatie",
    text: "Selecteer de check die het best past bij jouw administratief probleem.",
  },
  {
    number: "02",
    title: "Vul enkele gegevens in",
    text: "Bijvoorbeeld hoeveel dagen je te laat bent, of je al betaald hebt of of je al een afspraak maakte.",
  },
  {
    number: "03",
    title: "Volg je volgende stap",
    text: "Je krijgt een indicatie, concrete acties, checklists en officiële bronnen.",
  },
];

const futureSituations = [
  "Voorlopige belastingberekening klopt niet",
  "Brief of herinnering van FOD Financiën ontvangen",
  "Aanslagbiljet hoger dan verwacht",
  "Zelfstandige in bijberoep: wat moet ik controleren?",
  "Flexijob, pensioen of ziekte combineren met werk",
  "Erfenis of aangifte nalatenschap",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-950">
      <div className="bg-[radial-gradient(circle_at_top_left,_rgba(249,115,22,0.22),_transparent_34%),linear-gradient(180deg,_#020617_0%,_#0f172a_42%,_#f1f5f9_42%)]">
        <Header
          label="Beta MVP"
          subtitle="Snelle Belgische checks voor administratieve fouten."
        />

        <section className="mx-auto max-w-6xl px-5 py-10 md:py-14">
          <div className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr] lg:items-stretch">
            <section className="rounded-[2rem] border border-white/10 bg-white p-7 shadow-2xl shadow-slate-950/20 md:p-12">
              <div className="inline-flex rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-black text-orange-700">
                Belgische administratie duidelijker maken
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Gemaakte fout? Check je risico en je eerstvolgende stap.
              </h1>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
                BoeteRadar helpt je bij Belgische administratieve stress:
                btw-deadlines, belastingaangiftes, autokeuring en studentenwerk.
                Je krijgt geen juridisch advies, maar wel een snelle indicatie,
                praktische acties en officiële bronnen.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#checks"
                  className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white shadow-sm transition hover:bg-orange-700"
                >
                  Start een check
                </a>

                <a
                  href="#checklists"
                  className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
                >
                  Bekijk checklists
                </a>
              </div>

              <div className="mt-8 grid gap-3 md:grid-cols-3">
                {trustItems.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4"
                  >
                    <p className="font-black">{item.title}</p>
                    <p className="mt-1 text-sm leading-6 text-slate-700">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <DisclaimerBox text="BoeteRadar geeft eenvoudige informatie en rekenvoorbeelden. Dit is geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag professioneel advies bij twijfel." />
            </section>

            <aside className="overflow-hidden rounded-[2rem] border border-white/10 bg-slate-900 p-7 text-white shadow-2xl shadow-slate-950/30 md:p-8">
              <p className="text-sm font-black uppercase tracking-wide text-orange-300">
                Vandaag beschikbaar
              </p>

              <h2 className="mt-3 text-3xl font-black tracking-tight">
                5 checks, 2 checklists en één duidelijke bedoeling.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                Minder paniek, sneller weten wat je moet controleren en wanneer
                je professionele hulp nodig hebt.
              </p>

              <div className="mt-7 rounded-3xl border border-white/10 bg-white/5 p-5">
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-sm text-slate-300">Actieve checks</span>
                  <span className="text-3xl font-black text-orange-300">5</span>
                </div>

                <div className="flex items-center justify-between border-b border-white/10 py-4">
                  <span className="text-sm text-slate-300">
                    Gratis checklists
                  </span>
                  <span className="text-3xl font-black text-orange-300">2</span>
                </div>

                <div className="flex items-center justify-between pt-4">
                  <span className="text-sm text-slate-300">
                    E-mailadres nodig
                  </span>
                  <span className="text-xl font-black text-white">Nee</span>
                </div>
              </div>

              <div className="mt-6 rounded-3xl bg-orange-500 p-5 text-slate-950">
                <p className="text-sm font-black uppercase tracking-wide">
                  Belangrijk
                </p>
                <p className="mt-2 font-black">
                  De officiële bron blijft altijd leidend. BoeteRadar helpt je
                  vooral om sneller orde te krijgen.
                </p>
              </div>
            </aside>
          </div>

          <section id="checks" className="mt-10">
            <div className="mb-6 flex flex-col justify-between gap-3 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Kies je situatie
                </p>

                <h2 className="mt-2 text-3xl font-black text-slate-950 md:text-4xl">
                  Populaire Belgische checks
                </h2>
              </div>

              <p className="max-w-xl text-sm leading-6 text-slate-700">
                Elke check is gemaakt om je naar een concrete volgende actie te
                brengen: controleren, indienen, betalen, afspraak maken of hulp
                vragen.
              </p>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              {checks.map((check, index) => (
                <Link
                  key={check.title}
                  href={check.href}
                  className={`group rounded-[1.75rem] border bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg ${
                    index === 0
                      ? "border-orange-300 md:col-span-2 md:grid md:grid-cols-[1fr_auto] md:items-center md:gap-6"
                      : "border-slate-200"
                  }`}
                >
                  <div>
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-700">
                        {check.category}
                      </span>
                      <span className="rounded-full bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700">
                        {check.signal}
                      </span>
                    </div>

                    <h3 className="mt-4 text-2xl font-black text-slate-950">
                      {check.title}
                    </h3>

                    <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                      {check.description}
                    </p>
                  </div>

                  <p className="mt-5 font-black text-orange-600 group-hover:text-orange-700 md:mt-0">
                    Start deze check →
                  </p>
                </Link>
              ))}
            </div>
          </section>

          <section className="mt-10 overflow-hidden rounded-[2rem] bg-white shadow-sm">
            <div className="grid gap-0 md:grid-cols-[0.8fr_1.2fr]">
              <div className="bg-slate-950 p-7 text-white md:p-8">
                <p className="text-sm font-black uppercase tracking-wide text-orange-300">
                  Hoe werkt het?
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  Van onduidelijkheid naar een eerste plan.
                </h2>

                <p className="mt-4 leading-7 text-slate-300">
                  BoeteRadar is geen vervanging voor een boekhouder, jurist of
                  officiële dienst. Het is een eerste hulp om sneller te weten
                  waar je staat.
                </p>
              </div>

              <div className="grid gap-4 p-7 md:p-8">
                {steps.map((step) => (
                  <div
                    key={step.number}
                    className="grid gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-5 md:grid-cols-[80px_1fr]"
                  >
                    <div className="text-3xl font-black text-orange-600">
                      {step.number}
                    </div>
                    <div>
                      <h3 className="font-black">{step.title}</h3>
                      <p className="mt-2 text-sm leading-6 text-slate-700">
                        {step.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Vertrouwen
                </p>

                <h2 className="mt-2 max-w-2xl text-3xl font-black">
                  Wat BoeteRadar wel en niet doet.
                </h2>
              </div>

              <Link
                href="/bronnen"
                className="rounded-full border border-slate-200 bg-slate-50 px-5 py-3 text-center text-sm font-black text-slate-900 transition hover:bg-slate-100"
              >
                Bekijk bronnenbeleid →
              </Link>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-3">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <h3 className="font-black text-emerald-950">
                  Wel: overzicht geven
                </h3>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Je krijgt een snelle indicatie, een stappenplan en verwijzingen
                  naar officiële bronnen.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <h3 className="font-black text-orange-950">
                  Niet: officieel beslissen
                </h3>
                <p className="mt-2 text-sm leading-6 text-orange-900">
                  De echte gevolgen hangen af van je concrete situatie en de
                  beoordeling door bevoegde instanties.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <h3 className="font-black text-slate-950">
                  Altijd: verder controleren
                </h3>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Bij twijfel controleer je de officiële bron of vraag je advies
                  aan een boekhouder, jurist, verzekeraar of andere expert.
                </p>
              </div>
            </div>
          </section>

          <section
            id="checklists"
            className="mt-10 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8"
          >
            <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-orange-700">
                  Gratis hulpmiddelen
                </p>

                <h2 className="mt-2 max-w-2xl text-3xl font-black">
                  Checklists om sneller te verzamelen wat je nodig hebt.
                </h2>

                <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                  Gebruik de checklists als praktische voorbereiding. Ze
                  vervangen geen professioneel advies, maar helpen je wel om
                  documenten, deadlines en bewijsstukken beter op orde te
                  krijgen.
                </p>

                <p className="mt-3 text-sm font-bold text-slate-700">
                  Geen e-mailadres nodig.
                </p>
              </div>
            </div>

            <div className="mt-6 grid gap-4 md:grid-cols-2">
              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Btw
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Btw-deadline checklist
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Voor btw-aangifte, Intervat, betaling, bewijs en
                  boekhoudercontrole.
                </p>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/checklists/btw-deadline-checklist"
                    className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Open checklist
                  </Link>

                  <a
                    href="/downloads/btw-deadline-checklist.pdf"
                    download
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                  >
                    Download PDF
                  </a>
                </div>
              </div>

              <div className="rounded-3xl bg-white p-6 shadow-sm">
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Personenbelasting
                </p>

                <h3 className="mt-2 text-2xl font-black">
                  Personenbelasting noodchecklist
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Voor MyMinfin, aanslagjaar, fiscale fiches, bewijsstukken en
                  contact met je boekhouder.
                </p>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row">
                  <Link
                    href="/checklists/personenbelasting-noodchecklist"
                    className="rounded-xl bg-slate-950 px-4 py-3 text-center text-sm font-bold text-white transition hover:bg-slate-800"
                  >
                    Open checklist
                  </Link>

                  <a
                    href="/downloads/personenbelasting-noodchecklist.pdf"
                    download
                    className="rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 text-center text-sm font-bold text-slate-900 transition hover:bg-slate-100"
                  >
                    Download PDF
                  </a>
                </div>
              </div>
            </div>
          </section>

          <section className="mt-10 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-start">
              <div>
                <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                  Nog niet gevonden?
                </p>

                <h2 className="mt-2 text-3xl font-black">
                  BoeteRadar wordt verder uitgebreid.
                </h2>

                <p className="mt-4 leading-7 text-slate-700">
                  Sommige situaties staan nog niet op de site. Feedback helpt om
                  te bepalen welke checks als volgende nuttig zijn.
                </p>

                <a
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex rounded-full bg-orange-600 px-5 py-3 font-black text-white transition hover:bg-orange-700"
                >
                  Geef feedback →
                </a>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {futureSituations.map((situation) => (
                  <div
                    key={situation}
                    className="rounded-2xl border border-slate-200 bg-slate-50 p-4 text-sm font-bold leading-6 text-slate-800"
                  >
                    {situation}
                  </div>
                ))}
              </div>
            </div>
          </section>
        </section>
      </div>

      <Footer />
    </main>
  );
}