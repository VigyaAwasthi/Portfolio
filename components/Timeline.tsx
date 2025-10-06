"use client";

import clsx from "clsx";
import Image from "next/image";

type Item = {
  id: string;
  dateRange: string;
  title: string;
  org?: string;
  side?: "left" | "right";
  bullets: string[];
  tags?: string[];
  icon?: string;           // /gifs/whatever.gif (square works best)
  accent?: string;         // e.g. "from-cyan-400 to-emerald-400"
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] leading-none text-white/80">
      {children}
    </span>
  );
}

export default function Timeline({
  items,
  title = "Releases & Milestones",
  eyebrow = "Timeline",
}: {
  items: Item[];
  title?: string;
  eyebrow?: string;
}) {
  return (
    <section className="relative z-10 mx-auto max-w-6xl px-6 py-16">
      <div className="text-[11px] tracking-[0.28em] uppercase text-white/60">
        {eyebrow}
      </div>
      <h2 className="mt-2 text-3xl md:text-5xl font-semibold tracking-tight">
        {title}
      </h2>

      {/* spine */}
      <div className="relative mt-10">
        <div className="pointer-events-none absolute left-1/2 -translate-x-1/2 h-full w-[3px] rounded-full bg-gradient-to-b from-white/10 via-white/30 to-white/10" />
        <div className="space-y-12">
          {items.map((it, idx) => {
            const left = it.side === "left" || (!it.side && idx % 2 === 0);
            return (
              <div
                key={it.id}
                className={clsx(
                  "relative grid items-center gap-6 md:gap-10",
                  "md:grid-cols-2"
                )}
              >
                {/* node on spine */}
                <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/80 shadow-[0_0_30px_8px_rgba(56,189,248,0.35)]" />

                {/* left placeholder for grid alignment */}
                {!left && <div className="hidden md:block" />}

                {/* Card */}
                <div
                  className={clsx(
                    "relative rounded-3xl border border-white/10 bg-black/35 backdrop-blur-md",
                    "hover:bg-black/45 transition shadow-[0_10px_40px_rgba(0,0,0,.25)]",
                    "p-5 md:p-7",
                    left ? "md:mr-12" : "md:ml-12"
                  )}
                >
                  {/* accent glow */}
                  <div
                    className={clsx(
                      "pointer-events-none absolute -inset-0.5 -z-10 rounded-[26px] opacity-0 blur-2xl transition duration-300",
                      "group-hover/tline:opacity-100",
                      it.accent ?? "bg-gradient-to-r from-cyan-400/10 to-emerald-400/10"
                    )}
                  />
                  <div className="flex items-start gap-4">
                    {it.icon && (
                      <div className="shrink-0 rounded-2xl border border-white/10 bg-black/50 p-2">
                        {/* keep icons big enough to feel intentional */}
                        <Image
                          src={it.icon}
                          alt=""
                          width={56}
                          height={56}
                          className="h-14 w-14 rounded-xl object-cover"
                        />
                      </div>
                    )}
                    <div className="min-w-0">
                      <div className="text-xs text-white/60">{it.dateRange}</div>
                      <h3 className="mt-1 text-xl md:text-2xl font-semibold tracking-tight">
                        {it.title}
                      </h3>
                      {it.org && (
                        <div className="text-sm text-white/60">{it.org}</div>
                      )}
                      <ul className="mt-3 space-y-2 text-[14px] leading-6 text-white/85">
                        {it.bullets.map((b, i) => (
                          <li key={i} className="flex gap-2">
                            <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-white/35" />
                            <span dangerouslySetInnerHTML={{ __html: b }} />
                          </li>
                        ))}
                      </ul>
                      {!!it.tags?.length && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {it.tags.map((t) => (
                            <Chip key={t}>{t}</Chip>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* right placeholder for grid alignment */}
                {left && <div className="hidden md:block" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
