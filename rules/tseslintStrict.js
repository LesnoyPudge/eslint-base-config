// @ts-check

import tseslint from "typescript-eslint";

export const tseslintStrict = tseslint.config({
  rules: {
    "@typescript-eslint/await-thenable": "warn",
    "@typescript-eslint/ban-ts-comment": [
      "error",
      { minimumDescriptionLength: 10 },
    ],
    "@typescript-eslint/ban-types": "warn",

    "@typescript-eslint/no-array-constructor": "warn",
    "@typescript-eslint/no-array-delete": "warn",
    "@typescript-eslint/no-base-to-string": "warn",
    "@typescript-eslint/no-confusing-void-expression": "warn",
    "@typescript-eslint/no-duplicate-enum-values": "warn",
    "@typescript-eslint/no-duplicate-type-constituents": "warn",
    "@typescript-eslint/no-dynamic-delete": "warn",
    "@typescript-eslint/no-explicit-any": "warn",
    "@typescript-eslint/no-extra-non-null-assertion": "warn",
    "@typescript-eslint/no-extraneous-class": "warn",
    "@typescript-eslint/no-floating-promises": "warn",
    "@typescript-eslint/no-for-in-array": "warn",

    "@typescript-eslint/no-implied-eval": "warn",
    "@typescript-eslint/no-invalid-void-type": "warn",

    "@typescript-eslint/no-loss-of-precision": "warn",
    "@typescript-eslint/no-meaningless-void-operator": "warn",
    "@typescript-eslint/no-misused-new": "warn",
    "@typescript-eslint/no-misused-promises": "warn",
    "@typescript-eslint/no-mixed-enums": "warn",
    "@typescript-eslint/no-namespace": "warn",
    "@typescript-eslint/no-non-null-asserted-nullish-coalescing": "warn",
    "@typescript-eslint/no-non-null-asserted-optional-chain": "warn",
    "@typescript-eslint/no-non-null-assertion": "warn",
    "@typescript-eslint/no-redundant-type-constituents": "warn",
    "@typescript-eslint/no-this-alias": "warn",
    "@typescript-eslint/no-unnecessary-boolean-literal-compare": "warn",
    "@typescript-eslint/no-unnecessary-condition": "warn",
    "@typescript-eslint/no-unnecessary-type-arguments": "warn",
    "@typescript-eslint/no-unnecessary-type-assertion": "warn",
    "@typescript-eslint/no-unnecessary-type-constraint": "warn",
    "@typescript-eslint/no-unsafe-argument": "warn",
    "@typescript-eslint/no-unsafe-assignment": "warn",
    "@typescript-eslint/no-unsafe-call": "warn",
    "@typescript-eslint/no-unsafe-declaration-merging": "warn",
    "@typescript-eslint/no-unsafe-enum-comparison": "warn",
    "@typescript-eslint/no-unsafe-member-access": "warn",
    "@typescript-eslint/no-unsafe-return": "warn",

    "@typescript-eslint/no-unused-vars": "warn",

    "@typescript-eslint/no-useless-constructor": "warn",
    "@typescript-eslint/no-useless-template-literals": "warn",
    "@typescript-eslint/no-var-requires": "warn",

    "@typescript-eslint/only-throw-error": "warn",
    "@typescript-eslint/prefer-as-const": "warn",
    "@typescript-eslint/prefer-includes": "warn",
    "@typescript-eslint/prefer-literal-enum-member": "warn",

    "@typescript-eslint/prefer-promise-reject-errors": "warn",
    "@typescript-eslint/prefer-reduce-type-parameter": "warn",
    "@typescript-eslint/prefer-return-this-type": "warn",
    "@typescript-eslint/prefer-ts-expect-error": "warn",

    "@typescript-eslint/require-await": "warn",
    "@typescript-eslint/restrict-plus-operands": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNullish: false,
        allowNumberAndString: false,
        allowRegExp: false,
      },
    ],
    "@typescript-eslint/restrict-template-expressions": [
      "error",
      {
        allowAny: false,
        allowBoolean: false,
        allowNever: false,
        allowNullish: false,
        allowNumber: false,
        allowRegExp: false,
      },
    ],
    "@typescript-eslint/triple-slash-reference": "warn",
    "@typescript-eslint/unbound-method": "warn",
    "@typescript-eslint/unified-signatures": "warn",
    "@typescript-eslint/use-unknown-in-catch-callback-variable": "warn",
  },
});
