import { FC } from 'react';

import { FilterButtonType } from '../FilterButtons/FilterButtons.types';
import { EventCardType } from '../EventCard/EventCard.types';
import { EventCard } from '../EventCard';

type Props = {
  buttonsData: FilterButtonType[];
  events: EventCardType[];
};

export const EventsList: FC<Props> = ({ buttonsData, events }) => {
  return (
    <>
      <ul className="grid grid-cols-1 gap-y-8 md:gap-y-15 xl:grid-cols-2 xl:gap-x-8">
        {events.map((event, index) => (
          <EventCard key={index} event={event} filterData={buttonsData} />
        ))}
      </ul>
    </>
  );
};
