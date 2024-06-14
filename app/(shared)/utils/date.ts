import { LocaleEnum } from '@/app/(shared)/types/enums';
import { format } from 'date-fns';
import { enUS, uk, et } from 'date-fns/locale';

const getCurrentLocale = (locale: LocaleEnum) => {
  switch (locale) {
    case LocaleEnum.EN:
      return enUS;
    case LocaleEnum.UK:
      return uk;
    case LocaleEnum.ET:
      return et;
    default:
      return uk;
  }
};

export const getMonthWithYear = (locale: LocaleEnum): string => {
  return format(new Date(), 'LLLL yyyy', {
    locale: getCurrentLocale(locale),
  });
};
