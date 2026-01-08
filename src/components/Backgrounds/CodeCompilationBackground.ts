/**
 * Code Compilation Animation for Projects Section
 * Simulates code being compiled/built into projects
 * Following Single Responsibility Principle - only handles compilation animation
 */

import { BaseCanvasBackground } from './BaseCanvasBackground';
import type { BackgroundConfig, CanvasSize, MousePosition } from './types';

interface CodeLine {
    text: string;
    x: number;
    y: number;
    targetY: number;
    opacity: number;
    speed: number;
    compiled: boolean;
    color: string;
    driftX: number; // Continuous horizontal drift
    driftY: number; // Continuous vertical drift
}

const CODE_SNIPPETS = [
    // React/Next.js
    'import React from "react"',
    'import { useState } from "react"',
    'const App = () => {',
    'export default function',
    'return <div>',
    'useEffect(() => {',
    'const [state, setState]',
    '<motion.div>',
    'className="flex"',

    // Python/FastAPI
    'async def compile():',
    'class Component():',
    'if __name__ ==',
    'fastapi.get("/api")',
    'from typing import',
    'await asyncio.gather',
    'def __init__(self):',
    '@app.route("/api")',
    'import asyncio',

    // JavaScript/TypeScript
    'function buildProject() {',
    'await fetch()',
    'const data = {}',
    '.then(response =>',
    '.map((item) =>',
    'interface Props {',
    'type Config = {',
    'export const',

    // Build commands
    'npm run build',
    'pip install -r',
    'yarn build',
    'docker-compose up',
    'npm install',
    'go build -o',

    // Comments
    '// Building...',
    '/* Compiling */',
    '# Processing...',

    // Success/Status
    'SUCCESS: Build',
    '✓ Compiled',
    'Done in 2.5s',
    'Build complete',
];

export class CodeCompilationBackground extends BaseCanvasBackground {
    private codeLines: CodeLine[] = [];
    private compilationProgress: number = 0;

    constructor(config: BackgroundConfig) {
        super(config);
    }

    protected onInitialize(): void {
        this.initializeCodeLines();
    }

    protected onResize(size: CanvasSize): void {
        // Reinitialize code lines on resize
        this.initializeCodeLines();
    }

    protected onMouseMove(position: MousePosition): void {
        // Mouse interaction handled in render
    }

    protected onDestroy(): void {
        this.codeLines = [];
    }

    private initializeCodeLines(): void {
        this.codeLines = [];
        // Increased density: more lines per screen
        const lineCount = Math.floor(this.size.height / 20);

        for (let i = 0; i < lineCount; i++) {
            const snippet = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
            const startY = Math.random() * this.size.height;

            this.codeLines.push({
                text: snippet,
                x: Math.random() * (this.size.width - 250),
                y: startY,
                targetY: i * 25 + 50,
                opacity: Math.random() * 0.4 + 0.15,
                speed: Math.random() * 0.8 + 0.3,
                compiled: false,
                color: this.getRandomColor(),
                driftX: (Math.random() - 0.5) * 0.3, // Slow horizontal drift
                driftY: (Math.random() - 0.5) * 0.2, // Slow vertical drift
            });
        }
    }

