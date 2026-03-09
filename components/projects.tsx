"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight, X, ExternalLink, Github } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  title: string;
  description: string;
  extendedDescription: string;
  type: string;
  thumbnail: string;
  tags: string[];
  link: string;
  repo?: string;
};

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(
    null,
  );

  const projects: Project[] = [
    {
      title: "ART Adherence Companion System",
      description:
        "A web application that helps patients manage and track their Antiretroviral Therapy (ART) medication.",
      extendedDescription:
        "The ART Adherence Companion System is designed to support patients on ART by helping them stay consistent with their medication. The platform allows users to track daily doses, receive medication reminders, monitor adherence progress, and view simple analytics about their treatment journey. Built using Next.js, React, and TailwindCSS, the system focuses on improving medication adherence and supporting better health outcomes for patients.",
      type: "Web Application",
      thumbnail: "/art.png",
      tags: ["React.js", "Tailwind", "Django","SQLite","Django REST Framework"],
      link: "#",
      repo: "https://github.com/TadiwaMakoni05/ART",
    },
    {
      title: "Wedding Website",
      description:
        "A website for a wedding event.",
      extendedDescription:
        "A website for a wedding event. Built using Next.js, React, and TailwindCSS.",
      type: "Website",
      thumbnail: "/l1.png",
      tags: ["Next.js", "TailwindCSS"],
      link: "https://wedding-nine-iota.vercel.app",
      repo: "https://github.com/TadiwaMakoni05/wedding",
    },
        {
      title: "NEWS App",
      description:
        "A news app that allows users to view the latest news from around the world.",
      extendedDescription:
        "A news app that allows users to view the latest news from around the world. Built using React.js, TailwindCSS, and the NEWS API.",
      type: "Website",
      thumbnail: "/l1.png",
      tags: ["React.js", "TailwindCSS","NEWS API"],
      link: "#",
      repo: "https://github.com/TadiwaMakoni05/News-App",
    },
    {
      title: "Tour Travel Agency Website",
      description:
        "A website for a tour travel agency.",
      extendedDescription:
        "A website for a tour travel agency. Built using Next.js, React, and TailwindCSS.",
      type: "Website",
      thumbnail: "/l1.png",
      tags: ["HTML", "CSS", "JS"],
      link: "#",
      repo: "https://github.com/TadiwaMakoni05/Tour-Travel-Agency",
    },
    {
      title: "Maverick Aluminium Portfolio website",
      description:
        "A portfolio website for Maverick Aluminium.",
      extendedDescription:
        "A portfolio website for Maverick Aluminium. Built using Next.js, React, and TailwindCSS.",
      type: "Web Application",
      thumbnail: "/l1.png",
      tags: ["Next.js", "Tailwind CSS"],
      link: "https://maverick-nu.vercel.app",
      repo: "https://github.com/TadiwaMakoni05/maverick",
    },
        {
      title: "Netflix Clone",
      description:
        "A Netflix clone that allows users to watch movies and TV shows.",
      extendedDescription:
        "A Netflix clone that allows users to watch movies and TV shows. Built using React, and TailwindCSS.",
      type: "Web Application",
      thumbnail: "/l1.png",
      tags: ["React.js", "Tailwind CSS","tmdb API"],
      link: "#",
      repo: "https://github.com/TadiwaMakoni05/Netflix-clone",
    },
  ];

  // Handle escape key to close modal
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Prevent background scrolling when modal is open
  React.useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [selectedProject]);

  return (
    <section
      id="projects"
      className="py-24 md:py-32 bg-background text-foreground"
    >
      <div className="container mx-auto px-6 max-w-5xl">
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
            <FadeIn key={project.title} delay={0.1 * index} className="h-full">
              <button
                onClick={() => setSelectedProject(project)}
                className="text-left w-full h-full group block rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
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
              </button>
            </FadeIn>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-12">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl z-10"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/50 backdrop-blur-md border border-border hover:bg-accent hover:text-foreground transition-colors z-20"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="w-full h-48 sm:h-64 md:h-80 relative bg-muted flex items-center justify-center border-b border-border overflow-hidden p-6">
                {/* Visual placeholder using the Next image for now */}
                <Image
                  src={selectedProject.thumbnail}
                  alt={`${selectedProject.title} thumbnail`}
                  width={500}
                  height={500}
                  className="opacity-20 dark:invert object-contain transition-transform duration-500 hover:scale-105"
                />
                <div className="absolute bottom-4 left-6 py-1 px-3 bg-background/80 backdrop-blur-md rounded-full text-xs font-semibold uppercase tracking-wider border border-border">
                  {selectedProject.type}
                </div>
              </div>

              <div className="p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                  {selectedProject.extendedDescription}
                </p>

                <div className="mb-8">
                  <h4 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center rounded-md border border-border/50 bg-secondary/50 px-3 py-1.5 text-sm font-medium text-secondary-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-4 pt-6 border-t border-border/50">
                  {selectedProject.link !== "#" && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-foreground/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  )}
                  {selectedProject.repo && (
                    <a
                      href={selectedProject.repo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md border border-input bg-background px-5 py-2.5 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    >
                      <Github className="h-4 w-4" />
                      View Source
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
