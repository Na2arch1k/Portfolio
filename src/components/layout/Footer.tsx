import { Send, Mail, MapPin } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { NAV_LINKS, SITE } from "@/lib/constants";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.08] bg-surface">
      <Container className="py-16">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3">
          <div>
            <a href="#home" className="text-xl font-semibold tracking-tight text-white">
              Назарій<span className="text-accent">.</span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/50">
              {SITE.description}
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Навігація
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-white/60 transition-colors hover:text-white"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-widest text-white/40">
              Контакти
            </h3>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-white/60">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-accent" />
                <a href={`mailto:${SITE.email}`} className="hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Send size={16} className="text-accent" />
                <a
                  href={SITE.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  Telegram
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPin size={16} className="text-accent" />
                {SITE.location}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 border-t border-white/[0.08] pt-8 sm:flex-row">
          <p className="text-xs text-white/40">
            © {year} {SITE.name}. Всі права захищено.
          </p>
        </div>
      </Container>
    </footer>
  );
}
