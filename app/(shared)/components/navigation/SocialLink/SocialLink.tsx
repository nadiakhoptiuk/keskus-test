import { FC } from 'react';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { classnames } from '@/app/(shared)/utils/classnames';

import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  href: string;
  to: 'facebook' | 'telegram' | 'viber';
};

export const SocialLink: FC<Props> = ({ className, href, to }) => {
  return (
    <a
      className={classnames(
        'base-transition inline-flex size-8 items-center justify-center rounded-sm text-blue-600 hover:text-yellow-400 focus:text-yellow-400',
        className,
      )}
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label="Social link"
    >
      <CustomIcon icon={to} />
    </a>
  );
};
