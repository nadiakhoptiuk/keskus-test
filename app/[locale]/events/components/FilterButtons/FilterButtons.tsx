import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';

import { ActivityType, EventLabelType } from '@/app/(shared)/types/common.types';
import { classnames } from '@/app/(shared)/utils/classnames';

type Props = {
  buttonsData: EventLabelType[];
  setEventsType: React.Dispatch<React.SetStateAction<ActivityType>>;
  eventsType: ActivityType;
  className?: string;
};

export const FilterButtons: FC<Props> = ({ buttonsData, setEventsType, eventsType, className }) => {
  return (
    <div className={classnames('flex h-max gap-5 max-md:mb-5', className)}>
      {buttonsData.map(({ id, type_of_activity, filter_button_label }) => {
        return (
          <Button
            key={id}
            variant={type_of_activity === eventsType ? 'primary' : 'outline'}
            className={`h-11 !leading-[1.0] max-md:w-full max-md:min-w-[150px] md:min-w-[170px] ${type_of_activity === eventsType ? '!pointer-events-none' : ''}`}
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
