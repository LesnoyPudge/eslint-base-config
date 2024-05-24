// @ts-check

import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import preferArrowFunctionsPlugin from "eslint-plugin-prefer-arrow-functions";
import stylisticPlugin from "@stylistic/eslint-plugin";

export const recommendedRulesConfig = tseslint.config(
  eslint.configs.recommended,
  tseslint.configs.eslintRecommended,
  ...tseslint.configs.recommended,
  ...tseslint.configs.strictTypeChecked,
  ...tseslint.configs.stylisticTypeChecked,
  ...tseslint.config({
    plugins: {
      "prefer-arrow-functions": preferArrowFunctionsPlugin,
    },
    rules: {
      "prefer-arrow-functions/prefer-arrow-functions": [
        "warn",
        {
          allowNamedFunctions: false,
          classPropertiesAllowed: false,
          disallowPrototype: false,
          returnStyle: "unchanged",
          singleReturnOnly: false,
        },
      ],
    },
  }),
  stylisticPlugin.configs["disable-legacy"],
  stylisticPlugin.configs.customize({
    arrowParens: true,
    blockSpacing: true,
    braceStyle: "1tbs",
    commaDangle: "always-multiline",
    flat: true,
    indent: 4,
    jsx: true,
    quoteProps: "as-needed",
    quotes: "single",
    semi: true,
  }),
  ...tseslint.config({
    rules: {
      "@stylistic/no-multiple-empty-lines": [
        "warn",
        {
          max: 3,
          maxEOF: 0,
          maxBOF: 3,
        },
      ],
    },
  }),
);
