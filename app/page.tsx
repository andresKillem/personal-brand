import { AIChatbot } from "@/components/AIChatbot";
import { Altimeter } from "@/components/Altimeter";
import { ContourField } from "@/components/ContourField";
import { ElevationProfile } from "@/components/ElevationProfile";
import { RouteMap } from "@/components/RouteMap";
import {
  AgenticSREDiagram,
  LangGraphDiagram,
  GatewayDiagram,
  RAGDiagram,
  LangChainDiagram,
  PaymentsDiagram,
} from "@/components/ArchitectureSchematics";
import { capabilities, currentCamp, projects, surveyData } from "@/lib/content";
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

const LINKEDIN_URL = "https://www.linkedin.com/in/andres-munoz/";
const GITHUB_URL = "https://github.com/andresKillem";

function SheetHeading({
  sheet,
  name,
  title,
  aside,
}: {
  sheet: string;
  name: string;
  title: React.ReactNode;
  aside?: string;
}) {
  return (
    <div className="mb-14">
      <div className="flex items-center gap-4 mb-6">
        <span className="label text-accent">Sheet {sheet}</span>
        <span className="label">{name}</span>
        <span className="rule flex-1" />
      </div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-5">
        <h2 className="display-lg font-display">{title}</h2>
        {aside && <p className="text-ink-soft max-w-sm md:text-right">{aside}</p>}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen bg-paper text-ink overflow-x-clip">
      {/* ---------- Header ---------- */}
      <header className="sticky top-0 z-50 bg-paper/80 backdrop-blur-md border-b border-line">
        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 h-14 flex items-center justify-between gap-6">
          <a href="#" className="font-display text-xl leading-none whitespace-nowrap">
            Andrés Muñoz
          </a>
          <nav className="flex items-center gap-4 sm:gap-7 label">
            <a href="#systems" className="hidden sm:inline hover:text-ink transition-colors">Systems</a>
            <a href="#work" className="hidden sm:inline hover:text-ink transition-colors">Work</a>
            <a href="#route" className="hidden sm:inline hover:text-ink transition-colors">Route</a>
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-ink transition-colors"
            >
              GitHub
            </a>
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-ink transition-colors"
            >
              LinkedIn
            </a>
          </nav>
          <Altimeter />
        </div>
      </header>

      {/* ---------- Hero: the map itself ---------- */}
      <section className="relative border-b border-line">
        <ContourField
          ascent={0.3}
          className="absolute inset-0 w-full h-full [mask-image:linear-gradient(to_bottom,black_75%,transparent)]"
        />
        {/* Darkens the terrain behind the title block so the text stays readable */}
        <div
          aria-hidden="true"
          className="absolute inset-0 bg-[radial-gradient(ellipse_52%_80%_at_20%_45%,var(--color-paper)_25%,transparent_100%)]"
        />

        <RouteMap className="hidden lg:block absolute inset-0" />

        <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-8 pb-10 lg:min-h-[47rem] pointer-events-none">
          {/* Map margin */}
          <div className="flex items-center gap-4 rise">
            <span className="label text-accent">Sheet 01</span>
            <span className="label">Career survey · 2011 — 2026</span>
            <span className="rule flex-1" />
            <span className="label hidden sm:inline">0°13′S 78°31′W → 41°03′N 73°32′W</span>
          </div>

          {/* The opening post */}
          <article className="mt-12 lg:mt-16 max-w-[34rem] lg:max-w-[46%] pointer-events-auto">
            <p className="label rise rise-1">Updated November 2026 · Stamford, CT</p>
            <h1 className="mt-4 font-display text-[clamp(1.9rem,3.2vw,2.5rem)] leading-[1.12] [text-wrap:pretty] rise rise-1">
              Hola, I’m Andrés. I build agent systems, and the platforms that keep them standing.
            </h1>
            <div className="prose-post mt-7 space-y-5 text-ink-soft rise rise-2">
              <p>
                I’m a {currentCamp.title} at <a href="#route">{currentCamp.company}</a>. Before
                that I ran infrastructure and SRE at Deuna, where much of the operation
                (incident triage, remediation, FinOps) was handled by AI agents, and spent
                years on payments and platform work at Housecall Pro and Kushki.
              </p>
              <p>
                Most of what I do is make LLM systems boring, in the good sense: multi-agent
                orchestration, routing across providers with fallbacks, retrieval that cites
                its sources, and evals that turn quality into a number instead of a feeling.
                Under all of it sits a platform foundation hardened in fintech at 1,500+ TPS.
              </p>
              <p>
                This site is a map of that work: <a href="#systems">the systems I design</a>,{" "}
                <a href="#work">things I’ve built</a>, and <a href="#route">the route that got me here</a>.
                The code lives on{" "}
                <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">GitHub</a>; for
                everything else, find me on{" "}
                <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer">LinkedIn</a>.
              </p>
            </div>
          </article>
        </div>

        {/* On small screens the route sits below the title block */}
        <div className="relative lg:hidden h-80 mx-5 sm:mx-8 mb-8 border-t border-line">
          <RouteMap className="absolute inset-0" />
        </div>
      </section>

      {/* ---------- Survey data ---------- */}
      <section className="border-b border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 grid grid-cols-2 md:grid-cols-4">
          {surveyData.map((stat) => (
            <div key={stat.label} className="py-7 pr-4">
              <div className="font-display text-4xl md:text-5xl">{stat.value}</div>
              <div className="label mt-2">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* ---------- Clients ---------- */}
        <section className="py-10">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <span className="label shrink-0">Surveyed for</span>
            <div className="flex flex-wrap items-center gap-x-10 gap-y-4 font-display text-2xl text-ink-soft">
              <span>Accordion</span>
              <span>Deuna</span>
              <span>Housecall Pro</span>
              <span>Kushki</span>
              <span>Banco Pichincha</span>
              <span>Telefónica</span>
            </div>
          </div>
        </section>

        {/* ---------- Systems ---------- */}
        <section id="systems" className="py-24 border-t border-line scroll-mt-14">
          <SheetHeading
            sheet="02"
            name="Systems"
            title="Selected architectures"
            aside="Schematics of how I design AI and platform systems — drawn, not screenshotted."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-16">
            {architectures.map(({ no, title, caption, Diagram }) => (
              <figure key={no}>
                <div className="frame p-4">
                  <Diagram />
                </div>
                <figcaption className="mt-5">
                  <div className="flex items-baseline gap-3">
                    <span className="font-mono text-accent text-xs tracking-[0.14em]">{no}</span>
                    <h3 className="display-md font-display">{title}</h3>
                  </div>
                  <p className="mt-2 text-ink-soft text-base">{caption}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        {/* ---------- Work ---------- */}
        <section id="work" className="py-24 border-t border-line scroll-mt-14">
          <SheetHeading sheet="03" name="Waypoints" title="Things I’ve built" />
          <div className="border-t border-line">
            {projects.map((project) => {
              const row = (
                <div className="grid grid-cols-12 gap-x-6 gap-y-3 py-8 items-baseline">
                  <div className="col-span-12 md:col-span-1 font-mono text-accent text-xs tracking-[0.14em]">
                    {project.no}
                  </div>
                  <div className="col-span-12 md:col-span-4">
                    <h3 className="font-display text-3xl flex items-center gap-2 group-hover:text-accent transition-colors">
                      {project.title}
                      {project.link && <ArrowUpRight className="w-5 h-5 shrink-0" />}
                    </h3>
                    <div className="label mt-2">{project.org}</div>
                  </div>
                  <p className="col-span-12 md:col-span-5 text-ink-soft text-base">{project.desc}</p>
                  <div className="col-span-12 md:col-span-2 flex flex-wrap gap-1.5 md:justify-end">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="font-mono text-[0.625rem] tracking-[0.08em] text-ink-faint border border-line px-1.5 py-1"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
              return project.link ? (
                <a
                  key={project.no}
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border-b border-line hover:bg-paper-2 transition-colors -mx-4 px-4"
                >
                  {row}
                </a>
              ) : (
                <div key={project.no} className="group border-b border-line -mx-4 px-4">
                  {row}
                </div>
              );
            })}
          </div>
        </section>

        {/* ---------- Route ---------- */}
        <section id="route" className="py-24 border-t border-line scroll-mt-14">
          <SheetHeading
            sheet="04"
            name="The route"
            title="The road here"
            aside="Fifteen years drawn as a climb. Pick a camp to read its field notes."
          />
          <ElevationProfile />
        </section>

        {/* ---------- Capabilities ---------- */}
        <section className="py-24 border-t border-line">
          <SheetHeading sheet="05" name="Kit" title="What I carry" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            {capabilities.map((capability, index) => (
              <div key={capability.title} className="flex gap-5 border-t border-line pt-6">
                <span className="font-mono text-accent text-xs tracking-[0.14em] pt-2">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-3xl">{capability.title}</h3>
                  <p className="mt-2 text-ink-soft text-base">{capability.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ---------- Writing ---------- */}
        <section className="py-24 border-t border-line">
          <SheetHeading sheet="06" name="Field notes" title="Writing" />
          <a
            href="https://medium.com/@andresmunozb"
            target="_blank"
            rel="noopener noreferrer"
            className="group block border-y border-line py-10"
          >
            <div className="flex items-baseline justify-between gap-6">
              <h3 className="font-display text-4xl md:text-5xl italic max-w-3xl group-hover:text-accent transition-colors">
                The Productivity Paradox of AI
              </h3>
              <ArrowUpRight className="w-6 h-6 text-ink-faint group-hover:text-accent transition-colors shrink-0" />
            </div>
            <p className="mt-4 text-ink-soft max-w-2xl">
              Are we entering a productivity boom that elevates our capabilities,
              or a bubble that erodes our engineering muscle memory?
            </p>
          </a>
        </section>

        {/* ---------- Contact ---------- */}
        <section className="py-28 border-t border-line">
          <SheetHeading
            sheet="07"
            name="Contact"
            title={
              <>
                Building something that has to <span className="italic text-accent">hold up</span>? Let’s compare notes.
              </>
            }
          />
          <div className="flex flex-wrap gap-3">
            <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" className="btn btn-solid">
              Message me on LinkedIn
            </a>
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer" className="btn">
              GitHub
            </a>
          </div>
        </section>
      </main>

      {/* ---------- Footer ---------- */}
      <footer className="border-t border-line">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 py-10 flex flex-col md:flex-row justify-between gap-4">
          <p className="label">© 2026 Andrés Muñoz · Quito → Stamford</p>
          <p className="label">Architecting elegance in chaos.</p>
        </div>
      </footer>

      <AIChatbot />
    </div>
  );
}
