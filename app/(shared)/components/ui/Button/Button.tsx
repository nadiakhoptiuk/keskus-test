import React, { Children, FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { ButtonProps } from '@/app/(shared)/types/common.types';

export const Button: FC<ButtonProps> = ({ children, className, ...props }) => {
  const childrenCount = Children.count(children);

  return (
    <button
      className={classnames(
        'baseTransition inline-flex items-center justify-center gap-x-4',
        {
          'gap-4': childrenCount > 1,
        },
        className,
      )}
      type={props.type || 'button'}
      {...props}
    >
      {children}
    </button>
  );
};
