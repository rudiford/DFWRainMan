import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "green-primary": "#2D5A27",
        "green-dark": "#1E3D1A",
        "green-light": "#3D7A35",
        "green-muted": "#4A7A43",
        charcoal: "#2C2C2C",
        cream: "#F5F0E8",
        offwhite: "#F5F5F0",
      },
    },
  },
  plugins: [],
};
export default config;
