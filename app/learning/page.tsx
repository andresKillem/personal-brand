'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function LearningPage() {
  const [language, setLanguage] = useState<'en' | 'es'>('en');

  const t = {
    en: {
      home: 'Home',
      writing: 'Writing',
      learning: 'Learning',
      projects: 'Projects',
      experience: 'Experience',
      title: 'Learning Lab',
      subtitle: 'Deep dives into engineering leadership, architecture, and technical excellence',
      intro: 'This is my personal learning space where I deeply study and apply concepts from influential technical books. Each book study includes visual aids, practical applications, and connections to real-world architecture and leadership challenges.',
      currentStudies: 'Current Studies',
      comingSoon: 'Coming Soon: More Book Studies',
      comingSoonDesc: 'Additional deep dives into Staff Engineer, Site Reliability Engineering, and other essential technical leadership resources.',
      methodology: 'Learning Methodology',
      visualLearning: 'Visual Learning',
      visualDesc: 'Each study includes diagrams, mind maps, and visual frameworks using Mermaid to make complex concepts accessible and memorable.',
      practicalApp: 'Practical Application',
      practicalDesc: 'Concepts are connected to real-world scenarios in architecture, DevOps, and platform engineering with actionable insights.',
      structured: 'Structured Organization',
      structuredDesc: 'Content organized with concept cards, tables, checklists, and progressive learning paths for easy reference and review.',
      crossRef: 'Cross-References',
      crossRefDesc: 'Links between related concepts, tools, and methodologies across different books and resources for holistic understanding.',
      aboutSection: 'About This Section',
      aboutDesc1: 'These are not just book summaries - they\'re comprehensive learning resources designed for technical leaders who want to deeply understand and apply engineering management principles.',
      aboutDesc2: 'Each study is a living document that evolves with new insights and practical applications from real-world experience.',
      quickLinks: 'Quick Links',
      elegantPuzzleLink: 'An Elegant Puzzle Study',
      backHome: 'Back to Home',
      elegantPuzzleDesc: 'A comprehensive study applying systems thinking to engineering leadership and architecture. Covers team sizing, technical debt management, migrations, organizational design, and building sustainable engineering culture.',
      exploreStudy: 'Explore the full study →',
    },
    es: {
      home: 'Inicio',
      writing: 'Escritura',
      learning: 'Aprendizaje',
      projects: 'Proyectos',
      experience: 'Experiencia',
      title: 'Learning Lab',
      subtitle: 'Profundización en liderazgo de ingeniería, arquitectura y excelencia técnica',
      intro: 'Este es mi espacio personal de aprendizaje donde estudio en profundidad y aplico conceptos de libros técnicos influyentes. Cada estudio de libro incluye ayudas visuales, aplicaciones prácticas y conexiones con desafíos reales de arquitectura y liderazgo.',
      currentStudies: 'Estudios Actuales',
      comingSoon: 'Próximamente: Más Estudios de Libros',
      comingSoonDesc: 'Profundizaciones adicionales en Staff Engineer, Site Reliability Engineering y otros recursos esenciales de liderazgo técnico.',
      methodology: 'Metodología de Aprendizaje',
      visualLearning: 'Aprendizaje Visual',
      visualDesc: 'Cada estudio incluye diagramas, mapas mentales y frameworks visuales usando Mermaid para hacer conceptos complejos accesibles y memorables.',
      practicalApp: 'Aplicación Práctica',
      practicalDesc: 'Los conceptos se conectan con escenarios del mundo real en arquitectura, DevOps e ingeniería de plataformas con insights accionables.',
      structured: 'Organización Estructurada',
      structuredDesc: 'Contenido organizado con tarjetas de conceptos, tablas, checklists y caminos de aprendizaje progresivos para fácil referencia y revisión.',
      crossRef: 'Referencias Cruzadas',
      crossRefDesc: 'Enlaces entre conceptos, herramientas y metodologías relacionadas a través de diferentes libros y recursos para comprensión holística.',
      aboutSection: 'Acerca de Esta Sección',
      aboutDesc1: 'Estos no son solo resúmenes de libros - son recursos de aprendizaje comprensivos diseñados para líderes técnicos que quieren entender y aplicar profundamente principios de gestión de ingeniería.',
      aboutDesc2: 'Cada estudio es un documento vivo que evoluciona con nuevos insights y aplicaciones prácticas de experiencia del mundo real.',
      quickLinks: 'Enlaces Rápidos',
      elegantPuzzleLink: 'Estudio de An Elegant Puzzle',
      backHome: 'Volver a Inicio',
      elegantPuzzleDesc: 'Un estudio comprensivo aplicando pensamiento sistémico al liderazgo de ingeniería y arquitectura. Cubre dimensionamiento de equipos, gestión de deuda técnica, migraciones, diseño organizacional y construcción de cultura de ingeniería sostenible.',
      exploreStudy: 'Explorar el estudio completo →',
    }
  };

  const currentLang = t[language];

  return (
    <div className="min-h-screen bg-white">
      {/* Header Navigation */}
      <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex justify-between items-center">
            <div className="text-sm text-gray-600">
              <Link href="/" className="hover:text-gray-900">{currentLang.home}</Link>
            </div>
            <div className="flex gap-6 text-sm items-center">
              <Link href="/#writing" className="text-gray-600 hover:text-gray-900">{currentLang.writing}</Link>
              <Link href="/learning" className="text-gray-900 font-semibold">{currentLang.learning}</Link>
              <Link href="/#projects" className="text-gray-600 hover:text-gray-900">{currentLang.projects}</Link>
              <Link href="/#experience" className="text-gray-600 hover:text-gray-900">{currentLang.experience}</Link>

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
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Main Content */}
          <main className="lg:col-span-2">
            <h1 className="text-5xl font-serif mb-4">{currentLang.title}</h1>
            <p className="text-xl text-gray-600 mb-8">
              {currentLang.subtitle}
            </p>

            <div className="prose prose-lg max-w-none text-gray-700 mb-12">
              <p>
                {currentLang.intro}
              </p>
            </div>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Book Studies */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">{currentLang.currentStudies}</h2>

              <div className="space-y-8">
                {/* An Elegant Puzzle */}
                <a href="/learning/elegant-puzzle" className="block group">
                  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-l-4 border-blue-500 p-6 rounded-r-lg hover:shadow-lg transition-all">
                    <div className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-24 h-32 bg-gradient-to-br from-blue-200 to-blue-400 rounded flex items-center justify-center text-4xl shadow-md">
                          📘
                        </div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-2xl font-semibold mb-2 text-blue-900 group-hover:text-blue-700">
                          An Elegant Puzzle: Systems of Engineering Management
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">Will Larson</p>
                        <p className="text-gray-700 mb-4 leading-relaxed">
                          {currentLang.elegantPuzzleDesc}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-3">
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">Architecture Leadership</span>
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 text-xs rounded-full">Systems Thinking</span>
                          <span className="px-3 py-1 bg-green-100 text-green-800 text-xs rounded-full">Technical Debt</span>
                          <span className="px-3 py-1 bg-orange-100 text-orange-800 text-xs rounded-full">Team Management</span>
                        </div>
                        <div className="text-sm text-blue-700 font-medium group-hover:underline">
                          {currentLang.exploreStudy}
                        </div>
                      </div>
                    </div>
                  </div>
                </a>

                {/* Placeholder for future studies */}
                <div className="bg-gray-50 border-l-4 border-gray-300 p-6 rounded-r-lg">
                  <h3 className="text-xl font-semibold mb-2 text-gray-600">
                    {currentLang.comingSoon}
                  </h3>
                  <p className="text-gray-600 text-sm">
                    {currentLang.comingSoonDesc}
                  </p>
                </div>
              </div>
            </section>

            <div className="border-t border-gray-200 my-12"></div>

            {/* Methodology */}
            <section className="mb-16">
              <h2 className="text-3xl font-serif mb-6">{currentLang.methodology}</h2>
              <div className="space-y-4 text-gray-700">
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">📊 {currentLang.visualLearning}</h3>
                  <p className="text-sm">
                    {currentLang.visualDesc}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🎯 {currentLang.practicalApp}</h3>
                  <p className="text-sm">
                    {currentLang.practicalDesc}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🗂 {currentLang.structured}</h3>
                  <p className="text-sm">
                    {currentLang.structuredDesc}
                  </p>
                </div>
                <div className="bg-white border border-gray-200 p-4 rounded-lg">
                  <h3 className="font-semibold mb-2">🔗 {currentLang.crossRef}</h3>
                  <p className="text-sm">
                    {currentLang.crossRefDesc}
                  </p>
                </div>
              </div>
            </section>

          </main>

          {/* Sidebar */}
          <aside className="lg:col-span-1 space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-4">{currentLang.aboutSection}</h3>
              <p className="text-sm text-gray-700 mb-4">
                {currentLang.aboutDesc1}
              </p>
              <p className="text-sm text-gray-700">
                {currentLang.aboutDesc2}
              </p>
            </div>

            <div className="bg-white p-4 rounded-lg border border-gray-200">
              <h3 className="font-semibold mb-3">{currentLang.quickLinks}</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/learning/elegant-puzzle" className="text-blue-700 hover:underline">
                    {currentLang.elegantPuzzleLink}
                  </Link>
                </li>
                <li>
                  <Link href="/" className="text-blue-700 hover:underline">
                    {currentLang.backHome}
                  </Link>
                </li>
              </ul>
            </div>
          </aside>

        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-gray-200 mt-16 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-sm text-gray-500">© 2025 Andrés Muñoz</p>
        </div>
      </footer>
    </div>
  );
}
