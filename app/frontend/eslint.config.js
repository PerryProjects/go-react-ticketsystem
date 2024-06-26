import { fileURLToPath } from 'node:url';
import path from 'node:path';
import antfu from '@antfu/eslint-config';

import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat({recommendedConfig: []});

const filename = fileURLToPath(import.meta.url);

const dirname = path.dirname(filename);

export default antfu(
    {
        stylistic: { 
            indent: 4, 
            quotes: 'single',
        },
 
        react: true,
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
            tsconfigPath: ['tsconfig.json'],
        },

        languageOptions: {
            parserOptions: {
                project: ['./tsconfig.json'],
                tsconfigRootDir: dirname,
                sourceType: 'module',
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
            'react/react-in-jsx-scope': 0,
            'react/prefer-stateless-function': 0,
            'react/jsx-one-expression-per-line': 0,
            'react-naming-convention/filename-extension': [
                1,
                {
                    extensions: [
                        '.ts',
                        '.tsx',
                    ],
                },
            ],
            'react-refresh/only-export-components': 'off',

            // antfu
            'antfu/if-newline': 'off',

            // eslint
            'curly': ['error', 'multi-line'],
            'no-console': 'warn',
            'eslint linebreak-style': [0, 'error', 'windows'],
            'no-underscore-dangle': [2, {allowAfterThis: true}],
            'no-param-reassign': [2, {props: false}],
            'no-unused-vars': 'off',
            'prefer-template': 'off',
            'no-plusplus': 'off',
            'class-methods-use-this': 'off',
            
            // node
            'n/global-require': 0,
            'node/global-require': 0,
            'node/prefer-global/process': 0,

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
            'style/block-spacing': ['off'],
            'style/object-curly-spacing': 'off',
            'style/no-trailing-spaces': 'off',
            'style/brace-style': ['error', '1tbs'],
            'style/indent': ['error', 4, {SwitchCase: 1}],
            'style/array-bracket-newline': ['error', 'consistent'],
            'style/jsx-one-expression-per-line': 'off',      
            'style/object-curly-newline': [
                'error',
                {
                    multiline: true,
                    minProperties: 2,
                    consistent: true,
                },
            ],
            'style/max-len': [
                2,
                {
                    code: 1360,
                    tabWidth: 4,
                    ignoreUrls: true,
                },
            ],
            'style/array-element-newline': [
                'error',
                {
                    ArrayExpression: 'consistent',
                    ArrayPattern: {minItems: 3},
                },
            ],
            'style/jsx-indent': [
                'error',
                4,
            ],
            'style/linebreak-style': [0, 'windows'],
            'style/jsx-self-closing-comp': [
                'error',
                {
                    html: true,
                    component: true,
                },
            ],
        },
        ignores: [
            '.next',
            '.gitignore',
            '.yarn',
            'node_modules',
            '.husky', 
            '.env*',
            'yarn.lock',
            'README.md',
        ],
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
    ...compat.config({
        extends: ['plugin:@next/next/core-web-vitals', 'plugin:@next/next/recommended'],
    }),
);
