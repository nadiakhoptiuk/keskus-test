import { FC } from 'react';
import { classnames } from '@/app/(shared)/utils/classnames';

import { ContactItem } from '../ContactItem/ContactItem';

import { ContactItemType } from '@/app/(shared)/types/common.types';

type Props = {
  list: ContactItemType[];
  className?: string;
};

export const ContactsList: FC<Props> = ({ list, className }) => {
  return (
    <ul
      className={classnames(
        'grid gap-y-6 md:w-max md:grid-cols-[auto_auto_auto] md:gap-x-15 xl:ml-auto',
        className,
      )}
    >
      {list.map(({ ...properties }, index) => {
        return (
          <li key={index}>
            <ContactItem {...properties} />
          </li>
        );
      })}
    </ul>
  );
};
