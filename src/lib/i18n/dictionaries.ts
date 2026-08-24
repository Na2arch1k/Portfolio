export type Language = "uk" | "en";

const uk = {
  nav: {
    home: "Головна",
    about: "Про мене",
    services: "Рішення",
    projects: "Кейси",
    process: "Процес роботи",
    faq: "FAQ",
    contact: "Контакти",
    cta: "Обговорити проєкт",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
  },
  hero: {
    badge: "ClinicCard готовий до впровадження",
    titleLine: "ClinicCard:",
    titleAccent: "клініка під контролем",
    description:
      "Повноцінна система для записів, пацієнтів, команди й аналітики клініки. Також створюю сайти, чат-боти та CRM під конкретні процеси бізнесу.",
    ctaPrimary: "Запросити демо",
    ctaSecondary: "Як це працює",
    stats: [
      { value: "15+", label: "запущених проєктів" },
      { value: "5+", label: "бізнес-ніш" },
      { value: "2+", label: "роки досвіду" },
      { value: "100%", label: "адаптивність" },
    ],
  },
  about: {
    eyebrow: "Екосистема рішень",
    title: "Від готового продукту до системи під ваш бізнес",
    description:
      "Прокручуйте далі — кожна сцена показує окремий рівень цифрової екосистеми: ClinicCard, сайти, чат-боти та CRM.",
    journey: [
      {
        label: "Головний продукт",
        title: "ClinicCard",
        kicker: "Операційна система для клініки",
        description: "Записи, база пацієнтів, команда, нагадування й ключова аналітика працюють в одному захищеному просторі.",
        points: ["Розклад і пацієнти", "Ролі для команди", "Аналітика в реальному часі"],
      },
      {
        label: "Digital presence",
        title: "Сайти",
        kicker: "Перший контакт із вашим брендом",
        description: "Не просто красива сторінка, а продуманий маршрут від першого враження до заявки або покупки.",
        points: ["Унікальний дизайн", "Анімації та адаптивність", "Фокус на конверсії"],
      },
      {
        label: "Automation layer",
        title: "Чат-боти",
        kicker: "Бізнес відповідає навіть коли ви офлайн",
        description: "Боти для консультацій, записів, кваліфікації лідів і автоматичної передачі даних у ваші системи.",
        points: ["Telegram та месенджери", "Автоматичні сценарії", "Інтеграції з API"],
      },
      {
        label: "Custom systems",
        title: "CRM",
        kicker: "Процеси, зібрані навколо вашої команди",
        description: "Кастомні кабінети, воронки, ролі та звіти без зайвих модулів, які не потрібні вашому бізнесу.",
        points: ["Воронки та клієнти", "Права доступу", "Звіти й автоматизації"],
      },
    ],
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
      "ClinicCard",
      "Сайти під ключ",
      "Чат-боти",
      "CRM-системи",
      "Автоматизація процесів",
      "Інтеграції та API",
    ],
  },
  services: {
    eyebrow: "Що можна запустити",
    badge: "ClinicCard — пріоритетний продукт",
    title: "Не прайс. Конкретні рішення.",
    description: "Оберіть напрям — справа побачите, що саме входить у рішення та з чого починається співпраця.",
    trustLine: "Демо → оцінка → запуск",
    investmentLabel: "Інвестиція",
    from: "від",
    popularBadge: "Флагман",
    priceNote:
      "Фінальна вартість залежить від кількості ролей, інтеграцій і бізнес-сценаріїв. Після короткого дзвінка ви отримуєте чітку оцінку без прихованих пунктів.",
    items: {
      cliniccard: {
        title: "ClinicCard",
        tagline: "Готова система для приватних клінік",
        description: "Центр керування записами, пацієнтами, лікарями та показниками клініки. Показую живе демо й адаптую впровадження під ваш процес.",
        price: "Вартість після демо",
        cta: "Запросити демонстрацію",
        features: ["Онлайн-розклад", "Картки пацієнтів", "Команда й ролі", "Звіти та нагадування"],
      },
      websites: {
        title: "Сайти під ключ",
        tagline: "Від позиціонування до запуску",
        description: "Лендинги, корпоративні сайти та каталоги з авторським дизайном, сильною мобільною версією й анімаціями.",
        price: "Від $80",
        cta: "Обговорити сайт",
        features: ["Структура й тексти", "Унікальний UI", "Анімації", "SEO та запуск"],
      },
      chatbots: {
        title: "Чат-боти",
        tagline: "Автоматичні сценарії без рутини",
        description: "Telegram-боти для записів, консультацій, заявок, нагадувань і синхронізації з вашими сервісами.",
        price: "Від $50",
        cta: "Описати сценарій",
        features: ["Логіка діалогів", "Адмін-панель", "Сповіщення", "API-інтеграції"],
      },
      crm: {
        title: "CRM-системи",
        tagline: "Інструмент під реальний процес",
        description: "Кастомна система обліку клієнтів, задач і воронок, яка повторює логіку вашої команди, а не змушує команду підлаштовуватись.",
        price: "Індивідуальна оцінка",
        cta: "Розібрати процес",
        features: ["Клієнтська база", "Воронки", "Ролі й доступи", "Дашборди"],
      },
    },
  },
  projects: {
    eyebrow: "Продукти та кейси",
    title: "Системи, які вирішують бізнес-задачі",
    description:
      "ClinicCard уже готовий до демонстрації. Під CRM і чат-бот зарезервовані місця — детальні кейси з’являться після оформлення матеріалів.",
    viewAll: "Переглянути всі сайти",
    openSite: "Відкрити сайт",
    liveLabel: "Живий сайт",
    openInNewTab: "Відкрити сайт «{title}» у новій вкладці",
    screenshotAlt: "Скриншот сайту «{title}»",
    websitesLabel: "Вибрані сайти",
    productCases: {
      cliniccard: {
        status: "Готовий продукт",
        title: "ClinicCard",
        category: "Clinic OS",
        description: "Повноцінна система керування приватною клінікою: записи, пацієнти, команда, нагадування та аналітика в одному середовищі.",
        action: "Запросити демо",
      },
      chatbot: {
        status: "Кейс готується",
        title: "AI Chatbot",
        category: "Automation",
        description: "Зарезервоване місце для кейсу чат-бота. Пізніше тут з’являться сценарії, інтеграції та результат автоматизації.",
        action: "Скоро",
      },
      crm: {
        status: "Кейс готується",
        title: "Custom CRM",
        category: "Business system",
        description: "Зарезервоване місце для CRM-кейсу з воронками, ролями, клієнтською базою та аналітичними дашбордами.",
        action: "Скоро",
      },
    },
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
    eyebrow: "Каталог робіт",
    title: "Продукти, системи та сайти",
    description:
      "сайтів уже доступні наживо. ClinicCard, CRM і чат-бот винесені окремо як головні продуктові напрями.",
    back: "На головну",
    open: "Відкрити",
  },
  process: {
    eyebrow: "Процес роботи",
    title: "Від задачі бізнесу до робочого рішення",
    description: "Кожне рішення проходить шість чітких етапів — незалежно від того, це ClinicCard, сайт, бот чи окрема CRM.",
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
        description: "Збираю інтерфейс, бізнес-логіку та потрібні інтеграції в єдиний продукт.",
      },
      testing: {
        title: "Тестування",
        description: "Перевіряю швидкість, адаптивність та коректність роботи.",
      },
      launch: {
        title: "Запуск",
        description: "Запускаю рішення, передаю доступи та допомагаю команді почати роботу.",
      },
    },
  },
  whyChooseMe: {
    eyebrow: "Стандарт якості",
    title: "Система має працювати, а не заважати",
    description: "Однаковий стандарт для ClinicCard, сайтів, ботів і CRM: зрозуміла логіка, надійність та можливість розвивати продукт після запуску.",
    items: {
      responsive: {
        title: "Логіка без хаосу",
        description: "Кожен сценарій короткий, зрозумілий і відповідає реальній роботі команди.",
      },
      seo: {
        title: "Захист даних",
        description: "Ролі, перевірка введення та контроль доступу закладаються в архітектуру системи.",
      },
      speed: {
        title: "Швидка робота",
        description: "Інтерфейс не змушує чекати й однаково добре працює на різних пристроях.",
      },
      animations: {
        title: "Живий UX",
        description: "Рух і мікровзаємодії пояснюють стан системи, а не просто прикрашають екран.",
      },
      stack: {
        title: "Готовність до росту",
        description: "Модульна архітектура дозволяє додавати ролі, інтеграції та нові процеси.",
      },
      delivery: {
        title: "Підтримка після запуску",
        description: "Допомагаю з впровадженням, навчаю команду та залишаюсь на зв'язку.",
      },
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Перед демонстрацією ClinicCard",
    description: "Коротко про систему, впровадження та інші цифрові продукти, які можна замовити.",
    items: [
      {
        question: "Що саме робить ClinicCard?",
        answer:
          "Система об'єднує розклад, записи пацієнтів, картки, роботу команди, нагадування та аналітику в одному зрозумілому інтерфейсі.",
      },
      {
        question: "Для яких клінік підходить система?",
        answer:
          "ClinicCard створений для приватних клінік і кабінетів, які вже переросли таблиці, паперові журнали та робочі чати.",
      },
      {
        question: "Скільки коштує впровадження?",
        answer:
          "Точну вартість визначаю після демонстрації й короткого розбору процесів. Вона залежить від кількості користувачів, ролей, перенесення даних та інтеграцій.",
      },
      {
        question: "Чи можна замовити сайт, чат-бота або окрему CRM?",
        answer:
          "Так. ClinicCard — головний готовий продукт, але я також створюю сайти, Telegram-ботів та індивідуальні CRM під конкретні процеси бізнесу.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакти",
    title: "Готові побачити ClinicCard у роботі?",
    description: "Залиште заявку на демо або коротко опишіть інший цифровий продукт — я звʼяжусь протягом одного робочого дня.",
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
      "ClinicCard — мій головний продукт для приватних клінік. Також створюю сайти, чат-боти та CRM, які прибирають рутину й допомагають бізнесу зростати.",
    navHeading: "Навігація",
    contactHeading: "Контакти",
    rights: "Всі права захищено.",
  },
};

const en: typeof uk = {
  nav: {
    home: "Home",
    about: "About",
    services: "Solutions",
    projects: "Cases",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Discuss a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "ClinicCard is ready to implement",
    titleLine: "ClinicCard:",
    titleAccent: "your clinic in control",
    description:
      "A complete system for appointments, patients, teams, and clinic analytics. I also build websites, chatbots, and custom CRM solutions for real business workflows.",
    ctaPrimary: "Request a demo",
    ctaSecondary: "See how it works",
    stats: [
      { value: "15+", label: "shipped projects" },
      { value: "5+", label: "business niches" },
      { value: "2+", label: "years of experience" },
      { value: "100%", label: "responsive" },
    ],
  },
  about: {
    eyebrow: "Solution ecosystem",
    title: "From a ready product to a system built for your business",
    description:
      "Keep scrolling — each scene reveals a layer of the ecosystem: ClinicCard, websites, chatbots, and CRM systems.",
    journey: [
      {
        label: "Flagship product",
        title: "ClinicCard",
        kicker: "An operating system for clinics",
        description: "Appointments, patient records, team access, reminders, and core analytics live in one secure workspace.",
        points: ["Schedule and patients", "Team roles", "Real-time analytics"],
      },
      {
        label: "Digital presence",
        title: "Websites",
        kicker: "The first contact with your brand",
        description: "Not just a beautiful page, but a deliberate journey from the first impression to an inquiry or purchase.",
        points: ["Custom design", "Motion and responsiveness", "Conversion focus"],
      },
      {
        label: "Automation layer",
        title: "Chatbots",
        kicker: "Your business responds while you are offline",
        description: "Bots for consultations, bookings, lead qualification, and automatic data transfer into your systems.",
        points: ["Telegram and messengers", "Automated scenarios", "API integrations"],
      },
      {
        label: "Custom systems",
        title: "CRM",
        kicker: "Processes shaped around your team",
        description: "Custom workspaces, pipelines, roles, and reports without modules your business will never use.",
        points: ["Pipelines and clients", "Access control", "Reports and automation"],
      },
    ],
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
      "ClinicCard",
      "Websites",
      "Chatbots",
      "CRM systems",
      "Process automation",
      "Integrations & APIs",
    ],
  },
  services: {
    eyebrow: "What we can launch",
    badge: "ClinicCard — flagship product",
    title: "Not a price list. Concrete solutions.",
    description: "Choose a direction to see what is included and how the engagement starts.",
    trustLine: "Demo → estimate → launch",
    investmentLabel: "Investment",
    from: "from",
    popularBadge: "Flagship",
    priceNote:
      "Final cost depends on roles, integrations, and business scenarios. After a short call, you receive a clear estimate with no hidden items.",
    items: {
      cliniccard: {
        title: "ClinicCard",
        tagline: "A ready system for private clinics",
        description: "A control center for appointments, patients, doctors, and clinic performance. I show a live demo and adapt implementation to your workflow.",
        price: "Price after demo",
        cta: "Request a demo",
        features: ["Online schedule", "Patient records", "Team roles", "Reports and reminders"],
      },
      websites: {
        title: "Websites",
        tagline: "From positioning to launch",
        description: "Landing pages, corporate sites, and catalogs with custom design, strong mobile UX, and deliberate motion.",
        price: "From $80",
        cta: "Discuss a website",
        features: ["Structure and copy", "Custom UI", "Motion", "SEO and launch"],
      },
      chatbots: {
        title: "Chatbots",
        tagline: "Automated scenarios without routine",
        description: "Telegram bots for bookings, consultations, inquiries, reminders, and synchronization with your services.",
        price: "From $50",
        cta: "Describe the scenario",
        features: ["Conversation logic", "Admin panel", "Notifications", "API integrations"],
      },
      crm: {
        title: "CRM systems",
        tagline: "A tool built around the real process",
        description: "A custom system for clients, tasks, and pipelines that mirrors your team's logic instead of forcing the team to adapt.",
        price: "Custom estimate",
        cta: "Map the process",
        features: ["Client database", "Pipelines", "Roles and access", "Dashboards"],
      },
    },
  },
  projects: {
    eyebrow: "Products and cases",
    title: "Systems built to solve business problems",
    description:
      "ClinicCard is ready for a live demo. CRM and chatbot slots are reserved for the detailed cases that will be added later.",
    viewAll: "View all websites",
    openSite: "Open site",
    liveLabel: "Live site",
    openInNewTab: "Open the «{title}» website in a new tab",
    screenshotAlt: "Screenshot of the «{title}» website",
    websitesLabel: "Selected websites",
    productCases: {
      cliniccard: {
        status: "Ready product",
        title: "ClinicCard",
        category: "Clinic OS",
        description: "A complete operating system for private clinics: appointments, patients, team access, reminders, and analytics in one environment.",
        action: "Request a demo",
      },
      chatbot: {
        status: "Case in progress",
        title: "AI Chatbot",
        category: "Automation",
        description: "Reserved for the chatbot case. Scenarios, integrations, and automation outcomes will be added here later.",
        action: "Coming soon",
      },
      crm: {
        status: "Case in progress",
        title: "Custom CRM",
        category: "Business system",
        description: "Reserved for the CRM case with pipelines, access roles, a client database, and analytical dashboards.",
        action: "Coming soon",
      },
    },
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
    eyebrow: "Work catalog",
    title: "Products, systems, and websites",
    description:
      "websites are already available live. ClinicCard, CRM, and chatbot work are presented separately as the main product directions.",
    back: "Back to home",
    open: "Open",
  },
  process: {
    eyebrow: "Work process",
    title: "From a business task to a working solution",
    description: "Every solution goes through six clear stages — whether it is ClinicCard, a website, a bot, or a custom CRM.",
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
        description: "I bring the interface, business logic, and required integrations together in one product.",
      },
      testing: {
        title: "Testing",
        description: "I check speed, responsiveness, and correctness of every feature.",
      },
      launch: {
        title: "Launch",
        description: "I launch the solution, hand over access, and help the team start using it.",
      },
    },
  },
  whyChooseMe: {
    eyebrow: "Quality standard",
    title: "A system should work, not get in the way",
    description: "One standard across ClinicCard, websites, bots, and CRM: clear logic, reliability, and room to evolve after launch.",
    items: {
      responsive: {
        title: "Logic without chaos",
        description: "Every scenario is short, clear, and aligned with how the team actually works.",
      },
      seo: {
        title: "Data protection",
        description: "Roles, input validation, and access control are built into the system architecture.",
      },
      speed: {
        title: "Fast operation",
        description: "The interface does not keep people waiting and works smoothly across devices.",
      },
      animations: {
        title: "Alive UX",
        description: "Motion and micro-interactions explain system state instead of merely decorating the screen.",
      },
      stack: {
        title: "Ready to grow",
        description: "A modular architecture makes it possible to add roles, integrations, and new processes.",
      },
      delivery: {
        title: "Post-launch support",
        description: "I help with implementation, train the team, and stay available after launch.",
      },
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Before the ClinicCard demo",
    description: "A quick overview of the system, implementation, and other digital products you can order.",
    items: [
      {
        question: "What exactly does ClinicCard do?",
        answer:
          "It combines schedules, patient appointments, records, team workflows, reminders, and analytics in one clear interface.",
      },
      {
        question: "Which clinics is it designed for?",
        answer:
          "ClinicCard is designed for private clinics and practices that have outgrown spreadsheets, paper logs, and work chats.",
      },
      {
        question: "How much does implementation cost?",
        answer:
          "I provide an exact price after a demo and a short workflow review. It depends on user count, roles, data migration, and integrations.",
      },
      {
        question: "Can I order a website, chatbot, or separate CRM?",
        answer:
          "Yes. ClinicCard is the main ready-to-use product, and I also build websites, Telegram bots, and custom CRM systems for specific business processes.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Ready to see ClinicCard in action?",
    description: "Request a demo or briefly describe another digital product — I'll get back to you within one business day.",
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
      "ClinicCard is my flagship product for private clinics. I also build websites, chatbots, and CRM systems that remove routine and help businesses grow.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    rights: "All rights reserved.",
  },
};

export const dictionaries = { uk, en } satisfies Record<Language, typeof uk>;

export type Dictionary = typeof uk;
