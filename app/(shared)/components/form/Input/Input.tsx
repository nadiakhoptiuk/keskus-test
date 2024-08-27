import { ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { InputProps } from '@/app/(shared)/types/common.types';

export const Input = forwardRef(
  (
    { error, className, type, value, placeholder, ...props }: InputProps,
    ref: ForwardedRef<HTMLInputElement>,
  ) => {
    return (
      <input
        ref={ref}
        className={classnames(
          'font-nunito base-transition h-[48px] w-full rounded-sm border-l-transparent border-r-transparent border-t-transparent !bg-white px-0 py-[14px] !text-ui_light_14 !shadow-none placeholder:text-ui_light_14 placeholder:text-grey focus:px-2 focus:!shadow-none focus:ring-2',
          {
            'border-b-blue-600 !text-black focus:ring-blue-200': !error,
          },
          {
            'border-b-red-500 !text-red-500 focus:border-red-500 focus:ring-red-300': error,
          },
          className,
        )}
        aria-invalid={error ? 'true' : 'false'}
        placeholder={placeholder}
        type={type}
        value={value}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';
