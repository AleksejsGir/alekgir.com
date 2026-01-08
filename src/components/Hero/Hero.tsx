'use client';

import { motion } from 'framer-motion';
import { ChevronDownIcon } from '@heroicons/react/24/outline';
import HeroBackground3D from './HeroBackground3DWrapper';
import HeroVisuals from './HeroVisuals';
import {
  slideUpVariants,
  staggerContainerVariants,
} from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import { SEO_CONFIG } from '@/config/seo.config';
import { useScrollToMultiple } from '@/hooks/useScrollTo';

// UI Color mapping for tech stack (Presentation concern - stays in component)
const techColorMap: Record<string, string> = {
  'Python': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  'Django': 'bg-green-600/20 text-green-400 border-green-600/30',
  'Django REST Framework': 'bg-green-600/20 text-green-400 border-green-600/30',
  'React': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
  'Next.js': 'bg-blue-400/20 text-blue-300 border-blue-400/30',
  'TypeScript': 'bg-blue-600/20 text-blue-300 border-blue-600/30',
  'PostgreSQL': 'bg-cyan-600/20 text-cyan-400 border-cyan-600/30',
  'Docker': 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
};

export default function Hero() {
  // Use custom hook for scroll navigation
  const { scrollToProjects, scrollToContact } = useScrollToMultiple({
    scrollToProjects: '#projects',
    scrollToContact: '#contact',
  });

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* 3D Background - Hero specific Matrix rain */}
      <HeroBackground3D />

      {/* Gradient overlay - fades to transparent at bottom for seamless transition */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#11161B]/60 via-transparent to-transparent z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full py-20"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionWidthWrapper>
          {/* TOP: Badge (above everything) */}
          <motion.div variants={slideUpVariants} className="mb-8 text-center">
            <span className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm font-medium border border-primary/30">
              <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
              {SEO_CONFIG.structuredData.availability}
            </span>
          </motion.div>

          <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-0 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left relative z-20">

              {/* Headline (H1 - SEO Optimized with UK keywords) */}
              <motion.h1
                variants={slideUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8 tracking-tighter drop-shadow-2xl relative z-20"
              >
                <span className="whitespace-nowrap">
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">
                    Full-Stack Developer
                  </span>{' '}
                  in United Kingdom
                </span>
                <br />
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-text-secondary font-bold">
                  Python • Django • React
                </span>
              </motion.h1>

              {/* Current Role & Focus */}
              <motion.p
                variants={slideUpVariants}
                className="text-lg sm:text-xl text-text-secondary mb-6"
              >
                Production experience with <span className="text-white font-semibold">AI automation platforms</span>
              </motion.p>

              <motion.p
                variants={slideUpVariants}
                className="text-base sm:text-lg text-text-secondary mb-8"
              >
                Building scalable microservices with Python/Go backend & React frontend
              </motion.p>

              {/* Specializations */}
              <motion.div
                variants={slideUpVariants}
                className="mb-8 space-y-3"
              >
                <h2 className="text-lg font-bold text-white mb-4 uppercase tracking-wider text-text-muted">Specializing in:</h2>
                {[
                  'Microservices & Scalable Applications',
                  'AI Integration (MCP, OpenAI, n8n)',
                  'Clean Architecture & SOLID Principles',
                  '75%+ Test Coverage & TDD'
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.1 }}
                    className="flex items-start gap-3 text-white"
                  >
                    <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.5)] mt-2 flex-shrink-0" />
                    <span className="text-base sm:text-lg">{item}</span>
                  </motion.div>
                ))}
              </motion.div>

            </div>

            {/* Right Column: Visuals */}
            <motion.div
              variants={slideUpVariants}
              className="hidden lg:flex justify-center lg:justify-end lg:mt-48"
            >
              <HeroVisuals />
            </motion.div>
          </div>

          {/* BOTTOM: Tech Stack, Buttons, Stats (below everything) */}
          <div className="mt-16 space-y-8">
            {/* Tech Stack */}
            <motion.div variants={slideUpVariants} className="text-center">
              <p className="text-sm text-text-muted mb-4 uppercase tracking-wider">Core Technologies</p>
              <div className="flex flex-wrap gap-2 justify-center">
                {SEO_CONFIG.skills.primary.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${techColorMap[tech] || 'bg-gray-500/20 text-gray-400 border-gray-500/30'}`}
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* AI & Automation Badge */}
            <motion.div variants={slideUpVariants} className="flex justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">AI & Automation:</span>
                <span className="text-white/80 text-sm font-medium">Go • FastAPI • MCP • n8n • OpenAI • Gemini</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={scrollToContact}
                className="px-8 py-4 bg-primary text-white font-semibold rounded-lg shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/40 hover:bg-primary-dark transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start a Project
              </motion.button>
              <motion.button
                onClick={scrollToProjects}
                className="px-8 py-4 bg-surface/80 backdrop-blur-sm text-white font-semibold rounded-lg border border-card-border hover:border-primary hover:bg-surface transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Projects
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={slideUpVariants}
              className="grid grid-cols-3 gap-6 max-w-2xl mx-auto"
            >
              {SEO_CONFIG.stats.map((stat, index) => (
                <motion.div
                  key={stat.key}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="text-3xl sm:text-4xl font-black text-primary mb-1 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm text-text-muted">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </SectionWidthWrapper>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 2, duration: 1 },
          y: { repeat: Infinity, duration: 1.5, ease: "easeInOut" }
        }}
      >
        <button
          onClick={scrollToProjects}
          className="flex flex-col items-center text-text-muted hover:text-white transition-colors"
          aria-label="Scroll to projects"
        >
          <span className="text-sm mb-2">Scroll</span>
          <ChevronDownIcon className="w-6 h-6" />
        </button>
      </motion.div>


    </section>
  );
}
