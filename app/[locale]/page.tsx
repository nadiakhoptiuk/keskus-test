import { Button } from '@/app/(shared)/components/ui/Button';
import { Section } from '@/app/(shared)/components/ui/Section';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { PageProps } from '@/app/(shared)/types/common.types';

const i18nNamespaces = ['homepage'];

export default async function Page({ params: { locale } }: PageProps) {
  const { t, resources } = await initTranslations(locale, i18nNamespaces);

  return (
    <TranslationsProvider namespaces={i18nNamespaces} locale={locale} resources={resources}>
      <Section className="pb-40 pt-40">
        <div className="container">
          <h1 className="text-center text-4xl font-bold">{t('heroTitle')}</h1>
          <p>{t('heroSubtitle')}</p>
          <p>{t('heroDescription')}</p>

          <Button>{t('heroButton')}</Button>
        </div>
      </Section>
    </TranslationsProvider>
  );
}
