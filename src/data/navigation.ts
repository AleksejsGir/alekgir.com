/**
 * Navigation Data
 * Single source of truth for navigation links
 * Follows Single Responsibility Principle - only contains navigation data
 */

export interface NavLink {
  name: string;
  href: string;
  description?: string;
}

/**
 * Main navigation links
 * Used in Navbar component for primary navigation
 */
export const navLinks: NavLink[] = [
  {
    name: 'Projects',
    href: '#projects',
    description: 'View my portfolio projects'
  },
  {
    name: 'Services',
    href: '#services',
    description: 'Explore available services'
  },
  {
    name: 'About',
    href: '#about',
    description: 'Learn more about me'
  },
  {
    name: 'Contact',
    href: '#contact',
    description: 'Get in touch'
  },
];

/**
 * Helper function to get nav link by href
 */
export const getNavLinkByHref = (href: string): NavLink | undefined => {
  return navLinks.find(link => link.href === href);
};

/**
 * Helper function to get nav link by name
 */
export const getNavLinkByName = (name: string): NavLink | undefined => {
  return navLinks.find(link => link.name.toLowerCase() === name.toLowerCase());
};
