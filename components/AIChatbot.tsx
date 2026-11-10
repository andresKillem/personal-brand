"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Bot, Sparkles } from "lucide-react";

interface Message {
  role: "bot" | "user";
  text: string;
}

export const AIChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: "bot", text: "Hi! I'm Andrés's AI Assistant. Ask me anything about his projects, experience, or tech stack." }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue;
    setMessages(prev => [...prev, { role: "user", text: userMessage }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      let response = "";
      const lowerMsg = userMessage.toLowerCase();

      if (lowerMsg.includes("who") || lowerMsg.includes("experience") || lowerMsg.includes("andres")) {
        response = "Andrés is a Sr Staff Software Engineer at Accordion, with 15 years building platforms and agent systems at companies like Deuna, Housecall Pro, and Kushki.";
      } else if (lowerMsg.includes("project") || lowerMsg.includes("pilasfi")) {
        response = "He developed PilasFi.com (a FinTech platform), Deuna's payment systems, and AI platforms at Housecall Pro.";
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire")) {
        response = "The best way to reach him is LinkedIn: linkedin.com/in/andres-munoz.";
      } else {
        response = "Andrés specializes in Cloud Architecture (AWS Pro Architect), DevOps, and SRE. Check his 'Selected Projects' for details!";
      }

      setMessages(prev => [...prev, { role: "bot", text: response }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Open the assistant"
        className="fixed bottom-6 right-6 z-50 bg-paper-2 text-accent border border-line-strong p-3 flex items-center justify-center hover:bg-accent hover:text-paper hover:border-accent transition-colors"
      >
        <Sparkles className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="frame fixed bottom-20 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] max-w-80 h-[450px] !bg-paper-2 shadow-2xl shadow-black/60 flex flex-col"
          >
            <div className="p-3 flex items-center justify-between border-b border-line">
              <span className="label flex items-center gap-2 text-ink"><Bot className="w-4 h-4" /> AI Assistant</span>
              <button onClick={() => setIsOpen(false)} aria-label="Close the assistant" className="text-ink-faint hover:text-ink"><X className="w-4 h-4" /></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-2.5 ${msg.role === "bot" ? "bg-paper-3 text-ink" : "bg-accent text-paper"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="label">AI is typing...</div>}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-line flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                aria-label="Your question"
                className="flex-1 bg-paper border border-line text-ink placeholder:text-ink-faint text-sm px-3 py-1.5 focus:outline-none focus:border-accent"
              />
              <button type="submit" aria-label="Send" className="bg-accent text-paper p-1.5 hover:bg-ink transition-colors"><Send className="w-4 h-4" /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
