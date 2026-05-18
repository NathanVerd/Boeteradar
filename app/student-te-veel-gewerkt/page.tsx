"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import { useState } from "react";

export default function StudentTeVeelGewerktPage() {
  const [ageGroup, setAgeGroup] = useState("18-25");
  const [region, setRegion] = useState("flanders");
  const [studentHoursUsed, setStudentHoursUsed] = useState(620);
  const [plannedStudentHours, setPlannedStudentHours] = useState(0);
  const [otherWorkHours, setOtherWorkHours] = useState(0);
  const [otherWorkPeriod, setOtherWorkPeriod] = useState("month");
  const [quarterWorkHours, setQuarterWorkHours] = useState(0);
  const [currentQuarter, setCurrentQuarter] = useState("q1");
  const [continuesAfterSummer, setContinuesAfterSummer] = useState("yes");
  const [stillStudying, setStillStudying] = useState("yes");
  const [sameEmployer12Months, setSameEmployer12Months] = useState("no");
  const [multipleEmployers, setMultipleEmployers] = useState("no");
  const [mainConcern, setMainConcern] = useState("everything");
  const [calculated, setCalculated] = useState(false);

  const safeStudentHoursUsed = Math.max(0, Number(studentHoursUsed));
  const safePlannedStudentHours = Math.max(0, Number(plannedStudentHours));
  const safeOtherWorkHours = Math.max(0, Number(otherWorkHours));
  const safeQuarterWorkHours = Math.max(0, Number(quarterWorkHours));

  const expectedStudentHours =
    safeStudentHoursUsed + safePlannedStudentHours;
  const remainingStudentHours = Math.max(0, 650 - expectedStudentHours);
  const exceededStudentHours = Math.max(0, expectedStudentHours - 650);

  const monthlyOtherWork =
    otherWorkPeriod === "month"
      ? safeOtherWorkHours
      : Math.round(safeOtherWorkHours / 3);

  const quarterlyOtherWork =
    otherWorkPeriod === "quarter"
      ? safeOtherWorkHours
      : safeOtherWorkHours * 3;

  const isUnder18 = ageGroup === "under-18";
  const isAdultStudent = ageGroup === "18-25";
  const isQuarterThree = currentQuarter === "q3";

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let resultTitle = "Je lijkt nog ruimte te hebben";
  let socialContributionText =
    "Je lijkt binnen de 650 studentenuren te blijven. Controleer wel altijd je officiële teller op Student@work.";
  let childBenefitText =
    "Er is op basis van je ingevulde gegevens geen duidelijke rode vlag voor Groeipakket of kinderbijslag.";
  let taxText =
    "BoeteRadar berekent hier geen exact belastingbedrag. Hou je bruto-inkomen en loonfiches goed bij.";
  let advice =
    "Download je Student@work-attest en controleer je teller voordat je extra shifts aanneemt.";

  if (
    expectedStudentHours > 600 ||
    safePlannedStudentHours > 0 ||
    safeOtherWorkHours > 0 ||
    multipleEmployers === "yes"
  ) {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    resultTitle = "Controleer dit voor je verder werkt";
    advice =
      "Controleer Student@work, je geplande shifts, je contracten en je loonfiches voordat je extra uren aanneemt.";
  }

  if (exceededStudentHours > 0) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Je gaat boven de 650 studentenuren";
    socialContributionText =
      "Vanaf de uren boven 650 kunnen normale sociale bijdragen gelden. Die extra uren zijn dus niet meer hetzelfde als je gewone studentenuren.";
    advice =
      "Controleer je Student@work-attest, bespreek dit met je werkgever en vraag advies voordat je extra shifts doet.";
  }

  if (stillStudying === "no") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Laat je studentenstatuut controleren";
    socialContributionText =
      "Als studeren niet meer je hoofdactiviteit is, kan je situatie anders beoordeeld worden. Laat dit controleren voordat je verder werkt als student.";
    advice =
      "Werk niet zomaar verder als jobstudent. Vraag advies aan je werkgever, school, boekhouder of een officiële dienst.";
  }

  if (sameEmployer12Months === "yes") {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Let op met dezelfde werkgever";
    advice =
      "Vraag aan je werkgever of boekhouder of je nog correct met een studentenovereenkomst kan werken bij deze werkgever.";
  }

  if (isUnder18) {
    childBenefitText =
      "Omdat je jonger bent dan 18, is de waarschuwing rond kinderbijslag/Groeipakket meestal minder zwaar. Controleer wel nog altijd je Student@work-teller en contract.";
  }

  if (isAdultStudent && region === "flanders") {
    if (monthlyOtherWork > 80) {
      risk = "Hoog";
      riskColor = "border-red-300 bg-red-50";
      resultTitle = "Let op met extra werk in Vlaanderen";
      childBenefitText =
        "In Vlaanderen kan werk buiten studentencontract boven 80 uur per maand een risico vormen voor Groeipakket. Controleer dit bij je uitbetaler.";
    } else {
      childBenefitText =
        "Voor Vlaanderen let je vooral op je 650 studentenuren en op eventueel werk buiten studentencontract. Werk buiten studentencontract blijft best onder 80 uur per maand.";
    }
  }

  if (isAdultStudent && region === "brussels") {
    if (
      safeQuarterWorkHours > 240 &&
      !(isQuarterThree && continuesAfterSummer === "yes")
    ) {
      risk = "Hoog";
      riskColor = "border-red-300 bg-red-50";
      resultTitle = "Let op met de Brusselse kwartaalgrens";
      childBenefitText =
        "In Brussel kan meer dan 240 uur per kwartaal een risico vormen voor kinderbijslag. In juli, augustus en september geldt een uitzondering als je na de zomer verder studeert.";
    } else if (isQuarterThree && continuesAfterSummer === "yes") {
      childBenefitText =
        "Voor Brussel is het derde kwartaal vaak anders als je na de zomervakantie verder studeert. Controleer dit wel bij je uitbetaler.";
    } else {
      childBenefitText =
        "Voor Brussel let je vooral op de 240 uur per kwartaal. Alle werkuren kunnen meetellen, niet alleen studentenuren.";
    }
  }

  if (isAdultStudent && region === "wallonia") {
    if (quarterlyOtherWork > 240 || safeQuarterWorkHours > 240) {
      risk = "Hoog";
      riskColor = "border-red-300 bg-red-50";
      resultTitle = "Let op met de Waalse kwartaalgrens";
      childBenefitText =
        "In Wallonië kan extra werk boven 240 uur per kwartaal een risico vormen. Controleer dit bij je uitbetaler.";
    } else {
      childBenefitText =
        "Voor Wallonië let je op je 650 studentenuren en op extra werk per kwartaal.";
    }
  }

  if (isAdultStudent && region === "east-belgium") {
    if (quarterlyOtherWork > 175) {
      risk = "Hoog";
      riskColor = "border-red-300 bg-red-50";
      resultTitle = "Let op met gewoon werk in Oost-België";
      childBenefitText =
        "In Oost-België is er voor studentencontracten geen aparte jaarlimiet voor kinderbijslag, maar gewoon werk of zelfstandige activiteit boven 175 uur per kwartaal kan wel een risico vormen.";
    } else {
      childBenefitText =
        "Voor Oost-België ligt de nadruk op het verschil tussen studentencontract en ander werk. De eerste 650 studentenuren blijven belangrijk voor verminderde sociale bijdragen.";
    }
  }

  if (ageGroup === "over-25") {
    childBenefitText =
      "Omdat je ouder bent dan 25, is de klassieke kinderbijslag/Groeipakket-context meestal minder relevant. Controleer vooral je sociale bijdragen, contract en fiscale situatie.";
  }

  if (mainConcern === "taxes") {
    taxText =
      "Let vooral op je bruto-inkomen, loonfiches en of je nog fiscaal ten laste kan blijven. BoeteRadar berekent dit bedrag niet exact.";
  }

  if (mainConcern === "child-benefit") {
    advice =
      "Controleer vooral de regels van je regio en neem contact op met je uitbetaler van Groeipakket of kinderbijslag.";
  }

  if (mainConcern === "social-contributions") {
    advice =
      "Controleer vooral je Student@work-teller en bespreek met je werkgever wat er gebeurt met uren boven 650.";
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
            Te veel gewerkt als student? Check je risico beter.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Vul je gebruikte en geplande studentenuren in. BoeteRadar kijkt ook
            naar je regio, ander werk, leeftijd en studiesituatie, zodat je een
            gerichter overzicht krijgt.
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

          <DisclaimerBox text="BoeteRadar geeft informatie en indicatieve inschattingen. Dit is geen juridisch, fiscaal of sociaal advies. Controleer altijd Student@work, officiële bronnen, je uitbetaler of een professional." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Check je uren</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Kijk hoeveel studentenuren je al gebruikte en wat je nog plant.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Check je regio</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Groeipakket of kinderbijslag hangt sterk af van je woonplaats.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar je Student@work-attest, contracten en loonfiches.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Uitgebreide studentencheck
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul je situatie zo precies mogelijk in
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            De uitkomst blijft een hulpmiddel, maar wordt nuttiger als je ook je
            regio, extra werk en geplande uren invult.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoe oud ben je?
              <select
                value={ageGroup}
                onChange={(e) => setAgeGroup(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="under-18">Jonger dan 18</option>
                <option value="18-25">18 tot en met 25</option>
                <option value="over-25">Ouder dan 25</option>
              </select>
            </label>

            <label className="font-bold">
              Waar woon je officieel?
              <select
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="flanders">Vlaanderen</option>
                <option value="brussels">Brussels Hoofdstedelijk Gewest</option>
                <option value="wallonia">Wallonië</option>
                <option value="east-belgium">Oost-België</option>
              </select>
            </label>

            <label className="font-bold">
              Hoeveel studentenuren heb je dit kalenderjaar al gebruikt?
              <input
                type="number"
                min="0"
                max="3000"
                value={studentHoursUsed}
                onChange={(e) => setStudentHoursUsed(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Hoeveel extra studentenuren plan je nog dit jaar?
              <input
                type="number"
                min="0"
                max="3000"
                value={plannedStudentHours}
                onChange={(e) => setPlannedStudentHours(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <div className="grid gap-3 rounded-2xl bg-slate-50 p-4 md:grid-cols-3">
              <div>
                <p className="text-sm font-bold text-slate-700">
                  Verwacht totaal
                </p>
                <p className="mt-1 text-2xl font-black">
                  {expectedStudentHours}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700">
                  Nog over binnen 650
                </p>
                <p className="mt-1 text-2xl font-black">
                  {remainingStudentHours}
                </p>
              </div>

              <div>
                <p className="text-sm font-bold text-slate-700">
                  Boven 650
                </p>
                <p className="mt-1 text-2xl font-black">
                  {exceededStudentHours}
                </p>
              </div>
            </div>

            <label className="font-bold">
              Werk je ook buiten studentencontract?
              <input
                type="number"
                min="0"
                max="1000"
                value={otherWorkHours}
                onChange={(e) => setOtherWorkHours(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Is dat aantal per maand of per kwartaal?
              <select
                value={otherWorkPeriod}
                onChange={(e) => setOtherWorkPeriod(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="month">Per maand</option>
                <option value="quarter">Per kwartaal</option>
              </select>
            </label>

            {(region === "brussels" ||
              region === "wallonia" ||
              region === "east-belgium") && (
              <label className="font-bold">
                Hoeveel totale werkuren heb je ongeveer in dit kwartaal?
                <input
                  type="number"
                  min="0"
                  max="1000"
                  value={quarterWorkHours}
                  onChange={(e) => setQuarterWorkHours(Number(e.target.value))}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                />
              </label>
            )}

            {region === "brussels" && (
              <>
                <label className="font-bold">
                  Over welk kwartaal gaat het?
                  <select
                    value={currentQuarter}
                    onChange={(e) => setCurrentQuarter(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                  >
                    <option value="q1">Januari, februari, maart</option>
                    <option value="q2">April, mei, juni</option>
                    <option value="q3">Juli, augustus, september</option>
                    <option value="q4">Oktober, november, december</option>
                  </select>
                </label>

                {currentQuarter === "q3" && (
                  <label className="font-bold">
                    Studeer je na de zomervakantie verder?
                    <select
                      value={continuesAfterSummer}
                      onChange={(e) => setContinuesAfterSummer(e.target.value)}
                      className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                    >
                      <option value="yes">Ja</option>
                      <option value="no">Nee</option>
                    </select>
                  </label>
                )}
              </>
            )}

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

            <label className="font-bold">
              Werk je al 12 maanden of langer bij dezelfde werkgever?
              <select
                value={sameEmployer12Months}
                onChange={(e) => setSameEmployer12Months(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Werk je bij meerdere werkgevers?
              <select
                value={multipleEmployers}
                onChange={(e) => setMultipleEmployers(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Waarover maak je je vooral zorgen?
              <select
                value={mainConcern}
                onChange={(e) => setMainConcern(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="everything">Alles samen</option>
                <option value="social-contributions">Sociale bijdragen</option>
                <option value="child-benefit">Groeipakket of kinderbijslag</option>
                <option value="taxes">Belastingen / fiscaal ten laste</option>
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
                    Jouw overzicht
                  </p>

                  <h3 className="mt-1 text-2xl font-black">{resultTitle}</h3>

                  <p className="mt-3">
                    <strong>Risiconiveau:</strong> {risk}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4 md:min-w-56">
                  <p className="text-sm font-bold text-slate-700">
                    Verwacht totaal
                  </p>
                  <p className="mt-1 text-4xl font-black">
                    {expectedStudentHours}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    studentenuren
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3 md:grid-cols-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Binnen 650
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {remainingStudentHours}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    resterende uren na je geplande shifts.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Boven 650
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {exceededStudentHours}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    uren die mogelijk normale bijdragen krijgen.
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="text-sm font-bold text-slate-700">
                    Ander werk
                  </p>
                  <p className="mt-1 text-2xl font-black">
                    {otherWorkPeriod === "month"
                      ? `${monthlyOtherWork}/maand`
                      : `${quarterlyOtherWork}/kwartaal`}
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    buiten studentencontract.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Sociale bijdragen</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {socialContributionText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Groeipakket of kinderbijslag</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {childBenefitText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Belastingen</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {taxText}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-bold">Wat nu? {advice}</p>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Deze inschatting is geen officiële beslissing. Regio,
                contracttype, leeftijd, inkomen, gezinssituatie en concrete
                documenten kunnen het resultaat veranderen.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat rekent BoeteRadar mee?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Je gebruikte en geplande studentenuren.</li>
              <li>Of je boven de 650 uren gaat.</li>
              <li>Je leeftijd en officiële woonplaats.</li>
              <li>Werk buiten studentencontract.</li>
              <li>Of studeren nog je hoofdactiviteit is.</li>
              <li>Of je lang bij dezelfde werkgever werkt.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Log in op Student@work en controleer je officiële uren.</li>
              <li>Download of bewaar je Student@work-attest.</li>
              <li>Controleer je geplande shifts voor je ze aanneemt.</li>
              <li>Bewaar contracten en loonfiches.</li>
              <li>Check je regio bij je uitbetaler als je 18 jaar of ouder bent.</li>
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
              <h3 className="font-black">Je regio maakt verschil</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Vlaanderen, Brussel, Wallonië en Oost-België gebruiken niet
                exact dezelfde regels voor kinderbijslag.
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
              “Ik heb ongeveer [aantal] studentenuren gewerkt en plan nog
              [aantal] uren. Kunnen we samen nakijken of dit invloed heeft op
              Groeipakket, kinderbijslag, sociale bijdragen of fiscaal ten laste
              blijven?”
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
                BoeteRadar gebruikt 650 uur per kalenderjaar als uitgangspunt
                voor verminderde sociale bijdragen. Controleer altijd je
                officiële teller op Student@work.
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
                Ja, afhankelijk van je regio, leeftijd, type werk en aantal
                uren. Controleer dit bij je uitbetaler.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Tellen meerdere werkgevers samen?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Ja. Je studentenuren worden niet per werkgever apart bekeken.
                Controleer daarom je totale teller op Student@work.
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
                label: "Student@work — Studentenjob en jobstudent",
                href: "https://www.studentatwork.be/nl/studentenjob-en-jobstudent.html",
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