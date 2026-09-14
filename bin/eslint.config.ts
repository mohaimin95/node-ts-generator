import js from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    ignores: [
      "webpack.config.js",
      "dist/**/*",
      "node_modules/**/*",
      "eslint.config.*",
    ],
  },
  {
    files: ["**/*.{js,mjs,cjs,ts,mts,cts}"],
    ...js.configs.recommended,
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        tsconfigRootDir: __dirname,
        project: "./tsconfig.json",
      },
    },
    rules: {
      "no-console": "warn",
    },
  },
  ...tseslint.configs.recommended,
  eslintPluginPrettierRecommended,
]);
