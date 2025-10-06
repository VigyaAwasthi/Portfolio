"use client";
import { useEffect, useRef } from "react";

export default function MarqueeText({ text }:{ text: string }) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    let offset = 0;
    let raf = 0;
    const step = () => {
      offset -= 0.5;
      el.style.transform = `translateX(${offset}px)`;
      if (Math.abs(offset) > el.scrollWidth / 2) offset = 0;
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);
  return (
    <div className="overflow-hidden whitespace-nowrap border-y border-white/10">
      <div ref={ref} className="py-4 text-2xl md:text-4xl font-semibold opacity-80">
        {Array.from({length: 8}).map((_,i) => (
          <span key={i} className="mx-6">{text}</span>
        ))}
      </div>
    </div>
  );
}
