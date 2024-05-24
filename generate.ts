import stylisticPlugin from "@stylistic/eslint-plugin";
import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import type { TSESLint } from "@typescript-eslint/utils";
import { writeFileSync } from "node:fs";

const extractRuleKeysFromArrayConfig = (
  configArr: TSESLint.FlatConfig.Config[],
) => {
  let result: string[] = [];

  configArr.forEach((config) => {
    if (!config.rules) return;

    result = result.concat(Object.keys(config.rules));
  });

  return result;
};

const tseslintConflict = {
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
} satisfies TSESLint.FlatConfig.Config;

const allRuleKeys: string[] = [
  ...Object.keys(eslint.configs.all.rules),
  ...extractRuleKeysFromArrayConfig(tseslint.configs.all),
  ...Object.keys(tseslintConflict.rules),
  ...Object.keys(stylisticPlugin.configs["disable-legacy"].rules ?? []),
  ...Object.keys(stylisticPlugin.configs["all-flat"].rules ?? []),
];

const rulesObject: TSESLint.FlatConfig.Config = {
  rules: allRuleKeys.reduce<NonNullable<TSESLint.FlatConfig.Config["rules"]>>(
    (acc, cur) => {
      acc[cur] = "warn";
      return acc;
    },
    {},
  ),
};

writeFileSync("rules.json", JSON.stringify(rulesObject));

console.log(allRuleKeys.length);

// console.log(JSON.stringify(allRuleKeys))

// console.log(JSON.stringify(stylisticPlugin.configs["disable-legacy"].rules))
