import Section from "@/components/Section";
import VideoBackground from "@/components/VideoBackground";
import IconDots from "@/components/IconDots";

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-white/85">
      {children}
    </span>
  );
}

function Card({
  title,
  children,
  eyebrow,
  imageSrc,
}: {
  title: string;
  eyebrow?: string;
  children: React.ReactNode;
  imageSrc?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-black/35 p-6 hover:bg-black/45 transition">
      {eyebrow && (
        <div className="text-xs tracking-widest uppercase text-white/60 mb-2">
          {eyebrow}
        </div>
      )}

      {imageSrc && (
        <div className="mb-4">
          {/* Aspect-ratio box; object-cover to fill the frame (cropping is OK) */}
          <div className="relative w-full aspect-[16/9] overflow-hidden rounded-xl border border-white">
            <img
              src={imageSrc}
              alt={title}
              className="absolute inset-0 h-full w-full object-cover"
            />
          </div>
        </div>
      )}

      <h3 className="text-lg font-semibold">{title}</h3>
      <div className="mt-3 text-white/85 leading-6 text-[15px]">{children}</div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <main className="pt-20 relative">
      <VideoBackground src="/videos/background1.mp4" />
      <IconDots />

      {/* HERO */}
      <section className="relative z-10 py-14">
        <div className="mx-auto max-w-6xl px-6">
          <div className="text-xs tracking-[0.25em] uppercase text-white/60">Who I Am</div>
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight mt-2">
            About Vigya
          </h1>

          <div className="grid md:grid-cols-2 gap-8 mt-8">
            <div className="text-lg leading-8 text-white/90">
              <p>
                I’m a Texas A&amp;M MS-MIS student with experience across data science,
                IT, and product support. I love connecting <span className="font-semibold">analytics</span>,{" "}
                <span className="font-semibold">automation</span>, and{" "}
                <span className="font-semibold">product thinking</span> which involves turning ideas into shipped features.
              </p>
              <p className="mt-4">
                I’ve contributed at <span className="font-semibold">UiPath</span> (Technical Product
                Support Intern), <span className="font-semibold">Texas A&amp;M ITEC</span> (Development &amp; Communication Student Assistant),
                and as an <span className="font-semibold">IT Specialist</span>.
              </p>
              <p className="mt-4">
                I’m targeting roles like <span className="font-semibold">Associate Product Manager</span> and{" "}
                <span className="font-semibold">Data Analyst</span> and striving for a space where user value, data, and execution meet.
              </p>
            </div>

            {/* Quick Facts */}
            <div className="rounded-2xl border border-white/10 p-6 bg-black/30">
              <h3 className="text-xl font-semibold mb-3">Quick Facts</h3>
              <ul className="space-y-2 text-white/85 text-[15px]">
                <li>UiPath RPA Associate; Data Analytics with Python</li>
                <li>Python, SQL, JS/React basics, Tableau, Power BI</li>
                <li>MySQL, PostgreSQL, MongoDB, AWS (EC2/Aurora)</li>
                <li>Docker, basic Spark, Agile/Scrum (PSM-I)</li>
                <li>Cross-cultural communicator; multilingual</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* HOBBIES & INTERESTS */}
      <Section title="Outside Work" eyebrow="Hobbies & Interests">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <Card title="Dance & Performance" imageSrc="/dance.jpeg">
            <p>
              Lead choreographer &amp; performer — I love fusing Bollywood, hip-hop, and contemporary.
              Performing keeps me creative and collaborative. ✨
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Choreography</Chip>
              <Chip>Stage</Chip>
              <Chip>Teamwork</Chip>
            </div>
          </Card>

          <Card title="Fitness & Sports" imageSrc="/badminton.jpeg">
            <p>
              Big on movement — running, group workouts, and campus rec leagues.
              Sport is my way to reset, compete, and build resilience. 🏃‍♀️
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Running</Chip>
              <Chip>Rec Leagues</Chip>
              <Chip>Discipline</Chip>
            </div>
          </Card>

          <Card title="Making & Media" imageSrc="/maker.jpeg">
            <p>
              I enjoy building small tools, tinkering with automation, and editing short videos.
              Side projects = learning by shipping. 🧪
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Automation</Chip>
              <Chip>Editing</Chip>
              <Chip>Side Projects</Chip>
            </div>
          </Card>
        </div>
      </Section>

      {/* PUBLICATIONS */}
      <Section title="Research & Publications" eyebrow="International Publications">
        <div className="grid lg:grid-cols-2 gap-4">
          <Card
            eyebrow="Jul 2023"
            title="Data Security in a DApp Twitter-Alike on Web 3.0"
            imageSrc="/publication.jpg"
          >
            <ul className="list-disc ml-5 space-y-2">
              <li>
                Developed a blockchain-based, decentralized Twitter-style app — enhanced data security,
                removed central repositories, and increased user trust by <span className="font-semibold">15%</span>.
              </li>
              <li>
                Built a framework supporting <span className="font-semibold">50,000+ users</span> and led cross-functional collaboration
                to integrate Web3 components, improving service quality and engagement.
              </li>
            </ul>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Blockchain</Chip>
              <Chip>Web3</Chip>
              <Chip>Decentralization</Chip>
            </div>
          </Card>

          <div className="grid gap-4">
            <Card title="Certifications & Training">
              <ul className="list-disc ml-5 space-y-2">
                <li>Professional Scrum Master-I (PSM-I)</li>
                <li>UiPath Automation Developer Associate</li>
                <li>
                  IBM Technical Seminar (Oct 2023) — networking, group discussions, and presentations
                </li>
                <li>
                  CyberAware 2024 (Texas Military Department) — critical infrastructure vulnerabilities & partnerships
                </li>
              </ul>
            </Card>

            <Card title="Global Program Impact" imageSrc="/branding.png">
              <p>
                Spearheaded branding &amp; launch video for <span className="font-semibold">UiPath’s global internship program</span>,
                helping <span className="font-semibold">500+ interns</span> across <span className="font-semibold">30+ countries</span> onboard efficiently and
                boosting program engagement worldwide.
              </p>
              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>Storytelling</Chip>
                <Chip>Branding</Chip>
                <Chip>Onboarding</Chip>
              </div>
            </Card>
          </div>
        </div>
      </Section>

      {/* LEADERSHIP & EVENTS */}
      <Section title="Leadership & Events" eyebrow="Community & Campus">
        <div className="grid md:grid-cols-3 gap-4">
          <Card title="Dance Crew Leadership — “Inferno”" imageSrc="/inferno.jpeg">
            <p>
              Led and choreographed a <span className="font-semibold">15-member</span> crew — creative direction, conflict
              resolution, and teamwork that translated to multiple competition wins and strong cohesion.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Leadership</Chip>
              <Chip>Creative Direction</Chip>
              <Chip>Team Cohesion</Chip>
            </div>
          </Card>

          <Card title="Hackathon Coordination — “Centuriton”" imageSrc="/hackathon.png">
            <p>
              Managed logistics and coordinated <span className="font-semibold">50+ volunteers</span>. Stakeholder management,
              scheduling, and operations for a smooth event.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Ops</Chip>
              <Chip>Stakeholders</Chip>
              <Chip>Planning</Chip>
            </div>
          </Card>

          <Card title="Blood Donation Drives (2021–2022)" imageSrc="/blood-drive.jpeg">
            <p>
              Organized campus-wide drives recruiting <span className="font-semibold">500+ donors</span>, coordinating medical staff,
              and managing resources — direct impact on healthcare outreach.
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              <Chip>Service</Chip>
              <Chip>Logistics</Chip>
              <Chip>Impact</Chip>
            </div>
          </Card>
        </div>
      </Section>
    </main>
  );
}
