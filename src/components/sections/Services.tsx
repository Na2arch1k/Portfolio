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
          title="Все, що потрібно для сильної присутності онлайн"
          description="Від простого лендингу до багатофункціонального корпоративного сайту — підбираю рішення під цілі вашого бізнесу."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <GlassCard className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent transition-colors duration-300 group-hover:bg-accent group-hover:text-white">
                  <Icon size={22} />
                </div>
                <h3 className="text-lg font-semibold text-white">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/60">
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
