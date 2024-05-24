// @ts-check

import tseslint from "typescript-eslint";

export const eslintConflicts = tseslint.config({
  rules: {
    ...tseslint.configs.eslintRecommended.rules,
    "dot-notation": "off",
    "no-empty-function": "off",
    "no-array-constructor": "off",
    "no-implied-eval": "off",
    "no-loss-of-precision": "off",
    "no-unused-vars": "off",
    "no-useless-constructor": "off",
    "no-throw-literal": "off",
    "prefer-promise-reject-errors": "off",
    "require-await": "off",
  },
});
