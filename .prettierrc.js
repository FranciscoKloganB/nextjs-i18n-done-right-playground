module.exports = {
  importOrder: [
    "react",
    "react-dom",
    "<THIRD_PARTY_MODULES>",
    "^pages/(.*)$",
    "^layouts/(.*)$",
    "^components/(.*)$",
    "^cypress/(.*)$",
    "^hooks/(.*)$",
    "^clients/(.*)$",
    "^utils/(.*)$",
    "^locales/(.*)$",
    "^public/(.*)$",
    "^styles/(.*)$",
    "^tests/(.*)$",
    "^themes/(.*)$",
    "^[./]",
    "^[../]"
  ],
  importOrderSeparation: true,
  importOrderSortSpecifiers: true,
  jsxBracketSameLine: false,
  plugins: [require("prettier-plugin-tailwindcss")],
  printWidth: 88,
  semi: false,
  singleQuote: false,
  trailingComma: "none"
}
