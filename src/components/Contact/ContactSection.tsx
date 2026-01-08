'use client';

import { motion } from 'framer-motion';
import { EnvelopeIcon } from '@heroicons/react/24/outline';
import ContactForm from './ContactForm';
import { slideUpVariants, staggerContainerVariants } from '@/lib/animations';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';
import { socialLinks, contactProcessSteps } from '@/data/contact-process';
import { SEO_CONFIG } from '@/config/seo.config';

export default function ContactSection() {
  return (
    <SectionWidthWrapper className="w-full">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainerVariants}
        className="grid lg:grid-cols-2 gap-12 lg:gap-20"
      >
        {/* Left Column: Info */}
        <motion.div variants={slideUpVariants} className="space-y-8">
          <div>
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-6 tracking-tight drop-shadow-lg">
              Let&apos;s Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light">Together</span>
            </h2>
            <p className="text-xl text-text-secondary leading-relaxed font-medium max-w-lg">
              Have a project in mind? I&apos;m currently available for new opportunities.
              Let&apos;s discuss how we can help your business grow with a <span className="text-white font-bold">premium digital solution</span>.
            </p>
          </div>

          <div className="space-y-6">
            {/* Email Card */}
            <ProjectStyleCard contentClassName="group p-8">
              <div className="flex items-center justify-between gap-6 w-full h-full">
                <div>
                  <p className="text-sm font-bold text-white/50 uppercase tracking-widest mb-1">Email Me</p>
                  <a href={`mailto:${SEO_CONFIG.contact.email}`} className="text-xl md:text-2xl font-bold text-white hover:text-primary transition-colors block break-all">
                    {SEO_CONFIG.contact.email}
                  </a>
                </div>
                <div className="w-16 h-16 shrink-0 bg-gradient-to-br from-primary/20 to-purple-500/20 rounded-2xl border border-white/10 flex items-center justify-center shadow-[0_0_20px_rgba(8,145,178,0.2)] group-hover:shadow-[0_0_30px_rgba(8,145,178,0.4)] transition-all duration-500">
                  <EnvelopeIcon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-300" />
                </div>
              </div>
            </ProjectStyleCard>

            {/* Socials Card */}
            <ProjectStyleCard contentClassName="p-8">
              <h3 className="text-sm font-bold text-white/50 mb-6 uppercase tracking-widest pl-1">Follow Me</h3>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 bg-white/[0.05] rounded-xl border border-white/10 text-white font-medium hover:bg-white/10 hover:border-primary/50 hover:text-primary hover:shadow-[0_0_15px_rgba(6,182,212,0.2)] transition-all duration-300"
                  >
                    {social.name}
                  </a>
                ))}
              </div>
            </ProjectStyleCard>

            {/* Next Steps Card */}
            <ProjectStyleCard contentClassName="p-8">
              <h3 className="text-sm font-bold text-white/50 mb-6 uppercase tracking-widest pl-1">What happens next?</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {contactProcessSteps.map((item) => (
                  <div key={item.step} className="flex items-start gap-3 group">
                    <span className="text-2xl font-black text-white/40 group-hover:text-primary transition-colors duration-300">{item.step}</span>
                    <div>
                      <div className="font-bold text-white leading-tight">{item.title}</div>
                      <div className="text-xs text-text-secondary mt-0.5">{item.description}</div>
                    </div>
                  </div>
                ))}
              </div>
            </ProjectStyleCard>
          </div>
        </motion.div>

        {/* Right Column: Form */}
        <motion.div variants={slideUpVariants} className="h-full">
          <ContactForm />
        </motion.div>
      </motion.div>
    </SectionWidthWrapper>
  );
}
