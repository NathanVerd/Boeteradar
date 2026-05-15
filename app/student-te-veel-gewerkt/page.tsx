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
  let advice =
    "Controleer je resterende uren op Student@work en bewaar je contracten.";
  let possibleConsequence =
    "Je lijkt binnen de 650 studentenuren te blijven, maar controleer altijd je officiële teller.";

  if (safeHours > 600 || safeMonthlyOtherWork > 0) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    advice =
      "Controleer je Student@work-teller, je loonfiches en eventuele impact op Groeipakket of kinderbijslag.";
    possibleConsequence =
      "Je zit dicht bij de grens of combineert studentenwerk met ander werk. Dat kan gevolgen hebben voor sociale bijdragen of voordelen.";
  }

  if (
    exceededHours > 0 ||
    stillStudying === "no" ||
    safeMonthlyOtherWork > 80
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    advice =
      "Stop niet blind verder met werken. Controleer Student@work, contacteer je werkgever en vraag advies aan je ouders, uitbetaler of boekhouder.";
    possibleConsequence =
      "Boven de 650 studentenuren betaal je vanaf extra uren mogelijk normale sociale bijdragen. Te veel of ander werk kan ook invloed hebben op Groeipakket, kinderbijslag of je fiscale situatie.";
  }

  if (region === "brussels" && safeHours > 0) {
    possibleConsequence =
      "Let extra op: in Brussel gelden voor kinderbijslag/Groeipakket-achtige regels andere grenzen dan in Vlaanderen. Controleer je regionale uitbetaler.";
  }

  return (
    <main className="min-h-screen bg-slate-100 text-slate-950">
      <Header label="Student" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-3xl bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-bold uppercase tracking-wide text-orange-600">
            Student te veel gewerkt
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Te veel gewerkt als student? Check je mogelijke risico.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Deze checker geeft een eerste indicatie als je twijfelt of je te veel
            studentenuren hebt gewerkt. Je ziet wat je best controleert:
            Student@work, je contracten, loonfiches en mogelijke impact op
            Groeipakket, kinderbijslag of belastingen.
          </p>

          <DisclaimerBox text="Dit is een informatieve tool met vereenvoudigde inschattingen. Het is geen juridisch, fiscaal of sociaal advies. Controleer altijd Student@work, officiële bronnen of vraag professioneel advies." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 1</p>
              <h3 className="mt-1 font-black">Check Student@work</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk hoeveel uren je officieel gebruikt hebt en hoeveel er nog
                overblijven.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 2</p>
              <h3 className="mt-1 font-black">Controleer voordelen</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk of je werk invloed kan hebben op Groeipakket, kinderbijslag
                of fiscale situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-bold text-orange-600">Stap 3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar contracten, loonfiches en je Student@work-attest.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Snelle studentenwerk-check</h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            Vul hieronder je situatie in. De uitkomst is alleen een indicatie en
            geen officiële berekening.
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
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
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
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Waar woon je?
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 p-3 font-normal"
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
                Deze inschatting gebruikt de 650-urenregel als vereenvoudigd
                uitgangspunt. Regionale regels, type contract, inkomen,
                gezinssituatie en het feit of studeren je hoofdactiviteit blijft,
                kunnen het resultaat veranderen.
              </p>

              <p className="mt-3 font-bold">Beste actie: {advice}</p>
            </div>
          )}
        </div>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <h2 className="text-2xl font-black">Wat moet je nu doen?</h2>

          <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
            <li>Log in op Student@work en controleer je officiële uren.</li>
            <li>Download of bewaar je Student@work-attest.</li>
            <li>Controleer je contracten en loonfiches.</li>
            <li>Check of er impact kan zijn op Groeipakket of kinderbijslag.</li>
            <li>
              Vraag advies aan je ouders, werkgever, uitbetaler of boekhouder.
            </li>
          </ol>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Wanneer moet je extra opletten?
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Te veel werken kan meer gevolgen hebben dan alleen extra bijdragen.
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je zit dicht bij 650 uur</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer je officiële teller voordat je nog extra shifts
                aanneemt.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Je werkt ook buiten studentencontract
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Andere arbeid kan andere regels hebben en mogelijk invloed
                hebben op voordelen.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Studeren is niet meer je hoofdactiviteit
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dan moet je extra voorzichtig zijn en je situatie laten
                controleren.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Ouders voorbereiden
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Wat check je best samen met je ouders?
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Studentenwerk kan niet alleen voor jou gevolgen hebben, maar soms ook
            voor het Groeipakket, kinderbijslag of de fiscale situatie thuis.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">1. Student@work-attest</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Toon hoeveel uren je officieel gebruikt hebt en hoeveel er nog
                overblijven.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">2. Loonfiches</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Verzamel je loonfiches zodat je inkomsten duidelijk zijn.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">3. Groeipakket of kinderbijslag</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer bij je uitbetaler of je werk invloed kan hebben.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">4. Fiscale situatie</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vraag bij twijfel aan een boekhouder of je nog fiscaal ten laste
                bent.
              </p>
            </div>
          </div>

          <div className="mt-5 rounded-2xl border border-slate-200 bg-slate-50 p-5">
            <p className="font-bold">Voorbeeldbericht:</p>
            <p className="mt-2 text-sm leading-6 text-slate-700">
              “Ik heb ongeveer [aantal] studentenuren gewerkt. Kunnen we samen
              checken of dit invloed heeft op Groeipakket, kinderbijslag,
              sociale bijdragen of fiscaal ten laste blijven?”
            </p>
          </div>
        </section>

        <section className="mt-6 rounded-3xl border border-orange-200 bg-orange-50 p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-700">
            Gratis hulpmiddel
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Studentenwerk noodchecklist
          </h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Gebruik deze checklist om snel te verzamelen wat je nodig hebt als je
            denkt dat je te veel gewerkt hebt als student.
          </p>

          <ul className="mt-5 grid gap-2 leading-7 text-slate-700 md:grid-cols-2">
            <li>✓ Student@work-teller controleren</li>
            <li>✓ Loonfiches verzamelen</li>
            <li>✓ Contracttype controleren</li>
            <li>✓ Uitbetaler checken</li>
          </ul>

          <button
            disabled
            className="mt-6 rounded-xl bg-slate-950 px-5 py-3 font-bold text-white opacity-60"
          >
            PDF-download later
          </button>
        </section>

        <section className="mt-6 rounded-3xl bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vragen over te veel werken als student
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Hoeveel uur mag ik werken als jobstudent?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                BoeteRadar gebruikt 650 uur per kalenderjaar als uitgangspunt
                voor deze indicatie. Controleer altijd je officiële teller op
                Student@work.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat gebeurt er als ik boven 650 uur ga?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vanaf de uren boven de grens kunnen normale sociale bijdragen
                gelden. Er kunnen ook andere gevolgen zijn afhankelijk van je
                situatie.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Kan mijn Groeipakket of kinderbijslag beïnvloed worden?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ja, afhankelijk van je regio, type werk en aantal uren. Controleer
                dit altijd bij je uitbetaler.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is deze checker exact?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. BoeteRadar geeft een vereenvoudigde indicatie. Controleer
                Student@work, je uitbetaler of een boekhouder voor je concrete
                situatie.
              </p>
            </div>
          </div>
        </section>

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

        <section className="mt-6 rounded-3xl border border-slate-200 bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
            Laatst inhoudelijk nagekeken
          </p>

          <h2 className="mt-2 text-2xl font-black">Mei 2026</h2>

          <p className="mt-3 max-w-2xl leading-7 text-slate-700">
            Regels rond studentenwerk, sociale bijdragen, Groeipakket,
            kinderbijslag en fiscale gevolgen kunnen wijzigen. Controleer altijd
            de officiële bronnen of vraag professioneel advies voor je concrete
            situatie.
          </p>
        </section>

        <RelatedChecks excludeHref="/student-te-veel-gewerkt" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}