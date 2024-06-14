import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  iconClassName?: string;
};

export const Spinner: FC<Props> = ({ className, iconClassName }) => {
  return (
    <div className={classnames('flex items-center justify-center', className)}>
      <svg
        className={classnames('h-5 w-5 animate-spin text-blue-600', iconClassName)}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="3"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
        />
      </svg>
    </div>
  );
};
