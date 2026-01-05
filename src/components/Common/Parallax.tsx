'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';

interface ParallaxProps {
  children: React.ReactNode;
  speed?: number; // 0 to 1
  className?: string;
  offset?: number; // Maximum pixels to move
}

export default function Parallax({ 
  children, 
  speed = 0.5, 
  className = "",
  offset = 100 
}: ParallaxProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  });

  // Calculate movement based on scroll progress
  // At start (0), move down by offset * speed
  // At end (1), move up by offset * speed
  const y = useTransform(scrollYProgress, [0, 1], [offset * speed, -offset * speed]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      <motion.div style={{ y }} className="h-full w-full">
        {children}
      </motion.div>
    </div>
  );
}
