'use client';

import React, { FC } from 'react';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';

export const Header: FC = ({ ...props }) => {
  return (
    <header className="relative py-10" role="banner" {...props}>
      <div className="container flex items-center justify-between">
        <CustomIcon icon="logo" />

        <Navbar />
      </div>
    </header>
  );
};
