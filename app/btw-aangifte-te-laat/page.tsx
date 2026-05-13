"use client";

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

  let risk = "Laag tot middelmatig";

  if (safeMonths >= 3 || paid === "no" || firstTime === "no") {
    risk = "Hoog";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
        <div className="mx-auto flex max-w-5xl items-center justify-between">
          <Link href="/" className="font-black text-white">
            BoeteRadar België
          </Link>

          <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-bold">
            Btw-checker
          </span>
        </div>
      </header>

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Btw-aangifte te laat
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Btw-aangifte te laat in België? Check je mogelijke boete.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Met deze eenvoudige checker krijg je een eerste indicatie van je
            mogelijke risico en zie je wat je nu best doet als je btw-aangifte
            te laat is.
          </p>

          <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
            Dit is een informatieve tool met vereenvoudigde rekenvoorbeelden.
            Het is geen juridisch, fiscaal of boekhoudkundig advies. Controleer
            altijd officiële bronnen of vraag advies aan je boekhouder.
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Snelle boetecheck</h2>

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
            <div className="mt-6 rounded-2xl border border-emerald-300 bg-emerald-50 p-5">
              <h3 className="text-xl font-black">Jouw indicatie</h3>

              <p className="mt-3">
                <strong>Risiconiveau:</strong> {risk}
              </p>

              <p className="mt-2">
                <strong>Ruwe indicatie administratieve boete:</strong> ongeveer €
                {estimatedFine}
              </p>

              <p className="mt-3 text-sm text-slate-700">
                Deze berekening gebruikt een eenvoudige vuistregel van €100 per
                maand vertraging met een maximum van €500. De echte sanctie kan
                afwijken door je concrete situatie, eerdere fouten, betaling en
                beoordeling door de administratie.
              </p>

              <p className="mt-3 font-bold">
                Beste actie: dien je aangifte zo snel mogelijk in en betaal
                openstaande btw zo snel mogelijk.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">Wat kan dit kosten?</h2>

            <p className="mt-4 text-slate-700">
              Bij een laattijdige btw-aangifte kan je een administratieve boete
              krijgen. Deze pagina gebruikt voorlopig een eenvoudige indicatie
              om je situatie snel te begrijpen.
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-5 text-slate-700">
              <li>Hoe langer je wacht, hoe hoger het risico.</li>
              <li>Herhaling maakt je situatie vaak ernstiger.</li>
              <li>Te late betaling kan extra gevolgen hebben.</li>
              <li>De officiële beoordeling kan afwijken van deze indicatie.</li>
            </ul>
          </section>

          <section className="rounded-3xl bg-white p-8 shadow-sm">
            <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
              <li>Dien je btw-aangifte zo snel mogelijk in.</li>
              <li>Controleer of je betaling effectief gelukt is.</li>
              <li>Bewaar bewijs van aangifte en betaling.</li>
              <li>Noteer je volgende deadline onmiddellijk.</li>
              <li>Vraag je boekhouder om je situatie te controleren.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">
            Wanneer moet je extra opletten?
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je bent meerdere maanden te laat</h3>
              <p className="mt-2 text-sm text-slate-700">
                Hoe langer de vertraging, hoe groter de kans dat je situatie
                ernstig wordt beoordeeld.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je hebt nog niet betaald</h3>
              <p className="mt-2 text-sm text-slate-700">
                Een laattijdige aangifte gecombineerd met openstaande betaling
                is risicovoller.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Het is niet je eerste keer</h3>
              <p className="mt-2 text-sm text-slate-700">
                Herhaalde fouten kunnen zwaarder wegen dan een eerste
                vergissing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border-2 border-dashed border-slate-300 bg-white p-8">
          <h2 className="text-2xl font-black">
            Gratis deadline checklist binnenkort
          </h2>

          <p className="mt-3 max-w-2xl text-slate-700">
            Binnenkort kun je hier een eenvoudige checklist downloaden om je
            btw-deadlines, betalingen en bewijsstukken beter bij te houden.
          </p>

          <button
            disabled
            className="mt-5 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white opacity-60"
          >
            Binnenkort beschikbaar
          </button>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Officiële bronnen</h2>

          <p className="mt-4 text-slate-700">
            Deze pagina moet nog gekoppeld worden aan gecontroleerde officiële
            bronnen. Voor concrete beslissingen controleer je best FOD Financiën
            of vraag je advies aan je boekhouder.
          </p>
        </section>

        <div className="mt-8">
          <Link
            href="/"
            className="font-bold text-slate-700 hover:text-slate-950"
          >
            ← Terug naar alle checks
          </Link>
        </div>
      </section>

      <footer className="px-6 py-8 text-center text-sm text-slate-500">
        © 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.
      </footer>
    </main>
  );
}