import Link from "next/link";

const checks = [
  {
    title: "Btw-aangifte te laat",
    description:
      "Check je mogelijke risico, administratieve boete, stappenplan en officiële bronnen.",
    href: "/btw-aangifte-te-laat",
    status: "Actief",
  },
  {
    title: "Btw te laat betaald",
    description:
      "Bekijk wat er kan gebeuren als je je btw-bedrag te laat betaalt.",
    href: "#",
    status: "Binnenkort",
  },
  {
    title: "Personenbelasting te laat",
    description: "Check de mogelijke gevolgen van een te late belastingaangifte.",
    href: "#",
    status: "Binnenkort",
  },
  {
    title: "Autokeuring vervallen",
    description: "Bekijk wat je best doet als je autokeuring verlopen is.",
    href: "#",
    status: "Binnenkort",
  },
  {
    title: "Student te veel gewerkt",
    description: "Check mogelijke gevolgen voor uren, belastingen en groeipakket.",
    href: "#",
    status: "Binnenkort",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <p className="text-2xl font-black tracking-tight">
              BoeteRadar België
            </p>
            <p className="mt-1 text-sm text-slate-300">
              Snelle checks voor Belgische administratieve fouten.
            </p>
          </div>

          <div className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white md:block">
            Beta MVP
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Administratieve fout gemaakt?
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Check snel wat je mogelijk riskeert en wat je nu best doet.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            BoeteRadar helpt je om Belgische boetes, deadlines en
            administratieve fouten sneller te begrijpen. Kies hieronder je
            situatie en krijg een duidelijke eerste indicatie.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
            BoeteRadar geeft eenvoudige informatie en rekenvoorbeelden. Dit is
            geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd
            officiële bronnen of vraag professioneel advies bij twijfel.
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {checks.map((check) => {
            const isActive = check.status === "Actief";

            if (isActive) {
              return (
                <Link
                  key={check.title}
                  href={check.href}
                  className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                >
                  <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                    Actief
                  </div>

                  <h2 className="text-2xl font-black text-slate-950">
                    {check.title}
                  </h2>

                  <p className="mt-3 text-slate-700">{check.description}</p>

                  <p className="mt-5 font-bold text-orange-600">
                    Start btw-check →
                  </p>
                </Link>
              );
            }

            return (
              <div
                key={check.title}
                className="rounded-3xl bg-white p-6 opacity-70 shadow-sm"
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-black">{check.title}</h2>

                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-500">
                    Binnenkort
                  </span>
                </div>

                <p className="mt-3 text-slate-700">{check.description}</p>

                <p className="mt-6 font-bold text-slate-950">
                  Komt binnenkort
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Belgische deadline checklist binnenkort beschikbaar
          </h2>

          <p className="mt-3 max-w-2xl text-slate-700">
            Binnenkort kun je hier een eenvoudige checklist downloaden voor btw,
            belastingen en zelfstandigenadministratie.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.
      </footer>
    </main>
  );
}