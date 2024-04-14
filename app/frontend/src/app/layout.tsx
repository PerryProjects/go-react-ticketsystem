import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '@/src/styles/globals.scss';
import { PrimeReactProvider } from 'primereact/api';
import { I18nContext } from 'react-i18next';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
};
 
export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {    
    /* ModuleSettingsAreInvalidError: The settings are invalid of "https://cdn.jsdelivr.net/npm/@inlang/plugin-i18next@latest/dist/index.js" are invalid:

Path "/pathPattern" with value "".app/frontend/public/locales/{languageTag}/common.json"": "Expected union value" */
    return (
        <html>  
            <PrimeReactProvider>
                <body className={inter.className}>
                    {children}
                </body>
            </PrimeReactProvider>
        </html>
    );
}
