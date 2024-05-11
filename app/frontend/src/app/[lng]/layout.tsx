import 'primeicons/primeicons.css';
import '@/styles/globals.scss';

// Packages
import { dir } from 'i18next';
import {
    APIOptions,
    PrimeReactProvider,
} from 'primereact/api';
import { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import Tailwind from 'primereact/passthrough/tailwind';
import {
    Locales,
    supportedLocales,
} from '@/i18n/settings';
import Header from '@/components/header';
import Sidemenu from '@/components/sidemenu';

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
    const primeReactSettings: Partial<APIOptions> = {
        ripple: true,
        unstyled: true,
        pt: Tailwind,
        ptOptions: {
            mergeSections: true,
            mergeProps: true,
        },
    };

    return (
        <html lang={lng} dir={dir(lng)} className={roboto.variable}>
            <PrimeReactProvider value={primeReactSettings}>
                <body className='h-screen flex flex-col w-screen overflow-hidden'>
                    <Header lng={lng} />
                    <main className='flex h-90 flex-grow'>
                        <div className="flex flex-col md:flex-row flex-grow">
                            <div className='md:relative z-10  w-[300px]'>
                                <Sidemenu lng={lng} />
                            </div>
                            <section className='flex-1 overflow-y-auto'>
                                {children}
                            </section>
                        </div>
                    </main>
                </body>
            </PrimeReactProvider>
        </html>
    );
}
