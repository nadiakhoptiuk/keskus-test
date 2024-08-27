import { ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { CheckboxProps } from '@/app/(shared)/types/common.types';

export const Checkbox = forwardRef(
  (
    { error, className, labelText, ...props }: CheckboxProps & { labelText?: string },
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <>
        <input
          ref={ref}
          type="checkbox"
          className={classnames(
            "base-transition h-5 w-5 rounded-sm border-blue-600 !text-blue-600 !accent-blue-600 shadow-sm checked:!bg-blue-50 checked:!bg-[url('/icons/checkbox.svg')]  focus:ring-2  focus:ring-offset-0",
            {
              'focus:bg-blue-50  focus:ring-blue-200': !error,
            },
            {
              'border-red-500 focus:border-red-500 focus:bg-red-100 focus:ring-red-200': error,
            },
            className,
          )}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />

        <span
          className={classnames('!text-ui_light_12 text-black', {
            '!text-ui_light_12 text-red-500': error,
          })}
        >
          {labelText}
        </span>
      </>
    );
  },
);

Checkbox.displayName = 'Checkbox';
