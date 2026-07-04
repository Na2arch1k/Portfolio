"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, LayoutGrid } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { PROJECTS } from "@/data/projects";

export function Projects() {
  return (
    <section id="projects" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Проєкти"
          title="Портфоліо в процесі наповнення"
          description="Я готую перші кейси до публікації. Нижче — приклади форматів проєктів, над якими я працюю."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PROJECTS.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.08}>
              <motion.article
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="glass group relative flex h-full flex-col overflow-hidden rounded-2xl transition-colors duration-300 hover:border-accent/40"
              >
                <div
                  className={cn(
                    "relative flex h-48 items-center justify-center overflow-hidden bg-gradient-to-br",
                    project.gradient
                  )}
                >
                  <div className="bg-grid absolute inset-0 opacity-40 [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_80%)]" />
                  <LayoutGrid
                    size={40}
                    className="relative z-10 text-white/25 transition-transform duration-500 group-hover:scale-110"
                  />
                  <span className="absolute right-4 top-4 inline-flex items-center gap-1.5 rounded-full bg-black/40 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur-sm">
                    <Clock size={12} />
                    Незабаром
                  </span>
                </div>

                <div className="flex flex-1 flex-col p-6">
                  <span className="text-xs font-medium uppercase tracking-widest text-accent-soft">
                    {project.category}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold text-white">
                    {project.title}
                  </h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-white/60">
                    {project.description}
                  </p>
                  <button
                    disabled
                    className="mt-6 inline-flex items-center gap-1.5 self-start rounded-full border border-white/10 px-4 py-2 text-sm font-medium text-white/40"
                  >
                    Незабаром
                    <ArrowUpRight size={14} />
                  </button>
                </div>
              </motion.article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
