import { LocaleEnum } from '@/app/(shared)/types/enums';

export type LocaleProps = {
  locale: LocaleEnum;
};

export enum i18nNamespaces {
  ABOUT_US_PAGE = 'about-us',
  CONTACTS = 'contacts',
  FOOTER = 'footer',
  GALLERY = 'gallery',
  HEADER = 'header',
  HOMEPAGE = 'homepage',
  METADATA = 'metadata',
  NEWS = 'news',
  NOT_FOUND = 'not-found',
  SERVICES = 'services',
}
