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
        'main-color': '#0E1015',
        'custom-green': '#10b981',
        'card-background': '#1C171D',
        'card-leaderboard': '#272A30',
        'card-leaderboard-secundary': '#2D2825',
        'text-gradient-1': '#898D94',
        'text-gradient-2': '#999CA3',
        'tablaHead-color': '#181A20',
        'tablecolor': '#13151B',
        'boxtrack-color': '#191A21',
        'boxtrackbackground-color': '#282A30',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

export default config;
