"use client";

import Image from "next/image";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { SITE } from "@/lib/constants";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function ClinwideFeature({ copy, href, featuredLabel }: {
  copy: { title: string; description: string; action: string };
  href: string;
  featuredLabel: string;
}) {
  const { t } = useLanguage();
  const feature = t.projects.clinwideFeature;

  return (
    <article data-testid="clinwide-feature" className="overflow-hidden border border-accent/40 bg-[#10120f] lg:grid lg:grid-cols-[1.25fr_1fr]">
      <div className="flex min-w-0 flex-col justify-center bg-[radial-gradient(ellipse_at_top_left,rgba(140,170,100,.18),transparent_70%)] p-4 sm:p-7">
        <div className="mb-5 flex items-center justify-between gap-4 font-mono text-[8px] uppercase tracking-[.15em]">
          <span className="text-accent">01 / Product overview</span>
          <span className="text-white/45">Clinwide / Clinic OS</span>
        </div>
        <a href={href} target="_blank" rel="noopener noreferrer" aria-label={copy.action} className="group block overflow-hidden rounded-lg border border-white/15 bg-[#f5f6ed] shadow-[0_25px_70px_rgba(0,0,0,.35)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">
          <div className="flex h-8 items-center gap-1.5 border-b border-black/10 bg-[#fafaf5] px-3" aria-hidden="true">
            <i className="h-1.5 w-1.5 rounded-full bg-[#cfaa8b]" /><i className="h-1.5 w-1.5 rounded-full bg-[#d7d2ab]" /><i className="h-1.5 w-1.5 rounded-full bg-[#96ad75]" />
            <span className="ml-auto font-mono text-[7px] text-black/40">clinwide / workspace</span>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden sm:aspect-[16/11]">
            <Image src="/projects/clinwide-schedule.png" alt={feature.imageAlt} fill sizes="(max-width: 1024px) 90vw, 55vw" className="object-cover object-left-top transition-transform duration-700 group-hover:scale-[1.015]" />
          </div>
        </a>
        <p className="mt-4 text-[11px] leading-relaxed text-white/40">{feature.caption}</p>
      </div>
      <div className="flex min-w-0 flex-col border-t border-white/10 p-6 sm:p-8 lg:border-l lg:border-t-0 lg:p-10">
        <span className="w-fit border border-accent/35 bg-accent/5 px-3 py-2 font-mono text-[8px] uppercase tracking-[.15em] text-accent">{featuredLabel}</span>
        <h4 className="mt-7 text-[clamp(2.7rem,6vw,5rem)] font-semibold uppercase leading-none tracking-[-.065em]">{copy.title}</h4>
        <p className="mt-3 text-lg font-medium leading-snug text-white/85">{feature.intro}</p>
        <p className="mt-5 text-sm leading-relaxed text-white/55">{copy.description}</p>
        <ul className="mt-6 grid gap-3 border-y border-white/10 py-5">
          {feature.features.map(item => <li key={item} className="flex items-start gap-2.5 text-xs leading-relaxed text-white/65"><Check size={14} className="mt-0.5 shrink-0 text-accent" />{item}</li>)}
        </ul>
        <p className="mb-5 mt-6 text-xs leading-relaxed text-white/55">{feature.demoNote}</p>
        <div className="mt-auto flex flex-wrap gap-3">
          <a href={href} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-3 bg-[#efeee8] px-4 py-3 text-[10px] font-bold uppercase tracking-[.07em] text-black transition-colors hover:bg-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent">{copy.action}<ArrowUpRight size={15} /></a>
          <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex min-h-11 items-center justify-center gap-2 border border-white/25 px-4 py-3 text-[10px] font-bold uppercase tracking-[.07em] text-white transition-colors hover:border-accent hover:text-accent focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"><MessageCircle size={15} />{feature.demoAction}</a>
        </div>
      </div>
    </article>
  );
}
