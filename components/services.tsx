"use client";

import * as React from "react";
import { FadeIn } from "@/components/ui/fade-in";
import { Monitor, Server, Smartphone, Layout, Cpu, Bot, ArrowUpRight, X } from "lucide-react";

export function Services() {
  const [pinnedCard, setPinnedCard] = React.useState<number | null>(null);

  const services = [
    {
      index: "01",
      title: "Frontend Development",
      description:
        "Building responsive, accessible interfaces with modern frontend architecture. Emphasizing sub-second load times, fluid micro-interactions, and tight typography.",
      highlights: [
        "Modern React & Next.js architecture",
        "Sub-second page transitions & animations",
        "Accessible, responsive semantic layout",
      ],
      technologies: ["React", "Next.js", "Tailwind CSS", "TypeScript"],
      icon: <Monitor className="h-7 w-7" />,
    },
    {
      index: "02",
      title: "Backend Systems",
      description:
        "Architecting robust APIs, secure database schemas, and dependable server-side services. Designed for predictable data flow, auth workflows, and integrity.",
      highlights: [
        "High-throughput RESTful endpoints",
        "Role-based auth & session security",
        "Data modeling & migration pipelines",
      ],
      technologies: ["Python", "Django", "Django REST", "Appwrite", "PostgreSQL"],
      icon: <Server className="h-7 w-7" />,
    },
    {
      index: "03",
      title: "Mobile Applications",
      description:
        "Creating cross-platform iOS and Android experiences with native feel, smooth gestures, and shared business logic across web and mobile platforms.",
      highlights: [
        "Cross-platform iOS and Android builds",
        "Fluid native gesture performance",
        "Offline-first state synchronization",
      ],
      technologies: ["React Native", "NativeWind", "Expo", "Mobile UI"],
      icon: <Smartphone className="h-7 w-7" />,
    },
    {
      index: "04",
      title: "UI/UX Design Engineering",
      description:
        "Translating complex user requirements into clean, intuitive digital products. Designing minimal component systems with tight typography and coherent layouts.",
      highlights: [
        "Design systems & component tokens",
        "High-fidelity prototyping & layouts",
        "Coherent brand & visual design assets",
      ],
      technologies: ["Design Systems", "Photoshop", "Canva", "Ergonomics"],
      icon: <Layout className="h-7 w-7" />,
    },
    {
      index: "05",
      title: "System Architecture",
      description:
        "End-to-end full-stack engineering, relational database design, query optimization, and structured deployment pipelines for scalable performance.",
      highlights: [
        "Normalized relational data modeling",
        "Decoupled service boundaries",
        "Query tuning & performance caching",
      ],
      technologies: ["PostgreSQL", "SQLite", "REST Architecture", "Turbopack"],
      icon: <Cpu className="h-7 w-7" />,
    },
    {
      index: "06",
      title: "AI & Intelligent Agents",
      description:
        "Integrating modern language models, embedding intelligent agents, and connecting automated data pipelines into production web applications.",
      highlights: [
        "LLM API integration & real-time streaming",
        "Structured tool calling & workflows",
        "Dynamic prompt engineering pipelines",
      ],
      technologies: ["LLM Integrations", "Intelligent Workflows", "Prompt Systems"],
      icon: <Bot className="h-7 w-7" />,
    },
  ];

  return (
    <section
      id="services"
      className="py-24 md:py-32 border-b border-border bg-subtle-grid"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground font-semibold">02</span>
            <span>//</span>
            <span>SERVICES &amp; CAPABILITIES</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Disciplines &amp; Engineering Focus
              </h2>
              <p className="text-base text-muted-foreground mt-2 max-w-xl">
                Hover over any discipline card to slide open technical specifications, capabilities, and stack.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Responsive Fixed-Height Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((service, index) => {
            const isPinned = pinnedCard === index;

            return (
              <FadeIn key={service.title} delay={0.06 * index}>
                <div
                  onClick={() => setPinnedCard(isPinned ? null : index)}
                  className={`group relative h-[320px] border bg-card p-3 rounded-2xl overflow-hidden cursor-pointer transition-all duration-300 hover:border-foreground/50 hover:shadow-xl ${
                    isPinned ? "border-foreground/60 shadow-xl ring-1 ring-border" : ""
                  }`}
                >
                  {/* UNHOVERED VIEW: Stylished Icon + Main Heading + Minimal Index */}
                  <div className="h-full flex flex-col justify-between select-none">
                    {/* Top Row */}
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-semibold text-muted-foreground group-hover:text-foreground transition-colors">
                        {service.index}
                      </span>
                    </div>

                    {/* Prominent Center/Hero Icon Container */}
                    <div className="flex flex-col items-center justify-center my-auto py-2">
                      <div className="p-4 rounded-2xl border border-border bg-muted/60 text-foreground group-hover:bg-foreground group-hover:text-background group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 shadow-sm">
                        {service.icon}
                      </div>
                    </div>

                    {/* Bottom: Main Heading & Hover Cue */}
                    <div className="pt-4 border-t border-border/50">
                      <h3 className="text-xl font-bold tracking-tight text-foreground group-hover:text-foreground transition-colors">
                        {service.title}
                      </h3>
                      <div className="flex items-center justify-between mt-2 font-mono text-[11px] text-muted-foreground">
                        <ArrowUpRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>

                  {/* HOVERED VIEW: Smooth Slide-Up Sheet Drawer (Zero Layout Shifts) */}
                  <div
                    className={`absolute inset-0 bg-card/98 backdrop-blur-xl p-6 flex flex-col justify-between transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] z-20 border-t border-border ${
                      isPinned
                        ? "translate-y-0"
                        : "translate-y-full group-hover:translate-y-0"
                    }`}
                  >
                    <div>
                      {/* Drawer Top Header */}
                      <div className="flex items-center justify-between pb-3 mb-3 border-b border-border/70 font-mono text-xs">
                        <div className="flex items-center gap-2">
                          <span className="text-foreground font-semibold">{service.index}</span>
                          <span className="text-border">/</span>
                          <span className="text-foreground font-medium">{service.title}</span>
                        </div>
                        {isPinned ? (
                          <span className="text-[10px] text-muted-foreground uppercase flex items-center gap-1">
                            <X className="h-3 w-3" /> Close
                          </span>
                        ) : (
                          <span className="text-[10px] text-muted-foreground uppercase">SPEC</span>
                        )}
                      </div>

                      {/* Detailed Description */}
                      <p className="text-xs text-muted-foreground leading-relaxed mb-3">
                        {service.description}
                      </p>

                      {/* Key Capabilities */}
                      <div className="space-y-1 mb-3">
                        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-medium">
                          Capabilities
                        </div>
                        <ul className="space-y-1">
                          {service.highlights.map((highlight, hIdx) => (
                            <li
                              key={hIdx}
                              className="flex items-start gap-1.5 text-[11px] text-foreground/90"
                            >
                              <span className="h-1 w-1 rounded-full bg-foreground mt-1.5 shrink-0" />
                              <span className="line-clamp-1">{highlight}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* Technologies Tags Footer */}
                    <div className="pt-2 border-t border-border/60">
                      <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground font-medium mb-1.5">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1">
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="inline-flex items-center px-2 py-0.5 rounded border border-border/70 bg-muted/50 font-mono text-[10px] text-foreground"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
