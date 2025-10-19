import { VerticalNavigation } from "@/components/VerticalNavigation";
import { NeuralNetwork } from "@/components/NeuralNetwork";
import { AIAgentsEffect } from "@/components/AIAgentsEffect";
import { InteractiveHero } from "@/components/InteractiveHero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Experience } from "@/components/Experience";
import { InteractiveProjects } from "@/components/InteractiveProjects";
import { Publications } from "@/components/Publications";
import { Contact } from "@/components/Contact";

export default function Home() {
  return (
    <>
      {/* Background Effects */}
      <NeuralNetwork />
      <AIAgentsEffect />

      {/* Vertical Navigation */}
      <VerticalNavigation />

      {/* Main Content */}
      <main className="min-h-screen ml-20 relative z-10">
        <InteractiveHero />
        <Experience />
        <Skills />
        <InteractiveProjects />
        <About />
        <Publications />
        <Contact />
      </main>
    </>
  );
}
