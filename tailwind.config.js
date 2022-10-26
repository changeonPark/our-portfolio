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
        dark: "rgb(30 41 59)",
        signature: "#f97316",
      },
      animation: {
        "sidebar-open": "sidebar-open 0.3s",
        "sidebar-close": "sidebar-close 0.3s",
        "dropdown-open": "dropdown-open 5",
        "dropdown-close": "dropdown-close 0.5",
        "arrow-rotate": "arrow-rotate 0.5",
        shake: "shake 0.82s cubic-bezier(.36,.07,.19,.97) both",
        reveal: "reveal 0.3s",
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
        "dropdown-open": {
          "0%": { transform: "0px" },
          "100%": { transform: "100px" },
        },
        "dropdown-close": {
          "0%": { transform: "translateY(100%)" },
          "100%": { transform: "translateY(0%)" },
        },
        "arrow-rotate": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(90deg)" },
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
