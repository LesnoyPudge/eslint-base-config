// @ts-check

import globals from "globals";
import path from "node:path";
import tseslint from "typescript-eslint";

export const languageOptionsConfig = tseslint.config({
  languageOptions: {
    globals: {
      ...globals.es2021,
      ...globals.node,
      ...globals.browser,
    },
    parserOptions: {
      allowAutomaticSingleRunInference: true,
      cacheLifetime: {
        glob: "Infinity",
      },
      project: ["tsconfig.json"],
      tsconfigRootDir: path.resolve(),
      warnOnUnsupportedTypeScriptVersion: false,
    },
  },
});
