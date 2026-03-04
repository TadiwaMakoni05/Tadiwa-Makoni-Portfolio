import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm bg-foreground text-background">
        <p>© {new Date().getFullYear()} T.Makoni. All rights reserved.</p>
      </footer>
    </>
  );
}
