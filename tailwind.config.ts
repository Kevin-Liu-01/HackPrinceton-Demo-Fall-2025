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
        retroRed: "#BF3131",
        retroWhite: "#F1EAD1",
        retroBlue: "#0E273C",
        coffeeBg: "#f4ead6",
        coffeeWhite: " #efdfbd",
        coffeeBrown: "#3b2710",
        coffeeGreen: "#1e4027",
      },
      cursor: {
        default: "url(/images/logos/cursorsmall.png) 8 8, auto",
        pointer: "url(/images/logos/cursorsmall.png)) 8 8, pointer",
      },
      keyframes: {
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        // "fade-in": "fade-in 1s ease-in-out",
        "fade-in": "fade-in 5s ease 1s forwards",
      },
      fontFamily: {
        dmSerif: ["var(--font-dm-serif-display)", "sans-serif"],
        averia: ["var(--font-averia-serif-libre)", "sans-serif"],
      },
      fontWeight: {
        regular: "400", // Optionally specify font weight name
        bold: "700", // Optionally specify bold font weight name
      },
    },
  },
  plugins: [],
};
export default config;
