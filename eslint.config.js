import js from '@eslint/js';
import babelParser from '@babel/eslint-parser';

export default [
    {
        files: ['**/*.js'],
        languageOptions: {
            parser: babelParser,
            parserOptions: {
                requireConfigFile: false,
                sourceType: 'module',
                ecmaVersion: 'latest',
            },
            globals: {
                console: 'readonly',
            },
        },
        rules: {
            ...js.configs.recommended.rules,
            'no-console': 'warn',
        },
    },
];