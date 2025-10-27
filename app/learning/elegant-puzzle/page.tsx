'use client';

import { useState } from 'react';
import Link from 'next/link';
import MermaidDiagram from '@/components/MermaidDiagram';

export default function ElegantPuzzlePage() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = {
    en: {
      home: 'Home',
      learning: 'Learning',
      writing: 'Writing',
      contents: 'Contents',
      overview: 'Overview',
      globalMap: 'Global Mind Map',
      organizations: 'Organizations',
      tools: 'Tools',
      approaches: 'Approaches',
      culture: 'Culture',
      careers: 'Careers',
      comparison: 'Comparative Table',
      conclusion: 'Conclusion',
      getBook: '📘 Get the Book',
      backToLearning: '← Back to Learning',
      subtitle: 'Systems of Engineering Management',
      by: 'by',
      quote: '"Viewing engineering management challenges as system puzzles that can be modeled, controlled, and improved."',
      overviewTitle: 'Overview',
      whatIsAbout: 'What is this book about?',
      aboutDesc: 'An Elegant Puzzle by Will Larson addresses the challenges of engineering management from a systems thinking perspective — seeing teams, organization, processes, and technology as an interconnected system rather than isolated pieces.',
      bookStructure: 'Book Structure',
      orgSection: 'Organizations',
      orgDesc: 'Team design, sizing, structure, and team states',
      toolsSection: 'Tools',
      toolsDesc: 'Systems thinking, metrics, migrations, and technical debt',
      approachesSection: 'Approaches',
      approachesDesc: 'Reorganizations, delegation, time management, and priorities',
      cultureSection: 'Culture',
      cultureDesc: 'Building team culture, learning, and psychological safety',
      careersSection: 'Careers',
      careersDesc: 'Hiring, development, leadership, and succession planning',

      // Organizations
      optimalTeamSize: 'Card 1: Optimal Team Size',
      directManager: 'Direct manager',
      managerOfManagers: 'Manager of managers',
      techLeadManager: 'Tech Lead Manager',
      teamStates: 'Card 2: Team States',
      teamStatesDesc: 'Larson defines that teams go through different states based on their productivity, technical debt, slack, and innovation.',
      fallingBehind: '1. Falling Behind',
      fallingBehindDesc: 'Backlog grows faster than the team can complete. Low morale, high effort, little progress.',
      fallingBehindSolution: '✓ Solution: Hire/expand the team',
      treadingWater: '2. Treading Water',
      treadingWaterDesc: 'Maintains usual pace but cannot tackle new projects or reduce technical debt.',
      treadingWaterSolution: '✓ Solution: Reduce WIP (Work in Progress), focus on fewer tasks',
      repayingDebt: '3. Repaying Debt',
      repayingDebtDesc: 'Dedicates substantial time to refactoring, improving infrastructure, and fixing technical debt.',
      repayingDebtSolution: '✓ Solution: Provide additional time to complete improvements',
      innovating: '4. Innovating',
      innovatingDesc: 'Has enough slack to undertake new projects and quality improvements. Ideal state.',
      innovatingSolution: '✓ Solution: Protect slack - do not overload the team',

      // Tools
      systemsThinking: 'Systems Thinking',
      systemsThinkingDesc: 'The central tool of the book: seeing complex problems as a system of stocks (accumulations) and flows.',
      migrationsTitle: 'Migrations and Technical Debt',
      migrationsKey: 'Key message: In large systems, the only way to significantly reduce technical debt is through massive migrations.',
      migrationsPhases: 'Playbook in 3 Phases:',
      phase1: 'Phase 1: De-Risk',
      phase1Desc: 'Define plan in design doc, socialize with hardest teams first, implement pilot',
      phase2: 'Phase 2: Enable',
      phase2Desc: 'Develop tools that automate 90% of work, provide clear documentation',
      phase3: 'Phase 3: Finish',
      phase3Desc: 'Close the tap: nothing new in old tech, monitor progress, complete last stretches',

      // Approaches
      sayingNo: 'Saying "No" with Reasons',
      sayingNoDesc: 'Saying no is explaining your team\'s limitations to others, one of the most important activities in engineering leadership.',

      // Culture
      firstTeam: 'Peers as "First Team"',
      firstTeamDesc: 'One of the most valuable tips: treat your peer leaders as your primary team, not just your direct team.',

      // Careers
      rolesOverRockets: 'Roles over "Rockets"',
      rolesDesc: 'In "Roles over rocket ships", Larson dismantles the idea that joining a hot company automatically grows your career.',

      // Conclusion
      keyRecommendations: 'Key Recommendations',
      rec1: 'Continuously evaluate team health (states: falling behind, treading water, repaying debt, innovating)',
      rec2: 'Address technical debt with well-planned migrations instead of patches',
      rec3: 'Communicate technical proposals in business language to gain support',
      rec4: 'Create communities and networks of trust among peers',
      rec5: 'Promote culture where quality of life and technical excellence go hand in hand',
      rec6: 'Make continuous improvement of people and processes a habit',

      finalQuote: '"In practice, there will be iteration, adaptation, and sometimes improvisation; but with the strategies from An Elegant Puzzle in your arsenal, you\'ll be better prepared to elegantly solve the complex puzzles of large-scale engineering."',

      wantMore: 'Want to dive deeper?',
      getFullBook: 'Get the full book and apply these concepts in your organization',
      buyBook: '📘 Buy the Book',
      backToLearning2: '← Back to Learning',
    },
    es: {
      home: 'Inicio',
      learning: 'Aprendizaje',
      writing: 'Escritura',
      contents: 'Contenidos',
      overview: 'Visión General',
      globalMap: 'Mapa Mental Global',
      organizations: 'Organizaciones',
      tools: 'Herramientas',
      approaches: 'Enfoques',
      culture: 'Cultura',
      careers: 'Carreras',
      comparison: 'Tabla Comparativa',
      conclusion: 'Conclusión',
      getBook: '📘 Conseguir el Libro',
      backToLearning: '← Volver a Learning',
      subtitle: 'Sistemas de Gestión de Ingeniería',
      by: 'por',
      quote: '"Ver los retos de gestión de ingeniería como puzzles de sistemas que se pueden modelar, controlar y mejorar."',
      overviewTitle: 'Visión General',
      whatIsAbout: '¿De qué trata el libro?',
      aboutDesc: 'An Elegant Puzzle de Will Larson aborda los retos de la gestión de ingeniería desde una perspectiva de sistemas — ver los equipos, la organización, los procesos y la tecnología como un sistema interconectado más que piezas aisladas.',
      bookStructure: 'Estructura del Libro',
      orgSection: 'Organizaciones',
      orgDesc: 'Diseño de equipos, tamaño, estructura y estados del equipo',
      toolsSection: 'Herramientas',
      toolsDesc: 'Pensamiento de sistemas, métricas, migraciones y deuda técnica',
      approachesSection: 'Enfoques',
      approachesDesc: 'Reorganizaciones, delegación, gestión de tiempo y prioridades',
      cultureSection: 'Cultura',
      cultureDesc: 'Construcción de cultura de equipo, aprendizaje y seguridad psicológica',
      careersSection: 'Carreras',
      careersDesc: 'Contratación, desarrollo, liderazgo y planificación de sucesión',

      // Organizations
      optimalTeamSize: 'Tarjeta 1: Tamaño Óptimo del Equipo',
      directManager: 'Manager directo',
      managerOfManagers: 'Manager de managers',
      techLeadManager: 'Tech Lead Manager',
      teamStates: 'Tarjeta 2: Estados del Equipo',
      teamStatesDesc: 'Larson define que los equipos pasan por distintos estados según su productividad, deuda técnica, slack e innovación.',
      fallingBehind: '1. Rezagado (Falling Behind)',
      fallingBehindDesc: 'El backlog crece más rápido de lo que el equipo puede completar. Moral baja, mucho esfuerzo, poco avance.',
      fallingBehindSolution: '✓ Solución: Contratar/expandir el equipo',
      treadingWater: '2. Estancado (Treading Water)',
      treadingWaterDesc: 'Mantiene el ritmo habitual pero no puede abordar proyectos nuevos ni reducir deuda técnica.',
      treadingWaterSolution: '✓ Solución: Reducir WIP (Work in Progress), enfoque en menos tareas',
      repayingDebt: '3. Pagando Deuda (Repaying Debt)',
      repayingDebtDesc: 'Dedica tiempo sustancial a refactorizar, mejorar infraestructura y corregir deuda técnica.',
      repayingDebtSolution: '✓ Solución: Dar tiempo adicional para completar las mejoras',
      innovating: '4. Innovando (Innovating)',
      innovatingDesc: 'Tiene suficiente slack para emprender proyectos nuevos y mejoras de calidad. Estado ideal.',
      innovatingSolution: '✓ Solución: Proteger el slack - no sobrecargar al equipo',

      // Tools
      systemsThinking: 'Pensamiento Sistémico',
      systemsThinkingDesc: 'La herramienta central del libro: ver problemas complejos como un sistema de stocks (acumulaciones) y flows (flujos).',
      migrationsTitle: 'Migraciones y Deuda Técnica',
      migrationsKey: 'Mensaje clave: En sistemas grandes, la única forma de reducir significativamente la deuda técnica es a través de migraciones masivas.',
      migrationsPhases: 'Playbook en 3 Fases:',
      phase1: 'Fase 1: De-Risk (Mitigar Riesgos)',
      phase1Desc: 'Define plan en documento de diseño, socializa con equipos difíciles primero, implementa piloto',
      phase2: 'Fase 2: Enable (Habilitar)',
      phase2Desc: 'Desarrolla herramientas que automaticen el 90% del trabajo, provee documentación clara',
      phase3: 'Fase 3: Finish (Finalizar)',
      phase3Desc: 'Cierra el grifo: nada nuevo en tecnología vieja, monitorea progreso, completa últimos tramos',

      // Approaches
      sayingNo: 'Decir "No" con Fundamentos',
      sayingNoDesc: 'Decir no es explicar las limitaciones de tu equipo a otros, una de las actividades más importantes del liderazgo de ingeniería.',

      // Culture
      firstTeam: 'Los Pares como "Primer Equipo"',
      firstTeamDesc: 'Uno de los consejos más valiosos: trata a tus colegas líderes como tu equipo principal, no solo a tu equipo directo.',

      // Careers
      rolesOverRockets: 'Roles sobre "Cohetes"',
      rolesDesc: 'En "Roles over rocket ships", Larson desmonta la idea de que basta con unirse a una compañía hot para crecer automáticamente.',

      // Conclusion
      keyRecommendations: 'Recomendaciones Clave',
      rec1: 'Evaluar continuamente la salud de los equipos (estados: rezagado, estancado, pagando deuda, innovando)',
      rec2: 'Encarar la deuda técnica con migraciones bien planificadas en vez de parches',
      rec3: 'Comunicar propuestas técnicas en lenguaje de negocio para obtener apoyo',
      rec4: 'Crear comunidades y redes de confianza entre pares',
      rec5: 'Promover cultura donde calidad de vida y excelencia técnica van de la mano',
      rec6: 'Hacer de la mejora continua de personas y procesos un hábito',

      finalQuote: '"En la práctica, habrá que iterar, adaptar y a veces improvisar; pero con las estrategias de An Elegant Puzzle en tu arsenal, estarás mejor preparado para resolver con elegancia los complejos rompecabezas de la ingeniería a gran escala."',

      wantMore: '¿Quieres profundizar más?',
      getFullBook: 'Consigue el libro completo y aplica estos conceptos en tu organización',
      buyBook: '📘 Comprar el Libro',
      backToLearning2: '← Volver a Learning',
    }
  };

  const currentLang = t[language];

  const globalMapDiagram = `graph TD
    A[An Elegant Puzzle] --> B[Organizations]
    A --> C[Tools]
    A --> D[Approaches]
    A --> E[Culture]
    A --> F[Careers]

    B --> B1[Team Sizing & Structure]
    B --> B2[States of Teams]
    B --> B3[Organizational Risk & Design]

    C --> C1[Systems Thinking]
    C --> C2[Metrics & Baselines]
    C --> C3[Migrations & Technical Debt]

    D --> D1[Reorgs & Scope]
    D --> D2[Time & Leverage]
    D --> D3[Problem Selection]

    E --> E1[Team Culture]
    E --> E2[Psychological Safety]
    E --> E3[Policy vs Norms]

    F --> F1[Hiring & Interviewing]
    F --> F2[Career Ladders & Succession]
    F --> F3[Performance & Promotion]`;

  const teamStatesDiagram = `flowchart LR
    A[Falling Behind] --> B[Treading Water]
    B --> C[Repaying Debt]
    C --> D[Innovating]

    classDef critical fill:#fee,stroke:#f88,stroke-width:2px
    classDef warning fill:#fea,stroke:#f80,stroke-width:2px
    classDef good fill:#afe,stroke:#0f8,stroke-width:2px
    classDef optimal fill:#aef,stroke:#08f,stroke-width:2px

    class A critical
    class B warning
    class C good
    class D optimal`;

  const migrationDiagram = `flowchart LR
    A(Migration Initiative) --> B[Phase 1: De-Risk]
    B --> C[Phase 2: Enable]
    C --> D[Phase 3: Finish]
    D --> E(Legacy System Retired)

    classDef phase fill:#e3f2fd,stroke:#2196f3,stroke-width:2px
    class B,C,D phase`;

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">{currentLang.home}</Link>
              <span className="mx-2">/</span>
              <Link href="/learning" className="hover:text-gray-900">{currentLang.learning}</Link>
            </div>
            <div className="flex gap-6 text-sm items-center">
              <Link href="/#writing" className="text-gray-600 hover:text-gray-900">{currentLang.writing}</Link>
              <Link href="/learning" className="text-gray-900 font-semibold">{currentLang.learning}</Link>

              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'es' : 'en')}
                className="px-3 py-1 text-xs bg-gray-100 hover:bg-gray-200 rounded-full font-medium transition-colors"
                title={language === 'en' ? 'Change to Spanish' : 'Cambiar a Inglés'}
              >
                {language === 'en' ? '🇪🇸 ES' : '🇬🇧 EN'}
              </button>
            </div>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">

          {/* Table of Contents Sidebar */}
          <aside className="lg:col-span-1">
            <div className="sticky top-24 bg-white border border-gray-200 rounded-lg p-4">
              <h3 className="font-semibold mb-4 text-sm uppercase text-gray-500">{currentLang.contents}</h3>
              <nav className="space-y-2 text-sm">
                <a href="#overview" className="block text-blue-700 hover:underline">{currentLang.overview}</a>
                <a href="#global-map" className="block text-blue-700 hover:underline">{currentLang.globalMap}</a>
                <a href="#organizations" className="block text-blue-700 hover:underline">{currentLang.organizations}</a>
                <a href="#tools" className="block text-blue-700 hover:underline">{currentLang.tools}</a>
                <a href="#approaches" className="block text-blue-700 hover:underline">{currentLang.approaches}</a>
                <a href="#culture" className="block text-blue-700 hover:underline">{currentLang.culture}</a>
                <a href="#careers" className="block text-blue-700 hover:underline">{currentLang.careers}</a>
                <a href="#conclusion" className="block text-blue-700 hover:underline">{currentLang.conclusion}</a>
              </nav>

              <div className="mt-6 pt-6 border-t border-gray-200">
                <a
                  href="https://lethain.com/elegant-puzzle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-sm text-blue-700 hover:underline mb-2"
                >
                  {currentLang.getBook}
                </a>
                <a
                  href="/learning"
                  className="block text-sm text-gray-600 hover:text-gray-900"
                >
                  {currentLang.backToLearning}
                </a>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3">

            {/* Hero Section */}
            <div className="mb-12">
              <div className="flex items-start gap-6 mb-6">
                <div className="flex-shrink-0 w-32 h-40 bg-gradient-to-br from-blue-200 to-blue-400 rounded-lg flex items-center justify-center text-6xl shadow-lg">
                  📘
                </div>
                <div className="flex-1">
                  <h1 className="text-4xl font-serif mb-2">An Elegant Puzzle</h1>
                  <p className="text-xl text-gray-600 mb-3">{currentLang.subtitle}</p>
                  <p className="text-md text-gray-500 mb-4">{currentLang.by} Will Larson</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Architecture Leadership</span>
                    <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Systems Thinking</span>
                    <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Technical Debt</span>
                    <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Team Management</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-6 rounded-r-lg">
                <p className="text-lg italic text-gray-800">
                  {currentLang.quote}
                </p>
              </div>
            </div>

            {/* Overview Section */}
            <section id="overview" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-gray-200 pb-2">{currentLang.overviewTitle}</h2>

              <div className="prose max-w-none text-gray-700 space-y-4">
                <p className="text-lg">{currentLang.aboutDesc}</p>

                <div className="bg-gradient-to-r from-purple-50 to-blue-50 border border-purple-200 rounded-lg p-6">
                  <h3 className="text-xl font-semibold mb-3">{currentLang.bookStructure}</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-blue-700 mb-2">📊 {currentLang.orgSection}</h4>
                      <p className="text-sm text-gray-700">{currentLang.orgDesc}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-purple-700 mb-2">🛠 {currentLang.toolsSection}</h4>
                      <p className="text-sm text-gray-700">{currentLang.toolsDesc}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-green-700 mb-2">🎯 {currentLang.approachesSection}</h4>
                      <p className="text-sm text-gray-700">{currentLang.approachesDesc}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-orange-700 mb-2">🌟 {currentLang.cultureSection}</h4>
                      <p className="text-sm text-gray-700">{currentLang.cultureDesc}</p>
                    </div>
                    <div className="bg-white p-4 rounded border border-gray-200">
                      <h4 className="font-semibold text-red-700 mb-2">👥 {currentLang.careersSection}</h4>
                      <p className="text-sm text-gray-700">{currentLang.careersDesc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Global Mind Map */}
            <section id="global-map" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-gray-200 pb-2">{currentLang.globalMap}</h2>

              <div className="bg-white border-2 border-blue-200 rounded-xl p-6">
                <MermaidDiagram chart={globalMapDiagram} />
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* ORGANIZATIONS SECTION */}
            <section id="organizations" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-blue-500 pb-2 text-blue-900">
                📊 {currentLang.organizations}
              </h2>

              {/* Card 1: Team Sizing */}
              <div className="bg-white border-l-4 border-blue-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-blue-900">{currentLang.optimalTeamSize}</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                  <div className="bg-blue-50 p-4 rounded border border-blue-200">
                    <div className="text-2xl font-bold text-blue-700 mb-1">6-8</div>
                    <div className="text-sm text-gray-700">{currentLang.directManager}</div>
                  </div>
                  <div className="bg-purple-50 p-4 rounded border border-purple-200">
                    <div className="text-2xl font-bold text-purple-700 mb-1">4-6</div>
                    <div className="text-sm text-gray-700">{currentLang.managerOfManagers}</div>
                  </div>
                  <div className="bg-orange-50 p-4 rounded border border-orange-200">
                    <div className="text-2xl font-bold text-orange-700 mb-1">&lt; 4</div>
                    <div className="text-sm text-gray-700">{currentLang.techLeadManager}</div>
                  </div>
                </div>
              </div>

              {/* Card 2: Team States */}
              <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-900">{currentLang.teamStates}</h3>
                <p className="text-gray-700 mb-4">{currentLang.teamStatesDesc}</p>

                <div className="mb-6">
                  <MermaidDiagram chart={teamStatesDiagram} />
                </div>

                <div className="space-y-4">
                  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                    <h4 className="font-semibold text-red-800 mb-2">{currentLang.fallingBehind}</h4>
                    <p className="text-sm text-gray-700 mb-2">{currentLang.fallingBehindDesc}</p>
                    <p className="text-sm font-semibold text-red-800">{currentLang.fallingBehindSolution}</p>
                  </div>

                  <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                    <h4 className="font-semibold text-yellow-800 mb-2">{currentLang.treadingWater}</h4>
                    <p className="text-sm text-gray-700 mb-2">{currentLang.treadingWaterDesc}</p>
                    <p className="text-sm font-semibold text-yellow-800">{currentLang.treadingWaterSolution}</p>
                  </div>

                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="font-semibold text-blue-800 mb-2">{currentLang.repayingDebt}</h4>
                    <p className="text-sm text-gray-700 mb-2">{currentLang.repayingDebtDesc}</p>
                    <p className="text-sm font-semibold text-blue-800">{currentLang.repayingDebtSolution}</p>
                  </div>

                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="font-semibold text-green-800 mb-2">{currentLang.innovating}</h4>
                    <p className="text-sm text-gray-700 mb-2">{currentLang.innovatingDesc}</p>
                    <p className="text-sm font-semibold text-green-800">{currentLang.innovatingSolution}</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* TOOLS SECTION */}
            <section id="tools" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-purple-500 pb-2 text-purple-900">
                🛠 {currentLang.tools}
              </h2>

              {/* Systems Thinking */}
              <div className="bg-white border-l-4 border-purple-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-purple-900">{currentLang.systemsThinking}</h3>
                <p className="text-gray-700 mb-4">{currentLang.systemsThinkingDesc}</p>
              </div>

              {/* Technical Debt & Migrations */}
              <div className="bg-white border-l-4 border-red-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-red-900">{currentLang.migrationsTitle}</h3>
                <p className="text-gray-700 mb-4">{currentLang.migrationsKey}</p>

                <div className="mb-6">
                  <MermaidDiagram chart={migrationDiagram} />
                </div>

                <h4 className="font-semibold text-gray-800 mb-3">{currentLang.migrationsPhases}</h4>

                <div className="space-y-3">
                  <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4">
                    <h5 className="font-semibold text-yellow-900 mb-2">{currentLang.phase1}</h5>
                    <p className="text-sm text-gray-700">{currentLang.phase1Desc}</p>
                  </div>

                  <div className="bg-blue-50 border-l-4 border-blue-500 p-4">
                    <h5 className="font-semibold text-blue-900 mb-2">{currentLang.phase2}</h5>
                    <p className="text-sm text-gray-700">{currentLang.phase2Desc}</p>
                  </div>

                  <div className="bg-green-50 border-l-4 border-green-500 p-4">
                    <h5 className="font-semibold text-green-900 mb-2">{currentLang.phase3}</h5>
                    <p className="text-sm text-gray-700">{currentLang.phase3Desc}</p>
                  </div>
                </div>
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* APPROACHES SECTION */}
            <section id="approaches" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-green-500 pb-2 text-green-900">
                🎯 {currentLang.approaches}
              </h2>

              <div className="bg-white border-l-4 border-green-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-green-900">{currentLang.sayingNo}</h3>
                <p className="text-gray-700">{currentLang.sayingNoDesc}</p>
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* CULTURE SECTION */}
            <section id="culture" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-orange-500 pb-2 text-orange-900">
                🌟 {currentLang.culture}
              </h2>

              <div className="bg-white border-l-4 border-orange-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-orange-900">{currentLang.firstTeam}</h3>
                <p className="text-gray-700">{currentLang.firstTeamDesc}</p>
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* CAREERS SECTION */}
            <section id="careers" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-indigo-500 pb-2 text-indigo-900">
                👥 {currentLang.careers}
              </h2>

              <div className="bg-white border-l-4 border-indigo-500 rounded-lg shadow-md p-6 mb-6">
                <h3 className="text-xl font-semibold mb-3 text-indigo-900">{currentLang.rolesOverRockets}</h3>
                <p className="text-gray-700">{currentLang.rolesDesc}</p>
              </div>
            </section>

            <div className="border-t-2 border-gray-300 my-12"></div>

            {/* CONCLUSION */}
            <section id="conclusion" className="mb-16">
              <h2 className="text-3xl font-serif mb-6 border-b-2 border-gray-500 pb-2">
                {currentLang.conclusion}
              </h2>

              <div className="bg-gradient-to-r from-blue-50 to-purple-50 border-l-4 border-blue-500 p-6 rounded-r-lg mb-6">
                <h3 className="text-xl font-semibold mb-3">{currentLang.keyRecommendations}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec1}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec2}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec3}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec4}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec5}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold mt-1">•</span>
                    <span>{currentLang.rec6}</span>
                  </li>
                </ul>
              </div>

              <div className="bg-blue-100 border-2 border-blue-300 rounded-xl p-6">
                <p className="text-center text-lg font-semibold text-blue-900">
                  {currentLang.finalQuote}
                </p>
              </div>
            </section>

            {/* CTA */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">{currentLang.wantMore}</h3>
              <p className="mb-6">{currentLang.getFullBook}</p>
              <div className="flex flex-wrap gap-4 justify-center">
                <a
                  href="https://lethain.com/elegant-puzzle/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white text-blue-700 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
                >
                  {currentLang.buyBook}
                </a>
                <a
                  href="/learning"
                  className="bg-transparent border-2 border-white text-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-700 transition-colors"
                >
                  {currentLang.backToLearning2}
                </a>
              </div>
            </div>

          </main>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <p className="text-sm text-gray-600">
            Study by <Link href="/" className="text-blue-700 hover:underline font-semibold">Andrés Muñoz</Link>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Based on &quot;An Elegant Puzzle&quot; by Will Larson
          </p>
        </div>
      </footer>
    </div>
  );
}
