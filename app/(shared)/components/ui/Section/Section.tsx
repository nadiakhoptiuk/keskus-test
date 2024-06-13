import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

export const Section: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return <section className={classnames('py-[60px] md:py-[100px]', className)}>{children}</section>;
};
