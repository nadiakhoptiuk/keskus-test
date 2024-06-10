'use client';

import { FC } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { Navbar } from '@/app/(shared)/components/navigation/Navbar';
import { classnames } from '@/app/(shared)/utils/classnames';

import { RoutesEnum } from '@/app/(shared)/types/enums';

export const Header: FC = ({ ...props }) => {
  const pathname = usePathname();

  return (
    <header className="relative py-10" role="banner" {...props}>
      <div className="container flex items-center justify-between">
        <Link
          href={RoutesEnum.HOME}
          className={classnames(pathname === RoutesEnum.HOME && 'pointer-events-none')}
        >
          <CustomIcon icon="logo-sm" />
          <CustomIcon icon="logo" />
        </Link>

        <div className="flex items-center gap-x-10">
          <LanguageToggle className="hidden md:block" color="blue" />
          <Navbar />
        </div>
      </div>
    </header>
  );
};
