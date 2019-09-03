module.exports = {
  "*.{js,ts,tsx}": ["prettier --write", "eslint", "git add"],
  "*.{html,json,md,yml,yaml}": ["prettier --write", "git add"],
}
