import React, { FC } from 'react';

import {
  NavbarLink,
  NavbarLinkProps,
} from '@/app/(shared)/components/navigation/NavbarLink';
import { menuItems } from '@/app/(shared)/components/navigation/Navbar/Navbar.constants';

export const Navbar: FC = () => {
  return (
    <>
      <div className="fixed inset-0 bg-black/25 backdrop-blur-sm" />

      <div className="fixed right-0 top-0 z-30">
        <nav className="grid max-w-[600px] bg-blue-600 p-6 backdrop-blur-2xl">
          <ul>
            {menuItems.map((item: NavbarLinkProps) => (
              <li key={item.title.toLowerCase()}>
                <NavbarLink href={item.href} title={item.title} />
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
