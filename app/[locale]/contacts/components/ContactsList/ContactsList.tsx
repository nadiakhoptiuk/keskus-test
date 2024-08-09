import { FC } from 'react';
import { classnames } from '@/app/(shared)/utils/classnames';

import { ContactItem } from '../ContactItem/ContactItem';

import { ContactItemType } from '@/app/(shared)/types/common.types';

type Props = {
  list: ContactItemType[];
  variant?: 'footer' | 'contacts_page';
  className?: string;
};

export const ContactsList: FC<Props> = ({ list, variant = 'contacts_page', className = '' }) => {
  return (
    <ul
      className={classnames(
        {
          'grid gap-y-6 md:w-max md:grid-cols-[auto_auto_auto] md:gap-x-15 xl:ml-auto':
            variant === 'contacts_page',
          'grid gap-y-3.5 font-fixel font-normal': variant === 'footer',
        },
        className,
      )}
    >
      {list.map(({ id, ...properties }) => (
        <ContactItem key={id} {...properties} variant={variant} />
      ))}
    </ul>
  );
};
