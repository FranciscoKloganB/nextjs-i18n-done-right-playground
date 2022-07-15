module.exports = {
  content: [
    "./public/**/*.html",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio")
  ],
  theme: {
    extend: {
      colors: {
        electric: "#db00ff",
        ribbon: "#0047ff"
      }
    }
  },
}
