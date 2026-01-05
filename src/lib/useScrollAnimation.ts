import { useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollAnimationOptions {
  threshold?: number;
  once?: boolean;
  margin?: string;
}

export const useScrollAnimation = (options: ScrollAnimationOptions = {}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options.once ?? true,
    margin: (options.margin ?? "-100px") as any,
    amount: options.threshold ?? 0.3,
  });

  return { ref, isInView };
};

// Helper for standardized Framer Motion props
export const scrollRevealProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px", amount: 0.3 }
};
