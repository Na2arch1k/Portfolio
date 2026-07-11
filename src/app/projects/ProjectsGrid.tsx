"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Globe } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { ALL_PROJECTS } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <Container>
      <Reveal>
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-sm font-medium text-white/60 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm"
        >
          <ArrowLeft size={16} />
          {t.projectsPage.back}
        </Link>
      </Reveal>

      <Reveal delay={0.05} className="mt-6">
        <span className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-accent-soft">
          {t.projectsPage.eyebrow}
        </span>
      </Reveal>

      <Reveal delay={0.1} className="mt-4">
        <h1 className="text-gradient max-w-3xl text-3xl font-semibold tracking-tight sm:text-4xl md:text-5xl">
          {t.projectsPage.title}
        </h1>
      </Reveal>

      <Reveal delay={0.15} className="mt-4">
        <p className="max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          {ALL_PROJECTS.length}+ {t.projectsPage.description}
        </p>
      </Reveal>

      <div className="mt-14 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {ALL_PROJECTS.map((project, index) => {
          const copy = t.projects.items[project.id as keyof typeof t.projects.items];
          const domain = new URL(project.url).hostname;

          return (
            <Reveal key={project.id} delay={(index % 3) * 0.08}>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.projects.openInNewTab.replace("{title}", project.title)}
                className="group relative block h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background rounded-2xl"
              >
                <div
                  className={`pointer-events-none absolute -inset-4 -z-10 rounded-[2rem] bg-gradient-to-br opacity-0 blur-2xl transition-opacity duration-700 group-hover:opacity-100 ${project.accent}`}
                />

                <div className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 group-hover:border-white/20 group-hover:shadow-[0_32px_80px_-24px_rgba(0,0,0,0.8)]">
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
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                    <div className="absolute inset-0 flex items-end justify-end bg-gradient-to-t from-black/50 via-transparent to-transparent p-4 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-3.5 py-1.5 text-xs font-semibold text-black shadow-lg">
                        {t.projectsPage.open}
                        <ArrowUpRight size={13} />
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-5">
                    <div className="flex items-baseline gap-3">
                      <span className="font-mono text-xs font-medium tracking-widest text-accent-soft/70">
                        {project.index}
                      </span>
                      <span className="text-[11px] font-medium uppercase tracking-[0.15em] text-white/40">
                        {copy.category}
                      </span>
                    </div>
                    <h3 className="mt-2 text-xl font-semibold tracking-tight text-white">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-white/55">
                      {copy.description}
                    </p>
                  </div>
                </div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
