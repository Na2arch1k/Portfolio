import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SERVICES } from "@/data/services";

export function Services() {
  return (
    <section id="services" className="relative py-20 sm:py-28">
      <Container>
        <SectionHeading
          eyebrow="Послуги"
          title="Рішення під цілі вашого бізнесу"
          description="Від лендингу до повноцінного корпоративного сайту — беру на себе дизайн, розробку та запуск."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <GlassCard className="h-full">
                <div className="flex items-start justify-between">
                  <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                    <Icon size={22} />
                  </div>
                  <span className="font-mono text-xs font-medium tracking-widest text-white/25 transition-colors duration-300 group-hover:text-accent-soft/60">
                    0{index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">
                  {description}
                </p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
