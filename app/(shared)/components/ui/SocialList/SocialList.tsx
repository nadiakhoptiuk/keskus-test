import { FC } from 'react';

import { SocialLink } from '../../navigation/SocialLink';

import { SocialAriaLabelsType, SocialItemType } from '@/app/(shared)/types/common.types';

type Props = {
  list: SocialItemType[];
  ariaLabels: SocialAriaLabelsType;
};

export const SocialList: FC<Props> = ({ list, ariaLabels }) => {
  return (
    <ul className="inline-flex items-center gap-x-3.5">
      {list.map(({ social_network, link }, index) => (
        <li key={index} className="inline-flex items-end">
          <SocialLink href={link} to={social_network} aria={ariaLabels[social_network]} />
        </li>
      ))}
    </ul>
  );
};
