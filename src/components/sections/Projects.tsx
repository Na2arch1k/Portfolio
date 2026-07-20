"use client";

import Image from "next/image";
import { m } from "framer-motion";
import { ArrowRight, ArrowUpRight, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import { FEATURED_PROJECTS, type Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ProjectRow({ project, flipped }: { project: Project; flipped: boolean }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const domain = new URL(project.url).hostname;

  return (
    <article className="group/row relative grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-14">
      {/* Screenshot */}
      <Reveal
        className={cn("lg:col-span-7", flipped && "lg:order-2")}
        delay={0.05}
      >
        <a
          href={project.url}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={t.projects.openInNewTab.replace("{title}", project.title)}
          className="group relative block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-2xl"
        >
          {/* Ambient glow behind the frame */}
          <div
            className={cn(
              "pointer-events-none absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100",
              project.accent
            )}
          />

          {/* Browser frame */}
          <div className="glass overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)]">
            <div className="flex items-center gap-3 border-b border-white/[0.06] bg-white/[0.03] px-4 py-3">
              <div className="flex gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#ff5f57]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#febc2e]" />
                <span className="h-2.5 w-2.5 rounded-full bg-white/15 transition-colors duration-300 group-hover:bg-[#28c840]" />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-center">
                <span className="inline-flex max-w-full items-center gap-1.5 truncate rounded-md bg-black/30 px-3 py-1 text-[11px] font-medium tracking-wide text-white/40 transition-colors duration-300 group-hover:text-white/70">
                  <Globe size={11} className="shrink-0" />
                  <span className="truncate">{domain}</span>
                </span>
              </div>
              <div className="w-[52px]" aria-hidden />
            </div>

            <div className="relative aspect-[16/10] overflow-hidden">
              <Image
                src={project.image}
                alt={t.projects.screenshotAlt.replace("{title}", project.title)}
                fill
                sizes="(max-width: 1024px) 100vw, 58vw"
                className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
              {/* Hover veil with CTA */}
              <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-semibold text-black shadow-lg">
                  {t.projects.openSite}
                  <ArrowUpRight size={15} />
                </span>
              </div>
            </div>
          </div>
        </a>
      </Reveal>

      {/* Copy */}
      <div className={cn("lg:col-span-5", flipped && "lg:order-1")}>
        <Reveal delay={0.15}>
          <div className="flex items-baseline gap-4">
            <span className="font-mono text-sm font-medium tracking-widest text-accent-soft/70">
              {project.index}
            </span>
            <span className="h-px flex-1 max-w-16 bg-gradient-to-r from-accent/50 to-transparent" />
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/40">
              {copy.category}
            </span>
          </div>

          <h3 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {project.title}
          </h3>

          <p className="mt-4 text-base leading-relaxed text-white/55">
            {copy.description}
          </p>

          <ul className="mt-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs font-medium text-white/60 transition-colors duration-300 hover:border-accent/30 hover:text-white/85"
              >
                {tech}
              </li>
            ))}
          </ul>

          <m.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ x: 4 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-white transition-colors duration-300 hover:text-accent-soft focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
          >
            <span className="border-b border-accent/40 pb-0.5">
              {t.projects.liveLabel}
            </span>
            <ArrowUpRight
              size={16}
              className="text-accent-soft transition-transform duration-300 group-hover/row:translate-x-0.5"
            />
          </m.a>
        </Reveal>
      </div>
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="relative py-24 sm:py-32">
      {/* Section ambience */}
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
        <div className="absolute left-1/2 top-24 h-[480px] w-[720px] -translate-x-1/2 rounded-full bg-accent/[0.05] blur-[140px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow={t.projects.eyebrow}
          title={t.projects.title}
          description={t.projects.description}
        />

        <div className="mt-20 flex flex-col gap-24 sm:gap-32">
          {FEATURED_PROJECTS.map((project, index) => (
            <ProjectRow
              key={project.id}
              project={project}
              flipped={index % 2 === 1}
            />
          ))}
        </div>

        <Reveal className="mt-24 flex justify-center sm:mt-32">
          <Button
            href="/projects"
            variant="secondary"
            size="lg"
            icon={<ArrowRight size={16} />}
          >
            {t.projects.viewAll}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
