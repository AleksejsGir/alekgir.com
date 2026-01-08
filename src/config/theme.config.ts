/**
 * Theme Configuration - Single Source of Truth
 * All colors should be imported from here (SOLID: Single Responsibility)
 * 
 * Palette based on ALEKGIR.COM logo analysis:
 * - Dark graphite/blue-gray backgrounds
 * - Cyan/teal accent colors
 * - Light cyan glows
 * - Silver grays for text
 */

export const THEME = {
    // Brand colors - matched to logo
    colors: {
        primary: {
            DEFAULT: "#34A8CE",      // Main cyan (AG letters)
            light: "#6FD4F2",        // Light glow
            dark: "#2F90BC",         // Darker variant
            glow: "#9FE9FF",         // Bright glow for effects
        },
        // UI backgrounds (dark graphite/blue-gray gradient)
        background: {
            DEFAULT: "#11161B",      // Darkest
            surface: "#151C22",      // Dark
            surfaceLight: "#1B242C", // Medium
            accent: "#222C35",       // Lighter dark
        },
        // Surface colors for cards/elements
        surface: {
            card: "#2C3A45",
            cardLight: "#354552",
        },
        // Text colors
        text: {
            primary: "#ffffff",
            secondary: "#C0C5CB",    // Silver (ALEKGIR text)
            muted: "#D5D9DD",        // Light silver
        },
        // Card/element backgrounds (using surface colors)
        card: {
            bg: "#2C3A45",
            border: "#354552",
        },
        // Semantic colors
        semantic: {
            success: "#10b981",
            error: "#ef4444",
            warning: "#f59e0b",
        },
        // Accent colors for flows/charts (Tailwind palette)
        accents: {
            cyan: "#06b6d4",
            emerald: "#10b981",
            purple: "#8b5cf6",
            pink: "#ec4899",
            amber: "#f59e0b",
            blue: "#3b82f6",
            indigo: "#6366f1",
            rose: "#f43f5e",
            teal: "#14b8a6",
            violet: "#7c3aed",
            red: "#ef4444",
            green: "#22c55e",
            yellow: "#eab308",
            orange: "#f97316",
            sky: "#0ea5e9",
            lime: "#84cc16",
            fuchsia: "#d946ef",
        },
    },

    // 3D Canvas specific colors (matched to video background)
    canvas: {
        primary: "#34A8CE",        // Main cyan
        primaryLight: "#6FD4F2",   // Light glow
        primaryDark: "#2F90BC",    // Darker
        background: "#1B242C",     // Medium dark (matches video)
    },
} as const;

// Type exports for TypeScript support
export type ThemeColors = typeof THEME.colors;
export type CanvasColors = typeof THEME.canvas;
export type AccentColors = typeof THEME.colors.accents;
