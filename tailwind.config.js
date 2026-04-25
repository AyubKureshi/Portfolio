/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          primary: "var(--color-primary)",
          secondary: "var(--color-secondary)",
          accent: "var(--color-accent)",
          bg: "var(--color-bg)",
          card: "var(--color-card)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
        },
        pastel: {
          bg: "var(--color-bg)",
          text: "var(--color-text)",
          muted: "var(--color-muted)",
          blue: "#60a5fa",
          lavender: "#c4b5fd",
          mint: "#6ee7b7",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
