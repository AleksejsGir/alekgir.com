import type { Project } from '@/types';

export const projects: Project[] = [
  {
    id: 1,
    name: "E-Commerce Platform",
    category: "E-Commerce Solution",
    slug: "e-commerce-platform",
    description: "Modern SPA e-commerce platform with React frontend and async FastAPI backend",
    fullDescription: "A high-performance e-commerce single-page application built with React and FastAPI. Features async Python backend for handling payment processing and high-traffic loads, comprehensive product catalog with advanced filtering, real-time inventory tracking, secure Stripe integration with webhooks, and responsive TypeScript frontend for optimal user experience.",
    challenge: "Building a scalable e-commerce platform that handles complex product catalogs and payment processing while maintaining fast performance under high concurrent user loads and ensuring secure transactions.",
    solution: "Implemented FastAPI with async/await patterns for non-blocking payment processing, utilized Pydantic schemas for data validation, built React SPA with TypeScript for type safety, integrated Stripe webhooks with async handlers, deployed with Docker, and used PostgreSQL with asyncpg for async database operations.",
    frontend: ["React 18", "TypeScript", "Tailwind CSS", "Redux Toolkit", "Axios"],
    backend: ["FastAPI", "Python (Async)", "PostgreSQL", "asyncpg", "Redis", "Stripe API"],
    features: [
      "React SPA with client-side routing",
      "Async FastAPI REST endpoints",
      "Stripe payment with webhooks",
      "Real-time inventory tracking",
      "JWT authentication",
      "Shopping cart with Redux",
      "Product search & filtering",
      "Responsive mobile-first design"
    ],
    metrics: "95+ Lighthouse score, async payment processing, < 2s page load",
    mockupImage: "/projects/E-Commerce.mp4",
    projectDuration: "3 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "FastAPI Async Architecture",
        description: "Built RESTful API using FastAPI with async/await patterns for non-blocking I/O operations. Implemented Pydantic models for request/response validation ensuring type safety. Created async route handlers for product catalog, orders, and payments. Used dependency injection for database sessions and authentication. Applied automatic API documentation with OpenAPI/Swagger."
      },
      {
        title: "Async Database with PostgreSQL",
        description: "Configured PostgreSQL with asyncpg driver for async database operations. Implemented SQLAlchemy 2.0 with async support for ORM functionality. Created database connection pooling for efficient resource usage. Built Alembic migrations for schema version control. Applied database indexes on product name, category, and price for search performance."
      },
      {
        title: "Stripe Async Payment Integration",
        description: "Integrated Stripe Payment Intents API with async webhook handlers in FastAPI. Implemented background tasks with asyncio for payment confirmation processing. Built idempotency keys to prevent duplicate charges. Created order reconciliation system syncing payment status asynchronously. Applied comprehensive error handling with user-friendly responses."
      },
      {
        title: "React SPA Frontend",
        description: "Built single-page application with React 18 and TypeScript for type safety. Implemented Redux Toolkit for state management with normalized data structure. Used React Router for client-side navigation. Created API service layer with axios for backend communication. Applied React Query for efficient data fetching and caching. Built responsive UI with Tailwind CSS."
      },
      {
        title: "Real-Time Features & Caching",
        description: "Implemented WebSocket connection with FastAPI for real-time inventory updates. Used Redis for caching product catalog and session data reducing database load by 60%. Applied optimistic UI updates in React for better user experience. Created background tasks with FastAPI BackgroundTasks for async email notifications."
      },
      {
        title: "Testing & Performance",
        description: "Achieved 75%+ test coverage using pytest with pytest-asyncio for async testing. Implemented unit tests for business logic, integration tests for API endpoints. Used httpx for async API testing. Applied load testing with locust. Optimized React bundle with code splitting and lazy loading. Achieved 95+ Lighthouse performance score."
      }
    ],

    keyResults: [
      "Achieved 95+ Lighthouse performance score with React SPA optimization",
      "Maintained 75%+ test coverage with pytest and pytest-asyncio",
      "Built async payment processing with FastAPI reducing response time by 50%",
      "Implemented real-time inventory updates with WebSocket",
      "Reduced database load by 60% with Redis caching strategy",
      "Deployed with Docker for consistent development and production environments"
    ]
  },
  {
    id: 9,
    name: "N8N Complex Agent Workflow",
    category: "AI Workflow Automation",
    slug: "n8n-complex-agent-workflow",
    description: "Enterprise workflow automation with n8n, AI agents, and MCP integration",
    fullDescription: "An advanced workflow automation platform built with n8n orchestrating complex AI agent interactions. Features Model Context Protocol (MCP) integration for AI tool access, custom Python nodes for specialized logic, multi-agent coordination with OpenAI and Claude, real-time monitoring dashboard, PostgreSQL for workflow state persistence, Redis-based queue management, and comprehensive error handling with automatic retries.",
    challenge: "Orchestrating multiple AI agents with different capabilities while maintaining reliable workflow execution, handling API rate limits, managing state across long-running processes, and ensuring data consistency in distributed automation scenarios.",
    solution: "Leveraged n8n's visual workflow builder with custom nodes for AI agent coordination. Implemented MCP servers for standardized AI tool access. Built Python nodes for complex business logic and data transformations. Applied PostgreSQL for durable state management. Used Redis for distributed locking and queue coordination. Deployed containerized architecture with Docker for scalability.",
    frontend: ["n8n Workflow Editor", "React Dashboard", "TypeScript", "Chart.js", "Tailwind CSS"],
    backend: ["n8n", "Python", "MCP Servers", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Multi-agent AI orchestration",
      "MCP protocol integration",
      "Custom Python workflow nodes",
      "Real-time execution monitoring",
      "PostgreSQL state persistence",
      "Webhook & API triggers",
      "Error handling with retries",
      "Distributed workflow execution"
    ],
    metrics: "MCP integration, multi-agent coordination, 99.5% uptime",
    mockupImage: "/projects/N8N_Complex_Agent_Workflow.mp4",
    projectDuration: "2.5 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "n8n Workflow Architecture",
        description: "Built complex workflows using n8n's visual editor with conditional branching and loops. Created reusable sub-workflows for common patterns like error handling and API retry logic. Implemented environment-based configuration for development and production workflows. Applied webhook triggers for external system integration. Used n8n's built-in nodes for HTTP requests, data transformation, and scheduling. Configured workflow execution settings for optimal performance and reliability."
      },
      {
        title: "MCP Integration for AI Tools",
        description: "Integrated Model Context Protocol (MCP) servers enabling AI agents to access external tools and data sources. Built custom MCP server implementations in Python for database queries and API interactions. Created n8n HTTP nodes for MCP client communication following the protocol specification. Implemented tool discovery and execution workflows. Applied proper authentication and authorization for MCP endpoints. Enabled Claude and other AI models to perform actions through standardized interfaces."
      },
      {
        title: "Multi-Agent Coordination",
        description: "Orchestrated multiple AI agents (OpenAI GPT-4, Claude Sonnet) for complex task decomposition. Implemented agent-to-agent communication patterns with structured message passing. Built decision trees routing tasks to appropriate agents based on capabilities. Created prompt engineering system for consistent agent behavior. Applied result validation and quality checks between agent handoffs. Used Redis for agent state synchronization in parallel workflows."
      },
      {
        title: "Custom Python Nodes",
        description: "Developed custom n8n nodes in Python for specialized business logic and data processing. Created nodes for advanced data transformations beyond built-in capabilities. Implemented external API integrations not available in standard n8n nodes. Built custom error handling and logging within Python nodes. Applied pandas for complex data manipulation. Used pydantic for input/output validation ensuring data integrity across workflow steps."
      },
      {
        title: "State Management & Monitoring",
        description: "Configured PostgreSQL as n8n execution database for workflow state persistence. Built custom monitoring dashboard with React showing real-time workflow execution status. Implemented metrics collection for workflow performance, success rates, and error tracking. Created alerting system for failed executions with notifications. Applied workflow versioning for safe updates. Used Chart.js for visualization of execution patterns and bottlenecks."
      },
      {
        title: "Production Deployment & Reliability",
        description: "Deployed n8n in Docker containers with PostgreSQL and Redis for production reliability. Implemented queue mode with multiple worker nodes for scalable workflow execution. Applied health checks and automatic container restart on failures. Built backup strategy for workflow definitions and execution history. Configured rate limiting and retry mechanisms for external API calls. Achieved 99.5% uptime with proper monitoring and incident response procedures."
      }
    ],

    keyResults: [
      "Successfully orchestrated complex multi-agent workflows with MCP integration",
      "Built custom Python nodes extending n8n capabilities for specialized use cases",
      "Achieved 99.5% uptime with distributed architecture and error handling",
      "Reduced manual processing time by 85% through workflow automation",
      "Implemented reliable state management with PostgreSQL and Redis",
      "Deployed scalable solution handling 1000+ daily workflow executions"
    ]
  },
  {
    id: 2,
    name: "News & Media Portal",
    category: "Content Platform",
    slug: "news-media-portal",
    description: "Server-side rendered news platform with Django templates and SEO optimization",
    fullDescription: "A traditional server-side rendered news portal built with Django. Features Django template system for SEO-optimized content delivery, rich text editor with django-ckeditor for article publishing, advanced categorization and tagging, user comments system, newsletter subscriptions, and responsive Bootstrap design with dark mode support.",
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
  },
  {
    id: 3,
    name: "Enterprise Telegram Solutions",
    category: "Automation & Bots",
    slug: "enterprise-telegram-bots",
    description: "Portfolio of 23 production Telegram bots for business automation and customer engagement",
    fullDescription: "A comprehensive portfolio of 23 production-ready Telegram bots built for diverse business needs over 3 years of freelance development. Includes 15 automated notification and workflow systems, and 8 complex multi-functional platforms with PostgreSQL database integration, payment processing, and async task execution. These Python-powered bots handle thousands of daily user interactions and automate critical business processes.",
    challenge: "Managing concurrent state for thousands of users across multiple asynchronous bot instances while ensuring reliability, scalability, and maintaining clean architecture principles for long-term maintainability.",
    solution: "Leveraged Python's asyncio with aiogram and python-telegram-bot libraries for efficient non-blocking execution. Integrated PostgreSQL for robust state management and user data persistence. Implemented FSM (Finite State Machine) pattern for conversation flows. Deployed scalable worker nodes using Docker with proper logging and error handling.",
    frontend: ["Telegram Bot API", "Inline Keyboards", "Telegram Web App"],
    backend: ["Python (Async)", "aiogram", "python-telegram-bot", "PostgreSQL", "Redis", "Docker"],
    features: [
      "Async message processing",
      "FSM conversation flows",
      "PostgreSQL state persistence",
      "Telegram Payments API",
      "Inline keyboard navigation",
      "Scheduled broadcasts with Celery",
      "Admin dashboard with Django",
      "Webhook-based deployment"
    ],
    metrics: "23 bots shipped, 3 years production experience, async Python",
    mockupImage: "/projects/chat_bot.mp4",
    projectDuration: " 3 weeks ",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "Async Python with aiogram",
        description: "Built all bots using Python's asyncio with aiogram framework for Telegram Bot API. Implemented non-blocking I/O operations to handle thousands of concurrent users efficiently. Used async/await patterns for database queries, API calls, and message processing. Applied proper exception handling and logging for production reliability. Maintained clean code structure with separation of handlers, keyboards, and business logic."
      },
      {
        title: "Finite State Machine Implementation",
        description: "Implemented FSM pattern for complex conversation flows using aiogram's state management. Designed state diagrams for multi-step processes like registration, ordering, and payment flows. Used PostgreSQL for persistent state storage across bot restarts. Applied timeout mechanisms for abandoned conversations. Created reusable state handlers for common workflows across multiple bots."
      },
      {
        title: "PostgreSQL Database Integration",
        description: "Designed normalized PostgreSQL schemas for user data, transactions, and bot settings. Used SQLAlchemy ORM with async support (asyncpg) for database operations. Implemented connection pooling for efficient resource usage. Created database migrations with Alembic for version control. Built admin dashboards with Django for database management and analytics visualization."
      },
      {
        title: "Telegram Payments Integration",
        description: "Integrated Telegram Payments API for in-bot purchases with multiple payment providers. Implemented secure payment flow with order validation and webhook handling. Built invoice generation and receipt delivery systems. Created refund processing and transaction reconciliation. Applied proper error handling for failed payments with user notifications and retry logic."
      },
      {
        title: "Docker Deployment & DevOps",
        description: "Deployed bots in Docker containers for consistent environments across development and production. Implemented webhook-based architecture for production deployment (vs polling for development). Set up reverse proxy with nginx for webhook endpoints. Configured systemd services for automatic restart on failures. Used Docker Compose for multi-container setups with PostgreSQL and Redis."
      },
      {
        title: "Testing & Maintenance",
        description: "Maintained test coverage with pytest and pytest-asyncio for async testing. Created mock Telegram API for integration testing without hitting live API. Implemented health check endpoints for monitoring. Set up alerting for bot failures and errors. Used pre-commit hooks for code quality (black, flake8, mypy). Provided long-term maintenance and feature updates for client projects."
      }
    ],

    keyResults: [
      "Successfully delivered 23 production bots over 3 years of freelance work",
      "Built 15 simple automation systems and 8 complex multi-functional platforms",
      "Handled thousands of daily user interactions with async Python architecture",
      "Maintained 100% uptime for critical business automation bots",
      "Implemented robust state management with PostgreSQL and FSM patterns",
      "Deployed all bots in Docker containers with proper monitoring and logging"
    ]
  },
  {
    id: 4,
    name: "Client Portfolio Bundle",
    category: "Web Development",
    slug: "client-portfolio-bundle",
    description: "Collection of 12 server-side rendered business websites with Django templates",
    fullDescription: "A curated portfolio of 12 professional websites delivered for freelance clients over 3 years. Each project built with Django server-side rendering for optimal SEO performance. Technologies include Django template system with Bootstrap 5 and Tailwind CSS for responsive design, Django forms for contact and lead generation, custom CMS integration for client content management, and comprehensive SEO optimization.",
    challenge: "Delivering unique, high-quality designs for diverse clients within strict deadlines while ensuring top-tier performance scores, SEO rankings, and maintaining professional code quality standards across all projects.",
    solution: "Developed reusable Django template system with template inheritance to accelerate delivery without compromising quality. Implemented automated audit pipelines using Lighthouse CI to guarantee 90+ performance standards. Applied modern CSS with Bootstrap and Tailwind for rapid responsive development. Used Git for version control and proper deployment workflows.",
    frontend: ["Django Templates", "Bootstrap 5", "Tailwind CSS", "JavaScript", "jQuery"],
    backend: ["Django", "PostgreSQL", "Django CMS"],
    features: [
      "Server-side rendered pages",
      "Django template inheritance",
      "Bootstrap & Tailwind responsive",
      "Django forms for contacts",
      "Django CMS integration",
      "SEO optimization & meta tags",
      "90+ Lighthouse scores",
      "Google Analytics integration"
    ],
    metrics: "12 sites delivered, 90+ avg Lighthouse score, SSR for SEO",
    mockupImage: "/projects/Resume_Website.mp4",
    projectDuration: "4 weeks",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "Django Template System",
        description: "Built reusable template architecture with Django template inheritance. Created base templates with blocks for header, content, and footer customization. Implemented custom template tags for dynamic navigation and breadcrumbs. Used template context processors for global data. Applied template fragment caching for repeated elements. Maintained DRY principle with include tags for reusable components."
      },
      {
        title: "Responsive Design with Bootstrap & Tailwind",
        description: "Implemented responsive layouts using Bootstrap 5 grid system and utility classes. Applied Tailwind CSS for custom designs requiring more flexibility. Created mobile-first navigation with Bootstrap navbar and offcanvas. Used Bootstrap components (cards, modals, forms) for rapid development. Implemented dark mode support with CSS variables. Ensured cross-browser compatibility and accessibility."
      },
      {
        title: "Django Forms & Lead Generation",
        description: "Built contact forms using Django forms framework with server-side validation. Implemented CSRF protection for form security. Created ModelForms for database-backed forms. Added email notifications using Django's email backend with SMTP. Integrated Google reCAPTCHA for spam protection. Built lead tracking with Django admin. Applied client-side validation with JavaScript for better UX."
      },
      {
        title: "SEO & Performance Optimization",
        description: "Achieved 90+ average Lighthouse scores with server-side rendering. Configured comprehensive SEO with Django SEO framework and custom meta tags. Generated dynamic XML sitemaps with django-sitemaps. Implemented structured data (JSON-LD) for rich snippets. Optimized images with lazy loading and WebP format. Minified CSS/JS with Django Compressor. Applied browser caching and Gzip compression."
      },
      {
        title: "Django CMS Integration",
        description: "Integrated Django CMS for complex sites requiring client content management. Built custom CMS plugins for specialized content blocks. Created intuitive admin interface with Django's admin customization. Implemented WYSIWYG editors with django-ckeditor. Set up user permissions and role-based access control. Provided client training on content management."
      },
      {
        title: "Deployment & Client Support",
        description: "Deployed sites using various hosting platforms (PythonAnywhere, Heroku, DigitalOcean). Configured production settings with environment variables for security. Set up SSL certificates for HTTPS. Provided comprehensive documentation for clients. Created deployment scripts for easy updates. Maintained long-term client relationships with ongoing support and feature updates."
      }
    ],

    keyResults: [
      "Successfully delivered 12 professional websites over 3 years",
      "Achieved 90+ average Lighthouse performance score with SSR",
      "Maintained 100% client satisfaction with timely delivery and quality",
      "Built reusable Django template system reducing development time by 40%",
      "Implemented SEO best practices resulting in top search rankings",
      "Provided ongoing maintenance and support for long-term client relationships"
    ]
  },
  {
    id: 5,
    name: "SaaS Dashboard",
    category: "Software-as-a-Service",
    slug: "saas-dashboard",
    description: "React SPA dashboard with Django REST Framework API and real-time features",
    fullDescription: "A production-ready SaaS dashboard single-page application built with React and Django REST Framework. Features interactive data visualizations with Chart.js, real-time updates via Django Channels WebSocket, customizable dashboard widgets with drag-and-drop, comprehensive role-based access control, export functionality for reports (PDF, CSV), and professional dark/light theme support.",
    challenge: "Building a performant multi-tenant SaaS dashboard that handles large datasets, provides real-time updates, maintains smooth user experience with complex visualizations, and implements secure role-based access control.",
    solution: "Implemented Django REST Framework for robust API architecture with ViewSets and serializers. Built React SPA with TypeScript for type safety. Integrated Django Channels for WebSocket real-time updates. Optimized database queries with PostgreSQL. Applied JWT authentication with refresh tokens. Deployed with Docker for scalability.",
    frontend: ["React 18", "TypeScript", "Chart.js", "Recharts", "Tailwind CSS", "Redux Toolkit"],
    backend: ["Django REST Framework", "PostgreSQL", "Redis", "Django Channels", "Celery"],
    features: [
      "React SPA with TypeScript",
      "Django REST API endpoints",
      "Real-time updates via Channels",
      "Chart.js visualizations",
      "Role-based access control",
      "PDF & CSV export",
      "Multi-tenant architecture",
      "Dark/Light theme"
    ],
    metrics: "80%+ test coverage, Django REST API, real-time WebSocket",
    mockupImage: "/projects/SaaS_Dashboard.mp4",
    projectDuration: "4 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "Django REST Framework API",
        description: "Built RESTful API using Django REST Framework with ViewSets for clean CRUD operations. Implemented serializers for data validation and transformation. Created custom permission classes for role-based access control. Applied pagination and filtering for large datasets. Used djangorestframework-simplejwt for JWT authentication. Generated automatic API documentation with drf-spectacular."
      },
      {
        title: "React SPA with TypeScript",
        description: "Built single-page application with React 18 and TypeScript for type safety. Implemented Redux Toolkit for state management with RTK Query for API caching. Used React Router for client-side navigation. Created reusable component library with TypeScript interfaces. Applied React Hook Form for form handling. Built responsive layouts with Tailwind CSS and dark mode support."
      },
      {
        title: "Real-Time Updates with Django Channels",
        description: "Integrated Django Channels for WebSocket support enabling real-time dashboard updates. Implemented channel layers with Redis for message passing between workers. Created async consumers for handling WebSocket connections. Built notification system broadcasting updates to connected clients. Applied JWT authentication for WebSocket connections. Used React hooks for WebSocket state management."
      },
      {
        title: "Data Visualization with Chart.js",
        description: "Integrated Chart.js for interactive charts (line, bar, pie, doughnut) with React wrapper library. Created reusable chart components with TypeScript props. Implemented responsive chart sizing adapting to container dimensions. Applied custom color schemes matching brand identity. Built drill-down functionality for detailed data analysis. Optimized chart rendering performance with React.memo."
      },
      {
        title: "Multi-Tenant Architecture & RBAC",
        description: "Designed multi-tenant architecture with tenant-specific data isolation in PostgreSQL. Implemented custom Django middleware for tenant resolution from subdomain/header. Created comprehensive RBAC system with Django's permissions framework. Built organization hierarchy with team-based access control. Applied object-level permissions for fine-grained access. Created admin interface for managing roles and permissions."
      },
      {
        title: "Testing & Performance",
        description: "Achieved 80%+ test coverage using pytest for Django backend and Jest for React frontend. Implemented API integration tests with Django's APIClient. Created component tests with React Testing Library. Applied database query optimization with select_related and prefetch_related. Configured Redis caching for frequently accessed data. Optimized React bundle with code splitting and lazy loading."
      }
    ],

    keyResults: [
      "Achieved 80%+ test coverage across Django backend and React frontend",
      "Built scalable multi-tenant architecture with tenant data isolation",
      "Implemented real-time updates with Django Channels and WebSocket",
      "Created efficient API with Django REST Framework and JWT auth",
      "Reduced API response time by 60% with Redis caching strategy",
      "Deployed production-ready SPA with Docker and proper CI/CD"
    ]
  },
  {
    id: 6,
    name: "Social Network Platform",
    category: "Social Community",
    slug: "social-network",
    description: "Real-time social network SPA with React and async FastAPI backend",
    fullDescription: "A modern social networking single-page application built with React and FastAPI. Features async Python backend for handling real-time interactions at scale, WebSocket-based messaging system, image and video sharing with secure storage, friend connection graph, notification engine with real-time delivery, content feed with infinite scroll, and comprehensive privacy controls.",
    challenge: "Creating a scalable social platform that handles real-time interactions, media uploads, complex user relationships, and maintains high performance while ensuring data security and privacy compliance.",
    solution: "Built async FastAPI backend with WebSocket support for real-time messaging. Implemented React SPA with TypeScript and Redux for state management. Used PostgreSQL with asyncpg for async database operations. Integrated S3-compatible storage for media files. Applied Celery for background tasks. Optimized with Redis caching and database indexing.",
    frontend: ["React 18", "TypeScript", "Redux Toolkit", "Socket.io Client", "Tailwind CSS"],
    backend: ["FastAPI", "Python (Async)", "PostgreSQL", "asyncpg", "Redis", "WebSocket"],
    features: [
      "React SPA with client routing",
      "FastAPI async REST endpoints",
      "WebSocket real-time messaging",
      "Image/Video upload handling",
      "Friend connection system",
      "Real-time notifications",
      "Infinite scroll feed",
      "Privacy settings & controls"
    ],
    metrics: "75%+ test coverage, async WebSocket, real-time features",
    mockupImage: "/projects/social_network.mp4",
    projectDuration: "5 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "FastAPI Async Backend",
        description: "Built async REST API using FastAPI with async/await patterns for non-blocking operations. Implemented Pydantic models for request/response validation. Created async route handlers for posts, comments, and user profiles. Used dependency injection for database sessions and authentication. Applied automatic API documentation with OpenAPI. Configured CORS for React SPA communication."
      },
      {
        title: "WebSocket Real-Time Messaging",
        description: "Implemented WebSocket endpoints in FastAPI for real-time direct messaging. Created async message handlers for concurrent chat connections. Built message persistence with PostgreSQL using async queries. Implemented typing indicators and read receipts. Used Redis for WebSocket connection management and message queuing. Applied JWT authentication for WebSocket connections."
      },
      {
        title: "React SPA with Redux",
        description: "Built single-page application with React 18 and TypeScript. Implemented Redux Toolkit for global state management including user auth, posts, and messages. Used RTK Query for API data fetching with caching. Created WebSocket integration with Redux for real-time state updates. Applied React Router for client-side navigation. Built responsive UI with Tailwind CSS."
      },
      {
        title: "Async Database with PostgreSQL",
        description: "Configured PostgreSQL with asyncpg driver for async database operations. Implemented SQLAlchemy 2.0 with async support for ORM. Created database models for Users, Posts, Comments, Messages, and Friendships. Built many-to-many relationships for friend connections. Applied database indexes on foreign keys and frequently queried fields. Used Alembic for async migrations."
      },
      {
        title: "Media Handling & Storage",
        description: "Integrated S3-compatible storage backend for scalable media handling. Implemented async file upload endpoints in FastAPI with multipart form data. Created image processing with Pillow for thumbnail generation. Applied video upload validation and size limits. Built secure media serving with signed URLs. Implemented CDN for media delivery reducing load times."
      },
      {
        title: "Testing & Performance",
        description: "Achieved 75%+ test coverage with pytest and pytest-asyncio for async testing. Implemented unit tests for business logic, integration tests for API endpoints. Used httpx for async API testing. Created React component tests with Jest and React Testing Library. Applied Redis caching for social feed reducing database queries by 70%. Optimized React performance with code splitting."
      }
    ],

    keyResults: [
      "Achieved 75%+ test coverage across FastAPI backend and React frontend",
      "Implemented real-time messaging with WebSocket and async Python",
      "Built scalable media handling with S3-compatible storage and CDN",
      "Created efficient social feed with Redis caching and pagination",
      "Reduced API response time by 70% with async database operations",
      "Deployed with Docker and proper environment separation"
    ]
  },
  {
    id: 7,
    name: "Real Estate Platform",
    category: "Property Management",
    slug: "real-estate-platform",
    description: "React SPA real estate platform with Django REST API and PostGIS geospatial search",
    fullDescription: "A comprehensive real estate single-page application built with React and Django REST Framework. Features advanced property search with multiple filters, PostgreSQL PostGIS integration for geospatial queries and map visualization, Google Maps API integration, virtual tour capabilities, agent management system, saved favorites and comparisons, booking system for property viewings, and detailed analytics dashboard.",
    challenge: "Building a user-friendly real estate platform that handles large property datasets with complex geospatial search criteria, provides rich media experiences for virtual tours, and maintains fast performance across all devices.",
    solution: "Implemented Django REST Framework API with PostGIS extension for geospatial capabilities. Built React SPA with TypeScript for type-safe frontend. Integrated Google Maps JavaScript API for interactive visualization. Applied PostgreSQL full-text search combined with spatial queries. Used Redis caching for frequently accessed listings. Optimized with proper database indexing.",
    frontend: ["React 18", "TypeScript", "Google Maps API", "Tailwind CSS", "Redux Toolkit"],
    backend: ["Django REST Framework", "PostgreSQL", "PostGIS", "Redis", "Celery"],
    features: [
      "React SPA with TypeScript",
      "Django REST API with PostGIS",
      "Geospatial radius search",
      "Google Maps integration",
      "Virtual tours (360° images)",
      "Agent profiles & management",
      "Booking system for viewings",
      "Property comparison tool"
    ],
    metrics: "PostGIS geospatial queries, < 2s search time, REST API",
    mockupImage: "/projects/Real_Estate.mp4",
    projectDuration: "3.5 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "Django REST API with PostGIS",
        description: "Built RESTful API using Django REST Framework with ViewSets for property CRUD operations. Configured PostgreSQL with PostGIS extension for geospatial capabilities. Created Django models with GeoDjango's PointField for property locations. Implemented serializers with geospatial field support. Applied custom API endpoints for radius search using PostGIS functions (ST_DWithin, ST_Distance)."
      },
      {
        title: "Geospatial Search Implementation",
        description: "Implemented radius-based property search using PostGIS spatial queries. Built distance calculation endpoints returning properties within specified kilometers. Created custom Django filters combining geospatial and traditional filters (price, bedrooms, type). Applied spatial indexes (GIST) on PointField for query optimization. Used Django Q objects for complex query composition with location, price, and amenities."
      },
      {
        title: "React SPA with Google Maps",
        description: "Built single-page application with React 18 and TypeScript. Integrated Google Maps JavaScript API for interactive property visualization. Implemented custom map markers with property previews. Created map clustering for dense areas with marker-clusterer-plus. Built search area drawing tools for polygon-based filtering. Applied geocoding API for address to coordinates conversion in search forms."
      },
      {
        title: "Property Management & Media",
        description: "Created Django REST API endpoints for property listings with image galleries. Implemented DRF serializers for nested property data including amenities and agent info. Built image upload handling with Django's FileField and S3-compatible storage. Created 360° virtual tour integration with iframe embedding. Applied image optimization with Pillow for thumbnail generation. Implemented pagination for property lists."
      },
      {
        title: "Booking System with Celery",
        description: "Built property viewing booking system with availability calendar. Implemented Django REST endpoints for booking creation and management. Created Celery tasks for async email notifications to agents and users. Applied timezone handling with Django's timezone utilities. Built booking confirmation workflow with email templates. Implemented reminder notifications 24 hours before scheduled viewings using Celery beat."
      },
      {
        title: "Testing & Performance",
        description: "Maintained test coverage with Django REST Framework's APITestCase. Tested geospatial queries with PostGIS test database. Created React component tests with Jest and Testing Library. Applied database query optimization using select_related and prefetch_related. Implemented Redis caching for property listings reducing response time by 65%. Optimized React with code splitting and lazy loading."
      }
    ],

    keyResults: [
      "Implemented efficient geospatial search with PostgreSQL PostGIS",
      "Achieved under 2 seconds search response time with optimization",
      "Built comprehensive filtering combining spatial and traditional queries",
      "Integrated Google Maps API for interactive property visualization",
      "Created booking system with automated notifications via Celery",
      "Deployed scalable REST API with proper caching and indexing"
    ]
  },
  {
    id: 8,
    name: "AI-Powered Analytics Dashboard",
    category: "Advanced Analytics",
    slug: "ai-analytics-dashboard",
    description: "React analytics SPA with async FastAPI backend and AI service integration",
    fullDescription: "An advanced analytics single-page application leveraging React and async FastAPI. Features integration with AI services (OpenAI GPT-4, Google Gemini) for intelligent insights, data analysis with pandas and NumPy, interactive visualizations with Plotly and Chart.js, automated report generation with Celery, PostgreSQL for data warehousing, async API endpoints for data processing, and comprehensive REST API for external integrations.",
    challenge: "Creating an analytics platform that processes complex datasets efficiently, provides AI-powered insights for business decision-making, maintains high performance with large data volumes, and presents data through intuitive visualizations.",
    solution: "Built async FastAPI backend with Pydantic schemas for data validation. Integrated OpenAI and Google Gemini APIs with async HTTP clients. Used pandas for data processing in background tasks. Implemented Celery for scheduled report generation. Built React SPA with Plotly for interactive visualizations. Applied PostgreSQL with async queries. Deployed with Docker for scalability.",
    frontend: ["React 18", "TypeScript", "Plotly", "Chart.js", "Tailwind CSS", "Redux Toolkit"],
    backend: ["FastAPI", "Python (Async)", "PostgreSQL", "asyncpg", "Redis", "Celery", "pandas"],
    features: [
      "React SPA with TypeScript",
      "FastAPI async REST endpoints",
      "OpenAI & Gemini API integration",
      "pandas data processing",
      "Interactive Plotly charts",
      "Automated Celery reports",
      "CSV & Excel export",
      "JWT authentication"
    ],
    metrics: "AI-powered insights, async data processing, Plotly visualizations",
    mockupImage: "/projects/AI-Powered.mp4",
    projectDuration: "4 months",
    teamSize: "Solo Developer",

    implementation: [
      {
        title: "FastAPI Async Backend",
        description: "Built async REST API using FastAPI with async/await patterns for non-blocking data processing. Implemented Pydantic models for analytics data validation and transformation. Created async route handlers for data ingestion, analysis, and visualization endpoints. Used dependency injection for database sessions and AI service clients. Applied automatic OpenAPI documentation with interactive Swagger UI."
      },
      {
        title: "AI Services Integration",
        description: "Integrated OpenAI GPT-4 API using httpx async client for natural language analysis and insight generation. Implemented Google Gemini API for additional AI capabilities. Built prompt engineering system for effective business insights. Created rate limiting and response caching with Redis to manage API costs. Applied error handling with fallback mechanisms. Used asyncio for parallel AI requests improving response time."
      },
      {
        title: "Data Processing with pandas",
        description: "Implemented data analysis pipeline using pandas for efficient data manipulation and transformation. Created Celery tasks for heavy data processing to avoid blocking API requests. Built aggregation functions for business metrics calculation. Applied time-series analysis for trend detection. Implemented data export functionality to CSV and Excel formats. Optimized memory usage with chunked data processing for large datasets."
      },
      {
        title: "React SPA with Plotly Visualizations",
        description: "Built single-page application with React 18 and TypeScript for type safety. Integrated Plotly.js for interactive data visualizations (scatter, line, bar, heatmap charts). Implemented Redux Toolkit for state management with analytics data. Used RTK Query for API data fetching with caching. Created responsive chart layouts with Tailwind CSS. Built drill-down functionality for detailed analysis."
      },
      {
        title: "Automated Reporting with Celery",
        description: "Implemented Celery for async task processing and scheduled report generation. Created periodic tasks with Celery beat for daily/weekly/monthly automated reports. Built PDF report generation using ReportLab with custom templates. Implemented email delivery system with SMTP for report distribution. Applied task result tracking and error handling with proper logging. Used Redis as Celery broker and result backend."
      },
      {
        title: "Database & Performance",
        description: "Configured PostgreSQL with asyncpg driver for async database operations. Implemented SQLAlchemy 2.0 with async support for analytics data models. Created database views for complex aggregations. Applied query optimization with proper indexing on analytics tables. Implemented Redis caching for frequently accessed analytics data. Achieved query response times under 500ms with optimization and caching."
      }
    ],

    keyResults: [
      "Successfully integrated OpenAI and Google Gemini APIs with async clients",
      "Built efficient data processing pipeline with pandas and Celery",
      "Created interactive visualizations with Plotly and React",
      "Implemented automated reporting system with scheduled Celery tasks",
      "Achieved fast query performance with async PostgreSQL and Redis caching",
      "Deployed scalable async FastAPI solution with Docker"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByCategory = (category: string): Project[] => {
  return projects.filter(project => project.category === category);
};
