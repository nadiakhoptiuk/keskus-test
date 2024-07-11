'use client';
import { FC, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import { Section } from '@/app/(shared)/components/ui/Section';
import { Container } from '@/app/(shared)/components/ui/Container';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { FilterButtons } from '../FilterButtons';
import { EventsList } from '../EventsList';

import { FilterButtonType } from '../FilterButtons/FilterButtons.types';
import { EventCardTagType, EventCardType } from '../EventCard/EventCard.types';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export const Events: FC = () => {
  const [filterData, setFilterData] = useState<FilterButtonType[] | null>(null);
  const [allEvents, setAllEvents] = useState<EventCardType[] | null>(null);
  const [filteredEvents, setFilteredEvents] = useState<EventCardType[] | null>(null);
  const [eventsType, setEventsType] = useState<EventCardTagType>('regular');
  const { t, i18n } = useTranslation([i18nNamespaces.EVENTS]);

  useEffect(() => {
    if (!t) return;

    const filter: FilterButtonType[] = t('filter', { returnObjects: true });
    const events: EventCardType[] = t('events', { returnObjects: true });

    setFilterData(filter);
    setAllEvents(events);
  }, [i18n.language, t]);

  useEffect(() => {
    if (!allEvents) return;
    const filteredEvents = allEvents.filter(({ type }) => type === eventsType);

    setFilteredEvents(filteredEvents);
  }, [allEvents, eventsType]);

  return (
    <Section className="py-10 md:py-15 xl:pt-[84px]">
      <Container>
        {filterData && filteredEvents && t && (
          <>
            <div className="xl:mb-15 xl:flex xl:items-center xl:justify-between">
              <Typography as="h1" className="mb-10 text-left text-black md:mb-15 xl:mb-0">
                {t('title')}
              </Typography>

              <FilterButtons
                buttonsData={filterData}
                setEventsType={setEventsType}
                eventsType={eventsType}
              />
            </div>

            <EventsList buttonsData={filterData} events={filteredEvents} />
          </>
        )}
      </Container>
    </Section>
  );
};
