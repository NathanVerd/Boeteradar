import Link from "next/link";

const checks = [
  {
    title: "Btw-aangifte te laat",
    description: "Check wat je mogelijk riskeert als je je btw-aangifte te laat indient.",
    href: "/btw-aangifte-te-laat",
    status: "Actief",
  },
  {
    title: "Btw te laat betaald",
    description: "Bekijk wat er kan gebeuren als je je btw-bedrag te laat betaalt.",
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
            <p className="text-2xl font-black tracking-tight">BoeteRadar België</p>
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
            BoeteRadar helpt je om Belgische boetes, deadlines en administratieve
            fouten sneller te begrijpen. Kies hieronder je situatie en krijg een
            duidelijke eerste indicatie.
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

            const card = (
              <div
                className={`h-full rounded-3xl bg-white p-6 shadow-sm transition ${
                  isActive
                    ? "hover:-translate-y-1 hover:shadow-md"
                    : "opacity-70"
                }`}
              >
                <div className="flex items-start justify-between gap-4">
                  <h2 className="text-2xl font-black">{check.title}</h2>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-bold ${
                      isActive
                        ? "bg-emerald-100 text-emerald-700"
                        : "bg-slate-100 text-slate-500"
                    }`}
                  >
                    {check.status}
                  </span>
                </div>

                <p className="mt-3 text-slate-700">{check.description}</p>

                <p className="mt-6 font-bold text-slate-950">
                  {isActive ? "Start de check →" : "Komt binnenkort"}
                </p>
              </div>
            );

            return isActive ? (
              <Link key={check.title} href={check.href}>
                {card}
              </Link>
            ) : (
              <div key={check.title}>{card}</div>
            );
          })}
        </div>

        <div className="mt-8 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8">
          <h2 className="text-2xl font-black">
            Gratis deadline checklist binnenkort beschikbaar
          </h2>

          <p className="mt-3 max-w-2xl text-slate-700">
            Binnenkort kun je hier een eenvoudige Belgische deadline-checklist
            downloaden voor btw, belastingen en zelfstandigenadministratie.
          </p>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.
      </footer>
    </main>
  );
}