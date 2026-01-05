import Image from 'next/image';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { useEffect, useRef } from 'react';
import AboutContainer from './AboutContainer';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';

// Counter Component
function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 50, stiffness: 100 });
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toString() + suffix;
      }
    });
    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref} className="text-3xl sm:text-4xl md:text-5xl font-black text-primary tracking-tight">{value}{suffix}</span>;
}

const skills = [
  "Python", "Go", "React", "Next.js",
  "Django", "FastAPI", "PostgreSQL", "Docker",
  "MCP", "n8n", "OpenAI/Gemini", "Clean Arch"
];

const stats = [
  { label: "Client Projects", value: 38, suffix: "+" },
  { label: "Telegram Bots", value: 23, suffix: "+" },
  { label: "IT Background", value: 14, suffix: "+" },
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
                  alt="A. Giruckis Profile"
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

            <motion.h2 variants={slideUpVariants} className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-8 tracking-tight drop-shadow-md">
              My Journey
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
                  I am a <span className="text-white font-bold">Full-Stack Developer</span> specializing in <span className="text-primary font-bold">AI Automation</span> and high-performance microservices. I define myself by delivery: <span className="text-white font-bold">38+ client projects</span> shipped, including 23 complex Telegram bots and 12 business websites.
                </p>
                <p>
                  My stack is production-focused: <span className="text-primary font-bold">Python, Go, React</span>, and cutting-edge AI tools like <span className="text-white font-bold">MCP (Model Context Protocol) and n8n</span>. I combine 3 years of heavy coding with 14+ years of IT infrastructure experience to build systems that last.
                </p>
              </ProjectStyleCard>
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={slideUpVariants} className="mb-12">
              <h3 className="text-sm font-bold text-white/50 mb-4 uppercase tracking-widest pl-1">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.03 }}
                    className="px-4 py-1.5 bg-white/[0.03] backdrop-blur-md text-white/80 rounded-xl text-sm font-bold border border-white/10 hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
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
