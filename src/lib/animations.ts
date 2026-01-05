import { Variants } from "framer-motion";

// Animation durations
export const DURATION_FAST = 0.15;
export const DURATION_NORMAL = 0.3;
export const DURATION_SLOW = 0.6;

// Easing functions
export const EASE_STANDARD = [0.16, 1, 0.3, 1];
export const EASE_BOUNCE = [0.68, -0.55, 0.265, 1.55];

// Fade in variants
export const fadeInVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_STANDARD
    }
  }
};

// Slide up variants
export const slideUpVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_STANDARD
    }
  }
};

// Slide in from left
export const slideInLeftVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -20
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: DURATION_SLOW,
      ease: EASE_STANDARD
    }
  }
};

// Scale variants (for buttons, modals)
export const scaleVariants: Variants = {
  hidden: {
    opacity: 0,
    scale: 0.95
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: DURATION_NORMAL,
      ease: EASE_STANDARD
    }
  }
};

// Stagger container
export const staggerContainerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

// Parallax config
export const parallaxConfig = {
  speed: 0.5 // 0-1, where 0 is no movement and 1 is full scroll speed
};
