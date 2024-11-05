import { Metadata } from 'next';

import { fetchMetaData } from '@/requests/fetchMetaData';
import { fetchSinglePageMetaData } from '@/requests/fetchSinglePageMetaData';
import { initTranslations } from '@/app/i18n/extensions/initTranslations';
import { generateAlternate, transformMetaFacebook, transformMetaTwitter } from './transformMeta';

import {
  LocaleEnum,
  SinglePageNameVariableEnum,
  RoutesEnum,
  PageNameVariableEnum,
} from '../types/enums';
import { i18nNamespaces } from '../types/i18n.types';
import { ChapterNameArgumentType, SlugArgumentType } from '../types/common.types';

type ArgumentsType = {
  locale: LocaleEnum;
  pageName: PageNameVariableEnum;
  route: RoutesEnum;
};

type ArgumentsSinglePageType = {
  locale: LocaleEnum;
  pageName: SinglePageNameVariableEnum;
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
      alternates: generateAlternate({ locale, baseUrl, route }),
      twitter: defaultMeta.twitter,
      openGraph: defaultMeta.openGraph,
    };
  }

  const { metaTitle: title, metaDescription: description, metaImage, keywords } = metaData;

  return {
    title,
    description,
    alternates: generateAlternate({ locale, baseUrl, route }),
    keywords,
    twitter: transformMetaTwitter({ data: metaImage, title, description, isSinglePage: false }),
    openGraph: transformMetaFacebook({
      data: metaImage,
      title,
      description,
      baseUrl,
      locale,
      route,
      isSinglePage: false,
    }),
  };
};

export const generateSinglePageMetaData = async ({
  locale,
  pageName,
  route,
  chapterName,
  slug,
}: ArgumentsSinglePageType & ChapterNameArgumentType & SlugArgumentType) => {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL as string;
  const metaData = await fetchSinglePageMetaData({ locale, pageName, chapterName, slug });

  const { t } = await initTranslations(locale, [i18nNamespaces.METADATA]);
  const defaultMeta: Metadata = t('meta', { returnObjects: true });

  if (!metaData) {
    return {
      title: defaultMeta.title,
      description: defaultMeta.description,
      alternates: generateAlternate({ locale, baseUrl, route }),
      twitter: defaultMeta.twitter,
      openGraph: defaultMeta.openGraph,
    };
  }

  const { metaTitle: title, metaDescription: description, metaImage, keywords } = metaData;

  return {
    title,
    description,
    alternates: generateAlternate({ locale, baseUrl, route }),
    keywords,
    twitter: transformMetaTwitter({ data: metaImage, title, description, isSinglePage: true }),
    openGraph: transformMetaFacebook({
      data: metaImage,
      title,
      description,
      baseUrl,
      locale,
      route,
      isSinglePage: true,
    }),
  };
};
