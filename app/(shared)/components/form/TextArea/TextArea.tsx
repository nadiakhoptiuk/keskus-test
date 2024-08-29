import { ForwardedRef, forwardRef } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import type { TextAreaProps } from '@/app/(shared)/types/common.types';

export const TextArea = forwardRef(
  ({ error, className, ...props }: TextAreaProps, ref: ForwardedRef<HTMLTextAreaElement>) => {
    return (
      <textarea
        ref={ref}
        className={classnames(
          'font-nunito base-transition h-25 w-full resize-none rounded-sm border-l-transparent border-r-transparent border-t-transparent !bg-white px-0 py-[14px] !text-ui_light_14 placeholder:text-ui_light_14 placeholder:text-grey focus:px-2 focus:ring-2',
          {
            ' border-b-blue-600 !text-black focus:ring-blue-200': !error,
          },
          {
            'border-b-red-500 !text-red-500 focus:border-red-500 focus:ring-red-300': error,
          },
          className,
        )}
        {...props}
      />
    );
  },
);

TextArea.displayName = 'TextArea';
