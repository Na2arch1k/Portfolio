"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Bot, Columns3, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { FEATURED_PROJECTS, type Project } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { getStoryMotion } from "@/lib/story-motion";

const PRODUCT_ICONS = { cliniccard: Stethoscope, chatbot: Bot, crm: Columns3 } as const;
const PRODUCT_URLS = { cliniccard: "https://clinic-card-demo.vercel.app", crm: "https://crm-demo-snowy-two.vercel.app" } as const;

function ProjectRailCard({ project, index, reverse = false }: { project: Project; index: number; reverse?: boolean }) {
  const { t } = useLanguage();
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];
  const tilt = reverse ? (index % 2 === 0 ? "rotate-[1.2deg]" : "-rotate-[.7deg]") : (index % 2 === 0 ? "-rotate-[1deg]" : "rotate-[.8deg]");

  return (
    <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label={t.projects.openInNewTab.replace("{title}", project.title)} className={`group relative block h-[23rem] w-[76vw] shrink-0 overflow-hidden border border-white/15 bg-[#11110f] shadow-[0_26px_80px_rgba(0,0,0,.28)] transition-[transform,border-color] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-3 hover:rotate-0 hover:border-accent/55 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:h-[27rem] sm:w-[48vw] lg:w-[31vw] ${tilt}`}>
      <Image src={project.image} alt={t.projects.screenshotAlt.replace("{title}", project.title)} fill sizes="(max-width: 640px) 76vw, (max-width: 1024px) 48vw, 31vw" className="object-cover object-top transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.075]" />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/5 to-black/20 transition-colors duration-700 group-hover:from-black/90" />
      <span className="absolute left-0 top-0 bg-accent px-4 py-3 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-black">{String(index + 1).padStart(2, "0")}</span>
      <span className="absolute right-4 top-4 grid h-11 w-11 place-items-center overflow-hidden bg-[#efeee8] text-black transition-[background-color,transform] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-accent"><ArrowUpRight size={17} className="transition-transform duration-500 group-hover:rotate-45" /></span>
      <div className="absolute inset-x-0 bottom-0 p-5 sm:p-7">
        <span className="font-mono text-[7px] uppercase tracking-[.16em] text-accent">{copy.category}</span>
        <h3 className="mt-2 text-3xl font-semibold uppercase leading-[.84] tracking-[-.06em] sm:text-5xl">{project.title}</h3>
        <p className="mt-0 max-h-0 max-w-md overflow-hidden text-xs leading-relaxed text-white/48 opacity-0 transition-[max-height,margin,opacity] duration-700 group-hover:mt-4 group-hover:max-h-24 group-hover:opacity-100">{copy.description}</p>
      </div>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-700 group-hover:w-full" />
    </a>
  );
}

