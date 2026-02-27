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
      <main className="container mx-auto px-6 max-w-5xl overflow-hidden pb-10">
        <Hero />
        <About />
        <Services />
        <TechStack />
        <Projects />
        <Contact />
      </main>
      <footer className="py-6 text-center text-sm text-muted-foreground border-t border-border/50">
        <p>
          © {new Date().getFullYear()} T.Makoni. All rights reserved.
        </p>
      </footer>
    </>
  );
}
