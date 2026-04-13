/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        pastel: {
          bg: '#FAF9F6',      // Off-white base
          lavender: '#E9E4F0', // Soft lavender
          mint: '#E2F0CB',     // Mint green
          blue: '#D4E4F7',     // Soft blue
          text: '#2D3748',     // Smooth dark grey for readability
          muted: '#718096'     // Muted text
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}