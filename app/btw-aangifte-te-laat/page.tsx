"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import Link from "next/link";
import { useState } from "react";

export default function BtwAangifteTeLaatPage() {
  const [monthsLate, setMonthsLate] = useState(1);
  const [paid, setPaid] = useState("yes");
  const [firstTime, setFirstTime] = useState("yes");
  const [calculated, setCalculated] = useState(false);

  const safeMonths = Math.max(0, Number(monthsLate));
  const cappedMonths = Math.min(safeMonths, 5);
  const estimatedFine = cappedMonths * 100;

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Controleer je aangifte en bewaar je bewijs.";

  if (safeMonths >= 1) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Dien je aangifte zo snel mogelijk in en controleer of de betaling in orde is.";
  }

  if (safeMonths >= 3 || paid === "no" || firstTime === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Dien de aangifte in, betaal wat nog openstaat en contacteer je boekhouder.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Btw-checker" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Btw-aangifte te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Btw-aangifte te laat? Dit doe je eerst.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je btw-aangifte te laat of nog niet ingediend? Check snel wat je
            best nakijkt, wat je bewaart en wanneer je je boekhouder inschakelt.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Start de check
            </a>

            <Link
              href="/checklists/btw-deadline-checklist"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Open checklist
            </Link>

            <a
              href="/downloads/btw-deadline-checklist.pdf"
              download
              className="rounded-full border border-slate-200 bg-slate-50 px-6 py-3 text-center font-black text-slate-900 transition hover:bg-slate-100"
            >
              Download PDF
            </a>
          </div>

          <DisclaimerBox text="BoeteRadar geeft informatie en eenvoudige rekenvoorbeelden. Dit is geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Dien alsnog in</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Staat de aangifte nog open? Dien ze zo snel mogelijk in via
                Intervat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Check je betaling</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk na of er nog btw openstaat en of je betalingsbewijs klopt.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar alles</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar bewijs van aangifte, betaling en berichten van FOD
                Financiën.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-black uppercase tracking-wide text-orange-600">
                Snelle check
              </p>

              <h2 className="mt-2 text-2xl font-black">
                Hoe ernstig is je situatie?
              </h2>

              <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
                Vul je situatie in. De uitkomst is een hulpmiddel, geen
                officiële beslissing.
              </p>
            </div>
          </div>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel maanden ben je te laat?
              <input
                type="number"
                min="0"
                max="24"
                value={monthsLate}
                onChange={(e) => setMonthsLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Heb je de btw al betaald?
              <select
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Is dit je eerste probleem met een btw-deadline?
              <select
                value={firstTime}
                onChange={(e) => setFirstTime(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
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

              <p className="mt-2">
                <strong>Ruwe boete-indicatie:</strong> ongeveer €
                {estimatedFine}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Deze indicatie gebruikt een eenvoudige vuistregel van €100 per
                maand vertraging, met een maximum van €500. De echte gevolgen
                kunnen anders zijn.
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan meespelen?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoe lang je aangifte al te laat is.</li>
              <li>Of je de btw intussen betaald hebt.</li>
              <li>Of dit de eerste keer is of al eerder gebeurde.</li>
              <li>Of je al een bericht of herinnering kreeg.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Dien de btw-aangifte zo snel mogelijk in.</li>
              <li>Controleer of je betaling gelukt is.</li>
              <li>Bewaar bewijs van aangifte en betaling.</li>
              <li>Noteer je volgende btw-deadline.</li>
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
            Dan kan je boekhouder sneller inschatten wat er nog moet gebeuren.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Periode</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Over welke maand, kwartaal of btw-periode gaat het?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Status van de aangifte</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Is ze al ingediend of staat ze nog open?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Status van betaling</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Is de btw al betaald? Wanneer en met welke mededeling?
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Bewijsstukken</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voeg screenshots, betalingsbewijzen of FOD-berichten toe.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Hallo, mijn btw-aangifte voor [periode] is mogelijk te laat. De
              aangifte is [wel/niet] ingediend en de betaling is [wel/niet]
              gebeurd op [datum]. Kan je nakijken wat ik nu best doe?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">Btw-deadline checklist</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Gebruik de checklist om aangifte, betaling en bewijs beter op te
            volgen.
          </p>

          <ul className="mt-5 grid gap-2 leading-7 text-slate-700 md:grid-cols-2">
            <li>✓ Deadline noteren</li>
            <li>✓ Intervat controleren</li>
            <li>✓ Betaling controleren</li>
            <li>✓ Bewijs bewaren</li>
          </ul>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/downloads/btw-deadline-checklist.pdf"
              download
              className="rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Download PDF →
            </a>

            <Link
              href="/checklists/btw-deadline-checklist"
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
            Btw-aangifte te laat: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn btw-aangifte te laat is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dien ze zo snel mogelijk alsnog in. Controleer daarna je betaling
                en bewaar bewijs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is de berekening exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. Het is een eenvoudige indicatie. De echte gevolgen hangen
                af van je concrete situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat is verstandig als je meerdere maanden te laat bent, nog niet
                betaald hebt of al eerder problemen had.
              </p>
            </div>
          </div>
        </section>

        <OfficialSources
          sources={[
            {
              label: "FOD Financiën — Btw-boeten",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/boeten",
            },
            {
              label: "FOD Financiën — Intervat",
              href: "https://financien.belgium.be/nl/E-services/Intervat",
            },
            {
              label: "FOD Financiën — Btw betalen",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/betaling-teruggave/betaling",
            },
          ]}
        />

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels en procedures kunnen wijzigen. Controleer altijd officiële
            bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks excludeHref="/btw-aangifte-te-laat" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}