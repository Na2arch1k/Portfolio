import { Bot, Rocket, TrendingUp } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";

const PILLARS = [
  {
    icon: Bot,
    title: "Claude Code у розробці",
    description:
      "Використовую AI-інструменти для швидкого та якісного написання коду.",
  },
  {
    icon: Rocket,
    title: "Сучасний стек",
    description:
      "Next.js, React та TypeScript — технології, на яких будують провідні продукти.",
  },
  {
    icon: TrendingUp,
    title: "Результат для бізнесу",
    description:
      "Сайт — не просто вітрина, а інструмент для залучення нових клієнтів.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <Container>
        <SectionHeading
          eyebrow="Про мене"
          title="Розробляю сайти, які працюють на результат"
          description="Я займаюсь створенням сучасних вебсайтів для бізнесу. Використовую Claude Code та сучасний стек технологій для швидкої розробки красивих і ефективних сайтів. Моя ціль — допомагати компаніям виглядати професійно в інтернеті та отримувати більше клієнтів."
        />

        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={index * 0.1}>
              <GlassCard className="h-full">
                <div className="mb-5 grid h-12 w-12 place-items-center rounded-xl bg-accent/10 text-accent">
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
