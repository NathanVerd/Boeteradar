import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-slate-200 bg-white">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © 2026 BoeteRadar België — Informatieve tool, geen juridisch advies.
        </p>

        <div className="flex gap-4">
          <Link
            href="/disclaimer"
            className="font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            Disclaimer
          </Link>

          <Link
            href="/bronnen"
            className="font-medium text-slate-600 underline-offset-4 hover:text-slate-900 hover:underline"
          >
            Bronnen
          </Link>
        </div>
      </div>
    </footer>
  );
}