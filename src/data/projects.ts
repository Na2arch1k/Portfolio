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

const TECH_DEFAULT = ["Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel"];

export const ALL_PROJECTS: Project[] = [
  {
    id: "dental",
    index: "01",
    title: "ЕМАЛЬ",
    category: "Стоматологічна клініка",
    description:
      "Люксовий сайт стоматологічної клініки, побудований на довірі: сучасний дизайн, цифрова діагностика та преміальний досвід пацієнта з першого екрана.",
    image: "/projects/dental.jpg",
    url: "https://dental-clinic-liard-three.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-cyan-400/20 via-sky-500/10 to-transparent",
  },
  {
    id: "crystal-smile",
    index: "02",
    title: "Crystal Smile",
    category: "Стоматологічна студія",
    description:
      "Преміальна приватна стоматологія в Києві з акцентом на high-tech діагностику: 3D-прев'ю лікування, профілі лікарів та прозорий прайс формують образ бутикової клініки.",
    image: "/projects/crystal-smile.jpg",
    url: "https://clinik-rho.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-rose-400/20 via-pink-500/10 to-transparent",
  },
  {
    id: "osnova",
    index: "03",
    title: "ОСНОВА",
    category: "Архітектура та будівництво",
    description:
      "Преміальний сайт архітектурно-будівельної компанії з кінематографічним сторітелінгом, editorial-типографікою та атмосферою дорогого друкованого журналу.",
    image: "/projects/osnova.jpg",
    url: "https://buildings-ivory.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-amber-400/20 via-orange-500/10 to-transparent",
  },
  {
    id: "structure",
    index: "04",
    title: "STRUCTURE",
    category: "Архітектурна група",
    description:
      "Мінімалістичний сайт архітектурної групи, де точна інженерія зустрічається з довговічними матеріалами: портфоліо міжнародних проєктів, філософія трьох стовпів та статистика студії.",
    image: "/projects/structure.jpg",
    url: "https://bulding-group.vercel.app/uk",
    tech: TECH_DEFAULT,
    accent: "from-slate-400/20 via-zinc-500/10 to-transparent",
  },
  {
    id: "arkhe",
    index: "05",
    title: "ARKHE",
    category: "Архітектурне бюро",
    description:
      "Кінематографічний сайт-портфоліо архітектурного бюро: проєкт розкривається як історія у дев'яти актах — від бетонних об'ємів до бронзових дверей.",
    image: "/projects/arkhe.jpg",
    url: "https://3-d-build.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-stone-400/20 via-neutral-500/10 to-transparent",
  },
  {
    id: "3d-home",
    index: "06",
    title: "3D Home",
    category: "Нерухомість · 3D-тур",
    description:
      "Імерсивний кінематографічний 3D-тур елітною резиденцією: покроковий перегляд простору замінює звичайну фотогалерею преміальним відчуттям присутності.",
    image: "/projects/3d-home.jpg",
    url: "https://3-d-home-ashy.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-purple-400/20 via-violet-500/10 to-transparent",
  },
  {
    id: "atelier",
    index: "07",
    title: "ATELIER",
    category: "Ресторан fine dining",
    description:
      "Люксовий сайт ресторану, натхненний мішленівським досвідом: імерсивний сторітелінг, глибокі кольори та типографіка рівня високої кухні.",
    image: "/projects/atelier.jpg",
    url: "https://restourant-nu.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-yellow-400/20 via-amber-500/10 to-transparent",
  },
  {
    id: "bakery",
    index: "08",
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
    id: "bmw",
    index: "09",
    title: "BMW Landing",
    category: "Автомобільний бренд",
    description:
      "Сучасний анімований лендинг з акцентом на преміальну автомобільну презентацію: динаміка, чиста композиція та виразний перший екран.",
    image: "/projects/bmw.jpg",
    url: "https://bmw-red.vercel.app/",
    tech: TECH_DEFAULT,
    accent: "from-blue-400/20 via-indigo-500/10 to-transparent",
  },
  {
    id: "forest",
    index: "10",
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

const FEATURED_ORDER = ["structure", "dental", "atelier", "osnova", "crystal-smile", "arkhe"];

export const FEATURED_PROJECTS: Project[] = FEATURED_ORDER.map((id, i) => {
  const project = ALL_PROJECTS.find((p) => p.id === id)!;
  return { ...project, index: String(i + 1).padStart(2, "0") };
});
