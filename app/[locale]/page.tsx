import { Button } from '@/app/(shared)/components/ui/Button';
import { Section } from '@/app/(shared)/components/ui/Section';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { PageProps } from '@/app/(shared)/types/common.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { t } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);

  return (
    <Section className="pb-40 pt-40">
      <div className="container">
        <h1 className="text-center text-4xl font-bold">{t('heroTitle')}</h1>
        <p>{t('heroSubtitle')}</p>
        <p>{t('heroDescription')}</p>

        <Button>{t('heroButton')}</Button>
      </div>
    </Section>
  );
}
