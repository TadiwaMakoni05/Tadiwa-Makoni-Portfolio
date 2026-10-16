"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { ArrowUpRight, X, ExternalLink, Github, Globe } from "lucide-react";
import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

type Project = {
  id: string;
  number: string;
  title: string;
  category: string;
  description: string;
  extendedDescription: string;
  type: string;
  thumbnail: string;
  mockUrl: string;
  tags: string[];
  link?: string;
  repo: string;
  highlights: string[];
};

export function Projects() {
  const [selectedProject, setSelectedProject] = React.useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: "art-adherence",
      number: "01",
      title: "ART Adherence Companion System",
      category: "HEALTHCARE & PATIENT MANAGEMENT",
      description:
        "A specialized clinical web platform empowering patients on Antiretroviral Therapy to maintain treatment adherence through dosage schedules, medication reminders, and longitudinal progress tracking.",
      extendedDescription:
        "The ART Adherence Companion System is engineered to address medication consistency in chronic care. The platform delivers real-time daily dose tracking, automated reminder alerts, missed-dose recovery workflows, and comprehensive adherence analytics. Built with a decoupled React frontend and a Python/Django REST API backend with SQLite storage.",
      type: "Healthcare Web Application",
      thumbnail: "/art-wellness.jpg",
      mockUrl: "art-companion.health",
      tags: ["React.js", "Tailwind CSS", "Django", "Django REST Framework", "SQLite"],
      repo: "https://github.com/TadiwaMakoni05/ART",
      highlights: [
        "Patient-centric daily medication tracking and compliance scoring",
        "Decoupled REST API backend powered by Django REST Framework",
        "Longitudinal analytics visualizing adherence trends over weeks and months",
      ],
    },
    {
      id: "wedding-platform",
      number: "02",
      title: "Lavish — Wedding & Event Platform",
      category: "EDITORIAL & EVENT ARCHITECTURE",
      description:
        "A bespoke, modern digital platform crafted for event coordination, RSVP confirmations, interactive timelines, and high-fidelity photo gallery curation.",
      extendedDescription:
        "Lavish provides an editorial-grade experience for wedding guests and coordinators alike. Built with Next.js and Tailwind CSS, it features real-time RSVP management, dynamic schedule itineraries, venue mapping, and image galleries optimized for responsive rendering across all screen sizes with zero layout shift.",
      type: "Next.js Web Application",
      thumbnail: "/wedding.jpg",
      mockUrl: "wedding-nine-iota.vercel.app",
      tags: ["Next.js", "React", "Tailwind CSS", "TypeScript", "Responsive UI"],
      link: "https://wedding-nine-iota.vercel.app",
      repo: "https://github.com/TadiwaMakoni05/wedding",
      highlights: [
        "Sub-second page transitions powered by Next.js Turbopack",
        "Fluid responsive gallery carousels with lazy-loaded image optimization",
        "Interactive RSVP registration workflow and event timetable integration",
      ],
    },
    {
      id: "news-app",
      number: "03",
      title: "Global News Aggregator",
      category: "JOURNALISM & MEDIA CURATION",
      description:
        "A real-time global news platform delivering live headlines, category filters (tech, business, sports), dynamic keyword search, and cached article reading.",
      extendedDescription:
        "Engineered with React.js and Tailwind CSS, this news client interfaces with NewsAPI.org to aggregate thousands of news articles across global publishers. Features category-based filtering, debounce-enabled real-time keyword search, article bookmarking, and defensive API error-handling with skeleton loading states.",
      type: "React Single Page Application",
      thumbnail: "/news.jpg",
      mockUrl: "news-dashboard.app",
      tags: ["React.js", "Tailwind CSS", "News API", "REST Integration", "JavaScript"],
      repo: "https://github.com/TadiwaMakoni05/News-App",
      highlights: [
        "Real-time REST API consumption with cached responses",
        "Multi-category filtering across technology, science, business, and entertainment",
        "Clean editorial reading mode with responsive card layouts",
      ],
    },
    {
      id: "travel-agency",
      number: "04",
      title: "TravelDream — Tour & Travel Agency",
      category: "HOSPITALITY & EXPEDITION SHOWCASE",
      description:
        "A commercial expedition and travel agency platform featuring destination discovery, curated tour packages, interactive slideshows, and booking inquiries.",
      extendedDescription:
        "TravelDream is a lightweight, high-performance commercial website designed for safari and international tour agencies. Developed using vanilla HTML5, modern CSS3, and JavaScript, integrated with Swiper.js and ScrollReveal for lightweight yet fluid micro-interactions with minimal bundle weight.",
      type: "Commercial Web Platform",
      thumbnail: "/travel-expedition.jpg",
      mockUrl: "traveldream-agency.com",
      tags: ["HTML5", "CSS3", "JavaScript", "Swiper.js", "ScrollReveal"],
      repo: "https://github.com/TadiwaMakoni05/Tour-Travel-Agency",
      highlights: [
        "Zero-dependency framework overhead for maximum load speed",
        "Touch-enabled Swiper.js destination carousels",
        "Seamless client booking inquiry and direct contact channeling",
      ],
    },
    {
      id: "maverick-aluminium",
      number: "05",
      title: "Maverick Aluminium Portfolio",
      category: "ARCHITECTURAL FABRICATION & GLAZING",
      description:
        "A modern commercial digital showcase for Maverick Aluminium, presenting architectural fabrication, structural glazing, window systems, and quotation requests.",
      extendedDescription:
        "A production web application engineered for Maverick Aluminium's commercial operations. Developed with Next.js and Tailwind CSS, it organizes structural aluminium products, residential and commercial glazing installations, and project portfolio case studies with a clean enterprise aesthetic.",
      type: "Next.js Web Application",
      thumbnail: "/maverick.jpg",
      mockUrl: "maverick-nu.vercel.app",
      tags: ["Next.js", "React", "Tailwind CSS", "Corporate Architecture"],
      link: "https://maverick-nu.vercel.app",
      repo: "https://github.com/TadiwaMakoni05/maverick",
      highlights: [
        "Enterprise product categorization for commercial architectural glazing",
        "Responsive high-resolution showcase of physical fabrication work",
        "Direct client consultation intake forms and contact pipeline",
      ],
    },
    {
      id: "netflix-clone",
      number: "06",
      title: "Netflix Clone",
      category: "ENTERTAINMENT & MEDIA STREAMING",
      description:
        "A full-stack media streaming web application featuring dynamic movie catalogues, TMDB API trailer playback, user authentication, and responsive media rows.",
      extendedDescription:
        "A full-stack media platform inspired by modern streaming interfaces. Built with Python and Django on the backend and Tailwind CSS on the frontend. Connects to the TMDB API for live poster feeds, synopsis data, genre classifications, and responsive video trailers with user session management.",
      type: "Full-Stack Web Application",
      thumbnail: "/netflix.jpg",
      mockUrl: "https://movie-clone-nine.vercel.app/",
      tags: ["React", "Tailwind CSS", "TMDB API"],
      repo: "https://github.com/TadiwaMakoni05/movie-clone",
      highlights: [
        "An independent, full-featured streaming discovery and entertainment editorial web application inspired by Netflix. ",
        "TMDB API video trailer fetching and movie categorization",
        "Horizontal scrolling media rows with hover expand states",
      ],
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
      className="py-24 md:py-32 border-b border-border bg-subtle-grid"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mb-16">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground font-semibold">04</span>
            <span>//</span>
            <span>FEATURED WORK</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground">
                Selected Projects
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground mt-2 max-w-xl">
                A curated selection of web applications, mobile platforms, and system implementations. Hover over any screenshot to reveal full color.
              </p>
            </div>
          </div>
        </FadeIn>

        {/* Editorial Alternating Projects List */}
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, index) => {
            const isEven = index % 2 === 0;

            return (
              <FadeIn key={project.id} delay={0.1}>
                <div
                  className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-300 hover:border-foreground/30 shadow-sm"
                >
                  {/* Visual Preview Window (Alternates position on desktop) */}
                  <div
                    className={`lg:col-span-7 ${
                      isEven ? "lg:order-1" : "lg:order-2"
                    }`}
                  >
                    <div
                      onClick={() => setSelectedProject(project)}
                      className="group cursor-pointer rounded-xl border border-border bg-muted overflow-hidden shadow-inner transition-all hover:border-foreground/40"
                    >
                      {/* Browser Chrome Header */}
                      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-border bg-muted/70 select-none">
                        <div className="flex items-center gap-1.5">
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                          <span className="h-2.5 w-2.5 rounded-full bg-border" />
                        </div>
                        <div className="flex items-center gap-1.5 font-mono text-[11px] text-muted-foreground bg-background/60 px-3 py-0.5 rounded border border-border/60 max-w-[200px] truncate">
                          <Globe className="h-3 w-3 shrink-0 text-muted-foreground/70" />
                          <span className="truncate">{project.mockUrl}</span>
                        </div>
                        <span className="font-mono text-[10px] text-muted-foreground uppercase">
                          {project.type.split(" ")[0]}
                        </span>
                      </div>

                      {/* Project Image Frame with Grayscale-to-Color on Hover */}
                      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
                        <Image
                          src={project.thumbnail}
                          alt={`${project.title} screenshot`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 680px"
                          className="object-cover object-top grayscale contrast-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors pointer-events-none" />

                        {/* Hover Overlay Hint */}
                        <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity bg-background/90 backdrop-blur-md px-2.5 py-1 rounded text-xs font-mono font-medium border border-border text-foreground flex items-center gap-1.5 shadow-sm">
                          <span>Inspect details</span>
                          <ArrowUpRight className="h-3.5 w-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Project Details (Alternates position on desktop) */}
                  <div
                    className={`lg:col-span-5 space-y-5 ${
                      isEven ? "lg:order-2" : "lg:order-1"
                    }`}
                  >
                    {/* Eyebrow & Index */}
                    <div className="flex items-center justify-between border-b border-border/80 pb-3 font-mono text-xs text-muted-foreground">
                      <div className="flex items-center gap-2">
                        <span className="text-foreground font-semibold">PROJECT {project.number}</span>
                        <span className="text-border">/</span>
                        <span className="truncate max-w-[220px]">{project.category}</span>
                      </div>
                    </div>

                    {/* Title */}
                    <div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground hover:text-foreground/80 cursor-pointer transition-colors"
                      >
                        {project.title}
                      </h3>
                    </div>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div>
                      <div className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-2">
                        Technologies
                      </div>
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center px-2 py-0.5 rounded border border-border bg-muted/50 font-mono text-xs text-muted-foreground"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions: Live Demo + GitHub + Case Study */}
                    <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-border/70">
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 rounded-md bg-foreground text-background px-4 py-2 text-xs font-medium transition-all hover:opacity-90 active:scale-95"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                          <span>Live Site</span>
                        </a>
                      )}

                      <a
                        href={project.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3.5 py-2 text-xs font-medium text-foreground transition-all hover:bg-muted active:scale-95"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>

                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-1 text-xs font-mono font-medium text-muted-foreground hover:text-foreground transition-colors ml-auto"
                      >
                        <span>Case Study</span>
                        <ArrowUpRight className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  </div>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </div>

      {/* Case Study Detail Modal / Dialog */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Dialog Content */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: 16 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: 16 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-card border border-border rounded-2xl shadow-2xl z-10 text-foreground"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 p-2 rounded-full bg-background/80 backdrop-blur-md border border-border text-foreground hover:bg-muted transition-colors z-30"
                aria-label="Close project modal"
              >
                <X className="h-4 w-4" />
              </button>

              {/* Large Image Preview with Browser Header & Grayscale-to-Color */}
              <div className="border-b border-border bg-muted overflow-hidden">
                <div className="flex items-center px-4 py-2.5 border-b border-border bg-muted/60 font-mono text-xs text-muted-foreground select-none">
                  <div className="flex items-center gap-1.5 mr-3">
                    <span className="h-2 w-2 rounded-full bg-border" />
                    <span className="h-2 w-2 rounded-full bg-border" />
                    <span className="h-2 w-2 rounded-full bg-border" />
                  </div>
                  <span>{selectedProject.mockUrl}</span>
                </div>

                <div className="group/modal relative aspect-[16/9] w-full bg-muted overflow-hidden">
                  <Image
                    src={selectedProject.thumbnail}
                    alt={`${selectedProject.title} screenshot`}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover object-top grayscale contrast-105 transition-all duration-700 ease-out hover:grayscale-0 hover:scale-105"
                  />
                </div>
              </div>

              {/* Modal Body */}
              <div className="p-6 sm:p-8 space-y-6">
                <div>
                  <div className="flex items-center gap-2 font-mono text-xs text-muted-foreground uppercase tracking-wider mb-2">
                    <span className="text-foreground font-semibold">PROJECT {selectedProject.number}</span>
                    <span>//</span>
                    <span>{selectedProject.type}</span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground">
                    {selectedProject.title}
                  </h3>
                </div>

                {/* Extended Technical Description */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Overview &amp; Architecture
                  </h4>
                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {selectedProject.extendedDescription}
                  </p>
                </div>

                {/* Engineering Highlights */}
                <div className="space-y-3">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Technical Highlights
                  </h4>
                  <ul className="space-y-2">
                    {selectedProject.highlights.map((highlight, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-xs sm:text-sm text-foreground/90"
                      >
                        <span className="font-mono text-muted-foreground shrink-0 mt-0.5">
                          0{idx + 1}.
                        </span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack List */}
                <div className="space-y-3 pt-2">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                    Technologies Used
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-flex items-center px-2.5 py-1 rounded border border-border bg-muted/60 font-mono text-xs text-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons in Modal */}
                <div className="pt-6 border-t border-border flex flex-wrap items-center gap-3">
                  {selectedProject.link && (
                    <a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-md bg-foreground text-background px-4 py-2 text-xs font-medium hover:opacity-90 transition-opacity"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                      <span>Visit Live Deployment</span>
                    </a>
                  )}

                  <a
                    href={selectedProject.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-md border border-border bg-background px-4 py-2 text-xs font-medium text-foreground hover:bg-muted transition-colors"
                  >
                    <Github className="h-3.5 w-3.5" />
                    <span>View Repository on GitHub</span>
                  </a>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="ml-auto text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Close [Esc]
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
