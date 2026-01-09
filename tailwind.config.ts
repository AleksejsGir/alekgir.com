import type { Config } from "tailwindcss";
import { THEME } from "./src/config/theme.config";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary colors - from theme config
        primary: THEME.colors.primary.DEFAULT,
        "primary-light": THEME.colors.primary.light,
        "primary-dark": THEME.colors.primary.dark,
        // Dark theme backgrounds
        background: THEME.colors.background.DEFAULT,
        surface: THEME.colors.background.surface,
        "surface-light": THEME.colors.background.surfaceLight,
        accent: THEME.colors.background.accent,
        secondary: THEME.colors.background.DEFAULT,
        // Graphite Scale
        graphite: THEME.colors.graphite.DEFAULT,
        "graphite-light": THEME.colors.graphite.light,
        "graphite-lighter": THEME.colors.graphite.lighter,
        "graphite-dark": THEME.colors.graphite.dark,
        "graphite-darker": THEME.colors.graphite.darker,
        // Semantic colors
        success: THEME.colors.semantic.success,
        error: THEME.colors.semantic.error,
        warning: THEME.colors.semantic.warning,
        // Text colors
        "text-primary": THEME.colors.text.primary,
        "text-secondary": THEME.colors.text.secondary,
        "text-muted": THEME.colors.text.muted,
        // Card/element backgrounds
        "card-bg": THEME.colors.card.bg,
        "card-border": THEME.colors.card.border,
      },
      animation: {
        fade: "fadeIn 0.6s ease-in-out",
        slideUp: "slideUp 0.8s ease-out",
        pulse: "pulse 1s infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
