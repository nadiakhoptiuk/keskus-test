import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { classnames } from '@/app/(shared)/utils/classnames';

import { RoutesEnum } from '@/app/(shared)/types/enums';
import { WithClassName } from '@/app/(shared)/types/common.types';

export const SiteLogo: FC<WithClassName> = ({ className }) => {
  const pathname = usePathname();

  return (
    <Link
      href={RoutesEnum.HOME}
      className={classnames(
        'base-transition opacity-100 hocus:opacity-50',
        pathname === RoutesEnum.HOME && 'pointer-events-none',
        className,
      )}
    >
      <CustomIcon icon="logo-sm" />
      <CustomIcon icon="logo" />
    </Link>
  );
};
