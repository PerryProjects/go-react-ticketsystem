import '@/styles/globals.scss';
import 'primeflex/primeflex.scss';
import 'primereact/resources/themes/lara-light-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

// Packages
import { dir } from 'i18next';
import {
    APIOptions,
    PrimeReactProvider,
} from 'primereact/api';
import { Metadata } from 'next';
import { supportedLocales } from '@/i18n/settings';
import Header from '@/components/header';

export async function generateStaticParams() {
    return supportedLocales.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
    title: 'Website Title',
    description: 'Website description',
    icons: {
        icon: [
            {
                media: '(prefers-color-scheme: light)',
                url: '/assets/images/icon-light.webp',
                href: '/assets/images/icon-light.webp',
            },
            {
                media: '(prefers-color-scheme: dark)',
                url: '/assets/images/icon-dark.webp',
                href: '/assets/images/icon-dark.webp',
            },
        ],
    },
};

export default async function RootLayout({
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
    const primeReactSettings: Partial<APIOptions> = {
        ripple: true,
    };

    return (
        <html lang={lng} dir={dir(lng)}>
            <PrimeReactProvider value={primeReactSettings}>
                <body>
                    <Header />
                    <main>{children}</main>
                </body>
            </PrimeReactProvider>
        </html>
    );
}
