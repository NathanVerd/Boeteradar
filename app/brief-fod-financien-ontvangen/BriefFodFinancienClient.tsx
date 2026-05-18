"use client";

import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import RelatedChecks from "@/components/RelatedChecks";
import { useMemo, useState } from "react";

type LetterTopic =
  | "personenbelasting"
  | "btw"
  | "betaling"
  | "vraag_info"
  | "voorstel_wijziging"
  | "aanslag_ambtswege"
  | "boete_interest"
  | "onbekend";

type ReceivedVia = "post" | "ebox" | "myminfin" | "boekhouder";

type Deadline = "minder_7" | "tussen_7_30" | "meer_30" | "nee_onduidelijk";

type YesNo = "ja" | "nee";

type ReminderType = "herinnering" | "waarschuwing" | "beslissing" | "onduidelijk";

const topicLabels: Record<LetterTopic, string> = {
  personenbelasting: "Personenbelasting",
  btw: "Btw",
  betaling: "Betaling of openstaand bedrag",
  vraag_info: "Vraag om informatie",
  voorstel_wijziging: "Voorstel van wijziging",
  aanslag_ambtswege: "Aanslag van ambtswege",
  boete_interest: "Boete of interest",
  onbekend: "Ik weet het niet",
};

const receivedViaLabels: Record<ReceivedVia, string> = {
  post: "Post",
  ebox: "eBox",
  myminfin: "MyMinfin",
  boekhouder: "Boekhouder",
};

const deadlineLabels: Record<Deadline, string> = {
  minder_7: "Ja, minder dan 7 dagen",
  tussen_7_30: "Ja, 7 tot 30 dagen",
  meer_30: "Ja, meer dan 30 dagen",
  nee_onduidelijk: "Nee of onduidelijk",
};

const reminderLabels: Record<ReminderType, string> = {
  herinnering: "Herinnering",
  waarschuwing: "Waarschuwing",
  beslissing: "Beslissing",
  onduidelijk: "Onduidelijk",
};

