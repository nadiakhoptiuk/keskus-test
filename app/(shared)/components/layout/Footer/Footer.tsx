'use client';

import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container';
import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';
import { SocialLink } from '@/app/(shared)/components/navigation/SocialLink';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { useNavbarItems } from '@/app/(shared)/hooks/useNavbarItems';
import { useTranslation } from 'react-i18next';

export const Footer: FC = ({ ...props }) => {
  const { t } = useTranslation();
  const menuItems = useNavbarItems();

  return (
    <footer className="md:py-15 py-10" {...props}>
      <Container className="decorBorderTop relative grid grid-cols-sm grid-rows-sm justify-items-center gap-x-10 gap-y-10 text-center grid-areas-footerSm md:grid-cols-md md:grid-rows-md md:items-start md:justify-items-stretch md:gap-x-[134px] md:text-left md:grid-areas-footerMd xl:md:gap-x-[290px] xl:grid-cols-xl xl:grid-rows-xl xl:grid-areas-footerXl">
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

        <Typography className="inline-flex font-fixel text-sm font-light text-black grid-in-copyright md:self-end">
          &copy; {new Date().getFullYear()} {t('copyright')}
        </Typography>
      </Container>
    </footer>
  );
};
