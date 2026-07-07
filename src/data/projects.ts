export interface Project {
  id: string;
  index: string;
  title: string;
  category: string;
  description: string;
  image: string;
  url: string;
  tech: string[];
  accent: string;
}

export const PROJECT_TECH_BASE = [
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Framer Motion",
] as const;

export const PROJECTS: Project[] = [
  {
    id: "dental",
    index: "01",
    title: "ЕМАЛЬ",
    category: "Стоматологічна клініка",
    description:
      "Люксовий сайт стоматологічної клініки, побудований на довірі: сучасний дизайн, цифрова діагностика та преміальний досвід пацієнта з першого екрана.",
    image: "/projects/dental.jpg",
    url: "https://dental-clinic-liard-three.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "from-cyan-400/20 via-sky-500/10 to-transparent",
  },
  {
    id: "osnova",
    index: "02",
    title: "ОСНОВА",
    category: "Архітектура та будівництво",
    description:
      "Преміальний сайт архітектурно-будівельної компанії з кінематографічним сторітелінгом, editorial-типографікою та атмосферою дорогого друкованого журналу.",
    image: "/projects/osnova.jpg",
    url: "https://buildings-ivory.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
  },
  {
    id: "atelier",
    index: "03",
    title: "ATELIER",
    category: "Ресторан fine dining",
    description:
      "Люксовий сайт ресторану, натхненний мішленівським досвідом: імерсивний сторітелінг, глибокі кольори та типографіка рівня високої кухні.",
    image: "/projects/atelier.jpg",
    url: "https://restourant-nu.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "from-yellow-400/20 via-amber-500/10 to-transparent",
  },
  {
    id: "bmw",
    index: "04",
    title: "BMW Landing",
    category: "Автомобільний бренд",
    description:
      "Сучасний анімований лендинг з акцентом на преміальну автомобільну презентацію: динаміка, чиста композиція та виразний перший екран.",
    image: "/projects/bmw.jpg",
    url: "https://bmw-red.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"],
    accent: "from-blue-400/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "bakery",
    index: "05",
    title: "Modern Bakery",
    category: "Пекарня",
    description:
      "Мінімалістичний лендинг сучасної пекарні: елегантна презентація продукції, тепла атмосфера та акуратна сітка контенту.",
    image: "/projects/bakery.jpg",
    url: "https://modern-bakery-eight.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Адаптивний дизайн", "Vercel"],
    accent: "from-lime-400/20 via-emerald-500/10 to-transparent",
  },
  {
    id: "forest",
    index: "06",
    title: "Forest Travel",
    category: "Подорожі та тури",
    description:
      "Сучасний лендинг для природних турів: імерсивні фонові зображення, чиста навігація та відчуття подорожі ще до бронювання.",
    image: "/projects/forest.jpg",
    url: "https://forest-beta-amber.vercel.app/",
    tech: ["Next.js", "TypeScript", "Tailwind CSS", "Адаптивний дизайн", "Vercel"],
    accent: "from-emerald-400/20 via-green-500/10 to-transparent",
  },
];
