'use client';

import { FC, useEffect, useState } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { FilterButtons } from '../FilterButtons';
import { EventsList } from '../EventsList';
import { DateFilter } from '../DateFilter';

import { typeToCapitalize } from '@/app/(shared)/utils/availableEventsDates';

import {
  ActivityCommonType,
  ActivityType,
  EventsPageGeneralData,
} from '@/app/(shared)/types/common.types';
import { LocaleEnum } from '@/app/(shared)/types/enums';

type Props = {
  locale: LocaleEnum;
  generalInfo: EventsPageGeneralData;
  activities: ActivityCommonType[];
  datesForCalendar: Date[];
  btnTodayLabel: string;
};

export const Events: FC<Props> = ({
  locale,
  generalInfo: { page_title, labels },
  activities,
  datesForCalendar,
  btnTodayLabel,
}) => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [filteredEvents, setFilteredEvents] = useState<ActivityCommonType[] | null>(null);
  const [eventsType, setEventsType] = useState<ActivityType>('regular');

  useEffect(() => {
    if (!activities || activities.length === 0) return;

    const filteredEvents = activities.filter(({ attributes: { activity_type } }) =>
      activity_type[0].__typename.includes(typeToCapitalize(eventsType)),
    );

    setFilteredEvents(filteredEvents);
  }, [activities, eventsType]);

  return (
    <Section className="py-10 md:py-15 xl:pt-[84px]">
      <Container>
        {labels && filteredEvents && (
          <>
            <div className="xl:mb-15 xl:flex xl:h-max xl:justify-between">
              <Typography as="h1" className="mb-10 text-left text-black md:mb-15 xl:mb-0">
                {page_title}
              </Typography>

              <div className="md:mb-15 md:flex md:gap-x-10 xl:mb-0 xl:flex-row-reverse xl:items-center">
                <FilterButtons
                  buttonsData={labels}
                  setEventsType={setEventsType}
                  eventsType={eventsType}
                />

                {eventsType === 'irregular' && (
                  <DateFilter
                    locale={locale}
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                    datesForCalendar={datesForCalendar}
                    btnTodayLabel={btnTodayLabel}
                    activities={activities}
                    setFilteredEvents={setFilteredEvents}
                  />
                )}
              </div>
            </div>

            <EventsList buttonsData={labels} events={filteredEvents} />
          </>
        )}
      </Container>
    </Section>
  );
};
