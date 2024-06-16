import { createTranslation } from '@/i18n/server';

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await createTranslation('common');

    return (
        <div>
            <h2>Übersicht</h2>
        </div>
    );
} 
