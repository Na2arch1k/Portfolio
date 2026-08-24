"use client";

import { useState } from "react";
import { m } from "framer-motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const { t } = useLanguage();

  return (
    <section id="faq" className="relative py-24 sm:py-36">
      <Container>
        <SectionHeading eyebrow={t.faq.eyebrow} title={t.faq.title} description={t.faq.description} />

        <div className="mt-20 border-t border-white/15">
          {t.faq.items.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <Reveal key={item.question} delay={index * 0.045}>
                <article className={cn("border-b border-white/15 transition-colors", isOpen && "bg-white/[0.025]")}>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[2.5rem_1fr_2.5rem] items-center gap-4 py-6 text-left sm:grid-cols-[5rem_1fr_3rem] sm:py-8"
                  >
                    <span className="font-mono text-[10px] tracking-[0.2em] text-accent">0{index + 1}</span>
                    <span className="text-xl font-semibold uppercase tracking-[-0.035em] text-white sm:text-2xl">{item.question}</span>
                    <m.span animate={{ rotate: isOpen ? 45 : 0 }} transition={{ duration: 0.25 }} className="grid h-10 w-10 place-items-center border border-white/18 text-accent">
                      <Plus size={17} />
                    </m.span>
                  </button>
                  <div className={cn("grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(.16,1,.3,1)]", isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]")}>
                    <div className="overflow-hidden">
                      <p className="max-w-2xl pb-7 pl-[4.1rem] text-sm leading-relaxed text-white/48 sm:pb-9 sm:pl-[9rem] sm:text-base">
                        {item.answer}
                      </p>
                    </div>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
