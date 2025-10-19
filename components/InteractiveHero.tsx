"use client";

import { useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

export const InteractiveHero = () => {
  const [terminalInput, setTerminalInput] = useState("");
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    "$ Welcome to Andrés Muñoz DevOps Terminal",
    "$ ========================================",
    "$ 99.9% Uptime Achieved | 40% MTTR Reduction | 20% Cost Savings | 10+ Years Experience",
    "$ ========================================",
    "$ Type 'help' for available commands",
  ]);
  const [commandHistory, setCommandHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState<string[]>([]);

  const availableCommands = [
    "help", "about", "skills", "projects", "contact", "clear",
    "whoami", "pwd", "ls", "experience", "ai", "video"
  ];

  const handleTerminalCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const command = terminalInput.trim().toLowerCase();
    let output = "";

    if (command) {
      setCommandHistory([...commandHistory, command]);
      setHistoryIndex(-1);
    }

    switch (command) {
      case "help":
        output = `Available commands:
- about: Learn about my experience
- skills: View my technical stack
- experience: Navigate to experience section
- projects: See interactive case studies
- ai: Explore AI/ML implementations
- video: Watch my latest work
- contact: Get in touch
- whoami: Display current user
- pwd: Print working directory
- ls: List directory contents
- clear: Clear terminal`;
        break;
      case "about":
        output = "Principal DevOps Architect & SRE with 10+ years architecting cloud-native platforms for high-growth companies. Specialized in AWS multi-account architectures, Kubernetes at scale, and DevOps transformation.";
        break;
      case "skills":
        output = "AWS | Azure | Kubernetes | Terraform | ArgoCD | Istio | Datadog | Prometheus | Python | Go | CI/CD | GitOps | SRE | Docker | GitHub Actions";
        break;
      case "experience":
        output = "Navigating to experience section...";
        setTimeout(() => {
          const element = document.getElementById('experience');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
        break;
      case "projects":
        output = "Navigating to interactive projects with real metrics...";
        setTimeout(() => {
          const element = document.getElementById('projects');
          element?.scrollIntoView({ behavior: 'smooth' });
        }, 500);
        break;
      case "ai":
        output = "🤖 AI/ML + Infrastructure as Code: Implemented automated ML pipelines, model deployment with Kubernetes, and intelligent monitoring systems. Check projects section for details!";
        break;
      case "video":
        output = "📹 Opening latest video showcase...";
        setTimeout(() => {
          window.open("https://www.linkedin.com/feed/update/urn:li:activity:7255636517673398273/", "_blank");
        }, 500);
        break;
      case "contact":
        output = "📧 Email: andreco87@hotmail.com\n📱 Phone: (203) 918-1392\n💼 LinkedIn: linkedin.com/in/andres-munoz\n📍 Location: Stamford, CT (Remote available)";
        break;
      case "clear":
        setTerminalHistory([]);
        setTerminalInput("");
        setSuggestions([]);
        return;
      case "whoami":
        output = "andres@devops-architect ~ Principal DevOps Architect & SRE";
        break;
      case "pwd":
        output = "/home/andres/portfolio/interactive-showcase";
        break;
      case "ls":
        output = "experience/  projects/  skills/  ai-ml/  contact/  cv.pdf  videos/";
        break;
      default:
        output = `Command not found: ${command}. Type 'help' for available commands.`;
    }

    setTerminalHistory([...terminalHistory, `$ ${terminalInput}`, output]);
    setTerminalInput("");
    setSuggestions([]);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setTerminalInput(value);

    if (value) {
      const matches = availableCommands.filter(cmd => cmd.startsWith(value.toLowerCase()));
      setSuggestions(matches);
    } else {
      setSuggestions([]);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowUp") {
      e.preventDefault();
      if (commandHistory.length > 0) {
        const newIndex = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1);
        setHistoryIndex(newIndex);
        setTerminalInput(commandHistory[newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex !== -1) {
        const newIndex = Math.min(commandHistory.length - 1, historyIndex + 1);
        if (newIndex === commandHistory.length - 1 && historyIndex === newIndex) {
          setHistoryIndex(-1);
          setTerminalInput("");
        } else {
          setHistoryIndex(newIndex);
          setTerminalInput(commandHistory[newIndex]);
        }
      }
    } else if (e.key === "Tab" && suggestions.length > 0) {
      e.preventDefault();
      setTerminalInput(suggestions[0]);
      setSuggestions([]);
    }
  };

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900/80 via-blue-900/70 to-black/80">
      {/* Content - Neural network visible in background */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            className="inline-block mb-6"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <span className="bg-green-500/20 text-green-300 px-6 py-3 rounded-full text-sm font-bold border-2 border-green-500/30 animate-pulse shadow-lg shadow-green-500/50">
              ✓ AVAILABLE FOR NEW OPPORTUNITIES
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500">
            Solutions Architect, DevOps & SRE
          </h1>

          <motion.h2
            className="text-3xl md:text-4xl text-cyan-300 mb-4 font-bold"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            Andrés Muñoz
          </motion.h2>

          <motion.p
            className="text-xl text-gray-300 max-w-3xl mx-auto mb-12 leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
          >
            Transforming infrastructure chaos into automated elegance.
            10+ years building platforms that scale to <strong className="text-cyan-400">millions of users</strong>.
          </motion.p>
        </motion.div>

        {/* Interactive Terminal */}
        <div className="max-w-5xl mx-auto bg-gray-900/90 backdrop-blur-lg rounded-xl border border-cyan-500/30 shadow-2xl shadow-cyan-500/20 overflow-hidden">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 px-4 py-2 flex items-center gap-2 border-b border-cyan-500/20">
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
            <span className="text-gray-400 text-sm ml-4">devops-terminal</span>
          </div>

          <div className="p-6 h-96 overflow-y-auto font-mono text-sm relative">
            {terminalHistory.map((line, idx) => (
              <div key={idx} className={line.startsWith('$') ? 'text-green-400' : 'text-gray-300'} style={{ whiteSpace: 'pre-wrap' }}>
                {line}
              </div>
            ))}

            <form onSubmit={handleTerminalCommand} className="relative mt-2">
              <div className="flex items-center">
                <span className="text-green-400 mr-2">$</span>
                <input
                  type="text"
                  value={terminalInput}
                  onChange={handleInputChange}
                  onKeyDown={handleKeyDown}
                  className="flex-1 bg-transparent text-cyan-300 outline-none font-mono"
                  placeholder="Type 'help' for commands..."
                  autoFocus
                />
              </div>

              {/* Command suggestions */}
              {suggestions.length > 0 && (
                <div className="mt-2 bg-gray-800/90 border border-cyan-500/30 rounded-lg p-2 absolute bottom-full left-0 right-0 mb-2 z-10">
                  <div className="text-xs text-gray-400 mb-1">Press Tab to autocomplete:</div>
                  <div className="flex flex-wrap gap-2">
                    {suggestions.map((cmd, idx) => (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => {
                          setTerminalInput(cmd);
                          setSuggestions([]);
                        }}
                        className="bg-cyan-500/20 hover:bg-cyan-500/30 text-cyan-300 px-2 py-1 rounded text-sm transition-colors"
                      >
                        {cmd}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Quick commands hint */}
              {!terminalInput && (
                <div className="mt-2 flex flex-wrap gap-2">
                  {["help", "projects", "ai", "video"].map((cmd, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setTerminalInput(cmd);
                        handleInputChange({ target: { value: cmd } } as React.ChangeEvent<HTMLInputElement>);
                      }}
                      className="bg-gray-700/50 hover:bg-gray-700 text-gray-400 hover:text-cyan-300 px-2 py-1 rounded text-xs transition-all"
                    >
                      {cmd}
                    </button>
                  ))}
                </div>
              )}
            </form>
          </div>
        </div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center mt-12"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3 }}
        >
          <button
            onClick={scrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Explore Interactive Projects</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>

          <a
            href="/cv/Principal_DevOps_Architect_.pdf"
            download
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border-2 border-cyan-500/50 text-cyan-300 font-bold rounded-lg hover:bg-white/20 transition-all duration-300 hover:scale-105"
          >
            Download CV
          </a>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2"></div>
        </div>
      </motion.div>
    </section>
  );
};
