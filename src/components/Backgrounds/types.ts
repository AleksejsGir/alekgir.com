/**
 * Base types and interfaces for Canvas Background components
 * Following Interface Segregation Principle - specific interfaces for different needs
 */

export interface CanvasSize {
    width: number;
    height: number;
}

export interface MousePosition {
    x: number;
    y: number;
}

export interface AnimationConfig {
    fps?: number;
    particleCount?: number;
    speed?: number;
    mouseInteractionRadius?: number;
}

export interface CanvasColors {
    primary: string;
    primaryLight: string;
    primaryDark: string;
    background: string;
}

/**
 * Interface for canvas animation lifecycle
 * Following Dependency Inversion Principle - depend on abstractions
 */
export interface ICanvasAnimation {
    initialize(canvas: HTMLCanvasElement, ctx: CanvasRenderingContext2D): void;
    update(deltaTime: number): void;
    render(ctx: CanvasRenderingContext2D): void;
    handleMouseMove(position: MousePosition): void;
    resize(size: CanvasSize): void;
    destroy(): void;
}

/**
 * Configuration for canvas background components
 */
export interface BackgroundConfig {
    colors: CanvasColors;
    animation: AnimationConfig;
    enableMouseInteraction?: boolean;
    enableResize?: boolean;
}
