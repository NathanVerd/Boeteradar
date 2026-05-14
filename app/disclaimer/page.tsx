import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RelatedChecks from "@/components/RelatedChecks";

export default function DisclaimerPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header label="Disclaimer" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-12">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Belangrijk
          </p>

          <h1 className="mt-3 max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            BoeteRadar geeft informatie, geen professioneel advies.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            BoeteRadar België is bedoeld om Belgische administratieve fouten
            sneller begrijpelijk te maken. De site geeft vereenvoudigde
            inschattingen, checklists en stappenplannen, maar vervangt geen
            juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies.
          </p>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">
            Geen juridisch, fiscaal of boekhoudkundig advies
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            De informatie op BoeteRadar is algemeen en informatief. Ze is geen
            juridisch, fiscaal, boekhoudkundig, verzekerings- of sociaal advies.
            Voor concrete beslissingen contacteer je best een boekhouder,
            jurist, verzekeraar, officiële dienst of andere bevoegde expert.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">
            Vereenvoudigde berekeningen en indicaties
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            Calculators op BoeteRadar gebruiken eenvoudige vuistregels,
            voorbeeldberekeningen of risico-inschattingen. De echte gevolgen
            kunnen afwijken door je concrete situatie, eerdere fouten, termijnen,
            bedragen, regio, bewijsstukken, communicatie en beoordeling door de
            bevoegde administratie.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">
            Officiële bronnen blijven leidend
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            We proberen bij elke check officiële bronnen te tonen, zoals FOD
            Financiën, Vlaanderen.be, Student@work of andere relevante
            instanties. Regels, bedragen, termijnen en procedures kunnen
            wijzigen. Controleer daarom altijd de officiële bron voordat je actie
            onderneemt.
          </p>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">
            Geen garantie op juistheid of volledigheid
          </h2>

          <p className="mt-4 leading-7 text-slate-700">
            BoeteRadar kan fouten, verouderde informatie of onvolledigheden
            bevatten. Gebruik de site als eerste hulpmiddel om je situatie beter
            te begrijpen, niet als definitieve beslissingstool.
          </p>
        </section>

        <section className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Praktisch gebruik
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Gebruik BoeteRadar als startpunt, niet als eindpunt.
          </h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
            <li>Gebruik de check om je situatie sneller te begrijpen.</li>
            <li>Controleer de officiële bronnen die bij de check staan.</li>
            <li>Bewaar bewijs van aangifte, betaling, afspraak of communicatie.</li>
            <li>Vraag professioneel advies als er twijfel of risico is.</li>
          </ol>
        </section>

        <RelatedChecks title="Terug naar de checks" />

        <BackHomeLink label="← Terug naar homepage" />
      </section>

      <Footer />
    </main>
  );
}