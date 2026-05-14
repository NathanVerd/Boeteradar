import Link from "next/link";

type BackHomeLinkProps = {
  label?: string;
};

export default function BackHomeLink({
  label = "← Terug naar alle checks",
}: BackHomeLinkProps) {
  return (
    <div className="mt-8">
      <Link href="/" className="font-bold text-slate-700 hover:text-slate-950">
        {label}
      </Link>
    </div>
  );
}