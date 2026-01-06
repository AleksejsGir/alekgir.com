● Отличный анализ завершён! Вот профессиональный план рефакторинга проекта для соответствия SOLID принципам:

  🎯 AUDIT РЕЗУЛЬТАТЫ: Нарушения SOLID принципов

  🔴 КРИТИЧЕСКИЕ (High Priority)

  1. ContactForm.tsx - Hardcoded Form Data

  Проблема:
  // src/components/Contact/ContactForm.tsx
  const projectOptions = [
    { value: "e-commerce", label: "E-Commerce Platform" },
    { value: "api-development", label: "API Development" },
    // ... 8+ hardcoded options
  ]

  const budgetOptions = [
    { value: "under-5k", label: "< $5,000" },
    // ... 4+ hardcoded options
  ]
  Нарушает: Single Responsibility Principle (SRP)
  Решение: Создать src/data/contact-form.ts

  ---
  2. ServicesSection.tsx - Hardcoded Services Array

  Проблема:
  // src/components/Services/ServicesSection.tsx
  const services = [
    {
      title: 'Full-Stack Development',
      description: 'Long hardcoded text...',
      icon: CodeBracketIcon,
      gradient: 'from-blue-500 to-cyan-500',
    },
    // ... 7+ more services inline
  ]
  Нарушает: SRP, Open/Closed Principle (OCP)
  Решение: Создать src/data/services.ts

  ---
  3. ServiceCard.tsx - Brittle Switch-Case Mapping

  Проблема:
  // src/components/Services/ServiceCard.tsx
  switch (title) {
    case 'Full-Stack Development': return <FullStackFlow />
    case 'Telegram Bots': return <TelegramBotsFlow />
    // ... 6+ hardcoded cases
  }
  Нарушает: OCP (новый сервис = изменение компонента)
  Решение: Service registry с dynamic imports

  ---
  4. Hero.tsx - Stats Array Hardcoded

  Проблема:
  // src/components/Hero/Hero.tsx
  const stats = [
    { value: SEO_CONFIG.achievements.projectsDelivered, label: 'Projects Delivered' },
    { value: SEO_CONFIG.achievements.yearsExperience, label: 'Years Experience' },
    { value: SEO_CONFIG.achievements.certificationScore, label: 'European Certified' },
  ];
  Нарушает: SRP (labels должны быть в SEO_CONFIG)
  Решение: Переместить в seo.config.ts

  ---
  🟡 СРЕДНИЕ (Medium Priority)

  5. HeroBackground3D.tsx - Hardcoded Canvas Data

  Проблема:
  const CODE_KEYWORDS = ['Python', 'Django', 'React', ...]; // 30+ keywords
  const CODE_SYMBOLS = ['{}', '[]', '()', ...];
  const BINARY_HEX = '01ABCDEF...';
  Нарушает: SRP (данные смешаны с логикой)
  Решение: Создать src/constants/canvas-characters.ts

  ---
  6. AboutSection.tsx - Inline Counter Component

  Проблема:
  // Counter component определён внутри файла (30 строк)
  function Counter({ value, suffix }: { value: number; suffix?: string }) {
    // animation logic...
  }
  Нарушает: SRP (2 компонента в 1 файле)
  Решение: Создать src/components/shared/ui/Counter.tsx

  ---
  7. ContactSection.tsx - Hardcoded Process Steps

  Проблема:
  const nextSteps = [
    { step: '01', title: 'Request', description: '...' },
    // ... 3+ steps
  ]
  Нарушает: SRP
  Решение: Создать src/data/contact-process.ts

  ---
  8. Navbar.tsx - Hardcoded Navigation

  Проблема:
  const navLinks = [
    { name: 'Projects', href: '#projects' },
    // ... 3+ links
  ]
  Нарушает: SRP
  Решение: Создать src/data/navigation.ts

  ---
  9. projects.ts - Massive 1200+ Lines File

  Проблема:
  - 9 проектов × 100+ строк = огромный файл
  - Смешанные данные и хелперы
  Нарушает: SRP, Interface Segregation Principle (ISP)
  Решение: Разделить на отдельные файлы или использовать CMS

  ---
  📋 ПЛАН РЕФАКТОРИНГА

  PHASE 1: Data Extraction (SOLID SRP) ⚡ HIGH PRIORITY

  Создать новые файлы с данными:

  src/data/
  ├── contact-form.ts          ← projectOptions, budgetOptions, timelineOptions
  ├── services.ts              ← services array из ServicesSection
  ├── service-registry.ts      ← mapping: service title → flow component
  ├── navigation.ts            ← navLinks из Navbar
  ├── contact-process.ts       ← nextSteps из ContactSection
  └── hero-stats.ts            ← stats structure (или добавить в SEO_CONFIG)

  src/constants/
  ├── colors.ts                ← techColorMap, categoryColorMap
  └── canvas-characters.ts     ← CODE_KEYWORDS, CODE_SYMBOLS, BINARY_HEX

  Изменения в существующих файлах:
  1. ContactForm.tsx - импорт из contact-form.ts
  2. ServicesSection.tsx - импорт из services.ts
  3. ServiceCard.tsx - использовать service registry
  4. Hero.tsx - импорт stats из SEO_CONFIG или hero-stats.ts
  5. HeroBackground3D.tsx - импорт из canvas-characters.ts
  6. AboutSection.tsx - импорт colors из colors.ts
  7. ContactSection.tsx - импорт из contact-process.ts
  8. Navbar.tsx - импорт из navigation.ts

  ---
  PHASE 2: Component Extraction (SOLID SRP) 🎯 MEDIUM

  Извлечь переиспользуемые компоненты:

  src/components/shared/ui/
  ├── Counter.tsx              ← из AboutSection.tsx
  └── AnimatedStat.tsx         ← обертка для анимированной статистики

  src/components/shared/
  └── ScrollButton.tsx         ← функция scrollTo из Hero.tsx в хук

  Создать хуки:
  src/hooks/
  └── useScrollTo.ts           ← scrollToProjects, scrollToContact логика

  ---
  PHASE 3: Service Registry Pattern (SOLID OCP) 🔧 HIGH

  // src/data/service-registry.ts
  import { lazy, ComponentType } from 'react';

  interface ServiceFlow {
    component: ComponentType;
    title: string;
  }

  export const SERVICE_REGISTRY: Record<string, ServiceFlow> = {
    'full-stack': {
      title: 'Full-Stack Development',
      component: lazy(() => import('@/components/Services/flows/FullStackFlow')),
    },
    'telegram-bots': {
      title: 'Telegram Bots',
      component: lazy(() => import('@/components/Services/flows/TelegramBotsFlow')),
    },
    // ... остальные
  };

  // src/components/Services/ServiceCard.tsx
  export default function ServiceCard({ service }: { service: Service }) {
    const flowConfig = SERVICE_REGISTRY[service.slug];
    const FlowComponent = flowConfig?.component;

    return FlowComponent ? <FlowComponent /> : null;
  }

  ---
  PHASE 4: SEO Config Enhancement (SOLID SRP) 📊 MEDIUM

  // src/config/seo.config.ts - добавить секцию stats
  export const SEO_CONFIG = {
    // ... existing config

    stats: [
      {
        key: 'projectsDelivered',
        value: '38+',
        label: 'Projects Delivered',
        suffix: '+'
      },
      {
        key: 'yearsExperience',
        value: '3+',
        label: 'Years Experience',
        suffix: '+'
      },
      {
        key: 'certificationScore',
        value: '94',
        label: 'European Certified',
        suffix: '/100'
      },
    ],
  }

  ---
  PHASE 5: Projects Data Split (SOLID ISP) 📁 LOW PRIORITY

  Опция A: Directory Structure
  src/data/projects/
  ├── index.ts                 ← exports all, helper functions
  ├── types.ts                 ← Project interface
  ├── e-commerce-platform.ts   ← project data
  ├── telegram-solutions.ts
  ├── restaurant-saas.ts
  └── ... (9 files total)

  Опция B: Move to CMS (будущее)
  - Headless CMS (Sanity, Contentful)
  - Или простой JSON API

  ---
  🚀 ПРИОРИТИЗАЦИЯ ЗАДАЧ

  Sprint 1: Critical Data Extraction (2-3 часа)

  1. ✅ Создать src/data/services.ts
  2. ✅ Создать src/data/contact-form.ts
  3. ✅ Создать src/data/service-registry.ts
  4. ✅ Обновить ServicesSection.tsx
  5. ✅ Обновить ContactForm.tsx
  6. ✅ Обновить ServiceCard.tsx
  7. ✅ Запустить type-check + lint

  Sprint 2: Stats & Navigation (1-2 часа)

  1. ✅ Добавить stats в seo.config.ts
  2. ✅ Создать src/data/navigation.ts
  3. ✅ Создать src/data/contact-process.ts
  4. ✅ Обновить Hero.tsx
  5. ✅ Обновить Navbar.tsx
  6. ✅ Обновить ContactSection.tsx
  7. ✅ Запустить type-check + lint

  Sprint 3: Constants & Colors (1 час)

  1. ✅ Создать src/constants/colors.ts
  2. ✅ Создать src/constants/canvas-characters.ts
  3. ✅ Обновить Hero.tsx (techColorMap)
  4. ✅ Обновить AboutSection.tsx (categoryColorMap)
  5. ✅ Обновить HeroBackground3D.tsx
  6. ✅ Запустить type-check + lint

  Sprint 4: Component Extraction (2 часа)

  1. ✅ Создать src/components/shared/ui/Counter.tsx
  2. ✅ Создать src/hooks/useScrollTo.ts
  3. ✅ Обновить AboutSection.tsx
  4. ✅ Обновить Hero.tsx
  5. ✅ Запустить type-check + lint

  Sprint 5: Projects Split (опционально, 3+ часа)

  - Разделить projects.ts на отдельные файлы
  - Или интегрировать CMS

  ---
  📊 ОЖИДАЕМЫЕ РЕЗУЛЬТАТЫ

  До:
  - 🔴 9 компонентов с hardcoded данными
  - 🔴 1200+ строк в projects.ts
  - 🔴 Brittle switch-case mapping
  - 🟡 Смешанные concerns (UI + data)

  После:
  - ✅ Все данные в src/data/ и src/config/
  - ✅ Компоненты содержат ТОЛЬКО UI логику
  - ✅ Service registry pattern (OCP compliant)
  - ✅ Переиспользуемые UI компоненты
  - ✅ Единообразная архитектура
  - ✅ Легко добавлять новые сервисы/проекты
  - ✅ Clean, maintainable, professional code