"use client";

import { motion } from "framer-motion";

/* ============================================================
   Architecture Schematics — hand-built editorial line diagrams.
   One visual language: hairline ink strokes, mono labels, a
   single oxblood accent per diagram. No client screenshots.
   ============================================================ */

const INK = "#14110F";
const FAINT = "#8C8478";
const ACCENT = "#9E3B2E";
const LINE = "rgba(20,17,15,0.55)";

type NodeProps = {
  x: number; y: number; w?: number; h?: number;
  title: string; sub?: string; accent?: boolean; delay?: number;
};

function Node({ x, y, w = 120, h = 46, title, sub, accent, delay = 0 }: NodeProps) {
  return (
    <motion.g
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay }}
    >
      <rect
        x={x} y={y} width={w} height={h}
        fill={accent ? "rgba(158,59,46,0.07)" : "rgba(20,17,15,0.015)"}
        stroke={accent ? ACCENT : INK}
        strokeWidth={1.1}
      />
      <text
        x={x + w / 2} y={sub ? y + h / 2 - 3 : y + h / 2 + 4}
        textAnchor="middle"
        fontFamily="'Fraunces', serif" fontSize="14" fontWeight={500}
        fill={accent ? ACCENT : INK}
      >
        {title}
      </text>
      {sub && (
        <text
          x={x + w / 2} y={y + h / 2 + 13}
          textAnchor="middle"
          fontFamily="'JetBrains Mono', monospace" fontSize="8.5"
          letterSpacing="0.06em" fill={FAINT}
        >
          {sub}
        </text>
      )}
    </motion.g>
  );
}

function Pipe({ d, delay = 0, accent, dashed }: { d: string; delay?: number; accent?: boolean; dashed?: boolean }) {
  return (
    <motion.path
      d={d}
      fill="none"
      stroke={accent ? ACCENT : LINE}
      strokeWidth={1.1}
      strokeDasharray={dashed ? "3 3" : undefined}
      initial={{ pathLength: 0, opacity: 0 }}
      whileInView={{ pathLength: 1, opacity: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.7, delay }}
      markerEnd="url(#arrow)"
    />
  );
}

function Defs() {
  return (
    <defs>
      <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M 0 1 L 8 5 L 0 9" fill="none" stroke={LINE} strokeWidth="1.2" />
      </marker>
    </defs>
  );
}

const svgProps = {
  className: "w-full h-auto",
  preserveAspectRatio: "xMidYMid meet",
} as const;

/* ---------- 1 · Agentic SRE / AgentOps ---------- */
export function AgenticSREDiagram() {
  return (
    <svg viewBox="0 0 640 300" {...svgProps} role="img" aria-label="Agentic SRE operations diagram">
      <Defs />
      <Node x={20} y={128} w={108} title="Signal" sub="alert · ticket" delay={0} />
      <Pipe d="M 128 151 H 196" delay={0.15} />
      <Node x={196} y={120} w={132} h={62} title="Supervisor" sub="orchestrator" accent delay={0.2} />

      <Pipe d="M 328 138 C 380 138 380 60 432 60" delay={0.4} />
      <Pipe d="M 328 151 H 432" delay={0.45} />
      <Pipe d="M 328 164 C 380 164 380 242 432 242" delay={0.5} />

      <Node x={432} y={38} w={146} title="Triage agent" sub="root-cause" delay={0.55} />
      <Node x={432} y={128} w={146} title="Remediation" sub="runbooks · MCP" delay={0.6} />
      <Node x={432} y={220} w={146} title="FinOps agent" sub="cost · rightsizing" delay={0.65} />

      <line x1="20" y1="284" x2="620" y2="284" stroke="rgba(20,17,15,0.14)" />
      <text x="20" y="278" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.18em" fill={FAINT}>
        MULTI-AGENT ORCHESTRATION · MCP TOOLS · HUMAN-IN-THE-LOOP
      </text>
    </svg>
  );
}

