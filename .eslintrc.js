module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["@emotion", "prettier"],
  env: {
    jest: true,
  },
  parser: "babel-eslint",
  rules: {
    "react/jsx-filename-extension": "off",
  },
}
