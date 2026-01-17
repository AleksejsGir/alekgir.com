'use client';

import { motion } from 'framer-motion';
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

export default function ProjectsMarquee() {
  // Duplicate projects for seamless infinite scroll
  const marqueeProjects = [...projects, ...projects];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="relative w-full overflow-hidden py-6 lg:py-8"
    >
      {/* Section label */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-primary/50" />
        <span className="text-xs font-semibold uppercase tracking-[0.2em] text-text-muted">
          Featured Projects
        </span>
        <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-primary/50" />
      </div>

      {/* Marquee container */}
      <div className="relative group/marquee">
        {/* Left fade gradient */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-r from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Right fade gradient */}
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-24 lg:w-32 bg-gradient-to-l from-background via-background/80 to-transparent z-10 pointer-events-none" />

        {/* Marquee track */}
        <div className="flex gap-4 sm:gap-6 animate-marquee group-hover/marquee:[animation-play-state:paused]">
          {marqueeProjects.map((project, index) => (
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
    </motion.div>
  );
}
