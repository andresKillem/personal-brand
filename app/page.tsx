import { AIChatbot } from "@/components/AIChatbot";
import {
  AgenticSREDiagram,
  LangGraphDiagram,
  GatewayDiagram,
  RAGDiagram,
  LangChainDiagram,
  PaymentsDiagram,
} from "@/components/ArchitectureSchematics";
import { ArrowUpRight } from "lucide-react";

const architectures = [
  {
    no: "A1",
    title: "Agentic SRE Operations",
    caption:
      "The infra & SRE operation run by agents — a supervisor routes incidents to triage, remediation, and FinOps specialists through MCP tools, human-in-the-loop.",
    Diagram: AgenticSREDiagram,
  },
  {
    no: "A2",
    title: "LangGraph Multi-Agent",
    caption:
      "A StateGraph supervisor routes through conditional edges to Planner, Worker, and Tool nodes — each updating shared state and cycling back until the task is done.",
    Diagram: LangGraphDiagram,
  },
  {
    no: "A3",
    title: "Multi-Provider LLM Gateway",
    caption:
      "A cheap classifier routes to a Portkey-style gateway with a fallback chain across Claude, GPT, and Gemini — balancing quality, latency, and cost.",
    Diagram: GatewayDiagram,
  },
  {
    no: "A4",
    title: "RAG · Retrieval Stack",
    caption:
      "Hybrid grounding across Qdrant vectors, a Neo4j knowledge graph, and Typesense full-text — reranked with Cohere into a cited, trustworthy answer.",
    Diagram: RAGDiagram,
  },
  {
    no: "A5",
    title: "LangChain LCEL Pipeline",
    caption:
      "Composable retrieval-augmented chains — prompt | model | parser — where a retriever injects grounded context and the parser returns typed, structured output.",
    Diagram: LangChainDiagram,
  },
  {
    no: "A6",
    title: "Event-Driven Payments",
    caption:
      "The platform foundation: PCI-DSS microservices over an event bus (SNS/SQS/Kafka) feeding a ledger and real-time reconciliation at 1.5K+ TPS.",
    Diagram: PaymentsDiagram,
  },
];

const projects = [
  {
    no: "01",
    title: "AI Delivery Pipeline",
    org: "Deuna",
    desc: "Agentic automation of the software lifecycle — Jira → AI code-gen → tests → PR with human review. ~40% less manual overhead.",
    tags: ["Claude", "MCP", "n8n", "FastAPI"],
  },
  {
    no: "02",
    title: "Cloud Cost Optimizer",
    org: "Open Source",
    desc: "FinOps engine ingesting AWS/Azure billing, detecting idle resources via rules, generating safe decommission plans. MCP server + Claude Agent SDK sub-agents.",
    tags: ["Python", "FastAPI", "boto3", "MCP"],
    link: "https://github.com/andresKillem/wk-cloud-cost-optimizer",
  },
  {
    no: "03",
    title: "AI Engineer Lab",
    org: "Open Source",
    desc: "A runnable, line-by-line reference for production LLM systems: routing, agents, RAG, evals — real APIs, graceful degradation, interview-grade notes.",
    tags: ["Python", "RAG", "Evals", "Agents"],
    link: "https://github.com/andresKillem/ai-engineer-interview-lab",
  },
  {
    no: "04",
    title: "Payment Infrastructure",
    org: "Deuna · Kushki",
    desc: "Event-driven microservices processing 1,500+ TPS with PCI-DSS compliance — from a 100 TPS monolith to 99.95% success at 450ms latency.",
    tags: ["AWS", "EKS", "Kafka", "Go"],
  },
];

