export const SITE = {
  name: "Назарій Гарасимчук",
  role: "Сайти та цифрові продукти для росту бізнесу",
  url: "https://nazariidev.com",
  locale: "uk_UA",
  description:
    "Створюю виразні сайти, цифрові продукти, чат-боти, CRM та автоматизації, які допомагають бізнесам зростати й працювати простіше.",
  email: "nazargar7@gmail.com",
  phone: "+380 67 123 45 67",
  phoneHref: "+380671234567",
  telegram: "https://t.me/nazar_m0p",
  telegramHandle: "@nazar_m0p",
  location: "Львів, Україна",
} as const;

export const NAV_LINKS = [
  { key: "home", href: "#home" },
  { key: "about", href: "#about" },
  { key: "services", href: "#services" },
  { key: "projects", href: "#projects" },
  { key: "process", href: "#process" },
  { key: "faq", href: "#faq" },
  { key: "contact", href: "#contact" },
] as const;

export const SOCIAL_LINKS = [
  { label: "Telegram", href: SITE.telegram },
  { label: "Email", href: `mailto:${SITE.email}` },
] as const;
