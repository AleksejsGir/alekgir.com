/**
 * Project Categories Data Layer
 * Following Single Responsibility Principle - centralized category definitions
 * Following Open/Closed Principle - easy to extend with new categories
 *
 * Part of Projects domain - all project-related data in one place
 *
 * Usage Examples:
 *
 * // Import from projects module (recommended)
 * import { categories, getCategoryByName } from '@/data/projects';
 * const category = getCategoryByName("E-Commerce Solution");
 *
 * // Get categories with project counts
 * import { getCategoriesWithCounts } from '@/data/projects';
 * const categoriesWithCounts = getCategoriesWithCounts();
 * // [{ name: "E-Commerce Solution", slug: "e-commerce-solution", count: 1, ... }, ...]
 *
 * // Validate category
 * import { isValidCategory } from '@/data/projects';
 * if (isValidCategory(userInput)) { ... }
 *
 * // Get metadata for project
 * import { getCategoryMetadata } from '@/data/projects';
 * const metadata = getCategoryMetadata(project.category);
 * console.log(metadata?.color); // "text-cyan-400"
 */

import type { Project } from './types';

export interface ProjectCategory {
  name: string;
  slug: string;
  description: string;
  color: string; // Tailwind color class
  gradient: string; // Tailwind gradient class
}

/**
 * All available project categories with metadata
 * Single source of truth for category information
 */
export const categories: ProjectCategory[] = [
  {
    name: "E-Commerce Solution",
    slug: "e-commerce-solution",
    description: "Online shopping platforms with payment integration and inventory management",
    color: "text-cyan-400",
    gradient: "from-cyan-500/20 to-blue-500/20"
  },
  {
    name: "AI Workflow Automation",
    slug: "ai-workflow-automation",
    description: "Intelligent automation systems with AI agents and workflow orchestration",
    color: "text-purple-400",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    name: "Content Platform",
    slug: "content-platform",
    description: "News portals and content management systems with SEO optimization",
    color: "text-emerald-400",
    gradient: "from-emerald-500/20 to-teal-500/20"
  },
  {
    name: "Automation & Bots",
    slug: "automation-bots",
    description: "Telegram bots and automation solutions for business processes",
    color: "text-blue-400",
    gradient: "from-blue-500/20 to-indigo-500/20"
  },
  {
    name: "Web Development",
    slug: "web-development",
    description: "Professional business websites and portfolio projects",
    color: "text-orange-400",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    name: "Software-as-a-Service",
    slug: "software-as-a-service",
    description: "Multi-tenant SaaS platforms with dashboard and analytics",
    color: "text-indigo-400",
    gradient: "from-indigo-500/20 to-purple-500/20"
  },
  {
    name: "Social Community",
    slug: "social-community",
    description: "Social networking platforms with real-time messaging and media sharing",
    color: "text-pink-400",
    gradient: "from-pink-500/20 to-rose-500/20"
  },
  {
    name: "Property Management",
    slug: "property-management",
    description: "Real estate platforms with geospatial search and booking systems",
    color: "text-green-400",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    name: "Advanced Analytics",
    slug: "advanced-analytics",
    description: "AI-powered analytics dashboards with data processing and insights",
    color: "text-violet-400",
    gradient: "from-violet-500/20 to-purple-500/20"
  }
];

/**
 * Get all available categories
 */
export const getAllCategories = (): ProjectCategory[] => {
  return categories;
};

/**
 * Get category by exact name match
 */
export const getCategoryByName = (name: string): ProjectCategory | undefined => {
  return categories.find(category => category.name === name);
};

/**
 * Get category by slug
 */
export const getCategoryBySlug = (slug: string): ProjectCategory | undefined => {
  return categories.find(category => category.slug === slug);
};

/**
 * Get number of projects in a specific category
 * Note: This function requires projects array, available in index.ts
 */
export const getProjectCountByCategory = (projects: Project[], categoryName: string): number => {
  return projects.filter(project => project.category === categoryName).length;
};

/**
 * Type guard to check if a string is a valid category name
 */
export const isValidCategory = (name: string): boolean => {
  return categories.some(category => category.name === name);
};

/**
 * Get unique category names as typed array
 * Useful for TypeScript enums and validation
 */
export const getCategoryNames = (): string[] => {
  return categories.map(category => category.name);
};

/**
 * Get category metadata by project category field
 * Returns undefined if category not found
 */
export const getCategoryMetadata = (projectCategory: string): ProjectCategory | undefined => {
  return getCategoryByName(projectCategory);
};
