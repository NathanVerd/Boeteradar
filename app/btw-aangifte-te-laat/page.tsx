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
  let advice = "Dien je aangifte zo snel mogelijk in en bewaar je bewijs.";

  if (safeMonths >= 1) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Dien je aangifte vandaag nog in, controleer je betaling en noteer je volgende deadline.";
  }

  if (safeMonths >= 3 || paid === "no" || firstTime === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Dien je aangifte onmiddellijk in, betaal openstaande bedragen en contacteer je boekhouder.";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header label="Btw-checker" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Btw-aangifte te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Btw-aangifte te laat in België? Check je mogelijke risico.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Met deze eenvoudige checker krijg je een eerste indicatie van je
            mogelijke risico en zie je welke stappen je nu best controleert:
            aangifte indienen, betaling nakijken en bewijs bewaren.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <a
              href="/downloads/btw-deadline-checklist.pdf"
              download
              className="rounded-xl bg-slate-950 px-5 py-3 text-center font-bold text-white transition hover:bg-slate-800"
            >
              Download btw-checklist als PDF
            </a>

            <Link
              href="/checklists/btw-deadline-checklist"
              className="rounded-xl border border-orange-200 bg-orange-50 px-5 py-3 text-center font-bold text-orange-700 transition hover:bg-orange-100"
            >
              Open checklistpagina
            </Link>
          </div>

          <DisclaimerBox text="Dit is een informatieve tool met vereenvoudigde rekenvoorbeelden. Het is geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Aangifte indienen</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dien je btw-aangifte zo snel mogelijk alsnog in via Intervat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Betaling controleren</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk na of je openstaande btw al betaald is of nog dringend
                betaald moet worden.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Bewijs bewaren</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar bewijs van indiening, betaling en communicatie met je
                boekhouder.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Snelle boetecheck</h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Vul hieronder je situatie in. De uitkomst is alleen een indicatie en
            geen officiële beslissing.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel maanden ben je te laat?
              <input
                type="number"
                min="0"
                max="24"
                value={monthsLate}
                onChange={(e) => setMonthsLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Heb je de btw al betaald?
              <select
                value={paid}
                onChange={(e) => setPaid(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Is dit je eerste keer?
              <select
                value={firstTime}
                onChange={(e) => setFirstTime(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <button
              onClick={() => setCalculated(true)}
              className="rounded-xl bg-slate-950 px-5 py-4 font-bold text-white hover:bg-slate-800"
            >
              Bereken risico
            </button>
          </div>

          {calculated && (
            <div className={`mt-6 rounded-2xl border p-5 ${riskColor}`}>
              <h3 className="text-xl font-black">Jouw indicatie</h3>

              <p className="mt-3">
                <strong>Risiconiveau:</strong> {risk}
              </p>

              <p className="mt-2">
                <strong>Ruwe indicatie administratieve boete:</strong> ongeveer €
                {estimatedFine}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Deze berekening gebruikt een eenvoudige vuistregel van €100 per
                maand vertraging met een maximum van €500. De echte sanctie kan
                afwijken door je concrete situatie, eerdere fouten, betaling en
                beoordeling door de administratie.
              </p>

              <p className="mt-3 font-bold">Beste actie: {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan dit kosten?</h2>

            <p className="mt-4 leading-7 text-slate-700">
              Bij een laattijdige btw-aangifte kan je een administratieve boete
              krijgen. Deze pagina gebruikt een vereenvoudigde indicatie om je
              situatie snel te begrijpen.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoe langer je wacht, hoe hoger het risico.</li>
              <li>Herhaling maakt je situatie vaak ernstiger.</li>
              <li>Te late betaling kan extra gevolgen hebben.</li>
              <li>De officiële beoordeling kan afwijken van deze indicatie.</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Dien je btw-aangifte zo snel mogelijk in.</li>
              <li>Controleer of je betaling effectief gelukt is.</li>
              <li>Bewaar bewijs van aangifte en betaling.</li>
              <li>Noteer je volgende deadline onmiddellijk.</li>
              <li>Vraag je boekhouder om je situatie te controleren.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">
            Wanneer moet je extra opletten?
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je bent meerdere maanden te laat</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hoe langer de vertraging, hoe groter de kans dat je situatie
                ernstig wordt beoordeeld.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je hebt nog niet betaald</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Een laattijdige aangifte gecombineerd met openstaande betaling
                is risicovoller.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Het is niet je eerste keer</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Herhaalde fouten kunnen zwaarder wegen dan een eerste
                vergissing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Boekhouder voorbereiden
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat stuur je best naar je boekhouder?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Als je btw-aangifte te laat is, verlies dan geen tijd met vage
            berichten. Stuur meteen de juiste info door zodat je boekhouder
            sneller kan helpen.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">1. Periode van de aangifte</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Zeg duidelijk over welke maand, kwartaal of btw-periode het gaat.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">2. Status van indiening</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Meld of de aangifte al ingediend is of nog volledig moet
                gebeuren.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">3. Status van betaling</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Geef door of de btw al betaald is en wanneer de betaling
                gebeurde.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">4. Bewijsstukken</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Voeg screenshots, betalingsbewijzen of meldingen van FOD
                Financiën toe.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht:</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Hallo, ik denk dat mijn btw-aangifte voor [periode] te laat is.
              De aangifte is [wel/niet] ingediend en de betaling is [wel/niet]
              gebeurd op [datum]. Kan je controleren wat ik nu best doe?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">Btw-deadline checklist</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Gebruik deze checklist om je btw-aangifte, betaling en bewijsstukken
            niet meer uit het oog te verliezen.
          </p>

          <ul className="mt-5 grid gap-2 leading-7 text-slate-700 md:grid-cols-2">
            <li>✓ Datum van aangifte noteren</li>
            <li>✓ Intervat controleren</li>
            <li>✓ Betaling controleren</li>
            <li>✓ Bewijs van indiening bewaren</li>
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
              Open checklistpagina →
            </Link>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vragen over een te late btw-aangifte
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn btw-aangifte te laat is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dien je aangifte zo snel mogelijk alsnog in. Controleer daarna
                of je betaling gebeurd is en bewaar bewijs van indiening en
                betaling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is deze berekening exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. BoeteRadar gebruikt een vereenvoudigde indicatie. De echte
                gevolgen hangen af van je concrete situatie, eerdere fouten,
                betaling en de beoordeling door de administratie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ja, zeker als je meerdere maanden te laat bent, nog niet betaald
                hebt of al eerder problemen had met btw-deadlines.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Kan een te late btw-aangifte extra gevolgen hebben?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ja. Naast een mogelijke administratieve boete kunnen laattijdige
                betaling, herhaling of ontbrekende documenten je situatie
                risicovoller maken.
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
              label: "FOD Financiën — Intervat aangifteportaal",
              href: "https://financien.belgium.be/nl/E-services/Intervat",
            },
            {
              label: "FOD Financiën — Btw betalen",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/betaling-teruggave/betaling",
            },
          ]}
        />

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Binnenkort
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wil je later herinneringen voor btw-deadlines?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Later kan BoeteRadar helpen met eenvoudige reminders voor
            btw-aangiftes, betalingen en andere administratieve deadlines.
            Voorlopig bouwen we eerst de belangrijkste checks en checklistpagina
            verder uit.
          </p>

          <div className="mt-5 rounded-2xl bg-slate-50 p-5">
            <p className="font-bold">Waarom dit nuttig kan zijn:</p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-slate-700">
              <li>Je vergeet minder snel een deadline.</li>
              <li>Je houdt bewijs van aangifte en betaling beter bij.</li>
              <li>Je krijgt later mogelijk een checklist per situatie.</li>
            </ul>
          </div>

          <button
            disabled
            className="mt-6 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white opacity-60"
          >
            Reminderfunctie later
          </button>
        </section>

        <RelatedChecks excludeHref="/btw-aangifte-te-laat" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}