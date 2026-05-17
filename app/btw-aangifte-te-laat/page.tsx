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
  const [declarationSubmitted, setDeclarationSubmitted] = useState("no");
  const [vatDue, setVatDue] = useState("yes");
  const [amount, setAmount] = useState(1000);
  const [paid, setPaid] = useState("yes");
  const [paymentDaysLate, setPaymentDaysLate] = useState(0);
  const [reminderReceived, setReminderReceived] = useState("no");
  const [previousProblems, setPreviousProblems] = useState("no");
  const [hasAccountant, setHasAccountant] = useState("yes");
  const [calculated, setCalculated] = useState(false);

  const safeMonths = Math.max(0, Number(monthsLate));
  const safeAmount = Math.max(0, Number(amount));
  const safePaymentDaysLate = Math.max(0, Number(paymentDaysLate));

  const cappedMonths = Math.min(safeMonths, 5);
  const estimatedFilingFine = cappedMonths * 100;

  const startedPaymentMonthsLate =
    safePaymentDaysLate === 0
      ? 0
      : Math.max(1, Math.ceil(safePaymentDaysLate / 30));

  const estimatedInterest =
    vatDue === "yes"
      ? Math.round((safeAmount * 0.08 * startedPaymentMonthsLate) / 12)
      : 0;

  const estimatedTotal = estimatedFilingFine + estimatedInterest;

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let resultTitle = "Beperkte aandacht nodig";
  let advice = "Controleer of je aangifte en betaling correct verwerkt zijn.";
  let explanation =
    "Als de aangifte intussen ingediend is en de betaling in orde is, blijft de situatie meestal overzichtelijker.";

  if (safeMonths >= 1 || declarationSubmitted === "no") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    resultTitle = "Onderneem snel actie";
    advice =
      "Dien je aangifte zo snel mogelijk in en bewaar bewijs van verzending.";
    explanation =
      "Een te late aangifte kan een administratieve boete veroorzaken. Hoe langer de vertraging, hoe hoger de indicatie tot aan het maximum.";
  }

  if (
    safeMonths >= 3 ||
    declarationSubmitted === "no" ||
    paid === "no" ||
    reminderReceived === "yes" ||
    previousProblems === "yes" ||
    safeAmount >= 5000
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Laat dit niet liggen";
    advice =
      "Dien de aangifte in, betaal wat nog openstaat en contacteer je boekhouder.";
    explanation =
      "Je situatie vraagt extra aandacht door de vertraging, een ontbrekende aangifte, openstaande betaling, een herinnering of eerdere problemen.";
  }

  if (hasAccountant === "yes" && risk === "Hoog") {
    advice =
      "Stuur je boekhouder meteen de periode, aangiftestatus, betalingstatus en eventuele FOD-berichten door.";
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
            Btw-aangifte te laat? Maak een betere inschatting.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Vul in hoe lang je aangifte te laat is, of ze intussen werd
            ingediend en of er ook een betalingsprobleem is. BoeteRadar geeft
            een indicatief totaal en een duidelijke volgende stap.
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

          <DisclaimerBox text="BoeteRadar geeft informatie en indicatieve rekenvoorbeelden. Dit is geen juridisch, fiscaal of boekhoudkundig advies. De echte boete, interest of gevolgen kunnen afwijken. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Bereken je indicatie</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vul vertraging, aangiftestatus en betalingstatus in.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Dien alsnog in</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Staat de aangifte nog open? Wacht dan niet langer.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar aangifte, betaling en eventuele FOD-berichten.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Uitgebreide btw-aangiftecheck
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul je situatie zo precies mogelijk in
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            De berekening blijft indicatief, maar wordt nuttiger als je ook
            betaling, herinneringen en eerdere problemen meeneemt.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel maanden is je aangifte ongeveer te laat?
              <input
                type="number"
                min="0"
                max="24"
                value={monthsLate}
                onChange={(e) => setMonthsLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <div className="rounded-2xl bg-slate-50 p-4">
              <p className="text-sm font-bold text-slate-700">
                Maanden meegerekend voor de boete
              </p>
              <p className="mt-1 text-2xl font-black text-slate-950">
                {cappedMonths}
              </p>
              <p className="mt-1 text-xs leading-5 text-slate-600">
                BoeteRadar rekent maximaal 5 maanden mee voor deze indicatie.
              </p>
            </div>

            <label className="font-bold">
              Is je btw-aangifte ondertussen ingediend?
              <select
                value={declarationSubmitted}
                onChange={(e) => setDeclarationSubmitted(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            <label className="font-bold">
              Moest je voor deze periode btw betalen?
              <select
                value={vatDue}
                onChange={(e) => setVatDue(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee, ik had geen te betalen btw</option>
              </select>
            </label>

            {vatDue === "yes" && (
              <>
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
                  Is de btw ondertussen betaald?
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
                  Hoeveel dagen was of is de betaling ongeveer te laat?
                  <input
                    type="number"
                    min="0"
                    max="3650"
                    value={paymentDaysLate}
                    onChange={(e) => setPaymentDaysLate(Number(e.target.value))}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                  />
                </label>

                <div className="rounded-2xl bg-slate-50 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Begonnen maanden voor interest
                  </p>
                  <p className="mt-1 text-2xl font-black text-slate-950">
                    {startedPaymentMonthsLate}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Elke begonnen maand kan meetellen. Controleer de exacte
                    berekening altijd via officiële bronnen of je boekhouder.
                  </p>
                </div>
              </>
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
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
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
                    Aangifteboete
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    €{estimatedFilingFine}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    €100 per maand, met maximum €500.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Interest-indicatie
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    €{estimatedInterest}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Alleen meegerekend als je btw moest betalen.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Btw-bedrag
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    €{vatDue === "yes" ? safeAmount : 0}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    Dit is het bedrag dat jij hebt ingevuld.
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-6 text-slate-700">
                {explanation}
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Deze berekening is een benadering. De exacte boete, interest of
                gevolgen kunnen afhangen van verwerking, communicatie, eerdere
                dossiers en beoordeling door de administratie.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat rekent BoeteRadar mee?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoeveel maanden je aangifte te laat is.</li>
              <li>Of de aangifte intussen ingediend is.</li>
              <li>Of je btw moest betalen en of dat al gebeurd is.</li>
              <li>Of je al een herinnering kreeg of eerder problemen had.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Dien de btw-aangifte zo snel mogelijk in.</li>
              <li>Betaal wat nog openstaat.</li>
              <li>Bewaar bewijs van aangifte en betaling.</li>
              <li>Controleer later of alles verwerkt is.</li>
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
                Is er btw te betalen? Is die al betaald?
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
                Hoe wordt de aangifteboete berekend?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                BoeteRadar rekent met €100 per maand vertraging en een maximum
                van €500. Dit blijft een indicatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Waarom telt de calculator ook betaling mee?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Een te late aangifte en te late betaling kunnen samen voorkomen.
                Daarom kan je ook het betalingsdeel invullen.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is deze berekening exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. De berekening is een hulpmiddel. De echte boete, interest
                of gevolgen kunnen anders zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat is verstandig als je aangifte nog niet ingediend is, als er
                nog btw openstaat of als je al een bericht kreeg.
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