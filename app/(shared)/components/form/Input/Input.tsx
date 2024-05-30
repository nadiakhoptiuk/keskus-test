import { ForwardedRef, forwardRef } from 'react';

import { ErrorMessage } from '@/app/(shared)/components/form/ErrorMessage';
import { classnames } from '@/app/(shared)/utils/classnames';

import { InputProps } from '@/app/(shared)/types/common.types';

export const Input = forwardRef(
  (
    { error, className, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          className={classnames(
            'inputDefault',
            {
              inputError: error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

Input.displayName = 'Input';
