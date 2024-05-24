import tseslint from "typescript-eslint";
import preferArrowFunctionsPlugin from "eslint-plugin-prefer-arrow-functions";

export const preferArrowFunctions = tseslint.config({
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
});
