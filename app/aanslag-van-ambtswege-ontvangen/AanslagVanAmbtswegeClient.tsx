"use client";

import BackHomeLink from "@/components/BackHomeLink";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HelpRequestCta from "@/components/HelpRequestCta";
import RelatedChecks from "@/components/RelatedChecks";
import { useMemo, useState } from "react";

type TaxType =
  | "personenbelasting"
  | "btw"
  | "vennootschapsbelasting"
  | "onroerende_voorheffing"
  | "onbekend";

type Deadline =
  | "minder_7"
  | "tussen_7_30"
  | "meer_30"
  | "verstreken"
  | "onduidelijk";

type YesNoUnknown = "ja" | "nee" | "onbekend";

type AmountSize = "geen" | "klein" | "middelgroot" | "groot" | "onbekend";

const taxTypeLabels: Record<TaxType, string> = {
  personenbelasting: "Personenbelasting",
  btw: "Btw",
  vennootschapsbelasting: "Vennootschapsbelasting",
  onroerende_voorheffing: "Onroerende voorheffing",
  onbekend: "Ik weet het niet",
};

const deadlineLabels: Record<Deadline, string> = {
  minder_7: "Ja, minder dan 7 dagen",
  tussen_7_30: "Ja, 7 tot 30 dagen",
  meer_30: "Ja, meer dan 30 dagen",
  verstreken: "De termijn is mogelijk al voorbij",
  onduidelijk: "Ik weet het niet / onduidelijk",
};

const amountLabels: Record<AmountSize, string> = {
  geen: "Geen bedrag of niet duidelijk",
  klein: "Minder dan €500",
  middelgroot: "Tussen €500 en €5.000",
  groot: "Meer dan €5.000",
  onbekend: "Ik weet het niet",
};

