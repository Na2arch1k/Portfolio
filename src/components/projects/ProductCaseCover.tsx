"use client";

import Image from "next/image";
import { useRef } from "react";
import { m, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, BarChart3, MessageCircle } from "lucide-react";

export type ProductCaseId = "cliniccard" | "crm" | "chatbot";

export const PRODUCT_CASE_URLS: Partial<Record<ProductCaseId, string>> = {
  cliniccard: "https://clinic-card-demo.vercel.app",
  crm: "https://crm-demo-snowy-two.vercel.app",
};

type ProductCaseCopy = {
  status: string;
  title: string;
  category: string;
  description: string;
  action: string;
};

function BrowserBar({ domain, light = false }: { domain: string; light?: boolean }) {
  return (
    <div className={`flex h-8 items-center gap-3 border-b px-3 ${light ? "border-black/10 bg-[#f7f7f3] text-black/38" : "border-white/10 bg-[#111318] text-white/34"}`}>
      <span className="flex gap-1"><i className="h-1.5 w-1.5 rounded-full bg-[#ff5b33]" /><i className={`h-1.5 w-1.5 rounded-full ${light ? "bg-black/15" : "bg-white/15"}`} /><i className={`h-1.5 w-1.5 rounded-full ${light ? "bg-black/15" : "bg-white/15"}`} /></span>
      <span className={`flex-1 border px-3 py-1 text-center font-mono text-[6px] uppercase tracking-[.13em] ${light ? "border-black/8 bg-white" : "border-white/8 bg-white/[.03]"}`}>{domain}</span>
    </div>
  );
}

function ScreenshotPreview({ id }: { id: "cliniccard" | "chatbot" }) {
  const isClinic = id === "cliniccard";
  return (
    <div className={`h-full p-2 sm:p-3 ${isClinic ? "bg-[#0a1b18]" : "bg-[#101114]"}`}>
      <div className="h-full overflow-hidden border border-white/10 bg-black shadow-2xl">
        <BrowserBar domain={isClinic ? "cliniccard.app / schedule" : "ai-assistant.app / inbox"} />
        <div className="relative h-[calc(100%_-_2rem)] overflow-hidden">
          <Image src={isClinic ? "/projects/cliniccard-dashboard.png" : "/projects/chatbot-dashboard.png"} alt="" fill sizes="(max-width: 640px) 100vw, 42vw" className={`object-cover object-top transition-transform duration-[1300ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025] ${isClinic ? "object-left" : "object-center"}`} />
          <div className={`pointer-events-none absolute inset-0 ${isClinic ? "bg-[radial-gradient(circle_at_24%_18%,rgba(36,201,226,.13),transparent_42%)]" : "bg-[radial-gradient(circle_at_78%_16%,rgba(255,91,51,.13),transparent_38%)]"}`} />
        </div>
      </div>
    </div>
  );
}

function CrmPreview() {
  const columns = [
    { title: "New leads", cards: ["Dent Art", "Nova Lab"], color: "bg-[#ff6a46]" },
    { title: "In progress", cards: ["Green Clinic", "Forma"], color: "bg-[#8c7bff]" },
    { title: "Won", cards: ["Axis Group", "Atelier"], color: "bg-emerald-400" },
  ];

  return (
    <div className="h-full bg-[#0e1015] text-white">
      <BrowserBar domain="crm.workspace / sales-pipeline" />
      <div className="grid h-[calc(100%_-_2rem)] grid-cols-[4.4rem_1fr] sm:grid-cols-[6.2rem_1fr]">
        <aside className="border-r border-white/8 bg-[#111318] p-2.5 sm:p-4">
          <div className="flex items-center gap-1.5"><span className="grid h-6 w-6 place-items-center bg-[#8c7bff] text-black"><BarChart3 size={12} /></span><b className="hidden text-[8px] uppercase sm:block">Nexvora</b></div>
          <div className="mt-6 space-y-2">{["Dashboard", "Pipeline", "Clients", "Reports"].map((item, index) => <div key={item} className={`px-2 py-1.5 text-[6px] ${index === 1 ? "bg-white/8 text-white" : "text-white/30"}`}>{item}</div>)}</div>
        </aside>
        <div className="min-w-0 p-3 sm:p-5">
          <div className="flex items-end justify-between"><div><span className="block text-[6px] uppercase tracking-[.13em] text-white/28">Sales workspace</span><strong className="mt-1 block text-sm tracking-[-.05em] sm:text-lg">Deal pipeline</strong></div><span className="bg-[#8c7bff] px-2.5 py-1.5 text-[6px] font-bold uppercase text-black">+ New deal</span></div>
          <div className="mt-3 grid grid-cols-3 gap-1.5 sm:mt-4 sm:gap-2.5">{columns.map((column) => <div key={column.title} className="min-w-0 bg-white/[.035] p-1.5 sm:p-2.5"><div className="flex items-center justify-between text-[5px] uppercase tracking-[.08em] text-white/35"><span className="truncate">{column.title}</span><span>{column.cards.length}</span></div><div className="mt-2 space-y-1.5">{column.cards.map((card, index) => <div key={card} className="border border-white/8 bg-[#151820] p-1.5 sm:p-2"><strong className="block truncate text-[6px] text-white/70 sm:text-[7px]">{card}</strong><span className="mt-2 block text-[5px] text-white/24">${index === 0 ? "2,400" : "1,850"}</span><i className={`mt-1.5 block h-0.5 ${column.color}`} /></div>)}</div></div>)}</div>
        </div>
      </div>
    </div>
  );
}

type ProductCaseVariant = "default" | "featured" | "compact";

