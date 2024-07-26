import { FC } from 'react';

import { Typography } from '../../../../(shared)/components/ui/Typography';

import { ActivityAreaCardType } from '@/app/(shared)/types/common.types';
import { CustomIcon } from '../../../../(shared)/components/ui/CustomIcon';

export const ActivityAreaCard: FC<ActivityAreaCardType> = ({ title, icon, list }) => {
  return (
    <>
      <CustomIcon icon={icon} className="mb-7 md:mb-11" />

      <Typography as="h3" className="mb-7 font-fixel text-[20px] font-bold leading-[1.4] md:mb-6">
        {title}
      </Typography>

      <ul className="grid gap-y-3">
        {list.split('\n').map((option, index) => {
          return (
            <li key={index} className="font-regular flex font-fixel text-[16px] leading-[1.5]">
              <CustomIcon icon="arrow-sm" className="mt-1 shrink-0 -rotate-90 text-blue-600" />
              <span className="ml-2">{option}</span>
            </li>
          );
        })}
      </ul>
    </>
  );
};
