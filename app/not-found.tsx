import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            404
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-16">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Pagina niet gevonden
          </p>

          <h1 className="mt-3 max-w-3xl text-4xl font-black tracking-tight md:text-6xl">
            Deze BoeteRadar-check bestaat nog niet.
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-slate-700">
            De link klopt misschien niet, of deze check is nog niet actief.
            Ga terug naar de homepage en kies één van de beschikbare checks.
          </p>

          <div className="mt-8 grid gap-3 md:grid-cols-2">
            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-2xl border border-orange-200 bg-orange-50 p-4 font-bold text-slate-950 hover:bg-orange-100"
            >
              Btw-aangifte te laat →
            </Link>

            <Link
              href="/btw-te-laat-betaald"
              className="rounded-2xl border border-orange-200 bg-orange-50 p-4 font-bold text-slate-950 hover:bg-orange-100"
            >
              Btw te laat betaald →
            </Link>

            <Link
              href="/autokeuring-vervallen"
              className="rounded-2xl border border-orange-200 bg-orange-50 p-4 font-bold text-slate-950 hover:bg-orange-100"
            >
              Autokeuring vervallen →
            </Link>

            <Link
              href="/personenbelasting-te-laat"
              className="rounded-2xl border border-orange-200 bg-orange-50 p-4 font-bold text-slate-950 hover:bg-orange-100"
            >
              Personenbelasting te laat →
            </Link>
          </div>

          <Link
            href="/"
            className="mt-8 inline-block font-bold text-orange-600 hover:text-orange-700"
          >
            ← Terug naar homepage
          </Link>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
  <p>© 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.</p>

  <Link
    href="/disclaimer"
    className="mt-2 inline-block font-bold text-slate-600 hover:text-slate-950"
  >
    Disclaimer
  </Link>
</footer>
    </main>
  );
}