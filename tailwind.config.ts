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
    },
  },
  plugins: [],
} satisfies Config;
