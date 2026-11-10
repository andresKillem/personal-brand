/* Site content — one place to edit roles, projects and capabilities. */

export type Camp = {
  numeral: string;
  company: string;
  title: string;
  period: string;
  location: string;
  /** Horizontal position on the career profile, as a decimal year. */
  chartYear: number;
  /** Vertical position on the career profile, 0 (valley) to 1 (summit). Scope, not metres. */
  chartLevel: number;
  notes: string[];
  isCurrent?: boolean;
};

export const camps: Camp[] = [
  {
    numeral: "I",
    company: "Kruger Corporation",
    title: "Project Leader",
    period: "2011 — 2015",
    location: "Ecuador",
    chartYear: 2011,
    chartLevel: 0.12,
    notes: ["The trailhead of this route."],
  },
  {
    numeral: "II",
    company: "Telefónica",
    title: "Outsourcing Development Manager",
    period: "2016 — 2017",
    location: "Ecuador",
    chartYear: 2016,
    chartLevel: 0.26,
    notes: [
      "Managed the software development lifecycle across all stages.",
      "Architected technology solutions for internal business requirements.",
      "Improved performance and security of project infrastructure.",
    ],
  },
  {
    numeral: "III",
    company: "Bixlabs",
    title: "Senior Software Engineer",
    period: "2017 — 2019",
    location: "Remote",
    chartYear: 2017.8,
    chartLevel: 0.37,
    notes: ["Senior individual-contributor engineering, between the management and architecture camps."],
  },
  {
    numeral: "IV",
    company: "Banco Pichincha",
    title: "DevOps Architect",
    period: "2021",
    location: "Ecuador",
    chartYear: 2020.6,
    chartLevel: 0.5,
    notes: [
      "Established DevOps practices across a banking organization.",
      "Automated deployments with CI/CD pipelines and a continuous build environment.",
    ],
  },
  {
    numeral: "V",
    company: "Kushki",
    title: "Cloud Applications Architect",
    period: "2021 — 2023",
    location: "Quito, Ecuador",
    chartYear: 2021.5,
    chartLevel: 0.6,
    notes: [
      "Architected a unified API platform focused on governance and developer experience.",
      "Built Go services on AWS for scalable payment infrastructure.",
    ],
  },
  {
    numeral: "VI",
    company: "Housecall Pro",
    title: "Senior DevOps / Platform Engineer",
    period: "2021 — 2025",
    location: "San Diego, CA · Remote",
    chartYear: 2022.5,
    chartLevel: 0.7,
    notes: [
      "Led enterprise platform transformation for a SaaS product serving millions of users.",
      "Architected multi-cloud solutions (AWS/Azure) with global RDS replication and cross-region DR.",
      "Partnered with C-level leadership to reduce annual cloud spend by 20%.",
    ],
  },
  {
    numeral: "VII",
    company: "Deuna",
    title: "Head of Infrastructure & SRE — Agentic Operations",
    period: "2023 — 2026",
    location: "Remote",
    chartYear: 2023.9,
    chartLevel: 0.84,
    notes: [
      "Run the infra & SRE operation through AI agents: incident triage, remediation, and FinOps via multi-agent orchestration + MCP.",
      "Built an agentic pipeline automating the delivery lifecycle (Jira → code-gen → tests → PR), cutting manual overhead ~40%.",
      "Multi-provider LLM integration (Claude, OpenAI, Gemini) with structured output, retries, and fallback.",
      "Extended SLO/SLI and Datadog observability to AI behavior, latency, and cost.",
    ],
  },
  {
    numeral: "VIII",
    company: "Accordion",
    title: "Sr Staff Software Engineer",
    period: "2026 — Present",
    location: "",
    chartYear: 2026.4,
    chartLevel: 0.96,
    isCurrent: true,
    notes: ["The newest camp on the route. Field notes are still being written."],
  },
];

export const currentCamp = camps.find((camp) => camp.isCurrent) ?? camps[camps.length - 1];

export const projects = [
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

export const capabilities = [
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

export const surveyData = [
  { value: "−40%", label: "Dev overhead" },
  { value: "1,500+", label: "TPS in fintech" },
  { value: "99.99%", label: "Uptime" },
  { value: "15 yrs", label: "On the route" },
];
