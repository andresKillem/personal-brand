export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Home</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#writing" className="text-gray-600 hover:text-gray-900">Writing</a>
              <a href="#projects" className="text-gray-600 hover:text-gray-900">Projects</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">LinkedIn</a>
              <a href="https://github.com/andresKillem" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-gray-900">GitHub</a>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content Column */}
          <main className="lg:col-span-2">

            {/* Hero Section */}
            <section className="mb-16">
              <h1 className="text-5xl font-serif mb-4">Andrés Muñoz</h1>
              <p className="text-xl text-gray-600 mb-6">Expert Solutions Architect, DevOps & SRE</p>

              <div className="prose prose-lg max-w-none text-gray-700">
                <p className="mb-4">
                  I&apos;m a principal-level architect specializing in cloud architecture, DevOps transformation, and
                  platform engineering. Currently architecting payment systems at Deuna serving millions across Latin America.
                </p>
                <p className="mb-4">
                  I focus on designing AWS multi-account architectures, implementing Zero Trust security, and building highly
                  available systems. My work transforms legacy infrastructure into modern cloud-native platforms, reducing costs
                  by 20-40% while improving deployment frequency and system reliability.
                </p>
              </div>

              <div className="border-t border-gray-200 my-8"></div>

              {/* Contact Info - Only LinkedIn */}
              <div className="text-sm text-gray-700">
                <p>
                  <span className="font-semibold">Connect:</span>{" "}
                  <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    LinkedIn
                  </a>
                  {" • "}
                  <a href="https://github.com/andresKillem" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    GitHub
                  </a>
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Current Work */}
            <section id="experience" className="mb-16">
              <h2 className="text-3xl font-serif mb-6">What I&apos;m doing now</h2>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-2">Expert Solutions Architect @ Deuna</h3>
                <p className="text-gray-600 text-sm mb-3">2023 - Present • Quito, Ecuador (Remote)</p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Design AWS-based microservices payment systems for FinTech compliance</li>
                  <li>• Architect mobile payment platforms prioritizing security and user experience</li>
                  <li>• Implement robust security frameworks for sensitive payment data protection</li>
                  <li>• Optimize performance through continuous monitoring and system integration</li>
                </ul>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Projects */}
            <section id="projects" className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Selected Projects</h2>

              <div className="space-y-6">
                <div className="border-l-4 border-blue-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">FinTech Payment Infrastructure @ Deuna</h3>
                  <p className="text-gray-700 mb-2">
                    Designed secure, compliant microservices architecture for payment processing with AWS, ensuring PCI-DSS compliance
                    and real-time transaction processing. Transformed legacy monolith processing 100 TPS into event-driven microservices
                    handling 1,500+ TPS with sub-second latency.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Impact:</strong> 99.95% success rate, 450ms latency, full PCI-DSS compliance
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tech:</strong> AWS, Go, Microservices, API Gateway, DynamoDB, Lambda
                  </p>
                </div>

                <div className="border-l-4 border-purple-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Multi-Cloud DevOps Transformation @ Housecall Pro</h3>
                  <p className="text-gray-700 mb-2">
                    Led enterprise DevOps transformation for SaaS platform serving millions. Architected multi-cloud solutions (AWS/Azure)
                    with global RDS replication and cross-region DR. Reduced MTTR by 40% through comprehensive observability stack.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Impact:</strong> 40% MTTR reduction, 20% cost savings, 99.9% uptime
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tech:</strong> AWS, Azure, Kubernetes, Terraform, Datadog, Prometheus, Istio
                  </p>
                </div>

                <div className="border-l-4 border-green-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Multi-Region Disaster Recovery Architecture @ Housecall Pro</h3>
                  <p className="text-gray-700 mb-2">
                    Architected and implemented comprehensive multi-region disaster recovery solution with automated failover capabilities.
                    Designed infrastructure spanning multiple AWS regions with RDS cross-region replication, GitLab HA setup, and
                    infrastructure as code using Terraform and Terragrunt for consistent deployments.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Impact:</strong> 99.99% availability, &lt;5min RTO, &lt;15min RPO, zero data loss during DR tests
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tech:</strong> AWS Multi-Region, RDS Cross-Region Replication, GitLab HA, Terraform, Terragrunt, Route53
                  </p>
                </div>

                <div className="border-l-4 border-orange-500 pl-4">
                  <h3 className="text-lg font-semibold mb-2">Unified API Platform @ Kushki</h3>
                  <p className="text-gray-700 mb-2">
                    Architected unified API platform with focus on governance and developer experience for payment processing across
                    Latin America. Developed Go-based microservices following best practices.
                  </p>
                  <p className="text-sm text-gray-600">
                    <strong>Tech:</strong> AWS, Go, API Platform, Microservices, DevOps
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Experience */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Experience</h2>

              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-semibold">Senior DevOps Engineer @ Housecall Pro</h3>
                  <p className="text-gray-600 text-sm mb-2">2021 - 2025 • San Diego, CA (Remote)</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Led enterprise DevOps transformation for SaaS platform serving millions of users</li>
                    <li>• Architected multi-cloud solutions (AWS/Azure) with global RDS replication</li>
                    <li>• Reduced MTTR by 40% through Datadog, Prometheus observability at scale</li>
                    <li>• Partnered with C-Level leadership to reduce annual cloud spend by 20%</li>
                    <li>• Designed secure EKS clusters with Istio service mesh</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">Cloud Applications Architect @ Kushki</h3>
                  <p className="text-gray-600 text-sm mb-2">2021 - 2023 • Quito, Ecuador</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Architected unified API platform with focus on governance and developer experience</li>
                    <li>• Led technical initiatives alongside business, development, and infrastructure teams</li>
                    <li>• Developed Go-based solutions following software development best practices</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-semibold">DevOps Architect @ Banco Pichincha</h3>
                  <p className="text-gray-600 text-sm mb-2">2021 • Ecuador</p>
                  <ul className="space-y-1 text-gray-700 text-sm">
                    <li>• Established DevOps practices across banking organization</li>
                    <li>• Automated deployment processes with CI/CD pipelines</li>
                  </ul>
                </div>

                <p className="text-sm text-gray-600 mt-6">
                  Also worked with: <strong>Bixlabs</strong> (Senior Software Engineer, 2017-2019),{" "}
                  <strong>Telefónica</strong> (Outsourcing Development Manager, 2016-2017),{" "}
                  <strong>Kruger Corporation</strong> (Project Leader, 2011-2015)
                </p>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Education */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Education</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold">M.Sc. Mobile Computing</h3>
                  <p className="text-gray-600 text-sm">Instituto Politécnico de Leiria, Portugal</p>
                </div>
                <div>
                  <h3 className="font-semibold">B.S. Computer Engineering</h3>
                  <p className="text-gray-600 text-sm">ESPE, Ecuador</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Certifications */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Certifications</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">AWS Certified Solutions Architect - Professional</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Microsoft Azure Solutions Architect Expert</span>
                </li>
                <li className="flex items-start">
                  <span className="text-green-600 mr-2">✓</span>
                  <span className="text-gray-700">Certified Kubernetes Administrator (CKA)</span>
                </li>
              </ul>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Skills */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Key expertise</h2>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="font-semibold mb-2">Cloud & Platform</h3>
                  <p className="text-sm text-gray-700">AWS Control Tower, Landing Zones, Azure Multi-Subscription, Kubernetes at Scale</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">DevOps & CI/CD</h3>
                  <p className="text-sm text-gray-700">Terraform, GitOps, ArgoCD, GitHub Actions, Infrastructure as Code</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Security</h3>
                  <p className="text-sm text-gray-700">Zero Trust Architecture, IAM Hardening, FinTech Compliance</p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Observability</h3>
                  <p className="text-sm text-gray-700">Datadog, Prometheus, Grafana, Distributed Tracing, APM</p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* AI Implementation & Ethics */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">AI in Daily Practice</h2>
              <div className="bg-gray-50 border-l-4 border-purple-500 p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3">How I&apos;m Leveraging AI</h3>
                <p className="text-gray-700 mb-4">
                  As a solutions architect, I&apos;ve integrated AI tools into my daily workflow for code review, infrastructure
                  design validation, and documentation generation. AI serves as a force multiplier for routine tasks, allowing me
                  to focus on architectural decisions and strategic thinking.
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• Using AI-assisted code review to catch security vulnerabilities and best practice violations</li>
                  <li>• Generating infrastructure documentation and runbooks with AI, then validating with team expertise</li>
                  <li>• Leveraging AI for rapid prototyping of Terraform modules and policy-as-code implementations</li>
                  <li>• Automating incident response documentation while maintaining human oversight</li>
                </ul>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6">
                <h3 className="text-xl font-semibold mb-3">The Ethics of AI-Driven Development</h3>
                <p className="text-gray-700 mb-4">
                  With AI integration comes responsibility. I maintain strict principles around AI usage:
                </p>
                <ul className="space-y-2 text-gray-700">
                  <li>• <strong>Human Validation:</strong> Never deploy AI-generated code or infrastructure without thorough review and testing</li>
                  <li>• <strong>Transparency:</strong> Always disclose when AI assists in deliverables to clients and teams</li>
                  <li>• <strong>Data Privacy:</strong> Ensure no sensitive client data or proprietary information enters AI tools</li>
                  <li>• <strong>Skill Preservation:</strong> Use AI to augment, not replace, fundamental engineering skills</li>
                </ul>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Writing */}
            <section id="writing" className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Writing</h2>
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3 text-orange-900">
                    The Productivity Paradox of AI: A Hypothesis
                  </h3>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    We stand at an inflection point. AI promises unprecedented productivity gains—generating code in seconds,
                    automating infrastructure deployment, and solving complex problems instantly. But here&apos;s the question we must ask:
                  </p>
                  <p className="text-lg font-medium text-gray-900 mb-4 italic border-l-4 border-orange-400 pl-4">
                    &quot;Are we entering a productivity boom that elevates our capabilities, or a bubble that erodes our fundamental
                    engineering muscle memory?&quot;
                  </p>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    I&apos;ve observed engineers who can deploy entire Kubernetes clusters with AI assistance but struggle to debug
                    a basic networking issue. We can generate Terraform modules in minutes but lose the intuition for infrastructure
                    design patterns earned through years of trial and error.
                  </p>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    <strong>The hypothesis:</strong> AI creates a bifurcation in engineering competency. Those who use it as a force
                    multiplier—understanding the fundamentals and using AI to accelerate—will reach new heights. Those who rely on
                    it as a crutch risk becoming operators of tools they don&apos;t understand, vulnerable when AI fails or produces
                    incorrect solutions.
                  </p>
                  <p className="text-gray-800 mb-4 leading-relaxed">
                    The muscle memory we lose—the ability to write algorithms without autocomplete, design systems without AI
                    suggestions, debug without AI-generated hypotheses—may be the very foundation that allows us to validate
                    AI&apos;s outputs and catch its hallucinations.
                  </p>
                  <p className="text-gray-800 leading-relaxed">
                    <strong>The open question:</strong> Will the next generation of engineers be more productive because they stand
                    on the shoulders of AI, or less resilient because they never built the foundational skills to question it?
                    Only time will tell if this is a sustainable productivity revolution or a bubble waiting to expose our collective
                    technical debt.
                  </p>
                  <div className="mt-6 pt-4 border-t border-orange-200">
                    <p className="text-sm text-gray-600 italic">
                      This is a working hypothesis based on observations in modern DevOps and SRE practices. I invite debate,
                      criticism, and alternative perspectives.
                    </p>
                  </div>
                </div>

                <div className="border-t border-gray-200 my-8"></div>

                <div>
                  <a
                    href="https://www.encora.com/insights/diving-deep-into-devsecops-key-considerations"
                    className="text-blue-700 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Diving Deep into DevSecOps
                  </a>
                  <p className="text-sm text-gray-600">Key considerations for implementing DevSecOps practices</p>
                </div>
                <div>
                  <a
                    href="https://medium.com/@andreco87/diving-deep-into-sre-responsibilities-sre-vs-devops-41f97f8cd597"
                    className="text-blue-700 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    SRE Responsibilities: SRE vs DevOps
                  </a>
                  <p className="text-sm text-gray-600">Understanding the differences and overlap</p>
                </div>
                <div>
                  <a
                    href="https://www.researchgate.net/project/Plugin-Para-Inspeccion-de-Participacion-de-Foros-en-Moodle-Utilizando-Tecnicas-de-Analisis-De-Redes-Sociales"
                    className="text-blue-700 hover:underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Research: Social Network Analysis for Moodle Forums
                  </a>
                  <p className="text-sm text-gray-600">Academic research on educational platforms</p>
                </div>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-8">

            {/* Info Box */}
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <p className="text-sm mb-4">
                Hi folks. I&apos;m{" "}
                <a href="https://www.linkedin.com/in/andres-munoz/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">
                  Andrés Muñoz
                </a>
                .
              </p>
              <p className="text-sm mb-4">
                I&apos;m an Expert Solutions Architect specializing in cloud infrastructure and DevOps transformation.
              </p>
              <p className="text-sm">
                Check out my{" "}
                <a href="#projects" className="text-blue-700 hover:underline">
                  selected projects
                </a>
                {" "}or{" "}
                <a href="#writing" className="text-blue-700 hover:underline">
                  technical writing
                </a>
                .
              </p>
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
