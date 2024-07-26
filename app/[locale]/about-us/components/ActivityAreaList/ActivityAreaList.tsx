import { FC } from 'react';

import { ActivityAreaCard } from '../ActivityAreaCard';

import { ActivityAreaType } from '@/app/(shared)/types/common.types';

type Props = {
  cards: ActivityAreaType[];
};

export const ActivityAreaList: FC<Props> = ({ cards }) => {
  return (
    <ul className="grid grid-cols-1 grid-rows-[auto] gap-y-10 md:grid-cols-3 md:gap-x-[52px] xl:gap-x-8">
      {cards.map(({ area_type, title, list, id }) => {
        return (
          <li key={id} className="h-auto">
            <ActivityAreaCard title={title} list={list} icon={area_type} />
          </li>
        );
      })}
    </ul>
  );
};
