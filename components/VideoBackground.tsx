"use client";
import { useEffect, useRef } from "react";

export default function VideoBackground({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.play().catch(() => {});
  }, []);

  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <video
        ref={ref}
        src={src}
        muted
        loop
        playsInline
        autoPlay
        // Full brightness
        className="w-full h-full object-cover opacity-40"
      />
      {/* No dark overlay so the video stays light */}
    </div>
  );
}
