// @ts-check

import { eslintConfigBase } from './config.js';
import tseslint from 'typescript-eslint';



export default tseslint.config(
    ...eslintConfigBase,
);