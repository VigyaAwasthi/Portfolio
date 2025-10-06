import Link from "next/link";

export default function CaseCard({ title, summary, tags, href }:{
  title: string;
  summary: string;
  tags: string[];
  href: string;
}) {
  return (
    <Link href={href} className="group block border border-white/10 rounded-2xl p-6 hover:bg-white/5 transition">
      <div className="flex items-center justify-between gap-4">
        <h3 className="text-xl font-semibold tracking-tight">{title}</h3>
        <span className="text-xs text-background bg-accent px-2 py-1 rounded-full">{tags[0]}</span>
      </div>
      <p className="mt-2 text-sm text-muted">{summary}</p>
      <div className="mt-3 flex gap-2 flex-wrap">
        {tags.map(t => (
          <span key={t} className="text-[10px] border border-white/10 rounded-full px-2 py-1 text-muted">{t}</span>
        ))}
      </div>
      <div className="mt-4 text-sm underline decoration-muted group-hover:decoration-accent">View</div>
    </Link>
  );
}
