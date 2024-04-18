module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: "@mate-academy/eslint-config-react-typescript",
  overrides: [
    {
      env: {
        node: true,
      },
      files: [".eslintrc.{js,cjs,tsx,ts}"],
      parserOptions: {
        sourceType: "script",
      },
    },
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
  },
  plugins: ["@typescript-eslint", "react"],
  rules: {
    "no-param-reassign": 0,
  },
};
