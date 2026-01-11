'use client';

import { motion } from 'framer-motion';
import HeroBackground3D from './HeroBackground3DWrapper';
import HeroVisuals from './HeroVisuals';
import {
  slideUpVariants,
  staggerContainerVariants,
} from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import { SEO_CONFIG } from '@/config/seo.config';
import { useScrollToMultiple } from '@/hooks/useScrollTo';

// UI Color mapping for tech stack
const techColorMap: Record<string, string> = {
  'Python': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Django': 'bg-green-600/20 text-green-400 border-green-600/30',
  'Go': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
  'React': 'bg-primary/20 text-primary-light border-primary/30',
  'Next.js': 'bg-primary/10 text-primary border-primary/30',
  'TypeScript': 'bg-primary/20 text-primary-light border-primary/30',
  'PostgreSQL': 'bg-primary/20 text-primary-light border-primary/30',
  'Docker': 'bg-primary/10 text-primary border-primary/30',
  'Tailwind': 'bg-primary/10 text-primary border-primary/30',
};

// Left Side: Process & Delivery
const leftList = [
  'Microservices & Scalable Apps',
  'End-to-End Project Delivery',
  'From Idea to Deployment',
  'Long-term Maintenance',
  '75%+ Test Coverage & TDD',
];

// Right Side: Tech & Architecture
const rightList = [
  'AI Integration (MCP, OpenAI)',
  'REST API Development',
  'Database Design (PostgreSQL)',
  'Docker & DevOps',
  'Clean Architecture & SOLID',
];

const backendStack = ['Python', 'Go', 'PostgreSQL', 'Docker', 'MCP'];
const frontendStack = ['React', 'Next.js', 'TypeScript', 'Tailwind', 'n8n'];


