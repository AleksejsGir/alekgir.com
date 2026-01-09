'use client';

import React, { ReactNode } from 'react';

interface ProjectStyleCardProps {
    children: ReactNode;
    className?: string; // For outer wrapper (dimensions, positioning)
    contentClassName?: string; // For the inner content container
}

export default function ProjectStyleCard({
    children,
    className = '',
    contentClassName = ''
}: ProjectStyleCardProps) {
    return (
        <div className={`relative group rounded-2xl flex flex-col ${className}`}>
            {/* Gradient Border Effect - Absolute to fill the space behind */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-light to-primary rounded-2xl opacity-50 blur-sm group-hover:opacity-75 transition-opacity duration-500" />

            {/* Card Container - Flex-1 to fill available space, margin for border width */}
            <div className={`relative flex-1 w-full m-[1px] rounded-2xl overflow-hidden bg-gradient-to-br from-black/95 via-black/90 to-black/95 backdrop-blur-xl border border-primary/20 shadow-2xl ${contentClassName}`}>
                <div className="relative z-10 w-full h-full">
                    {children}
                </div>
            </div>
        </div>
    );
}
