import tseslint from 'typescript-eslint';
import jsdocPlugin from 'eslint-plugin-jsdoc';

export const jsdoc = tseslint.config({
    plugins: {
        jsdoc: jsdocPlugin,
    },
    rules: {
        'jsdoc/check-access': 'warn', // Recommended
        'jsdoc/check-alignment': 'warn', // Recommended
        'jsdoc/check-examples': 'warn',
        'jsdoc/check-indentation': 'warn',
        'jsdoc/check-line-alignment': 'warn',
        'jsdoc/check-param-names': 'warn', // Recommended
        'jsdoc/check-property-names': 'warn', // Recommended
        'jsdoc/check-syntax': 'warn',
        'jsdoc/check-tag-names': 'warn', // Recommended
        'jsdoc/check-types': 'warn', // Recommended
        'jsdoc/check-values': 'warn', // Recommended
        'jsdoc/empty-tags': 'warn', // Recommended
        'jsdoc/implements-on-classes': 'warn', // Recommended
        'jsdoc/informative-docs': 'warn',
        'jsdoc/match-description': 'warn',
        'jsdoc/multiline-blocks': 'warn', // Recommended
        'jsdoc/no-bad-blocks': 'warn',
        'jsdoc/no-blank-block-descriptions': 'warn',
        'jsdoc/no-defaults': 'warn',
        'jsdoc/no-missing-syntax': 'warn',
        'jsdoc/no-multi-asterisks': 'warn', // Recommended
        'jsdoc/no-restricted-syntax': 'warn',
        'jsdoc/no-types': 'warn',
        'jsdoc/no-undefined-types': 'warn', // Recommended
        'jsdoc/require-asterisk-prefix': 'warn',
        'jsdoc/require-description': 'warn',
        'jsdoc/require-description-complete-sentence': 'warn',
        'jsdoc/require-example': 'warn',
        'jsdoc/require-file-overview': 'warn',
        'jsdoc/require-hyphen-before-param-description': 'warn',
        'jsdoc/require-jsdoc': 'warn', // Recommended
        'jsdoc/require-param': 'warn', // Recommended
        'jsdoc/require-param-description': 'warn', // Recommended
        'jsdoc/require-param-name': 'warn', // Recommended
        'jsdoc/require-param-type': 'warn', // Recommended
        'jsdoc/require-property': 'warn', // Recommended
        'jsdoc/require-property-description': 'warn', // Recommended
        'jsdoc/require-property-name': 'warn', // Recommended
        'jsdoc/require-property-type': 'warn', // Recommended
        'jsdoc/require-returns': 'warn', // Recommended
        'jsdoc/require-returns-check': 'warn', // Recommended
        'jsdoc/require-returns-description': 'warn', // Recommended
        'jsdoc/require-returns-type': 'warn', // Recommended
        'jsdoc/require-throws': 'warn',
        'jsdoc/require-yields': 'warn', // Recommended
        'jsdoc/require-yields-check': 'warn', // Recommended
        'jsdoc/sort-tags': 'warn',
        'jsdoc/tag-lines': 'warn', // Recommended
        'jsdoc/valid-types': 'warn', // Recommended
    },
});
