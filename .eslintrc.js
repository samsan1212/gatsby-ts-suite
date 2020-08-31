module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
  ],
  parserOptions: {
    project: "tsconfig.json",
    sourceType: "module",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
}
