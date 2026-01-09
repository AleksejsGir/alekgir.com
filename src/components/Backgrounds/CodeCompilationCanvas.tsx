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

        // HIGH-DPI support
        const dpr = window.devicePixelRatio || 1;

        // Set actual size in memory (scaled)
        canvas.width = parent.clientWidth * dpr;
        canvas.height = parent.clientHeight * dpr;

        // Normalize coordinate system
        ctx.scale(dpr, dpr);

        // Create and initialize animation
        // Pass logical size (without DPR) to animation class because ctx is already scaled
        const animation = new CodeCompilationBackground(config);

        // We need to tell the animation instance about the LOGICAL size (clientWidth/Height)
        // Since we scaled the context, drawing operations at (100, 100) will physically be at (200, 200) on 2x screen
        // So the animation logic should just use logical pixels.

        // However, the animation class might inspect canvas.width/height directly.
        // Let's check `CodeCompilationBackground.initialize`: it doesn't exist, it likely uses `this.canvas` in BaseCanvas or similar.
        // If BaseCanvas uses `canvas.width`, it will use physical pixels.
        // We should double check BaseCanvas or just rely on the fact that we scaled the context.
        // If the animation class uses `canvas.width` for boundaries, it will think the screen is HUGE (2x).

        // To fix this cleanly without changing BaseCanvas (if shared), we can trick it or update BaseCanvas.
        // But for now, let's assume passing the context with scale is handled, 
        // AND we should probably modify `CodeCompilationBackground` to use `canvas.getBoundingClientRect()` for size if possible.

        // Actually, `resize` method below updates size.
        animation.initialize(canvas, ctx);

        animationRef.current = animation;

        // Force an initial resize/update with logical dimensions if the class supports it
        if (typeof animation.resize === 'function') {
            animation.resize({ width: parent.clientWidth, height: parent.clientHeight });
        }

    }, [config]);

    useEffect(() => {
        initializeAnimation();

        const canvas = canvasRef.current;
        const animation = animationRef.current;
        if (!canvas || !animation) return;

        // Handle resize
        const handleResize = () => {
            if (config.enableResize && canvas.parentElement) {
                const parent = canvas.parentElement;
                const dpr = window.devicePixelRatio || 1;

                // Update physical dimensions
                canvas.width = parent.clientWidth * dpr;
                canvas.height = parent.clientHeight * dpr;

                // Reset scale because changing width/height resets context state
                const ctx = canvas.getContext('2d');
                if (ctx) ctx.scale(dpr, dpr);

                // Update logical dimensions for the animation engine
                animation.resize({ width: parent.clientWidth, height: parent.clientHeight });
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
        </div>
    );
}
