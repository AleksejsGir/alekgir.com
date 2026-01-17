'use client';

import { useRef, useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import { projects } from '@/data/projects';

interface MarqueeCardProps {
  name: string;
  category: string;
  videoSrc: string;
  slug: string;
}

function MarqueeCard({ name, category, videoSrc, slug }: MarqueeCardProps) {
  return (
    <Link
      href={`/projects/${slug}`}
      className="group relative flex-shrink-0 w-[280px] sm:w-[320px] lg:w-[360px] aspect-[16/10] rounded-2xl overflow-hidden cursor-pointer"
    >
      {/* Glass card container */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/70 to-black/80 backdrop-blur-md border border-primary/20 rounded-2xl transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.15)]" />

      {/* Video background */}
      <div className="absolute inset-2 rounded-xl overflow-hidden">
        <video
          src={videoSrc}
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        {/* Video overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
      </div>

      {/* Content overlay */}
      <div className="absolute inset-0 p-4 flex flex-col justify-end">
        {/* Category badge */}
        <span className="inline-flex self-start px-2.5 py-1 mb-2 text-[10px] sm:text-xs font-semibold uppercase tracking-wider bg-primary/20 text-primary-light rounded-full border border-primary/30 backdrop-blur-sm transition-all duration-300 group-hover:bg-primary/30">
          {category}
        </span>

        {/* Project name */}
        <h3 className="text-sm sm:text-base lg:text-lg font-bold text-white leading-tight transition-colors duration-300 group-hover:text-primary-light line-clamp-2">
          {name}
        </h3>

        {/* Hover indicator */}
        <div className="flex items-center gap-2 mt-2 opacity-0 translate-y-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <span className="text-xs text-primary-light font-medium">View Project</span>
          <svg
            className="w-4 h-4 text-primary transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </div>
      </div>

      {/* Glow effect on hover */}
      <div className="absolute -inset-1 bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 rounded-2xl opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 -z-10" />
    </Link>
  );
}

// Navigation arrow component
function NavArrow({
  direction,
  onClick,
}: {
  direction: 'left' | 'right';
  onClick: () => void;
}) {
  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={`
        absolute top-1/2 -translate-y-1/2 z-20
        ${direction === 'left' ? 'left-2 sm:left-4 lg:left-6' : 'right-2 sm:right-4 lg:right-6'}
        w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14
        flex items-center justify-center
        bg-black/60 backdrop-blur-xl
        border border-primary/30
        rounded-full
        transition-all duration-300
        hover:bg-black/80 hover:border-primary/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]
        group/arrow
      `}
      aria-label={direction === 'left' ? 'Previous projects' : 'Next projects'}
    >
      <svg
        className={`
          w-5 h-5 sm:w-6 sm:h-6 text-primary-light
          transition-transform duration-300
          ${direction === 'left' ? 'group-hover/arrow:-translate-x-0.5' : 'group-hover/arrow:translate-x-0.5'}
        `}
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
      >
        {direction === 'left' ? (
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        ) : (
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
        )}
      </svg>
    </motion.button>
  );
}

// Auto-scroll speed (pixels per second)
const SCROLL_SPEED = 50;
// Pause duration after touch interaction (ms)
const TOUCH_PAUSE_DURATION = 2000;

