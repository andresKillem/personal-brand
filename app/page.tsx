import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-4xl mx-auto px-6 py-12 sm:py-20 min-h-screen bg-white text-gray-900">
      {/* Header with Photo */}
      <header className="mb-12 pb-8 border-b border-gray-300">
        <div className="flex flex-col sm:flex-row items-start gap-8 mb-6">
          <div className="flex-shrink-0">
            <Image
              src="/profile.jpg"
              alt="Andrés Muñoz"
              width={150}
              height={150}
              className="rounded-lg shadow-md"
            />
          </div>
          <div className="flex-1">
            <h1 className="text-5xl font-serif mb-3">Andrés Muñoz</h1>
            <p className="text-2xl text-gray-600 mb-4">Expert Solutions Architect</p>
            <p className="text-lg text-gray-700 leading-relaxed">
              PhD in Computer Science specializing in cloud architecture, DevOps transformation, and platform engineering.
              Currently architecting payment systems at Deuna serving millions across Latin America.
            </p>
          </div>
        </div>
      </header>

      {/* About */}
      <section className="mb-12">
        <p className="text-lg leading-relaxed mb-4">
          I&apos;m a principal-level architect who combines deep technical expertise with strategic business impact.
          My work focuses on designing AWS multi-account architectures, implementing Zero Trust security, and building
          highly available systems that serve millions of users.
        </p>
        <p className="text-lg leading-relaxed">
          I specialize in transforming legacy infrastructure into modern cloud-native platforms, reducing costs by 20-40%
          while improving deployment frequency and system reliability.
        </p>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Current Work */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">What I&apos;m doing now</h2>
        <div className="mb-6">
          <h3 className="text-xl font-semibold mb-2">Expert Solutions Architect @ Deuna</h3>
          <p className="text-gray-600 mb-2">2023 - Present • Quito, Ecuador (Remote)</p>
          <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
            <li>Design AWS-based microservices payment systems for FinTech compliance</li>
            <li>Architect mobile payment platforms prioritizing security and user experience</li>
            <li>Implement robust security frameworks for sensitive payment data protection</li>
            <li>Optimize performance through continuous monitoring and system integration</li>
          </ul>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Experience */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Experience</h2>

        <div className="space-y-8">
          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">Senior DevOps Engineer</h3>
              <span className="text-gray-600 ml-2">• Housecall Pro</span>
            </div>
            <p className="text-gray-600 mb-2">2021 - 2025 • San Diego, CA (Remote)</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Led enterprise DevOps transformation for SaaS platform serving millions of users</li>
              <li>Architected multi-cloud solutions (AWS/Azure) with global RDS replication and cross-region DR</li>
              <li>Reduced MTTR by 40% through Datadog, Prometheus observability at scale</li>
              <li>Partnered with C-Level leadership to reduce annual cloud spend by 20%</li>
              <li>Designed secure EKS clusters with Istio service mesh for financial services compliance</li>
            </ul>
          </div>

          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">Cloud Applications Architect</h3>
              <span className="text-gray-600 ml-2">• Kushki</span>
            </div>
            <p className="text-gray-600 mb-2">2021 - 2023 • Quito, Ecuador</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Architected unified API platform with focus on governance and developer experience</li>
              <li>Led technical initiatives alongside business, development, and infrastructure teams</li>
              <li>Developed Go-based solutions following software development best practices</li>
              <li>Implemented AWS best practices for scalable payment infrastructure</li>
            </ul>
          </div>

          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">DevOps Architect</h3>
              <span className="text-gray-600 ml-2">• Banco Pichincha</span>
            </div>
            <p className="text-gray-600 mb-2">2021 • Ecuador</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Established DevOps practices across banking organization</li>
              <li>Automated deployment processes with CI/CD pipelines</li>
              <li>Led teams with leadership mindset to facilitate development and operations</li>
            </ul>
          </div>

          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">Senior Software Engineer</h3>
              <span className="text-gray-600 ml-2">• Bixlabs</span>
            </div>
            <p className="text-gray-600 mb-2">2017 - 2019 • Ecuador</p>
          </div>

          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">Outsourcing Development Manager</h3>
              <span className="text-gray-600 ml-2">• Telefónica</span>
            </div>
            <p className="text-gray-600 mb-2">2016 - 2017 • Ecuador</p>
            <ul className="list-disc list-inside space-y-1 text-gray-700 ml-4">
              <li>Managed software development lifecycle across all stages</li>
              <li>Architected technological solutions for internal business requirements</li>
            </ul>
          </div>

          <div>
            <div className="mb-3">
              <h3 className="text-xl font-semibold inline">Project Leader</h3>
              <span className="text-gray-600 ml-2">• Kruger Corporation</span>
            </div>
            <p className="text-gray-600 mb-2">2011 - 2015 • Ecuador</p>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Skills */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Areas of expertise</h2>

        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-3">Cloud Architecture & Platform Engineering</h3>
            <div className="space-y-2 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">AWS (Control Tower, Landing Zones, Organizations)</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Azure Multi-Subscription Architecture</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Kubernetes (EKS, AKS, GKE) at Scale</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Service Mesh (Istio, Linkerd)</span>
                <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">Advanced</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">DevOps & CI/CD Excellence</h3>
            <div className="space-y-2 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Infrastructure as Code (Terraform, CloudFormation)</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">GitOps (ArgoCD, Flux)</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">GitHub Actions, GitLab CI, Jenkins</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-3">Security & Compliance</h3>
            <div className="space-y-2 ml-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Zero Trust Architecture</span>
                <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">Advanced</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">IAM Policies & Hardening</span>
                <span className="text-sm font-medium text-green-700 bg-green-50 px-2 py-1 rounded">Expert</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-gray-700">FinTech & Healthcare Compliance</span>
                <span className="text-sm font-medium text-blue-700 bg-blue-50 px-2 py-1 rounded">Advanced</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Education */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Education</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold">PhD in Computer Science</h3>
            <p className="text-gray-600">Universidad de Vigo, Spain</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">M.Sc. Mobile Computing</h3>
            <p className="text-gray-600">Instituto Politécnico de Leiria, Portugal</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold">B.S. Computer Engineering</h3>
            <p className="text-gray-600">ESPE, Ecuador</p>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Certifications */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Certifications</h2>
        <ul className="space-y-2 ml-4">
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">AWS Certified Solutions Architect - Professional</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Microsoft Azure Solutions Architect Expert</span>
          </li>
          <li className="flex items-center">
            <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-gray-700">Certified Kubernetes Administrator (CKA)</span>
          </li>
        </ul>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Writing */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Writing</h2>
        <div className="space-y-3">
          <div>
            <a
              href="https://www.encora.com/insights/diving-deep-into-devsecops-key-considerations"
              className="text-blue-700 hover:text-blue-900 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Diving Deep into DevSecOps
            </a>
            <p className="text-gray-600 text-sm mt-1">Encora • Key considerations for implementing DevSecOps practices</p>
          </div>
          <div>
            <a
              href="https://medium.com/@andreco87/diving-deep-into-sre-responsibilities-sre-vs-devops-41f97f8cd597"
              className="text-blue-700 hover:text-blue-900 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              SRE Responsibilities: SRE vs DevOps
            </a>
            <p className="text-gray-600 text-sm mt-1">Medium • Understanding the differences and overlap between SRE and DevOps</p>
          </div>
          <div>
            <a
              href="https://www.researchgate.net/project/Plugin-Para-Inspeccion-de-Participacion-de-Foros-en-Moodle-Utilizando-Tecnicas-de-Analisis-De-Redes-Sociales"
              className="text-blue-700 hover:text-blue-900 underline text-lg"
              target="_blank"
              rel="noopener noreferrer"
            >
              Plugin Para Inspección de Participación de Foros en Moodle
            </a>
            <p className="text-gray-600 text-sm mt-1">ResearchGate • Research on social network analysis techniques for Moodle forums</p>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Terminal - Quick Reference */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Quick reference</h2>
        <div className="bg-gray-900 rounded-lg p-6 font-mono text-sm overflow-x-auto">
          <div className="text-green-400 mb-4">$ whoami</div>
          <div className="text-gray-300 space-y-2">
            <div>name: Andrés Muñoz</div>
            <div>role: Expert Solutions Architect, DevOps & SRE</div>
            <div>location: Remote (Ecuador)</div>
            <div>education: PhD Computer Science</div>
            <div>github: <a href="https://github.com/andresKillem" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">github.com/andresKillem</a></div>
            <div>linkedin: <a href="https://www.linkedin.com/in/andresmunozb" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">linkedin.com/in/andresmunozb</a></div>
            <div>email: <a href="mailto:contact@andresmunoz.dev" className="text-blue-400 hover:underline">contact@andresmunoz.dev</a></div>
          </div>
        </div>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Fun Facts / Hobbies */}
      <section className="mb-12">
        <h2 className="text-3xl font-serif mb-6">Beyond work</h2>
        <p className="text-lg text-gray-700 leading-relaxed mb-4">
          When I&apos;m not designing cloud architectures or optimizing CI/CD pipelines, you&apos;ll find me:
        </p>
        <ul className="list-disc list-inside space-y-2 text-gray-700 ml-4">
          <li>Reading technical books and staying current with cloud-native technologies</li>
          <li>Contributing to open-source DevOps tools and infrastructure projects</li>
          <li>Mentoring junior engineers and sharing knowledge through technical writing</li>
          <li>Exploring new automation techniques and infrastructure patterns</li>
        </ul>
      </section>

      <div className="my-10 border-t border-gray-300"></div>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-300">
        <div className="flex flex-wrap gap-6 text-sm mb-6">
          <a
            href="https://github.com/andresKillem"
            className="text-gray-600 hover:text-gray-900 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/andresmunozb"
            className="text-gray-600 hover:text-gray-900 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://medium.com/@andresmunozb"
            className="text-gray-600 hover:text-gray-900 font-medium"
            target="_blank"
            rel="noopener noreferrer"
          >
            Medium
          </a>
          <a
            href="mailto:contact@andresmunoz.dev"
            className="text-gray-600 hover:text-gray-900 font-medium"
          >
            Email
          </a>
        </div>
        <div className="text-sm text-gray-500">
          © 2025 Andrés Muñoz
        </div>
      </footer>
    </main>
  );
}
