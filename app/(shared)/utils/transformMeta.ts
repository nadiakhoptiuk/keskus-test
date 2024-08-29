import { MetaImageType } from '../types/common.types';
import { LocaleEnum, RoutesEnum } from '../types/enums';
import { languages } from './constants';

export const transformMetaTwitter = (data: MetaImageType, title: string, description: string) => {
  const { url, width, height } = data;

  return {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: [
      {
        url: url,
        width: width,
        height: height,
        alt: `${title}. ${description}`,
      },
    ],
  };
};

export const transformMetaFacebook = (
  data: MetaImageType,
  title: string,
  description: string,
  baseUrl: string,
  locale: LocaleEnum,
) => {
  const { url, width, height } = data;

  return {
    title: title,
    description: description,
    siteName: title,
    type: 'website',
    card: 'summary_large_image',
    url: new URL(baseUrl),
    locale: locale,
    images: [
      {
        url: url,
        width: width,
        height: height,
        alt: `${title}. ${description}`,
      },
    ],
  };
};

export const generateAlternate = ({
  locale,
  baseUrl,
  route,
}: {
  locale: LocaleEnum;
  baseUrl: string;
  route: RoutesEnum | string;
}) => {
  return {
    canonical: locale === LocaleEnum.UK ? `${baseUrl}${route}` : `${baseUrl}/${locale}${route}`,
    languages: transformAlternates(languages, route),
  };
};

const transformAlternates = (languages: Record<LocaleEnum, string>, route: string) => {
  return Object.fromEntries(
    Object.entries(languages).map(([lang, url]) => {
      return lang === LocaleEnum.UK ? [lang, route] : [lang, `${url}${route}`];
    }),
  );
};
