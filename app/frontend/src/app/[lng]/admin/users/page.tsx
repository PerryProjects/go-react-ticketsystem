import AdminUserTable from '@/components/admin/users/table';
import { createTranslation } from '@/i18n/server';

export default async function Users() {
    const { t } = await createTranslation('common');

    return (
        <div>
            <h2 className="m-2">{t('users')}</h2>
            <AdminUserTable />
        </div>
    );
}