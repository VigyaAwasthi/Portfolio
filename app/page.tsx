import MarqueeText from "@/components/MarqueeText";
import Section from "@/components/Section";
import SpotlightGrid from "@/components/SpotlightGrid";
import VideoBackground from "@/components/VideoBackground";
import Link from "next/link";

export default function Home() {
  return (
    <main className="pt-20 relative">
      {/* Fullscreen Video */}
      <VideoBackground src="/videos/background1.mp4" />

      {/* HERO (left text + square photo right next to it) */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-6xl grid md:grid-cols-[1.2fr,0.8fr] gap-12 items-center px-6">
          {/* Left: Text */}
          <div>
            <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">
              Data ✕ Product
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/80">
              Hi, I’m Vigya Awasthi <br> </br>Bidging analytics, automation, and product
              strategy. I turn data into decisions and ideas into shipped features.
            </p>
            <div className="mt-8 flex gap-3">
              <Link
                href="/data"
                className="px-4 py-2 rounded-xl bg-white text-black hover:opacity-90"
              >
                Explore Data
              </Link>
              <Link
                href="/product"
                className="px-4 py-2 rounded-xl border border-white/20 hover:bg-white/10"
              >
                Explore Product
              </Link>
            </div>
          </div>

          {/* Right: Square image (slightly bigger) */}
          <div className="flex md:justify-start justify-center">
            {/* Put your image at /public/profile.jpg */}
            <img
                src="/profile.jpg"
                alt="Vigya Awasthi"
                className="w-40 h-40 md:w-56 md:h-56 lg:w-64 lg:h-64 rounded-full object-cover border border-white/20 shadow-2xl shadow-black/50 bg-black/30"
            />
          </div>
        </div>
      </section>

      {/* MARQUEE */}
      <MarqueeText text="Analytics • Automation • Product Strategy • UX Research • Roadmaps • Experiments" />

      {/* HIGHLIGHTS / TEASER for Experience */}
      <Section id="highlights" title="Professional Experience" eyebrow="Snapshot">
        <SpotlightGrid
          items={[
            {
              title: "UiPath — Technical Product Consultant Intern",
              desc: "Automated workflows, analyzed logs, and helped ship product fixes.",
            },
            {
              title: "ITEC — Data Analyst Intern",
              desc: "Maintained content systems, streamlined publishing, and improved collaboration.",
            },
            {
              title: "Student Technician (Data and Analytics) — Texas A&M",
              desc: "Led device rollouts, troubleshooting, and faculty tech support.",
            },
          ]}
        />
        <div className="mt-8">
          <Link
            href="/experience"
            className="px-4 py-2 rounded-xl bg-white text-black hover:opacity-90"
          >
            View Full Experience →
          </Link>
        </div>
      </Section>
    </main>
  );
}
