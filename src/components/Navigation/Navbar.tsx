'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { fadeInVariants } from '@/lib/animations';
import { navLinks } from '@/data/navigation';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Determine visibility
      if (currentScrollY < 10) {
        setIsVisible(true);
      } else {
        // Show if scrolling up, hide if scrolling down
        setIsVisible(currentScrollY < lastScrollY);
      }

      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <>
      <motion.nav
        initial="visible"
        animate={isVisible ? "visible" : "hidden"}
        variants={{
          visible: { y: 0, opacity: 1 },
          hidden: { y: -100, opacity: 0 }
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className={`fixed top-4 lg:top-8 left-4 right-4 max-w-[95%] 2xl:max-w-screen-2xl mx-auto z-50 transition-all duration-300 rounded-2xl border ${isScrolled
          ? 'bg-primary/[0.20] backdrop-blur-xl border-primary/30 shadow-lg shadow-primary/10'
          : 'bg-transparent border-transparent hover:bg-primary/[0.20] hover:backdrop-blur-xl hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10'
          }`}
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <motion.div
              className="flex-shrink-0"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="block relative h-12 w-auto aspect-[3/1]"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/images/alekgir_logo.JPG"
                  alt="AlekGir"
                  className="h-full w-auto object-contain rounded-xl border border-primary/20 shadow-lg shadow-primary/10"
                />
              </a>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className={`text-base font-bold tracking-tight transition-all relative group ${activeSection === link.href
                    ? 'text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light'
                    : 'text-text-secondary hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-primary hover:to-primary-light'
                    }`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  {link.name}
                  {activeSection === link.href && (
                    <motion.div
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-primary-light rounded-full"
                      layoutId="activeSection"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 rounded-lg text-text-secondary hover:text-white hover:bg-white/10 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? (
                  <XMarkIcon className="h-6 w-6" />
                ) : (
                  <Bars3Icon className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={{ x: 'calc(100% + 1rem)' }}
        animate={{ x: isMobileMenuOpen ? 0 : 'calc(100% + 1rem)' }}
        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-28 right-4 bottom-4 w-64 bg-surface/95 backdrop-blur-xl border border-primary/20 shadow-2xl z-40 md:hidden rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href);
              }}
              className="text-lg text-text-secondary hover:text-primary transition-colors"
              whileTap={{ scale: 0.95 }}
            >
              {link.name}
            </motion.a>
          ))}
        </div>
      </motion.div>

      {/* Mobile menu backdrop */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-30 md:hidden"
        />
      )}
    </>
  );
}
