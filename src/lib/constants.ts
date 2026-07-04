export const SITE = {
  name: "Назарій Гарасимчук",
  role: "Веброзробник для бізнесу",
  url: "https://nazariidev.com",
  locale: "uk_UA",
  description:
    "Розробляю швидкі, сучасні та красиві вебсайти для бізнесу за допомогою Claude Code. Створюю сайти, які реально приносять заявки.",
  email: "nazargar7@gmail.com",
  phone: "+380 67 123 45 67",
  phoneHref: "+380671234567",
  telegram: "https://t.me/nazar_m0p",
  telegramHandle: "@nazar_m0p",
  location: "Львів, Україна",
} as const;

export const NAV_LINKS = [
  { label: "Головна", href: "#home" },
  { label: "Про мене", href: "#about" },
  { label: "Послуги", href: "#services" },
  { label: "Проєкти", href: "#projects" },
  { label: "Процес роботи", href: "#process" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакти", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Telegram", href: SITE.telegram },
  { label: "Email", href: `mailto:${SITE.email}` },
] as const;
