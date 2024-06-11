'use client';

import { FC } from 'react';

import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { SiteLogo } from '@/app/(shared)/components/navigation/SiteLogo';

export const Header: FC = ({ ...props }) => {
  return (
    <header className="relative py-10" role="banner" {...props}>
      <div className="container flex items-center justify-between">
        <SiteLogo />

        <div className="flex items-center gap-x-10">
          <LanguageToggle className="hidden md:block" color="blue" />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
