/** @type {import('tailwindcss').Config} */

import tailwindcss from 'tailwindcss-primeui';

module.exports = {
    darkMode: 'class',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './error.vue'],
    plugins: [tailwindcss],
    theme: {
        extend: {
            fontFamily: {
                sans: [
                    'Roboto',
                    'ui-sans-serif',
                    'system-ui',
                    'sans-serif',
                    'Apple Color Emoji',
                    'Segoe UI Emoji',
                    'Segoe UI Symbol',
                    'Noto Color Emoji',
                ],
                mono: [
                    'Roboto Mono',
                    'ui-monospace',
                    'SFMono-Regular',
                    'Menlo',
                    'Monaco',
                    'Consolas',
                    'Liberation Mono',
                    'Courier New',
                    'monospace',
                ],
                serif: [
                    'Roboto Slab',
                    'ui-serif',
                    'Georgia',
                    'Cambria',
                    'Times New Roman',
                    'Times',
                    'serif',
                ],
            },
        },
    },
};
