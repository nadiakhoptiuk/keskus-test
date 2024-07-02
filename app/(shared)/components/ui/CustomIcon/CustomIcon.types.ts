import { WithClassName } from '@/app/(shared)/types/common.types';

import Arrow from '@/public/icons/arrow-up.svg';
import ArrowSm from '@/public/icons/arrow-sm.svg';
import Burger from '@/public/icons/burger.svg';
import Clipboard from '@/public/icons/clipboard.svg';
import CloseMenu from '@/public/icons/close-menu.svg';
import Facebook from '@/public/icons/facebook.svg';
import Logo from '@/public/icons/logo.svg';
import LogoSm from '@/public/icons/logo-sm.svg';
import Telegram from '@/public/icons/telegram.svg';
import Viber from '@/public/icons/viber.svg';

import Support from '@/public/icons/support.svg';
import Adaptation from '@/public/icons/adaptation.svg';
import Values from '@/public/icons/values.svg';

export const icons = {
  adaptation: Adaptation,
  arrow: Arrow,
  'arrow-sm': ArrowSm,
  burger: Burger,
  clipboard: Clipboard,
  closeMenu: CloseMenu,
  facebook: Facebook,
  logo: Logo,
  'logo-sm': LogoSm,
  support: Support,
  telegram: Telegram,
  values: Values,
  viber: Viber,
};

export type CustomIconProps = WithClassName & {
  icon: keyof typeof icons;
};
