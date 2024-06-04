import { NavbarLinkProps } from '@/app/(shared)/components/navigation/NavbarLink';

import { RoutesEnum } from '@/app/(shared)/types/enums';

export const menuItems: NavbarLinkProps[] = [
  {
    title: 'Головна',
    href: RoutesEnum.HOME,
  },
  {
    title: 'Про нас',
    href: RoutesEnum.ABOUT_US,
  },
  {
    title: 'Галерея',
    href: RoutesEnum.GALLERY,
  },
  {
    title: 'Послуги',
    href: RoutesEnum.SERVICES,
  },
  {
    title: 'Заходи',
    href: RoutesEnum.EVENTS,
  },
  {
    title: 'Новини',
    href: RoutesEnum.NEWS,
  },
  {
    title: 'Вакансії',
    href: RoutesEnum.VACANCIES,
  },
  {
    title: 'Контакти',
    href: RoutesEnum.CONTACTS,
  },
];
