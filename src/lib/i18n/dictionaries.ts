export type Language = "uk" | "en";

const uk = {
  nav: {
    home: "Головна",
    about: "Про мене",
    services: "Ціни",
    projects: "Проєкти",
    process: "Процес роботи",
    faq: "FAQ",
    contact: "Контакти",
    cta: "Обговорити проєкт",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
  },
  hero: {
    badge: "Відкритий до нових проєктів",
    titleLine: "Цифрові рішення, які приносять бізнесу",
    titleAccent: "реальних клієнтів",
    description:
      "Створюю сайти, CRM-системи, чат-боти та автоматизації під конкретні задачі бізнесу — від запису пацієнтів до обробки заявок. Дизайн, код і запуск під ключ.",
    ctaPrimary: "Обговорити проєкт",
    ctaSecondary: "Переглянути роботи",
    stats: [
      { value: "15+", label: "запущених проєктів" },
      { value: "5+", label: "бізнес-ніш" },
      { value: "2+", label: "роки досвіду" },
      { value: "100%", label: "адаптивність" },
    ],
  },
  about: {
    eyebrow: "Про мене",
    title: "Створюю цифрові рішення, які працюють на результат",
    description:
      "Створюю сайти, CRM-системи для управління клієнтами, чат-боти та автоматизації для бізнесу. Поєдную дизайнерське мислення з сучасним стеком технологій, щоб процеси працювали самі, а компанія отримувала більше клієнтів.",
    pillars: {
      ai: {
        title: "AI-підсилена розробка",
        description: "Claude Code та сучасні AI-інструменти — швидше без втрати якості.",
      },
      stack: {
        title: "Сучасний стек",
        description: "Next.js, React та TypeScript — технології, на яких будують провідні продукти.",
      },
      result: {
        title: "Результат для бізнесу",
        description: "Не просто сайт-вітрина, а робочий інструмент: система, яка приймає заявки, веде клієнтів і автоматизує рутину.",
      },
    },
  },
  capabilities: {
    items: [
      "Сайти для бізнесу",
      "CRM-системи",
      "Чат-боти",
      "Автоматизація процесів",
      "Системи для клінік",
      "Інтеграції та API",
    ],
  },
  services: {
    eyebrow: "Послуги та ціни",
    badge: "-50% на багатосторінковий сайт",
    title: "Скільки коштує проєкт",
    description: "Це поточні ціни. Далі буде дорожче.",
    trustLine: "Дешевше, ніж у конкурентів. Якість — преміальна.",
    from: "від",
    popularBadge: "Обирають найчастіше",
    priceNote:
      "Ціни орієнтовні — фінальна вартість залежить від складності проєкту: сайт може бути і дешевшим, і дорожчим за вказаний діапазон.",
    items: {
      update: {
        title: "Оновлення сайту",
        description: "Свіжий дизайн і сучасний код для сайту, який у вас вже є — без старту з нуля.",
      },
      multipage: {
        title: "Багатосторінковий сайт",
        description: "Повноцінний сайт під ключ: кілька розділів, унікальний дизайн і адаптивна верстка.",
      },
      ecommerce: {
        title: "Інтернет-магазин",
        description: "Каталог товарів, кошик і оформлення замовлення — готовий майданчик для продажів.",
      },
      automation: {
        title: "Чат-боти, CRM та автоматизація",
        description: "Боти для Telegram, CRM та системи обліку клієнтів (як Clinic Card), автоматичні розсилки та інтеграції, що звільняють ваш час.",
      },
    },
  },
  projects: {
    eyebrow: "Портфоліо",
    title: "Проєкти, які говорять самі за себе",
    description:
      "Реальні проєкти для реального бізнесу — сайти, системи та автоматизації. Кожен можна відкрити та подивитися наживо.",
    viewAll: "Переглянути всі проєкти",
    openSite: "Відкрити сайт",
    liveLabel: "Живий сайт",
    openInNewTab: "Відкрити сайт «{title}» у новій вкладці",
    screenshotAlt: "Скриншот сайту «{title}»",
    items: {
      dental: {
        category: "Стоматологічна клініка",
        description:
          "Люксовий сайт стоматологічної клініки, побудований на довірі: сучасний дизайн, цифрова діагностика та преміальний досвід пацієнта з першого екрана.",
      },
      "crystal-smile": {
        category: "Стоматологічна студія",
        description:
          "Преміальна приватна стоматологія в Києві з акцентом на high-tech діагностику: 3D-прев'ю лікування, профілі лікарів та прозорий прайс формують образ бутикової клініки.",
      },
      osnova: {
        category: "Архітектура та будівництво",
        description:
          "Преміальний сайт архітектурно-будівельної компанії з кінематографічним сторітелінгом, editorial-типографікою та атмосферою дорогого друкованого журналу.",
      },
      structure: {
        category: "Архітектурна група",
        description:
          "Мінімалістичний сайт архітектурної групи, де точна інженерія зустрічається з довговічними матеріалами: портфоліо міжнародних проєктів, філософія трьох стовпів та статистика студії.",
      },
      arkhe: {
        category: "Архітектурне бюро",
        description:
          "Кінематографічний сайт-портфоліо архітектурного бюро: проєкт розкривається як історія у дев'яти актах — від бетонних об'ємів до бронзових дверей.",
      },
      "3d-home": {
        category: "Нерухомість · 3D-тур",
        description:
          "Імерсивний кінематографічний 3D-тур елітною резиденцією: покроковий перегляд простору замінює звичайну фотогалерею преміальним відчуттям присутності.",
      },
      atelier: {
        category: "Ресторан fine dining",
        description:
          "Люксовий сайт ресторану, натхненний мішленівським досвідом: імерсивний сторітелінг, глибокі кольори та типографіка рівня високої кухні.",
      },
      bakery: {
        category: "Пекарня",
        description:
          "Мінімалістичний лендинг сучасної пекарні: елегантна презентація продукції, тепла атмосфера та акуратна сітка контенту.",
      },
      bmw: {
        category: "Автомобільний бренд",
        description:
          "Сучасний анімований лендинг з акцентом на преміальну автомобільну презентацію: динаміка, чиста композиція та виразний перший екран.",
      },
      forest: {
        category: "Подорожі та тури",
        description:
          "Сучасний лендинг для природних турів: імерсивні фонові зображення, чиста навігація та відчуття подорожі ще до бронювання.",
      },
    },
  },
  projectsPage: {
    eyebrow: "Портфоліо",
    title: "Усі проєкти",
    description:
      "реалізованих проєктів для різного бізнесу — сайти, системи для клінік та автоматизації. Кожен можна відкрити та подивитися наживо.",
    back: "На головну",
    open: "Відкрити",
  },
  process: {
    eyebrow: "Процес роботи",
    title: "Прозорий шлях від ідеї до запуску",
    description: "Кожен проєкт проходить шість чітких етапів, щоб результат відповідав очікуванням.",
    stepLabel: "Крок",
    steps: {
      discovery: {
        title: "Обговорення",
        description: "З'ясовуємо цілі бізнесу, побажання та очікуваний результат.",
      },
      analysis: {
        title: "Аналіз бізнесу",
        description: "Вивчаю нішу, конкурентів та цільову аудиторію проєкту.",
      },
      design: {
        title: "Створення дизайну",
        description: "Розробляю макет, що відповідає стилю та цінностям бренду.",
      },
      development: {
        title: "Розробка",
        description: "Верстаю та програмую сайт із сучасним технологічним стеком.",
      },
      testing: {
        title: "Тестування",
        description: "Перевіряю швидкість, адаптивність та коректність роботи.",
      },
      launch: {
        title: "Запуск",
        description: "Публікую сайт та передаю всі доступи й інструкції клієнту.",
      },
    },
  },
  whyChooseMe: {
    eyebrow: "Стандарт якості",
    title: "Що отримує кожен проєкт",
    description: "Незалежно від масштабу — від лендингу до корпоративного сайту — ці речі входять у кожну роботу за замовчуванням.",
    items: {
      responsive: {
        title: "Адаптивний дизайн",
        description: "Бездоганний вигляд на смартфоні, планшеті й десктопі.",
      },
      seo: {
        title: "SEO-friendly",
        description: "Семантика, метадані та структура, які любить Google.",
      },
      speed: {
        title: "Висока швидкість",
        description: "Оптимізовані зображення й код — сайт відкривається миттєво.",
      },
      animations: {
        title: "Преміальні анімації",
        description: "Плавні мікровзаємодії, які відчуваються дорого.",
      },
      stack: {
        title: "Сучасні технології",
        description: "Next.js, TypeScript і Tailwind — стек провідних продуктів.",
      },
      delivery: {
        title: "Швидка здача",
        description: "Від брифу до запуску — без затягнутих дедлайнів.",
      },
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Питання, які часто запитують",
    description: "Не знайшли відповіді? Напишіть напряму — я відповім особисто.",
    items: [
      {
        question: "Скільки коштує сайт?",
        answer:
          "Вартість залежить від складності проєкту: кількості сторінок, функціоналу та дизайну. Після обговорення деталей я формую точну пропозицію під ваш бюджет і цілі.",
      },
      {
        question: "Скільки часу займає розробка?",
        answer:
          "Прості сайти (лендинги) займають від 1 до 3 днів. Більш складні та багатосторінкові проєкти — близько тижня.",
      },
      {
        question: "Чи буде сайт працювати на телефоні?",
        answer:
          "Так, кожен сайт розробляється адаптивним з нуля — він однаково добре виглядає й працює на телефонах, планшетах і комп'ютерах.",
      },
      {
        question: "Чи допоможете після запуску?",
        answer:
          "Так, після запуску я залишаюсь на зв'язку для правок, консультацій та технічної підтримки, щоб сайт продовжував ефективно працювати.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакти",
    title: "Готові обговорити ваш проєкт?",
    description: "Залиште заявку — я звʼяжусь з вами протягом одного робочого дня.",
    infoHeading: "Контактна інформація",
    infoSubheading: "Оберіть зручний спосіб зв'язку — відповідаю швидко.",
    telegramLabel: "Telegram",
    emailLabel: "Email",
    locationLabel: "Локація",
    form: {
      name: "Ім'я",
      namePlaceholder: "Ваше ім'я",
      phone: "Телефон",
      phoneError: "Введіть коректний український номер телефону",
      email: "Email",
      company: "Компанія",
      companyOptional: "(необов'язково)",
      companyPlaceholder: "Назва компанії",
      service: "Послуга",
      selectService: "Оберіть послугу",
      otherService: "Інше",
      message: "Повідомлення",
      messagePlaceholder: "Розкажіть коротко про ваш проєкт...",
      submit: "Надіслати заявку",
      submitting: "Надсилання...",
      successTitle: "Дякуємо!",
      successBody: "Вашу заявку успішно отримано.",
      successBody2: "Я зв'яжуся з вами найближчим часом.",
      successNote: "Лист-підтвердження вже прямує на вашу пошту.",
      sendAnother: "Надіслати ще одну заявку",
    },
    errors: {
      invalid_request: "Некоректний запит.",
      invalid_name: "Вкажіть, будь ласка, ваше ім'я.",
      invalid_email: "Вкажіть коректну email-адресу.",
      invalid_phone: "Вкажіть коректний український номер телефону.",
      company_too_long: "Назва компанії занадто довга.",
      invalid_service: "Оберіть послугу зі списку.",
      message_too_short: "Повідомлення закоротке — розкажіть трохи більше.",
      message_too_long: "Повідомлення занадто довге.",
      rate_limited: "Забагато запитів. Спробуйте, будь ласка, трохи пізніше.",
      service_unavailable: "Сервіс тимчасово недоступний. Спробуйте пізніше.",
      send_failed: "Не вдалося надіслати заявку. Спробуйте пізніше.",
      network: "Не вдалося з'єднатися з сервером. Перевірте інтернет-з'єднання.",
      generic: "Щось пішло не так. Спробуйте ще раз.",
    },
  },
  footer: {
    description:
      "Створюю сайти, CRM-системи, чат-боти та автоматизації для бізнесу за допомогою Claude Code. Рішення, які реально приносять заявки.",
    navHeading: "Навігація",
    contactHeading: "Контакти",
    rights: "Всі права захищено.",
  },
};

const en: typeof uk = {
  nav: {
    home: "Home",
    about: "About",
    services: "Pricing",
    projects: "Projects",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Discuss a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Open to new projects",
    titleLine: "Digital solutions that bring your business",
    titleAccent: "real customers",
    description:
      "I build websites, CRM systems, chatbots, and automations for specific business needs — from patient booking to lead handling. Design, code, and launch, end to end.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View my work",
    stats: [
      { value: "15+", label: "shipped projects" },
      { value: "5+", label: "business niches" },
      { value: "2+", label: "years of experience" },
      { value: "100%", label: "responsive" },
    ],
  },
  about: {
    eyebrow: "About me",
    title: "I build digital solutions that work for results",
    description:
      "I build websites, CRM systems for managing customers, chatbots, and automations for businesses. I combine design thinking with a modern tech stack so processes run themselves and companies win more customers.",
    pillars: {
      ai: {
        title: "AI-powered development",
        description: "Claude Code and modern AI tools — faster, without losing quality.",
      },
      stack: {
        title: "Modern stack",
        description: "Next.js, React, and TypeScript — the technologies leading products are built on.",
      },
      result: {
        title: "Results for your business",
        description: "Not just a showcase site — a working tool: a system that takes bookings, manages customers, and automates the routine.",
      },
    },
  },
  capabilities: {
    items: [
      "Business websites",
      "CRM systems",
      "Chatbots",
      "Process automation",
      "Clinic management systems",
      "Integrations & APIs",
    ],
  },
  services: {
    eyebrow: "Services & Pricing",
    badge: "-50% off multi-page sites",
    title: "How much a project costs",
    description: "These are today's prices. They'll go up later.",
    trustLine: "Cheaper than the competition. Premium quality.",
    from: "from",
    popularBadge: "Most picked",
    priceNote:
      "Prices are a starting point — final cost depends on project complexity and can land lower or higher than the range shown.",
    items: {
      update: {
        title: "Website Update",
        description: "A fresh design and modern code for a site you already have — no rebuild from scratch.",
      },
      multipage: {
        title: "Multi-page Website",
        description: "A complete site, built to order: several sections, a unique design, and full responsiveness.",
      },
      ecommerce: {
        title: "Online Store",
        description: "A product catalog, cart, and checkout — a ready-made platform for selling online.",
      },
      automation: {
        title: "Chatbots, CRM & Automation",
        description: "Telegram bots, CRM and customer-management systems (like Clinic Card), automated messaging, and integrations that save you time.",
      },
    },
  },
  projects: {
    eyebrow: "Portfolio",
    title: "Projects that speak for themselves",
    description:
      "Real projects for real businesses — websites, systems, and automations. Every one of them can be opened and viewed live.",
    viewAll: "View all projects",
    openSite: "Open site",
    liveLabel: "Live site",
    openInNewTab: "Open the «{title}» website in a new tab",
    screenshotAlt: "Screenshot of the «{title}» website",
    items: {
      dental: {
        category: "Dental clinic",
        description:
          "A luxury dental clinic site built on trust: modern design, digital diagnostics, and a premium patient experience from the first screen.",
      },
      "crystal-smile": {
        category: "Dental studio",
        description:
          "A premium private dental studio in Kyiv focused on high-tech diagnostics: 3D treatment previews, doctor profiles, and transparent pricing shape a boutique-clinic feel.",
      },
      osnova: {
        category: "Architecture & construction",
        description:
          "A premium site for an architecture and construction company with cinematic storytelling, editorial typography, and the feel of an expensive print magazine.",
      },
      structure: {
        category: "Architecture group",
        description:
          "A minimalist site for an architecture group where precise engineering meets durable materials: an international project portfolio, a three-pillar philosophy, and studio stats.",
      },
      arkhe: {
        category: "Architecture studio",
        description:
          "A cinematic portfolio site for an architecture studio: the project unfolds as a story in nine acts — from concrete volumes to bronze doors.",
      },
      "3d-home": {
        category: "Real estate · 3D tour",
        description:
          "An immersive, cinematic 3D tour of a luxury residence: a step-by-step walkthrough replaces an ordinary photo gallery with a premium sense of presence.",
      },
      atelier: {
        category: "Fine dining restaurant",
        description:
          "A luxury restaurant site inspired by Michelin-level experiences: immersive storytelling, deep colors, and haute-cuisine-grade typography.",
      },
      bakery: {
        category: "Bakery",
        description:
          "A minimalist landing page for a modern bakery: elegant product presentation, a warm atmosphere, and a clean content grid.",
      },
      bmw: {
        category: "Automotive brand",
        description:
          "A modern animated landing page focused on premium automotive presentation: motion, clean composition, and a striking hero screen.",
      },
      forest: {
        category: "Travel & tours",
        description:
          "A modern landing page for nature tours: immersive background imagery, clean navigation, and a sense of travel before you even book.",
      },
    },
  },
  projectsPage: {
    eyebrow: "Portfolio",
    title: "All projects",
    description:
      "shipped projects across different businesses — websites, clinic systems, and automations. Every one of them can be opened and viewed live.",
    back: "Back to home",
    open: "Open",
  },
  process: {
    eyebrow: "Work process",
    title: "A transparent path from idea to launch",
    description: "Every project goes through six clear stages so the result matches expectations.",
    stepLabel: "Step",
    steps: {
      discovery: {
        title: "Discovery call",
        description: "We clarify business goals, preferences, and the expected outcome.",
      },
      analysis: {
        title: "Business analysis",
        description: "I study the niche, competitors, and the project's target audience.",
      },
      design: {
        title: "Design",
        description: "I design a layout that matches the brand's style and values.",
      },
      development: {
        title: "Development",
        description: "I build and code the site with a modern technology stack.",
      },
      testing: {
        title: "Testing",
        description: "I check speed, responsiveness, and correctness of every feature.",
      },
      launch: {
        title: "Launch",
        description: "I publish the site and hand over all access and instructions to the client.",
      },
    },
  },
  whyChooseMe: {
    eyebrow: "Quality standard",
    title: "What every project gets",
    description: "Regardless of scale — from a landing page to a corporate site — these things are included by default.",
    items: {
      responsive: {
        title: "Responsive design",
        description: "Flawless on smartphone, tablet, and desktop.",
      },
      seo: {
        title: "SEO-friendly",
        description: "Semantics, metadata, and structure that Google loves.",
      },
      speed: {
        title: "High performance",
        description: "Optimized images and code — the site loads instantly.",
      },
      animations: {
        title: "Premium animations",
        description: "Smooth micro-interactions that feel expensive.",
      },
      stack: {
        title: "Modern technology",
        description: "Next.js, TypeScript, and Tailwind — the stack behind leading products.",
      },
      delivery: {
        title: "Fast delivery",
        description: "From brief to launch — no dragged-out deadlines.",
      },
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description: "Didn't find your answer? Reach out directly — I'll reply personally.",
    items: [
      {
        question: "How much does a website cost?",
        answer:
          "The price depends on project complexity: number of pages, functionality, and design. After discussing the details, I put together an exact proposal for your budget and goals.",
      },
      {
        question: "How long does development take?",
        answer:
          "Simple sites (landing pages) take 1 to 3 days. More complex, multi-page projects take about a week.",
      },
      {
        question: "Will the site work on mobile?",
        answer:
          "Yes, every site is built responsive from the ground up — it looks and works equally well on phones, tablets, and computers.",
      },
      {
        question: "Do you help after launch?",
        answer:
          "Yes, after launch I stay available for edits, consultations, and technical support so the site keeps working effectively.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to discuss your project?",
    description: "Leave a request — I'll get back to you within one business day.",
    infoHeading: "Contact information",
    infoSubheading: "Pick whichever channel is convenient — I reply fast.",
    telegramLabel: "Telegram",
    emailLabel: "Email",
    locationLabel: "Location",
    form: {
      name: "Name",
      namePlaceholder: "Your name",
      phone: "Phone",
      phoneError: "Enter a valid Ukrainian phone number",
      email: "Email",
      company: "Company",
      companyOptional: "(optional)",
      companyPlaceholder: "Company name",
      service: "Service",
      selectService: "Select a service",
      otherService: "Other",
      message: "Message",
      messagePlaceholder: "Tell me briefly about your project...",
      submit: "Send request",
      submitting: "Sending...",
      successTitle: "Thank you!",
      successBody: "Your request has been received.",
      successBody2: "I'll get back to you shortly.",
      successNote: "A confirmation email is already on its way.",
      sendAnother: "Send another request",
    },
    errors: {
      invalid_request: "Invalid request.",
      invalid_name: "Please enter your name.",
      invalid_email: "Please enter a valid email address.",
      invalid_phone: "Please enter a valid Ukrainian phone number.",
      company_too_long: "Company name is too long.",
      invalid_service: "Please choose a service from the list.",
      message_too_short: "Your message is too short — tell me a bit more.",
      message_too_long: "Your message is too long.",
      rate_limited: "Too many requests. Please try again in a bit.",
      service_unavailable: "Service temporarily unavailable. Please try again later.",
      send_failed: "Couldn't send your request. Please try again later.",
      network: "Couldn't connect to the server. Check your internet connection.",
      generic: "Something went wrong. Please try again.",
    },
  },
  footer: {
    description:
      "I build websites, CRM systems, chatbots, and automations for businesses using Claude Code. Solutions that actually bring in leads.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    rights: "All rights reserved.",
  },
};

export const dictionaries = { uk, en } satisfies Record<Language, typeof uk>;

export type Dictionary = typeof uk;
