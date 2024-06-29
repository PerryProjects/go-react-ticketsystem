'use client';

import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {
    Dispatch,
    ReactElement,
    SetStateAction,
    useState,
} from 'react';
import {Locales} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';
import {User} from '@/types/user';

export function AdminUserDialog({
    lng,
    isVisible,
    user,
    setDialogVisible,
}: {lng: Locales, isVisible: boolean, user: User, setDialogVisible: Dispatch<SetStateAction<boolean>>}) {
    const {t} = useTranslation(lng, 'common');

    const [dialogContent, setDialogContent] = useState<ReactElement | null>(null);

    const footerContent = (
        <div className="grid grid-cols-2 gap-2">
            <Button label="No" icon="pi pi-times" size="small" onClick={() => setDialogVisible(false)} severity="danger" />
            <Button label="Yes" icon="pi pi-check" size="small" onClick={() => setDialogVisible(false)} autoFocus />
        </div>
    );

    setDialogContent(
        <div>
            <h3>{t('edit_user')}</h3>
            <p>{t('firstName')}: {user.firstName}</p>
            <p>{t('lastName')}: {user.lastName}</p>
            <p>{t('username')}: {user.username}</p>
            <p>{t('email')}: {user.email}</p>
            <p>{t('role')}: {user.role}</p>
        </div>
    );

    return (
        <Dialog header="User Details" draggable={false} visible={isVisible} style={{width: '50vw'}} onHide={() => setDialogVisible(false)} footer={footerContent}>
            {dialogContent}
        </Dialog>
    );
};
