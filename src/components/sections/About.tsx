"use client";

import { Bot, Rocket, TrendingUp, type LucideIcon } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { useLanguage } from "@/lib/i18n/LanguageContext";

const PILLARS: { id: "ai" | "stack" | "result"; icon: LucideIcon }[] = [
  { id: "ai", icon: Bot },
  { id: "stack", icon: Rocket },
  { id: "result", icon: TrendingUp },
];

export function About() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.about.eyebrow}
          title={t.about.title}
          description={t.about.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ id, icon: Icon }, index) => {
            const copy = t.about.pillars[id];
            return (
              <Reveal key={id} delay={index * 0.1}>
                <GlassCard className="h-full">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
                    <Icon size={22} />
                  </div>
                  <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">
                    {copy.description}
                  </p>
                </GlassCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
