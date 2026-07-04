import {
  MessagesSquare,
  ChartNoAxesCombined,
  PenTool,
  Code2,
  FlaskConical,
  Rocket,
  type LucideIcon,
} from "lucide-react";

export interface ProcessStep {
  step: number;
  icon: LucideIcon;
  title: string;
  description: string;
}

export const PROCESS_STEPS: ProcessStep[] = [
  {
    step: 1,
    icon: MessagesSquare,
    title: "Обговорення",
    description: "З'ясовуємо цілі бізнесу, побажання та очікуваний результат.",
  },
  {
    step: 2,
    icon: ChartNoAxesCombined,
    title: "Аналіз бізнесу",
    description: "Вивчаю нішу, конкурентів та цільову аудиторію проєкту.",
  },
  {
    step: 3,
    icon: PenTool,
    title: "Створення дизайну",
    description: "Розробляю макет, що відповідає стилю та цінностям бренду.",
  },
  {
    step: 4,
    icon: Code2,
    title: "Розробка",
    description: "Верстаю та програмую сайт із сучасним технологічним стеком.",
  },
  {
    step: 5,
    icon: FlaskConical,
    title: "Тестування",
    description: "Перевіряю швидкість, адаптивність та коректність роботи.",
  },
  {
    step: 6,
    icon: Rocket,
    title: "Запуск",
    description: "Публікую сайт та передаю всі доступи й інструкції клієнту.",
  },
];
