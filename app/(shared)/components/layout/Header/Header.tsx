'use client';

import { FC } from 'react';
import { useTranslation } from 'react-i18next';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Container } from '@/app/(shared)/components/ui/Container';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';

export const Header: FC = () => {
  const { t } = useTranslation();

  return (
    <header className="relative py-10" role="banner">
      <Container className="flex items-center justify-between">
        <SiteLogo />

        <div className="flex items-center gap-x-10">
          <Button className="hidden w-[156px] py-3 xl:inline-flex" variant="primary">
            {t('headerButton')}
          </Button>

          <LanguageToggle className="hidden md:block" color="blue" />

          <Navbar />
        </div>
      </Container>
    </header>
  );
};
