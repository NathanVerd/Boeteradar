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
    tag: "Zelfstandigen",
  },
  {
    title: "Btw te laat betaald",
    description:
      "Bereken een indicatie van mogelijke nalatigheidsinteresten en zie wat je best controleert.",
    href: "/btw-te-laat-betaald",
    category: "Btw",
    tag: "Betaling",
  },
  {
    title: "Personenbelasting te laat",
    description:
      "Check wat je kan doen als je aangifte personenbelasting te laat is of dreigt te laat te zijn.",
    href: "/personenbelasting-te-laat",
    category: "Belastingen",
    tag: "MyMinfin",
  },
  {
    title: "Autokeuring vervallen",
    description:
      "Bekijk je mogelijke risico’s en praktische stappen als je technische keuring verlopen is.",
    href: "/autokeuring-vervallen",
    category: "Auto",
    tag: "Keuring",
  },
  {
    title: "Student te veel gewerkt",
    description:
      "Controleer studentenuren, mogelijke gevolgen voor Groeipakket en welke bronnen je moet nakijken.",
    href: "/student-te-veel-gewerkt",
    category: "Student",
    tag: "Student@work",
  },
];

const situations = [
  "Btw-aangifte vergeten",
  "Btw nog niet betaald",
  "Belastingaangifte te laat",
  "Keuring verlopen",
  "Te veel studentenuren",
  "Bewijsstukken verzamelen",
];

