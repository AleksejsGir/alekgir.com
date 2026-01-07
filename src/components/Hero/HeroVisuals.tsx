'use client';

import { motion } from 'framer-motion';
import {
    CommandLineIcon,
    CpuChipIcon,
    SparklesIcon
} from '@heroicons/react/24/outline';

export default function HeroVisuals() {
    return (
        <div className="relative w-full flex justify-center lg:justify-end items-center">
            {/* Container Area - defined height to ensure space for floating elements */}
            <div className="relative w-[300px] h-[300px] sm:w-[500px] sm:h-[500px] flex items-center justify-center">

                {/* Central Glow */}
                <div className="absolute inset-0 bg-primary/20 blur-[100px] opacity-50" />

                {/* The Core: Clean Video Display */}
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 w-72 h-72 sm:w-96 sm:h-96"
                    style={{
                        maskImage: 'radial-gradient(circle, black 20%, transparent 85%)',
                        WebkitMaskImage: 'radial-gradient(circle, black 20%, transparent 85%)'
                    }}
                >
                    <video
                        src="/images/alekgirdev.mp4"
                        poster="/images/alekgirdev_logo.png"
                        autoPlay
                        loop
                        muted
                        playsInline
                        aria-label="AlekGirDev - Full-Stack Developer Portfolio Video"
                        className="w-full h-full object-cover opacity-90"
                    />
                </motion.div>

                {/* Floating Card 1: Experience/Rating - Top Right */}

                <motion.div
                    animate={{ y: -10 }}
                    transition={{ duration: 3, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 0 }}
                    className="absolute -right-4 top-10 sm:right-0 sm:top-0 z-20 will-change-transform"
                >
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                        <div className="p-2 bg-primary/20 rounded-lg">
                            <SparklesIcon className="w-6 h-6 text-primary" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">Top Rated</div>
                            <div className="text-xs text-text-secondary">Upwork & Direct</div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Card 2: Tech - Bottom Left */}

                <motion.div
                    animate={{ y: 12 }}
                    transition={{ duration: 4, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 1 }}
                    className="absolute -left-4 bottom-20 sm:left-0 sm:bottom-10 z-20 will-change-transform"
                >
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-xl flex items-center gap-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                            <CpuChipIcon className="w-6 h-6 text-purple-400" />
                        </div>
                        <div>
                            <div className="text-white font-bold text-sm">AI Agents</div>
                            <div className="text-xs text-text-secondary">MCP & n8n Expert</div>
                        </div>
                    </div>
                </motion.div>

                {/* Floating Card 3: Backend - bottom Right small */}

                <motion.div
                    animate={{ y: -8 }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut", delay: 2 }}
                    className="absolute right-10 bottom-0 z-20 will-change-transform"
                >
                    <div className="bg-black/80 backdrop-blur-md border border-white/10 px-4 py-2 rounded-full shadow-xl flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span className="text-xs font-medium text-white">Available</span>
                    </div>
                </motion.div>

                {/* Floating Code Snippet - Top Left (Visual Only) */}

                <motion.div
                    animate={{ y: 10, opacity: 0.8 }}
                    initial={{ opacity: 0.6 }}
                    transition={{
                        y: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" },
                        opacity: { duration: 5, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }
                    }}
                    className="absolute left-4 top-20 sm:left-0 sm:top-12 z-0 hidden sm:block will-change-transform"
                >
                    <div className="bg-black/60 backdrop-blur-sm border border-white/5 p-3 rounded-xl transform -rotate-6">
                        <div className="flex gap-1 mb-2">
                            <div className="w-2 h-2 rounded-full bg-red-500/50" />
                            <div className="w-2 h-2 rounded-full bg-yellow-500/50" />
                            <div className="w-2 h-2 rounded-full bg-green-500/50" />
                        </div>
                        <div className="space-y-1">
                            <div className="h-1.5 w-16 bg-white/10 rounded-full" />
                            <div className="h-1.5 w-10 bg-white/10 rounded-full" />
                            <div className="h-1.5 w-20 bg-primary/20 rounded-full" />
                        </div>
                    </div>
                </motion.div>

            </div>
        </div>
    );
}
