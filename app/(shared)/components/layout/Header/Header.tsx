'use client';

import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export const Header: FC<LocaleProps> = ({ locale }) => {
  return (
    <header className="relative py-10" role="banner">
      <div className="container flex items-center justify-between">
        <SiteLogo />

        <div className="flex items-center gap-x-10">
          <Button className="hidden py-3 xl:inline-flex" variant="primary">
            Звʼязатися
          </Button>

          <LanguageToggle className="hidden md:block" color="blue" locale={locale} />

          <Navbar locale={locale} />
        </div>
      </div>
    </header>
  );
};
