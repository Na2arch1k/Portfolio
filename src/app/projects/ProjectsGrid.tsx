"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, Bot, Columns3, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { TextReveal } from "@/components/ui/TextReveal";
import { ALL_PROJECTS } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ProjectsGrid() {
  const { t } = useLanguage();
  const productCases = [
    { id: "cliniccard" as const, icon: Stethoscope, ready: true },
    { id: "chatbot" as const, icon: Bot, ready: false },
    { id: "crm" as const, icon: Columns3, ready: false },
  ];

  return (
    <Container>
      <div className="flex items-center justify-between border-t border-white/15 pt-5">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/45 transition-colors hover:text-accent"><ArrowLeft size={14} />{t.projectsPage.back}</Link>
        <span className="font-mono text-[9px] uppercase tracking-[.18em] text-accent">{t.projectsPage.eyebrow}</span>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
        <TextReveal as="h1" text={t.projectsPage.title} className="max-w-[10ch] text-[clamp(3.6rem,8vw,8rem)] font-semibold uppercase leading-[.8] tracking-[-.08em] text-white" />
        <Reveal delay={0.12}><p className="max-w-md border-l border-accent pl-5 text-sm leading-relaxed text-white/48">{ALL_PROJECTS.length}+ {t.projectsPage.description}</p></Reveal>
      </div>

      <div className="mt-20 grid gap-4 lg:grid-cols-3">
        {productCases.map(({ id, icon: Icon, ready }, index) => {
          const copy = t.projects.productCases[id];
          return (
            <Reveal key={id} delay={index * 0.05}>
              <article className={`group relative flex min-h-[23rem] flex-col overflow-hidden border p-6 sm:p-8 ${ready ? "border-accent/50 bg-accent text-black" : "border-white/14 bg-[#10100e] text-white"}`}>
                <div className="scene-grid pointer-events-none absolute inset-0 opacity-25" />
                <div className="relative flex items-start justify-between"><span className={`font-mono text-[8px] uppercase tracking-[.17em] ${ready ? "text-black/55" : "text-accent"}`}>0{index + 1} / {copy.status}</span><Icon size={21} strokeWidth={1.3} /></div>
                <div className="relative mt-auto"><span className={`font-mono text-[7px] uppercase tracking-[.15em] ${ready ? "text-black/45" : "text-white/28"}`}>{copy.category}</span><h2 className="mt-3 text-4xl font-semibold uppercase leading-[.84] tracking-[-.065em] sm:text-5xl">{copy.title}</h2><p className={`mt-5 text-xs leading-relaxed ${ready ? "text-black/62" : "text-white/40"}`}>{copy.description}</p>{ready ? <Link href="/#contact" className="mt-7 inline-flex items-center gap-2 border-b border-black pb-2 text-[10px] font-bold uppercase tracking-[.08em]">{copy.action}<ArrowUpRight size={14} /></Link> : <span className="mt-7 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/28">{copy.action}<i className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /></span>}</div>
              </article>
            </Reveal>
          );
        })}
      </div>

      <div className="mt-28 flex items-end justify-between border-t border-white/15 pt-5"><div><span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">Web archive</span><h2 className="mt-4 text-4xl font-semibold uppercase tracking-[-.06em] sm:text-6xl">{t.projects.websitesLabel}</h2></div><span className="font-mono text-[8px] uppercase tracking-[.16em] text-white/26">{ALL_PROJECTS.length} live</span></div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {ALL_PROJECTS.map((project, index) => {
          const copy = t.projects.items[project.id as keyof typeof t.projects.items];
          return (
            <Reveal key={project.id} delay={(index % 3) * 0.055}>
              <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={t.projects.openInNewTab.replace("{title}", project.title)} className="group block overflow-hidden border border-white/14 bg-[#10100e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                <div className="relative aspect-[4/3] overflow-hidden"><Image src={project.image} alt={t.projects.screenshotAlt.replace("{title}", project.title)} fill sizes="(max-width:640px) 100vw, (max-width:1024px) 50vw, 33vw" className="object-cover object-top saturate-[.62] transition-[transform,filter] duration-1000 group-hover:scale-[1.055] group-hover:saturate-100" /><div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/20" /><span className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-[#efeee8] text-black transition-colors group-hover:bg-accent"><ArrowUpRight size={16} /></span><div className="absolute inset-x-0 bottom-0 p-5"><span className="font-mono text-[7px] uppercase tracking-[.15em] text-accent">{String(index + 1).padStart(2, "0")} / {copy.category}</span><h3 className="mt-2 text-2xl font-semibold uppercase tracking-[-.05em] text-white">{project.title}</h3></div></div>
              </a>
            </Reveal>
          );
        })}
      </div>
    </Container>
  );
}
