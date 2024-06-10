import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { CustomIconProps, icons } from '@/app/(shared)/components/ui/CustomIcon/CustomIcon.types';

export const CustomIcon: FC<CustomIconProps> = ({ icon, className }) => {
  const Icon = icons[icon];

  return (
    <Icon
      className={classnames(
        'inline-block',
        icon === 'logo' && 'hidden h-9 w-[234px] md:inline-block',
        icon === 'logo-sm' && 'h-7 w-[182px] md:hidden',
        icon === 'burger' && 'h-5/6 w-8',
        icon === 'closeMenu' && 'size-8',
        icon === 'arrow' && 'size-6',
        className,
      )}
    />
  );
};
