export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  gradient: string;
  status: "soon" | "live";
  href?: string;
}

export const PROJECTS: Project[] = [
  {
    id: "corporate-01",
    title: "Корпоративний сайт",
    category: "Бізнес",
    description:
      "Представницький сайт для компанії з акцентом на довіру та результат.",
    gradient: "from-blue-500/30 via-indigo-500/20 to-transparent",
    status: "soon",
  },
  {
    id: "restaurant-01",
    title: "Сайт ресторану",
    category: "HoReCa",
    description: "Меню, атмосфера та онлайн-бронювання столика в один клік.",
    gradient: "from-orange-500/25 via-rose-500/15 to-transparent",
    status: "soon",
  },
  {
    id: "dental-01",
    title: "Стоматологічна клініка",
    category: "Медицина",
    description: "Запис на прийом та довіра до клініки з першого погляду.",
    gradient: "from-cyan-500/25 via-blue-500/15 to-transparent",
    status: "soon",
  },
  {
    id: "auto-01",
    title: "Автосервіс",
    category: "Авто",
    description: "Швидка заявка на діагностику та повний перелік послуг.",
    gradient: "from-slate-500/30 via-blue-500/15 to-transparent",
    status: "soon",
  },
  {
    id: "landing-01",
    title: "Лендинг продукту",
    category: "Маркетинг",
    description: "Конверсійна сторінка для запуску рекламної кампанії.",
    gradient: "from-violet-500/25 via-blue-500/15 to-transparent",
    status: "soon",
  },
  {
    id: "portfolio-01",
    title: "Портфоліо спеціаліста",
    category: "Особистий бренд",
    description: "Презентація навичок та робіт для залучення клієнтів.",
    gradient: "from-emerald-500/25 via-blue-500/15 to-transparent",
    status: "soon",
  },
];
