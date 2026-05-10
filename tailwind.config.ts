import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          50: "#fbf9f4",
          100: "#f5f0e6",
          200: "#ebe2cf",
          300: "#dccfb1",
        },
        forest: {
          50: "#eef5ef",
          100: "#d6e7d8",
          200: "#a9ccae",
          300: "#74ad7e",
          400: "#458c55",
          500: "#286c3c",
          600: "#1c5630",
          700: "#143f25",
          800: "#0f2c1a",
          900: "#091a10",
        },
        wheat: {
          400: "#dbab5d",
          500: "#c2913f",
          600: "#9c7327",
        },
        clay: {
          400: "#cd7d5e",
          500: "#b86244",
        },
        ink: {
          DEFAULT: "#1a1f1c",
          muted: "#5a625d",
          subtle: "#8a8f88",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "ui-serif", "Georgia", "serif"],
        sans: ["var(--font-dm-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 1px 2px rgba(20, 63, 37, 0.04), 0 8px 24px -8px rgba(20, 63, 37, 0.08)",
        lift: "0 2px 4px rgba(20, 63, 37, 0.06), 0 16px 40px -12px rgba(20, 63, 37, 0.18)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "shimmer": {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s ease-out",
        "shimmer": "shimmer 2.5s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
