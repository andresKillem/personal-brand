"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Area, AreaChart } from "recharts";
import { ArchitectureDiagram } from "./ArchitectureDiagram";
import { ProjectsCallToAction } from "./ProjectsCallToAction";

export const InteractiveProjects = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [syncedTooltip, setSyncedTooltip] = useState<any>(null);

  const projects = [
    {
      title: "FinTech Payment Infrastructure",
      company: "Deuna & Housecall Pro",
      type: "Microservices Architecture",
      icon: "💳",
      color: "from-green-500 to-emerald-500",
      description: "Designed secure, compliant microservices architecture for payment processing with AWS, ensuring PCI-DSS compliance and real-time transaction processing",
      challenge: "Legacy monolith processed only 100 TPS, failed PCI audits, and had 3-second latency causing cart abandonment",
      solution: "Built event-driven microservices on EKS with API Gateway, DynamoDB streams, and end-to-end encryption",
      impact: {
        compliance: { before: 60, after: 100, label: "PCI-DSS Compliant" },
        latency: { before: 3000, after: 450, label: "Sub-second Latency" },
        success: { before: 96, after: 99.95, label: "99.95% Success Rate" }
      },
      metrics: [
        { month: "Jan", tps: 100, latency: 3000 },
        { month: "Feb", tps: 250, latency: 2200 },
        { month: "Mar", tps: 500, latency: 1500 },
        { month: "Apr", tps: 800, latency: 900 },
        { month: "May", tps: 1200, latency: 600 },
        { month: "Jun", tps: 1500, latency: 450 }
      ],
      technologies: ["AWS", "Go", "Microservices", "API Gateway", "DynamoDB", "Lambda"],
      architecture: ["API Gateway", "Microservices", "Event Bus", "DynamoDB", "Encryption"]
    },
    {
      title: "AI/ML Platform with Infrastructure as Code",
      company: "Housecall Pro",
      type: "AI/ML + DevOps",
      icon: "🤖",
      color: "from-violet-500 to-purple-500",
      description: "Built automated ML pipeline infrastructure combining TensorFlow models, Kubernetes orchestration, and infrastructure as code for intelligent system monitoring and predictive scaling",
      challenge: "Manual model deployment took weeks, no automated retraining, models drifted causing 40% accuracy degradation, infrastructure costs unpredictable",
      solution: "Created end-to-end ML/Ops platform with automated model training pipelines on EKS, Kubeflow for orchestration, Terraform for infrastructure provisioning, and MLflow for model versioning",
      impact: {
        deployment: { before: 14, after: 0.5, label: "From 14 days to 12 hours" },
        accuracy: { before: 60, after: 94, label: "94% Model Accuracy" },
        cost: { before: 100, after: 65, label: "35% Cost Reduction" }
      },
      metrics: [
        { month: "Jan", accuracy: 60, inference: 1000 },
        { month: "Feb", accuracy: 68, inference: 2500 },
        { month: "Mar", accuracy: 75, inference: 5000 },
        { month: "Apr", accuracy: 85, inference: 8500 },
        { month: "May", accuracy: 90, inference: 12000 },
        { month: "Jun", accuracy: 94, inference: 15000 }
      ],
      technologies: ["Kubeflow", "TensorFlow", "PyTorch", "MLflow", "Kubernetes", "Terraform", "Python"],
      architecture: ["Data Pipeline", "Model Training", "Model Registry", "Inference Service", "Monitoring"],
      architectureDiagram: {
        title: "AI/ML Infrastructure Architecture",
        nodes: [
          { id: "data", label: "Data Lake", sublabel: "S3/PostgreSQL", icon: "🗄️", x: 100, y: 200, color: "#3B82F6" },
          { id: "pipeline", label: "ETL Pipeline", sublabel: "Airflow", icon: "🔄", x: 250, y: 100, color: "#8B5CF6" },
          { id: "training", label: "Training", sublabel: "Kubeflow", icon: "🎯", x: 400, y: 100, color: "#A855F7" },
          { id: "registry", label: "Model Registry", sublabel: "MLflow", icon: "📦", x: 550, y: 100, color: "#7C3AED" },
          { id: "inference", label: "Inference API", sublabel: "FastAPI/K8s", icon: "⚡", x: 700, y: 200, color: "#06B6D4" },
          { id: "monitor", label: "Monitoring", sublabel: "Prometheus", icon: "📊", x: 400, y: 300, color: "#10B981" }
        ],
        connections: [
          { from: "data", to: "pipeline", label: "Raw Data", animated: true },
          { from: "pipeline", to: "training", label: "Features", animated: true },
          { from: "training", to: "registry", label: "Models", animated: false },
          { from: "registry", to: "inference", label: "Deploy", animated: true },
          { from: "inference", to: "monitor", label: "Metrics", animated: true },
          { from: "monitor", to: "training", label: "Retrain Trigger", animated: false }
        ]
      }
    },
    {
      title: "Multi-Account AWS Architecture",
      company: "Housecall Pro",
      type: "Cloud Infrastructure",
      icon: "☁️",
      color: "from-orange-500 to-red-500",
      description: "Designed enterprise AWS Control Tower landing zones with automated account provisioning, security baselines, and centralized governance for 50+ accounts",
      challenge: "Managing 50+ AWS accounts manually led to security gaps, compliance issues, and 30% higher costs due to resource sprawl",
      solution: "Implemented AWS Control Tower with automated guardrails, centralized billing, and Terraform-managed infrastructure",
      impact: {
        cost: { before: 100, after: 80, label: "20% Cost Reduction" },
        compliance: { before: 75, after: 100, label: "100% Compliance" },
        security: { before: 60, after: 100, label: "Zero Security Incidents" }
      },
      metrics: [
        { month: "Jan", before: 150000, after: 150000 },
        { month: "Feb", before: 155000, after: 148000 },
        { month: "Mar", before: 160000, after: 142000 },
        { month: "Apr", before: 165000, after: 135000 },
        { month: "May", before: 170000, after: 130000 },
        { month: "Jun", before: 175000, after: 125000 }
      ],
      technologies: ["AWS Control Tower", "Terraform", "IAM", "CloudFormation", "AWS Organizations"],
      architecture: ["AWS Control Tower", "Landing Zones", "SCPs", "GuardDuty", "Config Rules"]
    },
    {
      title: "Global Kubernetes Platform",
      company: "Housecall Pro",
      type: "Container Orchestration",
      icon: "⚡",
      color: "from-blue-500 to-cyan-500",
      description: "Architected highly available EKS clusters with Istio service mesh across multiple regions, supporting millions of requests per day",
      challenge: "Monolithic architecture couldn't scale beyond 10K concurrent users, deployments took 2 hours with frequent downtime",
      solution: "Migrated to microservices on EKS with Istio service mesh, implemented blue-green deployments with ArgoCD",
      impact: {
        uptime: { before: 95, after: 99.9, label: "99.9% Uptime" },
        deployments: { before: 120, after: 72, label: "40% Faster Deploys" },
        scalability: { before: 10000, after: 16000, label: "60% More Users" }
      },
      metrics: [
        { month: "Jan", uptime: 95.2, requests: 500000 },
        { month: "Feb", uptime: 96.5, requests: 750000 },
        { month: "Mar", uptime: 98.1, requests: 1200000 },
        { month: "Apr", uptime: 99.3, requests: 1800000 },
        { month: "May", uptime: 99.7, requests: 2400000 },
        { month: "Jun", uptime: 99.9, requests: 3000000 }
      ],
      technologies: ["EKS", "Istio", "ArgoCD", "Datadog", "Prometheus", "Helm"],
      architecture: ["Multi-Region EKS", "Istio Mesh", "ALB Ingress", "Auto-scaling", "Monitoring"],
      architectureDiagram: {
        title: "Multi-Region Kubernetes Platform",
        nodes: [
          { id: "alb", label: "ALB", sublabel: "Load Balancer", icon: "🌐", x: 400, y: 50, color: "#3B82F6" },
          { id: "istio", label: "Istio Gateway", sublabel: "Service Mesh", icon: "🔀", x: 400, y: 150, color: "#06B6D4" },
          { id: "svc1", label: "Service A", sublabel: "Payment", icon: "💳", x: 200, y: 250, color: "#10B981" },
          { id: "svc2", label: "Service B", sublabel: "Auth", icon: "🔐", x: 400, y: 250, color: "#8B5CF6" },
          { id: "svc3", label: "Service C", sublabel: "Notification", icon: "📧", x: 600, y: 250, color: "#F59E0B" },
          { id: "db", label: "RDS", sublabel: "Database", icon: "🗄️", x: 300, y: 350, color: "#EF4444" },
          { id: "cache", label: "ElastiCache", sublabel: "Redis", icon: "⚡", x: 500, y: 350, color: "#EC4899" }
        ],
        connections: [
          { from: "alb", to: "istio", label: "HTTPS", animated: true },
          { from: "istio", to: "svc1", animated: true },
          { from: "istio", to: "svc2", animated: true },
          { from: "istio", to: "svc3", animated: true },
          { from: "svc1", to: "db", label: "Query", animated: false },
          { from: "svc2", to: "db", label: "Query", animated: false },
          { from: "svc2", to: "cache", label: "Cache", animated: false },
          { from: "svc3", to: "cache", label: "Queue", animated: false }
        ]
      }
    },
    {
      title: "GitOps CI/CD Transformation",
      company: "Housecall Pro",
      type: "DevOps Automation",
      icon: "🚀",
      color: "from-purple-500 to-pink-500",
      description: "Built end-to-end GitOps pipelines with GitHub Actions and ArgoCD, automating infrastructure provisioning and application deployments",
      challenge: "Manual deployments caused 4-hour MTTR, 70% deployment failures, and developers waiting days for infrastructure",
      solution: "Implemented GitOps with GitHub Actions for CI, ArgoCD for CD, and Terraform for infrastructure as code",
      impact: {
        mttr: { before: 240, after: 144, label: "40% MTTR Reduction" },
        frequency: { before: 10, after: 185, label: "85% More Deployments" },
        success: { before: 30, after: 99, label: "Zero Downtime Releases" }
      },
      metrics: [
        { month: "Jan", deployments: 10, failures: 7 },
        { month: "Feb", deployments: 25, failures: 5 },
        { month: "Mar", deployments: 50, failures: 3 },
        { month: "Apr", deployments: 100, failures: 2 },
        { month: "May", deployments: 150, failures: 1 },
        { month: "Jun", deployments: 185, failures: 0 }
      ],
      technologies: ["GitHub Actions", "ArgoCD", "Terraform", "Helm", "Docker", "Kustomize"],
      architecture: ["GitHub", "Actions Runners", "ArgoCD", "Kubernetes", "Image Registry"]
    },
    {
      title: "Enterprise Observability Platform",
      company: "Housecall Pro",
      type: "Monitoring & SRE",
      icon: "📊",
      color: "from-indigo-500 to-blue-500",
      description: "Implemented comprehensive observability with Datadog, Prometheus, and custom dashboards, reducing incident response time by 40%",
      challenge: "No centralized monitoring led to 4-hour MTTR, 500+ daily false alerts, and zero visibility into production issues",
      solution: "Deployed unified observability stack with Datadog APM, Prometheus metrics, ELK logs, and intelligent alerting",
      impact: {
        mttr: { before: 240, after: 144, label: "40% Faster Resolution" },
        alerts: { before: 500, after: 25, label: "95% Fewer False Alerts" },
        visibility: { before: 20, after: 100, label: "Full Stack Visibility" }
      },
      metrics: [
        { month: "Jan", incidents: 120, mttr: 240 },
        { month: "Feb", incidents: 95, mttr: 210 },
        { month: "Mar", incidents: 70, mttr: 180 },
        { month: "Apr", incidents: 50, mttr: 165 },
        { month: "May", incidents: 35, mttr: 150 },
        { month: "Jun", incidents: 25, mttr: 144 }
      ],
      technologies: ["Datadog", "Prometheus", "Grafana", "Elasticsearch", "Kibana", "PagerDuty"],
      architecture: ["APM", "Metrics", "Logs", "Traces", "Dashboards", "Alerts"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 via-slate-900 to-gray-900 relative overflow-hidden">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-40"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
            Real-World Success Stories
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Click each project to explore the transformation journey with interactive metrics and architecture
          </p>
        </motion.div>

        {/* Call to Action Effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <ProjectsCallToAction />
        </motion.div>

        <div className="space-y-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <motion.div
                className={`bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-lg rounded-2xl border-2 overflow-hidden cursor-pointer transition-all duration-300 relative ${
                  selectedProject === index
                    ? "shadow-2xl shadow-cyan-500/20 border-cyan-500/50"
                    : "hover:shadow-xl hover:shadow-cyan-500/10 border-cyan-500/30"
                }`}
                onClick={() => setSelectedProject(selectedProject === index ? null : index)}
                whileHover={{ scale: selectedProject === index ? 1 : 1.02 }}
                animate={
                  selectedProject !== index
                    ? {
                        boxShadow: [
                          "0 0 20px rgba(6, 182, 212, 0.3)",
                          "0 0 40px rgba(6, 182, 212, 0.5)",
                          "0 0 20px rgba(6, 182, 212, 0.3)",
                        ],
                      }
                    : {}
                }
                transition={
                  selectedProject !== index
                    ? {
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }
                    : {}
                }
              >
                {/* Click Me Indicator */}
                {selectedProject !== index && (
                  <motion.div
                    className="absolute top-4 right-4 z-10"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.7, 1, 0.7],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-2 shadow-lg">
                      <span className="animate-bounce">👆</span>
                      CLICK TO OPEN
                    </div>
                  </motion.div>
                )}
                {/* Project Header */}
                <div className="p-8">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start gap-4 flex-1">
                      <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.color} flex items-center justify-center text-3xl shadow-lg`}>
                        {project.icon}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3 className="text-2xl font-bold text-white">{project.title}</h3>
                          <span className={`bg-gradient-to-r ${project.color} text-white px-3 py-1 rounded-full text-xs font-semibold`}>
                            {project.type}
                          </span>
                        </div>
                        <p className="text-cyan-400 font-semibold mb-3">{project.company}</p>
                        <p className="text-gray-300 leading-relaxed">{project.description}</p>
                      </div>
                    </div>
                    <motion.div
                      animate={{ rotate: selectedProject === index ? 180 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-cyan-400 text-2xl ml-4"
                    >
                      ▼
                    </motion.div>
                  </div>

                  {/* Quick Impact Preview */}
                  {selectedProject !== index && (
                    <div className="grid grid-cols-3 gap-4 mt-6">
                      {Object.values(project.impact).map((metric, idx) => (
                        <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-lg p-3 border border-gray-700/50">
                          <div className={`text-2xl font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {typeof metric.after === 'number' && metric.after > 100 ? metric.after.toLocaleString() : metric.after}
                            {typeof metric.after === 'number' && metric.after <= 100 && metric.after > 1 ? '%' : ''}
                          </div>
                          <div className="text-gray-400 text-xs mt-1">{metric.label}</div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                {/* Expanded Content */}
                <AnimatePresence>
                  {selectedProject === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="border-t border-gray-700/50"
                    >
                      <div className="p-8 space-y-8">
                        {/* Challenge & Solution */}
                        <div className="grid md:grid-cols-2 gap-6">
                          <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6">
                            <h4 className="text-red-400 font-bold text-lg mb-3 flex items-center gap-2">
                              <span>⚠️</span> Challenge
                            </h4>
                            <p className="text-gray-300">{project.challenge}</p>
                          </div>
                          <div className="bg-green-500/10 border border-green-500/30 rounded-xl p-6">
                            <h4 className="text-green-400 font-bold text-lg mb-3 flex items-center gap-2">
                              <span>✅</span> Solution
                            </h4>
                            <p className="text-gray-300">{project.solution}</p>
                          </div>
                        </div>

                        {/* Interactive Metrics Chart */}
                        <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50">
                          <h4 className="text-white font-bold text-lg mb-4">
                            {index === 0 ? "Synchronized Performance Metrics" : "Transformation Metrics Over Time"}
                            {index === 0 && <span className="text-sm text-gray-400 ml-2">(Hover to sync charts)</span>}
                          </h4>

                          {/* Synchronized charts for AI/ML project */}
                          {index === 0 && (
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <p className="text-cyan-400 text-sm mb-2 font-semibold">Model Accuracy Evolution</p>
                                <ResponsiveContainer width="100%" height={250}>
                                  <LineChart
                                    data={project.metrics}
                                    onMouseMove={(e: any) => {
                                      if (e && e.activeTooltipIndex !== undefined) {
                                        setSyncedTooltip(e.activeTooltipIndex);
                                      }
                                    }}
                                    onMouseLeave={() => setSyncedTooltip(null)}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="month" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" domain={[0, 100]} />
                                    <Tooltip
                                      contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                      labelStyle={{ color: '#F3F4F6' }}
                                      cursor={{ stroke: '#06B6D4', strokeWidth: 2 }}
                                    />
                                    <Line
                                      type="monotone"
                                      dataKey="accuracy"
                                      stroke="#A855F7"
                                      strokeWidth={3}
                                      name="Accuracy %"
                                      dot={{ fill: '#A855F7', r: 5 }}
                                      activeDot={{ r: 8 }}
                                    />
                                  </LineChart>
                                </ResponsiveContainer>
                              </div>

                              <div>
                                <p className="text-cyan-400 text-sm mb-2 font-semibold">Daily Inference Volume</p>
                                <ResponsiveContainer width="100%" height={250}>
                                  <AreaChart
                                    data={project.metrics}
                                    onMouseMove={(e: any) => {
                                      if (e && e.activeTooltipIndex !== undefined) {
                                        setSyncedTooltip(e.activeTooltipIndex);
                                      }
                                    }}
                                    onMouseLeave={() => setSyncedTooltip(null)}
                                  >
                                    <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                    <XAxis dataKey="month" stroke="#9CA3AF" />
                                    <YAxis stroke="#9CA3AF" />
                                    <Tooltip
                                      contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                      labelStyle={{ color: '#F3F4F6' }}
                                      cursor={{ stroke: '#06B6D4', strokeWidth: 2 }}
                                    />
                                    <Area
                                      type="monotone"
                                      dataKey="inference"
                                      stroke="#10B981"
                                      fill="#10B981"
                                      fillOpacity={0.3}
                                      strokeWidth={3}
                                      name="Inferences/day"
                                    />
                                  </AreaChart>
                                </ResponsiveContainer>
                              </div>
                            </div>
                          )}
                          {index !== 0 && (
                            <ResponsiveContainer width="100%" height={300}>
                              {index === 1 ? (
                              <AreaChart data={project.metrics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip
                                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                  labelStyle={{ color: '#F3F4F6' }}
                                />
                                <Area type="monotone" dataKey="before" stroke="#EF4444" fill="#EF4444" fillOpacity={0.3} name="Before ($)" />
                                <Area type="monotone" dataKey="after" stroke="#10B981" fill="#10B981" fillOpacity={0.3} name="After ($)" />
                              </AreaChart>
                            ) : index === 2 ? (
                              <LineChart data={project.metrics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis yAxisId="left" stroke="#9CA3AF" />
                                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                                <Tooltip
                                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                  labelStyle={{ color: '#F3F4F6' }}
                                />
                                <Line yAxisId="left" type="monotone" dataKey="uptime" stroke="#10B981" strokeWidth={3} name="Uptime %" />
                                <Line yAxisId="right" type="monotone" dataKey="requests" stroke="#3B82F6" strokeWidth={3} name="Requests/day" />
                              </LineChart>
                            ) : index === 3 ? (
                              <BarChart data={project.metrics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis stroke="#9CA3AF" />
                                <Tooltip
                                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                  labelStyle={{ color: '#F3F4F6' }}
                                />
                                <Bar dataKey="deployments" fill="#10B981" name="Deployments" />
                                <Bar dataKey="failures" fill="#EF4444" name="Failures" />
                              </BarChart>
                            ) : index === 4 ? (
                              <LineChart data={project.metrics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis yAxisId="left" stroke="#9CA3AF" />
                                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                                <Tooltip
                                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                  labelStyle={{ color: '#F3F4F6' }}
                                />
                                <Line yAxisId="left" type="monotone" dataKey="tps" stroke="#10B981" strokeWidth={3} name="TPS" />
                                <Line yAxisId="right" type="monotone" dataKey="latency" stroke="#EF4444" strokeWidth={3} name="Latency (ms)" />
                              </LineChart>
                            ) : (
                              <LineChart data={project.metrics}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                                <XAxis dataKey="month" stroke="#9CA3AF" />
                                <YAxis yAxisId="left" stroke="#9CA3AF" />
                                <YAxis yAxisId="right" orientation="right" stroke="#9CA3AF" />
                                <Tooltip
                                  contentStyle={{ backgroundColor: '#1F2937', border: '1px solid #374151', borderRadius: '8px' }}
                                  labelStyle={{ color: '#F3F4F6' }}
                                />
                                <Line yAxisId="left" type="monotone" dataKey="incidents" stroke="#EF4444" strokeWidth={3} name="Incidents" />
                                <Line yAxisId="right" type="monotone" dataKey="mttr" stroke="#10B981" strokeWidth={3} name="MTTR (min)" />
                              </LineChart>
                            )}
                          </ResponsiveContainer>
                          )}
                        </div>

                        {/* Architecture Diagram */}
                        {project.architectureDiagram && (
                          <ArchitectureDiagram
                            title={project.architectureDiagram.title}
                            nodes={project.architectureDiagram.nodes}
                            connections={project.architectureDiagram.connections}
                          />
                        )}

                        {/* Architecture Components */}
                        <div>
                          <h4 className="text-white font-bold text-lg mb-4">Architecture Components</h4>
                          <div className="flex flex-wrap gap-3">
                            {project.architecture.map((component, idx) => (
                              <motion.div
                                key={idx}
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: idx * 0.1 }}
                                className={`bg-gradient-to-r ${project.color} px-4 py-2 rounded-lg text-white font-semibold shadow-lg`}
                              >
                                {component}
                              </motion.div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h4 className="text-white font-bold text-lg mb-4">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="bg-gray-700/50 border border-gray-600 text-gray-300 px-3 py-1 rounded-lg text-sm"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <p className="text-gray-300 text-lg mb-6">
            Want to achieve similar results for your organization?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50"
          >
            <span className="relative z-10">Let&apos;s Discuss Your Project</span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
};
