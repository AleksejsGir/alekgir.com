/**
 * Abstract base class for Canvas backgrounds
 * Following Single Responsibility Principle - manages only canvas lifecycle
 * Following Open/Closed Principle - open for extension, closed for modification
 */

import type {
    ICanvasAnimation,
    BackgroundConfig,
    CanvasSize,
    MousePosition,
} from './types';

export abstract class BaseCanvasBackground implements ICanvasAnimation {
    protected canvas: HTMLCanvasElement | null = null;
    protected ctx: CanvasRenderingContext2D | null = null;
    protected config: BackgroundConfig;
    protected size: CanvasSize = { width: 0, height: 0 };
    protected mouse: MousePosition = { x: 0, y: 0 };
    protected animationFrameId: number = 0;
    protected lastFrameTime: number = 0;

    constructor(config: BackgroundConfig) {
        this.config = config;
    }

    /**
     * Initialize canvas and start animation
     */
    public initialize(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void {
        this.canvas = canvas;
        this.ctx = ctx;
        this.size = { width: canvas.width, height: canvas.height };
        this.onInitialize();
        this.startAnimation();
    }

    /**
     * Handle window resize
     */
    public resize(size: CanvasSize): void {
        this.size = size;
        if (this.canvas) {
            this.canvas.width = size.width;
            this.canvas.height = size.height;
        }
        this.onResize(size);
    }

    /**
     * Handle mouse movement
     */
    public handleMouseMove(position: MousePosition): void {
        this.mouse = position;
        this.onMouseMove(position);
    }

    /**
     * Clean up resources
     */
    public destroy(): void {
        if (this.animationFrameId) {
            cancelAnimationFrame(this.animationFrameId);
        }
        this.onDestroy();
        this.canvas = null;
        this.ctx = null;
    }

    /**
     * Start animation loop
     */
    private startAnimation(): void {
        const animate = (currentTime: number) => {
            if (!this.ctx || !this.canvas) return;

            const deltaTime = currentTime - this.lastFrameTime;
            this.lastFrameTime = currentTime;

            this.update(deltaTime);
            this.render(this.ctx);

            this.animationFrameId = requestAnimationFrame(animate);
        };

        this.animationFrameId = requestAnimationFrame(animate);
    }

    // Abstract methods to be implemented by subclasses
    protected abstract onInitialize(): void;
    protected abstract onResize(size: CanvasSize): void;
    protected abstract onMouseMove(position: MousePosition): void;
    protected abstract onDestroy(): void;

    // Required by ICanvasAnimation interface
    public abstract update(deltaTime: number): void;
    public abstract render(ctx: CanvasRenderingContext2D): void;
}
