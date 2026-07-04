import {
  LayoutTemplate,
  Building2,
  UtensilsCrossed,
  Stethoscope,
  Car,
  FolderKanban,
  RefreshCw,
  Search,
  Zap,
  Smartphone,
  type LucideIcon,
} from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
}

export const SERVICES: Service[] = [
  {
    icon: LayoutTemplate,
    title: "Landing Page",
    description:
      "Одностторінкові сайти для швидкого запуску реклами та збору заявок.",
  },
  {
    icon: Building2,
    title: "Корпоративний сайт",
    description:
      "Представницькі сайти компаній, що формують довіру та професійний імідж.",
  },
  {
    icon: UtensilsCrossed,
    title: "Сайт для ресторану",
    description:
      "Меню, бронювання та атмосфера закладу, яка передається через дизайн.",
  },
  {
    icon: Stethoscope,
    title: "Сайт стоматології",
    description:
      "Зручна запис на прийом та презентація послуг клініки для пацієнтів.",
  },
  {
    icon: Car,
    title: "Сайт автосервісу",
    description:
      "Прайс-листи, послуги та швидка заявка на ремонт чи діагностику авто.",
  },
  {
    icon: FolderKanban,
    title: "Портфоліо-сайт",
    description:
      "Демонстрація робіт для фрилансерів, студій та творчих спеціалістів.",
  },
  {
    icon: RefreshCw,
    title: "Редизайн сайту",
    description:
      "Оновлення застарілого сайту до сучасного вигляду без втрати даних.",
  },
  {
    icon: Search,
    title: "SEO-оптимізація",
    description:
      "Технічне та контентне SEO для кращих позицій у пошукових системах.",
  },
  {
    icon: Zap,
    title: "Швидка продуктивність",
    description:
      "Оптимізація швидкості завантаження для кращого досвіду користувачів.",
  },
  {
    icon: Smartphone,
    title: "Адаптивний дизайн",
    description:
      "Ідеальний вигляд сайту на будь-якому пристрої — від телефону до десктопу.",
  },
];
