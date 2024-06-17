import { LocaleEnum } from '@/app/(shared)/types/enums';

export type LocaleProps = {
  locale: LocaleEnum;
};

export enum i18nNamespaces {
  HOMEPAGE = 'homepage',
  HEADER = 'header',
  FOOTER = 'footer',
  METADATA = 'metadata',
  NOT_FOUND = 'not-found',
}
