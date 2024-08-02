'use client';

import { FC, useEffect, useState } from 'react';
import { format } from 'date-fns';
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react';
import 'react-day-picker/style.css';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Calendar } from '@/app/[locale]/components/Announcement/components/Calendar';

import { typeToCapitalize } from '@/app/(shared)/utils/availableEventsDates';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { ActivityCommonType, ActivityIrregularType } from '@/app/(shared)/types/common.types';

type Props = {
  locale: LocaleEnum;
  selectedDate: Date;
  setSelectedDate: React.Dispatch<React.SetStateAction<Date>>;
  datesForCalendar: Date[];
  btnTodayLabel: string;
  activities: ActivityCommonType[];
  setFilteredEvents: React.Dispatch<React.SetStateAction<ActivityCommonType[] | null>>;
};

export const DateFilter: FC<Props> = ({
  locale,
  datesForCalendar,
  selectedDate,
  setSelectedDate,
  btnTodayLabel,
  activities,
  setFilteredEvents,
}) => {
  const [irregularEvents, setIrregularEvents] = useState<ActivityIrregularType[] | null>(null);
  const [inputValue, setInputValue] = useState<string>(btnTodayLabel);

  const handleDayPickerSelect = (date: Date, close: () => void) => {
    const today = new Date();

    if (date) {
      setSelectedDate(date);

      if (date.toDateString() === today.toDateString()) {
        setInputValue(btnTodayLabel);
      } else {
        setInputValue(format(date, 'dd.MM.yyyy'));
      }

      close();
    }
  };

  useEffect(() => {
    if (!activities || activities.length === 0) return;

    const allIrregularEvents = activities.filter(({ attributes: { activity_type } }) =>
      activity_type[0].__typename.includes(typeToCapitalize('irregular')),
    ) as ActivityIrregularType[];

    setIrregularEvents(allIrregularEvents);
  }, [activities, setFilteredEvents]);

  useEffect(() => {
    if (!irregularEvents) return;
    const filteredEventsByDate = irregularEvents.filter(
      ({ attributes: { activity_type } }) =>
        new Date(activity_type[0].date).toDateString() === selectedDate.toDateString(),
    ) as ActivityIrregularType[];

    setFilteredEvents(filteredEventsByDate);
  }, [irregularEvents, selectedDate, setFilteredEvents]);

  return (
    <Popover className="xl:after:content-[' '] md:before:content-[' '] relative max-md:mb-15 md:h-max md:before:absolute md:before:left-[-20px] md:before:h-10 md:before:w-[1px] md:before:bg-grey xl:before:hidden xl:after:absolute xl:after:right-[-20px] xl:after:top-0 xl:after:h-10 xl:after:w-[1px] xl:after:bg-grey">
      {({ close }) => (
        <>
          <PopoverButton className="flex h-11 items-center justify-between rounded bg-blue-50 px-6 py-2 text-ui_med_18 max-md:w-full">
            <span className="flex items-end gap-x-3">
              <CustomIcon icon="calendar" className="!size-5 text-black" />
              <span className="leading-[1.0]"> {inputValue}</span>
            </span>
            <CustomIcon icon="arrow-md" className="!size-4 text-blue-600" />
          </PopoverButton>

          <PopoverPanel
            anchor="bottom"
            className="datePicker flex flex-col rounded bg-[#fff] px-4 py-5 shadow-[0_4px_8px_0_rgba(0,0,0,0.25)] max-md:w-[calc(100%-40px)] max-md:!max-w-[440px]"
          >
            <Calendar
              className="relative mx-auto my-0"
              locale={locale}
              btnToday={btnTodayLabel}
              calendarValue={selectedDate}
              onDateChange={date => handleDayPickerSelect(date, close)}
              availableDatesAtCalendar={datesForCalendar}
              btnTodayClassName="right-0 top-0"
            />
          </PopoverPanel>
        </>
      )}
    </Popover>
  );
};
