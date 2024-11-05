import { MetaImageType, TransformMetaOGPType } from '../types/common.types';
import { LocaleEnum, RoutesEnum } from '../types/enums';
import { languages } from './constants';

type TransformMetaArgs = {
  data: MetaImageType;
  title: string;
  description: string;
};

type SinglePageFlag = {
  isSinglePage: boolean;
};

const transformCanonical = ({ baseUrl, locale, route }: TransformMetaOGPType) => {
  const newRouteWithoutSlash = route.slice(1);

  if (route !== RoutesEnum.HOME) {
    return locale === LocaleEnum.UK
      ? `${baseUrl}${newRouteWithoutSlash}`
      : `${baseUrl}${locale}${route}`;
  }

  return locale === LocaleEnum.UK ? baseUrl : `${baseUrl}${locale}`;
};

const transformAlternates = (languages: Record<LocaleEnum, string>, route: string) => {
  return Object.fromEntries(
    Object.entries(languages).map(([lang, url]) => {
      if (route === RoutesEnum.HOME) {
        return lang === LocaleEnum.UK ? [lang, route] : [lang, url];
      }

      return lang === LocaleEnum.UK ? [lang, route] : [lang, `${url}${route}`];
    }),
  );
};

export const transformOGPImageUrl = (url: string) => {
  const indexOfUploadString = url.indexOf('upload/');

  if (indexOfUploadString === -1) return url;

  const firstPartOfString = url.slice(0, indexOfUploadString + 7);
  const secondPartOfString = url.slice(indexOfUploadString + 7);

  return firstPartOfString + 'w_1200,q_auto,f_auto/' + secondPartOfString;
};

const calculatedNewHeight = (width: string, height: string) => {
  return Math.floor((Number(height) / Number(width)) * 1200);
};

export const transformMetaTwitter = ({
  data,
  title,
  description,
  isSinglePage,
}: TransformMetaArgs & SinglePageFlag) => {
  const { url, width, height } = data;

  return {
    title: title,
    description: description,
    card: 'summary_large_image',
    images: [
      {
        url: isSinglePage ? transformOGPImageUrl(url) : url,
        width: isSinglePage ? 1200 : width,
        height: isSinglePage ? calculatedNewHeight(width, height) : height,
        alt: `${title}. ${description}`,
      },
    ],
  };
};

export const transformMetaFacebook = ({
  data,
  title,
  description,
  baseUrl,
  locale,
  route,
  isSinglePage,
}: TransformMetaOGPType & TransformMetaArgs & SinglePageFlag) => {
  const { url, width, height } = data;

  return {
    title: title,
    description: description,
    siteName: title,
    type: 'website',
    card: 'summary_large_image',
    url: transformCanonical({ baseUrl, locale, route }),
    locale: locale,
    images: [
      {
        url: isSinglePage ? transformOGPImageUrl(url) : url,
        width: isSinglePage ? 1200 : width,
        height: isSinglePage ? calculatedNewHeight(width, height) : height,
        alt: `${title}. ${description}`,
      },
    ],
  };
};

export const generateAlternate = ({ locale, baseUrl, route }: TransformMetaOGPType) => {
  return {
    canonical: transformCanonical({ baseUrl, locale, route }),
    languages: transformAlternates(languages, route),
  };
};
