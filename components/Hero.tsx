"use client";

import { ArrowDown } from "lucide-react";

export const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-6xl mx-auto text-center relative z-10">
        <div className="inline-block mb-6 animate-pulse">
          <span className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm font-semibold border border-green-500/30">
            ✓ Available for New Opportunities
          </span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-200 via-white to-indigo-200 animate-fade-in">
          Principal DevOps Architect
        </h1>

        <p className="text-2xl md:text-3xl text-blue-100 mb-4 font-semibold">
          Andrés Muñoz
        </p>

        <p className="text-xl text-gray-300 max-w-4xl mx-auto mb-12 leading-relaxed">
          <strong>10+ years</strong> architecting cloud-native platforms for high-growth companies.
          Specialized in <strong>AWS multi-account architectures</strong>, <strong>Kubernetes at scale</strong>,
          and <strong>DevOps transformation</strong> for FinTech & SaaS.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-blue-400 mb-2">10+</div>
            <div className="text-gray-300 text-sm">Years Experience</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-green-400 mb-2">99.9%</div>
            <div className="text-gray-300 text-sm">System Uptime</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-purple-400 mb-2">40%</div>
            <div className="text-gray-300 text-sm">MTTR Reduction</div>
          </div>
          <div className="bg-white/5 backdrop-blur-sm p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-all duration-300 hover:scale-105">
            <div className="text-4xl font-bold text-orange-400 mb-2">20%</div>
            <div className="text-gray-300 text-sm">Cost Savings</div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <button
            onClick={scrollToContact}
            className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-4 px-10 rounded-lg font-semibold text-lg hover:from-blue-600 hover:to-indigo-600 transition-all duration-300 transform hover:scale-105 shadow-2xl"
          >
            Let's Connect
          </button>
          <a
            href="https://www.linkedin.com/in/andres-munoz"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white py-4 px-10 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            View LinkedIn
          </a>
          <a
            href="/cv/Principal_DevOps_Architect_.pdf"
            download
            className="bg-white/10 backdrop-blur-sm border-2 border-white/30 text-white py-4 px-10 rounded-lg font-semibold text-lg hover:bg-white/20 transition-all duration-300"
          >
            Download CV
          </a>
        </div>

        <div className="flex flex-wrap justify-center gap-3 text-sm text-gray-400">
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">AWS Certified Professional</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">Azure Solutions Architect</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">CKA Certified</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">PhD in Computer Science</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">Authorized to work in U.S.</span>
          <span className="bg-white/5 px-4 py-2 rounded-lg border border-white/10">Remote • Stamford, CT</span>
        </div>
      </div>
    </section>
  );
};
