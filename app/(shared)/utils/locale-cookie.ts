import { setCookie as set, getCookie as get } from 'cookies-next';

import { KEY } from '@/app/(shared)/utils/constants';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export const getCookie = () => {
  return get(KEY.NEXT_LOCALE);
};

export const setCookie = (newLocale: LocaleProps) => {
  const days = 30;
  const date = new Date();
  date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);

  const expires = date.toUTCString();
  const expiresDate = new Date(expires);

  set(KEY.NEXT_LOCALE, newLocale.locale, {
    expires: expiresDate,
    path: '/',
  });
};
