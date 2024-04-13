// @ts-check

/** @type {import('next-i18next').UserConfig} */
const i18n = {
    debug: process.env.NODE_ENV === 'development',
    i18n: {
        defaultLocale: 'de',
        locales: ['en', 'de'],
    },
    reloadOnPrerender: process.env.NODE_ENV === 'development',
};

export default i18n; 
