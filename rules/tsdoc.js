import tseslint from 'typescript-eslint';
import tsdocPlugin from 'eslint-plugin-tsdoc';

export const tsdoc = tseslint.config({
    plugins: {
        tsdoc: tsdocPlugin,
    },
    rules: {
        'tsdoc/syntax': 'warn',
    },
});
