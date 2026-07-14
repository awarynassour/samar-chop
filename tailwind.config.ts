import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ivory: "#f6f2ea",
        "ivory-band": "#f2ecdf",
        sand: "#eee5d6",
        "sand-2": "#e7ddcc",
        ink: "#211d17",
        "ink-2": "#2c2620",
        bronze: "#8a6d3f",
        gold: "#c9a86a",
      },
      fontFamily: {
        serif: ["var(--font-bodoni)", "Bodoni Moda", "serif"],
        sans: ["var(--font-jost)", "Jost", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        wordmark: "0.34em",
      },
    },
  },
  plugins: [],
};

export default config;
