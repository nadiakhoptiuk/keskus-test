'use client';

import React, { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { useBrowser } from '@/app/(shared)/hooks/useBrowser';
import { useToggleMenu } from '@/app/(shared)/hooks/useToggleMenu';

export const Header: FC = ({ ...props }) => {
  const { isBrowser } = useBrowser();
  const { isMenuOpen, toggleMenu } = useToggleMenu();

  return (
    <header className="relative py-10" role="banner" {...props}>
      <div className="container flex items-center justify-between">
        <CustomIcon icon="logo" />

        {isBrowser && (
          <Button
            className="px-4 py-2 text-sm text-gray-700 transition-all duration-300 hover:bg-gray-100"
            type="button"
            onClick={toggleMenu}
          >
            <CustomIcon icon={isMenuOpen ? 'closeMenu' : 'burger'} />
          </Button>
        )}

        {isBrowser && isMenuOpen && <Navbar />}
      </div>
    </header>
  );
};
