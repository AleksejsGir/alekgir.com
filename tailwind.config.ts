import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary teal - keeping the brand color
        primary: "#0891b2",
        "primary-light": "#22d3ee",
        "primary-dark": "#0e7490",
        // Dark theme backgrounds (2025 trend: very dark with subtle blue undertones)
        background: "#0a0a0f",
        surface: "#12121a",
        "surface-light": "#1a1a26",
        accent: "#1f1f2e",
        // Secondary dark (keeping for footer compatibility)
        secondary: "#0a0a0f",
        // Semantic colors
        success: "#10b981",
        error: "#ef4444",
        warning: "#f59e0b",
        // Text colors for dark theme
        "text-primary": "#ffffff",
        "text-secondary": "#a1a1aa",
        "text-muted": "#71717a",
        // Card/element backgrounds
        "card-bg": "#16161f",
        "card-border": "#2a2a3a",
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
