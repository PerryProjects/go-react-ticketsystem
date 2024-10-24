// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: ['@primevue/nuxt-module', '@nuxtjs/tailwindcss'],
    css: ['@/assets/styles/tailwind.css', '@/assets/styles/base.css'],
    primevue: {
        options: {
            ripple: true,
            theme: 'none',
            inputStyle: 'outlined',
        },
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss': {},
            'autoprefixer': {},
        },
    },
});
