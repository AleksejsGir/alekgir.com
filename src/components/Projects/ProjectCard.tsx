'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Project } from '@/types';
import { useProjectTheme } from '@/hooks/useProjectTheme';
import ProjectStyleCard from '@/components/shared/ui/ProjectStyleCard';

interface ProjectCardProps {
    project: Project;
    index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
    const theme = useProjectTheme(project.category);

    // Animation variants
    const textVariants = {
        hidden: { opacity: 0, x: -50 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
            }
        }
    };

    const videoVariants = {
        hidden: { opacity: 0, scale: 0.95 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94],
                delay: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: (custom: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                delay: custom * 0.1,
                ease: [0.25, 0.46, 0.45, 0.94],
            }
        })
    };

    return (
        <ProjectStyleCard className="w-full h-[600px] md:h-[500px] lg:h-[450px]">
            {/* Grid Layout for Desktop */}
            <div className="relative z-10 w-full h-full lg:grid lg:grid-cols-2">

                {/* Text Content - Below on Mobile, Left on Desktop */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={textVariants}
                    className="relative z-20 flex flex-col justify-between p-6 md:p-8 h-full pt-72 md:pt-96 lg:pt-8"
                >
                    {/* Top Section - Category, Title, Description, Tech Stack */}
                    <div className="space-y-3 md:space-y-4">
                        {/* Category Badge */}
                        <motion.div custom={0} variants={itemVariants}>
                            <span className="inline-flex items-center px-3 py-1.5 bg-primary/20 border border-primary/30 rounded-full shadow-lg shadow-primary/20">
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light text-xs font-black uppercase tracking-wider">
                                    {project.category}
                                </span>
                            </span>
                        </motion.div>

                        {/* Title */}
                        <motion.h2
                            custom={1}
                            variants={itemVariants}
                            className="text-2xl md:text-3xl font-black text-white tracking-tight leading-tight"
                        >
                            {project.name}
                        </motion.h2>

                        {/* Description */}
                        <motion.p
                            custom={2}
                            variants={itemVariants}
                            className="text-sm md:text-base text-gray-300 font-medium leading-relaxed line-clamp-3"
                        >
                            {project.description}
                        </motion.p>

                        {/* Tech Stack */}
                        <motion.div
                            custom={3}
                            variants={itemVariants}
                            className="flex flex-wrap gap-1.5"
                        >
                            {project.frontend.slice(0, 3).map((tech, idx) => (
                                <motion.span
                                    key={tech}
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.5 + idx * 0.05, duration: 0.3 }}
                                    className="px-2.5 py-1 bg-white/10 text-gray-200 rounded-md text-xs font-semibold border border-white/20 backdrop-blur-sm"
                                >
                                    {tech}
                                </motion.span>
                            ))}
                        </motion.div>
                    </div>

                    {/* Bottom Section - CTA Button */}
                    <motion.div custom={4} variants={itemVariants} className="mt-4">
                        <Link
                            href={`/projects/${project.slug}`}
                            className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-black rounded-lg font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 group/btn text-sm"
                        >
                            View Case
                            <svg className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                            </svg>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* Video/Image - Absolute Top on Mobile, Right on Desktop */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.3 }}
                    variants={videoVariants}
                    className="absolute top-0 left-0 right-0 h-64 md:h-80 lg:relative lg:h-full overflow-hidden z-10"
                >
                    <div className="absolute inset-0 overflow-hidden">
                        {project.mockupImage ? (
                            project.mockupImage.endsWith('.mp4') ? (
                                <video
                                    autoPlay
                                    loop
                                    muted
                                    playsInline
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                >
                                    <source src={project.mockupImage} type="video/mp4" />
                                    Your browser does not support the video tag.
                                </video>
                            ) : (
                                <Image
                                    src={project.mockupImage}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
                                    priority={index < 2}
                                    unoptimized={project.mockupImage.endsWith('.gif')}
                                />
                            )
                        ) : (
                            <div className={`w-full h-full bg-gradient-to-br ${theme.glow1} to-black`} />
                        )}

                        {/* Gradient Overlay - Bottom on Mobile, Left on Desktop */}
                        <div className="absolute inset-0 bg-gradient-to-b lg:bg-gradient-to-r from-transparent via-black/30 lg:via-black/60 to-black/90 lg:from-black/95 lg:to-transparent lg:w-32" />
                    </div>
                </motion.div>
            </div>
        </ProjectStyleCard>
    );
}
