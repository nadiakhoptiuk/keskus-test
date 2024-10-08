import { FC } from 'react';
import Link, { LinkProps } from 'next/link';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';

import { NavbarLinkProps } from '@/app/(shared)/types/common.types';

export const NavbarLink: FC<NavbarLinkProps & LinkProps> = ({ title, href, variant, ...props }) => {
  if (variant === 'footer') {
    return (
      <Link
        href={href}
        className="base-transition md:font-regular truncate text-nowrap text-base hover:text-yellow-400 focus:text-yellow-400 max-md:font-medium"
        {...props}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className="base-transition group relative !w-fit font-kyiv-type-sans text-[28px] font-medium text-zinc-50 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:text-yellow-400 focus-visible:ring-2 focus-visible:ring-white/75 md:text-4xl"
      {...props}
    >
      <CustomIcon
        icon="arrow"
        className="base-transition absolute -left-10 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 group-focus:text-yellow-400 group-focus:opacity-100"
      />

      {title}
    </Link>
  );
};