export default function AanslagVanAmbtswegeClient() {
  const [taxType, setTaxType] = useState<TaxType>("onbekend");
  const [deadline, setDeadline] = useState<Deadline>("onduidelijk");
  const [amountSize, setAmountSize] = useState<AmountSize>("onbekend");
  const [reasonKnown, setReasonKnown] = useState<YesNoUnknown>("onbekend");
  const [alreadyResponded, setAlreadyResponded] =
    useState<YesNoUnknown>("nee");
  const [hasAccountant, setHasAccountant] = useState<YesNoUnknown>("nee");
  const [documentsReady, setDocumentsReady] = useState<YesNoUnknown>("nee");
  const [agreeWithDecision, setAgreeWithDecision] =
    useState<YesNoUnknown>("onbekend");
  const [previousLetters, setPreviousLetters] = useState<YesNoUnknown>("ja");
  const [paymentProblem, setPaymentProblem] = useState<YesNoUnknown>("onbekend");
  const [calculated, setCalculated] = useState(false);

  const result = useMemo(() => {
    let score = 45;

    if (taxType === "btw") score += 10;
    if (taxType === "vennootschapsbelasting") score += 12;
    if (taxType === "onbekend") score += 8;

    if (deadline === "minder_7") score += 30;
    if (deadline === "tussen_7_30") score += 18;
    if (deadline === "meer_30") score += 8;
    if (deadline === "verstreken") score += 35;
    if (deadline === "onduidelijk") score += 20;

    if (amountSize === "middelgroot") score += 12;
    if (amountSize === "groot") score += 25;
    if (amountSize === "onbekend") score += 8;

    if (reasonKnown === "nee" || reasonKnown === "onbekend") score += 12;
    if (alreadyResponded === "nee") score += 12;
    if (hasAccountant === "nee") score += 8;
    if (documentsReady === "nee") score += 12;
    if (agreeWithDecision === "nee") score += 18;
    if (agreeWithDecision === "onbekend") score += 8;
    if (previousLetters === "ja") score += 10;
    if (paymentProblem === "ja") score += 15;

    let risk = "Middelmatig";
    let title = "Neem dit ernstig en controleer de termijn";
    let color = "border-amber-300 bg-amber-50";
    let badge = "bg-amber-100 text-amber-800";

    if (score >= 85) {
      risk = "Hoog";
      title = "Controleer dit vandaag en vraag hulp indien nodig";
      color = "border-red-300 bg-red-50";
      badge = "bg-red-100 text-red-800";
    }

    if (
      score < 65 &&
      deadline !== "minder_7" &&
      deadline !== "verstreken" &&
      agreeWithDecision !== "nee"
    ) {
      risk = "Middelmatig";
      title = "Controleer rustig maar stel dit niet uit";
      color = "border-orange-300 bg-orange-50";
      badge = "bg-orange-100 text-orange-800";
    }

    const meaning: string[] = [
      "Een aanslag van ambtswege betekent dat de administratie zelf een aanslag kan vestigen op basis van de beschikbare gegevens.",
      "Dit gebeurt vaak wanneer een aangifte ontbreekt, te laat is, onvolledig is of wanneer gevraagde informatie niet tijdig werd bezorgd.",
      "De termijn om te reageren of bezwaar te bekijken is belangrijk. Wacht daarom niet tot de laatste dag.",
    ];

    if (agreeWithDecision === "nee") {
      meaning.push(
        "Omdat je aangeeft dat je mogelijk niet akkoord bent, is het extra belangrijk om bewijsstukken en termijnen goed te controleren."
      );
    }

    if (amountSize === "groot") {
      meaning.push(
        "Omdat er een groot bedrag meespeelt, is professionele controle extra verstandig."
      );
    }

    if (deadline === "verstreken") {
      meaning.push(
        "Als de termijn al voorbij is, moet je snel nagaan of er nog een reactie, bezwaar of andere stap mogelijk is."
      );
    }

    const firstSteps: string[] = [
      "Lees de volledige brief opnieuw en markeer de datum, het aanslagjaar, het bedrag, de reden en elke vermelde termijn.",
      "Controleer of dezelfde informatie ook in MyMinfin of eBox staat.",
      "Zoek uit waarom de aanslag van ambtswege werd gevestigd: ontbrekende aangifte, laattijdige aangifte, ontbrekende documenten of onvoldoende reactie.",
      "Verzamel je aangifte, vorige aanslagbiljetten, fiscale fiches, bewijsstukken, betalingsbewijzen en eerdere communicatie.",
    ];

    if (hasAccountant === "ja") {
      firstSteps.push(
        "Stuur de volledige brief vandaag nog naar je boekhouder en vraag expliciet welke deadline geldt."
      );
    } else {
      firstSteps.push(
        "Overweeg hulp van een boekhouder, fiscalist of andere professionele adviseur als je niet zeker weet hoe je moet reageren."
      );
    }

    if (paymentProblem === "ja") {
      firstSteps.push(
        "Als betalen moeilijk is, controleer of een betalingsplan of contact met de bevoegde dienst nodig is."
      );
    }

    const keep: string[] = [
      "De volledige aanslag van ambtswege.",
      "De envelop, verzenddatum of digitale melding als die relevant is.",
      "Screenshots of pdf’s uit MyMinfin of eBox.",
      "Je oorspronkelijke aangifte of bewijs dat je aangifte werd ingediend.",
      "Alle fiscale fiches, attesten, kostenbewijzen en andere bewijsstukken.",
      "Alle eerdere brieven, herinneringen, vragen om informatie en antwoorden.",
      "Bewijs van betaling of communicatie over betaling.",
    ];

    const help: string[] = [];

    if (deadline === "minder_7" || deadline === "verstreken") {
      help.push(
        "Vraag snel hulp als de termijn bijna voorbij is of mogelijk al verstreken is."
      );
    }

    if (agreeWithDecision === "nee") {
      help.push(
        "Vraag hulp als je niet akkoord gaat met het bedrag, de reden of de berekening."
      );
    }

    if (amountSize === "middelgroot" || amountSize === "groot") {
      help.push(
        "Vraag hulp als er een bedrag speelt dat voor jou financieel belangrijk is."
      );
    }

    if (taxType === "btw" || taxType === "vennootschapsbelasting") {
      help.push(
        "Vraag hulp als het dossier gekoppeld is aan btw, zelfstandige activiteit of een vennootschap."
      );
    }

    if (help.length === 0) {
      help.push(
        "Vraag hulp als je de brief niet begrijpt, geen documenten vindt of niet zeker weet wat je volgende stap is."
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
      help,
    };
  }, [
    taxType,
    deadline,
    amountSize,
    reasonKnown,
    alreadyResponded,
    hasAccountant,
    documentsReady,
    agreeWithDecision,
    previousLetters,
    paymentProblem,
  ]);

  return (
    <main className="min-h-screen bg-[#f6f1ea] text-slate-950">
      <Header label="Aanslag van ambtswege" />

      <section className="mx-auto max-w-6xl px-5 py-10">
        <BackHomeLink />

        <div className="mt-6 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-orange-600">
              Nieuwe check
            </p>

            <h1 className="mt-3 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              Aanslag van ambtswege ontvangen?
            </h1>

            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-700">
              Een aanslag van ambtswege kan belangrijk zijn omdat de administratie
              dan zelf een aanslag vaststelt op basis van beschikbare gegevens.
              Deze check helpt je bepalen wat je eerst controleert, wat je moet
              bewaren en wanneer je beter hulp vraagt.
            </p>

            <div className="mt-6 rounded-[2rem] border border-orange-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-black text-slate-950">
                Belangrijk vooraf
              </h2>
              <p className="mt-3 leading-7 text-slate-700">
                Dit is geen juridisch, fiscaal of boekhoudkundig advies. De
                uitkomst is alleen een indicatie. Controleer altijd de officiële
                brief, MyMinfin, eBox en de informatie van FOD Financiën. Vraag
                professioneel advies als je twijfelt, niet akkoord bent of als er
                een termijn of groot bedrag vermeld staat.
              </p>
            </div>
          </div>

          <div className="rounded-[2rem] bg-slate-950 p-7 text-white shadow-sm">
            <p className="text-sm font-bold uppercase tracking-wide text-orange-300">
              Wat deze check doet
            </p>
            <h2 className="mt-3 text-2xl font-black">
              Eerst termijn en bewijs, dan pas reageren.
            </h2>
            <p className="mt-4 leading-7 text-slate-300">
              De check kijkt naar de belastingsoort, termijn, bedrag, reden,
              documenten, eerdere brieven en of je akkoord bent met de aanslag.
            </p>

            <ul className="mt-6 space-y-3 text-sm text-slate-200">
              <li className="rounded-2xl bg-white/10 p-4">
                Geen officiële beoordeling.
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
          <p className="text-sm font-black uppercase tracking-wide text-orange-600">
            Check je situatie
          </p>

          <h2 className="mt-2 text-2xl font-black">
            Vul in wat je uit de brief of MyMinfin kan afleiden.
          </h2>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <label className="block">
              <span className="font-bold text-slate-900">
                Over welke belasting gaat het?
              </span>
              <select
                value={taxType}
                onChange={(event) => setTaxType(event.target.value as TaxType)}
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(taxTypeLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Staat er een termijn in?
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
                Hoe groot is het bedrag ongeveer?
              </span>
              <select
                value={amountSize}
                onChange={(event) =>
                  setAmountSize(event.target.value as AmountSize)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                {Object.entries(amountLabels).map(([value, label]) => (
                  <option key={value} value={value}>
                    {label}
                  </option>
                ))}
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Weet je waarom je deze aanslag kreeg?
              </span>
              <select
                value={reasonKnown}
                onChange={(event) =>
                  setReasonKnown(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Heb je al gereageerd?
              </span>
              <select
                value={alreadyResponded}
                onChange={(event) =>
                  setAlreadyResponded(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Werk je met een boekhouder?
              </span>
              <select
                value={hasAccountant}
                onChange={(event) =>
                  setHasAccountant(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Heb je je documenten klaar?
              </span>
              <select
                value={documentsReady}
                onChange={(event) =>
                  setDocumentsReady(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Ben je akkoord met de aanslag?
              </span>
              <select
                value={agreeWithDecision}
                onChange={(event) =>
                  setAgreeWithDecision(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Waren er eerdere brieven of herinneringen?
              </span>
              <select
                value={previousLetters}
                onChange={(event) =>
                  setPreviousLetters(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
              </select>
            </label>

            <label className="block">
              <span className="font-bold text-slate-900">
                Is betalen mogelijk een probleem?
              </span>
              <select
                value={paymentProblem}
                onChange={(event) =>
                  setPaymentProblem(event.target.value as YesNoUnknown)
                }
                className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-slate-900 outline-none focus:border-orange-400"
              >
                <option value="ja">Ja</option>
                <option value="nee">Nee</option>
                <option value="onbekend">Ik weet het niet</option>
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
                  Wat dit mogelijk betekent
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
                  Wanneer hulp verstandig is
                </h3>
                <ul className="mt-4 space-y-3 text-slate-700">
                  {result.help.map((item) => (
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
              een korte termijn, een groot bedrag, een betwisting of een
              betalingsprobleem contacteer je best FOD Financiën, je boekhouder,
              een fiscalist of een andere professionele adviseur.
            </div>
          </section>
        )}

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Controleer de termijn
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Bij een aanslag van ambtswege is timing belangrijk. Noteer meteen
              de datum van de brief en elke vermelde reactie- of betalingstermijn.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Verzamel bewijs
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Bewaar je aangifte, aanslagbiljetten, fiscale fiches, attesten,
              eerdere brieven, screenshots en betalingsbewijzen.
            </p>
          </div>

          <div className="rounded-[2rem] bg-white p-6 shadow-sm">
            <h2 className="text-xl font-black text-slate-950">
              Reageer niet impulsief
            </h2>
            <p className="mt-3 leading-7 text-slate-700">
              Als je niet akkoord bent, controleer eerst de feiten en bewijsstukken.
              Een reactie moet duidelijk, feitelijk en tijdig zijn.
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
            van je concrete situatie, de datum, het type aanslag, eerdere
            communicatie en de bevoegde administratie.
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

        <HelpRequestCta
          title="Twijfel je over een aanslag van ambtswege?"
          description="Als je niet zeker weet waarom je deze aanslag kreeg, welke termijn geldt, of hoe je moet reageren, kan je een hulpaanvraag indienen."
          buttonLabel="Hulp bij aanslag aanvragen"
        />

        <div className="mt-10">
          <RelatedChecks excludeHref="/aanslag-van-ambtswege-ontvangen" />
        </div>
      </section>

      <Footer />
    </main>
  );
}