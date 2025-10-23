export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <a href="#" className="hover:text-gray-900">Andrés Muñoz</a>
            </div>
            <div className="flex gap-6 text-sm">
              <a href="#writing" className="text-gray-600 hover:text-gray-900">Writing</a>
              <a href="#experience" className="text-gray-600 hover:text-gray-900">Experience</a>
              <a href="#contact" className="text-gray-600 hover:text-gray-900">Contact</a>
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
                  I&apos;m a principal-level architect with a PhD in Computer Science, specializing in cloud architecture,
                  DevOps transformation, and platform engineering. Currently architecting payment systems at Deuna serving
                  millions across Latin America.
                </p>
                <p className="mb-4">
                  I focus on designing AWS multi-account architectures, implementing Zero Trust security, and building highly
                  available systems. My work transforms legacy infrastructure into modern cloud-native platforms, reducing costs
                  by 20-40% while improving deployment frequency and system reliability.
                </p>
              </div>

              <div className="border-t border-gray-200 my-8"></div>

              {/* Contact Info */}
              <div className="text-sm text-gray-700">
                <p className="mb-2">
                  <span className="font-semibold">Email:</span>{" "}
                  <a href="mailto:andreco87@hotmail.com" className="text-blue-700 hover:underline">
                    andreco87@hotmail.com
                  </a>
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Phone:</span> (203) 918-1392
                </p>
                <p className="mb-2">
                  <span className="font-semibold">Location:</span> Stamford, CT - Remote Available
                </p>
                <p>
                  <span className="font-semibold">LinkedIn:</span>{" "}
                  <a href="https://www.linkedin.com/in/andresmunozb" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
                    linkedin.com/in/andresmunozb
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
                  <h3 className="font-semibold">PhD in Computer Science</h3>
                  <p className="text-gray-600 text-sm">Universidad de Vigo, Spain</p>
                </div>
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

            {/* Writing */}
            <section id="writing" className="mb-16">
              <h2 className="text-3xl font-serif mb-6">Writing</h2>
              <div className="space-y-4">
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
                <a href="https://www.linkedin.com/in/andresmunozb" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline font-medium">
                  Andrés Muñoz
                </a>
                .
              </p>
              <p className="text-sm mb-4">
                If you&apos;re looking to reach out to me, here are{" "}
                <a href="#contact" className="text-blue-700 hover:underline">
                  ways I help
                </a>
                .
              </p>
              <p className="text-sm mb-4">
                Want to see my latest work?{" "}
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7255636517673398273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline"
                >
                  Check out my video
                </a>
                .
              </p>
            </div>

            {/* LinkedIn Video Embed */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Latest Work</h3>
              <div className="aspect-video bg-gray-100 rounded flex items-center justify-center mb-3">
                <a
                  href="https://www.linkedin.com/feed/update/urn:li:activity:7255636517673398273/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 hover:underline text-sm text-center px-4"
                >
                  Watch Video on LinkedIn →
                </a>
              </div>
              <p className="text-xs text-gray-600">DevOps & Cloud Architecture showcase</p>
            </div>

            {/* Books Section */}
            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">Recommended Reading</h3>
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
                  <a href="https://www.linkedin.com/in/andresmunozb" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">
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
                <div>phd: Computer Science</div>
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
      <footer id="contact" className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-4">
            <a href="https://github.com/andresKillem" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              GitHub
            </a>
            <a href="https://www.linkedin.com/in/andresmunozb" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              LinkedIn
            </a>
            <a href="https://medium.com/@andresmunozb" target="_blank" rel="noopener noreferrer" className="hover:text-gray-900">
              Medium
            </a>
            <a href="mailto:andreco87@hotmail.com" className="hover:text-gray-900">
              Email
            </a>
          </div>
          <p className="text-sm text-gray-500">© 2025 Andrés Muñoz</p>
        </div>
      </footer>
    </div>
  );
}
