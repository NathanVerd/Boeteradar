"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import Link from "next/link";
import { useState } from "react";

export default function PersonenbelastingTeLaatPage() {
  const [daysLate, setDaysLate] = useState(7);
  const [submitted, setSubmitted] = useState("no");
  const [reminderReceived, setReminderReceived] = useState("no");
  const [hasAccountant, setHasAccountant] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysLate));

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Controleer je aangifte en bewaar je bewijs.";
  let possibleConsequence =
    "Als alles intussen in orde is, blijft het risico meestal beperkter.";

  if (safeDays >= 1 || submitted === "no") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Controleer MyMinfin en dien je aangifte zo snel mogelijk alsnog in.";
    possibleConsequence =
      "Er kan een risico zijn op opvolging, een administratieve sanctie of extra controle.";
  }

  if (safeDays >= 30 || reminderReceived === "yes" || submitted === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Dien zo snel mogelijk in en contacteer je boekhouder of FOD Financiën.";
    possibleConsequence =
      "Bij een ontbrekende of laattijdige aangifte kunnen boetes, belastingverhoging of een aanslag van ambtswege mogelijk worden.";
  }

  if (hasAccountant === "yes" && submitted === "no") {
    advice =
      "Contacteer je boekhouder vandaag nog en vraag of de aangifte al verzonden werd.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Personenbelasting" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Personenbelasting te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Belastingaangifte te laat? Dit doe je eerst.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je aangifte personenbelasting te laat of nog niet ingediend?
            Check wat je best nakijkt in MyMinfin, wat je bewaart en wanneer je
            je boekhouder contacteert.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Start de check
            </a>

            <Link
              href="/checklists/personenbelasting-noodchecklist"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Open noodchecklist
            </Link>

            <a
              href="/downloads/personenbelasting-noodchecklist.pdf"
              download
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Download PDF
            </a>
          </div>

          <DisclaimerBox text="BoeteRadar geeft informatie en eenvoudige inschattingen. Dit is geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Check MyMinfin</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk of je aangifte ingediend is of nog openstaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Dien alsnog in</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Staat ze nog open? Wacht dan niet langer.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar bevestigingen, berichten en communicatie.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Snelle check
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Hoe dringend is je situatie?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Vul je situatie in. De uitkomst is een hulpmiddel, geen officiële
            beslissing.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen ben je ongeveer te laat?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Is je aangifte ondertussen ingediend?
              <select
                value={submitted}
                onChange={(e) => setSubmitted(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je al een herinnering of bericht ontvangen?
              <select
                value={reminderReceived}
                onChange={(e) => setReminderReceived(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Werk je via een boekhouder?
              <select
                value={hasAccountant}
                onChange={(e) => setHasAccountant(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <button
              onClick={() => setCalculated(true)}
              className="rounded-xl bg-slate-950 px-5 py-4 font-bold text-white transition hover:bg-slate-800"
            >
              Toon mijn indicatie
            </button>
          </div>

          {calculated && (
            <div className={`mt-6 rounded-2xl border p-5 ${riskColor}`}>
              <h3 className="text-xl font-black">Jouw indicatie</h3>

              <p className="mt-3">
                <strong>Risiconiveau:</strong> {risk}
              </p>

              <p className="mt-3">
                <strong>Mogelijk gevolg:</strong> {possibleConsequence}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Deze inschatting kijkt naar vertraging, indieningsstatus en of
                je al een bericht kreeg. De echte gevolgen hangen af van je
                concrete situatie.
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan meespelen?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Of je aangifte al dan niet ingediend is.</li>
              <li>Hoe lang je te laat bent.</li>
              <li>Of je al een herinnering of bericht kreeg.</li>
              <li>Of je aangifte via een boekhouder loopt.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Log in op MyMinfin en controleer de status.</li>
              <li>Dien je aangifte zo snel mogelijk alsnog in.</li>
              <li>Bewaar bewijs van verzending of bevestiging.</li>
              <li>Controleer of je een bericht van FOD Financiën kreeg.</li>
              <li>Contacteer je boekhouder bij twijfel.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Boekhouder voorbereiden
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Stuur meteen de juiste info door.
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Dan kan je boekhouder sneller zien wat er nog moet gebeuren.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Aanslagjaar</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Over welk aanslagjaar of inkomstenjaar gaat het?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Status van indiening</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Is de aangifte al ingediend of staat ze nog open?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Berichten van FOD Financiën</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voeg brieven, meldingen of screenshots toe.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Bewijsstukken</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Verzamel fiches, attesten en relevante documenten.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Hallo, mijn aangifte personenbelasting voor [aanslagjaar] is
              mogelijk te laat. Ze is [wel/niet] ingediend en ik heb
              [wel/geen] bericht ontvangen. Kan je nakijken wat ik nu best
              doe?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Personenbelasting noodchecklist
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Gebruik de checklist om MyMinfin, documenten en communicatie sneller
            op orde te krijgen.
          </p>

          <ul className="mt-5 grid gap-2 leading-7 text-slate-700 md:grid-cols-2">
            <li>✓ MyMinfin-status controleren</li>
            <li>✓ Bewijs van indiening bewaren</li>
            <li>✓ Fiscale fiches verzamelen</li>
            <li>✓ Boekhouder contacteren</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/downloads/personenbelasting-noodchecklist.pdf"
              download
              className="rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Download PDF →
            </a>

            <Link
              href="/checklists/personenbelasting-noodchecklist"
              className="rounded-xl border border-orange-200 bg-white px-5 py-3 text-center font-bold text-orange-700 transition hover:bg-orange-100"
            >
              Open checklist →
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Personenbelasting te laat: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn belastingaangifte te laat is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Log in op MyMinfin, controleer de status en dien de aangifte zo
                snel mogelijk alsnog in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Kan ik een boete krijgen?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat kan bij een laattijdige of ontbrekende aangifte. De echte
                gevolgen hangen af van je concrete situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat als mijn boekhouder te laat is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vraag meteen of de aangifte al verzonden werd en bewaar die
                communicatie.
              </p>
            </div>
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

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels, termijnen en procedures kunnen wijzigen. Controleer altijd
            officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks excludeHref="/personenbelasting-te-laat" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}