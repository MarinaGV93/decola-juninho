import globals from "globals";
import pluginJs from "@eslint/js";
import prettierPlugin from "eslint-plugin-prettier";
import prettierConfig from "eslint-config-prettier";

export default [
  pluginJs.configs.recommended,
  prettierConfig,
  {
    files: ["**/*.js"],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    plugins: {
      prettier: prettierPlugin,
    },
    rules: {
      "no-unused-vars": "warn",
      "no-console": ["warn", { allow: ["warn", "error"] }],
    },
  },
];
