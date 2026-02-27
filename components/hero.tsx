"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToAbout = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const element = document.querySelector("#about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center relative pt-20"
    >
      <div className="max-w-3xl space-y-8">
        {/* <FadeIn delay={0.1}>
          <div className="inline-flex items-center rounded-full border border-border px-3 py-1 text-sm font-medium tracking-tight mb-4">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 mr-2 animate-pulse"></span>
            Available for new opportunities
          </div>
        </FadeIn> */}

        <FadeIn delay={0.2}>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-tight">
            Software Developer <br />
            <span className="text-muted-foreground">
              Building Modern Web Experiences.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.3}>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl">
            I specialize in full-stack development, interactive UI design, and
            scalable systems. Passionate about bringing ideas to life through
            elegant code and minimal design.
          </p>
        </FadeIn>

        <FadeIn delay={0.4} className="pt-4 flex items-center gap-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Contact Me
          </a>
        </FadeIn>
      </div>

      <FadeIn
        delay={0.8}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-muted-foreground animate-bounce"
      >
        <a
          href="#about"
          onClick={scrollToAbout}
          className="flex items-center justify-center p-2 rounded-full hover:bg-accent hover:text-foreground transition-colors"
          aria-label="Scroll to About section"
        >
          <ArrowDown className="h-6 w-6" />
        </a>
      </FadeIn>
    </section>
  );
}
