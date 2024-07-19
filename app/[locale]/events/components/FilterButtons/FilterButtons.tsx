import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';

import { FilterButtonType } from './FilterButtons.types';
import { EventCardTagType } from '../EventCard/EventCard.types';

type Props = {
  buttonsData: FilterButtonType[];
  setEventsType: React.Dispatch<React.SetStateAction<EventCardTagType>>;
  eventsType: EventCardTagType;
};

export const FilterButtons: FC<Props> = ({ buttonsData, setEventsType, eventsType }) => {
  return (
    <div className="flex gap-5 max-xl:mb-15">
      {buttonsData.map(({ type, tag }) => {
        return (
          <Button
            key={type}
            variant={type === eventsType ? 'primary' : 'outline'}
            className={`h-10 !leading-[1.0] max-md:min-w-[150px] md:min-w-[170px] ${type === eventsType ? '!pointer-events-none' : ''}`}
            disabled={type === eventsType}
            onClick={() => setEventsType(type)}
          >
            {tag}
          </Button>
        );
      })}
    </div>
  );
};
