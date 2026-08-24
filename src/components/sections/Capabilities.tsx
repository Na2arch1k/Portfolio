"use client";

import { CapabilityMarquee } from "@/components/ui/CapabilityMarquee";
import { useLanguage } from "@/lib/i18n/LanguageContext";

export function Capabilities() {
  const { t } = useLanguage();

  return (
    <section aria-hidden className="relative">
      <CapabilityMarquee items={t.capabilities.items} />
    </section>
  );
}
