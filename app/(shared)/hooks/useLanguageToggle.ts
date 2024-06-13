import { usePathname, useRouter } from 'next/navigation';

import { setCookie, getCookie } from '@/app/(shared)/utils/locale-cookie';
import { i18nConfig } from '@/app/i18n/config';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';
import { LocaleEnum, RoutesEnum } from '@/app/(shared)/types/enums';

export const useLanguageToggle = (locale: LocaleEnum) => {
  const currentLocale = locale ?? getCookie();
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
