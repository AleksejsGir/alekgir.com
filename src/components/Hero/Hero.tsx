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

// Tech stack icons/labels
// Tech stack icons/labels
const techStack = [
  { name: 'Python', color: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30' },
  { name: 'Go', color: 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30' },
  { name: 'React', color: 'bg-blue-500/20 text-blue-400 border-blue-500/30' },
  { name: 'MCP', color: 'bg-purple-500/20 text-purple-400 border-purple-500/30' },
  { name: 'n8n', color: 'bg-pink-500/20 text-pink-400 border-pink-500/30' },
  { name: 'AI Agents', color: 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30' },
];

// Statistics
const stats = [
  { value: '38+', label: 'Projects Delivered' },
  { value: '23', label: 'Telegram Bots' },
  { value: '94/100', label: 'European Certified' },
];

export default function Hero() {
  const scrollToProjects = () => {
    const projectsSection = document.querySelector('#projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToContact = () => {
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* 3D Background */}
      <HeroBackground3D />

      {/* Gradient overlay for better readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80 z-[1]" />

      {/* Content */}
      <motion.div
        className="relative z-10 w-full py-20"
        variants={staggerContainerVariants}
        initial="hidden"
        animate="visible"
      >
        <SectionWidthWrapper>
          <div className="grid lg:grid-cols-[55%_45%] gap-8 lg:gap-0 items-center">
            {/* Left Column: Text Content */}
            <div className="text-center lg:text-left relative z-20">
              {/* Badge */}
              <motion.div variants={slideUpVariants} className="mb-6">
                <span className="inline-flex items-center px-4 py-2 bg-primary/20 text-primary-light rounded-full text-sm font-medium border border-primary/30">
                  <span className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse" />
                  Available for new projects
                </span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                variants={slideUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-none mb-24 tracking-tighter drop-shadow-2xl lg:whitespace-nowrap lg:-mr-24 relative z-20"
              >
                Premium{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light relative inline-block">
                  Full-Stack
                </span>{' '}
                Engineering
              </motion.h1>

              {/* Subheadline (Static) */}
              <motion.div
                variants={slideUpVariants}
                className="text-lg sm:text-xl text-text-secondary mb-8 max-w-3xl mx-auto lg:mx-0 leading-relaxed"
              >
                <div className="mb-14 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8 text-xl md:text-2xl text-white leading-relaxed font-medium">
                  {[
                    'AI Automation platforms',
                    'Telegram Bot ecosystems',
                    'Enterprise Web Applications',
                    'Real-time Microservices',
                    'Production-grade APIs',
                    'API Development'
                  ].map((item, i) => (
                    <span key={i} className="flex items-center gap-3">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      {item}
                    </span>
                  ))}
                </div>
                {/* Value Proposition */}
                <div className="pt-10 border-t border-white/10 mt-12 text-lg text-text-secondary leading-relaxed space-y-6">
                  <p>
                    I focus on building <strong className="text-white font-medium">automated digital infrastructure</strong>.
                    My workflow integrates advanced AI models (MCP) with robust backend systems to eliminate operational bottlenecks.
                  </p>
                  <p>
                    Unlike standard development, I engineer <span className="text-primary-light">ecosystems</span>.
                    From intelligent <span className="text-white font-medium">Telegram bots</span> to high-load <span className="text-white font-medium">web platforms</span>,
                    I deliver scalable architecture that works harder than your competitors.
                  </p>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={slideUpVariants} className="mb-12">
                <p className="text-sm text-text-muted mb-3 uppercase tracking-wider">Tech Stack</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
                  {techStack.map((tech, index) => (
                    <motion.span
                      key={tech.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium border ${tech.color}`}
                    >
                      {tech.name}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={slideUpVariants} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
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
                className="mt-12 grid grid-cols-3 gap-2 sm:gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 + index * 0.1 }}
                    className="text-center lg:text-left"
                  >
                    <div className="text-3xl sm:text-4xl font-black text-primary mb-1 tracking-tight">
                      {stat.value}
                    </div>
                    <div className="text-sm text-text-muted">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Right Column: Visuals */}
            <motion.div
              variants={slideUpVariants}
              className="hidden lg:flex justify-center lg:justify-end lg:mt-20"
            >
              <HeroVisuals />
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
