import { FC } from 'react';

import { ActivityAreaCard } from '../ActivityAreaCard';

import { ActivityAreaCardType } from '@/app/(shared)/types/common.types';

type Props = {
  cards: ActivityAreaCardType[];
};

export const ActivityAreaList: FC<Props> = ({ cards }) => {
  return (
    <ul className="grid grid-cols-1 grid-rows-[auto] gap-y-10 md:grid-cols-3 md:gap-x-[52px] xl:gap-x-8">
      {cards.map(({ heading, icon, options }, index) => {
        return (
          <li key={index} className="h-auto">
            <ActivityAreaCard heading={heading} options={options} icon={icon} />
          </li>
        );
      })}
    </ul>
  );
};