    private getRandomColor(): string {
        const colors = [
            this.config.colors.primary,
            this.config.colors.primaryLight,
            'rgba(111, 212, 242, 0.6)', // #6FD4F2 light glow
            'rgba(52, 168, 206, 0.6)', // #34A8CE primary
        ];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    public update(deltaTime: number): void {
        // Update compilation progress
        this.compilationProgress += deltaTime * 0.0001;
        if (this.compilationProgress > 1) this.compilationProgress = 0;

        // Update code lines
        this.codeLines.forEach((line) => {
            // Move towards target position (initial compilation)
            const dy = line.targetY - line.y;
            if (Math.abs(dy) > 5) {
                line.y += dy * line.speed * 0.02;
            } else {
                // After reaching target, apply continuous drift
                line.compiled = true;
                line.opacity = Math.min(0.6, line.opacity + 0.01);
            }

            // Continuous drift for all lines
            line.x += line.driftX;
            line.y += line.driftY;

            // Wrap around boundaries
            if (line.x < -200) line.x = this.size.width;
            if (line.x > this.size.width) line.x = -200;
            if (line.y < -50) line.y = this.size.height;
            if (line.y > this.size.height + 50) line.y = -50;

            // Randomly change some lines
            if (Math.random() > 0.998) {
                line.text = CODE_SNIPPETS[Math.floor(Math.random() * CODE_SNIPPETS.length)];
                line.compiled = false;
                line.opacity = 0.2;
            }
        });
    }

    public render(ctx: CanvasRenderingContext2D): void {
        // Clear completely (no trails) - solid background
        ctx.fillStyle = '#11161B';
        ctx.fillRect(0, 0, this.size.width, this.size.height);

        // Set font
        ctx.font = '14px "Courier New", monospace';

        // Draw code lines
        this.codeLines.forEach((line) => {
            // Skip rendering if element is outside canvas bounds (prevent mobile overflow)
            const textWidth = ctx.measureText(line.text).width;
            if (line.x + textWidth < -50 || line.x > this.size.width + 50) return;
            if (line.y < -50 || line.y > this.size.height + 50) return;

            // Calculate distance from mouse
            const dx = this.mouse.x - line.x;
            const dy = this.mouse.y - line.y;
            const distance = Math.sqrt(dx * dx + dy * dy);
            const mouseRadius = this.config.animation.mouseInteractionRadius || 150;

            let finalOpacity = line.opacity;
            let xOffset = 0;

            // Mouse interaction - brighten and shift
            if (distance < mouseRadius && this.config.enableMouseInteraction) {
                const force = (mouseRadius - distance) / mouseRadius;
                finalOpacity = Math.min(1, line.opacity + force * 0.6);
                xOffset = Math.sin(Date.now() * 0.005) * force * 20;

                // Add glow effect near mouse (Simulated with opacity instead of expensive shadowBlur)
                // ctx.shadowBlur = 20 * force;
                // ctx.shadowColor = this.config.colors.primaryLight;
                ctx.shadowBlur = 0; // Ensure shadow is off
            } else {
                ctx.shadowBlur = 0;
            }

            // Draw the code line
            ctx.fillStyle = line.compiled
                ? `rgba(111, 212, 242, ${finalOpacity})` // Compiled - #6FD4F2
                : `rgba(52, 168, 206, ${finalOpacity * 0.5})`; // Compiling - #34A8CE

            ctx.fillText(line.text, line.x + xOffset, line.y);

            // Draw cursor for active lines (only if within bounds)
            if (!line.compiled && Math.random() > 0.95) {
                const cursorX = line.x + xOffset + textWidth + 2;
                if (cursorX >= 0 && cursorX <= this.size.width) {
                    ctx.fillStyle = this.config.colors.primaryLight;
                    ctx.fillRect(cursorX, line.y - 12, 2, 14);
                }
            }
        });

        // Draw compilation progress indicator
        this.drawCompilationIndicator(ctx);

        // Draw subtle grid
        this.drawGrid(ctx);
    }

    private drawCompilationIndicator(ctx: CanvasRenderingContext2D): void {
        const barWidth = 200;
        const barHeight = 4;
        const x = this.size.width - barWidth - 20;
        const y = 20;

        // Background
        ctx.fillStyle = 'rgba(52, 168, 206, 0.2)'; // #34A8CE
        ctx.fillRect(x, y, barWidth, barHeight);

        // Progress
        ctx.fillStyle = this.config.colors.primaryLight;
        ctx.fillRect(x, y, barWidth * this.compilationProgress, barHeight);

        // Text
        ctx.font = '10px monospace';
        ctx.fillStyle = 'rgba(111, 212, 242, 0.6)'; // #6FD4F2
        ctx.fillText(
            `Building... ${Math.floor(this.compilationProgress * 100)}%`,
            x,
            y - 6
        );
    }

    private drawGrid(ctx: CanvasRenderingContext2D): void {
        ctx.strokeStyle = 'rgba(52, 168, 206, 0.02)'; // #34A8CE subtle
        ctx.lineWidth = 1;
        const gridSize = 50;

        for (let x = 0; x < this.size.width; x += gridSize) {
            ctx.beginPath();
            ctx.moveTo(x, 0);
            ctx.lineTo(x, this.size.height);
            ctx.stroke();
        }

        for (let y = 0; y < this.size.height; y += gridSize) {
            ctx.beginPath();
            ctx.moveTo(0, y);
            ctx.lineTo(this.size.width, y);
            ctx.stroke();
        }
    }
}
