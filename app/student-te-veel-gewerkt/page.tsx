"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import { useState } from "react";

export default function StudentTeVeelGewerktPage() {
  const [hoursWorked, setHoursWorked] = useState(650);
  const [monthlyOtherWork, setMonthlyOtherWork] = useState(0);
  const [region, setRegion] = useState("flanders");
  const [stillStudying, setStillStudying] = useState("yes");
  const [calculated, setCalculated] = useState(false);

  const safeHours = Math.max(0, Number(hoursWorked));
  const safeMonthlyOtherWork = Math.max(0, Number(monthlyOtherWork));
  const remainingHours = Math.max(0, 650 - safeHours);
  const exceededHours = Math.max(0, safeHours - 650);

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let advice = "Controleer je officiële teller op Student@work.";
  let possibleConsequence =
    "Je lijkt binnen de 650 studentenuren te blijven. Controleer wel altijd je officiële teller.";

  if (safeHours > 600 || safeMonthlyOtherWork > 0) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Controleer Student@work, je loonfiches en mogelijke impact op Groeipakket of kinderbijslag.";
    possibleConsequence =
      "Je zit dicht bij de grens of combineert studentenwerk met ander werk. Laat je situatie goed nakijken.";
  }

  if (
    exceededHours > 0 ||
    stillStudying === "no" ||
    safeMonthlyOtherWork > 80
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Werk niet zomaar verder. Controleer Student@work en vraag advies aan je ouders, werkgever, uitbetaler of boekhouder.";
    possibleConsequence =
      "Boven de grens kunnen normale sociale bijdragen gelden. Er kunnen ook gevolgen zijn voor Groeipakket, kinderbijslag of je fiscale situatie.";
  }

  if (region === "brussels" && safeHours > 0) {
    possibleConsequence =
      "Let extra op: in Brussel gelden andere regels dan in Vlaanderen. Controleer je regionale uitbetaler.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Student" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Student te veel gewerkt
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Te veel gewerkt als student? Dit kijk je na.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Twijfel je over je studentenuren? Check je Student@work-teller, je
            contracten, loonfiches en mogelijke gevolgen voor Groeipakket,
            kinderbijslag of belastingen.
          </p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              href="#check"
              className="rounded-full bg-slate-950 px-6 py-3 text-center font-black text-white transition hover:bg-slate-800"
            >
              Start de check
            </a>

            <a
              href="#bronnen"
              className="rounded-full border border-orange-200 bg-orange-50 px-6 py-3 text-center font-black text-orange-700 transition hover:bg-orange-100"
            >
              Bekijk bronnen
            </a>
          </div>

          <DisclaimerBox text="BoeteRadar geeft informatie en eenvoudige inschattingen. Dit is geen juridisch, fiscaal of sociaal advies. Controleer altijd Student@work, officiële bronnen of vraag professioneel advies." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Check Student@work</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk hoeveel uren je officieel gebruikt hebt en hoeveel er nog
                overblijven.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Bekijk je documenten</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hou je contracten, loonfiches en Student@work-attest bij.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Check mogelijke gevolgen</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk of er impact kan zijn op Groeipakket, kinderbijslag of
                belastingen.
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
            Hoe dicht zit je bij de grens?
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Vul je situatie in. De uitkomst is een hulpmiddel, geen officiële
            berekening.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel studentenuren heb je dit jaar ongeveer gewerkt?
              <input
                type="number"
                min="0"
                max="2000"
                value={hoursWorked}
                onChange={(e) => setHoursWorked(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Hoeveel uur per maand werk je ongeveer buiten studentencontract?
              <input
                type="number"
                min="0"
                max="300"
                value={monthlyOtherWork}
                onChange={(e) => setMonthlyOtherWork(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Waar woon je?
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="flanders">Vlaanderen</option>
                <option value="brussels">Brussel</option>
                <option value="wallonia">Wallonië</option>
                <option value="east-belgium">Oost-België</option>
              </select>
            </label>

            <label className="font-bold">
              Is studeren nog je hoofdactiviteit?
              <select
                value={stillStudying}
                onChange={(e) => setStillStudying(e.target.value)}
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
                <strong>Studentenuren gebruikt:</strong> {safeHours} / 650
              </p>

              <p className="mt-2">
                <strong>Resterende uren:</strong> {remainingHours}
              </p>

              {exceededHours > 0 && (
                <p className="mt-2">
                  <strong>Uren boven 650:</strong> {exceededHours}
                </p>
              )}

              <p className="mt-3">
                <strong>Mogelijk gevolg:</strong> {possibleConsequence}
              </p>

              <p className="mt-3 text-sm leading-6 text-slate-700">
                Deze indicatie gebruikt de 650-urenregel als uitgangspunt.
                Regio, contracttype, inkomen en je gezinssituatie kunnen het
                resultaat veranderen.
              </p>

              <p className="mt-3 font-bold">Wat nu? {advice}</p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat kan meespelen?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoeveel studentenuren je officieel gebruikt hebt.</li>
              <li>Of je ook buiten studentencontract werkt.</li>
              <li>Of studeren nog je hoofdactiviteit is.</li>
              <li>Welke regels gelden in jouw regio.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Log in op Student@work en controleer je officiële uren.</li>
              <li>Download of bewaar je Student@work-attest.</li>
              <li>Controleer je contracten en loonfiches.</li>
              <li>Check mogelijke impact op Groeipakket of kinderbijslag.</li>
              <li>Vraag advies bij twijfel.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Extra opletten
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Studentenwerk kan meer beïnvloeden dan alleen je uren.
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je zit dicht bij 650 uur</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer je officiële teller voordat je extra shifts aanneemt.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je werkt ook anders</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Werk buiten studentencontract kan andere gevolgen hebben.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Studeren staat niet meer centraal</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dan laat je je situatie best extra goed controleren.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Voor thuis
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat check je best samen?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Studentenwerk kan soms ook thuis gevolgen hebben. Leg daarom je
            documenten klaar.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Student@work-attest</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Toon hoeveel uren je officieel gebruikt hebt.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Loonfiches</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Verzamel je loonfiches zodat je inkomsten duidelijk zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Groeipakket of kinderbijslag</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer bij je uitbetaler of je werk invloed kan hebben.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Fiscale situatie</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vraag bij twijfel of je nog fiscaal ten laste bent.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Ik heb ongeveer [aantal] studentenuren gewerkt. Kunnen we samen
              nakijken of dit invloed heeft op Groeipakket, kinderbijslag,
              sociale bijdragen of fiscaal ten laste blijven?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Studentenwerk: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Hoeveel uur mag ik werken als jobstudent?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                BoeteRadar gebruikt 650 uur per kalenderjaar als uitgangspunt.
                Controleer altijd je officiële teller op Student@work.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat gebeurt er als ik boven 650 uur ga?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vanaf uren boven de grens kunnen normale sociale bijdragen
                gelden. Er kunnen ook andere gevolgen zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Kan mijn Groeipakket of kinderbijslag beïnvloed worden?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ja, afhankelijk van je regio, type werk en aantal uren.
                Controleer dit bij je uitbetaler.
              </p>
            </div>
          </div>
        </section>

        <div id="bronnen">
          <OfficialSources
            sources={[
              {
                label: "Student@work — Urenpakket en impact",
                href: "https://www.studentatwork.be/nl/urenpakket-en-impact.html",
              },
              {
                label: "Vlaanderen.be — Werken als jobstudent",
                href: "https://www.vlaanderen.be/werken-als-jobstudent",
              },
              {
                label: "Vlaanderen.be — Groeipakket behouden als student",
                href: "https://www.vlaanderen.be/algemene-voorwaarden-en-procedure-voor-het-groeipakket/groeipakket-behouden-voor-wie-werkt-en-studeert",
              },
            ]}
          />
        </div>

        <section className="mt-6 rounded-[2rem] border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels rond studentenwerk, sociale bijdragen, Groeipakket,
            kinderbijslag en fiscale gevolgen kunnen wijzigen. Controleer altijd
            officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks excludeHref="/student-te-veel-gewerkt" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}