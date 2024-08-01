import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';

import { ActivityType, EventLabelType } from '@/app/(shared)/types/common.types';

type Props = {
  buttonsData: EventLabelType[];
  setEventsType: React.Dispatch<React.SetStateAction<ActivityType>>;
  eventsType: ActivityType;
};

export const FilterButtons: FC<Props> = ({ buttonsData, setEventsType, eventsType }) => {
  return (
    <div className="flex gap-5 max-xl:mb-15">
      {buttonsData.map(({ id, type_of_activity, filter_button_label }) => {
        return (
          <Button
            key={id}
            variant={type_of_activity === eventsType ? 'primary' : 'outline'}
            className={`h-10 !leading-[1.0] max-md:min-w-[150px] md:min-w-[170px] ${type_of_activity === eventsType ? '!pointer-events-none' : ''}`}
            disabled={type_of_activity === eventsType}
            onClick={() => setEventsType(type_of_activity)}
          >
            {filter_button_label}
          </Button>
        );
      })}
    </div>
  );
};
