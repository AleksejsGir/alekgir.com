/**
 * SEO Configuration
 * Central source of truth for all SEO-related content
 * Follows Single Responsibility Principle
 */

export const SEO_CONFIG = {
  // Site Information
  site: {
    name: "AlekGirDev",
    fullName: "Aleksejs Giruckis - Full-Stack Developer",
    url: "https://alekgirdev.com",
    locale: "en_GB",
    author: "Aleksejs Giruckis",
  },

  // Primary Keywords (UK Market Focus)
  keywords: {
    primary: [
      "Full-Stack Developer UK",
      "Python Developer UK",
      "Django Developer",
      "React Developer UK",
    ],
    location: [
      "UK Developer",
      "Cambridgeshire Developer",
      "United Kingdom",
      "Cambridgeshire",
    ],
    technologies: [
      "Django",
      "Django REST Framework",
      "Python",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
    ],
    services: [
      "Telegram Bot Development",
      "Web Application Development",
      "REST API Development",
      "Full-Stack Development Services",
      "Django Web Development",
    ],
    certifications: [
      "European Certified Developer",
      "Tel-Ran Certified",
      "94/100 Certification Score",
    ],
  },

  // Quantified Achievements (for credibility)
  achievements: {
    certificationScore: "94/100",
    yearsExperience: "3+",
    projectsDelivered: "38+",
    testCoverage: "75%+",
    currentRole: "Full-Stack Developer",
  },

  // Stats for display (Hero, About sections)
  stats: [
    {
      key: "projectsDelivered",
      value: "38+",
      label: "Projects Delivered",
      numericValue: 38,
      suffix: "+",
    },
    {
      key: "yearsExperience",
      value: "3+",
      label: "Years Experience",
      numericValue: 3,
      suffix: "+",
    },
    {
      key: "certificationScore",
      value: "94/100",
      label: "European Certified",
      numericValue: 94,
      suffix: "/100",
    },
  ],

  // Contact Information
  contact: {
    email: "giruckisaleksejs@gmail.com",
    phone: "+44-7780-086353",
    linkedin: "https://www.linkedin.com/in/aleksejs-giruckis-0569a7353",
    github: "https://github.com/AleksejsGir",
  },

  // Location Information
  location: {
    city: "",
    region: "Cambridgeshire",
    country: "United Kingdom",
    countryCode: "GB",
  },

  // Professional Summary (SEO-optimized)
  summary: {
    short: "Full-Stack Developer in UK specializing in Python, Django, and React. European-certified (94/100) with 3+ years production experience.",
    long: "European-certified Full-Stack Developer based in Cambridgeshire, UK, specializing in Python, Django, and React development. With 94/100 certification score and 3+ years of production experience, I deliver high-quality web applications with 75%+ test coverage.",
    tagline: "Building Quality Web Solutions with Python, Django & React",
  },

  // Structured Data Helpers
  structuredData: {
    jobTitle: "Full-Stack Developer",
    workLocation: "Cambridgeshire, UK",
    availability: "Available for full-time opportunities",
    workAuthorization: "UK Settled Status - No visa required",
    education: {
      institution: "Tel-Ran.de GmbH",
      program: "Python Software Development with AI & ML",
      score: "94/100",
      hours: 428,
    },
  },

  // Skills taxonomy (for Schema.org)
  skills: {
    // Primary skills (SEO focus)
    primary: [
      "Python",
      "Django",
      "Django REST Framework",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
    ],
    // Backend & Languages
    backend: [
      "Python",
      "Django",
      "FastAPI",
      "Go",
      "Django REST Framework",
      "PostgreSQL",
    ],
    // Frontend
    frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
    ],
    // DevOps & Tools
    tools: [
      "Docker",
      "Git",
      "CI/CD",
      "Linux",
    ],
    // AI & Automation
    ai: [
      "MCP (Model Context Protocol)",
      "n8n Workflow Automation",
      "OpenAI Integration",
      "Google Gemini",
      "AI Agents",
    ],
    // All skills combined (for Schema.org)
    all: [
      "Python",
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Go",
      "React",
      "Next.js",
      "TypeScript",
      "PostgreSQL",
      "Docker",
      "Git",
      "MCP",
      "n8n",
      "OpenAI",
      "Gemini",
      "REST API Development",
      "Full-Stack Development",
      "Web Development",
      "Telegram Bot Development",
      "AI Integration",
      "Microservices",
      "Test-Driven Development",
    ],
  },

  // Images
  images: {
    logo: "/images/alekgirdev_logo.png",
    ogImage: "/images/alekgirdev_logo.png",
    video: "/images/alekgirdev.mp4",
  },
} as const;

// Type exports for TypeScript support (Liskov Substitution Principle)
export type SEOConfig = typeof SEO_CONFIG;
export type SEOKeywords = typeof SEO_CONFIG.keywords;
export type SEOAchievements = typeof SEO_CONFIG.achievements;
