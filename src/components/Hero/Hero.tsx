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
                  {SEO_CONFIG.structuredData.availability}
                </span>
              </motion.div>

              {/* Headline (H1 - SEO Optimized with UK keywords) */}
              <motion.h1
                variants={slideUpVariants}
                className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-8 tracking-tighter drop-shadow-2xl relative z-20"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light relative inline-block">
                  Full-Stack Developer
                </span>{' '}
                in UK
                <br />
                <span className="text-3xl sm:text-4xl lg:text-5xl text-text-secondary font-bold">
                  Python • Django • React
                </span>
              </motion.h1>

              {/* Subheadline with credentials */}
              <motion.p
                variants={slideUpVariants}
                className="text-xl sm:text-2xl text-white font-medium mb-8"
              >
                European-certified ({SEO_CONFIG.achievements.certificationScore}) • {SEO_CONFIG.achievements.yearsExperience} years production experience • {SEO_CONFIG.location.region}, {SEO_CONFIG.location.country}
              </motion.p>

              {/* Services (SEO-optimized keywords) */}
              <motion.div
                variants={slideUpVariants}
                className="text-lg text-text-secondary mb-8 max-w-3xl mx-auto lg:mx-0"
              >
                <h2 className="text-2xl font-bold text-white mb-6">What I Build</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
                  {SEO_CONFIG.keywords.services.map((item, i) => (
                    <span key={i} className="flex items-center gap-3 text-white">
                      <span className="w-2 h-2 rounded-full bg-primary shadow-[0_0_10px_rgba(56,189,248,0.5)]" />
                      {item}
                    </span>
                  ))}
                </div>

                {/* Value Proposition */}
                <div className="mt-8 pt-6 border-t border-white/10 space-y-4">
                  <p className="text-white leading-relaxed">
                    {SEO_CONFIG.summary.long}
                  </p>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={slideUpVariants} className="mb-8">
                <p className="text-sm text-text-muted mb-3 uppercase tracking-wider">Core Technologies</p>
                <div className="flex flex-wrap gap-2 justify-center lg:justify-start">
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
              <motion.div variants={slideUpVariants} className="mb-12">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/10 border border-purple-500/30 rounded-lg">
                  <span className="text-purple-400 text-xs font-bold uppercase tracking-wider">AI & Automation:</span>
                  <span className="text-white/80 text-sm font-medium">Go • FastAPI • MCP • n8n • OpenAI • Gemini</span>
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
                {SEO_CONFIG.stats.map((stat, index) => (
                  <motion.div
                    key={stat.key}
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
