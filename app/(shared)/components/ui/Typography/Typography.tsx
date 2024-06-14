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
        'font-fixel font-normal text-black',
        as === 'h1' && 'font-kyiv-type-sans text-[44px] font-bold md:text-6xl xl:text-[68px]',
        as === 'h2' && 'font-kyiv-type-sans text-[32px] font-bold md:text-[40px]',
        as === 'h3' && 'text-[28px] font-bold',
        as === 'p' && 'text-base',
        className,
      )}
    >
      {children}
    </Component>
  );
};
