import {dir} from 'i18next';
import {supportedLocales} from '@/i18n/settings';

export async function generateStaticParams() {
    return supportedLocales.map((lng) => ({ lng }));
}

export default function RootLayout({
    children,
    params: {
        lng,
    },
}: {
    children: React.ReactNode
    params: {
        lng: string
    }
}) {
    return (
        <html lang={lng} dir={dir(lng)}>
            <body>
                <main>{children}</main>
            </body>
        </html>
    );
}
