"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Interactive Dashboard",
      description:
        "A comprehensive analytics dashboard built with React, Next.js, and TailwindCSS.",
      tags: ["Next.js", "Tailwind", "PostgreSQL"],
      link: "#",
    },
    {
      title: "Mobile E-commerce",
      description:
        "Cross-platform mobile application with secure payment integration and real-time inventory.",
      tags: ["React Native", "Firebase"],
      link: "#",
    },
    {
      title: "API Gateway System",
      description:
        "Scalable backend architecture to manage and route user requests securely and efficiently.",
      tags: ["Python", "Django", "SQL"],
      link: "#",
    },
    {
      title: "Portfolio Template",
      description:
        "Minimalist, Vercel-inspired portfolio template crafted for software developers.",
      tags: ["Next.js", "Framer Motion"],
      link: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 md:py-32">
      <FadeIn className="mb-12 flex items-center justify-between">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Projects
          </h2>
          <div className="h-1 w-12 bg-foreground rounded mt-6"></div>
        </div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <FadeIn key={project.title} delay={0.1 * index}>
            <a
              href={project.link}
              className="group block h-full rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50 hover:shadow-md"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-foreground" />
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center rounded-md bg-secondary/50 px-2 py-1 text-xs font-medium text-secondary-foreground"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
