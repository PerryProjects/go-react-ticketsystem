/** @type {import('tailwindcss').Config} */

import tailwindcss from 'tailwindcss-primeui';

module.exports = {
    darkMode: 'class',
    content: ['./components/**/*.{js,vue,ts}', './layouts/**/*.vue', './pages/**/*.vue', './plugins/**/*.{js,ts}', './nuxt.config.{js,ts}', './app.vue', './error.vue'],
    plugins: [tailwindcss],
};
