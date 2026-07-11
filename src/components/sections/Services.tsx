"use client";

import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.services.eyebrow}
          title={t.services.title}
          description={t.services.description}
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ id, icon: Icon }, index) => {
            const copy = t.services.items[id as keyof typeof t.services.items];
            return (
              <Reveal key={id} delay={(index % 3) * 0.08}>
                <GlassCard className="h-full">
                  <div className="flex items-start justify-between">
                    <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                      <Icon size={22} />
                    </div>
                    <span className="font-mono text-xs font-medium tracking-widest text-white/25 transition-colors duration-300 group-hover:text-accent-soft/60">
                      0{index + 1}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-white">{copy.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/55">
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
