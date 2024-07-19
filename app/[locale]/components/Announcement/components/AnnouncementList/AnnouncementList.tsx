import { FC } from 'react';

import { AnnouncementCard } from '../AnnouncementCard';

import { AnnouncementCardType } from '../AnnouncementCard/AnnouncementCard.types';

type Props = {
  list: AnnouncementCardType[];
};

export const AnnouncementList: FC<Props> = ({ list }) => {
  return (
    <ul className="grid w-full gap-y-10 grid-in-announcements">
      {list.map((event, index) => (
        <AnnouncementCard key={index} card={event} Tag="li" />
      ))}
    </ul>
  );
};
