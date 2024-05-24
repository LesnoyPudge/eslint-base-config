// @ts-check

import tseslint from "typescript-eslint";
import { rulesConfig } from "./eslint.rules.js";
import { languageOptionsConfig } from "./eslint.languageOptionsConfig.js";
import { recommendedRulesConfig } from "./eslint.recommendedRules.js";
import "eslint-plugin-only-warn";

export default tseslint.config(
  tseslint.configs.base,
  ...languageOptionsConfig,
  // ...rulesConfig,
  ...recommendedRulesConfig,

  {
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    ignores: [
      "**/node_modules/**",
      "**/dist/**",
      "**/coverage/**",
      "**/build/**",
      "**/*.generated.*",
    ],
  },

  {
    extends: [tseslint.configs.disableTypeChecked],
    files: ["**/*.js", "**/*.jsx"],
  },
);
