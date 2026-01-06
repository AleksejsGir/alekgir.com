/**
 * useScrollTo Hook
 * Custom hook for smooth scrolling to page sections
 * Follows Single Responsibility Principle - only handles scroll logic
 */

export interface ScrollToOptions {
  behavior?: ScrollBehavior;
  block?: ScrollLogicalPosition;
  inline?: ScrollLogicalPosition;
}

/**
 * Custom hook that returns a function to scroll to a section by selector
 *
 * @param selector - CSS selector for the target element (e.g., '#projects', '#contact')
 * @param options - Optional scroll behavior configuration
 * @returns Function that performs the scroll
 *
 * @example
 * const scrollToProjects = useScrollTo('#projects');
 * <button onClick={scrollToProjects}>View Projects</button>
 */
export function useScrollTo(
  selector: string,
  options: ScrollToOptions = { behavior: 'smooth' }
) {
  return () => {
    const element = document.querySelector(selector);
    if (element) {
      element.scrollIntoView(options);
    }
  };
}

/**
 * Helper hook that returns multiple scroll functions
 * Useful when you need to scroll to multiple sections in one component
 *
 * @param selectors - Object mapping names to selectors
 * @returns Object with scroll functions for each selector
 *
 * @example
 * const { scrollToProjects, scrollToContact } = useScrollToMultiple({
 *   scrollToProjects: '#projects',
 *   scrollToContact: '#contact',
 * });
 */
export function useScrollToMultiple<T extends Record<string, string>>(
  selectors: T,
  options: ScrollToOptions = { behavior: 'smooth' }
): Record<keyof T, () => void> {
  const scrollFunctions = {} as Record<keyof T, () => void>;

  for (const key in selectors) {
    scrollFunctions[key] = () => {
      const element = document.querySelector(selectors[key]);
      if (element) {
        element.scrollIntoView(options);
      }
    };
  }

  return scrollFunctions;
}
