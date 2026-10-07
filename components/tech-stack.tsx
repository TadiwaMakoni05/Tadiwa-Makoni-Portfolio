"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Monitor, Server, Smartphone, Database, Wrench } from "lucide-react";
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiHtml5,
  SiCss,
  SiPython,
  SiDjango,
  SiAppwrite,
  SiFirebase,
  SiPostgresql,
  SiSqlite,
  SiGit,
  SiGithub,
  SiPostman,
} from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export function TechStack() {
  const stackCategories = [
    {
      name: "Frontend",
      label: "UI & CLIENT-SIDE ARCHITECTURE",
      icon: <Monitor className="h-4 w-4" />,
      skills: [
        { name: "React.js", level: "Primary", icon: <SiReact className="h-3.5 w-3.5" /> },
        { name: "Next.js", level: "Primary", icon: <SiNextdotjs className="h-3.5 w-3.5" /> },
        { name: "Tailwind CSS", level: "Primary", icon: <SiTailwindcss className="h-3.5 w-3.5" /> },
        { name: "JavaScript (ES6+)", level: "Core", icon: <SiJavascript className="h-3.5 w-3.5" /> },
        { name: "TypeScript", level: "Core", icon: <SiTypescript className="h-3.5 w-3.5" /> },
        { name: "HTML5 & Semantic Web", level: "Core", icon: <SiHtml5 className="h-3.5 w-3.5" /> },
        { name: "CSS3 / Modern CSS", level: "Core", icon: <SiCss className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Backend",
      label: "APIs & SERVER LOGIC",
      icon: <Server className="h-4 w-4" />,
      skills: [
        { name: "Python", level: "Primary", icon: <SiPython className="h-3.5 w-3.5" /> },
        { name: "Django", level: "Primary", icon: <SiDjango className="h-3.5 w-3.5" /> },
        { name: "Django REST Framework", level: "Core", icon: <SiDjango className="h-3.5 w-3.5" /> },
        { name: "Appwrite", level: "BaaS", icon: <SiAppwrite className="h-3.5 w-3.5" /> },
        { name: "Firebase", level: "BaaS", icon: <SiFirebase className="h-3.5 w-3.5" /> },
        { name: "RESTful Architecture", level: "Core", icon: <Server className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Database",
      label: "DATA STORAGE & SCHEMAS",
      icon: <Database className="h-4 w-4" />,
      skills: [
        { name: "PostgreSQL", level: "Relational", icon: <SiPostgresql className="h-3.5 w-3.5" /> },
        { name: "SQLite", level: "Embedded", icon: <SiSqlite className="h-3.5 w-3.5" /> },
        { name: "SQL Modeling", level: "Core", icon: <Database className="h-3.5 w-3.5" /> },
        { name: "Database Design", level: "Core", icon: <Database className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Mobile",
      label: "CROSS-PLATFORM ENGINEERING",
      icon: <Smartphone className="h-4 w-4" />,
      skills: [
        { name: "React Native", level: "Primary", icon: <SiReact className="h-3.5 w-3.5" /> },
        { name: "NativeWind", level: "Styling", icon: <SiTailwindcss className="h-3.5 w-3.5" /> },
        { name: "Mobile UI Architecture", level: "Core", icon: <Smartphone className="h-3.5 w-3.5" /> },
      ],
    },
    {
      name: "Tools & DevOps",
      label: "WORKFLOW & ENVIRONMENT",
      icon: <Wrench className="h-4 w-4" />,
      skills: [
        { name: "Git", level: "VCS", icon: <SiGit className="h-3.5 w-3.5" /> },
        { name: "GitHub", level: "Collaboration", icon: <SiGithub className="h-3.5 w-3.5" /> },
        { name: "VS Code", level: "Editor", icon: <VscVscode className="h-3.5 w-3.5" /> },
        { name: "Postman", level: "API Testing", icon: <SiPostman className="h-3.5 w-3.5" /> },
      ],
    },
  ];

  return (
    <section
      id="tech"
      className="py-24 md:py-32 border-b border-border bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mb-14">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground font-semibold">03</span>
            <span>//</span>
            <span>TECHNICAL SPECIFICATIONS</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
                Engineering Tech Stack
              </h2>
              <p className="text-base text-muted-foreground mt-2 max-w-xl">
                Disciplined tooling selected for reliability, type-safety, and production-grade developer velocity.
              </p>
            </div>
            <div className="font-mono text-xs text-muted-foreground hidden md:block">
              05 SPECIALIZED DOMAINS
            </div>
          </div>
        </FadeIn>

        {/* Stack Groups Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stackCategories.map((cat, idx) => (
            <FadeIn
              key={cat.name}
              delay={0.06 * idx}
              className={cat.name === "Frontend" ? "md:col-span-2 lg:col-span-2" : ""}
            >
              <div className="group h-full rounded-2xl border border-border bg-card p-6 flex flex-col justify-between transition-all duration-300 ease-out hover:border-foreground/40 hover:-translate-y-1 hover:shadow-lg">
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-border/70">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg border border-border bg-muted/60 text-foreground group-hover:bg-foreground group-hover:text-background group-hover:border-foreground group-hover:scale-105 transition-all duration-300">
                        {cat.icon}
                      </div>
                      <div>
                        <h3 className="text-base font-semibold text-foreground tracking-tight">
                          {cat.name}
                        </h3>
                        <p className="font-mono text-[10px] text-muted-foreground tracking-wider uppercase">
                          {cat.label}
                        </p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Skills Pills with Technology Brand Icons & Smooth Hover Effect */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className="group/pill inline-flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border/80 bg-muted/30 hover:bg-foreground hover:text-background hover:border-foreground hover:shadow-sm hover:scale-[1.03] active:scale-[0.98] transition-all duration-200 ease-out cursor-default"
                      >
                        <span className="text-muted-foreground group-hover/pill:text-background transition-colors shrink-0">
                          {skill.icon}
                        </span>
                        <span className="text-xs font-medium text-foreground group-hover/pill:text-background transition-colors">
                          {skill.name}
                        </span>
                        <span className="font-mono text-[10px] text-muted-foreground/80 group-hover/pill:text-background/80 transition-colors">
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer status */}
                <div className="mt-6 pt-3 border-t border-border/40 font-mono text-[10px] text-muted-foreground/80 flex items-center justify-between group-hover:text-muted-foreground transition-colors">
                  <span>DEPLOYED IN PRODUCTION</span>
                  <span className="text-foreground font-medium">{cat.skills.length} TECHNOLOGIES</span>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
