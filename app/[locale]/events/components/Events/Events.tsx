'use client';
import { FC, useEffect, useState } from 'react';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { FilterButtons } from '../FilterButtons';
import { EventsList } from '../EventsList';

import {
  ActivityCommonType,
  ActivityType,
  EventsPageDataType,
} from '@/app/(shared)/types/common.types';

export const Events: FC<EventsPageDataType> = ({
  generalInfo: { page_title, labels },
  activities,
}) => {
  const [filteredEvents, setFilteredEvents] = useState<ActivityCommonType[] | null>(null);
  const [eventsType, setEventsType] = useState<ActivityType>('regular');

  useEffect(() => {
    if (!activities || activities.length === 0) return;
    const filteredEvents = activities.filter(({ attributes: { type } }) => type === eventsType);

    setFilteredEvents(filteredEvents);
  }, [activities, eventsType]);

  return (
    <Section className="py-10 md:py-15 xl:pt-[84px]">
      <Container>
        {labels && filteredEvents && (
          <>
            <div className="xl:mb-15 xl:flex xl:items-center xl:justify-between">
              <Typography as="h1" className="mb-10 text-left text-black md:mb-15 xl:mb-0">
                {page_title}
              </Typography>

              {/* {eventsType === 'irregular' && <DateFilter />} */}

              <FilterButtons
                buttonsData={labels}
                setEventsType={setEventsType}
                eventsType={eventsType}
              />
            </div>

            <EventsList buttonsData={labels} events={filteredEvents} />
          </>
        )}
      </Container>
    </Section>
  );
};
