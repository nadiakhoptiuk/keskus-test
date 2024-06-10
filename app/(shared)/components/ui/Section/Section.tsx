import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

export const Section: FC<WithChildren & WithClassName> = ({
  children,
  className,
  ...props
}) => {
  return (
    <section className={classnames(className)} {...props}>
      {children}
    </section>
  );
};
