import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { ADVANTAGES } from "@/data/advantages";

export function WhyChooseMe() {
  return (
    <section id="why-me" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Чому саме я"
          title="Переваги, які відчуває кожен клієнт"
          description="Поєдную дизайнерське мислення, технічну експертизу та швидкість AI-розробки."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <GlassCard className="h-full text-center">
                <div className="mx-auto mb-5 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent transition-transform duration-300 group-hover:scale-110">
                  <Icon size={24} />
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
