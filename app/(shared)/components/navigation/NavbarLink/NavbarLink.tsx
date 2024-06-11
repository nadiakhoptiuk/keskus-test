import { FC } from 'react';
import Link, { LinkProps } from 'next/link';
import { usePathname } from 'next/navigation';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { classnames } from '@/app/(shared)/utils/classnames';

import { NavbarLinkProps } from '@/app/(shared)/types/common.types';

export const NavbarLink: FC<NavbarLinkProps & LinkProps> = ({ title, href, variant, ...props }) => {
  const pathname = usePathname();
  const isCurrent = pathname === href;

  if (variant === 'footer') {
    return (
      <Link
        href={href}
        className={classnames(
          'baseTransition text-base font-medium hover:text-yellow-400 focus:text-yellow-400',
          isCurrent && 'pointer-events-none',
        )}
        {...props}
      >
        {title}
      </Link>
    );
  }

  return (
    <Link
      href={href}
      className={classnames(
        'baseTransition group relative font-kyiv-type-sans text-[28px] font-medium text-zinc-50 transition-colors hover:text-yellow-400 focus:outline-none focus-visible:text-yellow-400 focus-visible:ring-2 focus-visible:ring-white/75 md:text-4xl',
        isCurrent && 'pointer-events-none text-yellow-400 ',
      )}
      {...props}
    >
      <CustomIcon
        icon="arrow"
        className={classnames(
          'baseTransition absolute -left-10 top-1/2 z-10 -translate-y-1/2 opacity-0 transition-opacity group-hover:opacity-100 group-focus:text-yellow-400 group-focus:opacity-100',
          isCurrent && 'opacity-100',
        )}
      />

      {title}
    </Link>
  );
};
