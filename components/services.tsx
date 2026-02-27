"use client";

import { FadeIn } from "@/components/ui/fade-in";
import { Monitor, Server, Smartphone, Layout, Cpu } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Frontend Development",
      description:
        "Building responsive, interactive UIs with HTML, CSS, React, and Next.js. Focus on performance and clean design.",
      icon: <Monitor className="h-6 w-6" />,
    },
    {
      title: "Backend Development",
      description:
        "Architecting robust APIs and robust backend systems using Python, Django, Appwrite, and Firebase.",
      icon: <Server className="h-6 w-6" />,
    },
    {
      title: "Mobile Apps",
      description:
        "Creating cross-platform mobile experiences with React Native and NativeWind.",
      icon: <Smartphone className="h-6 w-6" />,
    },
    {
      title: "UI/UX Design",
      description:
        "Designing minimal, modern, and user-centric interfaces. Proficient in Photoshop and Canva.",
      icon: <Layout className="h-6 w-6" />,
    },
    {
      title: "System Development",
      description:
        "End-to-end full-stack development, database architecture (SQL, PostgreSQL, SQLite), and scalable design.",
      icon: <Cpu className="h-6 w-6" />,
    },
  ];

  return (
    <section id="services" className="py-24 md:py-32">
      <FadeIn className="mb-12">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Services
        </h2>
        <div className="h-1 w-12 bg-foreground rounded mt-6"></div>
      </FadeIn>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <FadeIn key={service.title} delay={0.1 * index}>
            <div className="group h-full rounded-2xl border border-border bg-card p-6 transition-all hover:bg-accent/50 hover:shadow-md">
              <div className="mb-4 inline-flex items-center justify-center rounded-lg bg-background p-3 shadow-sm border border-border group-hover:scale-110 transition-transform">
                {service.icon}
              </div>
              <h3 className="mb-2 text-xl font-bold">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
