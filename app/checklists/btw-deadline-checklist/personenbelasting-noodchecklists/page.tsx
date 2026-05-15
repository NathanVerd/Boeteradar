import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import Link from "next/link";

const urgentSteps = [
  {
    title: "Log in op MyMinfin",
    description:
      "Controleer eerst of je aangifte effectief nog openstaat of toch al werd ingediend.",
  },
  {
    title: "Controleer het juiste aanslagjaar",
    description:
      "Verwar het inkomstenjaar en aanslagjaar niet. Noteer duidelijk over welk jaar het gaat.",
  },
  {
    title: "Zoek berichten van FOD Financiën",
    description:
      "Controleer of je een herinnering, waarschuwing, voorstel van vereenvoudigde aangifte of ander bericht kreeg.",
  },
  {
    title: "Dien zo snel mogelijk alsnog in",
    description:
      "Als je aangifte nog openstaat, wacht dan niet. Dien ze zo snel mogelijk in via Tax-on-web of via je boekhouder.",
  },
  {
    title: "Bewaar bewijs van indiening",
    description:
      "Maak een screenshot of bewaar de bevestiging van verzending in je administratie.",
  },
  {
    title: "Contacteer je boekhouder",
    description:
      "Werk je met een boekhouder? Vraag expliciet of je aangifte al werd verzonden en wanneer.",
  },
];

const documents = [
  "Identiteitsgegevens en toegang tot MyMinfin",
  "Fiscale fiches zoals loonfiches, pensioenfiches of vervangingsinkomen",
  "Attesten van kinderopvang, dienstencheques, pensioensparen of giften",
  "Bewijsstukken van aftrekbare kosten als die van toepassing zijn",
  "Berichten of brieven van FOD Financiën",
  "Vorige aangifte of aanslagbiljet als vergelijkingspunt",
];

export default function PersonenbelastingNoodchecklistPage() {
  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header
        label="Checklist"
        subtitle="Een praktische noodchecklist voor personenbelasting in België."
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
            Personenbelasting noodchecklist
          </p>

          <h1 className="mt-3 text-4xl font-black tracking-tight md:text-5xl">
            Belastingaangifte te laat? Verzamel eerst dit.
          </h1>

          <p className="mt-5 text-lg leading-8 text-slate-700">
            Deze checklist helpt je om snel orde te krijgen als je denkt dat je
            aangifte personenbelasting te laat is, nog openstaat of onduidelijk
            is. Gebruik dit als praktische voorbereiding voordat je MyMinfin,
            Tax-on-web, FOD Financiën of je boekhouder contacteert.
          </p>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Eerst controleren</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                MyMinfin, aanslagjaar en status van je aangifte.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Dan verzamelen</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Fiches, attesten, berichten en bewijsstukken.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="font-black">Daarna actie</p>
              <p className="mt-1 text-sm leading-6 text-slate-700">
                Indienen, bewijs bewaren of boekhouder contacteren.
              </p>
            </div>
          </div>

          <DisclaimerBox text="Deze checklist is enkel informatief. BoeteRadar geeft geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />
        </div>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Noodactie
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat doe je eerst als je aangifte te laat is?
          </h2>

          <div className="mt-6 space-y-3">
            {urgentSteps.map((item, index) => (
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
        </section>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Documenten
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat leg je klaar voor je aangifte of boekhouder?
          </h2>

          <ul className="mt-6 grid gap-3 md:grid-cols-2">
            {documents.map((item) => (
              <li
                key={item}
                className="rounded-2xl bg-slate-50 p-4 text-sm leading-6 text-slate-700"
              >
                ✓ {item}
              </li>
            ))}
          </ul>
        </section>

        <section className="mt-8 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Twijfel over je risico?
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Gebruik de personenbelasting-check
          </h2>

          <p className="mt-3 leading-7 text-slate-700">
            Als je wil inschatten hoe dringend je situatie is, gebruik dan de
            BoeteRadar-check voor personenbelasting te laat.
          </p>

          <Link
            href="/personenbelasting-te-laat"
            className="mt-5 inline-flex rounded-xl bg-slate-950 px-5 py-3 font-bold text-white transition hover:bg-slate-800"
          >
            Start personenbelasting-check →
          </Link>
        </section>

        <section className="mt-8 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Voorbeeldbericht
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat stuur je naar je boekhouder?
          </h2>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <p className="text-sm leading-6 text-slate-700">
              “Hallo, ik denk dat mijn aangifte personenbelasting voor
              [aanslagjaar] te laat is of nog niet werd ingediend. In MyMinfin
              zie ik [status]. Ik heb [wel/geen] bericht van FOD Financiën
              gekregen. Kan je controleren wat er nog moet gebeuren en of jij de
              aangifte kan indienen?”
            </p>
          </div>
        </section>

        <OfficialSources
          sources={[
            {
              label: "FOD Financiën — Tax-on-web",
              href: "https://financien.belgium.be/nl/E-services/Tax-on-web",
            },
            {
              label: "FOD Financiën — MyMinfin",
              href: "https://financien.belgium.be/nl/E-services/MyMinfin",
            },
            {
              label: "FOD Financiën — Indieningstermijnen aangiften",
              href: "https://financien.belgium.be/nl/experten_partners/economische-beroepen/indieningstermijnen-aangiften",
            },
          ]}
        />
      </section>

      <Footer />
    </main>
  );
}