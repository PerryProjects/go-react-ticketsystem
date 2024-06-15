'use client';

import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import {
    usePathname, 
    useRouter, 
} from 'next/navigation';
import { useTranslation } from '@/i18n/client';
import { Locales } from '@/i18n/settings';

export default function Sidemenu({
    lng,
}: {
    lng: Locales
}) {
    const { t } = useTranslation(lng, 'common');
    const router = useRouter();
    const currentPath = usePathname();

    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
            command: () => {
                if (currentPath !== `/${lng}`) {
                    router.push(`/${lng}`);
                }
            },
        },
        {
            separator: true,
        },
        {
            label: 'Tickets',
            items: [
                {
                    label: t('overview'),
                    icon: 'pi pi-chart-line',
                    command: () => {
                        if (currentPath !== `/${lng}/tickets/overview`) {
                            router.push(`/${lng}/tickets/overview`);
                        }
                    },
                },
            ],
        },
        {
            separator: true,
        },
        {
            label: 'Administration',
            items: [
                {
                    label: t('users'),
                    icon: 'pi pi-user',
                    command: () => {
                        if (currentPath !== `/${lng}/admin/users`) {
                            router.push(`/${lng}/admin/users`);
                        }
                    },
                },
            ],
        },
    ];

    return (
        <div className="flex justify-content-center h-full">
            <Menu
                pt={{
                    root: {
                        className: 'rounded-none border-t-0 w-[300px]',
                    },
                }}
                model={items}
            />
        </div>
    );
}
