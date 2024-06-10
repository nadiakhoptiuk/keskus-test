import { FC } from 'react';
import Link from 'next/link';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { NavbarLinkProps } from '@/app/(shared)/types/common.types';

export const NavbarLink: FC<NavbarLinkProps> = ({ title, href }) => {
  return (
    <Link
      href={href}
      className="baseTransition group relative font-kyiv-type-sans text-4xl font-medium text-zinc-50 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:text-yellow-400 focus-visible:ring-2 focus-visible:ring-white/75"
    >
      <CustomIcon
        icon="arrow"
        className="baseTransition absolute -left-10 top-1/2 z-10 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 group-focus:text-yellow-400 group-focus:opacity-100"
      />

      {title}
    </Link>
  );
};
