"use client";

import Image from "next/image";
import { FadeIn } from "@/components/ui/fade-in";
import { Sparkles, Layers } from "lucide-react";

export function About() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-b border-border bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Narrative & Craft Philosophy */}
          <div className="lg:col-span-7 space-y-8">
            {/* Section Eyebrow */}
            <FadeIn>
              <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-3">
                <span className="text-foreground font-semibold">01</span>
                <span>//</span>
                <span>ABOUT &amp; PROFILE</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground leading-[1.12]">
                Engineering software with precision and product intuition.
              </h2>
            </FadeIn>

            {/* Narrative Content */}
            <FadeIn delay={0.15} className="space-y-5 text-muted-foreground leading-relaxed">
              <p className="text-lg sm:text-xl text-foreground font-normal leading-relaxed">
                I am a Software Developer who bridges the gap between design and engineering.
                My expertise spans frontend and backend development, cross-platform mobile apps,
                and user-centric interface design.
              </p>

              <p className="text-base sm:text-lg">
                I focus on building responsive, highly functional systems with a clean aesthetic.
                Whether crafting an interactive user experience or architecting a robust backend
                with Django and PostgreSQL, I am driven by a passion to learn, innovate, and
                collaborate on impactful technology solutions.
              </p>

              <p className="text-base sm:text-lg">
                Beyond pure software development, I bring a refined aesthetic sensibility to each
                project—leveraging design tools like Photoshop and Canva to produce coherent visual
                assets that seamlessly support technical implementations.
              </p>
            </FadeIn>

          
          </div>

          {/* Right Column: Editorial 4:5 Photography (Analogue Craft & Human Scale) */}
          <div className="lg:col-span-5">
            <FadeIn delay={0.2} className="relative">
              {/* Editorial Frame with 4:5 Aspect Ratio */}
              <div className="group relative aspect-[4/5] w-full rounded-2xl overflow-hidden border border-border bg-muted shadow-lg">
                <Image
                  src="/flowers.jpg"
                  alt="Artisan hands shaping raw earthenware clay on a potter's wheel, emphasizing tactile material craft, earthy texture, and human scale"
                  fill
                  unoptimized
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 45vw, 480px"
                  className="object-cover object-center grayscale contrast-105 transition-all duration-700 ease-out group-hover:grayscale-0 group-hover:scale-105"
                />
                
                {/* Subtle Vignette Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent pointer-events-none" />

               
              </div>

             
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  );
}
