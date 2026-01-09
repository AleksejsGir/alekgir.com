'use client';

import { useEffect, useRef, useCallback } from 'react';
import { THEME } from '@/config/theme.config';

interface MatrixColumn {
    x: number;
    y: number;
    speed: number;
    characters: string[];
    positions: number[];
    opacities: number[];
}

// Code keywords and symbols for the Matrix rain
const CODE_KEYWORDS = [
    // Python keywords
    'def', 'class', 'if', 'for', 'while', 'return', 'import', 'from', 'async', 'await',
    'try', 'except', 'with', 'lambda', 'yield', 'self', '__init__', 'True', 'False', 'None',
    // JavaScript keywords
    'function', 'const', 'let', 'var', 'async', 'await', 'class', 'import', 'export',
    'return', 'if', 'for', 'while', 'try', 'catch', 'this', 'new', 'typeof',
    // Common methods
    '.map', '.filter', '.reduce', '.forEach', '.then', '.catch', 'append', 'push',
];

const CODE_SYMBOLS = [
    '{', '}', '[', ']', '(', ')', '<', '>', '=>', '->', '//', '/*', '*/', '::',
    '===', '!==', '==', '!=', '&&', '||', '++', '--', '+=', '-=',
    ';', ':', '.', ',', '?', '!', '@', '#', '$', '%', '&', '*', '+', '-', '=',
];

const BINARY_HEX = '01010101010101010123456789ABCDEF'.split('');

// Combine all characters with weights (keywords appear more often)
const getAllChars = () => {
    const chars: string[] = [];
    // Add keywords multiple times for higher probability
    CODE_KEYWORDS.forEach(keyword => chars.push(keyword, keyword, keyword));
    // Add symbols
    CODE_SYMBOLS.forEach(symbol => chars.push(symbol));
    // Add binary/hex
    BINARY_HEX.forEach(char => chars.push(char));
    return chars;
};

const MATRIX_CHARS = getAllChars();

export default function HeroBackground3D() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const columnsRef = useRef<MatrixColumn[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationRef = useRef<number>(0);

    const initColumns = useCallback((canvas: HTMLCanvasElement) => {
        const fontSize = 14;
        const columnCount = Math.floor(canvas.width / (fontSize * 4)); // Wider spacing for keywords
        columnsRef.current = [];

        for (let i = 0; i < columnCount; i++) {
            const columnLength = Math.floor(Math.random() * 15) + 8;
            const characters: string[] = [];
            const positions: number[] = [];
            const opacities: number[] = [];

            for (let j = 0; j < columnLength; j++) {
                characters.push(MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]);
                positions.push(j);
                opacities.push(1 - (j / columnLength));
            }

            columnsRef.current.push({
                x: i * fontSize * 4, // Wider spacing for keywords
                y: Math.random() * canvas.height - canvas.height,
                speed: Math.random() * 1.5 + 0.5,
                characters,
                positions,
                opacities,
            });
        }
    }, []);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        const fontSize = 14;

        // Set canvas size with DPR support (Fixes Blur)
        const resizeCanvas = () => {
            const dpr = window.devicePixelRatio || 1;
            // Set actual size in memory (scaled to account for extra pixel density)
            canvas.width = window.innerWidth * dpr;
            canvas.height = window.innerHeight * dpr;

            // Normalize coordinate system to use css pixels
            ctx.scale(dpr, dpr);

            // style width/height must match window size
            canvas.style.width = `${window.innerWidth}px`;
            canvas.style.height = `${window.innerHeight}px`;

            initColumns(canvas);
        };

        resizeCanvas();
        window.addEventListener('resize', resizeCanvas);

        // Mouse tracking
        const handleMouseMove = (e: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouseRef.current = {
                x: e.clientX - rect.left,
                y: e.clientY - rect.top
            };
        };
        window.addEventListener('mousemove', handleMouseMove);

        // Animation
        const animate = () => {
            if (!ctx || !canvas) return;

            // Clear completely (no trails) - Use Theme Background
            ctx.fillStyle = THEME.colors.background.DEFAULT;
            // We use canvas.width/height (physical pixels) for clearing, but because we scaled via ctx.scale,
            // we should conceptually clear the logic dimensions. However, fillRect uses current transform.
            // Safest to reset transform, clear, then restore, OR just clear a huge area.
            // Since we scaled, `window.innerWidth` is the logical width.
            ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            const columns = columnsRef.current;
            const mouse = mouseRef.current;
            const mouseRadius = 150;

            ctx.font = `${fontSize}px monospace`;

            // Update and draw columns
            columns.forEach((column) => {
                // Update column position
                column.y += column.speed;

                // Reset column when it goes off screen
                const logicalHeight = window.innerHeight; // Use logical height
                if (column.y > logicalHeight + column.characters.length * fontSize * 1.5) {
                    column.y = -column.characters.length * fontSize * 1.5;
                    column.speed = Math.random() * 1.5 + 0.5;

                    // Randomize characters occasionally
                    if (Math.random() > 0.9) {
                        column.characters = column.characters.map(() =>
                            MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
                        );
                    }
                }

                // Draw each character in the column
                column.characters.forEach((char, index) => {
                    const charY = column.y + index * fontSize * 1.5;

                    // Skip if off screen
                    if (charY < -fontSize * 2 || charY > window.innerHeight) return;

                    // Calculate distance from mouse for interaction
                    const dx = mouse.x - column.x;
                    const dy = mouse.y - charY;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    // Base opacity (fades from top to bottom of column)
                    let opacity = column.opacities[index];

                    // GRAPHITE THEME implementation
                    // First character is brightest (head of the column)
                    if (index === 0) {
                        opacity = 1;
                        // Draw bright glow for column head - White/Silver
                        // Reduced shadowBlur for sharpness
                        ctx.shadowBlur = 8;
                        ctx.shadowColor = THEME.colors.graphite.lighter; // #E5E7EB
                        ctx.fillStyle = THEME.colors.graphite.lighter;
                    } else if (index < 3) {
                        // Near head - use Light Graphite
                        ctx.shadowBlur = 4;
                        ctx.shadowColor = `rgba(209, 213, 219, ${opacity * 0.5})`; // graphite.light
                        ctx.fillStyle = `rgba(209, 213, 219, ${opacity})`;
                    } else {
                        // Rest of column - use Medium Graphite / Cool Gray
                        ctx.shadowBlur = 0;
                        ctx.fillStyle = `rgba(156, 163, 175, ${opacity * 0.7})`; // graphite.DEFAULT (#9CA3AF)
                    }

                    // Mouse interaction - wave effect
                    if (distance < mouseRadius) {
                        const force = (mouseRadius - distance) / mouseRadius;
                        const waveOffset = Math.sin(Date.now() * 0.01 + index) * 10 * force;

                        // Brighten and add extra glow near mouse
                        opacity = Math.min(1, opacity + force * 0.5);
                        ctx.shadowBlur = 10 * force;
                        ctx.shadowColor = THEME.colors.graphite.light;
                        ctx.fillStyle = `rgba(229, 231, 235, ${opacity})`; // ligher graphite

                        ctx.fillText(char, column.x + waveOffset, charY);
                    } else {
                        ctx.fillText(char, column.x, charY);
                    }
                });

                // Reset shadow for next column
                ctx.shadowBlur = 0;
            });

            animationRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationRef.current);
        };
    }, [initColumns]);

    return (
        <div className="absolute inset-0 z-0">
            <canvas
                ref={canvasRef}
                className="w-full h-full"
                style={{ background: 'transparent' }}
            />
        </div>
    );
}
