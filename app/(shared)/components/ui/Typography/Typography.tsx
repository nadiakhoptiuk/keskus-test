import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithChildren &
  WithClassName & {
    as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'strong';
  };

export const Typography: FC<Props> = ({ as, children, className }) => {
  const Component = as ?? 'p';

  return (
    <Component
      className={classnames(
        'font-normal text-black',
        as === 'h1' &&
          'font-kyiv-type-sans text-[44px] font-bold leading-[1.18] md:text-6xl xl:text-[68px]',
        as === 'h2' && 'font-kyiv-type-sans text-[32px] font-bold leading-none md:text-[40px]',
        as === 'h3' && 'font-fixel text-[28px] font-bold',
        as === 'p' && 'font-fixel text-base',
        className,
      )}
    >
      {children}
    </Component>
  );
};
