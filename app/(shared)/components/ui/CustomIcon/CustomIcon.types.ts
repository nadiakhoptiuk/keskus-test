import { WithClassName } from '@/app/(shared)/types/common.types';

import Adaptation from '@/public/icons/adaptation.svg';
import Arrow from '@/public/icons/arrow-up.svg';
import ArrowSm from '@/public/icons/arrow-sm.svg';
import ArrowDropdown from '@/public/icons/arrow-dropdown.svg';
import Burger from '@/public/icons/burger.svg';
import Calendar from '@/public/icons/calendar.svg';
import Clipboard from '@/public/icons/clipboard.svg';
import CloseMenu from '@/public/icons/close-menu.svg';
import Facebook from '@/public/icons/facebook.svg';
import Logo from '@/public/icons/logo.svg';
import LogoSm from '@/public/icons/logo-sm.svg';
import Partner1 from '@/public/icons/partner1.svg';
import Partner2 from '@/public/icons/partner2.svg';
import Partner3 from '@/public/icons/partner3.svg';
import Partner4 from '@/public/icons/partner4.svg';
import Partner5 from '@/public/icons/partner5.svg';
import Pin from '@/public/icons/pin.svg';
import Spinner from '@/public/icons/spinner.svg';
import Support from '@/public/icons/support.svg';
import SupportInfo from '@/public/icons/support-info.svg';
import SupportPsycho from '@/public/icons/support-psycho.svg';
import Telegram from '@/public/icons/telegram.svg';
import Values from '@/public/icons/values.svg';
import Viber from '@/public/icons/viber.svg';

export const icons = {
  adaptation: Adaptation,
  arrow: Arrow,
  'arrow-sm': ArrowSm,
  'arrow-md': ArrowDropdown,
  burger: Burger,
  calendar: Calendar,
  clipboard: Clipboard,
  closeMenu: CloseMenu,
  facebook: Facebook,
  logo: Logo,
  'logo-sm': LogoSm,
  partner1: Partner1,
  partner2: Partner2,
  partner3: Partner3,
  partner4: Partner4,
  partner5: Partner5,
  pin: Pin,
  spinner: Spinner,
  support: Support,
  'support-info': SupportInfo,
  'support-psycho': SupportPsycho,
  telegram: Telegram,
  values: Values,
  viber: Viber,
};

export type CustomIconProps = WithClassName & {
  icon: keyof typeof icons;
};
