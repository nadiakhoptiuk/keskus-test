'use client';

import React, { FC } from 'react';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';

export const Header: FC = ({ ...props }) => {
  return (
    <header className="relative py-10" role="banner" {...props}>
      <div className="container flex items-center justify-between">
        <CustomIcon icon="logo" />

        <LanguageToggle color="blue" />

        <Navbar />
      </div>
    </header>
  );
};
