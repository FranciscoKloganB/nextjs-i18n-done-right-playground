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
    require("@tailwindcss/aspect-ratio"),
    require("tailwindcss-rtl")
  ],
  theme: {
    extend: {
      colors: {
        "black-olive": "#292319",
        "electric-green": "#0CEE77",
        "light-teal": "#66DDAA"
      }
    }
  }
}
