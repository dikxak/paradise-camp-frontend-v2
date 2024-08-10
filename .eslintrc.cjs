module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "airbnb",
    "airbnb-typescript",
    "prettier",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:react-hooks/recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:jsx-a11y/recommended",
    "plugin:import/typescript",
    "plugin:prettier/recommended",
  ],
  ignorePatterns: [
    "node_modules/*",
    "scripts/*",
    "dist",
    ".eslintrc.cjs",
    "public",
    "vite.config.ts",
    "vite-env.d.ts",
    "main.tsx",
    "*.config.js",
    "*.config.cjs",
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.app.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: [
    "react-refresh",
    "react",
    "react-hooks",
    "jsx-a11y",
    "prettier",
    "import",
    "check-file",
    "import-helpers",
  ],
  rules: {
    "no-console": "warn",
    "consistent-return": "off",
    "@typescript-eslint/no-unused-vars": "warn",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "prettier/prettier": "error",
    "react/jsx-filename-extension": [1, { extensions: [".tsx"] }],
    "react/function-component-definition": [
      2,
      {
        namedComponents: ["function-expression", "arrow-function"],
        unnamedComponents: ["function-expression", "arrow-function"],
      },
    ],
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        ts: "never",
        tsx: "never",
      },
    ],
    "import/no-cycle": "error",
    "react/prop-types": "off",
    "import-helpers/order-imports": [
      "error",
      {
        newlinesBetween: "always",
        groups: [
          "/^react/",
          "module",
          "/^@/components/",
          "/^@/layouts/",
          "/^@/hoc/",
          "/^@/context/",
          "/^@/hooks/",
          "/^@/assets/",
          "/^@/constants/",
          "/^@/utils/",
          "/^@/lib/",
          "/^@/config/",
          "/^@/services/",
          "/^@/types/",
          ["parent", "sibling", "index"],
        ],
        alphabetize: { order: "asc", ignoreCase: true },
      },
    ],
    "import/default": "off",
    "react/react-in-jsx-scope": "off",
    "react/require-default-props": 0,
    "check-file/filename-naming-convention": [
      "error",
      {
        "**/*.tsx": "PASCAL_CASE",
        "**/*.ts": "CAMEL_CASE",
      },
    ],
    "@typescript-eslint/no-misused-promises": [
      2,
      {
        checksVoidReturn: {
          attributes: false,
        },
      },
    ],
  },
  settings: {
    "import/resolver": {
      typescript: {
        alwaysTryTypes: true,
        project: "./tsconfig.app.json",
      },
    },
  },
};
