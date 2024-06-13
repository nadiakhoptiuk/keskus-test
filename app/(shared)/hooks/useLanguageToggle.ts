import { usePathname, useRouter } from 'next/navigation';

import { setCookie, getCookie } from '@/app/(shared)/utils/locale-cookie';
import { i18nConfig } from '@/app/i18n/config';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';
import { RoutesEnum } from '@/app/(shared)/types/enums';
import { useTranslation } from 'react-i18next';

export const useLanguageToggle = () => {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language ?? getCookie();
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = (newLocale: LocaleProps) => {
    setCookie(newLocale);

    if (currentLocale === i18nConfig.defaultLocale && !i18nConfig.prefixDefault) {
      router.push(RoutesEnum.HOME + newLocale.locale + currentPathname);
    } else {
      router.push(currentPathname.replace(`/${currentLocale}`, `/${newLocale.locale}`));
    }

    router.refresh();
  };

  return {
    currentLocale,
    handleChange,
  };
};
