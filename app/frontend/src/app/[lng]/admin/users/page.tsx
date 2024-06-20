import AdminUserTable from '@/components/admin/users/Table';
import {createTranslation} from '@/i18n/server';
import {Locales} from '@/i18n/settings';

export default async function Users({params: {lng}}: {params: {lng: Locales}}) {
    const {t} = await createTranslation('common');

    return (
        <div>
            test
            <h2 className="mb-3">{t('users')}</h2>
            <AdminUserTable lng={lng} />
        </div>
    );
}
