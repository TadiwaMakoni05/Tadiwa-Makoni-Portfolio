"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Search, Compass, Terminal, ShieldCheck } from "lucide-react";

export function EngineeringApproach() {
  const steps = [
    {
      number: "01",
      title: "Understand",
      subtitle: "REQUIREMENTS & SCOPE",
      description:
        "Deconstruct the core problem, understand user journeys, clarify data contracts, and anticipate operational edge cases before writing code.",
      icon: <Search className="h-5 w-5" />,
      tag: "DISCOVERY & ANALYSIS",
    },
    {
      number: "02",
      title: "Design",
      subtitle: "SYSTEM ARCHITECTURE",
      description:
        "Define relational data schemas, component hierarchies, and clean API contracts. Align visual ergonomics with robust data integrity.",
      icon: <Compass className="h-5 w-5" />,
      tag: "INTERFACE & SCHEMAS",
    },
    {
      number: "03",
      title: "Build",
      subtitle: "TYPE-SAFE IMPLEMENTATION",
      description:
        "Develop modular, maintainable software with Next.js, Django, TypeScript, and modern best practices. Keep logic decoupled and predictable.",
      icon: <Terminal className="h-5 w-5" />,
      tag: "CLEAN CODEBASE",
    },
    {
      number: "04",
      title: "Refine",
      subtitle: "PERFORMANCE & AUDIT",
      description:
        "Profile Core Web Vitals, audit accessibility and responsiveness, test edge cases, and eliminate bottlenecks for production reliability.",
      icon: <ShieldCheck className="h-5 w-5" />,
      tag: "OPTIMIZATION & POLISH",
    },
  ];

  return (
    <section
      id="approach"
      className="py-24 md:py-32 border-b border-border bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground font-semibold">05</span>
            <span>//</span>
            <span>ENGINEERING DISCIPLINE</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                How I Build
              </h2>
              <p className="text-base text-muted-foreground mt-2 max-w-xl">
                A disciplined four-phase methodology delivering durable, accessible, and scalable digital products.
              </p>
            </div>
            <div className="font-mono text-xs text-muted-foreground hidden md:block">
              PRECISION WORKFLOW
            </div>
          </div>
        </FadeIn>

        {/* 4-Step Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, idx) => (
            <FadeIn key={step.number} delay={0.08 * idx}>
              <div className="h-full rounded-xl border border-border bg-card p-6 flex flex-col justify-between transition-all duration-200 hover:border-foreground/40 shadow-sm">
                <div>
                  {/* Top Bar: Number & Minimal Icon */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border">
                    <span className="font-mono text-lg font-bold text-foreground">
                      {step.number}
                    </span>
                    <div className="p-2 rounded-md border border-border bg-muted/50 text-foreground">
                      {step.icon}
                    </div>
                  </div>

                  {/* Title and Subtitle */}
                  <h3 className="text-xl font-bold tracking-tight text-foreground mb-1">
                    {step.title}
                  </h3>
                  <div className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase mb-3">
                    {step.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Footer Tag */}
                <div className="pt-6 mt-6 border-t border-border/50">
                  <span className="font-mono text-[10px] text-muted-foreground uppercase tracking-widest">
                    {step.tag}
                  </span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
