'use client';

import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {Button} from 'primereact/button';
import {
    useState,
} from 'react';
import {AdminUserDialog} from '@/components/admin/users/Dialog';
import {Locales} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';
import {User} from '@/types/user';

export default function AdminUserTable({lng}: {lng: Locales}) {
    const {t} = useTranslation(lng, 'common');

    const [dialogVisible, setDialogVisible] = useState<boolean>(false);
    const [selectedUser, setSelectedUser] = useState<User | null>(null);

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
            role: 'admin',
        },
        {
            id: 2,
            firstName: 'Jane',
            lastName: 'Doe',
            username: 'janedoe',
            email: 'jane.doe@example.com',
            role: 'user',
        },
        {
            id: 3,
            firstName: 'Max',
            lastName: 'Mustermann',
            username: 'maxmustermann',
            email: 'max@mustermann.de',
            role: 'user',
        },
        {
            id: 4,
            firstName: 'Erika',
            lastName: 'Mustermann',
            username: 'erikamustermann',
            email: 'mustermann@50rem.de',
            role: 'user',
        },
        {
            id: 5,
            firstName: 'Hans',
            lastName: 'Müller',
            username: 'hansmueller',
            email: 'da@de.de',
            role: 'user',
        },
    ];

    const openUserDialog = (user: User) => {
        setSelectedUser(user);
        setDialogVisible(true);
    };

    const actionColumnHeader = () => {
        return (
            <div className="flex justify-end">
                <Button label={t('add_user')} size="small" icon="pi pi-plus" className="p-button-raised p-button-rounded" onClick={() => openUserDialog({} as User)} />
            </div>
        );
    };

    const actionColumnBody = (rowData: User) => {
        return (
            <div className="flex justify-end gap-1">
                <Button icon="pi pi-pencil" size="small" onClick={() => openUserDialog(rowData)} />
                <Button icon="pi pi-trash" severity="danger" size="small" onClick={() => deleteUser(rowData)} />
            </div>
        );
    };

    const roleColumnBody = (rowData: User) => {
        return (
            <span>{t(rowData.role)}</span>
        );
    };

    return (
        <div>
            <DataTable value={usersData} dataKey="id" stripedRows>
                <Column field="id" header="ID" />
                <Column field="firstName" header={t('firstName')} />
                <Column field="lastName" header={t('lastName')} />
                <Column field="username" header={t('username')} />
                <Column field="email" header={t('email')} />
                <Column field="role" header={t('role')} body={roleColumnBody} />
                <Column
                    pt={{
                        headerContent: {
                            className: 'flex justify-end',
                        },
                    }}
                    header={actionColumnHeader}
                    body={actionColumnBody}
                />
            </DataTable>

            {selectedUser && (
                <AdminUserDialog lng={lng} isVisible={dialogVisible} user={selectedUser} setDialogVisible={setDialogVisible} />
            )}
        </div>
    );
}
