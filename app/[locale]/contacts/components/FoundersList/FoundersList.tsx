import { FC } from 'react';

import { FounderCard } from '../FounderCard';

import { FounderCardType } from '../FounderCard/FounderCard.types';

type Props = {
  list: FounderCardType[];
};

export const FoundersList: FC<Props> = ({ list }) => {
  return (
    <ul className="mb-10 grid gap-y-8 md:mb-15 md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:gap-15">
      {list.map(({ ...properties }, index) => {
        return (
          <li key={index} className="space-y-3.5">
            <FounderCard {...properties} />
          </li>
        );
      })}
    </ul>
  );
};
