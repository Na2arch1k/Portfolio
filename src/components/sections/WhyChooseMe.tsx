import { Check } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { ADVANTAGES } from "@/data/advantages";

export function WhyChooseMe() {
  return (
    <section id="why-me" className="relative py-20 sm:py-28">
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[420px] w-[640px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent/[0.04] blur-[130px]" />
      </div>

      <Container>
        <SectionHeading
          eyebrow="Стандарт якості"
          title="Що отримує кожен проєкт"
          description="Незалежно від масштабу — від лендингу до корпоративного сайту — ці речі входять у кожну роботу за замовчуванням."
        />

        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ADVANTAGES.map(({ icon: Icon, title, description }, index) => (
            <Reveal key={title} delay={(index % 3) * 0.08}>
              <div className="glass group relative flex h-full items-start gap-4 overflow-hidden rounded-2xl p-5 transition-all duration-300 hover:border-accent/40 hover:bg-white/[0.05]">
                <div className="relative grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 text-accent-soft transition-transform duration-300 group-hover:scale-110">
                  <Icon size={20} />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-semibold text-white">
                      {title}
                    </h3>
                    <Check
                      size={14}
                      className="shrink-0 text-emerald-400/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                    />
                  </div>
                  <p className="mt-1 text-sm leading-relaxed text-white/50">
                    {description}
                  </p>
                </div>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent-soft/40 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
