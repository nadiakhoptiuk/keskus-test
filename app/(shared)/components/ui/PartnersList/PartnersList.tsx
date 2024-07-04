import { FC } from 'react';

import { CustomIcon } from '../CustomIcon';

import { icons } from '../CustomIcon/CustomIcon.types';

type Props = {
  partners: (keyof typeof icons)[];
};

export const PartnersList: FC<Props> = ({ partners }) => {
  return (
    <ul className="flex gap-y-8 max-md:flex-col md:flex-wrap md:justify-center md:gap-x-4 xl:gap-x-8 xl:gap-y-15">
      {partners.map((icon, index) => {
        return (
          <li
            key={index}
            className="inline-flex items-center justify-center md:w-[224px] xl:w-[384px]"
          >
            <CustomIcon icon={icon} />
          </li>
        );
      })}
    </ul>
  );
};
