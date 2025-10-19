export const Experience = () => {
  const experiences = [
    {
      company: "Housecall Pro",
      logo: "/logos/housecallpro-logo.png",
      title: "Senior DevOps Engineer",
      period: "2021 - 2025",
      location: "San Diego, CA (Remote)",
      achievements: [
        "Led enterprise DevOps transformation for SaaS platform serving millions of users",
        "Architected multi-cloud solutions (AWS/Azure) with global RDS replication and cross-region DR",
        "Reduced MTTR by 40% through Datadog, Prometheus observability at scale",
        "Partnered with C-Level leadership to reduce annual cloud spend by 20%",
        "Designed secure EKS clusters with Istio service mesh for financial services compliance"
      ],
      technologies: ["AWS", "Kubernetes", "Terraform", "Datadog", "Istio", "GitHub Actions"]
    },
    {
      company: "Deuna",
      logo: "/logos/deuna-logo.png",
      title: "Expert Solutions Architect",
      period: "2023 - Present",
      location: "Quito, Ecuador (Remote)",
      achievements: [
        "Design AWS-based microservices payment systems for FinTech compliance",
        "Architect mobile payment platforms prioritizing security and user experience",
        "Implement robust security frameworks for sensitive payment data protection",
        "Optimize performance through continuous monitoring and system integration"
      ],
      technologies: ["AWS", "Microservices", "Mobile Architecture", "Security", "Compliance"]
    },
    {
      company: "Kushki",
      logo: "/logos/kushki-logo.png",
      title: "Cloud Applications Architect",
      period: "2021 - 2023",
      location: "Quito, Ecuador",
      achievements: [
        "Architected unified API platform with focus on governance and developer experience",
        "Led technical initiatives alongside business, development, and infrastructure teams",
        "Developed Go-based solutions following software development best practices",
        "Implemented AWS best practices for scalable payment infrastructure"
      ],
      technologies: ["AWS", "Go", "API Platform", "Microservices", "DevOps"]
    },
    {
      company: "Banco Pichincha",
      logo: "/logos/pichincha-logo.png",
      title: "DevOps Architect",
      period: "2021",
      location: "Ecuador",
      achievements: [
        "Established DevOps practices across banking organization",
        "Automated deployment processes with CI/CD pipelines",
        "Led teams with leadership mindset to facilitate development and operations",
        "Set up continuous build environment for accelerated software delivery"
      ],
      technologies: ["Jenkins", "CI/CD", "Azure DevOps", "Banking Compliance"]
    },
    {
      company: "Telefónica",
      logo: "/logos/telefonica-logo.png",
      title: "Outsourcing Development Manager",
      period: "2016 - 2017",
      location: "Ecuador",
      achievements: [
        "Managed software development lifecycle across all stages",
        "Architected technological solutions for internal business requirements",
        "Coordinated with external suppliers for enterprise solutions",
        "Improved performance and security of project infrastructure"
      ],
      technologies: ["BPM", "Architecture", "Project Management"]
    }
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Enterprise Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Trusted by leading companies across FinTech, SaaS, and Telecom to architect scalable cloud platforms
          </p>
        </div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:scale-[1.02]"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-20 h-20 bg-white rounded-xl shadow-md p-3 flex items-center justify-center border border-gray-100">
                    <img
                      src={exp.logo}
                      alt={`${exp.company} logo`}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">
                        {exp.title}
                      </h3>
                      <p className="text-lg font-semibold text-blue-600 mb-1">
                        {exp.company}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {exp.period} • {exp.location}
                      </p>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.achievements.map((achievement, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-green-500 mt-1 mr-3 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-700">{achievement}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700 px-3 py-1 rounded-lg text-sm font-medium border border-blue-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600 mb-6">
            Also worked with: <strong>Bixlabs</strong> (Senior Software Engineer, 2017-2019),
            <strong> Kruger Corporation</strong> (Project Leader, 2011-2015)
          </p>
        </div>
      </div>
    </section>
  );
};
