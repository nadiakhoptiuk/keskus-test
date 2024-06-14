import { FC } from 'react';

import { WithChildren } from '@/app/(shared)/types/common.types';

export const ErrorMessage: FC<WithChildren> = ({ children }) => {
  return (
    <span className="absolute -bottom-5 left-0 text-xs text-rose-500" role="alert">
      {children}
    </span>
  );
};
