/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Add Google Font
        playfair: ["'Playfair Display'", "serif"], // Add Playfair Display
      },
    },
  },
  plugins: [],
};
