module.exports = {
  extends: ["airbnb", "prettier"],
  plugins: ["@emotion", "react", "prettier"],
  env: {
    jest: true,
  },
  parser: "@babel/eslint-parser",
  parserOptions: {
    requireConfigFile: false,
  },
  rules: {
    "react/jsx-filename-extension": "off",
  },
}
