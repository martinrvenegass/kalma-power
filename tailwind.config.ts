import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#1a3a8a",
          900: "#122a66",
          800: "#16327a",
          700: "#1a3a8a",
          600: "#2a4fa8",
        },
        lima: {
          DEFAULT: "#d4ff00",
          600: "#b8e000",
        },
        sky: {
          DEFAULT: "#4a7fd6",
          light: "#e8f0ff",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1.5rem",
        screens: { "2xl": "1200px" },
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "slide-in": {
          "0%": { opacity: "0", transform: "translateY(12px) scale(0.98)" },
          "100%": { opacity: "1", transform: "translateY(0) scale(1)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out both",
        "slide-in": "slide-in 0.25s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
