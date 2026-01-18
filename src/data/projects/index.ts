/**
 * Projects Data Layer - Main Entry Point
 * Following Single Responsibility Principle - centralized project exports and utilities
 * Following Open/Closed Principle - easy to add new projects without modifying existing code
 *
 * Directory Structure Benefits:
 * - Each project in separate file (~60 lines vs 571 in single file)
 * - Easy to find and edit specific projects
 * - Clean git diffs (changes to one project don't affect others)
 * - Scalable architecture ready for 20+ projects
 * - Professional code organization for recruiter review
 * - All project-related data (projects + categories) in one domain
 *
 * Usage:
 * import { projects, getProjectBySlug, categories, getCategoryByName } from '@/data/projects';
 * // All existing imports work without changes thanks to this index.ts
 */

// Re-export types for convenience
export type { Project, ProjectImplementation } from './types';
export type { ProjectCategory } from './categories';

// Import all individual projects
import { eCommercePlatform } from './e-commerce-platform';
import { n8nAgentWorkflow } from './n8n-agent-workflow';
import { newsMediaPortal } from './news-media-portal';
import { telegramBots } from './telegram-bots';
import { clientPortfolioBundle } from './client-portfolio-bundle';
import { saasDashboard } from './saas-dashboard';
import { socialNetwork } from './social-network';
import { realEstatePlatform } from './real-estate-platform';
import { aiAnalyticsDashboard } from './ai-analytics-dashboard';
import { theMessenger } from './the-messenger';

/**
 * All projects array - single source of truth
 * Maintains same order as original for consistency
 */
export const projects = [
  eCommercePlatform,      // id: 1
  n8nAgentWorkflow,       // id: 9
  theMessenger,           // id: 10
  newsMediaPortal,        // id: 2
  telegramBots,           // id: 3
  clientPortfolioBundle,  // id: 4
  saasDashboard,          // id: 5
  socialNetwork,          // id: 6
  realEstatePlatform,     // id: 7
  aiAnalyticsDashboard,   // id: 8
];

/**
 * Get project by slug (URL-friendly identifier)
 * @param slug - Project slug (e.g., "e-commerce-platform")
 * @returns Project or undefined if not found
 */
export const getProjectBySlug = (slug: string) => {
  return projects.find(project => project.slug === slug);
};

/**
 * Get all projects in a specific category
 * @param category - Category name (e.g., "E-Commerce Solution")
 * @returns Array of projects in that category
 */
export const getProjectsByCategory = (category: string) => {
  return projects.filter(project => project.category === category);
};

/**
 * Get project by ID
 * @param id - Project ID
 * @returns Project or undefined if not found
 */
export const getProjectById = (id: number) => {
  return projects.find(project => project.id === id);
};

/**
 * Get total number of projects
 * @returns Number of projects
 */
export const getProjectsCount = () => {
  return projects.length;
};

/**
 * Search projects by name, description, or tech stack
 * @param query - Search query string
 * @returns Array of matching projects
 */
export const searchProjects = (query: string) => {
  const lowerQuery = query.toLowerCase();
  return projects.filter(project =>
    project.name.toLowerCase().includes(lowerQuery) ||
    project.description.toLowerCase().includes(lowerQuery) ||
    project.category.toLowerCase().includes(lowerQuery) ||
    project.frontend.some(tech => tech.toLowerCase().includes(lowerQuery)) ||
    project.backend.some(tech => tech.toLowerCase().includes(lowerQuery))
  );
};

/**
 * Get projects sorted by ID (newest first if IDs represent chronology)
 * @param ascending - Sort order (default: false = descending)
 * @returns Sorted array of projects
 */
export const getProjectsSortedById = (ascending = false) => {
  return [...projects].sort((a, b) =>
    ascending ? a.id - b.id : b.id - a.id
  );
};

/**
 * Get featured projects (example: first 3 projects)
 * Customize logic based on your needs
 * @param count - Number of featured projects to return
 * @returns Array of featured projects
 */
export const getFeaturedProjects = (count = 3) => {
  return projects.slice(0, count);
};

// ============================================================================
// PROJECT CATEGORIES
// ============================================================================

// Import and re-export all category utilities
import {
  categories,
  getAllCategories,
  getCategoryByName,
  getCategoryBySlug,
  getProjectCountByCategory as _getProjectCountByCategory,
  isValidCategory,
  getCategoryNames,
  getCategoryMetadata,
} from './categories';

export {
  categories,
  getAllCategories,
  getCategoryByName,
  getCategoryBySlug,
  isValidCategory,
  getCategoryNames,
  getCategoryMetadata,
};

/**
 * Get number of projects in a specific category
 * Wrapper that provides projects array to the underlying function
 * @param categoryName - Category name
 * @returns Number of projects in that category
 */
export const getProjectCountByCategory = (categoryName: string): number => {
  return _getProjectCountByCategory(projects, categoryName);
};

/**
 * Get all categories with project counts
 * @returns Array of categories with count field added
 */
export const getCategoriesWithCounts = () => {
  return categories.map(category => ({
    ...category,
    count: getProjectCountByCategory(category.name)
  }));
};
