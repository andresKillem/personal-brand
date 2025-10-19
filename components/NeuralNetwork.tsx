"use client";

import { useEffect, useRef, useState } from "react";

interface Neuron {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  connections: number[];
  activity: number; // 0 to 1, represents "thinking" intensity
  pulsePhase: number;
}

interface Signal {
  from: number;
  to: number;
  progress: number;
  speed: number;
}

export const NeuralNetwork = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const neuronsRef = useRef<Neuron[]>([]);
  const signalsRef = useRef<Signal[]>([]);
  const animationFrameRef = useRef<number>();
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size
    const updateCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    updateCanvasSize();
    window.addEventListener("resize", updateCanvasSize);

    // Initialize neurons
    const neuronCount = Math.floor((canvas.width * canvas.height) / 15000);
    neuronsRef.current = Array.from({ length: neuronCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      radius: 2 + Math.random() * 3,
      connections: [],
      activity: Math.random(),
      pulsePhase: Math.random() * Math.PI * 2,
    }));

    // Create connections
    const maxDistance = 150;
    neuronsRef.current.forEach((neuron, i) => {
      neuronsRef.current.forEach((other, j) => {
        if (i !== j) {
          const dx = neuron.x - other.x;
          const dy = neuron.y - other.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < maxDistance && neuron.connections.length < 5) {
            neuron.connections.push(j);
          }
        }
      });
    });

    // Handle mouse movement
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);

    let lastSignalTime = Date.now();

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;

      // Dark background with trails
      ctx.fillStyle = "rgba(0, 0, 20, 0.1)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      const neurons = neuronsRef.current;
      const signals = signalsRef.current;
      const currentTime = Date.now();

      // Update neurons
      neurons.forEach((neuron, i) => {
        // Gentle movement
        neuron.x += neuron.vx;
        neuron.y += neuron.vy;

        // Bounce off edges
        if (neuron.x < 0 || neuron.x > canvas.width) neuron.vx *= -1;
        if (neuron.y < 0 || neuron.y > canvas.height) neuron.vy *= -1;

        // Mouse interaction - neurons get excited near cursor
        const dx = mousePos.x - neuron.x;
        const dy = mousePos.y - neuron.y;
        const distToMouse = Math.sqrt(dx * dx + dy * dy);
        if (distToMouse < 200) {
          neuron.activity = Math.min(1, neuron.activity + 0.1);
        } else {
          neuron.activity = Math.max(0, neuron.activity - 0.02);
        }

        // Update pulse phase
        neuron.pulsePhase += 0.05 + neuron.activity * 0.1;

        // Random activation
        if (Math.random() < 0.002) {
          neuron.activity = Math.min(1, neuron.activity + 0.5);
        }

        // Draw connections
        neuron.connections.forEach((connectedIndex) => {
          const connected = neurons[connectedIndex];
          const dx = connected.x - neuron.x;
          const dy = connected.y - neuron.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const opacity = Math.max(0, 1 - distance / 150);

          // Connection line
          const gradient = ctx.createLinearGradient(
            neuron.x, neuron.y,
            connected.x, connected.y
          );

          const activityColor1 = Math.floor(neuron.activity * 200);
          const activityColor2 = Math.floor(connected.activity * 200);

          gradient.addColorStop(0, `rgba(6, 182, 212, ${opacity * 0.3 + neuron.activity * 0.4})`);
          gradient.addColorStop(0.5, `rgba(139, 92, 246, ${opacity * 0.2})`);
          gradient.addColorStop(1, `rgba(6, 182, 212, ${opacity * 0.3 + connected.activity * 0.4})`);

          ctx.strokeStyle = gradient;
          ctx.lineWidth = 0.5 + neuron.activity * 1.5;
          ctx.beginPath();
          ctx.moveTo(neuron.x, neuron.y);
          ctx.lineTo(connected.x, connected.y);
          ctx.stroke();
        });

        // Draw neuron
        const pulseSize = Math.sin(neuron.pulsePhase) * 0.5 + 0.5;
        const size = neuron.radius + neuron.activity * 4 + pulseSize * 2;

        // Outer glow
        const glow = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, size * 3
        );
        glow.addColorStop(0, `rgba(6, 182, 212, ${neuron.activity * 0.8})`);
        glow.addColorStop(0.5, `rgba(139, 92, 246, ${neuron.activity * 0.4})`);
        glow.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.fillStyle = glow;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size * 3, 0, Math.PI * 2);
        ctx.fill();

        // Core
        const coreGradient = ctx.createRadialGradient(
          neuron.x, neuron.y, 0,
          neuron.x, neuron.y, size
        );

        if (neuron.activity > 0.7) {
          coreGradient.addColorStop(0, "#ffffff");
          coreGradient.addColorStop(0.3, "#06B6D4");
          coreGradient.addColorStop(1, "#8B5CF6");
        } else {
          coreGradient.addColorStop(0, "#06B6D4");
          coreGradient.addColorStop(1, "#8B5CF6");
        }

        ctx.fillStyle = coreGradient;
        ctx.beginPath();
        ctx.arc(neuron.x, neuron.y, size, 0, Math.PI * 2);
        ctx.fill();

        // Energy ring for active neurons
        if (neuron.activity > 0.5) {
          ctx.strokeStyle = `rgba(6, 182, 212, ${neuron.activity})`;
          ctx.lineWidth = 2;
          ctx.beginPath();
          ctx.arc(neuron.x, neuron.y, size * 2 * pulseSize, 0, Math.PI * 2);
          ctx.stroke();
        }
      });

      // Generate new signals periodically
      if (currentTime - lastSignalTime > 100 && Math.random() < 0.3) {
        const fromIndex = Math.floor(Math.random() * neurons.length);
        const from = neurons[fromIndex];
        if (from.connections.length > 0) {
          const toIndex = from.connections[Math.floor(Math.random() * from.connections.length)];
          signals.push({
            from: fromIndex,
            to: toIndex,
            progress: 0,
            speed: 0.01 + Math.random() * 0.02,
          });
          lastSignalTime = currentTime;
        }
      }

      // Update and draw signals
      for (let i = signals.length - 1; i >= 0; i--) {
        const signal = signals[i];
        const from = neurons[signal.from];
        const to = neurons[signal.to];

        signal.progress += signal.speed;

        if (signal.progress >= 1) {
          // Signal reached destination - activate target neuron
          to.activity = Math.min(1, to.activity + 0.5);
          signals.splice(i, 1);
          continue;
        }

        // Draw signal
        const x = from.x + (to.x - from.x) * signal.progress;
        const y = from.y + (to.y - from.y) * signal.progress;

        const signalGradient = ctx.createRadialGradient(x, y, 0, x, y, 8);
        signalGradient.addColorStop(0, "rgba(255, 255, 255, 1)");
        signalGradient.addColorStop(0.3, "rgba(6, 182, 212, 0.8)");
        signalGradient.addColorStop(1, "rgba(6, 182, 212, 0)");

        ctx.fillStyle = signalGradient;
        ctx.beginPath();
        ctx.arc(x, y, 8, 0, Math.PI * 2);
        ctx.fill();

        // Signal trail
        ctx.strokeStyle = `rgba(6, 182, 212, 0.5)`;
        ctx.lineWidth = 2;
        ctx.beginPath();
        const trailLength = 0.1;
        const trailStart = Math.max(0, signal.progress - trailLength);
        const startX = from.x + (to.x - from.x) * trailStart;
        const startY = from.y + (to.y - from.y) * trailStart;
        ctx.moveTo(startX, startY);
        ctx.lineTo(x, y);
        ctx.stroke();
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      window.removeEventListener("resize", updateCanvasSize);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [mousePos]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 0 }}
    />
  );
};
