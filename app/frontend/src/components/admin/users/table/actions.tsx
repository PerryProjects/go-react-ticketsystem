'use client';

import { Button } from 'primereact/button';
import { User } from '@/types/user';

export default function AdminUserTableActions(rowData: User) {
    const editUser = (rowData: User) => {
        // Logik zum Bearbeiten eines Benutzers
        console.log('Bearbeiten', rowData);
    };

    const deleteUser = (rowData: User) => {
        // Logik zum Löschen eines Benutzers
        console.log('Löschen', rowData);
    };

    return (
        <div className="flex gap-1">
            <Button icon="pi pi-pencil" size="small" onClick={() => editUser(rowData)} />
            <Button icon="pi pi-trash" severity="danger" size="small" onClick={() => deleteUser(rowData)} />
        </div>
    );
}
