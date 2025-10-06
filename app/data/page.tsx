import Section from "@/components/Section";
import BentoCard from "@/components/BentoCard";
import KpiStrip from "@/components/KpiStrip";
import VideoBackground from "@/components/VideoBackground";
import IconDots from "@/components/IconDots";

export default function DataPage() {
  return (
    <main className="pt-20 relative">
      <VideoBackground src="/videos/background1.mp4" />
      <IconDots />

      {/* HERO */}
      <section className="relative z-10 py-24">
        <div className="mx-auto max-w-6xl px-6">
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight">Data Portfolio</h1>
          <p className="mt-4 max-w-2xl text-lg text-white/80">
            Experiments, pipelines, and analytics — built to inform decisions at scale.
          </p>
        </div>
      </section>

      {/* KPI STRIP */}
      <KpiStrip items={["GenAI", "Pipelines", "Dashboards", "A/Bs"]} />

      {/* FEATURED DATA WORK */}
      <Section title="Featured Data Work" eyebrow="Analytics & Engineering">
        <div className="grid md:grid-cols-3 gap-3">
          {/* 1. SurveySense */}
          <BentoCard
            compact
            title="SurveySense — AI-Driven Survey Platform"
            subtitle="Jan–Jul 2024"
            imageSrc="/project7.jpg"
            bullets={[
              "Launched GenAI surveys on Hugging Face (creation, reporting, sentiment/topic modeling) → 10k+ surveys/mo, +30% engagement.",
              "Built NLP pipeline (BERT) and finetuned LLaMA-2 → +20% accuracy, −25% latency; ~4k real-time queries <200ms.",
            ]}
            tags={["Python", "BERT", "LLaMA-2", "NLP", "HuggingFace"]}
          />

          {/* 2. Student Mental Health */}
          <BentoCard
            compact
            title="Predictive Analytics — Student Mental Health"
            subtitle="Jan–Jun 2023"
            imageSrc="/nn.jpg"
            bullets={[
              "Engineered FFNNs (R nnet) with CV/tuning → 84.2% accuracy, 89.9% sensitivity; outperformed DT/RF/LR/SVM/KNN.",
              "Built end-to-end ETL for 27,901×14 (clean/normalize/impute) → 99.8% integrity; delivered EDA visuals for insights.",
            ]}
            tags={["R", "nnet", "ETL", "EDA", "Model Comparison"]}
          />

          {/* 3. PoS DBMS */}
          <BentoCard
            compact
            title="PoS Database Management System"
            subtitle="Aug–Dec 2024"
            imageSrc="/project2.jpg"
            bullets={[
              "Designed scalable platform: 15× AWS EC2 with LB/Auto-Scaling (1M+ tx/day); ERD + ETL (Airflow/Spark) + materialized views.",
              "Migrated 5TB → MongoDB (sharding/indexing) → +40% reads, 10× throughput; analytics 5s→<1s (−80%), queries <500ms.",
            ]}
            tags={["AWS", "Airflow", "Spark", "Postgres", "MongoDB", "Sharding"]}
          />

          {/* 4. Funding Radar */}
          <BentoCard
            compact
            title="Funding Radar — Grant Intelligence"
            imageSrc="/project4.jpg"
            bullets={[
              "Predictive scoring in Python/SQL + Tableau KPI dashboards to rank opportunities → secured $50k+ new grants.",
              "Alerting & monitoring surfaced high-potential leads and tracked initiative KPIs for stakeholders.",
            ]}
            tags={["Python", "SQL", "Tableau", "Predictive Scoring"]}
          />

          {/* 5. OpsFlow */}
          <BentoCard
            compact
            title="OpsFlow — Automations & Support Analytics"
            imageSrc="/project5.png"
            bullets={[
              "UiPath pipelines automated 1k+ workflows/mo; Salesforce/JIRA ops enforced SLAs and cut manual work ~30%.",
              "Snowflake license analytics with statistical testing → −90% recurring incidents; improved reliability of reporting.",
            ]}
            tags={["UiPath", "Salesforce", "JIRA", "Snowflake", "Stats Testing"]}
          />

          {/* 6. ContentGuard */}
          <BentoCard
            compact
            title="ContentGuard — Compliance & SEO Automation"
            imageSrc="/project3.jpg"
            bullets={[
              "NLP-based content analysis with A/B & SEO experiments → +2,000 visits/mo and higher retention.",
              "Automated OCR+regex compliance with WordPress integration → 10+ hours/week saved; KB refresh (40+ articles) → −20% TTR.",
            ]}
            tags={["NLP", "A/B Testing", "SEO", "OCR", "Regex", "WordPress"]}
          />
        </div>
      </Section>
    </main>
  );
}
