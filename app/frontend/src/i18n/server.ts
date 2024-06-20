import {
    TFunction, 
    createInstance,
} from 'i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import {initReactI18next} from 'react-i18next/initReactI18next';
import {cookies} from 'next/headers';
import {
    FALLBACK_LANGUAGE, 
    LANGUAGE_COOKIE, 
    Locales, 
    getOptions,
} from './settings';

async function initI18next(lang: Locales, namespace: string | string[]) {
    const i18nInstance = createInstance();
    await i18nInstance
        .use(initReactI18next)
        .use(
            resourcesToBackend(
                // Get the JSON file that matches the locale and namespace
                (lang: string, ns: string) => import(`./locales/${lang}/${ns}.json`),
            ),
        )
    // Initialize i18next with the options we created earlier
        .init(getOptions(lang, namespace));

    return i18nInstance;
}

// This function will be used in our server components for the translation
export async function createTranslation<NS extends string>(namespace: NS | NS[]): Promise<{ t: TFunction<NS> }> {
    const lang = getLocale();
    const i18nextInstance = await initI18next(lang, namespace);

    return {
        t: i18nextInstance.getFixedT(lang, Array.isArray(namespace) ? namespace[0] : namespace),
    };
}

// Utility function to get the locale from server components
export function getLocale() {
    return (cookies().get(LANGUAGE_COOKIE)?.value ?? FALLBACK_LANGUAGE) as Locales;
}
