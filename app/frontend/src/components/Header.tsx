'use client';
import { Avatar } from 'primereact/avatar';
import { Menubar } from 'primereact/menubar';
import Image from 'next/image';
import Link from 'next/link';
import { useRef } from 'react';
import { TieredMenu } from 'primereact/tieredmenu';
import { MenuItem } from 'primereact/menuitem';
import { useTranslation } from '@/i18n/client';
import { Locales } from '@/i18n/settings';

export default function Header({ lng }: { lng: Locales }) {
    const { t } = useTranslation(lng, 'header');
    const menu = useRef(null);
    const items: MenuItem[] = [
        {
            label: t('header:settings'),
            icon: 'pi pi-cog',
        },
        {
            separator: true,
        },
        {
            label: t('header:logout'),
            icon: 'pi pi-sign-out',
            template: (item) => (
                <div className="transition-shadow duration-200 border-none rounded-none hover:bg-gray-200 hover:text-gray-700 dark:hover:text-white/80 dark:hover:bg-gray-800/80 text-gray-700" data-pc-section="content">
                    <a href="#" aria-hidden="true" className="py-3 px-5 select-none flex items-center cursor-pointer no-underline relative overflow-hidden text-gray-700 dark:text-white/80 hover:text-gray-700 dark:hover:text-white/80 hover:bg-gray-200 dark:hover:bg-gray-800/80">
                        <span className={`${item.icon} p-menuitem-icon icon mr-2 text-red-500 `} />
                        <span className="ml-2 p-menuitem-text text-red-500" data-pc-section="label">{item.label}</span>
                    </a>
                </div>
            ),
        },
    ];

    const start = (
        <Link href="/">
            <Image priority alt="logo" width="187" src="/assets/images/colored_logo_title.webp" height="0" className="w-60 h-auto ml-2" />
        </Link>
    );

    const end = (
        <div className="flex align-items-center gap-2 mr-2">
            <TieredMenu model={items} popup ref={menu} breakpoint="767px" />
            <Avatar icon="pi pi-user" size="large" shape="circle" onClick={(e) => (menu.current! as TieredMenu)?.toggle(e)} />
        </div>
    );

    return (
        <header>
            <Menubar
                pt={{
                    root: {
                        className: 'rounded-none',
                    },
                }}
                start={start}
                end={end}
            />
        </header>
    );
}
