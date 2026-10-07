"use client";

import * as React from "react";
import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { ArrowDown } from "lucide-react";

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-[92vh] flex flex-col justify-center pt-28 pb-20 border-b border-border overflow-hidden bg-background"
    >
      {/* Authentic High-Resolution Stock Photography: Minimalist Architecture & Concrete Geometry */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=2069&auto=format&fit=crop"
          alt="Minimalist brutalist concrete architecture with clean geometric diagonal cast shadows and expansive negative space"
          fill
          priority
          unoptimized
          sizes="100vw"
          className="object-cover object-center grayscale contrast-110 opacity-30 dark:opacity-35 transition-all duration-700"
        />
        {/* Contrast Gradient Overlays: Ensure High Contrast & Text Readability Across Negative Space */}
        <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/80 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/75 to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 max-w-5xl relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">

          {/* Main Title with Pristine Contrast */}
          <FadeIn delay={0.15}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold tracking-tight text-foreground leading-[1.08] drop-shadow-sm">
              Building modern digital experiences{" "}
              <span className="text-muted-foreground font-normal">
                with thoughtful engineering.
              </span>
            </h1>
          </FadeIn>

          {/* Subtitle / Bio */}
          <FadeIn delay={0.25}>
            <p className="text-base sm:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              I build robust web applications, cross-platform mobile experiences,
              high-performance APIs, and scalable distributed systems. Focused on clean code
              architecture, precise interfaces, and intentional product engineering.
            </p>
          </FadeIn>

          {/* Call to Actions */}
          <FadeIn delay={0.35}>
            <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
              <a
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#projects");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-md bg-foreground text-background px-6 py-3 text-sm font-medium transition-all hover:opacity-90 active:scale-[0.98] shadow-sm"
              >
                View Projects
                <ArrowDown className="h-4 w-4" />
              </a>

              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection("#contact");
                }}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-background/90 backdrop-blur-sm px-6 py-3 text-sm font-medium text-foreground transition-all hover:bg-muted active:scale-[0.98]"
              >
                Let&apos;s Connect
              </a>
            </div>
          </FadeIn>

          {/* Technical Sub-metadata Bar */}
          <FadeIn delay={0.45}>
            <div className="pt-8 border-t border-border/70 max-w-lg mx-auto grid grid-cols-2 gap-8 font-mono text-xs text-muted-foreground">
              <div>
                <div className="text-foreground font-semibold text-sm">FULL-STACK</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">WEB &amp; MOBILE PLATFORMS</div>
              </div>
              <div>
                <div className="text-foreground font-semibold text-sm">HARARE, ZW</div>
                <div className="text-[11px] text-muted-foreground mt-0.5">UTC+2 (GLOBAL REMOTE)</div>
              </div>
            </div>
          </FadeIn>

        </div>
      </div>
    </section>
  );
}
