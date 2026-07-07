import {
  Smartphone,
  Search,
  Gauge,
  Sparkles,
  Layers,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    icon: Smartphone,
    title: "Адаптивний дизайн",
    description: "Бездоганний вигляд на смартфоні, планшеті й десктопі.",
  },
  {
    icon: Search,
    title: "SEO-friendly",
    description: "Семантика, метадані та структура, які любить Google.",
  },
  {
    icon: Gauge,
    title: "Висока швидкість",
    description: "Оптимізовані зображення й код — сайт відкривається миттєво.",
  },
  {
    icon: Sparkles,
    title: "Преміальні анімації",
    description: "Плавні мікровзаємодії, які відчуваються дорого.",
  },
  {
    icon: Layers,
    title: "Сучасні технології",
    description: "Next.js, TypeScript і Tailwind — стек провідних продуктів.",
  },
  {
    icon: Rocket,
    title: "Швидка здача",
    description: "Від брифу до запуску — без затягнутих дедлайнів.",
  },
];
