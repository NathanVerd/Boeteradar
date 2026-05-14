import Footer from "@/components/Footer";
import Link from "next/link";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            Disclaimer
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Belangrijk
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            BoeteRadar geeft informatie, geen juridisch advies.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            BoeteRadar België is bedoeld om Belgische administratieve fouten
            sneller begrijpelijk te maken. De site geeft vereenvoudigde
            inschattingen, checklists en stappenplannen, maar vervangt geen
            professioneel advies.
          </p>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">
            Geen juridisch of fiscaal advies
          </h2>

          <p className="mt-4 text-slate-700">
            De informatie op BoeteRadar is algemeen en informatief. Ze is geen
            juridisch, fiscaal, boekhoudkundig, verzekerings- of sociaal advies.
            Voor concrete beslissingen contacteer je best een boekhouder,
            jurist, verzekeraar, officiële dienst of andere bevoegde expert.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Vereenvoudigde berekeningen</h2>

          <p className="mt-4 text-slate-700">
            Calculators op BoeteRadar gebruiken eenvoudige vuistregels of
            indicaties. De echte gevolgen kunnen afwijken door je concrete
            situatie, eerdere fouten, termijnen, bedragen, regio, bewijsstukken
            of beoordeling door de bevoegde administratie.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">
            Officiële bronnen blijven leidend
          </h2>

          <p className="mt-4 text-slate-700">
            We proberen bij elke check officiële bronnen te tonen, zoals FOD
            Financiën, Vlaanderen.be, Student@work of andere relevante instanties.
            Regels kunnen wijzigen. Controleer daarom altijd de officiële bron
            voordat je actie onderneemt.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Geen aansprakelijkheid</h2>

          <p className="mt-4 text-slate-700">
            BoeteRadar kan fouten, verouderde informatie of onvolledigheden
            bevatten. Gebruik de site als eerste hulpmiddel om je situatie beter
            te begrijpen, niet als definitieve beslissingstool.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-slate-950 p-8 text-white shadow-sm">
          <h2 className="text-2xl font-black">Terug naar de checks</h2>

          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Btw-aangifte te laat →
            </Link>

            <Link
              href="/btw-te-laat-betaald"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Btw te laat betaald →
            </Link>

            <Link
              href="/autokeuring-vervallen"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Autokeuring vervallen →
            </Link>

            <Link
              href="/personenbelasting-te-laat"
              className="rounded-2xl bg-white/10 p-4 font-bold hover:bg-white/15"
            >
              Personenbelasting te laat →
            </Link>
          </div>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="font-bold text-slate-700 hover:text-slate-950"
          >
            ← Terug naar homepage
          </Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}