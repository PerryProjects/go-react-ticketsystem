import 'primeicons/primeicons.css';
import '@/styles/globals.css';

// Packages
import {dir} from 'i18next';
import {
    PrimeReactProvider,
} from 'primereact/api';
import {Metadata} from 'next';
import {Roboto} from 'next/font/google';
import primeReactSettings from '../../ts/primeReactSettings';
import {
    Locales,
    supportedLocales,
} from '@/i18n/settings';
import Header from '@/components/Header';
import Sidemenu from '@/components/Sidemenu';

export async function generateStaticParams() {
    return supportedLocales.map((lng) => ({lng}));
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

const roboto = Roboto({
    weight: ['100', '300', '400', '500', '700', '900'],
    style: 'normal',
    variable: '--font-roboto',
    subsets: ['latin'],
    display: 'swap',
});

export default async function RootLayout({
    children,
    params: {
        lng,
    },
}: {
    children: React.ReactNode
    params: {
        lng: Locales
    }
}) {
    return (
        <html lang={lng} dir={dir(lng)} className={roboto.variable}>
            <PrimeReactProvider value={primeReactSettings}>
                <body className="h-dvh flex flex-col w-screen">
                    <Header lng={lng} />
                    <main className="flex h-90 flex-grow">
                        <div className="flex flex-col md:flex-row flex-grow">
                            <div className="md:relative z-10  w-[300px]">
                                <Sidemenu lng={lng} />
                            </div>
                            <section className="flex-1 overflow-y-auto p-3 bg-white dark:bg-gray-900 text-gray-700 dark:text-white/80 border-l border-t border-gray-300 dark:border-white/80">
                                {children}
                            </section>
                        </div>
                    </main>
                </body>
            </PrimeReactProvider>
        </html>
    );
}
