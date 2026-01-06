/**
 * Contact Process Data
 * Single source of truth for contact-related information
 * Follows Single Responsibility Principle - only contains contact process data
 */

import { SEO_CONFIG } from '@/config/seo.config';

export interface SocialLink {
  name: string;
  url: string;
  icon?: string;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

/**
 * Social media links
 * Synchronized with SEO_CONFIG for consistency
 */
export const socialLinks: SocialLink[] = [
  {
    name: 'GitHub',
    url: SEO_CONFIG.contact.github,
  },
  {
    name: 'LinkedIn',
    url: SEO_CONFIG.contact.linkedin,
  },
  {
    name: 'Twitter',
    url: 'https://twitter.com/agwebstudio',
  },
];

/**
 * Contact process steps
 * Describes the workflow after initial contact
 */
export const contactProcessSteps: ProcessStep[] = [
  {
    step: '01',
    title: 'Request',
    description: 'Brief analysis'
  },
  {
    step: '02',
    title: 'Estimation',
    description: 'Timeline & Cost'
  },
  {
    step: '03',
    title: 'Kickoff',
    description: 'Development'
  },
  {
    step: '04',
    title: 'Delivery',
    description: 'Launch & Support'
  },
];

/**
 * Helper function to get social link by name
 */
export const getSocialLinkByName = (name: string): SocialLink | undefined => {
  return socialLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
};
