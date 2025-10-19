export const Projects = () => {
  const projects = [
    {
      title: "Multi-Account AWS Architecture",
      type: "Cloud Infrastructure",
      description: "Designed enterprise AWS Control Tower landing zones with automated account provisioning, security baselines, and centralized governance for 50+ accounts",
      impact: ["20% cost reduction", "100% compliance rate", "Zero security incidents"],
      technologies: ["AWS Control Tower", "Terraform", "IAM", "CloudFormation"]
    },
    {
      title: "Global Kubernetes Platform",
      type: "Container Orchestration",
      description: "Architected highly available EKS clusters with Istio service mesh across multiple regions, supporting millions of requests per day",
      impact: ["99.9% uptime", "40% faster deployments", "60% improved scalability"],
      technologies: ["EKS", "Istio", "ArgoCD", "Datadog"]
    },
    {
      title: "GitOps CI/CD Transformation",
      type: "DevOps Automation",
      description: "Built end-to-end GitOps pipelines with GitHub Actions and ArgoCD, automating infrastructure provisioning and application deployments",
      impact: ["40% MTTR reduction", "85% deployment frequency increase", "Zero downtime releases"],
      technologies: ["GitHub Actions", "ArgoCD", "Terraform", "Helm"]
    },
    {
      title: "FinTech Payment Infrastructure",
      type: "Microservices Architecture",
      description: "Designed secure, compliant microservices architecture for payment processing with AWS, ensuring PCI-DSS compliance and real-time transaction processing",
      impact: ["PCI-DSS compliant", "Sub-second latency", "99.95% success rate"],
      technologies: ["AWS", "Go", "Microservices", "API Gateway", "DynamoDB"]
    },
    {
      title: "Enterprise Observability Platform",
      type: "Monitoring & SRE",
      description: "Implemented comprehensive observability with Datadog, Prometheus, and custom dashboards, reducing incident response time by 40%",
      impact: ["40% faster incident resolution", "95% reduction in false alerts", "Full stack visibility"],
      technologies: ["Datadog", "Prometheus", "Grafana", "Elasticsearch"]
    }
  ];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Proven Impact
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Enterprise projects delivering measurable business outcomes
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
          {projects.map((project, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]">
              <div className="flex items-start justify-between mb-4">
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-semibold">
                  {project.type}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-4">{project.title}</h3>

              <p className="text-gray-700 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="mb-6 bg-gradient-to-br from-green-50 to-emerald-50 p-4 rounded-xl border border-green-100">
                <h5 className="font-semibold text-gray-900 mb-3 flex items-center">
                  <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 11a1 1 0 011-1h2a1 1 0 011 1v5a1 1 0 01-1 1H3a1 1 0 01-1-1v-5zM8 7a1 1 0 011-1h2a1 1 0 011 1v9a1 1 0 01-1 1H9a1 1 0 01-1-1V7zM14 4a1 1 0 011-1h2a1 1 0 011 1v12a1 1 0 01-1 1h-2a1 1 0 01-1-1V4z" />
                  </svg>
                  Measurable Impact:
                </h5>
                <div className="grid grid-cols-1 gap-2">
                  {project.impact.map((metric, idx) => (
                    <div key={idx} className="flex items-center bg-white/50 p-2 rounded">
                      <svg className="w-4 h-4 text-green-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-gray-700 font-medium text-sm">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium border border-blue-200">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
