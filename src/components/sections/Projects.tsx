"use client";

import Image from "next/image";
import { ArrowRight, ArrowUpRight, Bot, Check, Columns3, Stethoscope } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { FEATURED_PROJECTS } from "@/data/projects";
import { useLanguage } from "@/lib/i18n/LanguageContext";

function ClinicCaseVisual() {
  return (
    <div className="absolute inset-x-5 bottom-5 top-[42%] overflow-hidden border border-white/14 bg-[#0b0b09] sm:inset-x-8 sm:bottom-8">
      <div className="grid h-full grid-cols-[3rem_1fr] sm:grid-cols-[4rem_1fr]">
        <div className="flex flex-col items-center border-r border-white/10 py-4"><span className="grid h-8 w-8 place-items-center bg-accent text-sm font-black text-black">C.</span><div className="mt-8 space-y-3"><span className="grid h-8 w-8 place-items-center bg-white text-black"><Columns3 size={13} /></span><span className="grid h-8 w-8 place-items-center text-white/25"><Stethoscope size={13} /></span></div></div>
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between border-b border-white/10 pb-4"><span className="font-mono text-[7px] uppercase tracking-[.16em] text-accent">Clinic dashboard</span><span className="text-[7px] text-white/25">24.08.2026</span></div>
          <div className="mt-4 grid grid-cols-3 gap-2">{[["14", "Visits"], ["8", "Patients"], ["92%", "Load"]].map(([value, label], index) => <div key={label} className={`${index === 0 ? "bg-accent text-black" : "border border-white/10"} p-3`}><strong className="block text-xl tracking-[-.05em]">{value}</strong><span className="mt-2 block font-mono text-[6px] uppercase tracking-[.12em] opacity-45">{label}</span></div>)}</div>
          <div className="mt-3 grid gap-2 sm:grid-cols-2"><div className="border border-white/10 p-3">{["09:30 · Олена", "11:00 · Марія", "12:30 · Андрій"].map((item) => <div key={item} className="flex items-center justify-between border-b border-white/8 py-2 text-[8px] text-white/48 last:border-0"><span>{item}</span><Check size={9} className="text-accent" /></div>)}</div><div className="hidden border border-white/10 p-3 sm:block"><span className="text-[7px] uppercase tracking-[.12em] text-white/28">Efficiency</span><div className="mt-5 h-16 bg-[linear-gradient(135deg,transparent_30%,rgba(255,91,51,.8)_31%_34%,transparent_35%_45%,rgba(255,91,51,.45)_46%_49%,transparent_50%)]" /></div></div>
        </div>
      </div>
    </div>
  );
}

function PlaceholderCard({ type }: { type: "chatbot" | "crm" }) {
  const { t } = useLanguage();
  const copy = t.projects.productCases[type];
  const Icon = type === "chatbot" ? Bot : Columns3;
  return (
    <article className="group relative flex min-h-[19rem] flex-col overflow-hidden border border-white/14 bg-[#10100e] p-6 transition-colors duration-500 hover:bg-[#151410] sm:p-7">
      <div className="scene-grid pointer-events-none absolute inset-0 opacity-30" />
      <div className="relative flex items-start justify-between"><span className="font-mono text-[8px] uppercase tracking-[.16em] text-accent">{copy.status}</span><Icon size={19} strokeWidth={1.3} className="text-white/32" /></div>
      <div className="relative mt-auto">
        <span className="font-mono text-[7px] uppercase tracking-[.15em] text-white/28">{copy.category}</span>
        <h3 className="mt-3 text-3xl font-semibold uppercase leading-[.88] tracking-[-.055em] sm:text-4xl">{copy.title}</h3>
        <p className="mt-4 text-xs leading-relaxed text-white/40">{copy.description}</p>
        <div className="mt-6 flex items-center gap-2 font-mono text-[8px] uppercase tracking-[.16em] text-white/30"><span>{copy.action}</span><span className="flex gap-1"><i className="h-1 w-1 animate-pulse rounded-full bg-accent" /><i className="h-1 w-1 animate-pulse rounded-full bg-accent [animation-delay:150ms]" /><i className="h-1 w-1 animate-pulse rounded-full bg-accent [animation-delay:300ms]" /></span></div>
      </div>
      <span className="absolute bottom-0 left-0 h-1 w-0 bg-accent transition-all duration-500 group-hover:w-full" />
    </article>
  );
}

