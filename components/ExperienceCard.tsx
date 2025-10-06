import React from "react";

type Tint = "blue" | "rose" | "green" | "indigo";

type ExperienceCardProps = {
  timeRange: string;
  title: string;
  org: string;
  location?: string;
  roleBadge?: string;      // e.g., "Internship", "Part-time"
  countryBadge?: string;   // e.g., "🇺🇸 US"
  desc: string;
  tags?: string[];
  imageSrc?: string;       // e.g., /experience/iitk-logo.jpg
  imageFit?: "cover" | "contain"; // cover for photos, contain for logos
  tint?: Tint;
};

const tintMap: Record<Tint, { ring: string; footer: string; glow: string }> = {
  blue:   { ring: "ring-blue-400/20",   footer: "bg-blue-500/12",   glow: "shadow-blue-400/10" },
  rose:   { ring: "ring-rose-400/20",   footer: "bg-rose-500/12",   glow: "shadow-rose-400/10" },
  green:  { ring: "ring-emerald-400/20",footer: "bg-emerald-500/12",glow: "shadow-emerald-400/10" },
  indigo: { ring: "ring-indigo-400/20", footer: "bg-indigo-500/12", glow: "shadow-indigo-400/10" },
};

export default function ExperienceCard({
  timeRange,
  title,
  org,
  location,
  roleBadge,
  countryBadge,
  desc,
  tags = [],
  imageSrc = "/experience/placeholder.jpg",
  imageFit = "cover",
  tint = "blue",
}: ExperienceCardProps) {
  const t = tintMap[tint];

  return (
    <article
      className={`snap-center min-w-[320px] md:min-w-[420px] lg:min-w-[460px]
      rounded-3xl overflow-hidden border border-white/10 bg-black/30
      backdrop-blur-sm shadow-xl ${t.glow} transition
      hover:shadow-2xl hover:scale-[1.01] ring-1 ${t.ring}`}
    >
      {/* Top time range */}
      <div className="text-sm font-medium text-center py-4 text-white/90">
        {timeRange}
      </div>

      {/* Image preview: white canvas so logos are fully visible */}
      <div className="px-4">
        <div
          className="h-44 md:h-52 w-full overflow-hidden rounded-2xl ring-1 ring-white/10
                     flex items-center justify-center bg-white"
        >
          <img
            src={imageSrc}
            alt={title}
            className={
              imageFit === "contain"
                ? "max-h-full max-w-full object-contain p-3"
                : "h-full w-full object-cover"
            }
          />
        </div>
      </div>

      {/* Role/country badges strip */}
      <div className={`mt-3 ${t.footer} px-4 py-2 flex items-center justify-between`}>
        {roleBadge ? (
          <div className="text-xs font-semibold px-3 py-1 rounded-full bg-white text-black">
            {roleBadge}
          </div>
        ) : <div />}
        {countryBadge && (
          <div className="text-xs font-semibold px-3 py-1 rounded-full border border-white/20 text-white/90">
            {countryBadge}
          </div>
        )}
      </div>

      {/* Body */}
      <div className="px-5 pt-4 pb-5">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-sm text-white/80">{org}</div>
        {location && <div className="text-xs text-white/60">{location}</div>}

        <p className="mt-3 text-[0.95rem] leading-6 text-white/85">
          {desc}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag, i) => (
              <span
                key={`${tag}-${i}`}
                className="text-xs rounded-full border border-white/15 bg-white/5 px-3 py-1 text-white/80"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Bottom accent */}
      <div className="h-2 w-full bg-gradient-to-r from-white/10 to-transparent" />
    </article>
  );
}
