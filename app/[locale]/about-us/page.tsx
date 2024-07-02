import { Info } from './components/Info';
import { Areas } from './components/Areas';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { resources } = await initTranslations(locale, [i18nNamespaces.ABOUT_US_PAGE]);

  return (
    <TranslationsProvider
      namespaces={[i18nNamespaces.ABOUT_US_PAGE]}
      locale={locale}
      resources={resources}
    >
      <Info locale={locale} />
      <Areas locale={locale} />
    </TranslationsProvider>
  );
}
