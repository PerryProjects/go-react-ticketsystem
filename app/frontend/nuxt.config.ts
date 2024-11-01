// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    modules: [
        '@primevue/nuxt-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-typed-router',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
    ],
    css: ['@/assets/styles/fonts/google-fonts.css', '@/assets/styles/tailwind.css', '@/assets/styles/base.css'],
    primevue: {
        options: {
            ripple: true,
            theme: 'none',
            inputStyle: 'outlined',
        },
    },
    i18n: {
        vueI18n: './ts/i18n/i18n.config.ts',
        strategy: 'prefix_and_default',
        defaultLocale: 'de',
        experimental: {
            autoImportTranslationFunctions: true,
        },
        locales: [
            {
                code: 'en',
                name: 'English',
            },
            {
                code: 'de',
                name: 'Deutsch',
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
        },
    },
    image: {
        formats: ['webp'],
        quality: 80,
        dir: 'assets/images',
    },
    postcss: {
        plugins: {
            'postcss-import': {},
            'tailwindcss': {},
            'autoprefixer': {},
        },
    },
    googleFonts: {
        download: true,
        display: 'swap',
        families: {
            'Roboto': true,
            'Roboto Mono': true,
            'Roboto Serif': true,
        },
        outputDir: 'assets',
        stylePath: 'styles/fonts/google-fonts.css',
        fontsPath: '../../fonts',
    },
});
