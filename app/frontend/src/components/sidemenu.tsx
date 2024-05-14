'use server';

import { Menu } from 'primereact/menu';
import { MenuItem } from 'primereact/menuitem';
import { Locales } from '@/i18n/settings';

export default async function Sidemenu({ lng }: { lng: Locales }) {
    const items: MenuItem[] = [
        {
            label: 'Dashboard',
            icon: 'pi pi-fw pi-home',
        },
        {
            separator: true,
        },
        {
            label: 'Tickets',
            items: [
                {
                    label: 'Overview',
                    icon: 'pi pi-chart-line',
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
                    label: 'Users',
                    icon: 'pi pi-user',
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
