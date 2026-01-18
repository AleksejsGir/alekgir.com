import type { Project } from './types';

export const socialNetwork: Project = {
  id: 6,
  name: "Social Network Platform",
  category: "Social Community",
  slug: "social-network",
  description: "Real-time social network SPA with React and async FastAPI backend",
  fullDescription: "A modern social networking single-page application built with React and FastAPI. Designed for real-time interactions at scale with async Python backend handling concurrent connections efficiently.\n\nKey features include WebSocket-based direct messaging with typing indicators, image and video sharing with S3-compatible storage, friend connection system, notification engine with real-time delivery, and infinite scroll content feed.\n\nTechnical highlights: async FastAPI with WebSocket support, PostgreSQL with asyncpg for non-blocking queries, Redis caching reducing database load by 70%, CDN integration for media delivery, and 75%+ test coverage with pytest-asyncio.",
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
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2024-01-13T08:00:00+00:00",
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
};
