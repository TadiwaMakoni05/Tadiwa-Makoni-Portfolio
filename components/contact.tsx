"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Mail, Github, Linkedin, ArrowUpRight } from "lucide-react";
import * as React from "react";

function WhatsAppIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
    </svg>
  );
}

export function Contact() {
  const email = "tadiwa.makoni13@gmail.com";

  const contactChannels = [
    {
      name: "Direct Email",
      handle: email,
      icon: <Mail className="h-5 w-5" />,
      href: `mailto:${email}`,
    },

    {
      name: "GitHub",
      handle: "TadiwaMakoni05",
      icon: <Github className="h-5 w-5" />,
      href: "https://github.com/TadiwaMakoni05",
    },

    {
      name: "LinkedIn",
      handle: "Tadiwa Makoni",
      icon: <Linkedin className="h-5 w-5" />,
      href: "https://www.linkedin.com/in/tadiwa-makoni-95006a2a4/",
     
    },

    {
      name: "WhatsApp",
      handle: "+263 77 267 5611",
      icon: <WhatsAppIcon className="h-5 w-5" />,
      href: "https://wa.me/263772675611",
    }
  ];

  return (
    <section
      id="contact"
      className="py-24 md:py-32 border-b border-border bg-subtle-grid relative"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mb-14 text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
            <span className="text-foreground font-semibold">06</span>
            <span>//</span>
            <span>GET IN TOUCH</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            Let&apos;s build something useful.
          </h2>

          <p className="text-base sm:text-lg text-muted-foreground mt-4 leading-relaxed">
            I&apos;m open to discussing new projects, engineering roles, creative ideas,
            and software collaboration. Whether you need a full-stack web application, an API architecture,
            or a mobile product, let&apos;s talk.
          </p>
        </FadeIn>



        {/* Channels Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {contactChannels.map((channel, idx) => (
            <FadeIn key={channel.name} delay={0.06 * idx}>
              <a
                href={channel.href}
                target={channel.name !== "Direct Email" ? "_blank" : undefined}
                rel={channel.name !== "Direct Email" ? "noopener noreferrer" : undefined}
                className="group h-full rounded-xl border border-border bg-card p-5 flex flex-col justify-between transition-all duration-200 hover:border-foreground/40 hover:shadow-sm"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="p-2 rounded-md border border-border bg-muted/50 text-foreground group-hover:scale-105 transition-transform">
                      {channel.icon}
                    </div>
                    <ArrowUpRight className="h-4 w-4 text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-1">
                    {channel.name}
                  </h3>
                  <p className="font-mono text-xs text-muted-foreground truncate mb-2">
                    {channel.handle}
                  </p>
                </div>
              </a>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Stack", href: "#tech" },
    { name: "Projects", href: "#projects" },
    { name: "Approach", href: "#approach" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <footer className="border-t border-border bg-background py-12 text-foreground font-mono text-xs">
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start pb-8 border-b border-border/60">
          {/* Brand & Title */}
          <div className="md:col-span-5 space-y-2">
            <div className="flex items-center gap-2 font-sans font-bold text-sm tracking-tight">
              <span className="font-mono text-xs px-1.5 py-0.5 rounded border border-border bg-muted">
                TM
              </span>
              <span>T.Makoni</span>
            </div>
            <p className="text-muted-foreground font-sans text-xs max-w-sm leading-relaxed">
              Software Developer &amp; Full-Stack Engineer. Building scalable web experiences,
              mobile products, and robust backend systems.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="md:col-span-4 space-y-2">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              INDEX
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* External Social Profiles */}
          <div className="md:col-span-3 space-y-2">
            <div className="text-[10px] uppercase tracking-wider text-muted-foreground">
              EXTERNAL
            </div>
            <div className="space-y-1.5 text-xs">
              <div>
                <a
                  href="https://github.com/TadiwaMakoni05"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <span>GitHub</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div>
                <a
                  href="https://www.linkedin.com/in/tadiwa-makoni-95006a2a4/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <span>LinkedIn</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
              <div>
                <a
                  href="mailto:tadiwa.makoni13@gmail.com"
                  className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1"
                >
                  <span>Email</span>
                  <ArrowUpRight className="h-3 w-3" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-muted-foreground">
          <div>
            © {new Date().getFullYear()} T.Makoni. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#home"
              onClick={scrollToTop}
              className="text-foreground hover:underline"
            >
              Back to top ↑
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
