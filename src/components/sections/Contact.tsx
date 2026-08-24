"use client";

import { useState, type FormEvent } from "react";
import { m } from "framer-motion";
import { sendGAEvent } from "@next/third-parties/google";
import { ArrowUpRight, CheckCircle2, AlertCircle, ChevronDown, Loader2, Send } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { PhoneInput } from "@/components/ui/PhoneInput";
import { SITE } from "@/lib/constants";
import { SERVICES } from "@/data/services";
import { toUaE164 } from "@/lib/phone";
import { useLanguage } from "@/lib/i18n/LanguageContext";
import { MESSAGE_MIN_LENGTH, SERVICE_VALUE_BY_ID, SERVICE_OPTIONS, parseContactPayload } from "@/lib/contact";

type Status = "idle" | "loading" | "success" | "error";

const inputClasses =
  "w-full border border-white/14 bg-transparent px-4 py-3.5 text-sm text-white placeholder:text-white/25 outline-none transition-colors focus:border-accent disabled:opacity-60";

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const { t } = useLanguage();
  const isLoading = status === "loading";

  function localizeError(code: string): string {
    const errors = t.contact.errors as Record<string, string>;
    return errors[code] ?? errors.generic;
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setError(null);

    const formData = new FormData(event.currentTarget);
    const phoneDigits = String(formData.get("phone") ?? "").replace(/\D/g, "");
    const payload = {
      name: String(formData.get("name") ?? ""),
      phone: phoneDigits ? toUaE164(phoneDigits) : "",
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      service: String(formData.get("service") ?? ""),
      message: String(formData.get("message") ?? ""),
      website: String(formData.get("website") ?? ""),
    };

    const parsed = parseContactPayload(payload, SERVICE_OPTIONS);
    if (!parsed.ok) {
      setStatus("error");
      setError(localizeError(parsed.error));
      return;
    }

    setStatus("loading");
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await response.json();
      if (!response.ok) {
        setStatus("error");
        setError(localizeError(result.error ?? "generic"));
        return;
      }
      setStatus("success");
      sendGAEvent("event", "generate_lead", { service: parsed.payload.service });
    } catch {
      setStatus("error");
      setError(t.contact.errors.network);
    }
  }

  return (
    <section id="contact" className="relative border-t border-black/20 bg-accent text-black">
      <Container className="py-20 sm:py-28">
        <div className="flex items-center justify-between border-t border-black/30 pt-5 font-mono text-[10px] uppercase tracking-[0.2em]">
          <span>{t.contact.eyebrow}</span>
          <span>No—007</span>
        </div>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1.25fr_.75fr] lg:items-end">
          <h2 className="max-w-[10ch] text-[clamp(4rem,9vw,9rem)] font-semibold uppercase leading-[0.8] tracking-[-0.08em]">
            {t.contact.title}
          </h2>
          <div className="max-w-md border-l border-black/35 pl-5">
            <p className="text-sm leading-relaxed text-black/65 sm:text-base">{t.contact.description}</p>
            <a href={`mailto:${SITE.email}`} className="group mt-6 inline-flex items-center gap-2 border-b border-black pb-2 text-sm font-bold uppercase tracking-[0.08em]">
              {SITE.email}<ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Container>

      <div className="bg-[#090908] text-white">
        <Container className="grid gap-12 py-16 lg:grid-cols-[.65fr_1.35fr] lg:py-20">
          <aside className="flex flex-col justify-between border-t border-white/15 pt-5">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-accent">{t.contact.infoHeading}</span>
              <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/45">{t.contact.infoSubheading}</p>
            </div>
            <dl className="mt-12 space-y-6 font-mono text-[10px] uppercase tracking-[0.14em]">
              <div><dt className="text-white/28">{t.contact.telegramLabel}</dt><dd className="mt-1"><a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="hover:text-accent">{SITE.telegramHandle}</a></dd></div>
              <div><dt className="text-white/28">{t.contact.emailLabel}</dt><dd className="mt-1"><a href={`mailto:${SITE.email}`} className="hover:text-accent">{SITE.email}</a></dd></div>
              <div><dt className="text-white/28">{t.contact.locationLabel}</dt><dd className="mt-1">{SITE.location}</dd></div>
            </dl>
          </aside>

          <div className="border-t border-white/15 pt-5">
            {status === "success" ? (
              <m.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} className="flex min-h-[30rem] flex-col items-start justify-center border border-white/14 p-8 sm:p-12">
                <CheckCircle2 size={46} strokeWidth={1.3} className="text-accent" />
                <h3 className="mt-8 text-4xl font-semibold uppercase tracking-[-0.055em]">{t.contact.form.successTitle}</h3>
                <p className="mt-4 max-w-md text-sm leading-relaxed text-white/48">{t.contact.form.successBody}<br />{t.contact.form.successBody2}</p>
                <button type="button" onClick={() => setStatus("idle")} className="mt-8 border-b border-accent pb-2 text-xs font-bold uppercase tracking-[0.08em]">{t.contact.form.sendAnother}</button>
              </m.div>
            ) : (
              <form onSubmit={handleSubmit} className="grid gap-5">
                <fieldset disabled={isLoading} className="contents">
                  <div aria-hidden="true" className="absolute -left-[9999px] h-px w-px overflow-hidden">
                    <label htmlFor="website">Website</label><input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                      {t.contact.form.name}
                      <input name="name" type="text" required minLength={2} maxLength={100} placeholder={t.contact.form.namePlaceholder} className={inputClasses} />
                    </label>
                    <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                      {t.contact.form.phone}
                      <PhoneInput name="phone" required errorLabel={t.contact.form.phoneError} className="rounded-none border-white/14 bg-transparent focus-within:bg-transparent" />
                    </label>
                  </div>

                  <div className="grid gap-5 sm:grid-cols-2">
                    <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                      {t.contact.form.email}
                      <input name="email" type="email" required placeholder="you@company.com" className={inputClasses} />
                    </label>
                    <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                      {t.contact.form.company} <span className="normal-case tracking-normal text-white/25">{t.contact.form.companyOptional}</span>
                      <input name="company" type="text" maxLength={150} placeholder={t.contact.form.companyPlaceholder} className={inputClasses} />
                    </label>
                  </div>

                  <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                    {t.contact.form.service}
                    <span className="relative">
                      <select name="service" required defaultValue="" className={`${inputClasses} appearance-none pr-10 invalid:text-white/25`}>
                        <option value="" disabled className="bg-surface">{t.contact.form.selectService}</option>
                        {SERVICES.map((service) => <option key={service.id} value={SERVICE_VALUE_BY_ID[service.id]} className="bg-surface">{t.services.items[service.id as keyof typeof t.services.items].title}</option>)}
                        <option value={SERVICE_VALUE_BY_ID.other} className="bg-surface">{t.contact.form.otherService}</option>
                      </select>
                      <ChevronDown size={15} className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-white/35" />
                    </span>
                  </label>

                  <label className="flex flex-col gap-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-white/48">
                    {t.contact.form.message}
                    <textarea name="message" required minLength={MESSAGE_MIN_LENGTH} maxLength={3000} rows={5} placeholder={t.contact.form.messagePlaceholder} className={`${inputClasses} resize-none`} />
                  </label>

                  <Button type="submit" disabled={isLoading} icon={isLoading ? <Loader2 size={16} className="animate-spin" /> : <Send size={16} />} className="w-full sm:w-fit">
                    {isLoading ? t.contact.form.submitting : t.contact.form.submit}
                  </Button>
                </fieldset>

                {status === "error" && error && (
                  <m.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} role="alert" className="flex items-start gap-3 border border-red-500/35 bg-red-500/10 px-4 py-3">
                    <AlertCircle size={16} className="mt-0.5 shrink-0 text-red-400" />
                    <p className="text-sm leading-relaxed text-red-300">{error}</p>
                  </m.div>
                )}
              </form>
            )}
          </div>
        </Container>
      </div>
    </section>
  );
}