/* ---------- 2 · Multi-provider LLM gateway ---------- */
export function GatewayDiagram() {
  return (
    <svg viewBox="0 0 640 300" {...svgProps} role="img" aria-label="Multi-provider LLM gateway diagram">
      <Defs />
      <Node x={20} y={128} w={104} title="Request" delay={0} />
      <Pipe d="M 124 151 H 184" delay={0.15} />
      <Node x={184} y={122} w={120} h={58} title="Classifier" sub="cheap router" delay={0.2} />
      <Pipe d="M 304 151 H 360" delay={0.35} accent />
      <Node x={360} y={122} w={104} h={58} title="Gateway" sub="Portkey" accent delay={0.4} />

      <Pipe d="M 464 134 C 500 134 500 52 536 52" delay={0.55} />
      <Pipe d="M 464 151 H 536" delay={0.6} />
      <Pipe d="M 464 168 C 500 168 500 250 536 250" delay={0.65} />

      <Node x={536} y={34} w={92} h={36} title="Claude" sub="primary" delay={0.6} />
      <Node x={536} y={133} w={92} h={36} title="GPT" sub="fallback" delay={0.65} />
      <Node x={536} y={232} w={92} h={36} title="Gemini" sub="fallback" delay={0.7} />

      <text x="582" y="92" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="8" fill={FAINT}>↓ fallback</text>
      <line x1="20" y1="284" x2="628" y2="284" stroke="rgba(20,17,15,0.14)" />
      <text x="20" y="278" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.18em" fill={FAINT}>
        ROUTING · FALLBACK · QUALITY × LATENCY × COST
      </text>
    </svg>
  );
}

/* ---------- 3 · RAG / Retrieval stack ---------- */
export function RAGDiagram() {
  return (
    <svg viewBox="0 0 640 300" {...svgProps} role="img" aria-label="RAG retrieval stack diagram">
      <Defs />
      <Node x={20} y={128} w={96} title="Query" delay={0} />
      <Pipe d="M 116 151 H 168" delay={0.15} />
      <Node x={168} y={126} w={96} h={50} title="Embed" delay={0.2} />

      <Pipe d="M 264 140 C 300 140 300 56 336 56" delay={0.3} />
      <Pipe d="M 264 151 H 336" delay={0.35} />
      <Pipe d="M 264 162 C 300 162 300 246 336 246" delay={0.4} />

      <Node x={336} y={36} w={132} title="Qdrant" sub="vectors" delay={0.4} />
      <Node x={336} y={128} w={132} title="Neo4j" sub="home graph" delay={0.45} />
      <Node x={336} y={224} w={132} title="Typesense" sub="full-text" delay={0.5} />

      <Pipe d="M 468 56 C 510 56 510 138 540 138" delay={0.6} />
      <Pipe d="M 468 151 H 540" delay={0.6} />
      <Pipe d="M 468 244 C 510 244 510 164 540 164" delay={0.6} />
      <Node x={540} y={126} w={92} h={52} title="Rerank" sub="Cohere" accent delay={0.7} />

      <line x1="20" y1="284" x2="632" y2="284" stroke="rgba(20,17,15,0.14)" />
      <text x="20" y="278" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.18em" fill={FAINT}>
        HYBRID RETRIEVAL · RERANK · GROUNDED + CITED ANSWER
      </text>
    </svg>
  );
}

/* ---------- 4 · Event-driven payments ---------- */
export function PaymentsDiagram() {
  return (
    <svg viewBox="0 0 640 300" {...svgProps} role="img" aria-label="Event-driven payments platform diagram">
      <Defs />
      <Node x={20} y={128} w={108} title="API GW" sub="merchant" delay={0} />
      <Pipe d="M 128 151 H 184" delay={0.15} />
      <Node x={184} y={124} w={120} h={54} title="Services" sub="microservices" delay={0.2} />
      <Pipe d="M 304 151 H 360" delay={0.35} accent />
      <Node x={360} y={122} w={120} h={58} title="Event bus" sub="SNS · SQS · Kafka" accent delay={0.4} />

      <Pipe d="M 480 138 C 512 138 512 64 544 64" delay={0.55} />
      <Pipe d="M 480 164 C 512 164 512 238 544 238" delay={0.6} />
      <Node x={544} y={46} w={84} h={38} title="Ledger" delay={0.6} />
      <Node x={544} y={220} w={84} h={38} title="Recon" sub="real-time" delay={0.65} />

      <rect x="172" y="110" width="320" height="82" fill="none" stroke={ACCENT} strokeWidth="0.8" strokeDasharray="2 4" />
      <text x="178" y="106" fontFamily="'JetBrains Mono', monospace" fontSize="8" letterSpacing="0.12em" fill={ACCENT}>PCI-DSS BOUNDARY</text>

      <line x1="20" y1="284" x2="628" y2="284" stroke="rgba(20,17,15,0.14)" />
      <text x="20" y="278" fontFamily="'JetBrains Mono', monospace" fontSize="8.5" letterSpacing="0.18em" fill={FAINT}>
        EVENT-DRIVEN · 1.5K+ TPS · 99.95% SUCCESS
      </text>
    </svg>
  );
}
