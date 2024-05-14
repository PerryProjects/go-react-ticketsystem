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
import { useCookies } from 'react-cookie';
import resourcesToBackend from 'i18next-resources-to-backend';
import LanguageDetector from 'i18next-browser-languagedetector';
import {
    FALLBACK_LANGUAGE, 
    getOptions, 
    supportedLocales, 
} from './settings';

const runsOnServerSide = typeof window === 'undefined';

// 
void i18next
    .use(initReactI18next)
    .use(LanguageDetector)
    .use(resourcesToBackend((language: typeof supportedLocales[number], namespace: string) => import(`./locales/${language}/${namespace}.json`)))
    .init({
        ...getOptions(),
        lng: undefined, // let detect the language on client side
        detection: {
            order: ['path', 'htmlTag', 'cookie', 'navigator'],
        },
        preload: runsOnServerSide ? supportedLocales : [],
    });

export function useTranslation(lng: typeof supportedLocales[number], ns: string, options: UseTranslationOptions<undefined> | undefined = undefined) {
    const [cookies, setCookie] = useCookies([FALLBACK_LANGUAGE]);
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
        // eslint-disable-next-line react-hooks/rules-of-hooks
        useEffect(() => { 
            if (cookies[FALLBACK_LANGUAGE] === lng) return;
            setCookie(FALLBACK_LANGUAGE, lng, { path: '/' });
        }, [lng, cookies, setCookie]);
    }
    return ret;
}
