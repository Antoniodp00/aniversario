/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        rose: {
          50:  "#fff5f7",
          100: "#ffe4ea",
          200: "#ffc9d4",
          300: "#ff9fb2",
          400: "#ff6e8a",
          500: "#ef4368",
          600: "#d12a52",
          700: "#a31f40",
        },
        cream: "#fdf6ef",
        ink:   "#2b1a23",
      },
      fontFamily: {
        display: ['"Playfair Display"', "serif"],
        body: ['"Inter"', "system-ui", "sans-serif"],
        hand: ['"Dancing Script"', "cursive"],
      },
      keyframes: {
        floaty: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%":      { transform: "translateY(-10px)" },
        },
        beat: {
          "0%, 100%": { transform: "scale(1)" },
          "50%":      { transform: "scale(1.15)" },
        },
      },
      animation: {
        floaty: "floaty 4s ease-in-out infinite",
        beat:   "beat 1.2s ease-in-out infinite",
      },
    },
  },
  plugins: [],
}
