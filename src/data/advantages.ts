import {
  Sparkles,
  Gauge,
  Smartphone,
  Search,
  FileCode2,
  LifeBuoy,
  type LucideIcon,
} from "lucide-react";

export interface Advantage {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const ADVANTAGES: Advantage[] = [
  {
    icon: Sparkles,
    title: "Сучасний дизайн",
    description: "Актуальні тренди веб-дизайну без зайвого шаблонного вигляду.",
  },
  {
    icon: Gauge,
    title: "Максимальна швидкість",
    description: "Оптимізований код для миттєвого завантаження сторінок.",
  },
  {
    icon: Smartphone,
    title: "Мобільна адаптація",
    description: "Бездоганний вигляд на смартфонах, планшетах і десктопах.",
  },
  {
    icon: Search,
    title: "SEO",
    description: "Технічна база для того, щоб сайт знаходили в Google.",
  },
  {
    icon: FileCode2,
    title: "Якісний код",
    description: "Чиста архітектура, яку легко підтримувати й розширювати.",
  },
  {
    icon: LifeBuoy,
    title: "Підтримка після запуску",
    description: "Допомагаю з правками та питаннями навіть після здачі проєкту.",
  },
];
