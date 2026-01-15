import type { Project } from './types';

export const saasDashboard: Project = {
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
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2024-01-14T08:00:00+00:00",
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
};
