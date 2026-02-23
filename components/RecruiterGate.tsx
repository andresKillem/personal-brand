"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Lock, Mail, ArrowRight, ShieldCheck, FileText } from "lucide-react";

export const RecruiterGate = ({ children }: { children: React.ReactNode }) => {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleUnlock = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setIsLoading(true);
    // Simulate auth/capture
    setTimeout(() => {
      setIsUnlocked(true);
      setIsLoading(false);
    }, 1500);
  };

  if (isUnlocked) return <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>{children}</motion.div>;

  return (
    <div className="relative group">
      {/* Blurred Preview of content */}
      <div className="filter blur-md opacity-40 pointer-events-none select-none">
        {children}
      </div>

      {/* Lock Overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-6 z-10">
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          className="max-w-md w-full bg-white border-2 border-blue-100 rounded-3xl p-8 shadow-2xl text-center"
        >
          <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center mx-auto mb-6 text-blue-600">
            <Lock className="w-8 h-8" />
          </div>

          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-2">Recruiter Access</h3>
          <p className="text-gray-600 mb-8 text-sm leading-relaxed">
            Enter your professional email to unlock detailed <strong>Architecture Diagrams</strong>, 
            <strong>Metric Deep-dives</strong>, and my <strong>Confidential Portfolio</strong>.
          </p>

          <form onSubmit={handleUnlock} className="space-y-4">
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="email"
                required
                placeholder="work-email@company.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
              />
            </div>
            <button
              disabled={isLoading}
              className="w-full bg-gray-900 text-white py-3 rounded-xl font-bold flex items-center justify-center gap-2 hover:bg-blue-600 transition-all disabled:opacity-50"
            >
              {isLoading ? "Unlocking..." : "Unlock Confidential Data"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="mt-8 pt-6 border-t border-gray-100 flex justify-center gap-6">
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <ShieldCheck className="w-3.5 h-3.5" /> Secure Access
            </div>
            <div className="flex items-center gap-1.5 text-[10px] font-bold text-gray-400 uppercase tracking-wider">
              <FileText className="w-3.5 h-3.5" /> NDA Compliant
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
