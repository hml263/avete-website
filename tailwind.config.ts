import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1rem",
    },
    screens: {
      sm: "660px",
      md: "760px",
      lg: "960px",
      xl: "1200px",
    },
    extend: {
      colors: {
        primary: "#38307C",
        secondary: "#050D28",
        lighted: "#EFEFEF",
        yellow: {
          DEFAULT: "#DAEE50",
          hover: "#DAEE50",
        },
        blue: {
          DEFAULT: "#38307C",
          hover: "#38307C",
        },
        transparent: {
          DEFAULT: "rgb(56 48 124 / 60%)",

        }
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config