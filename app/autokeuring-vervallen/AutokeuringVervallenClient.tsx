"use client";

import BackHomeLink from "@/components/BackHomeLink";
import DisclaimerBox from "@/components/DisclaimerBox";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import OfficialSources from "@/components/OfficialSources";
import RelatedChecks from "@/components/RelatedChecks";
import { useState } from "react";

export default function AutokeuringVervallenPage() {
  const [daysExpired, setDaysExpired] = useState(7);
  const [stillDriving, setStillDriving] = useState("yes");
  const [drivingReason, setDrivingReason] = useState("essential");
  const [appointmentMade, setAppointmentMade] = useState("no");
  const [appointmentSoon, setAppointmentSoon] = useState("unknown");
  const [proofAvailable, setProofAvailable] = useState("no");
  const [inspectionType, setInspectionType] = useState("periodic");
  const [accidentOrDamage, setAccidentOrDamage] = useState("no");
  const [policeCheck, setPoliceCheck] = useState("no");
  const [insuranceContacted, setInsuranceContacted] = useState("no");
  const [calculated, setCalculated] = useState(false);

  const safeDays = Math.max(0, Number(daysExpired));

  const delayLabel =
    safeDays === 0
      ? "Niet vervallen"
      : safeDays <= 7
        ? "Korte vertraging"
        : safeDays <= 30
          ? "Duidelijke vertraging"
          : "Lange vertraging";

  let risk = "Laag";
  let riskColor = "border-emerald-300 bg-emerald-50";
  let resultTitle = "Maak of controleer je afspraak";
  let drivingText =
    "Als je keuring niet vervallen is of je niet meer rijdt, blijft de situatie meestal beperkter.";
  let appointmentText =
    "Maak een afspraak en bewaar de bevestiging, zodat je kan aantonen dat je actie hebt ondernomen.";
  let insuranceText =
    "Zonder ongeval of schade is dit vooral iets om preventief op te volgen. Bij twijfel contacteer je je verzekeraar of makelaar.";
  let proofText =
    "Bewaar je keuringsuitnodiging, afspraakbevestiging en later ook het nieuwe keuringsbewijs.";
  let advice = "Maak een afspraak en bewaar je bevestiging.";

  if (safeDays >= 1 || stillDriving === "yes" || appointmentMade === "no") {
    risk = "Middelmatig";
    riskColor = "border-orange-300 bg-orange-50";
    resultTitle = "Onderneem snel actie";
    drivingText =
      "Rijden met een vervallen keuring kan risico geven bij controle, schade of discussie met je verzekering.";
    appointmentText =
      "Plan zo snel mogelijk een technische keuring. Heb je al een afspraak, bewaar dan het afspraakbewijs.";
    advice =
      "Maak zo snel mogelijk een keuringsafspraak en vermijd onnodige ritten.";
  }

  if (
    safeDays >= 30 ||
    (stillDriving === "yes" && drivingReason === "daily") ||
    appointmentMade === "no" ||
    accidentOrDamage === "yes" ||
    policeCheck === "yes" ||
    inspectionType === "reinspection"
  ) {
    risk = "Hoog";
    riskColor = "border-red-300 bg-red-50";
    resultTitle = "Laat dit niet liggen";
    drivingText =
      "De combinatie van een vervallen keuring en blijven rijden verhoogt het risico, zeker bij dagelijkse ritten, controle, schade of ongeval.";
    appointmentText =
      "Maak meteen een afspraak. Als het om een herkeuring gaat, controleer extra goed welke termijn of beperking op je document staat.";
    insuranceText =
      "Bij schade, ongeval of twijfel over dekking neem je best contact op met je verzekeraar of makelaar.";
    advice =
      "Maak meteen een afspraak, beperk je ritten en bewaar alle bewijsstukken.";
  }

  if (stillDriving === "no") {
    drivingText =
      "Omdat je niet meer met de auto rijdt, ligt de nadruk vooral op zo snel mogelijk regulariseren en bewijs bewaren.";
    if (appointmentMade === "yes" && safeDays < 30) {
      risk = "Laag";
      riskColor = "border-emerald-300 bg-emerald-50";
      resultTitle = "Je hebt al de belangrijkste stap gezet";
      advice =
        "Ga naar je afspraak en bewaar je afspraakbevestiging en keuringsbewijs.";
    }
  }

  if (appointmentMade === "yes") {
    appointmentText =
      "Je hebt al een afspraak. Bewaar de bevestiging en beperk je ritten tot wat echt nodig is.";
  }

  if (appointmentMade === "yes" && appointmentSoon === "yes") {
    appointmentText =
      "Je afspraak is binnenkort. Bewaar de bevestiging, rij alleen als het nodig is en neem je documenten mee.";
  }

  if (proofAvailable === "no") {
    proofText =
      "Je hebt nog geen bewijs klaar. Bewaar minstens je afspraakbevestiging, keuringsuitnodiging, vorige keuringskaart en eventuele communicatie.";
    if (risk !== "Hoog") {
      risk = "Middelmatig";
      riskColor = "border-orange-300 bg-orange-50";
    }
  }

  if (insuranceContacted === "yes") {
    insuranceText =
      "Je hebt je verzekeraar of makelaar al gecontacteerd. Bewaar die communicatie, zeker als er schade of een ongeval was.";
  }

  if (drivingReason === "nonessential" && stillDriving === "yes") {
    advice =
      "Vermijd niet-noodzakelijke ritten en maak of bevestig je keuringsafspraak.";
  }

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Autokeuring" />

      <section className="mx-auto max-w-5xl px-5 py-10">
        <div className="rounded-[2rem] bg-white p-7 shadow-sm md:p-12">
          <p className="mb-4 text-sm font-black uppercase tracking-wide text-orange-600">
            Autokeuring vervallen
          </p>

          <h1 className="max-w-4xl text-4xl font-black tracking-tight md:text-6xl">
            Autokeuring vervallen? Check wat nu telt.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-700">
            Is je technische keuring verlopen? BoeteRadar helpt je inschatten
            hoe dringend je situatie is, wat je best bewaart en wanneer je extra
            voorzichtig moet zijn.
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

          <DisclaimerBox text="BoeteRadar geeft informatie en indicatieve inschattingen. Dit is geen juridisch, verzekerings- of verkeersadvies. Controleer altijd officiële bronnen, je keuringscentrum of je verzekeraar bij twijfel." />

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">1</p>
              <h3 className="mt-1 font-black">Maak een afspraak</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Plan zo snel mogelijk een nieuwe technische keuring of
                herkeuring.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">2</p>
              <h3 className="mt-1 font-black">Beperk je ritten</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Rij niet onnodig zolang je keuring vervallen is.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <p className="text-sm font-black text-orange-600">3</p>
              <h3 className="mt-1 font-black">Bewaar bewijs</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Bewaar afspraakbevestiging, keuringsdocumenten en communicatie.
              </p>
            </div>
          </div>
        </div>

        <div
          id="check"
          className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8"
        >
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Uitgebreide autokeuringcheck
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul je situatie zo precies mogelijk in
          </h2>

          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            De uitkomst is geen officiële beoordeling, maar helpt je bepalen wat
            je nu eerst regelt.
          </p>

          <div className="mt-6 grid gap-5">
            <label className="font-bold">
              Hoeveel dagen is je keuring al vervallen?
              <input
                type="number"
                min="0"
                max="1000"
                value={daysExpired}
                onChange={(e) => setDaysExpired(Number(e.target.value))}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              />
            </label>

            <label className="font-bold">
              Rij je nog met de auto?
              <select
                value={stillDriving}
                onChange={(e) => setStillDriving(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            {stillDriving === "yes" && (
              <label className="font-bold">
                Waarom rij je nog?
                <select
                  value={drivingReason}
                  onChange={(e) => setDrivingReason(e.target.value)}
                  className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                >
                  <option value="essential">Alleen noodzakelijke ritten</option>
                  <option value="daily">Dagelijks / woon-werk / school</option>
                  <option value="nonessential">Ook niet-noodzakelijke ritten</option>
                </select>
              </label>
            )}

            <label className="font-bold">
              Heb je al een keuringsafspraak?
              <select
                value={appointmentMade}
                onChange={(e) => setAppointmentMade(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="yes">Ja</option>
                <option value="no">Nee</option>
              </select>
            </label>

            {appointmentMade === "yes" && (
              <>
                <label className="font-bold">
                  Is die afspraak binnenkort?
                  <select
                    value={appointmentSoon}
                    onChange={(e) => setAppointmentSoon(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                  >
                    <option value="yes">Ja, binnen enkele dagen</option>
                    <option value="no">Nee, pas later</option>
                    <option value="unknown">Ik weet het niet</option>
                  </select>
                </label>

                <label className="font-bold">
                  Heb je een afspraakbewijs of bevestiging?
                  <select
                    value={proofAvailable}
                    onChange={(e) => setProofAvailable(e.target.value)}
                    className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
                  >
                    <option value="yes">Ja</option>
                    <option value="no">Nee</option>
                  </select>
                </label>
              </>
            )}

            <label className="font-bold">
              Gaat het om een gewone keuring of herkeuring?
              <select
                value={inspectionType}
                onChange={(e) => setInspectionType(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="periodic">Gewone periodieke keuring</option>
                <option value="reinspection">Herkeuring</option>
                <option value="unknown">Ik weet het niet</option>
              </select>
            </label>

            <label className="font-bold">
              Was er schade of een ongeval sinds de keuring vervallen is?
              <select
                value={accidentOrDamage}
                onChange={(e) => setAccidentOrDamage(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Ben je al gecontroleerd of kreeg je een waarschuwing?
              <select
                value={policeCheck}
                onChange={(e) => setPoliceCheck(e.target.value)}
                className="mt-2 w-full rounded-xl border border-slate-300 bg-white p-3 font-normal"
              >
                <option value="no">Nee</option>
                <option value="yes">Ja</option>
              </select>
            </label>

            <label className="font-bold">
              Heb je je verzekeraar of makelaar al gecontacteerd?
              <select
                value={insuranceContacted}
                onChange={(e) => setInsuranceContacted(e.target.value)}
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
              Toon mijn indicatie
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
                    Vertraging
                  </p>
                  <p className="mt-1 text-3xl font-black">{delayLabel}</p>
                  <p className="mt-1 text-xs leading-5 text-slate-600">
                    {safeDays} dag(en) ingevuld.
                  </p>
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Rijden</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {drivingText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Afspraak</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {appointmentText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Verzekering</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {insuranceText}
                  </p>
                </div>

                <div className="rounded-2xl bg-white/70 p-4">
                  <p className="font-black">Bewijsstukken</p>
                  <p className="mt-2 text-sm leading-6 text-slate-700">
                    {proofText}
                  </p>
                </div>
              </div>

              <p className="mt-5 font-bold">Wat nu? {advice}</p>

              <p className="mt-3 text-xs leading-5 text-slate-600">
                Deze inschatting is geen officiële beoordeling. De echte gevolgen
                kunnen afhangen van controle, schade, verzekering, documenten,
                keuringscentrum en je concrete situatie.
              </p>
            </div>
          )}
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-2">
          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat rekent BoeteRadar mee?</h2>

            <ul className="mt-4 list-disc space-y-2 pl-5 leading-7 text-slate-700">
              <li>Hoe lang je keuring al vervallen is.</li>
              <li>Of je nog met de auto rijdt.</li>
              <li>Of je al een afspraak en bewijs hebt.</li>
              <li>Of het om een gewone keuring of herkeuring gaat.</li>
              <li>Of er schade, ongeval of controle was.</li>
              <li>Of je je verzekeraar al contacteerde.</li>
            </ul>
          </section>

          <section className="rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
            <h2 className="text-2xl font-black">Wat doe je nu best?</h2>

            <ol className="mt-4 list-decimal space-y-2 pl-5 leading-7 text-slate-700">
              <li>Maak zo snel mogelijk een afspraak voor de keuring.</li>
              <li>Beperk je ritten zolang je keuring vervallen is.</li>
              <li>Bewaar je afspraakbevestiging.</li>
              <li>Controleer je verzekering bij schade, ongeval of twijfel.</li>
              <li>Bewaar je keuringsbewijs zodra je opnieuw gekeurd bent.</li>
            </ol>
          </section>
        </div>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Extra opletten
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Rijden met een vervallen keuring kan problemen geven.
          </h2>

          <div className="mt-5 grid gap-4 md:grid-cols-3">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je rijdt nog dagelijks</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Hoe meer je rijdt, hoe groter de kans op controle of problemen
                bij schade of ongeval.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Je hebt nog geen afspraak</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Maak zo snel mogelijk een afspraak en bewaar de bevestiging.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Het gaat om een herkeuring</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Controleer extra goed welke termijn of beperking op je document
                staat.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[2rem] bg-white p-7 shadow-sm md:p-8">
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Veelgestelde vragen
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Autokeuring vervallen: veelgestelde vragen
          </h2>

          <div className="mt-6 grid gap-4">
            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Wat moet ik doen als mijn autokeuring vervallen is?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Maak zo snel mogelijk een afspraak bij een keuringscentrum en
                vermijd onnodige ritten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">
                Mag ik nog rijden met een vervallen keuring?
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Dat kan risico geven bij controle, ongeval of verzekering.
                Controleer officiële informatie en beperk je ritten.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Is een afspraakbewijs genoeg?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Nee. Het toont dat je actie hebt ondernomen, maar het vervangt
                geen geldig keuringsbewijs.
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5">
              <h3 className="font-black">Wat met mijn verzekering?</h3>
              <p className="mt-2 text-sm leading-6 text-slate-700">
                Contacteer je verzekeraar of makelaar bij twijfel, zeker na een
                ongeval of schadegeval.
              </p>
            </div>
          </div>
        </section>

        <div id="bronnen">
          <OfficialSources
            sources={[
              {
                label: "Vlaanderen.be — Technische keuring",
                href: "https://www.vlaanderen.be/auto-en-motor/technische-keuring-van-voertuigen",
              },
              {
                label: "GOCA Vlaanderen — Keuringscentra",
                href: "https://www.gocavlaanderen.be",
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
            Regels, controleprocedures en verzekeringsgevolgen kunnen wijzigen.
            Controleer altijd officiële bronnen of vraag professioneel advies.
          </p>
        </section>

        <RelatedChecks excludeHref="/autokeuring-vervallen" />

        <BackHomeLink />
      </section>

      <Footer />
    </main>
  );
}