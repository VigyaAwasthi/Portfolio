import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["var(--font-inter)"],
        body: ["var(--font-inter)"]
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#EDEDED",
        muted: "#9b9b9b",
        accent: "#b3ff2a" // subtle green accent like unseen-esque
      },
      boxShadow: {
        soft: "0 10px 30px rgba(0,0,0,0.25)"
      }
    },
  },
  plugins: [],
};
export default config;
