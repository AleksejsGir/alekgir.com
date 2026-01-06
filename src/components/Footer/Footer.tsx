'use client';

import { motion } from 'framer-motion';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    const section = document.querySelector(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-secondary text-white py-12 border-t border-card-border">
      <SectionWidthWrapper>
        <div className="flex flex-col md:flex-row justify-between gap-12 lg:gap-20 mb-12">
          {/* Brand */}
          <div className="max-w-sm">
            {/* Logo */}
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="mb-6 block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              aria-label="Scroll to top"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/alekgirdev_logo.png"
                alt="AlekGirDev"
                className="h-16 w-auto object-contain"
              />
            </motion.button>
            <p className="text-text-secondary leading-relaxed">
              Full-Stack Developer specializing in Python, Django, and React. European-certified (94/100) with 3+ years production experience. Building quality web solutions.
            </p>
          </div>

          {/* Right Side Links */}
          <div className="flex gap-10 md:gap-16 lg:gap-24">
            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Quick Links</h4>
              <ul className="space-y-2.5">
                {['Projects', 'Services', 'About', 'Contact'].map((item) => (
                  <li key={item}>
                    <button
                      onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                      className="text-text-secondary hover:text-primary transition-colors text-sm sm:text-base"
                    >
                      {item}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-lg font-bold text-white mb-4 tracking-tight">Connect</h4>
              <ul className="space-y-2.5">
                <li>
                  <a href="https://github.com/AleksejsGir" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm sm:text-base">GitHub</a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/in/aleksejs-giruckis-0569a7353" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm sm:text-base">LinkedIn</a>
                </li>
                <li>
                  <a href="https://twitter.com/agwebstudio" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-primary transition-colors text-sm sm:text-base">Twitter</a>
                </li>
                <li>
                  <a href="mailto:contact@agwebstudio.com" className="text-text-secondary hover:text-primary transition-colors text-sm sm:text-base">Email</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-card-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-text-muted">
          <p>&copy; {currentYear} AlekGirDev. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </SectionWidthWrapper>
    </footer>
  );
}
