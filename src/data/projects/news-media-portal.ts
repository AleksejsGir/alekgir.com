import type { Project } from './types';

export const newsMediaPortal: Project = {
  id: 2,
  name: "News & Media Portal",
  category: "Content Platform",
  slug: "news-media-portal",
  description: "Server-side rendered news platform with Django templates and SEO optimization",
  fullDescription: "A traditional server-side rendered news portal built with Django. Designed for SEO-optimized content delivery with focus on search engine rankings and fast page loads.\n\nKey features include rich text editor with django-ckeditor for article publishing, advanced categorization and tagging system, user comments with moderation, and newsletter subscriptions with Celery async delivery.\n\nTechnical highlights: Django template inheritance for maintainable layouts, PostgreSQL full-text search with ranking algorithm, Redis caching reducing database queries by 70%, and responsive Bootstrap 5 design with dark mode support.",
  challenge: "Creating a fast, SEO-friendly content platform that handles high article volumes while providing excellent user experience for both content creators and readers, with optimal search engine rankings.",
  solution: "Leveraged Django's template engine for server-side rendering ensuring perfect SEO, implemented PostgreSQL full-text search for article discovery, used Redis caching for frequently accessed content, built responsive layouts with Bootstrap 5, and optimized performance with template fragment caching.",
  frontend: ["Django Templates", "Bootstrap 5", "JavaScript", "HTMX"],
  backend: ["Django", "PostgreSQL", "Redis", "Celery"],
  features: [
    "Server-side rendered pages",
    "django-ckeditor for publishing",
    "PostgreSQL full-text search",
    "User comments with Django forms",
    "Newsletter with Celery tasks",
    "SEO optimization & sitemaps",
    "Bootstrap responsive design",
    "Template fragment caching"
  ],
  metrics: "90+ SEO score, 70%+ test coverage, server-side rendering",
  mockupImage: "/projects/social_media.mp4",
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2024-01-10T08:00:00+00:00",
  projectDuration: "2.5 months",
  teamSize: "Solo Developer",

  implementation: [
    {
      title: "Django Template Architecture",
      description: "Built server-side rendered pages using Django template engine with template inheritance for consistent layouts. Created base templates with blocks for content customization. Implemented custom template tags and filters for dynamic content rendering. Used template fragment caching for sidebar widgets. Applied semantic HTML5 for accessibility and SEO benefits."
    },
    {
      title: "Content Management with django-ckeditor",
      description: "Integrated django-ckeditor for rich text article editing. Created custom Django models with RichTextField for article content. Implemented slug-based URLs for SEO-friendly permalinks. Built custom Django admin interface with inline editing. Applied image upload handling with Django's FileField. Created article preview functionality before publishing."
    },
    {
      title: "PostgreSQL Full-Text Search",
      description: "Implemented PostgreSQL full-text search with SearchVector and SearchQuery. Created custom search ranking algorithm weighing title matches higher than content. Built search views using Django's Q objects for complex queries. Applied database indexes on search vectors for performance. Added autocomplete suggestions using trigram similarity."
    },
    {
      title: "Caching & Performance",
      description: "Implemented multi-layer caching with Redis for article lists and category pages. Used Django's cache framework with timeout-based invalidation. Applied template fragment caching for repeated elements. Set up cache warming with Celery periodic tasks for popular content. Reduced database queries by 70% with strategic caching."
    },
    {
      title: "Bootstrap Responsive Design",
      description: "Built responsive layouts using Bootstrap 5 grid system and components. Implemented dark mode with CSS variables and localStorage persistence. Created mobile-first navigation with Bootstrap navbar. Applied Bootstrap forms for user comments. Used Bootstrap utilities for spacing and typography. Ensured cross-browser compatibility."
    },
    {
      title: "Testing & SEO",
      description: "Maintained 70%+ test coverage with Django TestCase. Tested templates, views, and models. Configured Django SEO framework with dynamic meta tags. Generated XML sitemaps with django-sitemaps. Implemented Open Graph and Twitter Card tags. Created robots.txt and canonical URLs. Achieved 90+ SEO score with structured data."
    }
  ],

  keyResults: [
    "Achieved 90+ SEO score with server-side rendering and structured data",
    "Reduced page load time with Django template caching and Redis",
    "Maintained 70%+ test coverage across Django application",
    "Implemented efficient full-text search with PostgreSQL",
    "Built scalable content architecture with Django CMS patterns",
    "Created responsive design with Bootstrap 5 and dark mode support"
  ]
};
