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
  },
  {
    title: "Btw te laat betaald",
    description:
      "Bereken een indicatie van mogelijke nalatigheidsinteresten en zie wat je best controleert.",
    href: "/btw-te-laat-betaald",
    category: "Btw",
  },
  {
    title: "Personenbelasting te laat",
    description:
      "Check wat je kan doen als je aangifte personenbelasting te laat is of dreigt te laat te zijn.",
    href: "/personenbelasting-te-laat",
    category: "Belastingen",
  },
  {
    title: "Autokeuring vervallen",
    description:
      "Bekijk je mogelijke risico’s en praktische stappen als je technische keuring verlopen is.",
    href: "/autokeuring-vervallen",
    category: "Auto",
  },
  {
    title: "Student te veel gewerkt",
    description:
      "Controleer studentenuren, mogelijke gevolgen voor Groeipakket en welke bronnen je moet nakijken.",
    href: "/student-te-veel-gewerkt",
    category: "Student",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header
        label="Beta MVP"
        subtitle="Snelle Belgische checks voor administratieve fouten."
      />

      <section className="mx-auto max-w-6xl px-5 py-10 md:py-12">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Administratieve fout gemaakt?
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Check snel je mogelijke risico en je volgende stap.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar helpt je om Belgische deadlines, boetes en administratieve
            fouten sneller te begrijpen. Kies je situatie, vul enkele gegevens
            in en krijg een duidelijke eerste indicatie met officiële bronnen.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#checks"
              className="rounded-full bg-orange-600 px-6 py-3 text-center font-black text-white shadow-sm transition hover:bg-orange-700"
            >
              Start een check
            </a>

            <a
              href="#checklist"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Bekijk checklist
            </a>
          </div>

          <div className="mt-8 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">5 actieve checks</p>
              <p className="mt-1 text-sm text-slate-700">
                Btw, belastingen, autokeuring en studentenwerk.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Eerste indicatie</p>
              <p className="mt-1 text-sm text-slate-700">
                Geen exacte beslissing, wel een snelle inschatting.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Met officiële bronnen</p>
              <p className="mt-1 text-sm text-slate-700">
                Controleer altijd verder via de bevoegde overheid.
              </p>
            </div>
          </div>

          <DisclaimerBox text="BoeteRadar geeft eenvoudige informatie en rekenvoorbeelden. Dit is geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag professioneel advies bij twijfel." />
        </div>

        <section id="checks" className="mt-8">
          <div className="mb-5 flex flex-col justify-between gap-3 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                Kies je situatie
              </p>

              <h2 className="mt-2 text-3xl font-black">
                Populaire Belgische checks
              </h2>
            </div>

            <p className="max-w-xl text-sm text-slate-700">
              De checks zijn bedoeld om stress te verlagen en je naar de juiste
              volgende actie te sturen.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {checks.map((check) => (
              <Link
                key={check.title}
                href={check.href}
                className="group rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-black text-orange-700">
                  {check.category}
                </div>

                <h3 className="text-2xl font-black text-slate-950">
                  {check.title}
                </h3>

                <p className="mt-3 leading-7 text-slate-700">
                  {check.description}
                </p>

                <p className="mt-5 font-black text-orange-600 group-hover:text-orange-700">
                  Start deze check →
                </p>
              </Link>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Hoe werkt het?
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Van paniek naar een duidelijk eerste stappenplan.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Kies je fout</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Selecteer de check die het best past bij jouw situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Vul kort iets in</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Geef bijvoorbeeld aan hoeveel dagen je te laat bent of welke
                situatie van toepassing is.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Controleer je volgende stap</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Je krijgt een indicatie, praktische acties en verwijzingen naar
                officiële bronnen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Waarom BoeteRadar?
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Duidelijk, voorzichtig en gebouwd rond officiële controle.
          </h2>

          <div className="mt-6 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Geen valse zekerheid</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                De uitkomst is een indicatie. Geen definitieve berekening of
                bindend advies.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Praktische volgorde</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Eerst begrijpen wat er speelt, daarna controleren, betalen,
                indienen of hulp vragen.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Bronnen blijven leidend</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Elke check verwijst naar officiële instanties zodat je verder
                kunt nakijken.
              </p>
            </div>
          </div>
        </section>

        <section
          id="checklist"
          className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Btw-deadline checklist komt als eerste
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            We bouwen eerst een eenvoudige checklist om je btw-deadline beter op
            te volgen. Geen ingewikkelde PDF-generator: gewoon een duidelijke
            pagina met wat je moet controleren.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-white p-4">
              <p className="font-black">Wat erin komt</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Deadline noteren, Intervat controleren, betaling controleren,
                bewijs bewaren en boekhouder contacteren.
              </p>
            </div>

            <div className="rounded-2xl bg-white p-4">
              <p className="font-black">Volgende stap</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Na deze homepage maken we de eerste checklistpagina en linken we
                die vanuit de relevante btw-checks.
              </p>
            </div>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}