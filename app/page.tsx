import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { EngineeringApproach } from "@/components/approach";
import { Contact, Footer } from "@/components/contact";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="w-full flex-1">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <EngineeringApproach />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
