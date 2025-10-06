import { ReactNode } from "react";

export default function Section({ id, title, eyebrow, children }:{
  id?: string;
  title: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="mx-auto max-w-6xl px-4 py-20 reveal">
      <div className="mb-8">
        {eyebrow && <div className="text-xs uppercase tracking-widest text-muted">{eyebrow}</div>}
        <h2 className="text-3xl md:text-5xl font-semibold tracking-tight">{title}</h2>
      </div>
      <div className="prose prose-invert max-w-none">{children}</div>
    </section>
  );
}
