import { Children, FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { ButtonProps } from '@/app/(shared)/types/common.types';

type Props = ButtonProps & {
  variant?: 'primary' | 'outline' | 'custom';
};

export const Button: FC<Props> = ({ children, className, variant = 'custom', ...props }) => {
  const childrenCount = Children.count(children);

  return (
    <button
      className={classnames(
        'base-transition inline-flex items-center justify-center gap-x-4 text-wrap',
        childrenCount > 1 && 'gap-4',
        variant === 'primary' && 'btn-primary',
        variant === 'outline' && 'btn-outline',
        className,
      )}
      type={props.type ?? 'button'}
      {...props}
    >
      {children}
    </button>
  );
};
