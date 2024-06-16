import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {
} from 'react';
import AdminUserTableActions from './table/actions';
import { createTranslation } from '@/i18n/server';

export default async function AdminUserTable() {
    const { t } = await createTranslation('common');

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

    return (
        <DataTable value={usersData} dataKey="id" tableStyle={{ minWidth: '50rem' }} stripedRows>
            <Column field="id" header="ID" style={{ width: '20%' }} />
            <Column field="firstName" header={t('firstName')} style={{ width: '20%' }} />
            <Column field="lastName" header={t('lastName')} style={{ width: '20%' }} />
            <Column field="username" header={t('username')} style={{ width: '20%' }} />
            <Column field="email" header={t('email')} style={{ width: '20%' }} />
            <Column field="role" header={t('role')} style={{ width: '20%' }} />
            <Column
                body={AdminUserTableActions}
                style={{ width: '20%' }}
            />
        </DataTable>
    );
}
