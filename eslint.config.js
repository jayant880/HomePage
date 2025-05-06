import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                ecmaVersion: 2021,
                sourceType: 'module',
            },
            globals: {
                document: 'readonly',
                window: 'readonly',
                fetch: 'readonly',
                console: 'readonly',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-console': 'warn',
        },
    },
];
