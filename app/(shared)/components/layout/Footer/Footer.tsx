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
    <footer className="py-10 md:py-15" {...props}>
      <Container className="decor-border-top relative grid grid-cols-sm grid-rows-sm justify-items-center gap-x-10 gap-y-10 text-center grid-areas-footerSm md:grid-cols-md md:grid-rows-md md:items-start md:justify-items-stretch md:gap-x-[134px] md:text-left md:grid-areas-footerMd xl:md:gap-x-[290px] xl:grid-cols-xl xl:grid-rows-xl xl:grid-areas-footerXl">
        <SiteLogo className="grid-in-footerLogo" />

        <nav className="min-w-[200px] max-w-max grid-in-footerNav">
          <ul className="grid grid-cols-2 grid-rows-4 items-center justify-center gap-y-3.5 max-md:gap-x-25 md:gap-x-10 xl:gap-x-20">
            {menuItems.map(({ title, href }) => (
              <li className="w-max" key={title.toLowerCase()}>
                <NavbarLink href={href} title={title} variant="footer" />
              </li>
            ))}
          </ul>
        </nav>

        <address className="grid-in-contacts">
          <ul className="grid gap-y-3.5 font-fixel font-normal not-italic">
            <li>
              <a
                className="base-transition inline focus:text-yellow-400 hocus:text-yellow-400"
                href="tel:58289515"
              >
                582 89 515 - {t('contactName')}
              </a>
            </li>
            <li>
              <a
                className="base-transition inline focus:text-yellow-400 hocus:text-yellow-400"
                href="mailto:ukrainakeskus@gmail.com"
              >
                ukrainakeskus@gmail.com
              </a>
            </li>
          </ul>
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
