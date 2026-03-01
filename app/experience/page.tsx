"use client";

import { useRef } from "react";
import VideoBackground from "@/components/VideoBackground";
import IconDots from "@/components/IconDots";
import ExperienceCard from "@/components/ExperienceCard";

export default function ExperiencePage() {
  const railRef = useRef<HTMLDivElement>(null);

  const scrollBy = (dir: "left" | "right") => {
    const rail = railRef.current;
    if (!rail) return;
    rail.scrollBy({ left: dir === "left" ? -600 : 600, behavior: "smooth" });
  };

  // ✅ Only your experiences. Replace image paths with your files in /public/experience/*
  const items = [
        {
      timeRange: "MAY 2023 – JUL 2023",
      title: "Data Science Intern",
      org: "IIT Kanpur (CSE)",
      location: "Kanpur, India",
      roleBadge: "Internship",
      countryBadge: "🇮🇳 India",
      desc:
        "Developed and fine-tuned ML models for text and image data; improved classification accuracy and reduced inference time via model optimization.",
      tags: ["Deep Learning", "NLP", "Computer Vision"],
      imageSrc: "/iitk.png",
      imageFit: "contain" as const,
      tint: "rose" as const,
    },
    {
      timeRange: "JAN 2024 - JUL 2024",
      title: "Technical Product Support Intern",
      org: "UiPath",
      location: "Bengaluru, India",
      roleBadge: "Internship",
      countryBadge: "🇮🇳 India",
      desc:
        "Automated support workflows, analyzed logs, and drove product fixes; reduced manual triage via scripts and dashboards.",
      tags: ["Automation", "Dashboards", "Scripting"],
      imageSrc: "/UiPath-Logo.png",
      imageFit: "contain" as const,
      tint: "green" as const,
    },
    {
      timeRange: "OCT 2024 – DEC 2024",
      title: "Data Analyst Intern",
      org: "Texas A&M University — ITEC",
      location: "College Station, TX",
      roleBadge: "Internship",
      countryBadge: "🇺🇸 US",
      desc:
        "Maintained content systems, coordinated digital assets, and streamlined publishing processes with clear documentation.",
      tags: ["Content Ops", "Systems", "Docs"],
      imageSrc: "/itec-logo.jpeg",
      imageFit: "contain" as const,
      tint: "blue" as const,
    },
    {
      timeRange: "Mar 2025 – PRESENT",
      title: "Student Technician (Data and Analytics)",
      org: "Texas A&M University",
      location: "College Station, TX",
      roleBadge: "Part-time",
      countryBadge: "🇺🇸 US",
      desc:
        "Led device rollouts and troubleshooting; translated technical issues into clear, action-ready guidance for faculty and staff.",
      tags: ["Deployments", "Support", "SOPs"],
      imageSrc: "/tamu.png",
      imageFit: "contain" as const,
      tint: "indigo" as const,
    }
  ];

  return (
    <main className="pt-20 relative">
      <VideoBackground src="/videos/background1.mp4" />
      <IconDots />

      {/* HERO */}
      <section className="relative z-10 py-16 md:py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">
            My Professional Journey
          </h1>
          <p className="mt-3 text-white/80">
            A timeline of my career milestones.
          </p>
        </div>
      </section>

      {/* CAROUSEL */}
      <section className="relative z-10">
        <div className="mx-auto max-w-6xl px-6 relative">
          <div
            ref={railRef}
            className="flex snap-x snap-mandatory gap-6 overflow-x-auto pb-6 pt-2 scroll-smooth"
          >
            {items.map((exp, i) => (
              <ExperienceCard key={i} {...exp} />
            ))}
          </div>

          {/* Nav buttons (desktop) */}
          <button
            onClick={() => scrollBy("left")}
            aria-label="Previous"
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2
                       h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black
                       shadow-lg hover:bg-white"
          >
            ←
          </button>
          <button
            onClick={() => scrollBy("right")}
            aria-label="Next"
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2
                       h-11 w-11 items-center justify-center rounded-full bg-white/90 text-black
                       shadow-lg hover:bg-white"
          >
            →
          </button>
        </div>
      </section>
    </main>
  );
}
