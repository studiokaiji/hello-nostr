import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      animation: {
        width: "width 650ms ease-in-out",
      },
      keyframes: {
        width: {
          "0%": { width: "0%" },
          "100%": { width: "100%" },
        },
      },
      fontFamily: {
        sans: ["Noto Sans JP", "sans-serif", "system-ui"],
      },
      colors: {
        accent: {
          pink: "#ffa7a7",
          orange: "#fdba74",
          emerald: "#6ee7b7",
          purple: "#dbbeff",
          yellow: "#facc15",
          sky: "#9edcff",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
