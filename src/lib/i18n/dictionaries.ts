export type Language = "uk" | "en";

const uk = {
  nav: {
    home: "Головна",
    about: "Про мене",
    services: "Рішення",
    pricing: "Ціни",
    projects: "Кейси",
    process: "Процес роботи",
    faq: "FAQ",
    contact: "Контакти",
    cta: "Обговорити проєкт",
    openMenu: "Відкрити меню",
    closeMenu: "Закрити меню",
  },
  hero: {
    badge: "Відкритий до нових проєктів",
    titleLine: "Допомагаю бізнесам",
    titleAccent: "розвиватися онлайн",
    description:
      "Створюю виразні сайти, автоматизації та цифрові продукти, які привертають увагу, спрощують роботу й допомагають бізнесу рухатися вперед.",
    ctaPrimary: "Обговорити проєкт",
    ctaSecondary: "Дивитися роботи",
    motionLabel: "Ідеї в постійному русі",
    ownProductLabel: "Власний продукт",
    clinicCardLabel: "Система для керування клінікою",
    stats: [
      { value: "15+", label: "запущених проєктів" },
      { value: "5+", label: "бізнес-ніш" },
      { value: "2+", label: "роки досвіду" },
      { value: "100%", label: "адаптивність" },
    ],
  },
  about: {
    eyebrow: "Екосистема рішень",
    title: "Від першого кліку до системи, що масштабує бізнес",
    description:
      "Прокручуйте далі — кожна сцена показує окремий рівень цифрової екосистеми: сайти, власні продукти, чат-боти та CRM.",
    journey: [
      {
        label: "Digital presence",
        title: "Сайти",
        kicker: "Перший контакт із вашим брендом",
        description: "Не просто красива сторінка, а продуманий маршрут від першого враження до заявки або покупки.",
        points: ["Унікальний дизайн", "Анімації та адаптивність", "Фокус на конверсії"],
      },
      {
        label: "Власний продукт",
        title: "ClinicCard",
        kicker: "Операційна система для клініки",
        description: "Записи, база пацієнтів, команда, нагадування й ключова аналітика працюють в одному захищеному просторі.",
        points: ["Розклад і пацієнти", "Ролі для команди", "Аналітика в реальному часі"],
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
      "Сайти під ключ",
      "Цифрові продукти",
      "ClinicCard",
      "Чат-боти",
      "CRM-системи",
      "Інтеграції та API",
    ],
  },
  services: {
    eyebrow: "Що можна запустити",
    badge: "Чотири напрямки — один фокус на результат",
    title: "Рішення, що рухають бізнес.",
    description: "Прокручуйте — кожен напрям прилітає окремою сценою з чітким складом робіт і зрозумілим стартом співпраці.",
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
        price: "$200–300",
        cta: "Запросити демонстрацію",
        features: ["Онлайн-розклад", "Картки пацієнтів", "Команда й ролі", "Звіти та нагадування"],
      },
      websites: {
        title: "Сайти під ключ",
        tagline: "Від позиціонування до запуску",
        description: "Лендинги, корпоративні сайти та каталоги з авторським дизайном, сильною мобільною версією й анімаціями.",
        price: "$100–150",
        cta: "Обговорити сайт",
        features: ["Структура й тексти", "Унікальний UI", "Анімації", "SEO та запуск"],
      },
      chatbots: {
        title: "Чат-боти",
        tagline: "Автоматичні сценарії без рутини",
        description: "Telegram-боти для записів, консультацій, заявок, нагадувань і синхронізації з вашими сервісами.",
        price: "$50–150",
        cta: "Описати сценарій",
        features: ["Логіка діалогів", "Адмін-панель", "Сповіщення", "API-інтеграції"],
      },
      crm: {
        title: "CRM-системи",
        tagline: "Інструмент під реальний процес",
        description: "Кастомна система обліку клієнтів, задач і воронок, яка повторює логіку вашої команди, а не змушує команду підлаштовуватись.",
        price: "$80–200",
        cta: "Розібрати процес",
        features: ["Клієнтська база", "Воронки", "Ролі й доступи", "Дашборди"],
      },
    },
  },
  pricing: {
    eyebrow: "Прозора вартість",
    title: "Ціна без сюрпризів.",
    description: "Орієнтири, з якими можна планувати запуск ще до першої розмови. Остаточну суму фіксуємо після короткого обговорення задачі.",
    note: "Усі ціни в USD · оплата поетапно · без прихованих доплат",
    fromLabel: "Діапазон",
    cta: "Отримати точну оцінку",
    footer: "Складність визначають кількість сторінок, ролей, інтеграцій та нестандартних сценаріїв. Перед стартом ви отримуєте чіткий склад робіт, терміни й зафіксовану вартість.",
    items: {
      siteEdit: {
        label: "Покращення",
        title: "Редагування сайту",
        description: "Оновлення дизайну, адаптивності, контенту або окремих функцій уже готового сайту.",
        price: "$50–100",
        features: ["Аудит проблем", "Мобільні виправлення", "Оновлення блоків"],
      },
      newWebsite: {
        label: "Найчастіший запит",
        title: "Новий сайт під ключ",
        description: "Повний запуск: від структури й дизайну до адаптивної версії, анімацій та публікації.",
        price: "$100–150",
        features: ["Індивідуальний дизайн", "Телефон + комп’ютер", "Анімації та запуск"],
      },
      crm: {
        label: "Бізнес-система",
        title: "Створення CRM",
        description: "Кастомна CRM навколо вашої команди, клієнтів, задач і реальної логіки продажів.",
        price: "$80–200",
        features: ["Клієнтська база", "Ролі та доступи", "Залежить від складності"],
      },
      cliniccard: {
        label: "Якісний готовий продукт",
        title: "ClinicCard",
        description: "Повноцінна система для клініки з великою кількістю функцій, продуманими ролями й зручним щоденним керуванням.",
        price: "$200–300",
        features: ["Пацієнти та розклад", "Команда, ролі й звіти", "Багато готових функцій"],
      },
      chatbot: {
        label: "Автоматизація",
        title: "Чат-бот",
        description: "Бот для заявок, консультацій, записів, нагадувань або інтеграції з вашими сервісами.",
        price: "$50–150",
        features: ["Сценарії діалогу", "Сповіщення", "API-інтеграції"],
      },
    },
  },
  projects: {
    eyebrow: "Продукти та кейси",
    title: "Сайти й системи, що підсилюють бізнес",
    description:
      "Добірка запущених сайтів у різних нішах — від клінік і архітектури до ресторанів та нерухомості. Далі — власні системи й автоматизація.",
    viewAll: "Переглянути всі сайти",
    openSite: "Відкрити сайт",
    liveLabel: "Живий сайт",
    openInNewTab: "Відкрити сайт «{title}» у новій вкладці",
    screenshotAlt: "Скриншот сайту «{title}»",
    websitesLabel: "Вибрані сайти",
    systemsLabel: "Власні продукти та автоматизація",
    featuredProduct: "Основний продукт",
    systemsDescription: "ClinicCard і CRM доступні як живі демо, а для чат-бота вже підготовлено окремий концепт інтерфейсу в стилі Telegram та Instagram Direct.",
    productCases: {
      cliniccard: {
        status: "Готовий продукт",
        title: "ClinicCard",
        category: "Clinic OS",
        description: "Повноцінна система керування приватною клінікою: записи, пацієнти, команда, нагадування та аналітика в одному середовищі.",
        action: "Переглянути демо",
      },
      chatbot: {
        status: "Демо-концепт",
        title: "AI Chatbot",
        category: "Telegram / Instagram",
        description: "Концепт бізнес-бота для Telegram та Instagram Direct: автоматичні відповіді, запис, швидкі кнопки й передача заявки менеджеру.",
        action: "Концепт інтерфейсу",
      },
      crm: {
        status: "Готовий продукт",
        title: "Custom CRM",
        category: "Business system",
        description: "Кастомна CRM з воронками продажів, ролями доступу, клієнтською базою та аналітичними дашбордами — живе демо вже доступне.",
        action: "Переглянути демо",
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
    title: "Сайти, продукти та системи",
    description:
      "сайтів уже доступні наживо. ClinicCard, CRM і чат-бот винесені окремо як головні продуктові напрями.",
    back: "На головну",
    open: "Відкрити",
  },
  process: {
    eyebrow: "Процес роботи",
    title: "Від задачі бізнесу до робочого рішення",
    description: "Кожне рішення проходить шість чітких етапів — від розуміння бізнес-задачі до запуску й підтримки.",
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
    title: "Продумано до дрібниць",
    description: "Шість принципів, за якими кожен сайт і цифровий продукт стає зрозумілим, надійним та готовим до розвитку.",
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
    title: "Що варто знати перед стартом",
    description: "Коротко про сайти, цифрові продукти, вартість і формат роботи.",
    items: [
      {
        question: "Які проєкти ви розробляєте?",
        answer:
          "Створюю промосайти, корпоративні сайти й каталоги, а також чат-боти, CRM та інші цифрові системи. ClinicCard — один із власних готових продуктів.",
      },
      {
        question: "Скільки коштує розробка?",
        answer:
          "Редагування сайту коштує $50–100, новий сайт — $100–150, чат-бот — $50–150, CRM — $80–200, а ClinicCard — $200–300. Точна сума залежить від складності та фіксується до початку роботи.",
      },
      {
        question: "Як проходить робота над проєктом?",
        answer:
          "Спочатку розбираємо задачу й аудиторію, далі погоджуємо структуру та стиль, після чого я розробляю, тестую і запускаю готове рішення.",
      },
      {
        question: "Чи допомагаєте після запуску?",
        answer:
          "Так. Допомагаю з впровадженням, пояснюю роботу системи, виправляю технічні нюанси й можу розвивати продукт новими функціями.",
      },
    ],
  },
  contact: {
    eyebrow: "Контакти",
    title: "Є задача для бізнесу? Перетворімо її на продукт.",
    description: "Коротко опишіть сайт, автоматизацію або систему, яка вам потрібна — я звʼяжусь протягом одного робочого дня.",
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
      "Створюю виразні сайти, цифрові продукти й автоматизації, які допомагають бізнесам зростати, продавати та працювати простіше.",
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
    pricing: "Pricing",
    projects: "Cases",
    process: "Process",
    faq: "FAQ",
    contact: "Contact",
    cta: "Discuss a project",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "Available for new projects",
    titleLine: "Helping businesses",
    titleAccent: "move forward online",
    description:
      "I create expressive websites, automations, and digital products that attract attention, simplify work, and help businesses keep moving forward.",
    ctaPrimary: "Discuss a project",
    ctaSecondary: "View selected work",
    motionLabel: "Ideas always in motion",
    ownProductLabel: "Owned product",
    clinicCardLabel: "Clinic management system",
    stats: [
      { value: "15+", label: "shipped projects" },
      { value: "5+", label: "business niches" },
      { value: "2+", label: "years of experience" },
      { value: "100%", label: "responsive" },
    ],
  },
  about: {
    eyebrow: "Solution ecosystem",
    title: "From the first click to a system that scales the business",
    description:
      "Keep scrolling — each scene reveals a layer of the ecosystem: websites, owned products, chatbots, and CRM systems.",
    journey: [
      {
        label: "Digital presence",
        title: "Websites",
        kicker: "The first contact with your brand",
        description: "Not just a beautiful page, but a deliberate journey from the first impression to an inquiry or purchase.",
        points: ["Custom design", "Motion and responsiveness", "Conversion focus"],
      },
      {
        label: "Owned product",
        title: "ClinicCard",
        kicker: "An operating system for clinics",
        description: "Appointments, patient records, team access, reminders, and core analytics live in one secure workspace.",
        points: ["Schedule and patients", "Team roles", "Real-time analytics"],
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
      "Websites",
      "Digital products",
      "ClinicCard",
      "Chatbots",
      "CRM systems",
      "Integrations & APIs",
    ],
  },
  services: {
    eyebrow: "What we can launch",
    badge: "Four directions — one focus on results",
    title: "Solutions that move business forward.",
    description: "Keep scrolling — each direction arrives as its own scene with a clear scope and a straightforward way to begin.",
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
        price: "$200–300",
        cta: "Request a demo",
        features: ["Online schedule", "Patient records", "Team roles", "Reports and reminders"],
      },
      websites: {
        title: "Websites",
        tagline: "From positioning to launch",
        description: "Landing pages, corporate sites, and catalogs with custom design, strong mobile UX, and deliberate motion.",
        price: "$100–150",
        cta: "Discuss a website",
        features: ["Structure and copy", "Custom UI", "Motion", "SEO and launch"],
      },
      chatbots: {
        title: "Chatbots",
        tagline: "Automated scenarios without routine",
        description: "Telegram bots for bookings, consultations, inquiries, reminders, and synchronization with your services.",
        price: "$50–150",
        cta: "Describe the scenario",
        features: ["Conversation logic", "Admin panel", "Notifications", "API integrations"],
      },
      crm: {
        title: "CRM systems",
        tagline: "A tool built around the real process",
        description: "A custom system for clients, tasks, and pipelines that mirrors your team's logic instead of forcing the team to adapt.",
        price: "$80–200",
        cta: "Map the process",
        features: ["Client database", "Pipelines", "Roles and access", "Dashboards"],
      },
    },
  },
  pricing: {
    eyebrow: "Clear pricing",
    title: "Pricing without surprises.",
    description: "Practical ranges you can use to plan a launch before our first conversation. The final amount is fixed after a short project review.",
    note: "All prices in USD · milestone payments · no hidden fees",
    fromLabel: "Range",
    cta: "Get an exact estimate",
    footer: "Complexity depends on page count, roles, integrations, and custom workflows. Before work begins, you receive a clear scope, timeline, and fixed price.",
    items: {
      siteEdit: {
        label: "Improvement",
        title: "Website editing",
        description: "Design, responsiveness, content, or feature improvements for an existing website.",
        price: "$50–100",
        features: ["Problem audit", "Mobile fixes", "Section updates"],
      },
      newWebsite: {
        label: "Most requested",
        title: "New website",
        description: "A complete launch: structure, design, responsive layouts, motion, and publishing.",
        price: "$100–150",
        features: ["Custom design", "Mobile + desktop", "Motion and launch"],
      },
      crm: {
        label: "Business system",
        title: "Custom CRM",
        description: "A CRM shaped around your team, clients, tasks, and actual sales workflow.",
        price: "$80–200",
        features: ["Client database", "Roles and access", "Based on complexity"],
      },
      cliniccard: {
        label: "Quality ready product",
        title: "ClinicCard",
        description: "A complete clinic system with a rich feature set, thoughtful roles, and comfortable daily management.",
        price: "$200–300",
        features: ["Patients and schedule", "Team, roles, and reports", "Rich ready feature set"],
      },
      chatbot: {
        label: "Automation",
        title: "Chatbot",
        description: "A bot for inquiries, consultations, bookings, reminders, or integration with your services.",
        price: "$50–150",
        features: ["Conversation flows", "Notifications", "API integrations"],
      },
    },
  },
  projects: {
    eyebrow: "Products and cases",
    title: "Websites and systems that strengthen business",
    description:
      "A selection of launched websites across clinics, architecture, restaurants, and real estate — followed by owned products and automation work.",
    viewAll: "View all websites",
    openSite: "Open site",
    liveLabel: "Live site",
    openInNewTab: "Open the «{title}» website in a new tab",
    screenshotAlt: "Screenshot of the «{title}» website",
    websitesLabel: "Selected websites",
    systemsLabel: "Owned products and automation",
    featuredProduct: "Flagship product",
    systemsDescription: "ClinicCard and CRM are available as live demos, while the chatbot now has a dedicated Telegram and Instagram Direct interface concept.",
    productCases: {
      cliniccard: {
        status: "Ready product",
        title: "ClinicCard",
        category: "Clinic OS",
        description: "A complete operating system for private clinics: appointments, patients, team access, reminders, and analytics in one environment.",
        action: "View demo",
      },
      chatbot: {
        status: "Demo concept",
        title: "AI Chatbot",
        category: "Telegram / Instagram",
        description: "A business-bot concept for Telegram and Instagram Direct with automated replies, bookings, quick actions, and manager handoff.",
        action: "Interface concept",
      },
      crm: {
        status: "Ready product",
        title: "Custom CRM",
        category: "Business system",
        description: "A custom CRM with sales pipelines, access roles, a client database, and analytical dashboards — the live demo is already available.",
        action: "View demo",
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
    title: "Websites, products, and systems",
    description:
      "websites are already available live. ClinicCard, CRM, and chatbot work are presented separately as the main product directions.",
    back: "Back to home",
    open: "Open",
  },
  process: {
    eyebrow: "Work process",
    title: "From a business task to a working solution",
    description: "Every solution goes through six clear stages — from understanding the business challenge to launch and support.",
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
    title: "Thought through to the details",
    description: "Six principles that make every website and digital product clear, reliable, and ready to evolve.",
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
    title: "What to know before we start",
    description: "A quick overview of websites, digital products, pricing, and the way we work.",
    items: [
      {
        question: "What types of projects do you build?",
        answer:
          "I build promotional and corporate websites, catalogs, chatbots, CRM systems, and other digital tools. ClinicCard is one of my own ready-to-use products.",
      },
      {
        question: "How much does development cost?",
        answer:
          "Website editing is $50–100, a new website is $100–150, a chatbot is $50–150, a CRM is $80–200, and ClinicCard is $200–300. The exact amount depends on complexity and is fixed before work begins.",
      },
      {
        question: "How does a project move from idea to launch?",
        answer:
          "We start with the business goal and audience, agree on structure and style, and then I develop, test, and launch the finished solution.",
      },
      {
        question: "Do you support projects after launch?",
        answer:
          "Yes. I help with implementation, explain the system, fix technical issues, and can continue developing the product with new features.",
      },
    ],
  },
  contact: {
    eyebrow: "Contact",
    title: "Have a business challenge? Let's turn it into a product.",
    description: "Briefly describe the website, automation, or system you need — I'll get back to you within one business day.",
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
      "I build expressive websites, digital products, and automations that help businesses grow, sell, and operate more simply.",
    navHeading: "Navigation",
    contactHeading: "Contact",
    rights: "All rights reserved.",
  },
};

export const dictionaries = { uk, en } satisfies Record<Language, typeof uk>;

export type Dictionary = typeof uk;
