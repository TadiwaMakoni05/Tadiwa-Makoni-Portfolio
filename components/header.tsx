"use client";

import * as React from "react";
import { ThemeToggle } from "./theme-toggle";
import { Menu, X, ArrowUpRight, Github } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [activeSection, setActiveSection] = React.useState<string>("home");

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  React.useEffect(() => {
    const sectionIds = ["home", "about", "services", "tech", "projects", "approach", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const navLinks = [
    { name: "About", href: "#about", id: "about", index: "01" },
    { name: "Services", href: "#services", id: "services", index: "02" },
    { name: "Stack", href: "#tech", id: "tech", index: "03" },
    { name: "Projects", href: "#projects", id: "projects", index: "04" },
    { name: "Approach", href: "#approach", id: "approach", index: "05" },
    { name: "Contact", href: "#contact", id: "contact", index: "06" },
  ];

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 border-b ${
        isScrolled
          ? "bg-background/85 backdrop-blur-md border-border py-2.5 shadow-[0_1px_3px_rgba(0,0,0,0.05)]"
          : "bg-background/40 backdrop-blur-sm border-border/40 py-4"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl flex items-center justify-between">
        {/* Brand / Logo */}
        <div className="flex items-center gap-3">
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, "#home")}
            className="group flex items-center gap-2 text-sm font-semibold tracking-tight text-foreground"
          >
            <span className="font-mono text-xs font-bold px-1.5 py-0.5 rounded border border-border bg-muted/60 text-foreground group-hover:border-foreground/40 transition-colors">
              TM
            </span>
            <span className="font-semibold text-foreground tracking-tight hover:opacity-80 transition-opacity">
              T.Makoni
            </span>
          </a>
        </div>

        {/* Desktop Navigation */}
        <div className="flex items-center gap-4 sm:gap-6">
          <nav className="hidden md:flex items-center gap-1 text-xs font-medium font-mono text-muted-foreground">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`relative px-3 py-1.5 rounded-md transition-all duration-150 ${
                    isActive
                      ? "text-foreground bg-muted font-semibold"
                      : "hover:text-foreground hover:bg-muted/50"
                  }`}
                >
                  <span className="tracking-tight">{link.name}</span>
                  {isActive && (
                    <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-foreground rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Actions: GitHub & Theme Toggle */}
          <div className="flex items-center gap-2 border-l border-border/60 pl-3 sm:pl-4">
            <a
              href="https://github.com/TadiwaMakoni05"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            >
              <Github className="h-4 w-4" />
            </a>
            <ThemeToggle />

            {/* Mobile menu button */}
            <button
              className="md:hidden p-1.5 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors border border-border/50"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? (
                <X className="h-4 w-4" />
              ) : (
                <Menu className="h-4 w-4" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-border bg-background/98 backdrop-blur-xl px-4 py-4 transition-all">
          <div className="flex flex-col space-y-1">
            <div className="flex items-center justify-between pb-3 mb-2 border-b border-border/60 text-xs font-mono text-muted-foreground">
              <span>NAVIGATION MENU</span>
              <span className="flex items-center gap-1.5 text-emerald-500">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
                HARARE, ZW
              </span>
            </div>
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className={`flex items-center justify-between px-3 py-2.5 rounded-md text-sm transition-colors ${
                    isActive
                      ? "bg-muted text-foreground font-semibold"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted/40"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="font-mono text-xs text-muted-foreground/80">
                      {link.index}
                    </span>
                    <span>{link.name}</span>
                  </div>
                  <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground/60" />
                </a>
              );
            })}

            <div className="pt-3 mt-2 border-t border-border/60 flex items-center justify-between text-xs text-muted-foreground font-mono">
              <span>GET IN TOUCH</span>
              <a
                href="mailto:tadiwa.makoni13@gmail.com"
                className="text-foreground underline underline-offset-4"
              >
                tadiwa.makoni13@gmail.com
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
