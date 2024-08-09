import { FC } from 'react';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { classnames } from '@/app/(shared)/utils/classnames';

import { SocialNetworkType, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  href: string;
  to: SocialNetworkType;
  aria: string;
};

export const SocialLink: FC<Props> = ({ className, href, to, aria }) => {
  return (
    <a
      className={classnames(
        'base-transition inline-flex size-8 items-center justify-center rounded-sm text-blue-600 hover:text-yellow-400 focus:text-yellow-400',
        className,
      )}
      href={href}
      target="_blank"
      rel="nofollow noopener noreferrer"
      aria-label={aria}
    >
      <CustomIcon icon={to} />
    </a>
  );
};
