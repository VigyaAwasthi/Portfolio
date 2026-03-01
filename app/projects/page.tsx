"use client";

import Link from "next/link";
import VideoBackground from "@/components/VideoBackground";
import IconDots from "@/components/IconDots";

type RowProps = {
  id?: string;
  title: string;
  lead: string;
  bullets: string[];
  tags: string[];
  imageSrc: string;
  side?: "left" | "right";
  eyebrow?: string;
};

function Chip({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-2.5 py-1 text-[11px] text-white/85">
      {children}
    </span>
  );
}

function Row({
  id,
  title,
  lead,
  bullets,
  tags,
  imageSrc,
  side = "left",
  eyebrow,
}: RowProps) {
  const IconBox = (
    <div className="relative">
      {/* soft glow */}
      <div className="pointer-events-none absolute -inset-3 rounded-2xl bg-cyan-400/15 blur-xl" />
      <div className="relative h-36 w-36 md:h-44 md:w-44 lg:h-56 lg:w-56 rounded-2xl overflow-hidden border border-white/15 bg-black/30 shadow-[0_0_60px_-18px_rgba(0,255,255,.45)]">
        <img src={imageSrc} alt="" className="h-full w-full object-cover" />
        <div className="pointer-events-none absolute inset-0 rounded-2xl ring-1 ring-white/10" />
      </div>
    </div>
  );

  const gridCols =
    side === "right" ? "lg:grid-cols-[1fr,auto]" : "lg:grid-cols-[auto,1fr]";

  return (
    <section id={id} className="group relative isolate">
      <div className="pointer-events-none absolute -inset-2 rounded-3xl bg-gradient-to-r from-cyan-500/0 via-cyan-500/5 to-emerald-500/0 blur-2xl opacity-0 group-hover:opacity-100 transition" />

      <div className={`relative z-10 grid ${gridCols} items-center gap-5 md:gap-7`}>
        {/* Left icon */}
        {side !== "right" && <div className="flex justify-start">{IconBox}</div>}

        {/* Text */}
        <div className={`${side === "right" ? "lg:pr-1" : "lg:pl-1"}`}>
          {eyebrow && (
            <div className="text-[10px] tracking-[0.25em] uppercase text-white/60 mb-2">
              {eyebrow}
            </div>
          )}

          {/* slightly smaller title */}
          <h3 className="text-[1.75rem] md:text-[2rem] lg:text-[2.15rem] font-semibold tracking-tight leading-tight">
            {title}
          </h3>

          {/* smaller lead */}
          <p className="mt-3 text-white/85 text-[14.5px]">{lead}</p>

          {/* smaller bullets */}
          <ul className="mt-4 space-y-2 text-[13.5px] text-white/85 leading-6">
            {bullets.map((b, i) => (
              <li key={i} className="flex gap-2">
                <span className="mt-[7px] h-[6px] w-[6px] rounded-full bg-white/40" />
                <span dangerouslySetInnerHTML={{ __html: b }} />
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((t) => (
              <Chip key={t}>{t}</Chip>
            ))}
          </div>
        </div>

        {/* Right icon */}
        {side === "right" && <div className="flex justify-end">{IconBox}</div>}
      </div>
    </section>
  );
}

export default function ProjectsAll() {
  return (
    <main className="relative pt-24">
      <VideoBackground src="/videos/background1.mp4" />
      <IconDots />

      {/* HERO */}
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-wrap gap-2 mb-6">
          <Link href="/projects">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm text-white/90">
              All
            </span>
          </Link>
          <Link href="#surveysense" className="inline-flex">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white/95">
              SurveySense
            </span>
          </Link>
          <Link href="#shopify" className="inline-flex">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white/95">
              Shopify
            </span>
          </Link>
          <Link href="#pos" className="inline-flex">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white/95">
              PoS DBMS
            </span>
          </Link>
          <Link href="#medical" className="inline-flex">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white/95">
              Medical Sorage Sharing
            </span>
          </Link>
          <Link href="#student" className="inline-flex">
            <span className="inline-flex items-center rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/75 hover:text-white/95">
              Depression classification
            </span>
          </Link>
        </div>

        <div className="text-xs tracking-[0.25em] uppercase text-white/60">Case Studies</div>
        <h1 className="text-4xl md:text-[2.75rem] font-semibold tracking-tight mb-2">
          Projects
        </h1>
        {/* fun yet professional line */}
        <p className="text-white/80 text-[15px] md:text-[16px] mb-10">
          Where concepts meet execution.
        </p>

        <div className="space-y-14 md:space-y-16">
          <Row
            id="surveysense"
            eyebrow="Data • Jan–Jul 2024"
            title="SurveySense — AI Survey Platform ✨"
            lead="NLP-driven creation, scoring and analytics with real-time insights."
            bullets={[
              "Launched GenAI surveys on Hugging Face (creation → reporting → sentiment/topic modeling) handling <b>10k+ surveys/mo</b> with <b>+30% engagement</b>.",
              "Built BERT pipeline & finetuned LLaMA-2 (≈<b>+20% accuracy</b>, <b>–25% latency</b>); served ~<b>4k+</b> real-time queries under <b>200ms</b>.",
            ]}
            tags={["Python", "NLP", "BERT", "LLaMA-2", "HuggingFace"]}
            imageSrc="/neon-line.svg"
            side="left"
          />

          <Row
            id="shopify"
            eyebrow="Product • Jan–Jun 2024"
            title="Shopify — Enterprise Digital Transformation (Capstone) 🧭"
            lead="AI-powered inventory forecasting MVP & exec-ready scale plan."
            bullets={[
              "Designed MVP for <b>demand prediction</b>, restock alerts & supply-chain insights; ran interviews & pilot feedback loops to refine roadmap.",
              "Built feasibility & scaling playbook (ownership, resourcing, cost & risk) → strong PMF/feasibility feedback from Shopify leadership.",
            ]}
            tags={["Product Strategy", "MVP", "Forecasting", "User Research"]}
            imageSrc="/spark.svg"
            side="right"
          />

          <Row
            id="pos"
            eyebrow="Data • Aug–Dec 2024"
            title="PoS Database Platform ⚙️"
            lead="ETL to relational + NoSQL with sharding, materialized views, and autoscale."
            bullets={[
              "Deployed 15× AWS EC2 with LB/Auto-Scaling (≈<b>1M+ tx/day</b>); ERD + ETL (Airflow/Spark) + materialized views for fast analytics.",
              "Migrated <b>5TB</b> to MongoDB with sharding/indexing → <b>+40% reads</b>, <b>10× throughput</b>; analytics <b>5s → &lt;1s</b>; queries <b>&lt;500ms</b>.",
            ]}
            tags={["AWS", "Airflow", "Spark", "Postgres", "MongoDB", "Sharding"]}
            imageSrc="/cube.svg"
            side="left"
          />

          <Row
            id="medical"
            eyebrow="Product • Jan–Jun 2023"
            title="Secure Medical Sharing (Blockchain) 🛡️"
            lead="Portal for protected EHR exchange with smart-contract access control."
            bullets={[
              "Built web portal + blockchain integration for <b>500+ users</b> → reduced breach risk by <b>~40%</b> via smart-contract governance.",
              "Secured <b>$250K</b> to scale toward <b>1M+</b> users; positioned for healthcare data-security innovation.",
            ]}
            tags={["Product", "Blockchain", "Security", "Smart Contracts"]}
            imageSrc="/network.svg"
            side="right"
          />

          <Row
            id="student"
            eyebrow="Data • Jan–Jun 2023"
            title="Predictive Analytics for Student Well-being 🧠"
            lead="Modeling pipeline with disciplined ETL and comparative evaluation."
            bullets={[
              "Engineered FFNNs (R/nnet) with CV/tuning → <b>84.2% accuracy</b>, <b>89.9% sensitivity</b>, beating DT/RF/LR/SVM/KNN.",
              "ETL for <b>27,901×14</b> dataset with clean/normalize/impute (≈<b>99.8% integrity</b>) and EDA visuals for stakeholders.",
            ]}
            tags={["R", "ETL", "EDA", "Model Comparison"]}
            imageSrc="/heartbeat.svg"
            side="left"
          />

          < Row
            id="texas-ai"
            eyebrow="AI & Cloud • Hackathon 2025"
            title="Texas Interview Intelligence Platform 🚀"
            lead="Serverless AI ecosystem automating the end-to-end recruitment lifecycle."
            bullets={[
              "Architected a <b>100% serverless</b> backend using <b>13 AWS Lambda microservices</b>, DynamoDB, and S3 for scalable session management.",
              "Integrated <b>Amazon Bedrock (Nova Lite 2)</b> to auto-generate strategic question packets and real-time executive interview reports from raw case docs.",
              "Engineered a live 'AI Copilot' providing real-time answer summarization and chronological tracking for high-stakes business case interviews.",
            ]}
            tags={["AWS Lambda", "Amazon Bedrock", "Python", "Serverless"]}
            imageSrc="/aws-ai.svg" 
            side="right"
          />
          <Row
            id="retail-dw"
            eyebrow="Data Engineering • Chicago M&A"
            title="Retail Data Warehouse Integration 📊"
            lead="Hybrid Star Schema architecture for multi-system POS data consolidation."
            bullets={[
              "Consolidated <b>500GB+</b> of fragmented data from 3 legacy systems into a high-performance <b>AWS Redshift</b> warehouse via 20+ SSIS ETL packages.",
              "Optimized query performance by <b>95%</b>, reducing complex join latency from <b>2 minutes to <2 seconds</b> for 50M+ transactional records.",
              "Implemented rigorous data validation protocols to maintain <b>high integrity</b> during multi-source migration for 5,000+ active product SKUs.",
            ]}
            tags={["AWS Redshift", "SQL Server", "SSIS", "ETL"]}
            imageSrc="/database.svg"
            side="left"
          />
          <Row
            id="m-height"
            eyebrow="Deep Learning • Research"
            title="m-Height Estimation in Random Polytopes 📉"
            lead="Deep Ensemble framework replacing expensive linear programming for geometric estimation."
            bullets={[
              "Developed a <b>three-stage modeling pipeline</b> using Per-Bucket Deep Ensembles to predict m-heights across <b>56,000+</b> skewed samples.",
              "Optimized loss functions in <b>log₂-space</b> to handle heavy-tailed distributions, achieving superior stability over standard XGBoost/LR baselines.",
              "Engineered a custom featurization layer to process <b>(n, k, m, P)</b> generator matrices, replacing computationally intensive LP procedures.",
            ]}
            tags={["PyTorch", "Deep Learning", "NumPy", "Scikit-learn"]}
            imageSrc="/neural-net.svg"
            side="right"
          />
        </div>
      </div>
    </main>
  );
}
