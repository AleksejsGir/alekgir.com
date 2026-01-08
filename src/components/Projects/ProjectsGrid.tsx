'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionWidthWrapper from '@/components/shared/ui/SectionWidthWrapper';
import ProjectCard from './ProjectCard';
import { Project } from '@/types';

interface ProjectsGridProps {
    projects: Project[];
}

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
    // Container animation
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
                delayChildren: 0.2
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: [0.25, 0.46, 0.45, 0.94]
            }
        }
    };

    return (
        <section className="relative py-20 px-4 md:px-8 overflow-hidden">
            {/* Section Header */}
            <SectionWidthWrapper className="mb-16 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-block mb-4 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-md"
                >
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light font-black text-sm uppercase tracking-wider">
                        Featured Work
                    </span>
                </motion.div>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.05 }}
                    className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-4 tracking-tight drop-shadow-md"
                >
                    Our Projects
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto font-medium"
                >
                    Explore our latest projects crafted with precision and creativity
                </motion.p>
            </SectionWidthWrapper>

            {/* Grid Container - 2 Cards per Row */}
            <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.1 }}
                variants={containerVariants}
                className="w-full"
            >
                <SectionWidthWrapper>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
                        {projects.map((project, index) => (
                            <motion.div
                                key={project.id}
                                variants={cardVariants}
                            >
                                <ProjectCard
                                    project={project}
                                    index={index}
                                />
                            </motion.div>
                        ))}
                    </div>
                </SectionWidthWrapper>
            </motion.div>
        </section>
    );
}
