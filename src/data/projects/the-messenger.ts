import type { Project } from './types';

export const theMessenger: Project = {
  id: 10,
  name: "The Messenger",
  category: "Social Community",
  slug: "the-messenger",
  description: "Professional networking platform with AI-powered concierge service and smart filtering",
  fullDescription: "A modern professional networking platform built with Next.js 15 and Go backend. Designed for entrepreneurs, professionals, and builders seeking meaningful connections over noise.\n\nKey features include AI-powered concierge service for filtering incoming requests, human-verified profiles, and community events organization.\n\nTechnical highlights: Telegram and WhatsApp integrations, vector-based semantic search with Weaviate, and Microsoft Presidio for enterprise-grade data privacy.",
  liveUrls: ["https://themessenger.ae", "https://receive.themessenger.ae"],
  challenge: "Building a scalable networking platform that filters spam and low-quality interactions while maintaining genuine human connections, integrating multiple messaging platforms, and ensuring data privacy compliance with AI-assisted verification.",
  solution: "Implemented Go backend with Clean Architecture for maintainability and scalability. Used Weaviate vector database for semantic profile matching. Integrated Microsoft Presidio for sensitive data anonymization. Built React 19 frontend with Next.js 15 App Router. Applied Ory Kratos for secure authentication. Created Telegram and WhatsApp integrations for seamless communication.",
  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "TanStack Query", "Zustand"],
  backend: ["Go", "PostgreSQL", "Weaviate", "Presidio", "Kratos", "OpenAI API", "Docker"],
  features: [
    "AI-powered concierge filtering",
    "Human-verified profiles",
    "Community events organization",
    "Telegram & WhatsApp integration",
    "Vector-based semantic search",
    "Data privacy with Presidio",
    "Real-time notifications",
    "Secure Kratos authentication"
  ],
  mockupImage: "/projects/TheMessenger.mp4",
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2025-01-15T08:00:00+00:00",
  projectDuration: "6 months",
  teamSize: "RIZQ Launcher Team",
  isNew: true,

  implementation: [
    {
      title: "Go Backend with Clean Architecture",
      description: "Built scalable REST API using Go with Clean Architecture principles. Implemented domain-driven design with clear separation of concerns: controllers, domain models, contracts (interfaces), and services. Used dependency injection for testability. Created middleware for authentication, error handling, and request tracing. Applied structured logging and graceful shutdown patterns."
    },
    {
      title: "Vector Search with Weaviate",
      description: "Integrated Weaviate vector database for semantic profile matching and intelligent search. Implemented embedding generation for user profiles and interests. Built similarity search for finding compatible connections. Created hybrid search combining vector similarity with traditional filters. Optimized query performance with proper indexing strategies."
    },
    {
      title: "AI Concierge Service",
      description: "Developed AI-powered filtering system using OpenAI API for incoming connection requests. Implemented intent classification to separate genuine networking from spam. Built automated response suggestions for common inquiries. Created quality scoring algorithm for prioritizing meaningful interactions. Applied rate limiting and abuse prevention mechanisms."
    },
    {
      title: "Messaging Platform Integrations",
      description: "Built Telegram and WhatsApp integrations for seamless communication. Implemented QR-based authentication for messenger linking. Created message synchronization between platforms. Built notification routing based on user preferences. Applied end-to-end encryption for sensitive communications. Developed webhook handlers for real-time message processing."
    },
    {
      title: "Next.js 15 Frontend",
      description: "Built modern SPA with Next.js 15 App Router and React 19. Implemented server components for optimal performance. Used TanStack Query for efficient data fetching with caching. Applied Zustand for lightweight state management. Created accessible UI with Radix UI primitives. Built responsive design with Tailwind CSS 4. Implemented real-time updates with optimistic UI patterns."
    },
    {
      title: "Security & Privacy",
      description: "Integrated Ory Kratos for enterprise-grade authentication with OAuth support. Implemented Microsoft Presidio for automatic PII detection and anonymization. Built role-based access control for admin features. Applied secure session management with JWT tokens. Created audit logging for compliance requirements. Deployed with Docker on Railway with proper secrets management."
    }
  ],

  keyResults: [
    "Launched beta platform for professional networking in UAE market",
    "Implemented AI filtering reducing spam interactions by 90%",
    "Built seamless Telegram and WhatsApp integration for communication",
    "Achieved sub-100ms semantic search with Weaviate vector database",
    "Ensured GDPR compliance with Microsoft Presidio data anonymization",
    "Deployed scalable infrastructure with Docker and Railway"
  ]
};
