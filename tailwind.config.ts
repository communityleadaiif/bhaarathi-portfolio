import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#0A0F1D",
          900: "#101827", // Primary dark navy
          850: "#131C2E",
          800: "#1A2438",
          700: "#24324D",
        },
        charcoal: {
          950: "#0F1218",
          900: "#171C25", // Primary charcoal
          850: "#1C222C",
          800: "#232A37",
          700: "#2F3849",
        },
        gold: {
          DEFAULT: "#C5A46D", // Champagne gold
          light: "#E5D3AC",
          lighter: "#F5EAD4",
          dark: "#A38148",
          muted: "#7A633A",
          50: "#FAF7EE",
          100: "#F5EEDC",
          200: "#EBDCBA",
          300: "#DFC795",
          400: "#D3B57E",
          500: "#C5A46D",
          600: "#A88448",
          700: "#806334",
          800: "#5A4423",
          900: "#362814",
        },
        ivory: {
          DEFAULT: "#F5F2EA", // Luxury ivory
          light: "#FAF8F4",
          dark: "#E3DDD0",
          muted: "#C8C0AF",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          "sans-serif",
        ],
        serif: [
          '"Playfair Display"',
          '"Cormorant Garamond"',
          "Georgia",
          '"Times New Roman"',
          "serif",
        ],
      },
      boxShadow: {
        gold: "0 10px 30px -10px rgba(197, 164, 109, 0.2)",
        "gold-lg": "0 20px 40px -15px rgba(197, 164, 109, 0.3)",
        navy: "0 20px 40px -15px rgba(10, 15, 29, 0.7)",
      },
      backgroundImage: {
        "gold-gradient": "linear-gradient(135deg, #E5D3AC 0%, #C5A46D 50%, #A38148 100%)",
        "gold-text-gradient": "linear-gradient(135deg, #F5EAD4 0%, #C5A46D 60%, #997A42 100%)",
        "navy-gradient": "linear-gradient(180deg, #101827 0%, #0A0F1D 100%)",
        "card-gradient": "linear-gradient(145deg, rgba(23, 28, 37, 0.85) 0%, rgba(16, 24, 39, 0.95) 100%)",
      },
    },
  },
  plugins: [],
};
export default config;
