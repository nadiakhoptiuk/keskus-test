import { ForwardedRef, forwardRef } from 'react';

import { ErrorMessage } from '@/app/(shared)/components/form/ErrorMessage';
import { classnames } from '@/app/(shared)/utils/classnames';

import type { TextAreaProps } from '@/app/(shared)/types/common.types';

export const TextArea = forwardRef(
  (
    { error, className, ...props }: TextAreaProps,
    ref: ForwardedRef<HTMLTextAreaElement>,
  ) => {
    return (
      <>
        <textarea
          ref={ref}
          className={classnames(
            'inputDefault',
            {
              inputError: error,
            },
            className,
          )}
          {...props}
        />

        {error && <ErrorMessage>{error}</ErrorMessage>}
      </>
    );
  },
);

TextArea.displayName = 'TextArea';
