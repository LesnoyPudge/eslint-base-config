// @ts-check

import tseslint from 'typescript-eslint';
import eslint from '@eslint/js';
import preferArrowPlugin from 'eslint-plugin-prefer-arrow';
import stylisticPlugin from '@stylistic/eslint-plugin';
import * as importPlugin from 'eslint-plugin-import';
import { fixupPluginRules } from '@eslint/compat';
import stylisticPluginJS from '@stylistic/eslint-plugin-js';
import restrictedGlobals from 'confusing-browser-globals';



const INDENT = 4;

export const recommendedRulesConfig = tseslint.config(
    eslint.configs.recommended,
    tseslint.configs.eslintRecommended,
    ...tseslint.configs.recommended,
    ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
    {
        plugins: {
            'prefer-arrow': preferArrowPlugin,
        },
        rules: {
            'prefer-arrow/prefer-arrow-functions': [
                'warn',
                {
                    disallowPrototype: true,
                    singleReturnOnly: false,
                    classPropertiesAllowed: false,
                },
            ],
        },
    },
    stylisticPlugin.configs['disable-legacy'],
    stylisticPlugin.configs.customize({
        arrowParens: true,
        blockSpacing: true,
        braceStyle: '1tbs',
        commaDangle: 'always-multiline',
        flat: true,
        indent: INDENT,
        jsx: true,
        quoteProps: 'consistent',
        quotes: 'single',
        semi: true,
    }),
    {
        // plugins: {
        //     '@stylistic/js': stylisticPluginJS,
        // },
        rules: {
            '@stylistic/max-len': ['warn', { 'code': 80 }],
            '@stylistic/indent': 'off',
            '@stylistic/eol-last': ['warn', 'never'],
            // '@typescript-eslint/indent': ['warn', INDENT],
            // 'indent': ['warn', 4],
            '@stylistic/no-multiple-empty-lines': [
                'warn',
                {
                    max: 3,
                    maxEOF: 0,
                    maxBOF: 3,
                },
            ],
            // '@stylistic/ts/member-delimiter-style': "error"
            '@typescript-eslint/consistent-type-definitions': ['warn', 'type'],
            'no-restricted-globals': ['warn', ...restrictedGlobals],
            // '@stylistic/jsx-one-expression-per-line': ['warn', {
            //     allow: 'single-line',
            // }],
            '@stylistic/jsx-one-expression-per-line': 'off'
        },
    },
    {
        plugins: {
            import: importPlugin,
        },
        rules: {
            'import/no-extraneous-dependencies': 'error',
        },
        settings: {
            'import/resolver': {
                typescript: true,
                node: true,
            },
        },
    },
    {
        files: ['**/*.js', '**/*.jsx'],
        plugins: {
            '@stylistic/js': stylisticPluginJS,
        },
        rules: {
            '@stylistic/indent': ['warn', INDENT],
        },
    },
);