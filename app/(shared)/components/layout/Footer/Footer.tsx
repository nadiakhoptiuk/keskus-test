'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTranslation } from 'react-i18next';

import { useNavbarItems } from '@/app/(shared)/hooks/useNavbarItems';

import { Container } from '@/app/(shared)/components/ui/Container';
import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { ContactsList } from '@/app/[locale]/contacts/components/ContactsList';
import { SocialList } from '../../ui/SocialList';

import { RoutesEnum } from '@/app/(shared)/types/enums';
import { FooterDataFetchType, SocialAriaLabelsType } from '@/app/(shared)/types/common.types';

type Props = {
  footerData: FooterDataFetchType | undefined;
};

export const Footer: FC<Props> = ({ footerData }) => {
  const { t } = useTranslation();
  const socialAriaLabels: SocialAriaLabelsType = t('socialLinkAria', { returnObjects: true });
  const menuItems = useNavbarItems();
  const pathname = usePathname();

  return (
    <footer className="py-10 md:py-15">
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

        {footerData?.contacts && footerData.contacts.length > 0 && (
          <address className="grid-in-contacts">
            <ContactsList
              list={footerData.contacts.filter(({ contact_type }) => contact_type !== 'address')}
              variant="footer"
            />
          </address>
        )}

        {footerData?.socials && footerData.socials.length > 0 && (
          <SocialList list={footerData.socials} ariaLabels={socialAriaLabels} />
        )}

        <div className="flex basis-full flex-col gap-y-3 md:ml-auto md:mt-auto md:w-fit md:flex-row md:gap-x-5 xl:ml-0 xl:grid-in-copyright">
          <Typography className="inline-flex shrink-0 font-fixel !text-ui_light_12 text-black md:self-end">
            &copy; 2024{new Date().getFullYear() > 2024 ? `-${new Date().getFullYear()} ` : ' '}
            {t('copyright')}
          </Typography>

          {pathname !== RoutesEnum.PRIVACY_POLICY && (
            <Link
              href={`${RoutesEnum.PRIVACY_POLICY}`}
              className="base-transition shrink-0 font-fixel text-ui_light_12 text-black hocus:text-yellow-400"
            >
              {footerData?.policyTitle || t('privacyPolicy')}
            </Link>
          )}
        </div>
      </Container>
    </footer>
  );
};
