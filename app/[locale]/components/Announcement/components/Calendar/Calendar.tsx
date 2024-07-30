'use client';

import { FC } from 'react';
import ReactCalendar from 'react-calendar';
import { classnames } from '@/app/(shared)/utils/classnames';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { Spinner } from '@/app/(shared)/components/ui/Spinner/Spinner';

import { getMonthWithYear } from '@/app/(shared)/utils/date';
import { useClient } from '@/app/(shared)/hooks/useClient';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { Value, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  locale: LocaleEnum;
  btnToday: string;
  calendarValue: Value;
  onDateChange: (value: Value) => void;
};

export const Calendar: FC<Props> = ({
  locale,
  btnToday,
  className,
  calendarValue,
  onDateChange,
}) => {
  const { isBrowser } = useClient();

  if (!isBrowser)
    return (
      <div
        className={classnames(
          'my-10 grid gap-y-5 max-md:min-h-[334px] md:my-0 md:min-h-[352px] md:gap-y-6',
          className,
        )}
      >
        <Spinner
          className="h-[286px] w-[390px] md:w-[336px] xl:h-[390px] xl:w-[442px]"
          iconClassName="h-10 w-10"
        />
      </div>
    );

  return (
    <div className={classnames('my-10 grid gap-y-5 md:my-0 md:gap-y-6', className)}>
      <div className="h-max md:flex md:items-center md:justify-between">
        <Typography as="h3" className="font-fixel !text-ui_bold_20 first-letter:capitalize">
          {getMonthWithYear(locale)}
        </Typography>

        <Button
          variant="outline"
          className="min-w-[127px] bg-blue-50 text-ui_med_16 max-md:hidden"
          onClick={() => {
            onDateChange(new Date());
          }}
        >
          {btnToday}
        </Button>
      </div>

      <ReactCalendar
        value={calendarValue}
        onChange={value => onDateChange(value as Value)}
        calendarType="iso8601"
        defaultView="month"
        locale={locale}
        showNavigation={false}
        view="month"
      />
    </div>
  );
};
