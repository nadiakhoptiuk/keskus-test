'use client';

import { FC } from 'react';

import { Container } from '@/app/(shared)/components/ui/Container';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';
import { ContactUsButton } from '../../ui/ContactUsButton';

export const Header: FC = () => {
  return (
    <header className="relative py-10" role="banner">
      <Container className="flex items-center justify-between">
        <SiteLogo />

        <div className="flex items-center gap-x-10">
          <ContactUsButton className="with-divider hidden h-10 min-w-[133px] py-2 text-ui_semibold_14 after:right-[-40px] md:mr-[36px] md:inline-flex xl:mr-10" />

          <LanguageToggle className="hidden md:block" color="blue" />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
