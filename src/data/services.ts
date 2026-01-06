/**
 * Services Data
 * Single source of truth for all service offerings
 * Follows Single Responsibility Principle - only contains service data
 */

import {
  ComputerDesktopIcon,
  SparklesIcon,
  CircleStackIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ServerIcon
} from '@heroicons/react/24/outline';

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  tags: string[];
  size: 'large' | 'medium' | 'small';
  gradient: string;
  flowComponent: string; // Component name for registry lookup
}

export const services: Service[] = [
  {
    id: 'full-stack',
    title: "Full-Stack Development",
    description: "Production-ready web applications with Django and React. Server-side rendering for SEO or SPAs for dynamic experiences.",
    icon: ComputerDesktopIcon,
    tags: ["Django", "React 18", "Next.js 14", "FastAPI"],
    size: "large",
    gradient: "from-cyan-500/20 to-blue-500/20",
    flowComponent: "FullStackFlow"
  },
  {
    id: 'telegram-bots',
    title: "Telegram Bots",
    description: "23+ production bots over 3 years. Async Python, aiogram, FSM flows, PostgreSQL integration, and business automation.",
    icon: ChatBubbleLeftRightIcon,
    tags: ["Python Async", "aiogram", "PostgreSQL", "Payments"],
    size: "medium",
    gradient: "from-blue-500/20 to-purple-500/20",
    flowComponent: "TelegramBotsFlow"
  },
  {
    id: 'ai-automation',
    title: "AI & Automation",
    description: "OpenAI GPT-4 and Google Gemini API integration for intelligent insights and natural language processing. MCP (Model Context Protocol) agent orchestration for multi-agent workflows and autonomous task execution. n8n automation platform for business process optimization, automated reporting systems, and workflow triggers. Async Python implementation with proper rate limiting, caching strategies, and error handling for production AI applications.",
    icon: SparklesIcon,
    tags: ["OpenAI", "Gemini", "MCP", "n8n"],
    size: "medium",
    gradient: "from-purple-500/20 to-pink-500/20",
    flowComponent: "AIAutomationFlow"
  },
  {
    id: 'api-development',
    title: "API Development",
    description: "RESTful APIs with Django REST Framework and async FastAPI. JWT auth, WebSocket, and OpenAPI docs.",
    icon: CommandLineIcon,
    tags: ["Django REST", "FastAPI", "Pydantic", "WebSocket"],
    size: "small",
    gradient: "from-pink-500/20 to-red-500/20",
    flowComponent: "APIDevFlow"
  },
  {
    id: 'database-devops',
    title: "Database & DevOps",
    description: "PostgreSQL with PostGIS, Redis caching, Docker deployment, and 75%+ test coverage with pytest.",
    icon: CircleStackIcon,
    tags: ["PostgreSQL", "Redis", "Docker", "pytest"],
    size: "small",
    gradient: "from-green-500/20 to-emerald-500/20",
    flowComponent: "DatabaseDevOpsFlow"
  },
  {
    id: 'ui-ux',
    title: "Modern UI/UX",
    description: "Responsive designs with Tailwind CSS, Bootstrap, Framer Motion animations, and Three.js 3D experiences.",
    icon: CubeTransparentIcon,
    tags: ["Tailwind", "Bootstrap", "Framer Motion", "Three.js"],
    size: "small",
    gradient: "from-yellow-500/20 to-orange-500/20",
    flowComponent: "UIUXFlow"
  },
  {
    id: 'payment-integration',
    title: "Payment Integration",
    description: "Secure payment processing with Stripe API, webhooks, idempotency, and order reconciliation systems.",
    icon: ServerIcon,
    tags: ["Stripe API", "Webhooks", "Async", "Security"],
    size: "small",
    gradient: "from-indigo-500/20 to-violet-500/20",
    flowComponent: "PaymentFlow"
  },
  {
    id: 'realtime-websockets',
    title: "Real-time & WebSockets",
    description: "Live data streaming with WebSocket connections, real-time notifications, chat systems, and async event-driven architecture.",
    icon: SparklesIcon,
    tags: ["WebSocket", "Server-Sent Events", "Async", "Redis Pub/Sub"],
    size: "small",
    gradient: "from-teal-500/20 to-cyan-500/20",
    flowComponent: "WebSocketFlow"
  },
];

// Helper function to get service by ID
export const getServiceById = (id: string): Service | undefined => {
  return services.find(service => service.id === id);
};

// Helper function to get service by title (for backward compatibility)
export const getServiceByTitle = (title: string): Service | undefined => {
  return services.find(service => service.title === title);
};
