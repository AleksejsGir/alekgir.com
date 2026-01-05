'use client';

import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  SparklesIcon,
  CircleStackIcon,
  ChatBubbleLeftRightIcon,
  CommandLineIcon,
  CubeTransparentIcon,
  ServerIcon
} from '@heroicons/react/24/outline';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ServiceCard, { type ServiceCardProps } from './ServiceCard';
import ServicesContainer from './ServicesContainer';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';

const services: Required<ServiceCardProps>[] = [
  {
    title: "Full-Stack Development",
    description: "Production-ready web applications with Django and React. Server-side rendering for SEO or SPAs for dynamic experiences.",
    icon: ComputerDesktopIcon,
    tags: ["Django", "React 18", "Next.js 14", "FastAPI"],
    size: "large",
    gradient: "from-cyan-500/20 to-blue-500/20",
  },
  {
    title: "Telegram Bots",
    description: "23+ production bots over 3 years. Async Python, aiogram, FSM flows, PostgreSQL integration, and business automation.",
    icon: ChatBubbleLeftRightIcon,
    tags: ["Python Async", "aiogram", "PostgreSQL", "Payments"],
    size: "medium",
    gradient: "from-blue-500/20 to-purple-500/20",
  },
  {
    title: "AI & Automation",
    description: "OpenAI GPT-4 and Google Gemini API integration for intelligent insights and natural language processing. MCP (Model Context Protocol) agent orchestration for multi-agent workflows and autonomous task execution. n8n automation platform for business process optimization, automated reporting systems, and workflow triggers. Async Python implementation with proper rate limiting, caching strategies, and error handling for production AI applications.",
    icon: SparklesIcon,
    tags: ["OpenAI", "Gemini", "MCP", "n8n"],
    size: "medium",
    gradient: "from-purple-500/20 to-pink-500/20",
  },
  {
    title: "API Development",
    description: "RESTful APIs with Django REST Framework and async FastAPI. JWT auth, WebSocket, and OpenAPI docs.",
    icon: CommandLineIcon,
    tags: ["Django REST", "FastAPI", "Pydantic", "WebSocket"],
    size: "small",
    gradient: "from-pink-500/20 to-red-500/20",
  },
  {
    title: "Database & DevOps",
    description: "PostgreSQL with PostGIS, Redis caching, Docker deployment, and 75%+ test coverage with pytest.",
    icon: CircleStackIcon,
    tags: ["PostgreSQL", "Redis", "Docker", "pytest"],
    size: "small",
    gradient: "from-green-500/20 to-emerald-500/20",
  },
  {
    title: "Modern UI/UX",
    description: "Responsive designs with Tailwind CSS, Bootstrap, Framer Motion animations, and Three.js 3D experiences.",
    icon: CubeTransparentIcon,
    tags: ["Tailwind", "Bootstrap", "Framer Motion", "Three.js"],
    size: "small",
    gradient: "from-yellow-500/20 to-orange-500/20",
  },
  {
    title: "Payment Integration",
    description: "Secure payment processing with Stripe API, webhooks, idempotency, and order reconciliation systems.",
    icon: ServerIcon,
    tags: ["Stripe API", "Webhooks", "Async", "Security"],
    size: "small",
    gradient: "from-indigo-500/20 to-violet-500/20",
  },
  {
    title: "Real-time & WebSockets",
    description: "Live data streaming with WebSocket connections, real-time notifications, chat systems, and async event-driven architecture.",
    icon: SparklesIcon,
    tags: ["WebSocket", "Server-Sent Events", "Async", "Redis Pub/Sub"],
    size: "small",
    gradient: "from-teal-500/20 to-cyan-500/20",
  },
];

export default function ServicesSection() {
  return (
    <ServicesContainer>
      <SectionWidthWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={slideUpVariants} className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider backdrop-blur-md">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              Production-grade solutions with Django, React, FastAPI, and Telegram bots. Built with clean architecture and 75%+ test coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <ServiceCard
                key={service.title}
                title={service.title}
                description={service.description}
                icon={service.icon}
                tags={service.tags}
                size="large"
                gradient={service.gradient}
              />
            ))}
          </div>
        </motion.div>
      </SectionWidthWrapper>
    </ServicesContainer>
  );
}
