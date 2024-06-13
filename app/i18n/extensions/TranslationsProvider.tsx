'use client';

import { I18nextProvider } from 'react-i18next';
import { createInstance, Resource } from 'i18next';

import { initTranslations } from '@/app/i18n/extensions/initTranslations';

import { WithChildren } from '@/app/(shared)/types/common.types';

type Props = WithChildren & {
  locale: string;
  namespaces: string[];
  resources: Resource;
};

export const TranslationsProvider = ({ children, locale, namespaces, resources }: Props) => {
  const i18n = createInstance();

  initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
