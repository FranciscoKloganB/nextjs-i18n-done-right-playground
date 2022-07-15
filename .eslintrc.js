module.exports = {
  extends: ["next", "next/core-web-vitals", "prettier"],
  plugins: ["no-only-tests"],
  rules: {
    "max-len": [
      "error",
      {
        code: 100,
        tabWidth: 2,
        ignoreStrings: true,
        ignoreTrailingComments: true,
        ignoreUrls: true
      }
    ],
    "no-only-tests/no-only-tests": "error",
    quotes: ["error", "double", { avoidEscape: false, allowTemplateLiterals: true }]
  }
}
