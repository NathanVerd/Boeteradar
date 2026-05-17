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
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysLate));
  const safeAmount = Math.max(0, Number(amount));

  const estimatedInterest = Math.round((safeAmount * 0.08 * safeDays) / 365);

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Controleer je betaling en bewaar je betalingsbewijs.";

  if (safeDays >= 1) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Betaal zo snel mogelijk en controleer of rekeningnummer en mededeling kloppen.";
  }

  if (safeDays >= 14 || alreadyPaid === "no" || safeAmount >= 5000) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Betaal wat nog openstaat, bewaar bewijs en contacteer je boekhouder.";
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
            Btw te laat betaald? Dit controleer je eerst.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je btw te laat betaald of staat er nog iets open? Check wat je
            best nakijkt, welk bewijs je bewaart en wanneer je hulp vraagt.
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
              <h3 className="mt-1 font-black">Betaal wat openstaat</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Staat er nog btw open? Betaal zo snel mogelijk.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Check de mededeling</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer rekeningnummer, bedrag en gestructureerde mededeling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar je betalingsbewijs en eventuele berichten van FOD
                Financiën.
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
            berekening.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen ben je te laat?
              <input
                type="number"
                min="0"
                max="365"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Over welk btw-bedrag gaat het ongeveer?
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

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
                <strong>Ruwe interest-indicatie:</strong> ongeveer €
                {estimatedInterest}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Dit is een eenvoudige indicatie op basis van een voorbeeldrente.
                De echte interesten of gevolgen kunnen afwijken.
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan meespelen?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoeveel dagen de betaling te laat is.</li>
              <li>Hoe hoog het openstaande bedrag is.</li>
              <li>Of je intussen al betaald hebt.</li>
              <li>Of de mededeling en rekening correct waren.</li>
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
                Wat moet ik doen als ik mijn btw te laat betaald heb?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer of de betaling intussen gebeurd is. Staat er nog iets
                open, betaal dan zo snel mogelijk met de juiste mededeling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is deze interestberekening exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. Het is een eenvoudige indicatie. De echte interesten of
                gevolgen kunnen anders zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat is verstandig bij een groot bedrag, meerdere dagen
                vertraging of twijfel over de betaling.
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