'use client';

import { FC, useState } from 'react';
import { DayPicker } from 'react-day-picker';
import { format, startOfMonth } from 'date-fns';
import { classnames } from '@/app/(shared)/utils/classnames';
import 'react-day-picker/style.css';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Spinner } from '@/app/(shared)/components/ui/Spinner/Spinner';

import { getCurrentLocale } from '@/app/(shared)/utils/date';
import { useClient } from '@/app/(shared)/hooks/useClient';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  locale: LocaleEnum;
  btnToday: string;
  calendarValue: Date;
  onDateChange: (date: Date) => void;
  availableDatesAtCalendar: Date[];
  btnTodayClassName?: string;
};

export const Calendar: FC<Props> = ({
  locale,
  btnToday,
  className,
  calendarValue,
  onDateChange,
  availableDatesAtCalendar,
  btnTodayClassName: buttonTodayClassName = '',
}) => {
  const { isBrowser } = useClient();
  const [month, setMonth] = useState<Date>(startOfMonth(new Date()));

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
    <div
      className={classnames('relative my-10 grid max-w-max gap-y-5 md:my-0 md:gap-y-6', className)}
    >
      <Button
        variant="outline"
        className={classnames(
          'absolute right-0 top-0 z-[1] bg-blue-50 text-ui_med_16 max-md:min-w-max max-md:px-4 md:min-w-[127px]',
          buttonTodayClassName,
        )}
        onClick={() => {
          onDateChange(new Date());
          setMonth(new Date());
        }}
      >
        {btnToday}
      </Button>

      <DayPicker
        mode="single"
        onSelect={onDateChange}
        selected={calendarValue}
        required={true}
        locale={getCurrentLocale(locale)}
        weekStartsOn={1}
        month={month}
        onMonthChange={setMonth}
        hideNavigation={true}
        captionLayout="dropdown"
        startMonth={new Date()}
        endMonth={new Date(2045, 12)}
        showOutsideDays={true}
        formatters={{
          formatCaption: (date, options) => format(date, 'LLLL yyyy', options),
        }}
        modifiers={{
          available: availableDatesAtCalendar,
        }}
        modifiersClassNames={{
          available: 'day-with-available-event',
        }}
        classNames={{
          today: `text-blue-600 !font-bold`,
          selected: `!bg-blue-600 text-white !rounded-none`,
        }}
      />
    </div>
  );
};
