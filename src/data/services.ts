import {
  LayoutTemplate,
  Building2,
  Store,
  RefreshCw,
  Search,
  LifeBuoy,
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
    description: "Конверсійна сторінка для запуску реклами та збору заявок.",
  },
  {
    icon: Building2,
    title: "Корпоративний сайт",
    description: "Представницький сайт, що формує довіру до компанії.",
  },
  {
    icon: Store,
    title: "Сайт під вашу нішу",
    description: "Ресторани, клініки, авто — дизайн під специфіку галузі.",
  },
  {
    icon: RefreshCw,
    title: "Редизайн сайту",
    description: "Оновлення застарілого сайту до преміального рівня.",
  },
  {
    icon: Search,
    title: "SEO-оптимізація",
    description: "Технічна база, щоб сайт знаходили в Google.",
  },
  {
    icon: LifeBuoy,
    title: "Підтримка та розвиток",
    description: "Правки, оновлення й нові розділи після запуску.",
  },
];
