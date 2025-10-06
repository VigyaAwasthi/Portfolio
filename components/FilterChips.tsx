"use client";
import { useState } from "react";
import Badge from "./Badge";

export default function FilterChips({
  chips,
  onChange,
}: {
  chips: string[];
  onChange?: (active: string) => void;
}) {
  const [active, setActive] = useState(chips[0]);

  return (
    <div className="mx-auto max-w-6xl px-6 py-4 flex flex-wrap gap-2">
      {chips.map((c) => (
        <button
          key={c}
          onClick={() => {
            setActive(c);
            onChange?.(c);
          }}
          className={`rounded-full px-3 py-1.5 text-sm transition ${
            c === active
              ? "bg-white text-black"
              : "border border-white/15 text-white/80 hover:bg-white/10"
          }`}
        >
          {c}
        </button>
      ))}
      <div className="ml-2 self-center hidden md:block">
        <Badge>Filter projects by tag</Badge>
      </div>
    </div>
  );
}
