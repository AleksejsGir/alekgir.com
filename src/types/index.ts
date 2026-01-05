export interface ProjectImplementation {
  title: string;
  description: string;
}

export interface Project {
  id: number;
  name: string;
  category: string;
  description: string;
  fullDescription: string;
  challenge: string;
  solution: string;
  frontend: string[];
  backend: string[];
  features: string[];
  metrics?: string;
  mockupImage: string;
  slug: string;
  implementation?: ProjectImplementation[];
  keyResults?: string[];
  projectDuration?: string;
  teamSize?: string;
}

export interface ContactForm {
  name: string;
  email: string;
  projectType: ProjectType;
  budgetRange: BudgetRange;
  message: string;
}

export type ProjectType =
  | "e-commerce"
  | "news-portal"
  | "telegram-bot"
  | "portfolio"
  | "saas-dashboard"
  | "social-network"
  | "real-estate"
  | "ai-analytics"
  | "ai-workflow";

export type BudgetRange =
  | "under-5k"
  | "5k-10k"
  | "10k-25k"
  | "over-25k";
