'use client';

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Locales } from '@/i18n/settings';
import { useTranslation } from '@/i18n/client';
import { User } from '@/types/user';

export default function AdminUserTable({ lng }: { lng: Locales }) {
    const { t } = useTranslation(lng, 'common');

    const editUser = (rowData: User) => {
        // Logik zum Bearbeiten eines Benutzers
        console.log('Bearbeiten', rowData);
    };

    const deleteUser = (rowData: User) => {
        // Logik zum Löschen eines Benutzers
        console.log('Löschen', rowData);
    };

    const usersData = [
        {
            id: 1,
            firstName: 'John',
            lastName: 'Doe',
            username: 'johndoe',
            email: 'john.doe@example.com',
            role: 'Admin',
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            username: 'janedoe',
            email: 'jane.doe@example.com',
            role: 'User',
        },
        {
            id: 3,
            firstName: 'Max',
            lastName: 'Mustermann',
            username: 'maxmustermann',
            email: 'max@mustermann.de',
            role: 'User',
        },
        {
            id: 4,
            firstName: 'Erika',
            lastName: 'Mustermann',
            username: 'erikamustermann',
            email: 'mustermann@50rem.de',
            role: 'User',
        },
        {
            id: 5,
            firstName: 'Hans',
            lastName: 'Müller',
            username: 'hansmueller',
            email: 'da@de.de',
            role: 'User',
        },
    ];

    const actionColumnHeader = () => {
        return (
            <div className="flex justify-end">
                <Button label={t('add-user')} size="small" icon="pi pi-plus" className="p-button-raised p-button-rounded" />
            </div>
        );
    };

    const actionColumnBody = (rowData: User) => {
        return (
            <div className="flex justify-end gap-1">
                <Button icon="pi pi-pencil" size="small" onClick={() => editUser(rowData)} />
                <Button icon="pi pi-trash" severity="danger" size="small" onClick={() => deleteUser(rowData)} />
            </div>
        );
    };

    return (
        <DataTable value={usersData} dataKey="id" stripedRows>
            <Column field="id" header="ID" />
            <Column field="firstName" header={t('firstName')} />
            <Column field="lastName" header={t('lastName')} />
            <Column field="username" header={t('username')} />
            <Column field="email" header={t('email')} />
            <Column field="role" header={t('role')} />
            <Column
                pt={{
                    headerContent: {
                        className: 'flex justify-end',
                    },
                }}
                header={actionColumnHeader}
                body={(rowData) => actionColumnBody(rowData)}
            />
        </DataTable>
    );
}
