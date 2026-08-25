"use client";

import Image from "next/image";
import Link from "next/link";
import { m } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Bot, Columns3, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ALL_PROJECTS } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PRODUCT_ICONS = { cliniccard: Stethoscope, chatbot: Bot, crm: Columns3 } as const;
const PRODUCT_URLS = { cliniccard: "https://clinic-card-demo.vercel.app", crm: "https://crm-demo-snowy-two.vercel.app" } as const;

export function ProjectsGrid() {
  const { t } = useLanguage();

  return (
    <Container>
      <div className="flex items-center justify-between border-t border-white/15 pt-5">
        <Link href="/#projects" className="inline-flex items-center gap-2 font-mono text-[9px] uppercase tracking-[.16em] text-white/45 transition-colors hover:text-accent"><ArrowLeft size={14} />{t.projectsPage.back}</Link>
        <span className="font-mono text-[9px] uppercase tracking-[.18em] text-accent">{t.projectsPage.eyebrow}</span>
      </div>

      <div className="mt-14 grid gap-10 lg:grid-cols-[1.3fr_.7fr] lg:items-end">
        <h1 className="max-w-[11ch] text-[clamp(3.6rem,8vw,8rem)] font-semibold uppercase leading-[.8] tracking-[-.08em] text-white">{t.projectsPage.title}</h1>
        <p className="max-w-md border-l border-accent pl-5 text-sm leading-relaxed text-white/48"><strong className="text-white">{ALL_PROJECTS.length}+</strong> {t.projectsPage.description}</p>
      </div>

      <div className="-mx-6 mt-16 overflow-hidden border-y border-white/12 py-4 lg:-mx-8">
        <div className="animate-marquee flex w-max gap-8 whitespace-nowrap font-mono text-[8px] uppercase tracking-[.17em] text-white/38 motion-reduce:animate-none">
          {[...ALL_PROJECTS, ...ALL_PROJECTS].map((project, index) => <span key={`${project.id}-${index}`} className="flex items-center gap-8">{project.title}<i className="h-1.5 w-1.5 bg-accent" /></span>)}
        </div>
      </div>

      <div className="mt-16 flex items-end justify-between border-t border-white/15 pt-5"><div><span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">Web archive / Live</span><h2 className="mt-4 text-4xl font-semibold uppercase tracking-[-.06em] sm:text-6xl">{t.projects.websitesLabel}</h2></div><span className="hidden font-mono text-[8px] uppercase tracking-[.16em] text-white/26 sm:block">{ALL_PROJECTS.length} live projects</span></div>

      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        {ALL_PROJECTS.map((project, index) => {
          const copy = t.projects.items[project.id as keyof typeof t.projects.items];
          const wide = index === 0 || index === 5;
          return (
            <m.a key={project.id} href={project.url} target="_blank" rel="noopener noreferrer" aria-label={t.projects.openInNewTab.replace("{title}", project.title)} initial={{ opacity: 0, y: 70, rotateZ: index % 2 === 0 ? -1.5 : 1.5 }} whileInView={{ opacity: 1, y: 0, rotateZ: 0 }} viewport={{ once: true, margin: "-60px" }} transition={{ duration: .7, ease: [0.16, 1, 0.3, 1] }} className={`group block overflow-hidden border border-white/14 bg-[#10100e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${wide ? "sm:col-span-2" : ""}`}>
              <div className={`relative overflow-hidden ${wide ? "aspect-[16/9] sm:aspect-[16/7]" : "aspect-[4/3]"}`}>
                <Image src={project.image} alt={t.projects.screenshotAlt.replace("{title}", project.title)} fill sizes={wide ? "(max-width:640px) 100vw, 90vw" : "(max-width:640px) 100vw, 45vw"} className="object-cover object-top transition-transform duration-1000 group-hover:scale-[1.045]" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/20" />
                <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center bg-[#efeee8] text-black transition-[background-color,transform] group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-accent"><ArrowUpRight size={17} /></span>
                <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7"><span className="font-mono text-[7px] uppercase tracking-[.15em] text-accent">{String(index + 1).padStart(2, "0")} / {copy.category}</span><h3 className={`${wide ? "text-4xl sm:text-6xl" : "text-3xl sm:text-4xl"} mt-2 font-semibold uppercase leading-[.84] tracking-[-.06em] text-white`}>{project.title}</h3>{wide && <p className="mt-4 hidden max-w-lg text-sm leading-relaxed text-white/45 sm:block">{copy.description}</p>}</div>
              </div>
            </m.a>
          );
        })}
      </div>

      <div className="mt-28 flex flex-wrap items-end justify-between gap-7 border-t border-white/15 pt-5"><div><span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">Products / Systems</span><h2 className="mt-4 max-w-[10ch] text-4xl font-semibold uppercase leading-[.88] tracking-[-.06em] sm:text-6xl">{t.projects.systemsLabel}</h2></div><p className="max-w-md text-sm leading-relaxed text-white/42">{t.projects.systemsDescription}</p></div>

      <div className="mt-10 grid gap-4 lg:grid-cols-3">
        {(["cliniccard", "chatbot", "crm"] as const).map((id, index) => {
          const copy = t.projects.productCases[id];
          const Icon = PRODUCT_ICONS[id];
          const url = id === "cliniccard" || id === "crm" ? PRODUCT_URLS[id] : undefined;
          const ready = Boolean(url);
          return (
            <article key={id} className={`group relative flex min-h-[22rem] flex-col overflow-hidden border p-6 transition-transform duration-500 hover:-translate-y-2 sm:p-8 ${ready ? "border-accent/45 bg-[#11110f]" : "border-white/14 bg-[#0e0e0c]"}`}>
              <div className="scene-grid pointer-events-none absolute inset-0 opacity-25" />
              <div className="relative flex items-start justify-between"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">0{index + 1} / {copy.status}</span><Icon size={20} strokeWidth={1.3} className="text-white/35" /></div>
              <div className="relative mt-auto"><span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/28">{copy.category}</span><h3 className="mt-3 text-4xl font-semibold uppercase leading-[.84] tracking-[-.065em]">{copy.title}</h3><p className="mt-5 text-xs leading-relaxed text-white/42">{copy.description}</p>{url ? <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-accent pb-2 text-[9px] font-bold uppercase tracking-[.1em]">{copy.action}<ArrowUpRight size={14} /></a> : <span className="mt-6 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.15em] text-white/26">{copy.action}<i className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /></span>}</div>
            </article>
          );
        })}
      </div>
    </Container>
  );
}
