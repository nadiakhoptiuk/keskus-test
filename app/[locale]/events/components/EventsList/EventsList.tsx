import { FC } from 'react';

import { EventCard } from '../EventCard';
import { ActivityCommonType, EventLabelType } from '@/app/(shared)/types/common.types';

type Props = {
  readMoreText: string;
  buttonsData: EventLabelType[];
  events: ActivityCommonType[];
};

export const EventsList: FC<Props> = ({ readMoreText, buttonsData, events }) => {
  return (
    <>
      {events && events.length > 0 && (
        <ul className="grid grid-cols-1 gap-y-8 md:gap-y-15 xl:grid-cols-2 xl:gap-x-8">
          {events.map((event, index) => (
            <EventCard
              key={index}
              event={event}
              filterData={buttonsData}
              readMoreText={readMoreText}
            />
          ))}
        </ul>
      )}
    </>
  );
};
