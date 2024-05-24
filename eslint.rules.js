// @ts-check

import tseslint from "typescript-eslint";
import { eslintAll } from "./rules/eslintAll.js";
import { tseslintStrict } from "./rules/tseslintStrict.js";
import { tseslintStylistic } from "./rules/tseslintStylistic.js";
import { eslintConflicts } from "./rules/eslintConflicts.js";
import { jsdoc } from "./rules/jsdoc.js";
import { tsdoc } from "./rules/tsdoc.js";
import { preferArrowFunctions } from "./rules/preferArrowFunctions.js";
import { stylistic } from "./rules/stylistic.js";

export const rulesConfig = tseslint.config(
  ...eslintAll,

  // disable conflicting rules
  ...eslintConflicts,

  ...tseslintStrict,
  ...tseslintStylistic,
  // ...jsdoc,
  // ...tsdoc,
  ...preferArrowFunctions,
  ...stylistic,
);
