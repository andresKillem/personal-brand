export const Skills = () => {
  const skillCategories = [
    {
      title: "Cloud Architecture & Platform Engineering",
      icon: "☁️",
      skills: [
        { name: "AWS (Control Tower, Landing Zones, Organizations)", level: "Expert" },
        { name: "Azure Multi-Subscription Architecture", level: "Expert" },
        { name: "Kubernetes (EKS, AKS, GKE) at Scale", level: "Expert" },
        { name: "Multi-Cloud & Hybrid Solutions", level: "Advanced" },
        { name: "Service Mesh (Istio, Linkerd)", level: "Advanced" }
      ]
    },
    {
      title: "DevOps & CI/CD Excellence",
      icon: "🚀",
      skills: [
        { name: "Infrastructure as Code (Terraform, CloudFormation)", level: "Expert" },
        { name: "GitOps (ArgoCD, Flux)", level: "Expert" },
        { name: "GitHub Actions, GitLab CI, Jenkins", level: "Expert" },
        { name: "Container Orchestration & Docker", level: "Expert" },
        { name: "Release Engineering & Automation", level: "Advanced" }
      ]
    },
    {
      title: "Observability & Site Reliability",
      icon: "📊",
      skills: [
        { name: "Datadog, Prometheus, Grafana", level: "Expert" },
        { name: "Distributed Tracing & APM", level: "Advanced" },
        { name: "Log Aggregation (ELK, CloudWatch)", level: "Expert" },
        { name: "SRE Practices & Incident Management", level: "Advanced" },
        { name: "Performance Tuning & Optimization", level: "Expert" }
      ]
    },
    {
      title: "Security & Compliance",
      icon: "🔒",
      skills: [
        { name: "Zero Trust Architecture", level: "Advanced" },
        { name: "IAM Policies & Hardening", level: "Expert" },
        { name: "FinTech & Healthcare Compliance", level: "Advanced" },
        { name: "WAF, CloudFront Security, Network ACLs", level: "Expert" },
        { name: "Secrets Management (Vault, AWS Secrets Manager)", level: "Advanced" }
      ]
    },
    {
      title: "Programming & Automation",
      icon: "💻",
      skills: [
        { name: "Python, Bash, Groovy Scripting", level: "Expert" },
        { name: "Go for Cloud-Native Applications", level: "Advanced" },
        { name: "Node.js & Ruby", level: "Advanced" },
        { name: "API Design & Integration", level: "Expert" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 text-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            2025 In-Demand Skills
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Enterprise-grade expertise in technologies companies are actively hiring for
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, idx) => (
            <div key={idx} className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-blue-400/50 transition-all duration-300 hover:shadow-2xl hover:scale-105">
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-3">{category.icon}</span>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>
              <div className="space-y-3">
                {category.skills.map((skill, index) => (
                  <div key={index} className="pb-3 border-b border-white/10 last:border-0">
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-gray-200 font-medium text-sm">{skill.name}</span>
                      <span className={`text-xs font-semibold px-2 py-1 rounded flex-shrink-0 ml-2 ${
                        skill.level === 'Expert'
                          ? 'bg-green-500/20 text-green-300 border border-green-500/30'
                          : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                      }`}>
                        {skill.level}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
