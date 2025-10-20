"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface NavItem {
  id: string;
  label: string;
  icon: string;
  color: string;
}

export const VerticalNavigation = () => {
  const [activeSection, setActiveSection] = useState("hero");
  const [systemStatus, setSystemStatus] = useState<"idle" | "active" | "processing">("idle");
  const [showPhoto, setShowPhoto] = useState(false);

  const navItems: NavItem[] = [
    { id: "hero", label: "Home", icon: "◆", color: "#06B6D4" },
    { id: "experience", label: "Experience", icon: "▪", color: "#3B82F6" },
    { id: "skills", label: "Skills", icon: "●", color: "#8B5CF6" },
    { id: "projects", label: "Projects", icon: "▶", color: "#10B981" },
    { id: "about", label: "About", icon: "◇", color: "#F59E0B" },
    { id: "publications", label: "Publications", icon: "▣", color: "#A855F7" },
    { id: "contact", label: "Contact", icon: "▲", color: "#EF4444" },
  ];

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setShowPhoto(prev => !prev);
    }, 3000); // Flip every 3 seconds

    return () => clearInterval(flipInterval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item => item.id);
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId === "hero" ? "" : sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            setSystemStatus("active");
            setTimeout(() => setSystemStatus("idle"), 1000);
            break;
          }
        } else if (sectionId === "hero" && window.scrollY < 100) {
          setActiveSection("hero");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    setSystemStatus("processing");
    const element = sectionId === "hero"
      ? document.body
      : document.getElementById(sectionId);

    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setTimeout(() => setSystemStatus("idle"), 1500);
    }
  };

  return (
    <>
      {/* Main Vertical Navigation */}
      <motion.nav
        className="fixed left-0 top-0 h-screen bg-gradient-to-b from-gray-900 via-slate-900 to-gray-900 border-r border-cyan-500/30 shadow-2xl shadow-cyan-500/20 z-50 w-20"
        initial={{ x: -100, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Profile Photo with Online Status */}
        <div className="p-3 border-b border-cyan-500/30">
          <div className="flex flex-col items-center">
            <div className="relative" style={{ perspective: '1000px' }}>
              <motion.div
                className="relative w-12 h-12"
                animate={{ rotateY: showPhoto ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 100 }}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front - Initials */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center text-white font-bold text-xl"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                  }}
                >
                  AM
                </div>
                {/* Back - Photo */}
                <div
                  className="absolute inset-0 rounded-full overflow-hidden"
                  style={{
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)',
                  }}
                >
                  <img
                    src="/profile.jpg"
                    alt="Andrés Muñoz"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image doesn't load
                      e.currentTarget.style.display = 'none';
                    }}
                  />
                </div>
              </motion.div>
              <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-gray-900 flex items-center justify-center z-10">
                <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation Items */}
        <div className="py-6 space-y-2">
          {navItems.map((item, index) => {
            const isActive = activeSection === item.id;
            return (
              <motion.button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="w-full relative group"
                initial={{ x: -50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Tooltip on hover */}
                <div className="absolute left-full ml-2 px-3 py-2 bg-gray-800 text-cyan-300 text-sm font-mono rounded-lg opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50 border border-cyan-500/30">
                  {item.label}
                  <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-gray-800"></div>
                </div>

                {/* Active Indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-cyan-400 via-blue-400 to-cyan-400"
                    initial={false}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  >
                    <div className="absolute inset-0 bg-cyan-400 animate-pulse"></div>
                  </motion.div>
                )}

                <div className={`flex items-center justify-center gap-4 px-4 py-3 mx-2 rounded-lg transition-all duration-300 ${
                  isActive
                    ? "bg-cyan-500/20 border border-cyan-500/50"
                    : "hover:bg-white/5 border border-transparent"
                }`}>
                  {/* Icon Container */}
                  <div
                    className="relative w-10 h-10 flex items-center justify-center rounded-lg"
                    style={{
                      background: isActive
                        ? `linear-gradient(135deg, ${item.color}40, ${item.color}20)`
                        : "rgba(255,255,255,0.05)"
                    }}
                  >
                    <span className="text-2xl">{item.icon}</span>

                    {/* Pulse effect for active item */}
                    {isActive && (
                      <motion.div
                        className="absolute inset-0 rounded-lg"
                        style={{
                          background: `linear-gradient(135deg, ${item.color}40, transparent)`,
                          opacity: 0.5
                        }}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.5, 0, 0.5]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    )}
                  </div>

                  {/* Activity Indicator */}
                  {isActive && (
                    <motion.div
                      className="w-2 h-2 rounded-full"
                      style={{ backgroundColor: item.color }}
                      animate={{
                        opacity: [0.3, 1, 0.3],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 1.5,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                  )}
                </div>
              </motion.button>
            );
          })}
        </div>


        {/* System Info Footer */}
        <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-cyan-500/30">
          <div className="flex items-center gap-2">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-6 h-6 border-2 border-cyan-400 border-t-transparent rounded-full"
            />
            <div className="flex-1">
              <p className="text-xs text-cyan-400 font-mono">v1.0.0</p>
              <p className="text-xs text-gray-500 font-mono">AM-SYSTEM</p>
            </div>
          </div>
        </div>

        {/* Circuit pattern overlay */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <svg className="w-full h-full">
            <pattern id="circuit" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
              <circle cx="20" cy="20" r="1" fill="#06B6D4"/>
              <line x1="20" y1="0" x2="20" y2="40" stroke="#06B6D4" strokeWidth="0.5"/>
              <line x1="0" y1="20" x2="40" y2="20" stroke="#06B6D4" strokeWidth="0.5"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#circuit)"/>
          </svg>
        </div>
      </motion.nav>

      {/* Spacer for content */}
      <div className="w-20" />
    </>
  );
};
