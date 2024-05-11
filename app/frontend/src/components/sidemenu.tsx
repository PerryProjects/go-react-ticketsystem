'use server';

import { Menu } from 'primereact/menu';
import { Locales } from '@/i18n/settings';

export default async function Sidemenu({ lng }: { lng: Locales }) {
    const items = [
        {
            label: 'Documents',
            items: [
                {
                    label: 'New',
                    icon: 'pi pi-plus'
                },
                {
                    label: 'Search',
                    icon: 'pi pi-search'
                }
            ]
        },
        {
            label: 'Profile',
            items: [
                {
                    label: 'Settings',
                    icon: 'pi pi-cog'
                },
                {
                    label: 'Logout',
                    icon: 'pi pi-sign-out'
                }
            ]
        }
    ];

    return (
        <div className="card flex justify-content-center h-full">
            <Menu pt={{
                root: {
                    className: 'rounded-none border-t-0'
                }
            }} model={items} />
        </div>
    )
}