export default function BriefFodFinancienClient() {
  const [topic, setTopic] = useState<LetterTopic>("onbekend");
  const [receivedVia, setReceivedVia] = useState<ReceivedVia>("myminfin");
  const [deadline, setDeadline] = useState<Deadline>("nee_onduidelijk");
  const [responded, setResponded] = useState<YesNo>("nee");
  const [hasAccountant, setHasAccountant] = useState<YesNo>("nee");
  const [amountMentioned, setAmountMentioned] = useState<YesNo>("nee");
  const [reminderType, setReminderType] = useState<ReminderType>("onduidelijk");
  const [documentsReady, setDocumentsReady] = useState<YesNo>("nee");
  const [firstLetter, setFirstLetter] = useState<YesNo>("ja");
  const [calculated, setCalculated] = useState(false);

  const result = useMemo(() => {
    let score = 0;

    if (topic === "aanslag_ambtswege") score += 35;
    if (topic === "voorstel_wijziging") score += 30;
    if (topic === "boete_interest") score += 25;
    if (topic === "betaling") score += 22;
    if (topic === "vraag_info") score += 18;
    if (topic === "btw") score += 14;
    if (topic === "personenbelasting") score += 12;
    if (topic === "onbekend") score += 18;

    if (deadline === "minder_7") score += 35;
    if (deadline === "tussen_7_30") score += 20;
    if (deadline === "meer_30") score += 8;
    if (deadline === "nee_onduidelijk") score += 18;

    if (responded === "nee") score += 14;
    if (hasAccountant === "nee") score += 6;
    if (amountMentioned === "ja") score += 12;
    if (reminderType === "beslissing") score += 22;
    if (reminderType === "waarschuwing") score += 12;
    if (reminderType === "herinnering") score += 10;
    if (documentsReady === "nee") score += 12;
    if (firstLetter === "nee") score += 14;

    let risk = "Laag";
    let title = "Controleer de brief rustig, maar wacht niet te lang";
    let color = "border-emerald-300 bg-emerald-50";
    let badge = "bg-emerald-100 text-emerald-800";

    if (score >= 45 && score < 75) {
      risk = "Middelmatig";
      title = "Reageer binnen de termijn en verzamel bewijs";
      color = "border-amber-300 bg-amber-50";
      badge = "bg-amber-100 text-amber-800";
    }

    if (score >= 75) {
      risk = "Hoog";
      title = "Controleer dit vandaag en vraag hulp indien nodig";
      color = "border-red-300 bg-red-50";
      badge = "bg-red-100 text-red-800";
    }

    const meaning: string[] = [];

    if (topic === "personenbelasting") {
      meaning.push(
        "De brief kan gaan over je aangifte, ontbrekende informatie, een controle, een aanslag of een correctie."
      );
    }

    if (topic === "btw") {
      meaning.push(
        "De brief kan verband houden met een btw-aangifte, betaling, controle, nalatigheid, boete of interest."
      );
    }

    if (topic === "betaling") {
      meaning.push(
        "Er kan een openstaand bedrag, betalingsherinnering, interest of verdere invorderingsstap vermeld staan."
      );
    }

    if (topic === "vraag_info") {
      meaning.push(
        "De administratie vraagt waarschijnlijk extra documenten, uitleg of bewijsstukken om je dossier te beoordelen."
      );
    }

    if (topic === "voorstel_wijziging") {
      meaning.push(
        "Een voorstel van wijziging betekent meestal dat de administratie je aangifte of situatie anders wil beoordelen. De reactietermijn is dan belangrijk."
      );
    }

    if (topic === "aanslag_ambtswege") {
      meaning.push(
        "Een aanslag van ambtswege is ernstig: de administratie kan dan zelf een aanslag bepalen op basis van beschikbare gegevens."
      );
    }

    if (topic === "boete_interest") {
      meaning.push(
        "De brief kan gaan over een administratieve boete, nalatigheidsinterest of een combinatie van bedrag en sanctie."
      );
    }

    if (topic === "onbekend") {
      meaning.push(
        "Als je niet zeker weet waarover de brief gaat, behandel hem voorlopig als belangrijk tot je de exacte reden en termijn kent."
      );
    }

    if (deadline === "minder_7") {
      meaning.push(
        "Omdat de termijn kort is, is het risico groter dat te laat reageren nadelige gevolgen heeft."
      );
    }

    if (deadline === "nee_onduidelijk") {
      meaning.push(
        "Als de termijn niet duidelijk is, moet je die eerst controleren in de brief, MyMinfin, eBox of via je boekhouder."
      );
    }

    const firstSteps: string[] = [
      "Lees de volledige brief opnieuw en markeer de datum, het referentienummer, het onderwerp en elke vermelde termijn.",
      "Controleer of dezelfde brief of extra details ook in MyMinfin of eBox staan.",
      "Maak een mapje met de brief, bijlagen, betaalbewijzen, aangiftes, eerdere communicatie en relevante documenten.",
    ];

    if (deadline === "minder_7") {
      firstSteps.unshift(
        "Onderneem vandaag actie: noteer de uiterste datum en stel je reactie of vraag om verduidelijking niet uit."
      );
    }

    if (topic === "voorstel_wijziging" || topic === "aanslag_ambtswege") {
      firstSteps.push(
        "Contacteer je boekhouder of een professionele adviseur, zeker als je niet akkoord gaat of niet weet hoe je moet reageren."
      );
    }

    if (amountMentioned === "ja") {
      firstSteps.push(
        "Controleer of het bedrag klopt met je eigen aangifte, betaling, aanslagbiljet of eerdere communicatie."
      );
    }

    if (responded === "nee") {
      firstSteps.push(
        "Reageer niet impulsief, maar zorg wel dat je reactie binnen de termijn gebeurt als een antwoord gevraagd wordt."
      );
    }

    const keep: string[] = [
      "De volledige brief of het volledige bericht.",
      "De envelop, verzenddatum of digitale melding als die relevant is.",
      "Screenshots of pdf’s uit MyMinfin of eBox.",
      "Alle bijlagen, betalingsbewijzen en vorige berichten over hetzelfde dossier.",
      "Je eigen reactie en het bewijs dat je die tijdig hebt verstuurd.",
    ];

    const contact: string[] = [];

    if (hasAccountant === "ja") {
      contact.push(
        "Stuur de brief vandaag nog door naar je boekhouder met de vraag welke actie nodig is en tegen wanneer."
      );
    } else {
      contact.push(
        "Overweeg professionele hulp als het gaat over een voorstel van wijziging, aanslag van ambtswege, boete, groot bedrag of onduidelijke termijn."
      );
    }

    if (
      topic === "onbekend" ||
      deadline === "nee_onduidelijk" ||
      reminderType === "onduidelijk"
    ) {
      contact.push(
        "Contacteer FOD Financiën of controleer MyMinfin als je niet zeker weet wat de brief betekent of welke termijn geldt."
      );
    }

    if (deadline === "minder_7" || risk === "Hoog") {
      contact.push(
        "Wacht niet tot de laatste dag als er een reactie, bezwaar, bewijsstuk of betaling gevraagd wordt."
      );
    }

    return {
      score,
      risk,
      title,
      color,
      badge,
      meaning,
      firstSteps,
      keep,
      contact,
    };
  }, [
    topic,
    deadline,
    responded,
    hasAccountant,
    amountMentioned,
    reminderType,
    documentsReady,
    firstLetter,
  ]);

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Brief van FOD Financiën" />

      <section className="mx-auto max-w-6xl px-5 py-10">
        <BackHomeLink />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
              Nieuwe check
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Brief van FOD Financiën ontvangen?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Kreeg je een brief, eBox-bericht of melding in MyMinfin? Deze
              check helpt je inschatten hoe dringend het is, wat de brief
              mogelijk betekent en welke eerste stappen je best neemt.
            </p>

            <div className="mt-6 rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">
                Belangrijk vooraf
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Dit is geen juridisch, fiscaal of boekhoudkundig advies. De
                uitkomst is alleen een indicatie. Controleer altijd de
                officiële brief, MyMinfin, eBox en de informatie van FOD
                Financiën. Vraag professioneel advies als je twijfelt of als er
                een termijn, bedrag, boete of beslissing vermeld staat.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-300">
              Wat deze check doet
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Eerst begrijpen, dan reageren.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              De check kijkt naar het onderwerp, de termijn, het kanaal, of er
              al gereageerd is, of er een bedrag vermeld staat en of het om een
              herinnering, waarschuwing of beslissing lijkt te gaan.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl bg-white/10 p-4">
                Geen exacte boeteberekening.
              </li>
              <li className="rounded-2xl bg-white/10 p-4">
                Wel een duidelijke risico-indicatie.
              </li>
              <li className="rounded-2xl bg-white/10 p-4">
                Met concreet actieplan en bewaarlijst.
              </li>
            </ul>
          </div>
        </div>

        <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="font-bold text-slate-900">
                Waarover gaat de brief?
              </span>
              <select
                value={topic}
                onChange={(event) => setTopic(event.target.value as LetterTopic)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(topicLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Hoe heb je de brief ontvangen?
              </span>
              <select
                value={receivedVia}
                onChange={(event) =>
                  setReceivedVia(event.target.value as ReceivedVia)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(receivedViaLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Staat er een reactietermijn in?
              </span>
              <select
                value={deadline}
                onChange={(event) =>
                  setDeadline(event.target.value as Deadline)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(deadlineLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Heb je al gereageerd?
              </span>
              <select
                value={responded}
                onChange={(event) => setResponded(event.target.value as YesNo)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="nee">Nee</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Werk je met een boekhouder?
              </span>
              <select
                value={hasAccountant}
                onChange={(event) =>
                  setHasAccountant(event.target.value as YesNo)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="nee">Nee</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Is er een bedrag vermeld?
              </span>
              <select
                value={amountMentioned}
                onChange={(event) =>
                  setAmountMentioned(event.target.value as YesNo)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="nee">Nee</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Gaat het om een herinnering, waarschuwing of beslissing?
              </span>
              <select
                value={reminderType}
                onChange={(event) =>
                  setReminderType(event.target.value as ReminderType)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(reminderLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Heb je de documenten klaar?
              </span>
              <select
                value={documentsReady}
                onChange={(event) =>
                  setDocumentsReady(event.target.value as YesNo)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="nee">Nee</option>
                <option value="ja">Ja</option>
              </select>
            </label>

            <label className="block md:col-span-2">
              <span className="font-bold text-slate-900">
                Is dit de eerste brief hierover?
              </span>
              <select
                value={firstLetter}
                onChange={(event) => setFirstLetter(event.target.value as YesNo)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
              </select>
            </label>
          </div>

          <button
            type="button"
            onClick={() => setCalculated(true)}
            className="mt-8 rounded-full bg-orange-600 px-7 py-4 font-black text-white shadow-sm transition hover:bg-orange-700"
          >
            Toon mijn indicatie
          </button>
        </section>

        {calculated && (
          <section
            className={`mt-10 rounded-[2rem] border p-6 shadow-sm md:p-8 ${result.color}`}
          >
            <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-slate-600">
                  Resultaat
                </p>
                <h2 className="mt-2 text-3xl font-black text-slate-950">
                  {result.title}
                </h2>
              </div>

              <div
                className={`w-fit rounded-full px-5 py-3 text-sm font-black ${result.badge}`}
              >
                Risico: {result.risk}
              </div>
            </div>

            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">
                  Wat de brief mogelijk betekent
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {result.meaning.map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">
                  Wat je nu eerst doet
                </h3>
                <ol className="mt-4 list-decimal space-y-3 pl-5 text-slate-700">
                  {result.firstSteps.map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ol>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">
                  Wat je bewaart
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {result.keep.map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-[1.5rem] bg-white p-5 shadow-sm">
                <h3 className="text-lg font-black text-slate-950">
                  Wanneer je best hulp vraagt
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {result.contact.map((item) => (
                    <li key={item} className="leading-7">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-6 rounded-[1.5rem] bg-white p-5 text-sm leading-7 text-slate-600 shadow-sm">
              <strong className="text-slate-950">Let op:</strong> deze check
              geeft geen definitieve beoordeling van je dossier. Bij twijfel,
              een korte termijn, een bedrag, een voorstel van wijziging, een
              aanslag van ambtswege of een boete contacteer je best je
              boekhouder, FOD Financiën of een professioneel adviseur.
            </div>
          </section>
        )}

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Controleer de termijn
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              De belangrijkste fout is wachten tot de termijn bijna voorbij is.
              Noteer daarom meteen de uiterste datum.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Bewaar bewijs
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Bewaar de brief, bijlagen, screenshots, betalingen en je reactie.
              Zo kan je later aantonen wat je wanneer hebt gedaan.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Reageer voorzichtig
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Antwoord duidelijk, feitelijk en binnen de termijn. Geef geen
              onnodige extra verklaringen als je niet zeker bent.
            </p>
          </div>
        </section>

        <section className="mt-10 rounded-[2rem] bg-white p-6 shadow-sm md:p-8">
          <h2 className="text-2xl font-black text-slate-950">
            Officiële bronnen
          </h2>
          <p className="mt-3 leading-7 text-slate-700">
            Controleer altijd de officiële informatie en je persoonlijke dossier
            via FOD Financiën, MyMinfin en eBox. De exacte gevolgen hangen af
            van je concrete situatie, de datum, het type brief en eerdere
            communicatie.
          </p>

          <div className="mt-5 grid gap-3 md:grid-cols-3">
            <a
              href="https://financien.belgium.be/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-4 font-bold text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
            >
              FOD Financiën
            </a>
            <a
              href="https://myminfin.be/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-4 font-bold text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
            >
              MyMinfin
            </a>
            <a
              href="https://myebox.be/"
              target="_blank"
              rel="noreferrer"
              className="rounded-2xl border border-slate-200 p-4 font-bold text-slate-900 transition hover:border-orange-300 hover:bg-orange-50"
            >
              eBox
            </a>
          </div>
        </section>

        <div className="mt-10">
          <RelatedChecks excludeHref="/brief-fod-financien-ontvangen" />
        </div>
      </section>

      <Footer />
    </main>
  );
}