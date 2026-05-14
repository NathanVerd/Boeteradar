type DisclaimerBoxProps = {
  text?: string;
};

export default function DisclaimerBox({ text }: DisclaimerBoxProps) {
  return (
    <div className="mt-6 rounded-2xl border-l-4 border-orange-500 bg-orange-50 p-4 text-sm text-slate-700">
      {text ||
        "Dit is een informatieve tool met vereenvoudigde inschattingen en rekenvoorbeelden. Het is geen juridisch, fiscaal, boekhoudkundig, sociaal of verzekeringsadvies. Controleer altijd officiële bronnen of vraag professioneel advies bij twijfel."}
    </div>
  );
}