import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

export default function BronnenPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header label="Bronnen" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Betrouwbaarheid
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Hoe BoeteRadar met bronnen en updates omgaat.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar probeert elke actieve check te koppelen aan officiële
            Belgische bronnen. Toch blijven regels veranderlijk en blijft deze
            site een informatieve eerste hulp, geen professioneel advies.
          </p>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Welke bronnen gebruiken we?</h2>

          <p className="mt-4 leading-7 text-slate-700">
            We verwijzen vooral naar officiële instanties zoals FOD Financiën,
            Vlaanderen.be, Student@work, GOCA Vlaanderen en andere bevoegde
            overheids- of sectorbronnen.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Fiscale checks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voor btw en personenbelasting verwijzen we vooral naar FOD
                Financiën, MyMinfin, Tax-on-web en Intervat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Andere administratieve checks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voor autokeuring en studentenwerk verwijzen we naar relevante
                officiële of sectorgebonden bronnen.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Waarom blijft controle nodig?</h2>

          <p className="mt-4 leading-7 text-slate-700">
            Regels, bedragen, deadlines en procedures kunnen wijzigen.
            BoeteRadar kan informatie vereenvoudigen of verouderde informatie
            bevatten. Controleer daarom altijd de officiële bron voordat je een
            beslissing neemt.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Hoe vaak wordt dit nagekeken?</h2>

          <p className="mt-4 leading-7 text-slate-700">
            Op checkpagina’s kan later een datum zoals “Laatst inhoudelijk
            nagekeken” toegevoegd worden. Dat betekent niet dat de informatie
            definitief correct blijft, maar wel wanneer we de pagina inhoudelijk
            opnieuw hebben gecontroleerd.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Belangrijk
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Officiële bronnen blijven altijd leidend.
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Gebruik BoeteRadar als snelle eerste inschatting. Voor concrete
            beslissingen contacteer je best een boekhouder, jurist, verzekeraar,
            uitbetaler, officiële dienst of andere bevoegde expert.
          </p>

          <Link
            href="/disclaimer"
            className="mt-6 inline-block rounded-xl bg-slate-950 px-5 py-3 font-bold text-white hover:bg-slate-800"
          >
            Lees de disclaimer →
          </Link>
        </section>

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}