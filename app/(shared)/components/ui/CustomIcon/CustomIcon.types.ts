import { WithClassName } from '@/app/(shared)/types/common.types';

import Arrow from '@/public/icons/arrow-up.svg';
import Burger from '@/public/icons/burger.svg';
import CloseMenu from '@/public/icons/close-menu.svg';
import Logo from '@/public/icons/logo.svg';

export const icons = {
  arrow: Arrow,
  burger: Burger,
  closeMenu: CloseMenu,
  logo: Logo,
};

export type CustomIconProps = WithClassName & {
  icon: keyof typeof icons;
};