const skills = [
  {
    title: "Agentic AI & Orchestration",
    desc: "Multi-agent systems (supervisor + specialist), tool & function calling, MCP servers, classifier routing.",
  },
  {
    title: "RAG & Retrieval",
    desc: "Embeddings, vector search (Qdrant), reranking (Cohere), knowledge graphs (Neo4j), grounded answers.",
  },
  {
    title: "LLM Evals & Observability",
    desc: "Golden datasets, prompt-regression, hallucination & safety checks, Langfuse and Datadog tracing.",
  },
  {
    title: "Cloud & Platform Foundation",
    desc: "AWS, Kubernetes, Terraform, GitOps, SRE — the resilient base beneath the AI.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 bg-paper/85 backdrop-blur-sm border-b border-line">
        <div className="max-w-5xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="font-display text-base tracking-tight">
            Andrés&nbsp;Muñoz
          </a>
          <nav className="flex items-center gap-7 label">
            <a href="#architectures" className="hover:text-ink transition-colors">Architectures</a>
            <a href="#work" className="hover:text-ink transition-colors">Work</a>
            <a href="#path" className="hover:text-ink transition-colors">Path</a>
            <a
              href="https://www.linkedin.com/in/andres-munoz/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:opacity-70 transition-opacity"
            >
              Connect
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6">
        {/* ---------- Hero ---------- */}
        <section className="pt-20 pb-16 md:pt-24 md:pb-20 rise">
          <div className="flex items-center gap-3 mb-12">
            <span className="label">No.01 — AI Engineering</span>
            <span className="rule flex-1" />
            <span className="label text-accent">● Open to roles</span>
          </div>

          <p className="label mb-5">AI Engineer · LLM Systems · Platform &amp; SRE</p>

          <h1 className="display-lg font-display max-w-3xl">
            Building agent systems that
            <span className="italic text-accent"> hold up </span>
            in production.
          </h1>

          {/* Abstract — the substance */}
          <p className="mt-7 text-lg md:text-xl text-ink-soft max-w-3xl leading-relaxed">
            I design multi-agent orchestration (LangGraph supervisor–worker),
            multi-provider routing behind a Portkey gateway, and hybrid retrieval
            across vectors, a knowledge graph, and rerank — then make quality a{" "}
            <span className="text-ink italic">number</span>, not a feeling, with
            golden-dataset evals and Langfuse tracing. All on a platform/SRE
            foundation hardened in fintech at 1,500+ TPS.
          </p>

          {/* Focus areas */}
          <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-2 label">
            <span>Agent orchestration</span>
            <span className="text-ink-faint/50">/</span>
            <span>Retrieval &amp; grounding</span>
            <span className="text-ink-faint/50">/</span>
            <span>Evals &amp; observability</span>
            <span className="text-ink-faint/50">/</span>
            <span>Platform &amp; SRE</span>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#architectures"
              className="group inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-mono tracking-wide hover:bg-accent transition-colors"
            >
              View architectures
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
            <a
              href="https://www.linkedin.com/in/andres-munoz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-mono tracking-wide border border-ink hover:bg-ink hover:text-paper transition-colors"
            >
              LinkedIn
            </a>
          </div>

          <p className="mt-10 font-display italic text-ink-faint">
            — Architecting elegance in chaos.
          </p>

          {/* Stats — editorial row, hairline-divided */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 border-t border-line">
            {[
              { v: "−40%", l: "Dev overhead" },
              { v: "Multi-LLM", l: "Provider routing" },
              { v: "99.99%", l: "Uptime" },
              { v: "RAG + Evals", l: "Grounded & measured" },
            ].map((s, i) => (
              <div
                key={i}
                className="py-5 pr-4 border-b border-line md:border-b-0 md:border-r last:border-r-0 [&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
              >
                <div className="font-display text-2xl md:text-3xl">{s.v}</div>
                <div className="label mt-1">{s.l}</div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Clients ---------- */}
        <section className="py-10 border-t border-line">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="label shrink-0">Contributions for</span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 opacity-70 grayscale">
              <img src="/logos/deuna-logo.png" alt="Deuna" className="h-6 object-contain" />
              <img src="/logos/housecallpro-logo.png" alt="Housecall Pro" className="h-6 object-contain" />
              <img src="/logos/kushki-logo.png" alt="Kushki" className="h-6 object-contain" />
              <img src="/logos/telefonica-logo.png" alt="Telefónica" className="h-6 object-contain" />
            </div>
          </div>
        </section>

        {/* ---------- Architectures ---------- */}
        <section id="architectures" className="py-20 border-t border-line scroll-mt-16">
          <div className="flex items-end justify-between mb-14">
            <div>
              <span className="label">No.02 — Systems</span>
              <h2 className="display-lg font-display mt-3">Selected Architectures</h2>
            </div>
            <p className="hidden md:block text-ink-soft max-w-xs text-right leading-relaxed">
              Schematics of how I design AI and platform systems — drawn, not screenshotted.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-16">
            {architectures.map(({ no, title, caption, Diagram }) => (
              <figure key={no} className="group">
                <figcaption className="mb-4">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-accent text-sm">{no}</span>
                    <h3 className="display-md font-display">{title}</h3>
                  </div>
                  <p className="mt-2 text-ink-soft text-[15px] leading-relaxed">{caption}</p>
                </figcaption>
                <div className="border border-line bg-paper-2/40 p-4">
                  <Diagram />
                </div>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section id="work" className="py-20 border-t border-line scroll-mt-16">
          <span className="label">No.03 — Selected Work</span>
          <h2 className="display-lg font-display mt-3 mb-12">Things I&apos;ve built</h2>

          <div className="border-t border-line">
            {projects.map((p) => {
              const Inner = (
                <div className="grid grid-cols-12 gap-4 py-7 items-baseline">
                  <div className="col-span-12 md:col-span-1 font-mono text-accent text-sm">{p.no}</div>
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-display text-xl flex items-center gap-1.5">
                      {p.title}
                      {p.link && (
                        <ArrowUpRight className="w-4 h-4 text-ink-faint group-hover:text-accent transition-colors" />
                      )}
                    </h3>
                    <div className="label mt-1.5">{p.org}</div>
                  </div>
                  <p className="col-span-12 md:col-span-5 text-ink-soft text-[15px] leading-relaxed">
                    {p.desc}
                  </p>
                  <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                    {p.tags.map((t) => (
                      <span key={t} className="font-mono text-[10px] text-ink-faint border border-line px-1.5 py-0.5">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              );
              return p.link ? (
                <a
                  key={p.no}
                  href={p.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-line hover:bg-paper-2/50 transition-colors -mx-3 px-3"
                >
                  {Inner}
                </a>
              ) : (
                <div key={p.no} className="group border-b border-line -mx-3 px-3">
                  {Inner}
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- Path ---------- */}
        <section id="path" className="py-20 border-t border-line scroll-mt-16">
          <span className="label">No.04 — Professional Path</span>
          <h2 className="display-lg font-display mt-3 mb-12">The road here</h2>

          <div className="space-y-12">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3 label pt-1">2023 — Present · Remote</div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl">
                  Head of Infrastructure &amp; SRE — Agentic Operations
                  <span className="text-accent"> · Deuna</span>
                </h3>
                <ul className="mt-4 space-y-2.5 text-ink-soft text-[15px] leading-relaxed">
                  <li>Run the infra &amp; SRE operation through AI agents: incident triage, remediation, and FinOps via multi-agent orchestration + MCP.</li>
                  <li>Built an agentic pipeline automating the delivery lifecycle (Jira → code-gen → tests → PR), cutting manual overhead ~40%.</li>
                  <li>Multi-provider LLM integration (Claude, OpenAI, Gemini) with structured output, retries, and fallback; token/cost optimization.</li>
                  <li>Extended SLO/SLI and Datadog observability to AI behavior, latency, and cost.</li>
                </ul>
              </div>
            </div>

            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-3 label pt-1">2021 — 2025 · Remote</div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="font-display text-2xl text-ink-soft">
                  Senior DevOps / Platform Engineer · Housecall Pro
                </h3>
                <ul className="mt-4 space-y-2.5 text-ink-soft text-[15px] leading-relaxed">
                  <li>Led enterprise platform transformation for a SaaS product serving millions of users.</li>
                  <li>Architected multi-cloud solutions (AWS/Azure) with global RDS replication.</li>
                  <li>Partnered with C-level leadership to reduce annual cloud spend by 20%.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- Skills ---------- */}
        <section className="py-20 border-t border-line">
          <span className="label">No.05 — Capabilities</span>
          <h2 className="display-lg font-display mt-3 mb-12">What I bring</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
            {skills.map((s, i) => (
              <div key={i} className="flex gap-5 border-t border-line pt-5">
                <span className="font-mono text-accent text-sm">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-display text-xl">{s.title}</h3>
                  <p className="mt-1.5 text-ink-soft text-[15px] leading-relaxed">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Writing ---------- */}
        <section className="py-20 border-t border-line">
          <span className="label">No.06 — Writing</span>
          <h2 className="display-lg font-display mt-3 mb-10">Technical insights</h2>
          <a
            href="https://medium.com/@andresmunozb"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-y border-line py-8"
          >
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="font-display text-2xl md:text-3xl italic max-w-2xl">
                The Productivity Paradox of AI
              </h3>
              <ArrowUpRight className="w-5 h-5 text-ink-faint group-hover:text-accent transition-colors shrink-0" />
            </div>
            <p className="mt-3 text-ink-soft max-w-2xl leading-relaxed">
              Are we entering a productivity boom that elevates our capabilities,
              or a bubble that erodes our engineering muscle memory?
            </p>
          </a>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="py-24 border-t border-line">
          <span className="label">No.07 — Contact</span>
          <h2 className="display-lg font-display mt-3 max-w-2xl">
            Currently open to{" "}
            <span className="italic text-accent">AI Engineer</span> &amp; LLM
            Systems roles.
          </h2>
          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="mailto:andreco87@gmail.com"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-sm font-mono tracking-wide hover:bg-accent transition-colors"
            >
              andreco87@gmail.com
            </a>
            <a
              href="https://www.linkedin.com/in/andres-munoz/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-mono tracking-wide hover:bg-ink hover:text-paper transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/andresKillem"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-ink px-6 py-3 text-sm font-mono tracking-wide hover:bg-ink hover:text-paper transition-colors"
            >
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-line">
        <div className="max-w-5xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between gap-4">
          <p className="label">© 2026 Andrés Muñoz · Quito → EST</p>
          <p className="label">Architecting elegance in chaos.</p>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
}
