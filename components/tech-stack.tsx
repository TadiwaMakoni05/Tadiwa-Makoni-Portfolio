"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Monitor, Server, Smartphone, Database, Wrench } from "lucide-react";

export function TechStack() {
  const categories = [
    {
      name: "Frontend",
      icon: <Monitor className="h-5 w-5" />,
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "React", "Next.js"],
    },
    {
      name: "Backend",
      icon: <Server className="h-5 w-5" />,
      skills: ["Python", "Django", "Appwrite", "Firebase"],
    },
    {
      name: "Mobile",
      icon: <Smartphone className="h-5 w-5" />,
      skills: ["React Native", "NativeWind"],
    },
    {
      name: "Database",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL", "PostgreSQL", "SQLite"],
    },
    {
      name: "Tools",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Git", "GitHub"],
    },
  ];

  return (
    <section id="tech" className="py-24 md:py-32 border-t border-border/50">
      <FadeIn className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-center">
          Tech Stack
        </h2>
        <p className="text-muted-foreground text-center mt-4 max-w-2xl mx-auto text-lg">
          Technologies I frequently work with to deliver high-quality, scalable
          solutions.
        </p>
        <div className="h-1 w-12 bg-foreground rounded mx-auto mt-6"></div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {categories.map((category, idx) => (
          <FadeIn key={category.name} delay={0.1 * idx}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-all hover:border-foreground/20 hover:shadow-md dark:hover:border-foreground/30">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary text-secondary-foreground group-hover:bg-foreground group-hover:text-background transition-colors">
                  {category.icon}
                </div>
                <h3 className="text-lg font-semibold">{category.name}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="inline-flex items-center rounded-md border border-border/50 bg-background px-3 py-1.5 text-sm font-medium text-muted-foreground transition-all hover:bg-foreground hover:text-background hover:scale-105 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
