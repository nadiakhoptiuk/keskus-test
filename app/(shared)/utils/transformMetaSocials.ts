import { MetaImageType } from '../types/common.types';
import { LocaleEnum } from '../types/enums';

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
