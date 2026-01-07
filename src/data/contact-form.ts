/**
 * Contact Form Data
 * Single source of truth for contact form options
 * Follows Single Responsibility Principle - only contains form data
 */

import type { ProjectType, BudgetRange } from '@/types';

export interface FormOption<T = string> {
  value: T;
  label: string;
}

/**
 * Project type options for contact form
 * Used in Zod schema enum and select dropdown
 * Synchronized with ProjectType union in @/types
 */
export const projectOptions: FormOption<ProjectType>[] = [
  { value: "e-commerce", label: "E-Commerce Platform" },
  { value: "news-portal", label: "News & Media Portal" },
  { value: "telegram-bot", label: "Telegram Bot Platform" },
  { value: "portfolio", label: "Portfolio/Resume Website" },
  { value: "saas-dashboard", label: "SaaS Dashboard" },
  { value: "social-network", label: "Social Network Platform" },
  { value: "real-estate", label: "Real Estate Platform" },
  { value: "ai-analytics", label: "AI Analytics Dashboard" },
  { value: "ai-workflow", label: "AI Workflow Automation" },
];

/**
 * Budget range options for contact form
 * Used in Zod schema enum and select dropdown
 * Synchronized with BudgetRange union in @/types
 */
export const budgetOptions: FormOption<BudgetRange>[] = [
  { value: "under-5k", label: "< £5,000" },
  { value: "5k-10k", label: "£5,000 - £10,000" },
  { value: "10k-25k", label: "£10,000 - £25,000" },
  { value: "over-25k", label: "£25,000+" },
];

/**
 * Extract values for Zod enum schema
 * Ensures type safety between form options and validation schema
 */
export const projectTypeValues = projectOptions.map(opt => opt.value) as [ProjectType, ...ProjectType[]];
export const budgetRangeValues = budgetOptions.map(opt => opt.value) as [BudgetRange, ...BudgetRange[]];

/**
 * Helper function to get label by value
 */
export const getProjectLabel = (value: ProjectType): string => {
  return projectOptions.find(opt => opt.value === value)?.label || value;
};

export const getBudgetLabel = (value: BudgetRange): string => {
  return budgetOptions.find(opt => opt.value === value)?.label || value;
};
