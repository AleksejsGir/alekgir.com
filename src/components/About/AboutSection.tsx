import Image from 'next/image';
import { motion } from 'framer-motion';
import AboutContainer from './AboutContainer';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';
import Counter from '@/components/shared/ui/Counter';
import { SEO_CONFIG } from '@/config/seo.config';

// UI mapping: category colors (Presentation concern - stays in component)
// Data source: SEO_CONFIG.skills (Single Responsibility - data from config)
const categoryColorMap: Record<string, string> = {
  "Backend": "bg-green-600/20 text-green-400 border-green-600/30",
  "Frontend": "bg-blue-500/20 text-blue-400 border-blue-500/30",
  "Database & DevOps": "bg-cyan-600/20 text-cyan-400 border-cyan-600/30",
  "AI & Automation": "bg-purple-500/20 text-purple-400 border-purple-500/30",
};

// Skill categories structure (maps SEO_CONFIG data to UI categories)
const skillCategories = [
  {
    title: "Backend",
    skills: SEO_CONFIG.skills.backend,
    color: categoryColorMap["Backend"]
  },
  {
    title: "Frontend",
    skills: SEO_CONFIG.skills.frontend,
    color: categoryColorMap["Frontend"]
  },
  {
    title: "Database & DevOps",
    skills: SEO_CONFIG.skills.tools,
    color: categoryColorMap["Database & DevOps"]
  },
  {
    title: "AI & Automation",
    skills: SEO_CONFIG.skills.ai,
    color: categoryColorMap["AI & Automation"]
  },
];

// Quantified achievements (from SEO_CONFIG)
const stats = [
  { label: "Projects Delivered", value: parseInt(SEO_CONFIG.achievements.projectsDelivered), suffix: "+" },
  { label: "Years Experience", value: parseInt(SEO_CONFIG.achievements.yearsExperience), suffix: "+" },
  { label: "Certification Score", value: parseInt(SEO_CONFIG.achievements.certificationScore), suffix: "/100" },
];

export default function AboutSection() {
  return (
    <AboutContainer>
      <SectionWidthWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
          className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column: Image/Profile */}
          <motion.div variants={slideUpVariants} className="flex justify-center md:justify-start relative">
            {/* Decorative Elements */}
            <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-purple-600/20 rounded-[2.5rem] blur-2xl opacity-50 animate-pulse" />

            <div className="relative w-72 h-72 md:w-96 md:h-96 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-white/5 rounded-[2.5rem] border border-white/10 backdrop-blur-sm rotate-6 group-hover:rotate-3 transition-transform duration-500" />

              <div className="relative w-full h-full bg-black/40 rounded-[2.5rem] border border-white/10 overflow-hidden shadow-2xl transition-transform duration-500 group-hover:-translate-y-2">
                <Image
                  src="/images/a.giruckis.webp"
                  alt="Aleksejs Giruckis - Full-Stack Developer UK - Python Django React Developer"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
              </div>
            </div>
          </motion.div>

          {/* Right Column: Content */}
          <motion.div variants={staggerContainerVariants}>
            <motion.div variants={slideUpVariants} className="mb-2">
              <span className="px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary bg-primary/10 rounded-full border border-primary/20">
                About Me
              </span>
            </motion.div>

            <motion.h2 variants={slideUpVariants} className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-8 tracking-tight drop-shadow-md">
              European-Certified Developer
            </motion.h2>

            <motion.div
              variants={slideUpVariants}
              className="mb-10"
            >
              <ProjectStyleCard
                className="w-full"
                contentClassName="space-y-6 text-lg text-text-secondary leading-relaxed font-medium p-6 md:p-8"
              >
                <p>
                  <span className="text-white font-bold">Full-Stack Developer</span> based in <span className="text-primary font-bold">{SEO_CONFIG.location.region}, {SEO_CONFIG.location.country}</span>, specializing in <span className="text-white font-bold">Python, Django, and React</span> development. With <span className="text-primary font-bold">{SEO_CONFIG.achievements.certificationScore}</span> European certification score and <span className="text-white font-bold">{SEO_CONFIG.achievements.yearsExperience} years of production experience</span>, I deliver high-quality web applications.
                </p>
                <p>
                  Successfully delivered <span className="text-primary font-bold">{SEO_CONFIG.achievements.projectsDelivered} client projects</span>, including Django web applications, React/Next.js frontends, Telegram bot solutions, and AI automation platforms working with cutting-edge technologies.
                </p>
                <p>
                  My development approach emphasizes <span className="text-white font-bold">Test-Driven Development</span> with <span className="text-primary font-bold">{SEO_CONFIG.achievements.testCoverage} test coverage</span>, <span className="text-white font-bold">Clean Architecture</span> principles, and modern DevOps practices including Docker and CI/CD pipelines.
                </p>
              </ProjectStyleCard>
            </motion.div>

            {/* Skills Tags - Organized by Category */}
            <motion.div variants={slideUpVariants} className="mb-12 space-y-6">
              <h3 className="text-sm font-bold text-white/50 mb-4 uppercase tracking-widest pl-1">Complete Tech Stack</h3>

              {skillCategories.map((category, catIndex) => (
                <div key={category.title} className="space-y-2">
                  <p className="text-xs font-bold text-white/40 uppercase tracking-wider pl-1">{category.title}</p>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, index) => (
                      <motion.span
                        key={skill}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: (catIndex * 0.1) + (index * 0.03) }}
                        className={`px-4 py-1.5 rounded-xl text-sm font-bold border ${category.color} hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default`}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </div>
                </div>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div variants={slideUpVariants} className="grid grid-cols-3 gap-2 sm:gap-4">
              {stats.map((stat) => (
                <ProjectStyleCard
                  key={stat.label}
                  className="w-full"
                  contentClassName="p-3 sm:p-4 flex flex-col items-center justify-center text-center"
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                  <p className="text-[10px] sm:text-xs md:text-sm font-bold text-white/70 mt-2 uppercase tracking-wide group-hover:text-white transition-colors leading-tight">
                    {stat.label}
                  </p>
                </ProjectStyleCard>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </SectionWidthWrapper>
    </AboutContainer>
  );
}
