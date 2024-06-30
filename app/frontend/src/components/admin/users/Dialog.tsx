'use client';

import {Button} from 'primereact/button';
import {Dialog} from 'primereact/dialog';
import {
    Dispatch,
    SetStateAction,
    useRef,
} from 'react';
import {AdminUserDialogForm} from './dialog/Form';
import {Locales} from '@/i18n/settings';
import {useTranslation} from '@/i18n/client';
import {User} from '@/types/user';

export function AdminUserDialog({
    lng,
    isVisible,
    user,
    setDialogVisible,
}: {
    lng: Locales
    isVisible: boolean
    user: User
    setDialogVisible: Dispatch<SetStateAction<boolean>>
}) {
    const {t} = useTranslation(lng, ['common', 'validation']);
    const formRef = useRef<HTMLFormElement>(null);

    const isEdit = user.id !== undefined;

    const handleSave = () => {
        if (formRef.current) {
            formRef.current.submit();
        }
    };

    const handleSubmit = (data: User) => {
        // Add logic to handle form submission
        console.log('Form submitted:', data);
        setDialogVisible(false);
    };

    const footerContent = (
        <div className="grid grid-cols-2 gap-2">
            <Button label={t('cancel')} icon="pi pi-times" size="small" onClick={() => setDialogVisible(false)} severity="danger" />
            <Button label={t('save')} icon="pi pi-check" size="small" onClick={handleSave} autoFocus />
        </div>
    );

    return (
        <Dialog header={isEdit ? t('edit_user_dialog_header', {fullName: `${user.firstName} ${user.lastName}`}) : t('add_user')} draggable={false} visible={isVisible} style={{width: '50vw'}} onHide={() => setDialogVisible(false)} footer={footerContent}>
            <AdminUserDialogForm ref={formRef} user={user} onSubmit={handleSubmit} t={t} />
        </Dialog>
    );
}
