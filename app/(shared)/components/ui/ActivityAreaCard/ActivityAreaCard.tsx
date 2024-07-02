import { FC } from 'react';

import { Typography } from '../Typography';

import { ActivityAreaCardType } from '@/app/(shared)/types/common.types';
import { CustomIcon } from '../CustomIcon';

export const ActivityAreaCard: FC<ActivityAreaCardType> = ({ heading, icon, options }) => {
  return (
    <>
      <CustomIcon icon={icon} className="mb-7 md:mb-11" />

      <Typography as="h3" className="mb-7 font-fixel text-[20px] font-bold leading-[1.4]">
        {heading}
      </Typography>

      <ul className="grid gap-y-3">
        {options.map((option, index) => {
          return (
            <li key={index} className="font-regular font-fixel text-[16px] leading-[1.5]">
              {option}
            </li>
          );
        })}
      </ul>
    </>
  );
};