export function ProductCaseCover({ id, index, copy, variant = "default", featuredLabel = "Flagship product" }: { id: ProductCaseId; index: number; copy: ProductCaseCopy; variant?: ProductCaseVariant; featuredLabel?: string }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({ target: cardRef, offset: ["start end", "end start"] });
  const featured = variant === "featured";
  const compact = variant === "compact";
  const cardY = useTransform(scrollYProgress, [0, .5, 1], featured ? [34, -8, -24] : [14, 0, -10]);
  const cardRotate = useTransform(scrollYProgress, [0, .5, 1], featured ? [-.8, 0, .55] : [.35, 0, -.3]);
  const previewY = useTransform(scrollYProgress, [0, 1], featured ? [28, -28] : [10, -10]);
  const previewScale = useTransform(scrollYProgress, [0, .5, 1], featured ? [1.06, 1, 1.035] : [1.025, 1, 1.02]);
  const glowX = useTransform(scrollYProgress, [0, 1], ["-35%", "115%"]);
  const href = PRODUCT_CASE_URLS[id];
  const cardClass = `group block h-full overflow-hidden border bg-[#0e0e0c] shadow-[0_28px_85px_rgba(0,0,0,.28)] transition-[transform,border-color,box-shadow] duration-700 ease-[cubic-bezier(.16,1,.3,1)] hover:-translate-y-2 hover:border-accent/55 hover:shadow-[0_36px_110px_rgba(0,0,0,.42)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent ${featured ? "border-accent/45" : "border-white/14"} ${compact ? "lg:grid lg:min-h-[20rem] lg:grid-cols-[1.12fr_.88fr]" : ""}`;
  const cover = (
    <>
      <div className={`relative overflow-hidden ${featured ? "aspect-[16/11] sm:aspect-[16/9] lg:min-h-[30rem] lg:aspect-auto" : compact ? "aspect-[16/10] lg:h-full lg:aspect-auto" : "aspect-[16/11] sm:aspect-[16/10]"}`}>
        <m.div style={reduceMotion ? undefined : { y: previewY, scale: previewScale }} className="absolute -inset-y-8 inset-x-0 origin-center transition-transform duration-[1100ms] ease-[cubic-bezier(.16,1,.3,1)] group-hover:scale-[1.025]">{id === "crm" ? <CrmPreview /> : <ScreenshotPreview id={id} />}</m.div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/90 via-black/5 to-black/20" />
        {featured && <m.span style={reduceMotion ? undefined : { x: glowX }} className="pointer-events-none absolute -inset-y-16 left-0 w-1/3 skew-x-[-14deg] bg-gradient-to-r from-transparent via-cyan-300/10 to-transparent blur-xl" />}
        <span className="absolute left-0 top-0 bg-accent px-4 py-3 font-mono text-[8px] font-bold uppercase tracking-[.16em] text-black">0{index + 1} / {href ? "Live demo" : "Concept preview"}</span>
        {featured && <span className="absolute left-4 top-14 inline-flex items-center gap-2 border border-cyan-300/25 bg-[#071411]/85 px-3 py-2 font-mono text-[7px] font-bold uppercase tracking-[.16em] text-cyan-200 backdrop-blur-md"><i className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-300 shadow-[0_0_12px_rgba(103,232,249,.9)]" />{featuredLabel}</span>}
        <span className="absolute right-3 top-3 grid h-11 w-11 place-items-center bg-[#efeee8] text-black transition-[transform,background-color] duration-500 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:bg-accent">{href ? <ArrowUpRight size={17} /> : <MessageCircle size={17} />}</span>
        <span className="pointer-events-none absolute inset-y-[-30%] -left-32 w-16 rotate-12 bg-gradient-to-r from-transparent via-white/12 to-transparent blur-sm transition-transform duration-1000 group-hover:translate-x-[850%]" />
        {featured && <m.span animate={reduceMotion ? undefined : { top: ["16%", "84%", "84%"], opacity: [0, .7, 0] }} transition={{ duration: 4.2, repeat: Infinity, repeatDelay: 1.2, ease: "easeInOut" }} className="pointer-events-none absolute inset-x-5 top-[16%] h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent shadow-[0_0_18px_rgba(103,232,249,.8)]" />}
        <div className={`absolute inset-x-0 bottom-0 p-5 sm:p-7 ${featured ? "lg:p-9" : ""}`}><span className="font-mono text-[7px] uppercase tracking-[.16em] text-accent">{copy.category} / {copy.status}</span><h4 className={`mt-2 font-semibold uppercase leading-[.84] tracking-[-.065em] ${featured ? "text-5xl sm:text-7xl" : compact ? "text-4xl lg:text-[2.65rem]" : "text-4xl sm:text-5xl"}`}>{copy.title}</h4></div>
      </div>
      <div className={`flex flex-col gap-5 border-white/10 p-5 ${compact ? "border-t lg:justify-between lg:border-l lg:border-t-0 lg:p-5" : "border-t sm:flex-row sm:items-end sm:justify-between sm:p-7"} ${featured ? "lg:p-9" : ""}`}><p className={`max-w-xl leading-relaxed text-white/48 ${featured ? "text-sm sm:text-base" : "text-xs sm:text-sm"}`}>{copy.description}</p><span className="inline-flex w-fit shrink-0 items-center gap-2 border-b border-accent pb-2 text-[9px] font-bold uppercase tracking-[.1em]">{copy.action}{href ? <ArrowUpRight size={13} /> : <i className="h-1.5 w-1.5 animate-pulse rounded-full bg-accent" />}</span></div>
    </>
  );

  return <m.div ref={cardRef} style={reduceMotion ? undefined : { y: cardY, rotateZ: cardRotate }} className="h-full">{href ? <a href={href} target="_blank" rel="noopener noreferrer" className={cardClass}>{cover}</a> : <article className={cardClass}>{cover}</article>}</m.div>;
}
