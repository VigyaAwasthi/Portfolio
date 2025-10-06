"use client";

import VideoBackground from "@/components/VideoBackground";
import IconDots from "@/components/IconDots";

/* ---------- small bits ---------- */

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/12 bg-white/5 px-3 py-1 text-[11px] leading-none text-white/80">
      {children}
    </span>
  );
}

type RowProps = {
  chapter: string;
  title: string;
  lead: string;
  beats: string[];
  tags: string[];
  imageSrc: string;           // e.g. /projects/shopify.jpg (put files in public/projects)
  side?: "left" | "right";
};

function TimelineRow({
  chapter,
  title,
  lead,
  beats,
  tags,
  imageSrc,
  side = "left",
}: RowProps) {
  const art = (
    <div className="relative w-full overflow-hidden rounded-2xl border border-white/10 bg-black/30 backdrop-blur">
      {/* Image placeholder — replace the src path with your actual file in /public/projects */}
      <img
        src={imageSrc}
        alt={title}
        className="h-[230px] md:h-[260px] w-full object-cover"
      />
      {/* Optional helper band for placeholders */}
      {!imageSrc || imageSrc.includes("placeholder") ? (
        <div className="absolute inset-x-0 bottom-0 bg-black/50 text-center text-[11px] tracking-wide py-1">
          Add your image at: <span className="font-medium">/public{imageSrc}</span>
        </div>
      ) : null}
    </div>
  );

  const text = (
    <div className={side === "left" ? "lg:pr-6" : "lg:pl-6"}>
      <div className="text-[10px] tracking-[0.28em] uppercase text-white/60 mb-1">
        {chapter}
      </div>
      <h3 className="text-[26px] md:text-[32px] font-semibold tracking-tight">
        {title}
      </h3>
      <p className="mt-2 text-[15px] md:text-[16px] text-white/85">{lead}</p>

      <ul className="mt-4 space-y-2 text-[14px] leading-6 text-white/85">
        {beats.map((b, i) => (
          <li key={i} className="flex gap-2">
            <span className="mt-[9px] h-[6px] w-[6px] rounded-full bg-white/35" />
            <span dangerouslySetInnerHTML={{ __html: b }} />
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((t) => (
          <Chip key={t}>{t}</Chip>
        ))}
      </div>
    </div>
  );

  return (
    <section className="relative">
      {/* timeline dot */}
      <div className="absolute left-6 top-3 z-10 h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_16px_rgba(34,211,238,0.65)] lg:left-1/2 lg:-translate-x-1/2" />
      <div className="grid gap-8 items-start lg:grid-cols-2">
        {/* Alternate order on large screens for zig-zag */}
        {side === "left" ? (
          <>
            {text}
            {art}
          </>
        ) : (
          <>
            {art}
            {text}
          </>
        )}
      </div>
    </section>
  );
}

/* ---------- page ---------- */

export default function ProductTimelinePage() {
  return (
    <main className="relative pt-24">
      <VideoBackground src="/videos/background1.mp4" />
      <IconDots />

      {/* HERO */}
      <header className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="text-[11px] tracking-[0.28em] uppercase text-white/60">
          Product Portfolio
        </div>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
          Releases & Milestones
        </h1>
        <p className="mt-3 text-white/85 text-[15px] md:text-[16px]">
          From problem discovery to MVP to iteration — shipped with clarity,
          kindness, and crisp decisions.
        </p>
      </header>

      {/* TIMELINE SPINE */}
      <div className="relative z-10 mx-auto max-w-6xl px-6 py-14">
        {/* vertical spine (center on desktop, left on mobile) */}
        <div className="pointer-events-none absolute left-6 top-0 h-full w-[2px] bg-white/10 lg:left-1/2 lg:-translate-x-1/2" />

        <div className="space-y-16">
          <TimelineRow
            chapter="Chapter 1 — Enterprise"
            title="Shopify • Inventory Forecasting Capstone"
            lead="An exec-ready MVP that turned fuzzy demand signals into a clear plan of action."
            beats={[
              "Framed the problem as a concise <b>product narrative</b> — who hurts, when, why — and cut a thin-slice MVP (demand prediction, restock nudges, supply-chain insights).",
              "Ran stakeholder loops (ops, finance, engineering) to pressure-test scope; shipped a <b>feasibility & scale playbook</b> (ownership, resourcing, costs, risks) that earned leadership buy-in.",
            ]}
            tags={["Strategy", "MVP", "Forecasting", "Stakeholder Loops"]}
            imageSrc="/shopify.jpg"   // replace with your image
            side="left"
          />

          <TimelineRow
            chapter="Chapter 2 — Consumer"
            title="DeliverEase • Product Canvas for a Food-Delivery App"
            lead="A one-page source of truth that carried the team from idea to experience."
            beats={[
              "Built a <b>Product Canvas</b> connecting acquisition → onboarding → repeat; aligned goals, segments, success metrics, and guardrails on a single sheet.",
              "Sketched wireframes and service flows; added lightweight automation in the order/issue loop to keep UX snappy and <b>quality high</b> at volume.",
            ]}
            tags={["Product Canvas", "Wireframes", "Service Design", "Workflow Automation"]}
            imageSrc="DE.jpeg"   // replace with your image
            side="right"
          />

          <TimelineRow
            chapter="Chapter 3 — Platforms"
            title="SRS • Digital Transformation & Publishing Automation"
            lead="Turning messy metadata into a well-lit highway."
            beats={[
              "Authored an <b>SRS</b> for an ONIX-compliant distribution system; moved teams from tribal knowledge to <b>clear rules & validations</b>.",
              "Partnered with infra & content ops to integrate an industry-compliant feed; automated the drudge work so editors focused on judgment, not formatting.",
            ]}
            tags={["SRS", "ONIX", "Workflow", "Compliance"]}
            imageSrc="/srs.webp"   // replace with your image
            side="left"
          />

          <TimelineRow
            chapter="Epilogue — Brand & Onboarding"
            title="UiPath • Global Internship Program Story"
            lead="A short film and playbook that helped thousands start strong."
            beats={[
              "Scripted a simple story: why the internship matters, what ‘good’ looks like, how to get help fast; produced a <b>brand-consistent launch video</b>.",
              "Packaged resources into a tidy onboarding flow — fewer first-week questions, more first-week momentum.",
            ]}
            tags={["Narrative", "Onboarding", "Brand"]}
            imageSrc="/uipath.jpg"   // replace with your image
            side="right"
          />
        </div>
      </div>
    </main>
  );
}
