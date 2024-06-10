import { WithClassName } from '@/app/(shared)/types/common.types';

import Arrow from '@/public/icons/arrow-up.svg';
import ArrowSm from '@/public/icons/arrow-sm.svg';
import Burger from '@/public/icons/burger.svg';
import CloseMenu from '@/public/icons/close-menu.svg';
import Logo from '@/public/icons/logo.svg';
import LogoSm from '@/public/icons/logo-sm.svg';

export const icons = {
  arrow: Arrow,
  'arrow-sm': ArrowSm,
  burger: Burger,
  closeMenu: CloseMenu,
  logo: Logo,
  'logo-sm': LogoSm,
};

export type CustomIconProps = WithClassName & {
  icon: keyof typeof icons;
};
