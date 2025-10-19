"use client";

import { useEffect, useRef } from "react";

interface Agent {
  x: number;
  y: number;
  vx: number;
  vy: number;
  type: "llm" | "agent" | "model";
  label: string;
  size: number;
  thinkingPhase: number;
  color: string;
}

export const AIAgentsEffect = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const agentsRef = useRef<Agent[]>([]);
  const animationFrameRef = useRef<number | undefined>(undefined);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // AI Agent types with labels
    const agentTypes = [
      { type: "llm" as const, labels: ["GPT-4", "Claude", "Gemini", "LLaMA", "PaLM"], color: "#10B981" },
      { type: "agent" as const, labels: ["AutoGPT", "BabyAGI", "Agent-K", "ReAct", "CoT"], color: "#3B82F6" },
      { type: "model" as const, labels: ["BERT", "T5", "Whisper", "DALL-E", "Stable-D"], color: "#A855F7" },
    ];

    // Initialize agents
    const agentCount = 25;
    agentsRef.current = Array.from({ length: agentCount }, () => {
      const agentType = agentTypes[Math.floor(Math.random() * agentTypes.length)];
      const label = agentType.labels[Math.floor(Math.random() * agentType.labels.length)];

      return {
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        type: agentType.type,
        label,
        size: 20 + Math.random() * 15,
        thinkingPhase: Math.random() * Math.PI * 2,
        color: agentType.color,
      };
    });

    const animate = () => {
      if (!ctx || !canvas) return;

      // Semi-transparent background for trail effect
      ctx.fillStyle = "rgba(0, 0, 20, 0.15)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const agents = agentsRef.current;

      agents.forEach((agent, i) => {
        // Update position
        agent.x += agent.vx;
        agent.y += agent.vy;

        // Bounce off edges
        if (agent.x < 0 || agent.x > canvas.width) agent.vx *= -1;
        if (agent.y < 0 || agent.y > canvas.height) agent.vy *= -1;

        // Update thinking phase
        agent.thinkingPhase += 0.03;

        // Draw connections to nearby agents
        agents.forEach((other, j) => {
          if (i >= j) return;

          const dx = other.x - agent.x;
          const dy = other.y - agent.y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = (1 - distance / 200) * 0.2;

            const gradient = ctx.createLinearGradient(
              agent.x, agent.y,
              other.x, other.y
            );
            gradient.addColorStop(0, `${agent.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);
            gradient.addColorStop(1, `${other.color}${Math.floor(opacity * 255).toString(16).padStart(2, '0')}`);

            ctx.strokeStyle = gradient;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(agent.x, agent.y);
            ctx.lineTo(other.x, other.y);
            ctx.stroke();

            // Data packets traveling between agents
            if (Math.random() < 0.02) {
              const progress = Math.random();
              const px = agent.x + dx * progress;
              const py = agent.y + dy * progress;

              ctx.fillStyle = agent.color;
              ctx.beginPath();
              ctx.arc(px, py, 2, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        });

        // Draw agent
        const pulse = Math.sin(agent.thinkingPhase) * 0.3 + 0.7;
        const currentSize = agent.size * pulse;

        // Outer glow
        const outerGlow = ctx.createRadialGradient(
          agent.x, agent.y, 0,
          agent.x, agent.y, currentSize * 2
        );
        outerGlow.addColorStop(0, `${agent.color}40`);
        outerGlow.addColorStop(1, `${agent.color}00`);

        ctx.fillStyle = outerGlow;
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, currentSize * 2, 0, Math.PI * 2);
        ctx.fill();

        // Agent circle
        const agentGradient = ctx.createRadialGradient(
          agent.x, agent.y, 0,
          agent.x, agent.y, currentSize
        );
        agentGradient.addColorStop(0, agent.color);
        agentGradient.addColorStop(1, `${agent.color}80`);

        ctx.fillStyle = agentGradient;
        ctx.beginPath();
        ctx.arc(agent.x, agent.y, currentSize, 0, Math.PI * 2);
        ctx.fill();

        // Agent icon based on type
        ctx.fillStyle = "#000000";
        ctx.font = `${currentSize * 0.8}px Arial`;
        ctx.textAlign = "center";
        ctx.textBaseline = "middle";

        const icon = agent.type === "llm" ? "🤖" : agent.type === "agent" ? "🎯" : "⚙️";
        ctx.fillText(icon, agent.x, agent.y);

        // Agent label (show on larger agents)
        if (agent.size > 25) {
          ctx.fillStyle = agent.color;
          ctx.font = "10px monospace";
          ctx.textAlign = "center";
          ctx.fillText(agent.label, agent.x, agent.y + currentSize + 12);
        }

        // Thinking particles around active agents
        if (Math.sin(agent.thinkingPhase) > 0.5) {
          for (let p = 0; p < 3; p++) {
            const angle = agent.thinkingPhase + (p * Math.PI * 2 / 3);
            const particleDistance = currentSize + 15;
            const px = agent.x + Math.cos(angle) * particleDistance;
            const py = agent.y + Math.sin(angle) * particleDistance;

            ctx.fillStyle = `${agent.color}80`;
            ctx.beginPath();
            ctx.arc(px, py, 2, 0, Math.PI * 2);
            ctx.fill();
          }
        }

        // Processing indicator for agents
        if (agent.type === "agent" && Math.random() < 0.1) {
          ctx.strokeStyle = agent.color;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(agent.x, agent.y, currentSize * 1.5, 0, Math.PI * 2 * pulse);
          ctx.stroke();
        }
      });

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
    />
  );
};