export default function ProjectsMarquee() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const animationRef = useRef<number | null>(null);
  const lastTimeRef = useRef<number>(0);
  const touchPauseTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const [isHovered, setIsHovered] = useState(false);
  const [isTouching, setIsTouching] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // Duplicate projects for infinite scroll effect
  const duplicatedProjects = [...projects, ...projects, ...projects];

  // Detect mobile/touch device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia('(max-width: 1024px)').matches || 'ontouchstart' in window);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Calculate total width of one set of projects
  const getSetWidth = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return 0;
    return container.scrollWidth / 3;
  }, []);

  // Update scroll progress for indicator
  const updateProgress = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const setWidth = getSetWidth();
    if (setWidth === 0) return;

    const normalizedScroll = container.scrollLeft % setWidth;
    setScrollProgress(normalizedScroll / setWidth);
  }, [getSetWidth]);

  // Handle infinite loop reset
  const handleInfiniteLoop = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const setWidth = getSetWidth();
    if (setWidth === 0) return;

    // Reset position for seamless loop
    if (container.scrollLeft >= setWidth * 2) {
      container.scrollLeft = setWidth;
    } else if (container.scrollLeft <= 0) {
      container.scrollLeft = setWidth;
    }
  }, [getSetWidth]);

  // Auto-scroll animation loop
  const animate = useCallback((currentTime: number) => {
    if (!scrollRef.current) return;

    if (lastTimeRef.current === 0) {
      lastTimeRef.current = currentTime;
    }

    const deltaTime = (currentTime - lastTimeRef.current) / 1000;
    lastTimeRef.current = currentTime;

    const container = scrollRef.current;

    // Scroll by delta
    container.scrollLeft += SCROLL_SPEED * deltaTime;

    handleInfiniteLoop();
    updateProgress();
    animationRef.current = requestAnimationFrame(animate);
  }, [handleInfiniteLoop, updateProgress]);

  // Start auto-scroll
  const startAutoScroll = useCallback(() => {
    if (animationRef.current) return;
    lastTimeRef.current = 0;
    animationRef.current = requestAnimationFrame(animate);
  }, [animate]);

  // Stop auto-scroll
  const stopAutoScroll = useCallback(() => {
    if (animationRef.current) {
      cancelAnimationFrame(animationRef.current);
      animationRef.current = null;
    }
  }, []);

  // Manual navigation (scroll stays paused while hovered)
  const handleManualNav = useCallback((direction: 'left' | 'right') => {
    const container = scrollRef.current;
    if (!container) return;

    // Calculate scroll amount (2 cards)
    const cardWidth = window.innerWidth >= 1024 ? 384 : window.innerWidth >= 640 ? 344 : 296;
    const scrollAmount = direction === 'left' ? -cardWidth * 2 : cardWidth * 2;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  }, []);

  // Handle hover state (desktop)
  const handleMouseEnter = useCallback(() => {
    if (isMobile) return;
    setIsHovered(true);
    stopAutoScroll();
  }, [isMobile, stopAutoScroll]);

  const handleMouseLeave = useCallback(() => {
    if (isMobile) return;
    setIsHovered(false);
    startAutoScroll();
  }, [isMobile, startAutoScroll]);

  // Handle touch events (mobile)
  const handleTouchStart = useCallback(() => {
    if (touchPauseTimeoutRef.current) {
      clearTimeout(touchPauseTimeoutRef.current);
    }
    setIsTouching(true);
    stopAutoScroll();
  }, [stopAutoScroll]);

  const handleTouchEnd = useCallback(() => {
    setIsTouching(false);

    // Handle infinite loop after manual scroll
    setTimeout(() => {
      handleInfiniteLoop();
      updateProgress();
    }, 100);

    // Resume auto-scroll after pause
    touchPauseTimeoutRef.current = setTimeout(() => {
      startAutoScroll();
    }, TOUCH_PAUSE_DURATION);
  }, [handleInfiniteLoop, updateProgress, startAutoScroll]);

  // Handle manual scroll (for progress update)
  const handleScroll = useCallback(() => {
    if (isTouching || isHovered) {
      updateProgress();
    }
  }, [isTouching, isHovered, updateProgress]);

  // Initialize: set scroll to middle set and start animation
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    // Wait for layout
    const initTimeout = setTimeout(() => {
      const setWidth = getSetWidth();
      container.scrollLeft = setWidth; // Start at middle set
      startAutoScroll();
    }, 100);

    return () => {
      clearTimeout(initTimeout);
      stopAutoScroll();
      if (touchPauseTimeoutRef.current) {
        clearTimeout(touchPauseTimeoutRef.current);
      }
    };
  }, [getSetWidth, startAutoScroll, stopAutoScroll]);

  const isPaused = isHovered || isTouching;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full py-6 lg:py-8"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Section label */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Featured Projects
        </span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Carousel container */}
      <div className="relative">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 lg:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Navigation arrows - appear on hover (desktop only) */}
        <AnimatePresence>
          {isHovered && !isMobile && (
            <>
              <NavArrow
                direction="left"
                onClick={() => handleManualNav('left')}
              />
              <NavArrow
                direction="right"
                onClick={() => handleManualNav('right')}
              />
            </>
          )}
        </AnimatePresence>

        {/* Scrollable track */}
        <div
          ref={scrollRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onScroll={handleScroll}
          className={`
            flex gap-4 sm:gap-6 px-4 sm:px-8 lg:px-12
            ${isMobile ? 'overflow-x-auto scrollbar-hide touch-pan-x' : 'overflow-x-hidden'}
          `}
          style={{
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch',
          }}
        >
          {duplicatedProjects.map((project, index) => (
            <MarqueeCard
              key={`${project.id}-${index}`}
              name={project.name}
              category={project.category}
              videoSrc={project.mockupImage}
              slug={project.slug}
            />
          ))}
        </div>
      </div>

      {/* Progress bar */}
      <div className="flex items-center justify-center mt-6 px-8">
        <div className="relative w-48 h-1 bg-primary/20 rounded-full overflow-hidden">
          <motion.div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-primary to-primary-light rounded-full"
            style={{ width: `${scrollProgress * 100}%` }}
            transition={{ duration: 0.1 }}
          />
        </div>

        {/* Pause indicator */}
        <AnimatePresence>
          {isPaused && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="ml-3 flex items-center gap-1.5"
            >
              <div className="w-1.5 h-4 bg-primary/60 rounded-sm" />
              <div className="w-1.5 h-4 bg-primary/60 rounded-sm" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Mobile swipe hint - shows briefly on first load */}
      {isMobile && (
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="text-center text-xs text-text-muted/50 mt-3"
        >
          Swipe to explore
        </motion.p>
      )}
    </motion.div>
  );
}
