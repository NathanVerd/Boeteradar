"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import Link from "next/link";
import { useState } from "react";

export default function BtwTeLaatBetaaldPage() {
  const [daysLate, setDaysLate] = useState(7);
  const [amount, setAmount] = useState(1000);
  const [alreadyPaid, setAlreadyPaid] = useState("no");
  const [communicationCorrect, setCommunicationCorrect] = useState("yes");
  const [declarationLate, setDeclarationLate] = useState("no");
  const [declarationMonthsLate, setDeclarationMonthsLate] = useState(0);
  const [reminderReceived, setReminderReceived] = useState("no");
  const [previousProblems, setPreviousProblems] = useState("no");
  const [hasAccountant, setHasAccountant] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysLate));
  const safeAmount = Math.max(0, Number(amount));
  const safeDeclarationMonthsLate = Math.max(0, Number(declarationMonthsLate));

  const startedMonthsLate =
    safeDays === 0 ? 0 : Math.max(1, Math.ceil(safeDays / 30));

  const interestRate = 0.08;

  const estimatedInterest = Math.round(
    (safeAmount * interestRate * startedMonthsLate) / 12
  );

  const estimatedFilingFine =
    declarationLate === "yes"
      ? Math.min(safeDeclarationMonthsLate, 5) * 100
      : 0;

  const estimatedTotal = estimatedInterest + estimatedFilingFine;

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let resultTitle = "Beperkte aandacht nodig";
  let advice = "Controleer je betaling en bewaar je betalingsbewijs.";
  let explanation =
    "Als de betaling intussen correct verwerkt is, blijft de situatie meestal overzichtelijker.";

  if (safeDays >= 1 || alreadyPaid === "no") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    resultTitle = "Onderneem snel actie";
    advice =
      "Betaal wat nog openstaat en controleer rekeningnummer, bedrag en mededeling.";
    explanation =
      "Laattijdige betaling kan nalatigheidsinteresten veroorzaken. Hoe langer je wacht, hoe hoger de indicatie wordt.";
  }

  if (
    safeDays >= 30 ||
    alreadyPaid === "no" ||
    safeAmount >= 5000 ||
    communicationCorrect !== "yes" ||
    declarationLate === "yes" ||
    reminderReceived === "yes" ||
    previousProblems === "yes"
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Laat dit niet liggen";
    advice =
      "Betaal wat nog openstaat, bewaar bewijs en contacteer je boekhouder.";
    explanation =
      "Je situatie vraagt extra aandacht door het bedrag, de vertraging, een mogelijk foutieve mededeling, een herinnering of een te late aangifte.";
  }

  if (hasAccountant === "yes" && risk === "Hoog") {
    advice =
      "Stuur je boekhouder meteen het bedrag, de betaaldatum, de mededeling en eventuele FOD-berichten door.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Btw-betaling" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Btw te laat betaald
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Btw te laat betaald? Maak een betere inschatting.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Vul je bedrag, vertraging en situatie in. BoeteRadar geeft een
            indicatieve berekening van mogelijke interesten en, als je aangifte
            ook te laat was, een mogelijke aangifteboete.
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

          <DisclaimerBox text="BoeteRadar geeft informatie en indicatieve rekenvoorbeelden. Dit is geen juridisch, fiscaal of boekhoudkundig advies. De echte interesten, boetes of gevolgen kunnen afwijken. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Bereken je indicatie</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vul bedrag, vertraging en betalingstatus in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Check extra risico’s</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk of je aangifte ook te laat was of je een herinnering kreeg.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar betaling, mededeling en eventuele berichten.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Uitgebreide btw-betalingscheck
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul je situatie zo precies mogelijk in
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            De berekening blijft indicatief, maar wordt veel nuttiger als je ook
            betalingstatus, mededeling en aangiftestatus meeneemt.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Over welk btw-bedrag gaat het ongeveer?
              <div className="relative mt-2">
                <span className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 font-bold text-slate-500">
                  €
                </span>

                <input
                  type="number"
                  min="0"
                  value={amount}
                  onChange={(e) => setAmount(Number(e.target.value))}
                  className="w-full rounded-xl border border-slate-300 bg-white p-3 pl-9 font-normal"
                />
              </div>
            </label>

            <label className="font-bold">
              Hoeveel dagen ben je ongeveer te laat?
              <input
                type="number"
                min="0"
                max="3650"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-700">
                Begonnen maanden vertraging
              </p>
              <p className="mt-1 text-2xl font-black text-slate-950">
                {startedMonthsLate}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                BoeteRadar benadert dit op basis van je aantal dagen te laat.
                Controleer de exacte periode altijd via officiële bronnen of je
                boekhouder.
              </p>
            </div>

            <label className="font-bold">
              Is de btw ondertussen betaald?
              <select
                value={alreadyPaid}
                onChange={(e) => setAlreadyPaid(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Klopten rekeningnummer en gestructureerde mededeling?
              <select
                value={communicationCorrect}
                onChange={(e) => setCommunicationCorrect(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
                <option value="unknown">Ik weet het niet</option>
              </select>
            </label>

            <label className="font-bold">
              Was de btw-aangifte zelf ook te laat?
              <select
                value={declarationLate}
                onChange={(e) => setDeclarationLate(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            {declarationLate === "yes" && (
              <label className="font-bold">
                Hoeveel maanden was de aangifte ongeveer te laat?
                <input
                  type="number"
                  min="0"
                  max="24"
                  value={declarationMonthsLate}
                  onChange={(e) =>
                    setDeclarationMonthsLate(Number(e.target.value))
                  }
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                />
              </label>
            )}

            <label className="font-bold">
              Heb je al een herinnering of bericht gekregen?
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
              Had je eerder al problemen met btw-deadlines?
              <select
                value={previousProblems}
                onChange={(e) => setPreviousProblems(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Werk je met een boekhouder?
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
              Bereken mijn indicatie
            </button>
          </div>

          {calculated && (
            <div className={`mt-6 rounded-2xl border p-5 ${riskColor}`}>
              <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
                <div>
                  <p className="text-sm font-black uppercase tracking-wide text-slate-600">
                    Jouw indicatie
                  </p>

                  <h3 className="mt-1 text-2xl font-black">{resultTitle}</h3>

                  <p className="mt-3">
                    <strong>Risiconiveau:</strong> {risk}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4 md:min-w-56">
                  <p className="text-sm font-bold text-slate-700">
                    Indicatief totaal
                  </p>
                  <p className="mt-1 text-4xl font-black">
                    €{estimatedTotal}
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Interest-indicatie
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    €{estimatedInterest}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Berekend met 8% per jaar en {startedMonthsLate} begonnen
                    maand(en).
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Aangifteboete
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    €{estimatedFilingFine}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Alleen meegerekend als je aangifte zelf ook te laat was.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Openstaand bedrag
                  </p>
                  <p className="mt-1 text-2xl font-black">€{safeAmount}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Dit is het btw-bedrag dat jij hebt ingevuld.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-700">
                {explanation}
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Deze berekening is een benadering. De exacte interesten, boetes
                of gevolgen kunnen afhangen van verwerking, termijnen,
                communicatie, eerdere dossiers en beoordeling door de
                administratie.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat rekent BoeteRadar mee?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Het btw-bedrag dat je invult.</li>
              <li>Het aantal begonnen maanden vertraging.</li>
              <li>Of de btw intussen betaald is.</li>
              <li>Of je aangifte zelf ook te laat was.</li>
              <li>Of je al een herinnering kreeg of eerder problemen had.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Betaal het openstaande btw-bedrag zo snel mogelijk.</li>
              <li>Controleer rekeningnummer en gestructureerde mededeling.</li>
              <li>Bewaar je betalingsbewijs.</li>
              <li>Controleer later of de betaling verwerkt is.</li>
              <li>Contacteer je boekhouder bij twijfel.</li>
            </ol>
          </section>
        </div>

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
            <li>✓ Volgende deadline noteren</li>
            <li>✓ Intervat controleren</li>
            <li>✓ Betaling controleren</li>
            <li>✓ Betalingsbewijs bewaren</li>
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
            Btw te laat betaald: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Hoe wordt de interest-indicatie berekend?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                BoeteRadar gebruikt het ingevulde btw-bedrag, 8% jaarlijkse
                interest en het aantal begonnen maanden vertraging. Dit blijft
                een indicatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Waarom telt BoeteRadar ook aangifteboete mee?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Alleen als je aangeeft dat de btw-aangifte zelf ook te laat was.
                Dan rekent BoeteRadar een aparte indicatie mee.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is deze berekening exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. De berekening is een hulpmiddel. De echte interesten,
                boetes of gevolgen kunnen anders zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat is verstandig bij een groot bedrag, meerdere dagen
                vertraging, foutieve mededeling, herinnering of twijfel.
              </p>
            </div>
          </div>
        </section>

        <OfficialSources
          sources={[
            {
              label: "FOD Financiën — Btw betalen",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/betaling-teruggave/betaling",
            },
            {
              label: "FOD Financiën — Btw-boeten",
              href: "https://financien.belgium.be/nl/ondernemingen/btw/boeten",
            },
            {
              label: "FOD Financiën — Intervat",
              href: "https://financien.belgium.be/nl/E-services/Intervat",
            },
          ]}
        />

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels, bedragen en procedures kunnen wijzigen. Controleer altijd
            officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks
          title="Nog iets rond btw controleren?"
          excludeHref="/btw-te-laat-betaald"
        />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}