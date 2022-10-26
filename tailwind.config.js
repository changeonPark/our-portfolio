/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      textColor: {
        light: "#1f2937",
        dark: "#ffffff",
        signature: "#f97316",
      },
      backgroundColor: {
        light: "#e2e8f0",
        dark: "rgb(30 41 59 / 0.5)",
        signature: "#f97316",
      },
    },
  },
  plugins: [],
};
