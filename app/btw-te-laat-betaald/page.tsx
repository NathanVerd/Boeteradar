"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
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
      "Betaal zo snel mogelijk, controleer de gestructureerde mededeling en bewaar je bewijs.";
  }

  if (safeDays >= 14 || alreadyPaid === "no" || safeAmount >= 5000) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Betaal onmiddellijk, controleer de juiste rekening/mededeling en contacteer je boekhouder.";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header label="Btw-betaling" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Btw te laat betaald
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Btw te laat betaald? Check je mogelijke risico.
          </h1>

          <p className="mt-6 max-w-3xl text-lg text-slate-700">
            Deze checker geeft een eerste indicatie van je risico als je je btw
            te laat betaalde of nog moet betalen.
          </p>

          <DisclaimerBox text="Dit is een informatieve tool met vereenvoudigde rekenvoorbeelden. Het is geen juridisch, fiscaal of boekhoudkundig advies. Controleer altijd officiële bronnen of vraag advies aan je boekhouder." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Betaal meteen</h3>
              <p className="mt-2 text-sm text-slate-700">
                Wacht niet tot je een herinnering krijgt.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Check mededeling</h3>
              <p className="mt-2 text-sm text-slate-700">
                Gebruik de correcte gestructureerde mededeling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bewaar betalingsbewijs en communicatie.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Snelle betalingscheck</h2>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen ben je te laat?
              <input
                type="number"
                min="0"
                max="365"
                value={daysLate}
                onChange={(e) => setDaysLate(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Over welk btw-bedrag gaat het ongeveer?
              <input
                type="number"
                min="0"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Is de btw ondertussen betaald?
              <select
                value={alreadyPaid}
                onChange={(e) => setAlreadyPaid(e.target.value)}
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
                <strong>Ruwe indicatie nalatigheidsinterest:</strong> ongeveer €
                {estimatedInterest}
              </p>

              <p className="mt-3 text-sm text-slate-700">
                Dit is een vereenvoudigde indicatie op basis van een
                voorbeeldrente. De echte interesten, boetes of gevolgen kunnen
                afwijken.
              </p>

              <p className="mt-3 font-bold">Beste actie: {advice}</p>
            </div>
          )}
        </div>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 text-slate-700">
            <li>Betaal het openstaande btw-bedrag zo snel mogelijk.</li>
            <li>Controleer of je rekeningnummer en mededeling correct zijn.</li>
            <li>Bewaar je betalingsbewijs.</li>
            <li>Controleer later of de betaling correct verwerkt is.</li>
            <li>Vraag je boekhouder om je situatie te controleren.</li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-8 shadow-sm">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vragen over btw te laat betalen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als ik mijn btw te laat betaald heb?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Controleer eerst of de betaling intussen correct gebeurd is. Als
                je nog niet betaald hebt, betaal dan zo snel mogelijk met de
                juiste mededeling.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Is de interestberekening op deze pagina exact?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Nee. De berekening is een vereenvoudigde indicatie. De echte
                interesten, boetes of gevolgen kunnen afwijken door je concrete
                situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Moet ik mijn boekhouder contacteren?
              </h3>
              <p className="mt-2 text-sm text-slate-700">
                Ja, zeker als het om een groot bedrag gaat, als je meerdere
                dagen te laat bent of als dit niet de eerste keer is.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Wat moet ik bewaren als bewijs?</h3>
              <p className="mt-2 text-sm text-slate-700">
                Bewaar je betalingsbewijs, de gebruikte mededeling, eventuele
                berichten van FOD Financiën en communicatie met je boekhouder.
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