import { createTranslation } from '../../i18n/server';

export default async function Page({ params: { lng } }: { params: { lng: string } }) {
    const { t } = await createTranslation('common');

    const test: string = 1;
    return (
        <div>
            <h1>{lng} {t('hello')}</h1>
        </div>
    );
} 