const trustPoints = [
  "Geen juridisch of fiscaal advies",
  "Altijd met officiële bronnen",
  "Duidelijke eerste actie",
  "Gemaakt voor Belgische situaties",
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header
        label="Beta MVP"
        subtitle="Snelle Belgische checks voor administratieve fouten."
      />

      <section className="mx-auto max-w-6xl px-5 py-8 md:py-12">
        <section className="relative overflow-hidden rounded-[2rem] border border-orange-100 bg-white shadow-sm">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-orange-100 blur-3xl" />
          <div className="absolute bottom-0 left-1/2 h-48 w-48 rounded-full bg-slate-100 blur-3xl" />

          <div className="relative grid gap-8 p-7 md:p-10 lg:grid-cols-[1.05fr_0.95fr] lg:p-12">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full border border-orange-200 bg-orange-50 px-4 py-2 text-sm font-black text-orange-700">
                <span className="h-2 w-2 rounded-full bg-orange-500" />
                Belgische administratie, sneller uitgelegd
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Weet sneller wat je moet doen na een administratieve fout.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                BoeteRadar helpt je bij situaties zoals btw te laat,
                personenbelasting te laat, autokeuring vervallen of te veel
                gewerkt als student. Je krijgt een eerste indicatie, een
                stappenplan en officiële bronnen om verder te controleren.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href="#checks"
                  className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800"
                >
                  Kies je check
                </a>

                <a
                  href="#checklists"
                  className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:-translate-y-0.5 hover:bg-orange-100"
                >
                  Bekijk checklists
                </a>
              </div>

              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {trustPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-center gap-3 rounded-2xl bg-slate-50 px-4 py-3"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700">
                      ✓
                    </span>
                    <p className="text-sm font-bold text-slate-800">{point}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="rounded-[1.75rem] border border-slate-200 bg-slate-50 p-5 shadow-inner">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                  <div>
                    <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                      Snelle indicatie
                    </p>
                    <h2 className="mt-1 text-2xl font-black">
                      Van probleem naar actie
                    </h2>
                  </div>

                  <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-700">
                    1 min
                  </div>
                </div>

                <div className="mt-5 space-y-3">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-950 text-sm font-black text-white">
                        1
                      </div>
                      <div>
                        <p className="font-black">Kies je situatie</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Bijvoorbeeld btw, belasting, auto of student.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-orange-200 bg-orange-50 p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-orange-600 text-sm font-black text-white">
                        2
                      </div>
                      <div>
                        <p className="font-black">Vul kort iets in</p>
                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          Zoals aantal dagen te laat, bedrag of status.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="rounded-2xl border border-slate-200 bg-white p-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-slate-200 text-sm font-black text-slate-950">
                        3
                      </div>
                      <div>
                        <p className="font-black">Check je volgende stap</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Acties, bronnen, checklist en waarschuwingen.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                  <p className="text-sm font-bold text-slate-300">
                    BoeteRadar beslist niets officieel.
                  </p>
                  <p className="mt-1 font-black">
                    Het helpt je vooral om sneller te weten wat je moet
                    controleren.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-8 grid gap-4 md:grid-cols-3">
          <div className="rounded-3xl bg-slate-950 p-6 text-white shadow-sm">
            <p className="text-4xl font-black">5</p>
            <p className="mt-2 font-black">Actieve checks</p>
            <p className="mt-2 text-sm leading-6 text-slate-300">
              Btw, belastingen, autokeuring en studentenwerk.
            </p>
          </div>

          <div className="rounded-3xl border border-orange-200 bg-orange-50 p-6 shadow-sm">
            <p className="text-4xl font-black text-orange-700">2</p>
            <p className="mt-2 font-black">Gratis checklists</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Downloadbaar zonder e-mailadres.
            </p>
          </div>

          <div className="rounded-3xl bg-white p-6 shadow-sm">
            <p className="text-4xl font-black">BE</p>
            <p className="mt-2 font-black">Belgische context</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Gebouwd rond Belgische instanties en procedures.
            </p>
          </div>
        </section>

        <section id="checks" className="mt-12">
          <div className="mb-6 flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                Kies je situatie
              </p>

              <h2 className="mt-2 text-3xl font-black tracking-tight md:text-4xl">
                Waar wil je snel duidelijkheid over?
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-700">
              Elke check geeft een eerste indicatie, maar stuurt je ook naar
              officiële bronnen en praktische acties.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-6">
            {checks.map((check, index) => (
              <Link
                key={check.title}
                href={check.href}
                className={`group rounded-[1.75rem] bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md ${
                  index < 2
                    ? "border border-orange-200 md:col-span-3"
                    : "border border-slate-200 md:col-span-2"
                }`}
              >
                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-orange-100 px-3 py-1 text-xs font-black uppercase tracking-wide text-orange-700">
                    {check.category}
                  </span>
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-700">
                    {check.tag}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-black">{check.title}</h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {check.description}
                </p>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-4">
                  <p className="font-black text-orange-600 group-hover:text-orange-700">
                    Start check
                  </p>
                  <span className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-950 text-white transition group-hover:bg-orange-600">
                    →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-12 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <div className="grid gap-8 md:grid-cols-[0.8fr_1.2fr] md:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                Vaak gezocht
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Herkenbare situaties, zonder juridisch jargon.
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                BoeteRadar begint bij de vraag die mensen echt hebben: “Wat moet
                ik nu doen?” Daarna pas komen bronnen, bewijsstukken en
                waarschuwingen.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {situations.map((situation) => (
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

        <section className="mt-12 overflow-hidden rounded-[2rem] bg-slate-950 shadow-sm">
          <div className="grid md:grid-cols-[0.9fr_1.1fr]">
            <div className="p-7 text-white md:p-8">
              <p className="text-sm font-black uppercase tracking-wide text-orange-300">
                Betrouwbaarheid
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Wat BoeteRadar wel en niet doet.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                De site is bedoeld als eerste hulpmiddel. Niet als definitief
                advies, niet als officiële beslissing en niet als vervanging van
                een expert.
              </p>

              <Link
                href="/bronnen"
                className="mt-6 inline-flex rounded-full bg-white px-5 py-3 text-sm font-black text-slate-950 transition hover:bg-slate-100"
              >
                Lees over bronnen →
              </Link>
            </div>

            <div className="grid gap-3 bg-white p-7 md:p-8">
              <div className="rounded-2xl bg-emerald-50 p-5">
                <p className="font-black text-emerald-950">
                  Wel: structuur brengen
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Je ziet wat je best controleert, bewaart of eerst doet.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <p className="font-black text-orange-950">
                  Niet: officiële uitkomst beloven
                </p>
                <p className="mt-2 text-sm leading-6 text-orange-900">
                  De echte gevolgen hangen af van je concrete situatie en de
                  bevoegde instantie.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="font-black text-slate-950">
                  Altijd: officiële bron controleren
                </p>
                <p className="mt-2 text-sm leading-6 text-slate-700">
                  Bij twijfel vraag je advies aan een boekhouder, jurist,
                  verzekeraar of officiële dienst.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section
          id="checklists"
          className="mt-12 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8"
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
                Praktische lijsten voor documenten, deadlines, betalingsbewijzen
                en communicatie met je boekhouder.
              </p>
            </div>

            <p className="rounded-full bg-white px-4 py-2 text-sm font-black text-slate-800">
              Geen e-mailadres nodig
            </p>
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

        <section className="mt-12 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                Mis je een situatie?
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Help bepalen welke check als volgende komt.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                BoeteRadar is nog in testfase. Feedback helpt om de site
                duidelijker, nuttiger en betrouwbaarder te maken.
              </p>
            </div>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdndgj220iZG4IBmJCSqDwY5vf_kZZWTAbVd99zzVCafsdaAQ/viewform"
              target="_blank"
              rel="noreferrer"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white transition hover:bg-orange-700"
            >
              Geef feedback →
            </a>
          </div>
        </section>

        <div className="mt-8">
          <DisclaimerBox text="BoeteRadar geeft eenvoudige informatie en rekenvoorbeelden. Dit is geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag professioneel advies bij twijfel." />
        </div>
      </section>

      <Footer />
    </main>
  );
}