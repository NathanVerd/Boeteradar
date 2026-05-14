import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import Link from "next/link";

const checklistItems = [
  {
    title: "Noteer je volgende btw-deadline",
    description:
      "Zet de deadline in je agenda en voeg eventueel een herinnering enkele dagen voordien toe.",
  },
  {
    title: "Controleer Intervat",
    description:
      "Kijk na of je btw-aangifte klaarstaat, verzonden is of nog moet worden ingediend.",
  },
  {
    title: "Controleer je verkoopfacturen",
    description:
      "Zorg dat alle verkoopfacturen van de juiste periode verwerkt zijn.",
  },
  {
    title: "Controleer je aankoopfacturen",
    description:
      "Zorg dat alle aankoopfacturen en relevante bewijsstukken beschikbaar zijn.",
  },
  {
    title: "Controleer het te betalen btw-bedrag",
    description:
      "Vergelijk het bedrag met je administratie of laat het controleren door je boekhouder.",
  },
  {
    title: "Betaal met de juiste mededeling",
    description:
      "Gebruik het juiste rekeningnummer en de juiste gestructureerde mededeling.",
  },
  {
    title: "Bewaar je bewijs",
    description:
      "Bewaar bewijs van indiening, betaling en eventuele communicatie.",
  },
  {
    title: "Contacteer je boekhouder bij twijfel",
    description:
      "Vraag hulp als je deadline, bedrag, mededeling of aangifte niet duidelijk is.",
  },
];

export default function BtwDeadlineChecklistPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header
        label="Checklist"
        subtitle="Een eenvoudige btw-deadline checklist voor België."
      />

      <section className="mx-auto max-w-4xl px-5 py-10 md:py-12">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-10">
          <Link
            href="/"
            className="text-sm font-black text-orange-600 hover:text-orange-700"
          >
            ← Terug naar BoeteRadar
          </Link>

          <p className="mt-6 text-sm font-black uppercase tracking-wide text-orange-600">
            Btw-deadline checklist
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Controleer je btw-deadline zonder paniek.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Deze checklist helpt je om de belangrijkste punten rond je
            btw-aangifte en btw-betaling niet te vergeten. Gebruik dit als
            praktische voorbereiding, niet als fiscaal of boekhoudkundig advies.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/downloads/btw-deadline-checklist.pdf"
              download
              className="rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Download checklist als PDF
            </a>

            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 text-center font-bold text-orange-700 transition hover:bg-orange-100"
            >
              Check btw-aangifte te laat
            </Link>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Voor aangifte</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Intervat, facturen en bewijsstukken controleren.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Voor betaling</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Bedrag, rekeningnummer en mededeling nakijken.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Voor later</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Bewijs bewaren en volgende deadline noteren.
              </p>
            </div>
          </div>

          <DisclaimerBox text="Deze checklist is enkel informatief. BoeteRadar geeft geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />
        </div>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Checklist</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Loop deze punten af vóór je deadline of meteen nadat je merkt dat je
            mogelijk te laat bent.
          </p>

          <div className="mt-6 space-y-3">
            {checklistItems.map((item, index) => (
              <div
                key={item.title}
                className="flex gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-black">{item.title}</h3>
                  <p className="mt-1 text-sm leading-6 text-slate-700">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 rounded-2xl border border-orange-200 bg-orange-50 p-5">
            <p className="font-black">Liever bewaren of printen?</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              Download de checklist als PDF en bewaar ze bij je administratie.
            </p>

            <a
              href="/downloads/btw-deadline-checklist.pdf"
              download
              className="mt-4 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
            >
              Download checklist als PDF →
            </a>
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Twijfel over je situatie?
          </p>

          <h2 className="mt-2 text-2xl font-black">Gebruik de btw-checks</h2>

          <p className="mt-3 leading-7 text-slate-700">
            Als je denkt dat je btw-aangifte of btw-betaling al te laat is,
            gebruik dan een van deze checks voor een eerste indicatie.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-2xl bg-white p-5 transition hover:shadow-sm"
            >
              <p className="font-black text-slate-950">
                Btw-aangifte te laat
              </p>
              <p className="mt-2 text-sm font-black text-orange-600">
                Start de check →
              </p>
            </Link>

            <Link
              href="/btw-te-laat-betaald"
              className="rounded-2xl bg-white p-5 transition hover:shadow-sm"
            >
              <p className="font-black text-slate-950">Btw te laat betaald</p>
              <p className="mt-2 text-sm font-black text-orange-600">
                Start de check →
              </p>
            </Link>
          </div>
        </section>

        <OfficialSources
          sources={[
            {
              label: "FOD Financiën — Intervat",
              href: "https://financien.belgium.be/nl/E-services/Intervat",
            },
            {
              label: "FOD Financiën — Btw betalen",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/betaling-teruggave/betaling",
            },
            {
              label: "FOD Financiën — Btw-boeten",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/boeten",
            },
          ]}
        />
      </section>

      <Footer />
    </main>
  );
}