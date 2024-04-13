import antfu from '@antfu/eslint-config';

import {FlatCompat} from '@eslint/eslintrc';  
  
const compat = new FlatCompat({recommendedConfig: []});  

export default antfu(
    {
        stylistic: {
            indent: 4,
            quotes: 'single',  
        },
 
        react: true,
        scss: true,
        javascript: true,
        jsx: true,

        settings: {
            'react': {
                version: 'detect',
            },
            'import/resolver': {
                typescript: {},
            },
        },

        // Disable jsonc and yaml support    
        jsonc: false,
        yaml: false,
 
        typescript: {
            tsconfigPath: 'tsconfig.json',
        },

        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'], // Specify it only for TypeScript files  
            },
        },

        settings: {
            react: {
                version: 'detect',
            },
        },

        rules: {
        // ts  
            'ts/prefer-ts-expect-error': 'off',
            'ts/consistent-type-imports': 'off',
            'ts/no-unsafe-call': 'off',
            'ts/no-unsafe-return': 'off',
            'ts/no-unsafe-member-access': 'off',
            'ts/no-unsafe-assignment': 'off',
            'ts/no-explicit-any': 'off',
            'ts/no-unused-vars': ['error'],
            'ts/explicit-module-boundary-types': 'off',
            'ts/no-unsafe-argument': 'off',
            'ts/no-unnecessary-type-assertion': 'off',
            'ts/prefer-destructuring': ['error'],
            'ts/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],

            // react
            'react/jsx-indent': [
                'error',
                4, 
            ],
            'react/react-in-jsx-scope': 0,
            'react/prefer-stateless-function': 0,
            'react/jsx-one-expression-per-line': 0,
            'react/jsx-filename-extension': [
                1,
                {
                    extensions: [
                        '.ts',
                        '.tsx',
                    ],
                },
            ],
            'indent': [
                'error',
                4,
            ],

            // antfu  
            'antfu/if-newline': 'off',

            // eslint  
            'curly': ['error', 'multi-line'],
            'no-console': 'warn',
            'style/array-element-newline': [
                'error',
                {
                    ArrayExpression: 'consistent',
                    ArrayPattern: { minItems: 3 },
                },
            ],
            'style/linebreak-style': [0, 'error', 'windows'],
            'n/global-require': 0,
            'eslint linebreak-style': [0, 'error', 'windows'],
            'no-underscore-dangle': [2, { allowAfterThis: true }],
            'no-param-reassign': [2, { props: false }],
            'style/max-len': [
                2,
                {
                    code: 1360,
                    tabWidth: 4,
                    ignoreUrls: true,
                },
            ],
            'no-unused-vars': 'off',
            'prefer-template': 'off',
            'no-plusplus': 'off',
            'class-methods-use-this': 'off',
            'style/object-curly-spacing': 'off',
            'style/no-trailing-spaces': 'off',
            'style/brace-style': ['error', '1tbs'],
            'style/indent': ['error', 4, { SwitchCase: 1 }],
            'style/array-bracket-newline': ['error', 'consistent'],
            'style/object-curly-newline': [
                'error',
                {
                    multiline: true,
                    minProperties: 2,
                    consistent: true,
                },
            ],
            'node/prefer-global/process': 'off',

            // import  
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',

            // style  
            'style/arrow-parens': ['error', 'always'],
            'style/semi': [2, 'always'],
            'style/comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'never',
                    functions: 'ignore',
                },
            ],
        },
        gitignore: {
            files: ['.gitignore'],
        },
    },
    {
        ignores: [
            '.next',
            '.gitignore',
            '.yarn',
            'node_modules',
            '.husky',
            '.env*',
            'README.md',
            'yarn.lock',
        ],
    },
    {
        files: ['ts/types/**/*.ts'],
        rules: {
            'style/semi': 'off', 
        },
    },
    ...compat.config({
        extends: ['plugin:@next/next/core-web-vitals', 'plugin:@next/next/recommended'],
    })
);
