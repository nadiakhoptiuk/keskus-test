'use client';

import { useNavbarItems } from '@/app/(shared)/hooks/useNavbarItems';
import { FC } from 'react';

import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';
import { SocialLink } from '@/app/(shared)/components/navigation/SocialLink';
import { useTranslation } from 'react-i18next';

export const Footer: FC = ({ ...props }) => {
  const { t } = useTranslation();
  const menuItems = useNavbarItems();

  return (
    <footer className="py-10 md:py-[60px]" {...props}>
      <div className="container relative grid grid-cols-sm grid-rows-sm justify-items-center gap-x-10 gap-y-10 text-center grid-areas-sm before:absolute before:-top-10 before:left-1/2 before:block before:h-[1px] before:w-11/12 before:-translate-x-1/2 before:bg-black/20 before:content-[''] md:grid-cols-md md:grid-rows-md md:items-start md:justify-items-stretch md:gap-x-[134px] md:text-left md:grid-areas-md md:before:-top-[60px] xl:md:gap-x-[290px] xl:grid-cols-xl xl:grid-rows-xl xl:grid-areas-xl xl:before:w-full">
        <SiteLogo className="grid-in-footerLogo" />

        <nav className="grid w-full grid-cols-2 grid-rows-4 items-center justify-center gap-y-3.5  grid-in-footerNav md:gap-x-10">
          {menuItems.map(({ title, href }) => (
            <NavbarLink key={title.toLowerCase()} href={href} title={title} variant="footer" />
          ))}
        </nav>

        <address className="grid gap-y-3.5 font-fixel font-normal not-italic grid-in-contacts">
          <a
            className="baseTransition hover:text-yellow-400 focus:text-yellow-400"
            href="tel:58289515"
          >
            582 89 515 - {t('contactName')}
          </a>
          <a
            className="baseTransition hover:text-yellow-400 focus:text-yellow-400"
            href="mailto:ukrainakeskus@gmail.com"
          >
            ukrainakeskus@gmail.com
          </a>
        </address>

        <ul className="inline-flex items-center gap-x-3.5">
          <li className="inline-flex items-end">
            <SocialLink href="https://www.facebook.com/" to="facebook" />
          </li>

          <li className="inline-flex items-end">
            <SocialLink href="https://web.telegram.org/a/" to="telegram" />
          </li>

          <li className="inline-flex items-end">
            <SocialLink href="https://www.viber.com/en/" to="viber" />
          </li>
        </ul>

        <p className="inline-flex font-fixel text-sm font-light text-black grid-in-copyright md:self-end">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </p>
      </div>
    </footer>
  );
};
