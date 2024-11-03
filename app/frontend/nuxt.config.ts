// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: {enabled: true},
    runtimeConfig: {
        public: {
            apiUrl: `${process.env.NUXT_PUBLIC_BACKEND_URL}`,
        },
    },
    modules: [
        '@primevue/nuxt-module',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/i18n',
        'nuxt-typed-router',
        '@nuxt/image',
        '@nuxtjs/google-fonts',
        '@sidebase/nuxt-auth',
        '@vee-validate/nuxt',
    ],
    css: ['primeicons/primeicons.css', '@/assets/styles/fonts/google-fonts.css', '@/assets/styles/tailwind.css', '@/assets/styles/base.css'],
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
        defaultLocaleRouteNameSuffix: 'de',
        defaultLocale: 'de',
        experimental: {
            autoImportTranslationFunctions: true,
        },
        locales: [
            {
                code: 'en',
                name: 'english',
            },
            {
                code: 'de',
                name: 'german',
            },
        ],
        detectBrowserLanguage: {
            useCookie: true,
            alwaysRedirect: true,
        },
    },
    image: {
        provider: 'ipx',
        formats: ['webp'],
        quality: 80,
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
    auth: {
        isEnabled: true,
        originEnvKey: 'AUTH_ORIGIN',
        baseURL: `${process.env.NUXT_PUBLIC_BACKEND_URL}/api/`,
        provider: {
            type: 'local',
            pages: {
                login: '/anmelden',
            },
            token: {
                maxAgeInSeconds: 1800,
            },
            endpoints: {
                signIn: {
                    path: 'login',
                    method: 'post',
                },
                signOut: {
                    path: 'logout',
                    method: 'post',
                },
                getSession: {
                    path: 'session',
                    method: 'get',
                },
            },
        },
        globalAppMiddleware: true,
    },
});
