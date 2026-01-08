'use client';

/**
 * React wrapper for CodeCompilationBackground
 * Following Single Responsibility - only handles React integration
 * Following Dependency Inversion - depends on ICanvasAnimation interface
 */

import { useEffect, useRef, useCallback, useMemo } from 'react';
import { CodeCompilationBackground } from './CodeCompilationBackground';
import type { BackgroundConfig } from './types';
import { THEME } from '@/config/theme.config';

const DEFAULT_CONFIG: BackgroundConfig = {
    colors: {
        primary: THEME.canvas.primary,
        primaryLight: THEME.canvas.primaryLight,
        primaryDark: THEME.canvas.primaryDark,
        background: THEME.canvas.background,
    },
    animation: {
        mouseInteractionRadius: 250,
        speed: 1,
    },
    enableMouseInteraction: true,
    enableResize: true,
};

interface CodeCompilationCanvasProps {
    config?: Partial<BackgroundConfig>;
    className?: string;
}

export default function CodeCompilationCanvas({
    config: customConfig,
    className = '',
}: CodeCompilationCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animationRef = useRef<CodeCompilationBackground | null>(null);

    // Merge custom config with defaults - memoized to prevent recreation on every render
    const config: BackgroundConfig = useMemo(
        () => ({
            ...DEFAULT_CONFIG,
            ...customConfig,
            colors: { ...DEFAULT_CONFIG.colors, ...customConfig?.colors },
            animation: { ...DEFAULT_CONFIG.animation, ...customConfig?.animation },
        }),
        [customConfig]
    );

    const initializeAnimation = useCallback(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        // Set canvas size to parent container (covers all 8 project sections)
        const parent = canvas.parentElement;
        if (!parent) return;

        canvas.width = parent.clientWidth;
        canvas.height = parent.clientHeight;

        // Create and initialize animation
        const animation = new CodeCompilationBackground(config);
        animation.initialize(canvas, ctx);

        animationRef.current = animation;
    }, [config]);

    useEffect(() => {
        initializeAnimation();

        const canvas = canvasRef.current;
        const animation = animationRef.current;
        if (!canvas || !animation) return;

        // Handle resize
        const handleResize = () => {
            if (config.enableResize && canvas.parentElement) {
                canvas.width = canvas.parentElement.clientWidth;
                canvas.height = canvas.parentElement.clientHeight;
                animation.resize({ width: canvas.width, height: canvas.height });
            }
        };

        // Handle mouse move - convert viewport coordinates to canvas coordinates
        const handleMouseMove = (e: MouseEvent) => {
            if (config.enableMouseInteraction) {
                const rect = canvas.getBoundingClientRect();
                animation.handleMouseMove({
                    x: e.clientX - rect.left,
                    y: e.clientY - rect.top
                });
            }
        };

        window.addEventListener('resize', handleResize);
        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            animation.destroy();
            animationRef.current = null;
        };
    }, [config, initializeAnimation]);

    return (
        <div className={`absolute inset-0 z-0 ${className}`}>
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ background: 'transparent' }}
            />
            {/* Vignette overlay for better readability */}
            <div
                className="absolute inset-0 pointer-events-none"
                style={{
                    background:
                        'radial-gradient(ellipse at center, transparent 40%, rgba(10,10,15,0.4) 100%)',
                }}
            />
        </div>
    );
}
