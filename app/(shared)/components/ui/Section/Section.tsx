import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithChildren &
  WithClassName & {
    fixedWith?: boolean;
    variant?: 'default' | 'custom';
  };

export const Section: FC<Props> = (
  { children, className, variant = 'default', fixedWith = false },
) => {
  if (variant === 'custom')
    return (
      <section className={classnames(fixedWith && '2xl:max-w-400 2xl:mx-auto', className)}>
        {children}
      </section>
    );

  return (
    <section
      className={classnames(
        'py-15 md:py-25',
        fixedWith && '2xl:mx-auto 2xl:max-w-[1600px]',
        className,
      )}
    >
      {children}
    </section>
  );
};
