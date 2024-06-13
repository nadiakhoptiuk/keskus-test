import { useTranslation } from 'react-i18next';

import { RoutesEnum } from '@/app/(shared)/types/enums';
import { i18nNamespaces } from '@/app/(shared)/types/i18n.types';

export const useNavbarItems = () => {
  const { t } = useTranslation(i18nNamespaces.HEADER);

  return [
    {
      title: t('navbar.home'),
      href: RoutesEnum.HOME,
    },
    {
      title: t('navbar.about_us'),
      href: RoutesEnum.ABOUT_US,
    },
    {
      title: t('navbar.gallery'),
      href: RoutesEnum.GALLERY,
    },
    {
      title: t('navbar.services'),
      href: RoutesEnum.SERVICES,
    },
    {
      title: t('navbar.events'),
      href: RoutesEnum.EVENTS,
    },
    {
      title: t('navbar.news'),
      href: RoutesEnum.NEWS,
    },
    {
      title: t('navbar.vacancies'),
      href: RoutesEnum.VACANCIES,
    },
    {
      title: t('navbar.contacts'),
      href: RoutesEnum.CONTACTS,
    },
  ];
};
