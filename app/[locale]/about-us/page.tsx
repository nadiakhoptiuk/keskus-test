import { Metadata } from 'next';

import { Info } from './components/Info';
import { Areas } from './components/Areas';
import { Partners } from './components/Partners';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { TranslationsProvider } from '@/app/i18n/extensions/TranslationsProvider';
import { fetchAboutPage } from '@/requests/fetchAboutPage';

import { PageProps } from '@/app/(shared)/types/common.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';
import { PageNameVariableEnum, RoutesEnum } from '@/app/(shared)/types/enums';
import { generatePageMetaData } from '@/app/(shared)/utils/generatePageMetaData';

export const generateMetadata = async ({ params: { locale } }: PageProps): Promise<Metadata> => {
  const args = {
    locale,
    pageName: PageNameVariableEnum.ABOUT_US,
    route: RoutesEnum.ABOUT_US,
  };

  return await generatePageMetaData(args);
};

export default async function Page({ params: { locale } }: PageProps) {
  const { resources } = await initTranslations(locale, [i18nNamespaces.ABOUT_US_PAGE]);
  const pageData = await fetchAboutPage(locale);
  if (!pageData) return null;

  const {
    page_title,
    text_description,
    subtitle_areas_of_activity,
    areas_of_activity,
    subtitle_partners,
    partner_logo,
  } = pageData;

  return (
    <TranslationsProvider
      namespaces={[i18nNamespaces.ABOUT_US_PAGE]}
      locale={locale}
      resources={resources}
    >
      <Info title={page_title} text={text_description} />
      <Areas areas={areas_of_activity} title={subtitle_areas_of_activity} />
      <Partners title={subtitle_partners} list={partner_logo} />
    </TranslationsProvider>
  );
}
