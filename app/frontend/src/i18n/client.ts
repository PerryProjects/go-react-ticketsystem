'use client';
import {
    useEffect, 
    useState, 
} from 'react';
import i18next from 'i18next';
import {
    UseTranslationOptions, 
    initReactI18next, 
    useTranslation as useTranslationOrg, 
} from 'react-i18next';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    getOptions, 
    supportedLocales, 
} from './settings';

const runsOnServerSide = typeof window === 'undefined';

void i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend(async (language: typeof supportedLocales[number], namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? supportedLocales : [],
    });

export function useTranslation<NS extends string>(lng: typeof supportedLocales[number], ns: NS | NS[], options: UseTranslationOptions<undefined> | undefined = undefined): ReturnType<typeof useTranslationOrg> {
    const ret = useTranslationOrg(ns, options); 
    const { i18n } = ret;
    if (runsOnServerSide && lng && i18n.resolvedLanguage !== lng) {
        void i18n.changeLanguage(lng);
    } else {
        // eslint-disable-next-line react-hooks/rules-of-hooks
        const [activeLng, setActiveLng] = useState(i18n.resolvedLanguage);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (activeLng === i18n.resolvedLanguage) return;
            setActiveLng(i18n.resolvedLanguage);
        }, [activeLng, i18n.resolvedLanguage]);
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => {
            if (!lng || i18n.resolvedLanguage === lng) return;
            void i18n.changeLanguage(lng);
        }, [lng, i18n]);
    }
    return ret;
}
