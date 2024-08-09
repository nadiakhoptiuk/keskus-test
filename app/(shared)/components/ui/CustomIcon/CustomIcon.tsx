import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { CustomIconProps, icons } from '@/app/(shared)/components/ui/CustomIcon/CustomIcon.types';

// eslint-disable-next-line sonarjs/cognitive-complexity
export const CustomIcon: FC<CustomIconProps> = ({ icon, className }) => {
  const Icon = icons[icon];

  return (
    <Icon
      className={classnames(
        'inline-block',
        icon === 'logo' && 'hidden h-9 w-[234px] md:inline-block',
        icon === 'logo-sm' && 'h-7 w-[182px] md:hidden',
        icon === 'burger' && 'h-5/6 w-8',
        icon === 'calendar' && 'h-5 w-5',
        icon === 'clipboard' && 'h-5 w-4',
        icon === 'arrow' && 'size-6',
        icon === 'arrow-sm' && 'size-3',
        icon === 'arrow-md' && 'size-4',
        (icon === 'facebook' || icon === 'telegram' || icon === 'viber' || icon === 'closeMenu') &&
          'size-8',
        (icon === 'support' || icon === 'adaptation' || icon === 'values') && 'xl:size-18 size-12',
        icon.includes('partner') && 'h-25 w-auto md:h-[70px] xl:h-30',
        (icon === 'support-info' || icon === 'support-psycho') && 'size-10 md:size-12',
        icon === 'pin' && 'h-5 w-[10px]',
        className,
      )}
    />
  );
};
