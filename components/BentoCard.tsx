import Badge from "./Badge";

type Props = {
  title: string;
  subtitle?: string;
  desc?: string;
  bullets?: string[];
  tags?: string[];
  href?: string;
  imageSrc?: string;
  compact?: boolean;
  /** Set true to show a taller image preview */
  imageTall?: boolean;
};

export default function BentoCard({
  title,
  subtitle,
  desc,
  bullets = [],
  tags = [],
  href,
  imageSrc,
  compact = false,
  imageTall = false,
}: Props) {
  const Wrapper = (href ? "a" : "div") as any;

  const pad = compact ? "p-5" : "p-6";
  // ↑ Default taller than before; toggle even taller with `imageTall`
  const imgH = imageTall ? "h-40 md:h-44" : compact ? "h-28 md:h-32" : "h-32 md:h-36";
  const titleCls = compact ? "text-[1.05rem] md:text-lg font-semibold leading-tight" : "text-xl font-semibold leading-tight";
  const subtitleCls = compact ? "text-[10px] px-2 py-0.5" : "text-xs px-2.5 py-1";
  const descCls = compact ? "mt-1.5 text-[13px] leading-5 text-white/80" : "mt-2 text-sm text-white/80";
  const bulletText = compact ? "text-[13px] leading-5" : "text-[0.95rem] leading-6";
  const bulletGap = compact ? "space-y-1.5" : "space-y-2";
  const tagText = compact ? "text-[10px]" : "text-xs";
  const tagPad = compact ? "px-2 py-1" : "px-3 py-1";
  const tagGap = compact ? "gap-1.5" : "gap-2";

  const shownBullets = compact ? bullets.slice(0, 3) : bullets;

  return (
    <Wrapper
      {...(href ? { href, target: "_blank", rel: "noreferrer" } : {})}
      className={`group relative rounded-2xl border border-white/10 bg-black/35 ${pad} transition hover:bg-black/45 hover:border-white/20`}
    >
      {imageSrc && (
        <div className="mb-3">
          <div className={`relative ${imgH} w-full overflow-hidden rounded-lg border border-white/80`}>
            <img src={imageSrc} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>
      )}

      <div className="flex items-start justify-between gap-3">
        <h3 className={titleCls}>{title}</h3>
        {subtitle && (
          <span className={`shrink-0 rounded-full border border-white/20 bg-white/5 text-white/80 ${subtitleCls}`}>
            {subtitle}
          </span>
        )}
      </div>

      {desc && <p className={descCls}>{desc}</p>}

      {shownBullets.length > 0 && (
        <ul className={`mt-3 ${bulletGap} ${bulletText} text-white/85`}>
          {shownBullets.map((b, i) => (
            <li key={i} className="pl-4 relative">
              <span className="absolute left-0 top-2 h-1.5 w-1.5 rounded-full bg-white/70" />
              {b}
            </li>
          ))}
        </ul>
      )}

      {tags.length > 0 && (
        <div className={`mt-3 flex flex-wrap ${tagGap}`}>
          {tags.map((t) => (
            <span key={t} className={`rounded-full border border-white/15 bg-white/5 ${tagPad} ${tagText} text-white/80`}>
              {t}
            </span>
          ))}
        </div>
      )}

      <div className="absolute inset-0 rounded-2xl ring-1 ring-white/5 group-hover:ring-white/10 pointer-events-none" />
    </Wrapper>
  );
}
