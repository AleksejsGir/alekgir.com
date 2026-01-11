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
    // 1. PALETTE DEFINITION (The 4 Pillars - Single Source of Truth)
    palette: {
        // Pillar 1: Main Accent (Cyan/Blue Brand)
        brand: {
            cyan: "#34A8CE",
            cyanLight: "#6FD4F2",
            cyanDark: "#2F90BC",
            glow: "#9FE9FF",
        },
        // Pillar 2: Graphite Scale (Professional/Neutral)
        graphite: {
            500: "#9CA3AF",      // DEFAULT (Cool Gray 400)
            300: "#D1D5DB",      // light (Highlights)
            200: "#E5E7EB",      // lighter (Brightest)
            600: "#4B5563",      // dark (Depth)
            700: "#374151",      // darker (Shadows)
        },
        // Pillar 3: White
        white: "#ffffff",
        // Pillar 4: Black (Deep Backgrounds)
        black: {
            DEFAULT: "#11161B", // Deepest
            light: "#151C22",   // Surface
            lighter: "#1B242C", // Surface Light
            accent: "#222C35",  // Accent Background
        }
    },

    // 2. SEMANTIC MAPPING (How colors are USED)
    get colors() {
        return {
            primary: {
                DEFAULT: this.palette.brand.cyan,
                light: this.palette.brand.cyanLight,
                dark: this.palette.brand.cyanDark,
                glow: this.palette.brand.glow,
            },
            // Graphite aliases for easy usage
            graphite: {
                DEFAULT: this.palette.graphite[500],
                light: this.palette.graphite[300],
                lighter: this.palette.graphite[200],
                dark: this.palette.graphite[600],
                darker: this.palette.graphite[700],
            },
            // UI Backgrounds (mapped to Black pillar)
            background: {
                DEFAULT: this.palette.black.DEFAULT,
                surface: this.palette.black.light,
                surfaceLight: this.palette.black.lighter,
                accent: this.palette.black.accent,
            },
            // Surface/Cards (derived from Black pillar logic)
            surface: {
                card: "#2C3A45", // Custom mix, fits Graphite/Black theme
                cardLight: "#354552",
            },
            card: {
                bg: "#2C3A45",
                border: "#354552",
            },
            // Text (mapped to White/Graphite)
            text: {
                primary: this.palette.white,
                secondary: "#C0C5CB", // Silver (Bridge between White and Graphite)
                muted: "#D5D9DD",     // Light Silver
            },
            // Semantic colors (standard)
            semantic: {
                success: "#10b981",
                error: "#ef4444",
                warning: "#f59e0b",
            },
            accents: {
                cyan: "#34A8CE", // Match brand
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
        };
    },

    // 3. CANVAS CONFIG (Mapped from Palette)
    get canvas() {
        return {
            primary: this.palette.brand.cyan,
            primaryLight: this.palette.brand.cyanLight,
            primaryDark: this.palette.brand.cyanDark,
            background: this.palette.black.DEFAULT,
        };
    },

    // 4. GRADIENTS (Primary Brand Element)
    get gradients() {
        return {
            primary: {
                from: this.palette.brand.cyan,
                to: this.palette.brand.cyanLight,
                css: "bg-gradient-to-r from-primary to-primary-light",
                textCss: "text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary-light",
            },
            glow: {
                from: this.palette.brand.cyanLight,
                to: this.palette.brand.glow,
                css: "bg-gradient-to-r from-primary-light to-[#9FE9FF]",
            },
        };
    },

    // 5. TYPOGRAPHY SCALE (Semantic naming for consistency)
    typography: {
        // Headings
        display: "text-4xl sm:text-5xl lg:text-7xl font-black tracking-tighter",
        h1: "text-4xl md:text-5xl lg:text-6xl font-black tracking-tight",
        h2: "text-2xl md:text-3xl font-black tracking-tight",
        h3: "text-xl lg:text-2xl font-bold tracking-tight",
        h4: "text-lg font-bold tracking-tight",
        // Body
        body: "text-base font-normal",
        bodyLg: "text-lg md:text-xl font-medium",
        bodySm: "text-sm font-normal",
        // Labels & Badges
        label: "text-xs font-bold uppercase tracking-wider",
        badge: "text-xs font-black uppercase tracking-widest",
        caption: "text-xs font-medium",
    },

    // 6. BORDER RADIUS TOKENS
    radius: {
        sm: "rounded-md",       // Tags, small badges
        DEFAULT: "rounded-lg",  // Inputs, buttons
        lg: "rounded-xl",       // Cards
        xl: "rounded-2xl",      // Large cards, modals
        full: "rounded-full",   // Circular elements
    },

    // 7. SPACING PRESETS (Common patterns)
    spacing: {
        section: "py-16 lg:py-24",
        sectionSm: "py-12 lg:py-16",
        container: "px-4 sm:px-6 lg:px-8",
        card: "p-6 md:p-8",
        cardSm: "p-4 md:p-6",
    },

    // 8. COMPONENT PRESETS (Reusable patterns)
    components: {
        badge: "px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border backdrop-blur-md",
        button: "px-6 py-3 rounded-xl font-bold transition-all duration-300",
        card: "rounded-2xl border border-white/10 bg-background backdrop-blur-xl",
        input: "px-6 py-4 rounded-xl border outline-none transition-all bg-white/[0.03] backdrop-blur-sm",
    },
} as const;

// Type exports for TypeScript support
export type ThemeColors = typeof THEME.colors;
export type CanvasColors = typeof THEME.canvas;
export type AccentColors = typeof THEME.colors.accents;
export type ThemeGradients = typeof THEME.gradients;
export type ThemeTypography = typeof THEME.typography;
export type ThemeRadius = typeof THEME.radius;
export type ThemeSpacing = typeof THEME.spacing;

// CSS class constants for easy import
export const GRADIENT_TEXT = THEME.gradients.primary.textCss;
export const GRADIENT_BG = THEME.gradients.primary.css;

