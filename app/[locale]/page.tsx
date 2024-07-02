import { Announcement } from '@/app/[locale]/components/Announcement';
import { Hero } from '@/app/[locale]/components/Hero';
import { News } from '@/app/[locale]/components/News';
import { Scroller } from '@/app/[locale]/components/Scroller';
import { Support } from '@/app/[locale]/components/Support';

import { PageProps } from '@/app/(shared)/types/common.types';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';

import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export default async function Page({ params: { locale } }: PageProps) {
  const { resources } = await initTranslations(locale, [i18nNamespaces.HOMEPAGE]);


  return (
    <TranslationsProvider
      namespaces={[i18nNamespaces.HOMEPAGE]}
      locale={locale}
      resources={resources}
    >
      <Hero locale={locale} />
      <Scroller />
      <Support locale={locale} />
      <Announcement locale={locale} />
      <News locale={locale} />
    </TranslationsProvider>
  );
}
