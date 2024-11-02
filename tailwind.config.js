/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Fraunces", "serif"],
    },
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
        customGray: "#2a2a2a",
        customGrayLight: "#3b2b2b", // lighter shade of gray
        customGrayLighter: "#222831", // even lighter gray
      },
    },
  },
  plugins: [],
};
