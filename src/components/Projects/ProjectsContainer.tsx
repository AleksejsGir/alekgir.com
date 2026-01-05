'use client';

/**
 * Container for Projects Section with unified Code Compilation background
 * Following Single Responsibility - only manages projects container layout
 */

import dynamic from 'next/dynamic';

// Dynamic import for SSR safety
const CodeCompilationCanvas = dynamic(
    () => import('@/components/Backgrounds/CodeCompilationCanvas'),
    {
        ssr: false,
        loading: () => (
            <div className="absolute inset-0 bg-gradient-to-br from-background via-surface to-background" />
        ),
    }
);

interface ProjectsContainerProps {
    children: React.ReactNode;
}

export default function ProjectsContainer({ children }: ProjectsContainerProps) {
    return (
        <div id="projects" className="relative">
            {/* Projects Grid */}
            <div className="relative z-10">{children}</div>
        </div>
    );
}
