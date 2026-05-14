import Link from "next/link";

type HeaderProps = {
  label?: string;
  subtitle?: string;
};

export default function Header({
  label = "Beta MVP",
  subtitle,
}: HeaderProps) {
  return (
    <header className="border-b border-slate-800 bg-slate-950 px-6 py-6 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <div>
          <Link
            href="/"
            className="text-2xl font-black tracking-tight text-white"
          >
            BoeteRadar België
          </Link>

          {subtitle && (
            <p className="mt-1 text-sm text-slate-300">{subtitle}</p>
          )}
        </div>

        <div className="hidden rounded-full bg-orange-500 px-4 py-2 text-sm font-bold text-white md:block">
          {label}
        </div>
      </div>
    </header>
  );
}