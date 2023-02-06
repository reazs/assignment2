module.exports = {
  plugins: ["@html-eslint", "jsx-a11y", "jest"],
  overrides: [
    {
      files: ["*.html"],
      parser: "@html-eslint/parser",
      extends: ["plugin:@html-eslint/recommended", "prettier"],
    },
    {
      files: ["test/**"],
      plugins: ["jest"],
      extends: ["plugin:jest/recommended"],
      env: {
        node: true,
      },
      globals: {
        page: "readonly",
      },
    },
  ],
  rules: {
    "@html-eslint/indent": ["error", 2],
    "@html-eslint/no-extra-spacing-attrs": [
      "error",
      { enforceBeforeSelfClose: true },
    ],
    "@html-eslint/require-closing-tags": ["error", { selfClosing: "always" }],
  },
  extends: ["eslint:recommended", "plugin:jsx-a11y/recommended"],
  root: true,
  ignorePatterns: [
    ".eslintrc.js",
    "jest.config.ts",
    "jest-puppeteer.config.js",
  ],
  env: {
    es2021: true,
    browser: true,
  },
};
