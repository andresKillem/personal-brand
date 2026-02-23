import { AIChatbot } from "@/components/AIChatbot";
import { ProjectBentoGrid } from "@/components/ProjectBentoGrid";
import { RecruiterGate } from "@/components/RecruiterGate";
import { 
  Shield, Zap, Target, BarChart3, ChevronRight, Lock, 
  ExternalLink, Github, Linkedin, ArrowRight 
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-sm font-bold text-gray-900 tracking-tighter uppercase">
              <a href="#" className="hover:text-blue-600 transition-colors">Andrés Muñoz</a>
            </div>
            <div className="flex gap-6 text-xs font-bold uppercase tracking-widest">
              <a href="#projects" className="text-gray-500 hover:text-gray-900 transition-colors">Projects</a>
              <a href="#experience" className="text-gray-500 hover:text-gray-900 transition-colors">Experience</a>
              <a href="#writing" className="text-gray-500 hover:text-gray-900 transition-colors">Writing</a>
              <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition-colors">Connect</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 lg:gap-24">

          {/* Main Content Column */}
          <main className="lg:col-span-2">

            {/* Hero Section */}
            <section className="mb-24">
              <div className="inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-8 border border-blue-100 shadow-sm shadow-blue-50">
                <Shield className="w-3 h-3" /> Available for Principal Architect Roles
              </div>
              <h1 className="text-6xl lg:text-8xl font-serif font-bold tracking-tight text-gray-900 mb-8 leading-[0.9]">
                Architecting <br/><span className="text-blue-600 italic">Elegance</span> in Chaos.
              </h1>
              <p className="text-2xl text-gray-500 font-medium mb-10 leading-relaxed max-w-2xl">
                Expert Solutions Architect, DevOps & SRE. Specialized in AWS multi-account architectures and high-scale FinTech systems.
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
                {[
                  { label: "Uptime", value: "99.99%", icon: <Zap className="w-4 h-4 text-orange-500"/> },
                  { label: "Reduction", value: "40% MTTR", icon: <Target className="w-4 h-4 text-green-500"/> },
                  { label: "Scale", value: "1.5K TPS", icon: <BarChart3 className="w-4 h-4 text-blue-500"/> },
                  { label: "Cost", value: "-20%", icon: <Zap className="w-4 h-4 text-cyan-500"/> }
                ].map((stat, i) => (
                  <div key={i} className="bg-gray-50 p-4 rounded-2xl border border-gray-100">
                    <div className="flex items-center gap-2 mb-1">
                      {stat.icon}
                      <span className="text-xs font-bold text-gray-400 uppercase tracking-wider">{stat.label}</span>
                    </div>
                    <div className="text-xl font-bold text-gray-900">{stat.value}</div>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
                  className="px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-blue-600 transition-all flex items-center gap-2 shadow-xl shadow-gray-200"
                >
                  View Case Studies <ChevronRight className="w-4 h-4" />
                </button>
                <a 
                  href="https://www.linkedin.com/in/andres-munoz/"
                  target="_blank"
                  className="px-8 py-4 bg-white border border-gray-200 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all flex items-center gap-2"
                >
                  LinkedIn <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </section>

            <div className="border-t border-gray-100 my-24"></div>

            {/* Trusted By / Clients */}
            <section className="mb-24 opacity-60 hover:opacity-100 transition-opacity">
              <h2 className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-10 text-center">Impactful contributions for world-class organizations</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center filter grayscale contrast-125">
                <img src="/logos/deuna-logo.png" alt="Deuna" className="h-8 md:h-10 object-contain" />
                <img src="/logos/housecallpro-logo.png" alt="Housecall Pro" className="h-8 md:h-10 object-contain" />
                <img src="/logos/kushki-logo.png" alt="Kushki" className="h-8 md:h-10 object-contain" />
                <img src="/logos/telefonica-logo.png" alt="Telefonica" className="h-8 md:h-10 object-contain" />
              </div>
            </section>

            {/* Projects */}
            <section id="projects" className="mb-24 scroll-mt-24">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <h2 className="text-4xl font-serif font-bold text-gray-900 mb-2">Selected Case Studies</h2>
                  <p className="text-gray-500">Documenting transformations and high-impact architectures.</p>
                </div>
                <div className="hidden md:flex items-center gap-2 text-xs font-bold text-blue-600 uppercase tracking-wider">
                  <Lock className="w-3.5 h-3.5" /> Confidential Data Available
                </div>
              </div>

              <RecruiterGate>
                <ProjectBentoGrid />
              </RecruiterGate>
            </section>

            <div className="border-t border-gray-100 my-24"></div>

            {/* Current Work */}
            <section id="experience" className="mb-24">
              <div className="flex items-center gap-4 mb-8">
                <h2 className="text-3xl font-serif font-bold text-gray-900">Professional Path</h2>
                <div className="h-px flex-1 bg-gray-100"></div>
              </div>

              <div className="space-y-12">
                <div className="relative pl-8 border-l-2 border-gray-100 group">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-blue-600 transition-all group-hover:scale-125"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Expert Solutions Architect @ Deuna</h3>
                  <p className="text-blue-600 font-bold text-[10px] uppercase tracking-widest mb-4">2023 - Present • Remote</p>
                  <ul className="space-y-3 text-gray-600 leading-relaxed text-sm">
                    <li>• Design AWS-based microservices payment systems for FinTech compliance</li>
                    <li>• Architect mobile payment platforms prioritizing security and user experience</li>
                    <li>• Implement robust security frameworks for sensitive payment data protection</li>
                    <li>• Optimize performance through continuous monitoring and system integration</li>
                  </ul>
                </div>

                <div className="relative pl-8 border-l-2 border-gray-100 group">
                  <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-white border-4 border-gray-200 group-hover:border-blue-300 transition-all group-hover:scale-125"></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">Senior DevOps Engineer @ Housecall Pro</h3>
                  <p className="text-gray-400 font-bold text-[10px] uppercase tracking-widest mb-4">2021 - 2025 • Remote</p>
                  <ul className="space-y-3 text-gray-600 leading-relaxed text-sm">
                    <li>• Led enterprise DevOps transformation for SaaS platform serving millions of users</li>
                    <li>• Architected multi-cloud solutions (AWS/Azure) with global RDS replication</li>
                    <li>• Partnered with C-Level leadership to reduce annual cloud spend by 20%</li>
                  </ul>
                </div>
              </div>
            </section>


            <div className="border-t border-gray-100 my-24"></div>

            {/* Strategy & Skills */}
            <section id="skills" className="mb-24">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Systemic Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { title: "Cloud & Platform", desc: "AWS Control Tower, Multi-Subscription Azure, Kubernetes at scale.", icon: "☁️" },
                  { title: "DevOps & CI/CD", desc: "Terraform, GitOps (ArgoCD), GitHub Actions, Infrastructure as Code.", icon: "🚀" },
                  { title: "Zero-Trust Security", desc: "IAM Hardening, FinTech Compliance, Network Isolation.", icon: "🔒" },
                  { title: "Observability", desc: "Datadog, Prometheus, Distributed Tracing, SRE Practices.", icon: "📊" }
                ].map((skill, i) => (
                  <div key={i} className="bg-gray-50 p-6 rounded-3xl border border-gray-100 flex gap-4 hover:border-blue-200 transition-colors">
                    <div className="text-2xl">{skill.icon}</div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">{skill.title}</h4>
                      <p className="text-xs text-gray-500 leading-relaxed">{skill.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <div className="border-t border-gray-100 my-24"></div>

            {/* Writing */}
            <section id="writing" className="mb-24">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-12">Technical Insights</h2>
              <div className="space-y-8">
                <div className="bg-orange-50/50 rounded-[2rem] p-10 border border-orange-100">
                  <h3 className="text-2xl font-bold text-orange-900 mb-4">The Productivity Paradox of AI</h3>
                  <p className="text-gray-700 leading-relaxed mb-6">
                    &quot;Are we entering a productivity boom that elevates our capabilities, or a bubble that erodes our fundamental engineering muscle memory?&quot;
                  </p>
                  <a href="https://medium.com/@andresmunozb" target="_blank" className="inline-flex items-center gap-2 text-orange-700 font-bold text-sm uppercase tracking-wider">
                    Read Thesis on Medium <ArrowRight className="w-4 h-4" />
                  </a>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <a href="https://www.encora.com/insights/diving-deep-into-devsecops-key-considerations" target="_blank" className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">Diving Deep into DevSecOps</h4>
                    <p className="text-xs text-gray-500">Key considerations for implementing DevSecOps at scale.</p>
                  </a>
                  <a href="https://medium.com/@andreco87/diving-deep-into-sre-responsibilities-sre-vs-devops-41f97f8cd597" target="_blank" className="p-6 bg-gray-50 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors group">
                    <h4 className="font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">SRE vs DevOps</h4>
                    <p className="text-xs text-gray-500">Understanding the core responsibilities and overlaps.</p>
                  </a>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-100 my-24"></div>

            {/* Final CTA */}
            <section className="bg-blue-600 rounded-[3rem] p-12 lg:p-20 text-center text-white relative overflow-hidden shadow-2xl shadow-blue-200">
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500 rounded-full blur-3xl opacity-50 -mr-32 -mt-32"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-400 rounded-full blur-3xl opacity-30 -ml-32 -mb-32"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl lg:text-6xl font-serif font-bold mb-6">Ready to scale?</h2>
                <p className="text-xl text-blue-100 mb-12 max-w-xl mx-auto opacity-90">
                  I&apos;m currently open to new challenges at the Principal or Architect level. Let&apos;s build something resilient together.
                </p>
                <div className="flex flex-wrap justify-center gap-4">
                  <a 
                    href="https://www.linkedin.com/in/andres-munoz/" 
                    target="_blank"
                    className="px-10 py-5 bg-white text-blue-600 font-bold rounded-2xl hover:scale-105 transition-all shadow-xl shadow-blue-900/20"
                  >
                    Schedule a Discovery Call
                  </a>
                  <a 
                    href="mailto:andreco87@hotmail.com" 
                    className="px-10 py-5 bg-blue-700 text-white font-bold rounded-2xl hover:bg-blue-800 transition-all border border-blue-500"
                  >
                    Send Direct Email
                  </a>
                </div>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">

            {/* Author Card */}
            <div className="bg-white p-8 rounded-3xl border-2 border-gray-100 shadow-sm">
              <img src="/profile.jpg" alt="Andrés Muñoz" className="w-20 h-20 rounded-2xl object-cover mb-6 grayscale hover:grayscale-0 transition-all" />
              <p className="text-sm font-medium text-gray-900 mb-4 leading-relaxed">
                Hi, I&apos;m <span className="font-bold">Andrés</span>. I transform infrastructure chaos into automated elegance for high-growth tech companies.
              </p>
              <div className="flex items-center gap-4 pt-4 border-t border-gray-50">
                <a href="https://github.com/andresKillem" target="_blank" className="text-gray-400 hover:text-gray-900"><Github className="w-5 h-5" /></a>
                <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" className="text-gray-400 hover:text-blue-600"><Linkedin className="w-5 h-5" /></a>
              </div>
            </div>


            {/* Recommended Reading */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4">Recommended Reading</h3>

              {/* Book 1 - An Elegant Puzzle */}
              <div className="mb-6 pb-6 border-b border-gray-200">
                <a
                  href="https://lethain.com/elegant-puzzle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-blue-100 to-blue-200 rounded flex items-center justify-center text-2xl">
                        📘
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-700 group-hover:text-blue-900 mb-1">
                          An Elegant Puzzle
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">Will Larson</p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Systems of Engineering Management - Essential reading for technical leaders navigating organizational complexity.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>

              {/* Book 2 - Staff Engineer */}
              <div>
                <a
                  href="https://lethain.com/staff-engineer/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block group"
                >
                  <div className="bg-gray-50 border border-gray-200 rounded p-4 hover:bg-gray-100 transition-colors">
                    <div className="flex gap-3">
                      <div className="flex-shrink-0 w-16 h-20 bg-gradient-to-br from-purple-100 to-purple-200 rounded flex items-center justify-center text-2xl">
                        📗
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-blue-700 group-hover:text-blue-900 mb-1">
                          Staff Engineer
                        </h4>
                        <p className="text-xs text-gray-600 mb-2">Will Larson</p>
                        <p className="text-xs text-gray-700 leading-relaxed">
                          Leadership beyond the management track - Insights into the Staff+ engineer career path and technical leadership.
                        </p>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>

            {/* Technical Books */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Technical Resources</h3>
              <div className="space-y-3">
                <a
                  href="https://sre.google/books/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="text-sm font-medium text-blue-700">Site Reliability Engineering</div>
                  <div className="text-xs text-gray-600">Google SRE Book</div>
                </a>
                <a
                  href="https://www.oreilly.com/library/view/terraform-up/9781492046899/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="text-sm font-medium text-blue-700">Terraform: Up & Running</div>
                  <div className="text-xs text-gray-600">Yevgeniy Brikman</div>
                </a>
                <a
                  href="https://www.oreilly.com/library/view/kubernetes-up-and/9781492046523/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block hover:bg-gray-50 p-2 rounded transition-colors"
                >
                  <div className="text-sm font-medium text-blue-700">Kubernetes: Up and Running</div>
                  <div className="text-xs text-gray-600">Kelsey Hightower</div>
                </a>
              </div>
            </div>

            {/* Popular Links */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Popular</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://aws.amazon.com/architecture/well-architected/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    AWS Well-Architected Framework
                  </a>
                </li>
                <li>
                  <a href="https://12factor.net/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    The Twelve-Factor App
                  </a>
                </li>
                <li>
                  <a href="https://kubernetes.io/docs/concepts/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    Kubernetes Concepts
                  </a>
                </li>
                <li>
                  <a href="https://www.cncf.io/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    Cloud Native Computing Foundation
                  </a>
                </li>
              </ul>
            </div>

            {/* Recent Links */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Recent</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a href="https://github.com/andresKillem" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    My GitHub Projects
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/@andresmunozb" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    Technical Articles on Medium
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    Connect on LinkedIn
                  </a>
                </li>
              </ul>
            </div>

            {/* Terminal Quick Reference */}
            <div className="bg-gray-900 p-4 rounded-lg font-mono text-xs">
              <div className="text-green-400 mb-2">$ whoami</div>
              <div className="text-gray-300 space-y-1">
                <div>andres@devops-architect</div>
                <div>role: Expert Solutions Architect</div>
                <div>focus: Cloud & DevOps</div>
                <div className="mt-2">
                  <a href="https://github.com/andresKillem" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">
                    github.com/andresKillem
                  </a>
                </div>
              </div>
            </div>

          </aside>
        </div>
      </div>

      <AIChatbot />

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
            <a href="https://github.com/andresKillem" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              LinkedIn
            </a>
            <a href="https://medium.com/@andresmunozb" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              Medium
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Andrés Muñoz</p>
        </div>
      </footer>
    </div>
  );
}
