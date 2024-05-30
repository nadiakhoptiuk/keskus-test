'use client';

import React, { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { useBrowser } from '@/app/(shared)/hooks/useBrowser';
import { useToggleMenu } from '@/app/(shared)/hooks/useToggleMenu';

import Logo from '@/public/vercel.svg';

export const Header: FC = ({ ...props }) => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <header
      className="relative border-b border-gray-300 py-6"
      role="banner"
      {...props}
    >
      <div className="container flex items-center justify-between">
        <Logo className="w-24" />

        {isBrowser && (
          <Button
            className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            type="button"
            onClick={toggleMenu}
          >
            {isMenuOpen ? 'Close' : 'Menu'}
          </Button>
        )}

        {isBrowser && isMenuOpen && <Navbar />}
      </div>
    </header>
  );
};
