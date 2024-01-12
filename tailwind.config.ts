import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        lg: "4rem",
      },
    },
    extend: {
      // Colors
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // Gradient colors
      backgroundImage: {
        primaryGradient: "var(--primary-gradient)",
      },
      // Font family
      fontFamily: {
        Red_Hat_Display: "var(--font-Red_Hat_Display)",
        Alumni_Sans: "var(--font-Alumni_Sans)",
        Syncopate: "var(--font-Syncopate)",
      },
    },
  },
  plugins: [],
};
export default config;
