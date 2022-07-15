module.exports = {
  extends: ["plugin:storybook/recommended", "next", "next/core-web-vitals", "prettier"],
  overrides: [
    {
      files: ["*.stories.@(ts|tsx|js|jsx|mjs|cjs)"],
      rules: {
        "storybook/hierarchy-separator": "error"
      }
    }
  ],
  plugins: ["no-only-tests"],
  rules: {
    "max-len": [
      "error",
      {
        code: 88,
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
