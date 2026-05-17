import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const checks = [
  {
    title: "Btw-aangifte te laat",
    description:
      "Je aangifte is te laat of nog niet ingediend. Bekijk wat je nu eerst doet.",
    href: "/btw-aangifte-te-laat",
    category: "Btw",
    tag: "Aangifte",
  },
  {
    title: "Btw te laat betaald",
    description:
      "Je btw is nog niet betaald of kwam te laat binnen. Check wat belangrijk is.",
    href: "/btw-te-laat-betaald",
    category: "Btw",
    tag: "Betaling",
  },
  {
    title: "Personenbelasting te laat",
    description:
      "Je belastingaangifte is te laat of onzeker. Kijk wat je nog kan doen.",
    href: "/personenbelasting-te-laat",
    category: "Belastingen",
    tag: "MyMinfin",
  },
  {
    title: "Autokeuring vervallen",
    description: "Je keuring is verlopen. Bekijk wat je best meteen regelt.",
    href: "/autokeuring-vervallen",
    category: "Auto",
    tag: "Keuring",
  },
  {
    title: "Student te veel gewerkt",
    description: "Je twijfelt over je studentenuren. Check wat je best nakijkt.",
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
  "Bewijs kwijt of onduidelijk",
];

const trustPoints = [
  "Geen advies, wel houvast",
  "Met links naar officiële bronnen",
  "Eerst weten wat belangrijk is",
  "Gemaakt voor België",
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
                Voor als je niet weet waar te beginnen
              </div>

              <h1 className="mt-6 max-w-4xl text-4xl font-black tracking-tight text-slate-950 md:text-6xl">
                Fout gemaakt? Krijg snel overzicht.
              </h1>

              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                BoeteRadar helpt je bij btw, belastingen, autokeuring en
                studentenwerk. Kies je situatie en zie meteen wat je best
                nakijkt, bewaart of regelt.
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
                      Zo werkt het
                    </p>
                    <h2 className="mt-1 text-2xl font-black">
                      Rustig stap voor stap
                    </h2>
                  </div>

                  <div className="rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-700">
                    kort
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
                          Btw, belasting, auto of studentenwerk.
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
                        <p className="font-black">Geef je situatie aan</p>
                        <p className="mt-1 text-sm leading-6 text-slate-700">
                          Bijvoorbeeld hoeveel dagen je te laat bent.
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
                        <p className="font-black">Bekijk wat nu telt</p>
                        <p className="mt-1 text-sm leading-6 text-slate-600">
                          Wat eerst doen, wat bewaren en waar controleren.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-5 rounded-2xl bg-slate-950 p-4 text-white">
                  <p className="text-sm font-bold text-slate-300">
                    BoeteRadar is geen officiële instantie.
                  </p>
                  <p className="mt-1 font-black">
                    Je krijgt houvast, maar controleert altijd verder.
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
                Wat is er gebeurd?
              </h2>
            </div>

            <p className="max-w-xl text-sm leading-6 text-slate-700">
              Kies de situatie die het dichtst bij jouw probleem ligt.
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
                Gewone problemen, duidelijk uitgelegd.
              </h2>

              <p className="mt-4 leading-7 text-slate-700">
                Je hoeft niet eerst door lange overheidspagina’s te zoeken.
                Begin met je situatie en ga daarna gericht verder.
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
                Duidelijk, maar voorzichtig.
              </h2>

              <p className="mt-4 leading-7 text-slate-300">
                BoeteRadar helpt je orde brengen. De uiteindelijke regels en
                beslissingen blijven bij de officiële instanties.
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
                  Je krijgt overzicht
                </p>
                <p className="mt-2 text-sm leading-6 text-emerald-900">
                  Je ziet wat je best controleert, bewaart of eerst doet.
                </p>
              </div>

              <div className="rounded-2xl bg-orange-50 p-5">
                <p className="font-black text-orange-950">
                  Geen valse zekerheid
                </p>
                <p className="mt-2 text-sm leading-6 text-orange-900">
                  De echte gevolgen hangen af van je situatie en de bevoegde
                  instantie.
                </p>
              </div>

              <div className="rounded-2xl bg-slate-100 p-5">
                <p className="font-black text-slate-950">Controleer verder</p>
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
                Leg meteen de juiste dingen klaar.
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Korte checklists voor documenten, bewijs en berichten aan je
                boekhouder.
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
                Welke situatie ontbreekt nog?
              </h2>

              <p className="mt-3 max-w-2xl leading-7 text-slate-700">
                Mis je een probleem dat veel mensen herkennen? Laat het weten.
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