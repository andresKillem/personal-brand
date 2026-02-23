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
        response = "Andrés is a Solutions Architect and DevOps expert with 10+ years experience at companies like Deuna, Housecall Pro, and Kushki.";
      } else if (lowerMsg.includes("project") || lowerMsg.includes("pilasfi")) {
        response = "He developed PilasFi.com (a FinTech platform), Deuna's payment systems, and AI platforms at Housecall Pro.";
      } else if (lowerMsg.includes("contact") || lowerMsg.includes("email") || lowerMsg.includes("hire")) {
        response = "Contact him at andreco87@hotmail.com or via LinkedIn (linkedin.com/in/andres-munoz).";
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
        className="fixed bottom-6 right-6 z-50 bg-gray-900 text-white p-3 rounded-full shadow-lg flex items-center justify-center hover:scale-110 transition-transform"
      >
        <Sparkles className="w-5 h-5" />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-20 right-6 z-50 w-80 h-[450px] bg-white border border-gray-200 rounded-lg shadow-2xl flex flex-col"
          >
            <div className="bg-gray-50 p-3 flex items-center justify-between border-b border-gray-200">
              <span className="text-sm font-semibold flex items-center gap-2 text-gray-800"><Bot className="w-4 h-4" /> AI Assistant</span>
              <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600"><X className="w-4 h-4" /></button>
            </div>

            <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 text-sm">
              {messages.map((msg, idx) => (
                <div key={idx} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] p-2.5 rounded-lg ${msg.role === "bot" ? "bg-gray-100 text-gray-800" : "bg-blue-600 text-white"}`}>
                    {msg.text}
                  </div>
                </div>
              ))}
              {isTyping && <div className="text-gray-400 text-xs italic">AI is typing...</div>}
            </div>

            <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="p-3 border-t border-gray-200 flex gap-2">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask me anything..."
                className="flex-1 bg-gray-50 border border-gray-200 text-sm rounded-md px-3 py-1.5 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
              <button type="submit" className="bg-blue-600 text-white p-1.5 rounded-md hover:bg-blue-700"><Send className="w-4 h-4" /></button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
