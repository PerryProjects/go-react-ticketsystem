import antfu from '@antfu/eslint-config';

import {FlatCompat} from '@eslint/eslintrc';

const compat = new FlatCompat();

export default antfu(
    {
        stylistic: {
            indent: 4,
            quotes: 'single',
        },

        vue: true,

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

        rules: {
            // vue
            'vue/no-template-shadow': 'off',
            'vue/block-order': ['error', {
                order: ['template', 'script[setup]', 'style'],
            }],
            'vue/attributes-order': [
                'error',
                {
                    order: [
                        'DEFINITION',
                        'LIST_RENDERING',
                        'CONDITIONALS',
                        'RENDER_MODIFIERS',
                        'GLOBAL',
                        ['UNIQUE', 'SLOT'],
                        'TWO_WAY_BINDING',
                        'OTHER_DIRECTIVES',
                        'OTHER_ATTR',
                        'EVENTS',
                        'CONTENT',
                    ],
                    alphabetical: false,
                },
            ],
            'vue/html-indent': ['off'],
            'vue/html-closing-bracket-spacing': [0],
            'vue/max-attributes-per-line': [
                'error',
                {
                    singleline: {max: 1},
                    multiline: {max: 1},
                },
            ],

            // antfu
            'antfu/if-newline': 'off',

            // eslint
            'curly': ['error', 'multi-line'],
            'no-console': 'warn',
            'arrow-body-style': ['error', 'as-needed'],
            'eslint linebreak-style': [0, 'error', 'windows'],
            'no-unused-vars': 'off',
            'prefer-template': 'off',
            'no-plusplus': 'off',
            'class-methods-use-this': 'off',
            'no-underscore-dangle': [2, {
                allowAfterThis: true,
                allow: ['_data'],
            }],
            'no-param-reassign': [2, {props: false}],
            'no-else-return': 'error',
            'no-useless-return': 'error',

            // style
            'style/array-element-newline': [
                'error',
                {
                    ArrayExpression: 'consistent',
                    ArrayPattern: {minItems: 3},
                },
            ],
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
            'style/max-len': [
                2,
                {
                    code: 1360,
                    tabWidth: 4,
                    ignoreUrls: true,
                },
            ],
            'style/object-curly-spacing': 'off',
            'style/no-trailing-spaces': 'off',
            'style/brace-style': ['error', '1tbs'],
            'style/linebreak-style': ['off', 'windows'],
            'style/indent': ['error', 4, {
                SwitchCase: 1,
                ObjectExpression: 1,
            }],
            'style/array-bracket-newline': ['error', 'consistent'],
            'style/object-curly-newline': [
                'error',
                {
                    multiline: true,
                    minProperties: 2,
                    consistent: true,
                },
            ],

            // node
            'n/prefer-global/process': 'off',
            'n/global-require': 0,

            // import
            'import/extensions': 'off',
            'import/no-unresolved': 'off',
            'import/prefer-default-export': 'off',
            'import/no-extraneous-dependencies': 'off',
        },
        gitignore: {
            files: ['.gitignore'],
        },
    },
    {
        ignores: [
            '.nuxt',
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
        files: ['**/*.ts', '**/*.vue'],
        rules: {
            'ts/ban-ts-comment': 'off',
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
            'ts/strict-boolean-expressions': 'off',
            'ts/promise-function-async': ['error', {
                checkFunctionDeclarations: false,
            }],
            'ts/no-misused-promises': [
                'error',
                {
                    checksVoidReturn: false,
                },
            ],
        },
    },
    // types rule overrides
    {
        files: ['ts/types/**/*.ts'],
        rules: {
            'style/semi': 'off',
        },
    },
    {
        files: ['eslint.config.js', 'server.cjs', 'tailwind.config.js'],
        rules: {
            'ts/prefer-destructuring': 'off',
            'ts/no-misused-promises': 'off',
            'ts/promise-function-async': 'off',
        },
    },
    ...compat.config({
        extends: ['plugin:tailwindcss/recommended'],
        rules: {
            'tailwindcss/no-custom-classname': ['error', {
                whitelist: [
                    'pi',
                    'pi-.*',
                ],
            }],
            'tailwindcss/classnames-order': 'error',
            'tailwindcss/enforces-shorthand': 'error',
        },
    }),
);
