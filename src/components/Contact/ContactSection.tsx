import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';
import ContactForm from './ContactForm';
import { slideUpVariants, staggerContainerVariants } from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';
import { socialLinks } from '@/data/contact-process';
import { SEO_CONFIG } from '@/config/seo.config';

export default function ContactSection() {
  return (
    <SectionWidthWrapper className="w-full">
      {/* CENTRED HEADER */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={slideUpVariants}
        className="text-center mb-16 lg:mb-24"
      >
        <div className="badge-primary mb-4">
          Contact
        </div>
        <h2 className="heading-display drop-shadow-lg">
          Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Together</span>
        </h2>
        <p className="text-text-muted mt-4 text-sm uppercase tracking-widest font-medium">
          Start your project today
        </p>
      </motion.div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start"
      >
        {/* LEFT COLUMN: Extended Profile Info + Links */}
        <motion.div variants={staggerContainerVariants} className="space-y-8">

          {/* 1. EXTENDED PROFILE BLOCK */}
          <motion.div variants={slideUpVariants}>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-8 mb-8">
              {/* Photo */}
              <div className="relative group shrink-0">
                <div className="absolute inset-0 rounded-full border border-dashed border-primary/30 animate-[spin_20s_linear_infinite]" />
                <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-primary/20 shadow-lg shadow-primary/10">
                  <Image
                    src="/images/a.giruckis.webp"
                    alt="Aleksejs Giruckis"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 bg-background/90 backdrop-blur border border-primary/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-bold text-primary whitespace-nowrap">UK Based</span>
                </div>
              </div>

              {/* Detailed Profile Info */}
              <div className="text-center sm:text-left flex-1">
                <h3 className="text-4xl sm:text-5xl font-black text-white mb-2 tracking-tight">Aleksejs Giruckis</h3>
                <p className="text-2xl font-bold text-primary mb-6">Full-Stack Developer</p>

                <div className="space-y-4 text-text-secondary leading-relaxed">
                  <p>
                    I build <span className="text-white font-medium">production-ready web apps</span> that solve real business problems.
                    My work is backed by <span className="text-primary font-bold">solid engineering principles</span>, <span className="text-white">comprehensive testing</span>, and a passion for clean architecture.
                  </p>
                  <p>
                    From robust <span className="text-white">Django/Go backends</span> to polished <span className="text-white">React frontends</span>, I handle the full lifecycle.
                    With <span className="text-white">38+ delivered projects</span>, I guarantee maintainability using Docker, CI/CD, and TDD with <span className="text-primary font-bold">75%+</span> test coverage.
                  </p>
                  <p>
                    Beyond code, I focus on <span className="text-white">clear communication</span> and business logic.
                    I understand that technical excellence must align with your strategic goals, ensuring reliable delivery and seamless scaling as your product grows.
                  </p>
                  <p>
                    I specialize in <span className="text-white">AI agents & automation</span>, leveraging modern LLMs to streamline your business workflows.
                    By adhering to <span className="text-white">cloud-native patterns</span> and security best practices, I ensure your infrastructure is scalable and resilient.
                  </p>
                  <p>
                    Currently available for <span className="text-white font-bold">long-term collaboration</span> to deliver <span className="text-white font-bold">effective digital solutions</span> for your business.
                  </p>
                </div>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap justify-center sm:justify-start gap-2 mt-6">
                  {['Python', 'Django', 'React', 'Next.js', 'PostgreSQL', 'Docker', 'AWS'].map((tech) => (
                    <span key={tech} className="text-[10px] uppercase tracking-wider px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-text-secondary font-medium">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. UNIFIED CONTACT BAR (Minimalist: Top Border, No Background) */}
          <div className="pt-6 border-t border-primary/30">
            <div className="flex flex-wrap items-center gap-x-6 gap-y-4 text-xl font-bold">

              {/* Email Group */}
              <div className="flex items-center gap-3">
                <span className="text-white">Email Me:</span>
                <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-primary hover:text-white transition-colors tracking-wide">
                  {SEO_CONFIG.contact.email}
                </a>
              </div>

              {/* Separator */}
              <span className="hidden sm:block text-primary">|</span>

              {/* Socials Group */}
              {socialLinks.map((social, index) => (
                <div key={social.name} className="flex items-center gap-6">
                  {index > 0 && <span className="hidden sm:block text-primary">|</span>}
                  <a
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-white transition-colors"
                  >
                    {social.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: Form (Steady Card) */}
        <motion.div variants={slideUpVariants} className="h-full sticky top-24">
          <ContactForm />
        </motion.div>
      </motion.div>
    </SectionWidthWrapper>
  );
}
