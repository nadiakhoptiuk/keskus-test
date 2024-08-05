import { FC } from 'react';

import { AnnouncementCard } from '../AnnouncementCard';

import { ActivityIrregularType } from '@/app/(shared)/types/common.types';

type Props = {
  list: ActivityIrregularType[] | null;
  readMoreText: string;
};

export const AnnouncementList: FC<Props> = ({ list, readMoreText }) => {
  return (
    <>
      {list && list?.length !== 0 && (
        <ul className="grid w-full gap-y-10 grid-in-announcements">
          {list.map(activity => (
            <AnnouncementCard
              key={activity.id}
              card={activity}
              Tag="li"
              readMoreText={readMoreText}
            />
          ))}
        </ul>
      )}
    </>
  );
};
