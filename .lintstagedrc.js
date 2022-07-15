module.exports = {
  "*.{js,jsx,ts,tsx}": [
    'prettier --write "**/*.{js,jsx,ts,tsx}"',
    'eslint --fix --ext "**/*.{js,jsx,ts,tsx}"'
  ],
  "*.{css,json}": ['prettier --write "**/*.{css,json}"']
}
