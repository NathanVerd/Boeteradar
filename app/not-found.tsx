import Footer from "@/components/Footer";
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
      "Check je mogelijke risico, geschatte nalatigheidsinterest, stappenplan en officiële bronnen.",
    href: "/btw-te-laat-betaald",
    status: "Actief",
  },
  {
    title: "Personenbelasting te laat",
    description:
      "Check je risico, stappenplan en officiële bronnen als je belastingaangifte te laat is.",
    href: "/personenbelasting-te-laat",
    status: "Actief",
  },
  {
    title: "Autokeuring vervallen",
    description:
      "Check je risico, stappenplan en officiële bronnen als je technische keuring verlopen is.",
    href: "/autokeuring-vervallen",
    status: "Actief",
  },
  {
    title: "Student te veel gewerkt",
    description:
      "Check studentenuren, Groeipakket, risico's en officiële bronnen.",
    href: "/student-te-veel-gewerkt",
    status: "Actief",
  },
];

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <div>
            <Link
              href="/"
              className="text-2xl font-black tracking-tight text-white"
            >
              BoeteRadar België
            </Link>
            <p className="mt-1 text-sm text-slate-300">
              Snelle checks voor Belgische administratieve fouten.
            </p>
          </div>

          <div className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white md:block">
            404
          </div>
        </div>
      </header>

      <section className="mx-auto max-w-6xl px-5 py-12">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Pagina niet gevonden
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Deze pagina bestaat niet of is verplaatst.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Kies hieronder een actieve check of ga terug naar de homepage.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
            BoeteRadar geeft eenvoudige informatie en rekenvoorbeelden. Dit is
            geen juridisch, fiscaal, boekhoudkundig, sociaal of
            verzekeringsadvies. Controleer altijd officiële bronnen of vraag
            professioneel advies bij twijfel.
          </div>

          <Link
            href="/"
            className="mt-6 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800"
          >
            Terug naar homepage
          </Link>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {checks.map((check) => (
            <Link
              key={check.title}
              href={check.href}
              className="rounded-3xl border border-orange-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <div className="mb-4 inline-flex rounded-full bg-orange-100 px-3 py-1 text-sm font-bold text-orange-700">
                {check.status}
              </div>

              <h2 className="text-2xl font-black text-slate-950">
                {check.title}
              </h2>

              <p className="mt-3 text-slate-700">{check.description}</p>

              <p className="mt-5 font-bold text-orange-600">
                Start de check →
              </p>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </main>
  );
}