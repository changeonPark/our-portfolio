/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  mode: "jit",
  content: ["./pages/**/*.{js,jsx,ts,tsx}", "./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        base: ['"Gowun Dodum"', ...defaultTheme.fontFamily.sans],
        accent: ['"Black Han Sans"'],
      },
      textColor: {
        light: "#1f2937",
        dark: "#ffffff",
        primary: "#f97316",
      },
      backgroundColor: {
        light: "#e2e8f0",
        dark: "rgb(30 41 59)",
        primary: "#f97316",
      },
      borderColor: {
        primary: "#f97316",
      },
      animation: {
        "sidebar-open": "sidebar-open 0.3s",
        "sidebar-close": "sidebar-close 0.3s",
        bottomTotop: "bottomTotop 6s linear infinite 0s",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
      },
      keyframes: {
        "sidebar-open": {
          "0%": { transform: "translateX(100%)", opacity: 0 },
          "100%": { transform: "translateX(0%)", opacity: 1 },
        },
        "sidebar-close": {
          "0%": { transform: "translateX(0%)", opacity: 1 },
          "100%": { transform: "translateX(100%)", opacity: 0 },
        },
        bottomTotop: {
          "0%": {
            opacity: 0,
          },
          "25%": {
            opacity: 0,
            transform: "translateY(10px)",
          },
          "35%": {
            opacity: 1,
            transform: "translateY(10px)",
          },
          "50%": {
            opacity: 1,
            transform: "translateY(0px)",
          },
          "65%": {
            opacity: 0,
            transform: "translateY(0px)",
          },
          "100%": {
            opacity: 0,
          },
        },
        shake: {
          "10%, 90%": {
            transform: "translate3d(-1px, 0, 0)",
          },
          "20%, 80%": {
            transform: "translate3d(2px, 0, 0)",
          },
          "30%, 50%, 70%": {
            transform: "translate3d(-4px, 0, 0)",
          },
          "40%, 60%": {
            transform: "translate3d(4px, 0, 0)",
          },
        },
        reveal: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
