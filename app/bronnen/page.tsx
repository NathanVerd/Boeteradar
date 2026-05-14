import Link from "next/link";

export default function BronnenPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            Bronnen
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Betrouwbaarheid
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Hoe BoeteRadar met bronnen en updates omgaat.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            BoeteRadar probeert elke actieve check te koppelen aan officiële
            Belgische bronnen. Toch blijven regels veranderlijk en blijft deze
            site een informatieve eerste hulp, geen professioneel advies.
          </p>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Welke bronnen gebruiken we?</h2>

          <p className="mt-4 text-slate-700">
            We verwijzen vooral naar officiële instanties zoals FOD Financiën,
            Vlaanderen.be, Student@work, GOCA Vlaanderen en andere bevoegde
            overheids- of sectorbronnen.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Waarom blijft controle nodig?</h2>

          <p className="mt-4 text-slate-700">
            Regels, bedragen, deadlines en procedures kunnen wijzigen.
            BoeteRadar kan informatie vereenvoudigen of verouderde informatie
            bevatten. Controleer daarom altijd de officiële bron voordat je een
            beslissing neemt.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Hoe vaak wordt dit nagekeken?</h2>

          <p className="mt-4 text-slate-700">
            Op elke check staat een datum zoals “Laatst inhoudelijk nagekeken”.
            Dat betekent niet dat de informatie definitief correct blijft, maar
            wel wanneer we de pagina inhoudelijk opnieuw hebben gecontroleerd.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-black">Belangrijk</h2>

          <p className="mt-4 text-slate-300">
            Gebruik BoeteRadar als snelle eerste inschatting. Voor concrete
            beslissingen contacteer je best een boekhouder, jurist, verzekeraar,
            uitbetaler, officiële dienst of andere bevoegde expert.
          </p>

          <Link
            href="/disclaimer"
            className="mt-6 inline-block rounded-xl bg-white px-5 py-3 font-bold text-slate-950 hover:bg-slate-100"
          >
            Lees de disclaimer →
          </Link>
        </section>

        <div className="mt-8">
          <Link href="/" className="font-bold text-slate-700 hover:text-slate-950">
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