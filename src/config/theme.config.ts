/**
 * Theme Configuration - Single Source of Truth
 * All colors should be imported from here (SOLID: Single Responsibility)
 */

export const THEME = {
    // Brand colors - matched to logo
    colors: {
        primary: {
            DEFAULT: "#17A2B8",
            light: "#40E0D0",
            dark: "#0D8A9E",
        },
        // UI backgrounds (dark theme)
        background: {
            DEFAULT: "#0d0d12",
            surface: "#16161e",
            surfaceLight: "#1e1e28",
            accent: "#252532",
        },
        // Text colors
        text: {
            primary: "#ffffff",
            secondary: "#B0B0B8",
            muted: "#71717a",
        },
        // Card/element backgrounds
        card: {
            bg: "#18181f",
            border: "#2d2d3a",
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
        // Gradients
        gradients: {
            primary: "from-cyan-500 to-purple-500",
            hero: "from-primary to-purple-600",
        },
    },

    // 3D Canvas specific colors (can differ from UI)
    canvas: {
        primary: "#17A2B8",
        primaryLight: "#40E0D0",
        primaryDark: "#0D8A9E",
        background: "#1a2028", // Lighter, matches video
    },
} as const;

// Type exports for TypeScript support
export type ThemeColors = typeof THEME.colors;
export type CanvasColors = typeof THEME.canvas;
export type AccentColors = typeof THEME.colors.accents;