function MobileProjectCard({ project, index, progress }: { project: Project; index: number; progress: ReturnType<typeof useScroll>["scrollYProgress"] }) {
  const { t } = useLanguage();
  const story = getStoryMotion(index, FEATURED_PROJECTS.length, 170);
  const opacity = useTransform(progress, story.range, story.opacity);
  const y = useTransform(progress, story.range, story.y);
  const x = useTransform(progress, story.range, story.x);
  const scale = useTransform(progress, story.range, story.scale);
  const rotateZ = useTransform(progress, story.range, story.rotate);
  const pointerEvents = useTransform(opacity, (value) => value > .8 ? "auto" : "none");
  const imageY = useTransform(progress, [0, 1], [32, -32]);
  const imageScale = useTransform(progress, [0, .5, 1], [1.08, 1.02, 1.08]);
  const arrowRotate = useTransform(progress, [0, 1], [-12, 32]);
  const numberX = useTransform(progress, [0, 1], [-8, 10]);
  const copy = t.projects.items[project.id as keyof typeof t.projects.items];

  return (
    <m.a
      style={{ opacity, y, x, scale, rotateZ, pointerEvents }}
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t.projects.openInNewTab.replace("{title}", project.title)}
      whileTap={{ scale: .985 }}
      className="mobile-project-card group absolute inset-0 flex h-full w-full flex-col overflow-hidden border border-white/14 bg-[#10100e] shadow-[0_24px_70px_rgba(0,0,0,.34)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
    >
      <div className="relative h-[52%] shrink-0 overflow-hidden">
        <m.div style={{ y: imageY, scale: imageScale }} className="absolute -inset-y-8 inset-x-0"><Image src={project.image} alt={t.projects.screenshotAlt.replace("{title}", project.title)} fill sizes="100vw" className="object-cover object-top" /></m.div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/15" />
        <m.span style={{ x: numberX }} className="absolute left-0 top-0 bg-accent px-4 py-3 font-mono text-[8px] font-bold tracking-[.16em] text-black">{String(index + 1).padStart(2, "0")}</m.span>
        <m.span style={{ rotate: arrowRotate }} className="absolute right-3 top-3 grid h-11 w-11 place-items-center bg-[#efeee8] text-black"><ArrowUpRight size={17} /></m.span>
      </div>
      <div className="flex min-h-0 flex-1 flex-col border-t border-white/10 p-5">
        <span className="font-mono text-[7px] uppercase tracking-[.16em] text-accent">{copy.category}</span>
        <h3 className="mt-2 text-[2.15rem] font-semibold uppercase leading-[.84] tracking-[-.06em]">{project.title}</h3>
        <p className="mobile-project-description mt-4 text-xs leading-relaxed text-white/50">{copy.description}</p>
        <span className="mt-auto inline-flex w-fit items-center gap-2 border-b border-accent pb-2 pt-4 text-[9px] font-bold uppercase tracking-[.1em] text-white">{t.projects.openSite}<ArrowUpRight size={13} /></span>
      </div>
    </m.a>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const sectionRef = useRef<HTMLElement>(null);
  const mobileRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const { scrollYProgress: mobileProgress } = useScroll({ target: mobileRef, offset: ["start start", "end end"] });
  const firstRailX = useTransform(scrollYProgress, [0, 1], ["5%", "-17%"]);
  const secondRailX = useTransform(scrollYProgress, [0, 1], ["-18%", "4%"]);
  const haloX = useTransform(scrollYProgress, [0, 1], ["-25%", "80%"]);
  const mobileProgressScale = useTransform(mobileProgress, [0, 1], [0, 1]);
  const firstRow = FEATURED_PROJECTS.slice(0, 3);
  const secondRow = FEATURED_PROJECTS.slice(3, 6);

  return (
    <section ref={sectionRef} id="projects" className="relative scroll-mt-24 overflow-clip bg-[#080807] py-24 sm:py-36">
      <div className="scene-grid pointer-events-none absolute inset-0 opacity-25" />
      <m.div style={reduceMotion ? undefined : { x: haloX }} className="pointer-events-none absolute left-0 top-[23%] h-[28rem] w-[28rem] rounded-full bg-[radial-gradient(circle,rgba(255,91,51,.1),transparent_68%)]" />

      <Container className="relative">
        <div className="flex items-center justify-between border-t border-white/15 pt-4 font-mono text-[8px] uppercase tracking-[.18em]"><span className="text-accent">{t.projects.eyebrow}</span><span className="text-white/30">Selected work / {FEATURED_PROJECTS.length}</span></div>
        <div className="mt-9 grid items-end gap-8 lg:grid-cols-[1.15fr_.85fr]">
          <h2 className="max-w-[13ch] text-[clamp(2.85rem,11vw,6.4rem)] font-semibold uppercase leading-[.82] tracking-[-.072em]">{t.projects.title}</h2>
          <p className="max-w-xl border-l border-accent pl-5 text-sm leading-relaxed text-white/46">{t.projects.description}</p>
        </div>
      </Container>

      <div ref={mobileRef} className="relative mt-12 h-[590svh] sm:hidden">
        <div className="sticky top-0 h-[100svh] overflow-hidden">
          <div className="scene-grid pointer-events-none absolute inset-0 opacity-30" />
          <Container className="relative flex h-full flex-col px-4 pb-5 pt-24">
            <div className="flex items-center justify-between border-t border-white/15 pt-3 font-mono text-[8px] uppercase tracking-[.18em] text-white/34"><span className="text-accent">Fly through projects</span><span>01—06</span></div>
            <div className="relative mt-4 min-h-0 flex-1">
              {FEATURED_PROJECTS.map((project, index) => <MobileProjectCard key={project.id} project={project} index={index} progress={mobileProgress} />)}
            </div>
            <div className="mt-4 h-px bg-white/10"><m.div style={{ scaleX: mobileProgressScale, transformOrigin: "left" }} className="h-full bg-accent" /></div>
          </Container>
        </div>
      </div>

      <div className="relative mt-20 hidden space-y-8 sm:block">
        <m.div style={reduceMotion ? undefined : { x: firstRailX }} className="motion-track flex w-max gap-4 px-[3vw] sm:gap-6">
          {firstRow.map((project, index) => <ProjectRailCard key={project.id} project={project} index={index} />)}
        </m.div>
        <m.div style={reduceMotion ? undefined : { x: secondRailX }} className="motion-track flex w-max gap-4 px-[3vw] sm:gap-6">
          {secondRow.map((project, index) => <ProjectRailCard key={project.id} project={project} index={index + firstRow.length} reverse />)}
        </m.div>
      </div>

      <Container className="relative mt-20 px-4 sm:mt-32 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-end justify-between gap-8 border-t border-white/15 pt-5"><div><span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">Products / Systems</span><h3 className="mt-4 max-w-[11ch] text-4xl font-semibold uppercase leading-[.9] tracking-[-.06em] sm:text-6xl">{t.projects.systemsLabel}</h3></div><p className="max-w-md text-sm leading-relaxed text-white/42">{t.projects.systemsDescription}</p></div>
        <div className="mt-12 grid gap-4 lg:grid-cols-3">
          {(["cliniccard", "chatbot", "crm"] as const).map((id, index) => {
            const copy = t.projects.productCases[id];
            const Icon = PRODUCT_ICONS[id];
            const url = id === "cliniccard" || id === "crm" ? PRODUCT_URLS[id] : undefined;
            const ready = Boolean(url);
            return (
              <Reveal key={id} delay={index * .055}>
                <article className={`premium-card group relative flex min-h-[22rem] flex-col overflow-hidden border p-6 sm:p-8 ${ready ? "border-accent/45 bg-[#11110f]" : "border-white/14 bg-[#0e0e0c]"}`}>
                  <div className="scene-grid pointer-events-none absolute inset-0 opacity-25" />
                  <div className="relative flex items-start justify-between"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">0{index + 1} / {copy.status}</span><span className="grid h-10 w-10 place-items-center border border-white/12 text-white/35 transition-[transform,background-color,color] duration-500 group-hover:rotate-12 group-hover:bg-accent group-hover:text-black"><Icon size={18} strokeWidth={1.3} /></span></div>
                  <div className="relative mt-auto"><span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/28">{copy.category}</span><h4 className="mt-3 text-4xl font-semibold uppercase leading-[.84] tracking-[-.065em]">{copy.title}</h4><p className="mt-5 text-xs leading-relaxed text-white/42">{copy.description}</p>{url ? <a href={url} target="_blank" rel="noopener noreferrer" className="mt-6 inline-flex items-center gap-2 border-b border-accent pb-2 text-[9px] font-bold uppercase tracking-[.1em]">{copy.action}<ArrowUpRight size={14} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a> : <span className="mt-6 inline-flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.15em] text-white/26">{copy.action}<i className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" /></span>}</div>
                </article>
              </Reveal>
            );
          })}
        </div>
        <Reveal className="mt-10 flex justify-end"><Button href="/projects" variant="secondary" size="lg" icon={<ArrowRight size={16} />}>{t.projects.viewAll}</Button></Reveal>
      </Container>
    </section>
  );
}