export default function Hero() {
  const { scrollToProjects, scrollToContact } = useScrollToMultiple({
    scrollToProjects: '#projects',
    scrollToContact: '#contact',
  });

  return (
    <section className="relative min-h-screen lg:h-screen flex flex-col overflow-hidden">
      {/* 3D Background */}
      <HeroBackground3D />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background z-[1]" />

      <motion.div
        className="relative z-10 w-full h-full flex flex-col justify-center"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionWidthWrapper className="max-w-[1600px] mx-auto w-full h-auto lg:h-[95%] flex flex-col justify-start lg:justify-between gap-12 lg:gap-0 px-4 sm:px-6 py-12 lg:py-0">

          {/* --- TOP ROW: HEADLINE --- */}
          {/* pt-20 to clean navbar area, but keep it high */}
          <div className="flex flex-col items-center text-center pt-28 lg:pt-28">
            {/* Badge */}
            <motion.div variants={slideUpVariants} className="mb-4">
              <span className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-xs sm:text-sm font-medium border border-primary/20 backdrop-blur-sm">
                <span className="w-2 h-2 bg-primary rounded-full mr-3 animate-pulse shadow-[0_0_10px_rgba(6,182,212,0.5)]" />
                <span className="text-primary-light font-bold">
                  {SEO_CONFIG.structuredData.availability}
                </span>
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={slideUpVariants}
              className="heading-display max-w-6xl"
            >
              <span className="text-white">Full-Stack</span> <span className="text-primary">Engineering</span>
            </motion.h1>

            {/* Accent Line */}
            <motion.div variants={slideUpVariants} className="w-full max-w-2xl mx-auto mt-6">
              <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-primary/50 to-transparent" />
            </motion.div>
          </div>


          {/* --- MIDDLE ROW: WINGS LAYOUT --- */}
          <div className="flex-1 flex flex-col lg:grid lg:grid-cols-12 lg:items-center lg:gap-8 w-full">

            {/* LEFT WING: Process & Backend */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20 w-full px-4 sm:px-0">

              <motion.h4 variants={slideUpVariants} className="text-2xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6 flex items-center gap-3">
                <span className="w-8 h-[1px] bg-primary/50" />
                Specializing In
              </motion.h4>

              {/* List */}
              <motion.div variants={slideUpVariants} className="flex flex-col gap-3 w-full lg:w-auto mb-8">
                {leftList.map((item, i) => (
                  <div key={i} className="group flex items-center justify-center lg:justify-start gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-default w-full lg:w-auto">
                    {/* Dot for left list */}
                    <span className="w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)] mt-0.5 shrink-0" />
                    <span className="text-base sm:text-lg lg:text-lg text-text-secondary group-hover:text-white transition-colors">{item}</span>
                  </div>
                ))}
              </motion.div>

              {/* Backend Stack */}
              <motion.div variants={slideUpVariants} className="w-full flex flex-col items-center lg:items-start">
                <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold pl-2">Backend & Core</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start max-w-sm transition-opacity opacity-80 hover:opacity-100">
                  {backendStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded text-sm font-bold border cursor-default
                          ${tech === 'MCP' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' :
                          techColorMap[tech] || 'bg-graphite-dark/40 text-graphite-light border-graphite-dark/50'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>


            {/* CENTER CORE: Video Logo - HIDDEN ON MOBILE */}
            <div className="hidden lg:flex lg:col-span-6 xl:col-span-6 justify-center order-1 lg:order-2 mb-8 lg:mb-0 relative py-6 lg:py-0 w-full h-full items-center">
              <div className="relative z-10 w-full flex justify-center transform scale-90 lg:scale-100 xl:scale-110">
                <HeroVisuals />
              </div>
              {/* Center Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[90px] pointer-events-none lg:w-[500px] lg:h-[500px]" />
            </div>


            {/* RIGHT WING: Tech & Frontend */}
            <div className="lg:col-span-3 xl:col-span-3 flex flex-col items-center lg:items-end text-center lg:text-right order-3 relative z-20 w-full px-4 sm:px-0">

              {/* Hide this header on mobile - only show on desktop */}
              <motion.h4 variants={slideUpVariants} className="hidden lg:flex text-3xl font-bold text-primary mb-6 items-center gap-3 w-auto justify-end">
                <span className="lg:hidden w-8 h-[1px] bg-primary/50" />
                Specializing In
                <span className="hidden lg:block w-8 h-[1px] bg-primary/50" />
              </motion.h4>

              {/* List */}
              <motion.div variants={slideUpVariants} className="flex flex-col gap-3 mb-8 w-full lg:w-auto items-center lg:items-end">
                {rightList.map((item, i) => (
                  <div key={i} className="group flex items-center justify-center lg:justify-end gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5 cursor-default w-full lg:w-auto">
                    <span className="lg:hidden w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)] mt-0.5 shrink-0" />
                    <span className="text-base sm:text-lg lg:text-lg text-text-secondary group-hover:text-white transition-colors">{item}</span>
                    <span className="hidden lg:block w-1.5 h-1.5 rounded-full bg-primary shadow-[0_0_8px_rgba(56,189,248,0.8)] mt-0.5 shrink-0" />
                  </div>
                ))}
              </motion.div>

              {/* Frontend Stack */}
              <motion.div variants={slideUpVariants} className="w-full flex flex-col items-center lg:items-end">
                <p className="text-xs text-text-muted mb-3 uppercase tracking-wider font-semibold pl-2 lg:pl-0 lg:pr-2">Frontend & AI</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-end max-w-sm transition-opacity opacity-80 hover:opacity-100">
                  {frontendStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-3 py-1 rounded text-sm font-bold border cursor-default
                         ${tech === 'n8n' ? 'bg-purple-500/10 text-purple-300 border-purple-500/20' :
                          techColorMap[tech] || 'bg-graphite-dark/40 text-graphite-light border-graphite-dark/50'}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

            </div>
          </div>


          {/* --- BOTTOM ROW: STATS --- */}
          <motion.div
            variants={slideUpVariants}
            className="w-full border-t border-primary/20 pt-6 lg:pt-8 flex flex-wrap justify-center lg:justify-between items-center gap-8 lg:gap-16 pb-8"
          >
            {SEO_CONFIG.stats.map((stat) => (
              <div key={stat.key} className="text-center lg:text-left flex flex-col lg:flex-row items-center gap-1 lg:gap-4">
                <div className="text-3xl sm:text-4xl font-black text-primary leading-none">
                  {stat.value}
                </div>
                <div className="hidden lg:block w-[1px] h-8 bg-primary/20" />
                <div className="text-xs sm:text-sm font-medium text-text-muted uppercase tracking-wider max-w-[120px] text-center lg:text-left leading-snug">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

        </SectionWidthWrapper>
      </motion.div>

      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

    </section>
  );
}
