import type {InitOptions} from 'i18next';

export const FALLBACK_LANGUAGE = 'de';
export const supportedLocales = ['en', FALLBACK_LANGUAGE] as const;
export type Locales = (typeof supportedLocales)[number];

// You can name the cookie to whatever you want
export const LANGUAGE_COOKIE = 'preferred_language';

export function getOptions(lang = FALLBACK_LANGUAGE, namespace: string | string[] = 'common'): InitOptions {
    return {
    // debug: true, // Set to true to see console logs
        supportedLngs: supportedLocales,
        fallbackLng: FALLBACK_LANGUAGE,
        ns: typeof namespace === 'string' ? [namespace] : namespace,
        defaultNS: 'common',
        lng: lang,
    };
}
