import { Metadata } from 'next';

import { fetchMetaData } from '@/requests/fetchMetaData';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { transformMetaFacebook, transformMetaTwitter } from './transformMetaSocials';

import { LocaleEnum, PageNameVariableEnum, RoutesEnum } from '../types/enums';
import { i18nNamespaces } from '../types/i18n.types';

type ArgumentsType = {
  locale: LocaleEnum;
  pageName: PageNameVariableEnum;
  route: RoutesEnum | string;
};

export const generatePageMetaData = async ({ locale, pageName, route }: ArgumentsType) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const metaData = await fetchMetaData(locale, pageName);

  const { t } = await initTranslations(locale, [i18nNamespaces.METADATA]);
  const defaultMeta: Metadata = t('meta', { returnObjects: true });

  if (!metaData) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      alternates: {
        canonical: locale === LocaleEnum.UK ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`,
      },
      twitter: defaultMeta.twitter,
      openGraph: defaultMeta.openGraph,
    };
  }

  const { metaTitle: title, metaDescription: description, metaImage, keywords } = metaData;

  return {
    title,
    description,
    alternates: {
      canonical: locale === LocaleEnum.UK ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`,
    },
    keywords,
    twitter: transformMetaTwitter(metaImage, title, description),
    openGraph: transformMetaFacebook(metaImage, title, description, baseUrl, locale),
  };
};
