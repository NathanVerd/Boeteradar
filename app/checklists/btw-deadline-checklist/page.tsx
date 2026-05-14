import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Link from "next/link";

const checklistItems = [
  "Noteer de volgende btw-deadline in je agenda.",
  "Controleer of je btw-aangifte klaarstaat in Intervat.",
  "Controleer of je alle verkoopfacturen hebt verwerkt.",
  "Controleer of je alle aankoopfacturen hebt verwerkt.",
  "Controleer of het te betalen btw-bedrag klopt.",
  "Betaal op tijd naar het juiste rekeningnummer met de juiste mededeling.",
  "Bewaar je betalingsbewijs.",
  "Neem contact op met je boekhouder als je twijfelt.",
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
            btw-aangifte en betaling niet te vergeten. Gebruik dit als praktische
            voorbereiding, niet als fiscaal of boekhoudkundig advies.
          </p>

          <DisclaimerBox text="Deze checklist is enkel informatief. BoeteRadar geeft geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />
        </div>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Checklist</h2>

          <div className="mt-6 space-y-3">
            {checklistItems.map((item, index) => (
              <div
                key={item}
                className="flex gap-4 rounded-2xl bg-slate-50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-orange-100 text-sm font-black text-orange-700">
                  {index + 1}
                </div>

                <p className="pt-1 leading-7 text-slate-700">{item}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Handige volgende checks</h2>

          <p className="mt-3 leading-7 text-slate-700">
            Twijfel je of je aangifte of betaling te laat is? Gebruik dan een
            van deze checks.
          </p>

          <div className="mt-5 grid gap-4 md:grid-cols-2">
            <Link
              href="/btw-aangifte-te-laat"
              className="rounded-2xl bg-white p-5 font-black text-orange-600 transition hover:shadow-sm"
            >
              Check btw-aangifte te laat →
            </Link>

            <Link
              href="/btw-te-laat-betaald"
              className="rounded-2xl bg-white p-5 font-black text-orange-600 transition hover:shadow-sm"
            >
              Check btw te laat betaald →
            </Link>
          </div>
        </section>
      </section>

      <Footer />
    </main>
  );
}