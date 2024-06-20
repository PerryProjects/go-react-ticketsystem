import {
    NextRequest, 
    NextResponse,
} from 'next/server';
import acceptLanguage from 'accept-language';
import { NextURL } from 'next/dist/server/web/next-url';
import {
    FALLBACK_LANGUAGE, 
    LANGUAGE_COOKIE, 
    Locales, 
    supportedLocales,
} from '@/i18n/settings';

acceptLanguage.languages([...supportedLocales]);

export const config = {
    // matcher: '/:lng*'
    matcher: ['/((?!api|_next/static|_next/image|assets|favicon.ico|sw.js).*)'],
};
   
function languageUrlParam(url: NextURL): Locales | false {
    const match = url.pathname.match(/^\/([^/]+)/); // Match the first segment after '/'
    if (match) {
        const [,lng] = match; // Extract the language from the match
        if (supportedLocales.includes(lng as Locales)) {
            return lng as Locales;
        }
    }
    return false;
}
 
export function middleware(req: NextRequest) {
    let lng;
    const languageParam = languageUrlParam(req.nextUrl);
    if (languageParam !== false) lng = languageParam;
    if ((lng === undefined) && req.cookies.has(LANGUAGE_COOKIE)) lng = acceptLanguage.get(req.cookies.get(LANGUAGE_COOKIE)!.value);
    if (lng === undefined && req.headers.has('Accept-Language')) lng = acceptLanguage.get(req.headers.get('Accept-Language'));
    if (lng === undefined) lng = FALLBACK_LANGUAGE;
    
    // Redirect if lng in path is not supported 
    if (
        !supportedLocales.some((loc) => req.nextUrl.pathname.startsWith(`/${loc}`))
        && !req.nextUrl.pathname.startsWith('/_next')
    ) {
        return NextResponse.redirect(new URL(`/${lng}${req.nextUrl.pathname}`, req.url));
    }
    
    if (req.headers.has('referer')) {
        const refererUrl = new URL(req.headers.get('referer')!);
        const lngInReferer = supportedLocales.find((l) => refererUrl.pathname.startsWith(`/${l}`));
        const response = NextResponse.next();
        if (lngInReferer) response.cookies.set(LANGUAGE_COOKIE, lngInReferer);
        return response;
    }
    
    const response = NextResponse.next();

    response.cookies.set(LANGUAGE_COOKIE, (<string>lng));

    return response;
}
