"use client";

interface Publication {
  title: string;
  url: string;
  platform: string;
  icon: string;
}

export const Publications = () => {
  const publications: Publication[] = [
    {
      title: "Diving Deep into DevSecOps",
      url: "https://www.encora.com/insights/diving-deep-into-devsecops-key-considerations",
      platform: "Encora",
      icon: "🔐"
    },
    {
      title: "Plugin Para Inspección de Participación de Foros en Moodle",
      url: "https://www.researchgate.net/project/Plugin-Para-Inspeccion-de-Participacion-de-Foros-en-Moodle-Utilizando-Tecnicas-de-Analisis-De-Redes-Sociales",
      platform: "ResearchGate",
      icon: "🎓"
    },
    {
      title: "SRE Responsibilities: SRE vs DevOps",
      url: "https://medium.com/@andreco87/diving-deep-into-sre-responsibilities-sre-vs-devops-41f97f8cd597",
      platform: "Medium",
      icon: "📝"
    }
  ];

  return (
    <section id="publications" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-900/50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
          Publications
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Technical articles and research contributions
        </p>

        <div className="grid gap-6 md:grid-cols-1 lg:grid-cols-1">
          {publications.map((pub, idx) => (
            <a
              key={idx}
              href={pub.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-gray-800/50 hover:bg-gray-700/50 rounded-xl p-6 border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 group"
            >
              <div className="flex items-start gap-4">
                <div className="text-4xl flex-shrink-0">{pub.icon}</div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-cyan-300 group-hover:text-cyan-200 mb-2">
                    {pub.title}
                  </h3>
                  <p className="text-sm text-gray-500">{pub.platform}</p>
                </div>
                <svg
                  className="w-6 h-6 text-gray-500 group-hover:text-cyan-400 flex-shrink-0 transition-colors"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                  />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};
