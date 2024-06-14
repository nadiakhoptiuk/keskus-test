'use client';

import { classnames } from '@/app/(shared)/utils/classnames';
import { FC } from 'react';
import ReactCalendar from 'react-calendar';

import { Typography } from '@/app/(shared)/components/ui/Typography';
import { getMonthWithYear } from '@/app/(shared)/utils/date';
import { useClient } from '@/app/(shared)/hooks/useClient';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  locale: LocaleEnum;
};

export const Calendar: FC<Props> = ({ locale, className }) => {
  const { isBrowser } = useClient();

  if (!isBrowser) return null;

  return (
    <div className={classnames('my-10 grid gap-y-5 md:my-0 md:gap-y-6', className)}>
      <Typography as="h3" className="first-letter:capitalize">
        {getMonthWithYear(locale)}
      </Typography>

      <ReactCalendar
        value={new Date()}
        calendarType="iso8601"
        defaultView="month"
        locale={locale}
        showNavigation={false}
        view="month"
      />
    </div>
  );
};
