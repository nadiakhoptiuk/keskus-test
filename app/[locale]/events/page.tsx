import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';

import { Events } from './components/Events/Events';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { resources } = await initTranslations(locale, [i18nNamespaces.EVENTS]);

  return (
    <TranslationsProvider
      namespaces={[i18nNamespaces.EVENTS]}
      locale={locale}
      resources={resources}
    >
      <Events />
    </TranslationsProvider>
  );
}
