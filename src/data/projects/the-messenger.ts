import type { Project } from './types';

export const theMessenger: Project = {
  id: 10,
  name: "The Messenger",
  category: "AI Platform & AgentOS",
  slug: "the-messenger",
  description: "AgentOS platform enabling service providers to create AI-powered tools with RAG, MCP integration, and n8n workflow orchestration",
  fullDescription: "A next-generation AgentOS platform built with Next.js 15 and Go backend. Designed to transform service providers into micro-AI companies by combining their proprietary data, workflows, and expertise into monetizable AI-powered tools.\n\nKey features include Rizq Tool system (RAG + Inputs + AI Prompt + REST/MCP endpoints), rich multi-modal output schema (charts, tables, markdown, code snippets), n8n workflow orchestration for complex automations, and Tool Marketplace with revenue sharing for community developers.\n\nTechnical highlights: MCP protocol integration for AI tool access, Weaviate vector database for semantic search, human-in-the-loop workflows, Microsoft Presidio for enterprise-grade data privacy, and Telegram/WhatsApp integrations for seamless communication.",
  liveUrls: ["https://themessenger.ae", "https://receive.themessenger.ae"],
  challenge: "Creating a platform that enables non-technical service providers to build and monetize AI-powered tools while maintaining enterprise-grade security, supporting complex multi-step workflows, and providing rich structured outputs for business intelligence.",
  solution: "Built Rizq Tool architecture combining RAG documents, user inputs, AI prompts, and optional REST/MCP external logic. Implemented Go backend with Clean Architecture for scalability. Created rich output schema rendering charts, tables, and code via React components. Integrated n8n for workflow orchestration. Applied Weaviate for semantic search and Microsoft Presidio for data anonymization.",
  frontend: ["Next.js 15", "React 19", "TypeScript", "Tailwind CSS 4", "Radix UI", "TanStack Query", "Zustand", "Chart.js", "React Markdown"],
  backend: ["Go", "PostgreSQL", "Weaviate", "n8n", "MCP Protocol", "Presidio", "Kratos", "OpenAI API", "Docker"],
  features: [
    "Rizq Tool system (RAG + AI + REST/MCP)",
    "Rich output schema (charts, tables, code)",
    "MCP protocol integration",
    "n8n workflow orchestration",
    "Tool Marketplace with monetization",
    "Human-in-the-loop workflows",
    "Vector-based semantic search",
    "Telegram & WhatsApp integration"
  ],
  mockupImage: "/projects/TheMessenger.mp4",
  videoThumbnail: "/images/alekgir_logo.JPG",
  videoUploadDate: "2025-01-15T08:00:00+00:00",
  projectDuration: "6 months",
  teamSize: "RIZQ Launcher Team",
  isNew: true,

  implementation: [
    {
      title: "Rizq Tool Architecture",
      description: "Designed unified tool specification combining RAG documents, user inputs, AI prompts, and optional REST/MCP external logic layers. Each tool collects input, retrieves context from RAG, calls external endpoints, injects responses into prompts, and generates LLM output. Implemented session-based state management with unique session_id for workflow persistence and billing tracking."
    },
    {
      title: "Rich Output Schema System",
      description: "Built multi-modal response rendering supporting markdown, tables, charts, and code snippets. Created standard JSON schema with blocks array that frontend renders via React components (react-markdown, Chart.js, tanstack/table, react-syntax-highlighter). Implemented summary + details toggle for mobile-friendly views. Added export functionality for CSV, PNG charts, and PDF reports."
    },
    {
      title: "MCP & REST Integration Layer",
      description: "Implemented Model Context Protocol (MCP) integration enabling AI agents to access external tools dynamically during conversations. Built REST endpoint system with HTTPS + signed JWT/HMAC for secure external logic calls. Created n8n workflow orchestration for complex multi-step automations including scraping, data enrichment, and scheduled tasks."
    },
    {
      title: "Go Backend with Clean Architecture",
      description: "Built scalable REST API using Go with Clean Architecture principles. Implemented domain-driven design with clear separation: controllers, domain models, contracts (interfaces), and services. Used dependency injection for testability. Created middleware for authentication, error handling, and request tracing. Applied structured logging and graceful shutdown patterns."
    },
    {
      title: "Next.js 15 Frontend with Tool Rendering",
      description: "Built modern SPA with Next.js 15 App Router and React 19. Implemented dynamic block rendering system for rich tool outputs. Used TanStack Query for efficient data fetching with caching. Applied Zustand for tool state management. Created accessible UI with Radix UI primitives. Built responsive design with Tailwind CSS 4 and Chart.js visualizations."
    },
    {
      title: "Security, Privacy & Developer Ecosystem",
      description: "Integrated Ory Kratos for enterprise-grade authentication. Implemented Microsoft Presidio for automatic PII detection and anonymization. Built Tool Marketplace with developer onboarding, verification system, and revenue sharing. Applied per-tool rate limiting and usage quotas. Created comprehensive audit logging for compliance and billing."
    }
  ],

  keyResults: [
    "Built AgentOS platform transforming service providers into micro-AI companies",
    "Implemented Rizq Tool system with RAG + AI + REST/MCP integration",
    "Created rich output schema rendering charts, tables, and code dynamically",
    "Integrated n8n workflow orchestration for complex automation scenarios",
    "Achieved sub-100ms semantic search with Weaviate vector database",
    "Launched Tool Marketplace with developer SDK and monetization support"
  ]
};
