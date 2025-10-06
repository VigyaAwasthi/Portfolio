import Section from "@/components/Section";
import VideoBackground from "@/components/VideoBackground";

export default function ContactPage() {
  return (
    <main className="pt-20 relative">
      {/* Fullscreen video background */}
      <VideoBackground src="/videos/background1.mp4" />

      <Section title="Let’s Connect" eyebrow="Contact">
        <div className="max-w-2xl relative z-10">
          <p className="text-muted">
            I’m open to internships and new-grad roles across Product and Data.
            The quickest way to reach me is email or LinkedIn.
          </p>
          <div className="mt-6 grid sm:grid-cols-2 gap-4">
            <a
              href="mailto:vigya.awasthi@tamu.edu"
              className="block rounded-2xl border border-white/10 p-6 hover:bg-white/5"
            >
              <div className="text-sm text-muted">Email</div>
              <div className="text-xl font-semibold">vigya.awasthi@tamu.edu</div>
            </a>
            <a
              href="https://www.linkedin.com/in/vigya-awasthi"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/10 p-6 hover:bg-white/5"
            >
              <div className="text-sm text-muted">LinkedIn</div>
              <div className="text-xl font-semibold">/in/vigya-awasthi</div>
            </a>
            <a
              href="https://www.github.com/VigyaAwasthi"
              target="_blank"
              rel="noreferrer"
              className="block rounded-2xl border border-white/10 p-6 hover:bg-white/5"
            >
              <div className="text-sm text-muted">GitHub</div>
              <div className="text-xl font-semibold">/VigyaAwasthi</div>
            </a>
          </div>
        </div>
      </Section>
    </main>
  );
}
