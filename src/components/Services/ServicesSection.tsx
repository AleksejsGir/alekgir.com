'use client';

import { motion } from 'framer-motion';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ServiceCard from './ServiceCard';
import ServicesContainer from './ServicesContainer';
import { staggerContainerVariants, slideUpVariants } from '@/lib/animations';
import { services } from '@/data/services';

export default function ServicesSection() {
  return (
    <ServicesContainer>
      <SectionWidthWrapper>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainerVariants}
        >
          <motion.div variants={slideUpVariants} className="text-center mb-12">
            <div className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 text-primary font-bold text-sm uppercase tracking-wider backdrop-blur-md">
              What We Do
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md">
              Our Services
            </h2>
            <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium">
              Production-grade solutions with Django, React, FastAPI, and Telegram bots. Built with clean architecture and 75%+ test coverage.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                service={service}
              />
            ))}
          </div>
        </motion.div>
      </SectionWidthWrapper>
    </ServicesContainer>
  );
}
