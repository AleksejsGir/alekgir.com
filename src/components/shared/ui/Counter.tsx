'use client';

import { useEffect, useRef } from 'react';
import { useMotionValue, useSpring, useInView } from 'framer-motion';

/**
 * Counter Component
 * Animated counter with spring physics
 * Follows Single Responsibility Principle - only handles counter animation
 *
 * @param value - Target numeric value to count to
 * @param suffix - Optional suffix to append (e.g., "+", "/100")
 * @param className - Optional CSS classes for styling
 */
export interface CounterProps {
  value: number;
  suffix?: string;
  className?: string;
}

export default function Counter({
  value,
  suffix = "",
  className = "text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight"
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  // Trigger animation when component comes into view
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  // Update DOM with animated value
  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return (
    <span ref={ref} className={className}>
      {value}{suffix}
    </span>
  );
}
