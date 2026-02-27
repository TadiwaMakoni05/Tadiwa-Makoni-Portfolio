"use client";

import { FadeIn } from "@/components/ui/fade-in";

export function About() {
  return (
    <section id="about" className="py-24 md:py-32">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
        <FadeIn className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            About Me
          </h2>
          <div className="h-1 w-12 bg-foreground rounded"></div>
        </FadeIn>

        <FadeIn
          delay={0.2}
          className="space-y-6 text-lg text-muted-foreground leading-relaxed"
        >
          <p>
            I am a Software Developer who bridges the gap between design and
            engineering. My expertise spans frontend and backend development,
            mobile apps, and UI/UX design.
          </p>
          <p>
            I focus on building responsive, highly functional systems with a
            clean aesthetic. Whether it&apos;s crafting an interactive UI or
            architecting a robust backend architecture, I am driven by a passion
            to learn, innovate, and collaborate on impactful tech solutions.
          </p>
          <p>
            Beyond coding, I have a strong eye for visual design, occasionally
            working with Photoshop and Canva to create compelling graphics and
            assets that complement technical implementations.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