export function Projects() {
  const { t } = useLanguage();
  const clinic = t.projects.productCases.cliniccard;
  const selectedWebsites = FEATURED_PROJECTS.slice(0, 3);

  return (
    <section id="projects" className="relative overflow-hidden bg-[#080807] py-24 sm:py-36">
      <div className="pointer-events-none absolute left-1/2 top-[18%] h-[34rem] w-[34rem] -translate-x-1/2 rounded-full bg-accent/[.055] blur-[140px]" />
      <Container className="relative">
        <SectionHeading eyebrow={t.projects.eyebrow} title={t.projects.title} description={t.projects.description} />

        <div className="mt-20 grid gap-4 lg:grid-cols-[1.35fr_.65fr]">
          <Reveal>
            <article className="group relative min-h-[39rem] overflow-hidden border border-white/14 bg-[#11110f] p-6 sm:min-h-[42rem] sm:p-8">
              <div className="scene-grid pointer-events-none absolute inset-0 opacity-45" />
              <div className="relative flex items-start justify-between"><div><span className="font-mono text-[8px] uppercase tracking-[.17em] text-accent">{clinic.status}</span><span className="ml-3 font-mono text-[8px] uppercase tracking-[.15em] text-white/28">/ {clinic.category}</span></div><span className="grid h-11 w-11 place-items-center bg-accent text-black"><Stethoscope size={20} /></span></div>
              <div className="relative mt-10 max-w-2xl"><h3 className="text-[clamp(3.6rem,7vw,7rem)] font-semibold uppercase leading-[.78] tracking-[-.08em]">{clinic.title}</h3><p className="mt-6 max-w-xl text-sm leading-relaxed text-white/46">{clinic.description}</p><a href="#contact" className="group/link mt-6 inline-flex items-center gap-3 border-b border-accent pb-2 text-xs font-bold uppercase tracking-[.08em]">{clinic.action}<ArrowUpRight size={15} className="transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1" /></a></div>
              <ClinicCaseVisual />
            </article>
          </Reveal>
          <div className="grid gap-4"><Reveal delay={0.06}><PlaceholderCard type="chatbot" /></Reveal><Reveal delay={0.11}><PlaceholderCard type="crm" /></Reveal></div>
        </div>

        <div className="mt-28 flex items-end justify-between gap-6 border-t border-white/15 pt-5"><div><span className="font-mono text-[8px] uppercase tracking-[.18em] text-accent">Archive / Websites</span><h3 className="mt-4 text-3xl font-semibold uppercase tracking-[-.055em] sm:text-5xl">{t.projects.websitesLabel}</h3></div><span className="hidden font-mono text-[8px] uppercase tracking-[.16em] text-white/28 sm:block">03 selected / {FEATURED_PROJECTS.length} total</span></div>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          {selectedWebsites.map((project, index) => {
            const copy = t.projects.items[project.id as keyof typeof t.projects.items];
            return (
              <Reveal key={project.id} delay={index * 0.06}>
                <a href={project.url} target="_blank" rel="noopener noreferrer" className="group block border border-white/14 bg-[#10100e] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent">
                  <div className="relative aspect-[4/3] overflow-hidden"><Image src={project.image} alt={t.projects.screenshotAlt.replace("{title}", project.title)} fill sizes="(max-width:1024px) 100vw, 33vw" className="object-cover object-top saturate-[.6] transition-[transform,filter] duration-1000 group-hover:scale-[1.06] group-hover:saturate-100" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/20" /><span className="absolute right-4 top-4 grid h-10 w-10 place-items-center bg-[#efeee8] text-black transition-colors group-hover:bg-accent"><ArrowUpRight size={16} /></span><div className="absolute inset-x-0 bottom-0 p-5"><span className="font-mono text-[7px] uppercase tracking-[.15em] text-accent">0{index + 1} / {copy.category}</span><h4 className="mt-2 text-2xl font-semibold uppercase tracking-[-.05em]">{project.title}</h4></div></div>
                </a>
              </Reveal>
            );
          })}
        </div>

        <Reveal className="mt-10 flex justify-end"><Button href="/projects" variant="secondary" size="lg" icon={<ArrowRight size={16} />}>{t.projects.viewAll}</Button></Reveal>
      </Container>
    </section>
  );
}
