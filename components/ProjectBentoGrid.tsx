"use client";

import { motion } from "framer-motion";
import { ExternalLink, ArrowRight, Zap, Shield, Globe, Server } from "lucide-react";

interface Project {
  title: string;
  company: string;
  type: string;
  description: string;
  impact: {
    [key: string]: { before: number | string; after: number | string; label: string };
  };
  technologies: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "FinTech Platform - PilasFi.com",
    company: "PilasFi",
    type: "Full Stack FinTech",
    icon: <Zap className="w-6 h-6 text-cyan-600" />,
    description: "Architected a next-generation financial engine using event-driven architecture and real-time reconciliation.",
    impact: {
      performance: { before: "Low", after: "98%", label: "Perf Score" },
      users: { before: 0, after: "10K+", label: "Active Users" },
      sync: { before: "Daily", after: "Real-time", label: "Reconciliation" }
    },
    technologies: ["Next.js", "Node.js", "PostgreSQL", "AWS", "Redis", "WebSockets"],
    link: "https://pilasfi.com"
  },
  {
    title: "Payment Infrastructure",
    company: "Deuna",
    type: "Cloud Architecture",
    icon: <Shield className="w-6 h-6 text-blue-600" />,
    description: "Transformed legacy monolith (100 TPS) into event-driven microservices handling 1,500+ TPS with PCI-DSS compliance.",
    impact: {
      tps: { before: 100, after: 1500, label: "TPS Capacity" },
      latency: { before: "3s", after: "450ms", label: "Latency" },
      uptime: { before: "96%", after: "99.95%", label: "Success Rate" }
    },
    technologies: ["AWS", "Go", "EKS", "DynamoDB", "API Gateway", "Lambda"]
  },
  {
    title: "AI/ML DevOps Platform",
    company: "Housecall Pro",
    type: "AI/ML + Platform",
    icon: <Globe className="w-6 h-6 text-purple-600" />,
    description: "Built automated ML pipeline infrastructure on Kubernetes, reducing model deployment time from weeks to hours.",
    impact: {
      deploy: { before: "14d", after: "12h", label: "Deployment" },
      accuracy: { before: "60%", after: "94%", label: "Model Accuracy" },
      cost: { before: "100%", after: "65%", label: "OpEx Cost" }
    },
    technologies: ["Kubeflow", "Kubernetes", "Terraform", "Python", "MLflow"]
  },
  {
    title: "Global Kubernetes Migration",
    company: "Housecall Pro",
    type: "Platform Engineering",
    icon: <Server className="w-6 h-6 text-indigo-600" />,
    description: "Architected multi-region EKS clusters with Istio service mesh, supporting millions of requests per day.",
    impact: {
      uptime: { before: "95%", after: "99.9%", label: "Global Uptime" },
      scaling: { before: "10K", after: "100K+", label: "Concurrent" },
      mttr: { before: "4h", after: "1.5h", label: "MTTR" }
    },
    technologies: ["EKS", "Istio", "ArgoCD", "Datadog", "Terraform"]
  }
];

export const ProjectBentoGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {projects.map((project, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: idx * 0.1 }}
          viewport={{ once: true }}
          className="group bg-gray-50 border border-gray-200 rounded-2xl p-6 hover:shadow-xl hover:border-blue-200 transition-all duration-300 flex flex-col justify-between"
        >
          <div>
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-white rounded-xl shadow-sm border border-gray-100">
                {project.icon}
              </div>
              <div className="flex gap-2">
                {project.link && (
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 text-gray-400 hover:text-blue-600 transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
                <span className="text-[10px] font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-2 py-1 rounded">
                  {project.type}
                </span>
              </div>
            </div>

            <h3 className="text-xl font-bold text-gray-900 mb-1">{project.title}</h3>
            <p className="text-blue-700 font-semibold text-sm mb-3">{project.company}</p>
            <p className="text-gray-600 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
          </div>

          <div>
            <div className="grid grid-cols-3 gap-2 mb-6">
              {Object.entries(project.impact).map(([impactKey, metric], i) => (
                <div key={i} className="bg-white p-2 rounded-lg border border-gray-100 text-center">
                  <div className="text-sm font-bold text-gray-900">{metric.after}</div>
                  <div className="text-[9px] text-gray-500 uppercase font-medium">{metric.label}</div>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.technologies.slice(0, 4).map((tech, i) => (
                <span key={i} className="text-[10px] font-medium text-gray-500 bg-white border border-gray-100 px-2 py-0.5 rounded">
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="text-[10px] font-medium text-gray-400 px-1">+{project.technologies.length - 4} more</span>
              )}
            </div>

            <button className="w-full py-2 bg-white border border-gray-200 rounded-xl text-sm font-semibold text-gray-700 group-hover:bg-blue-600 group-hover:text-white group-hover:border-blue-600 transition-all duration-300 flex items-center justify-center gap-2">
              View Case Study <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};
