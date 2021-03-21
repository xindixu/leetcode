module.exports = {
  root: true,
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ["prettier"],
  extends: ["airbnb-base", "plugin:prettier/recommended"],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  rules: {
    "no-plusplus": "off",
    semi: ["error", "never"],
    "no-param-reassign": "off",
    "no-continue": "off",
    "no-restricted-syntax": "off",
  },
}
