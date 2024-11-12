import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
// import markdown from "@eslint/markdown";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";

export default [
  { files: ["**/*.{js,mjs,cjs,ts,tsx,jsx}"] },
  { ignores: [".docusaurus/*"] },
  { settings: { react: { version: "18.3" } } },
  { languageOptions: { globals: globals.browser } },
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  eslintPluginPrettierRecommended,
  {
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/prop-types": "off",
      // For inline imports of svg, ex. require("@site/static/img/undraw_docusaurus_mountain.svg").default
      "@typescript-eslint/no-require-imports": "off",
    },
  },
];
