import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

export const Container: FC<WithChildren & WithClassName> = ({ children, className }) => {
  return (
    <div
      className={classnames(
        'mx-auto w-full max-w-screen-sm px-5 md:max-w-screen-md md:px-8 xl:max-w-[1216px] xl:p-0 2xl:max-w-[1440px]',
        className,
      )}
    >
      {children}
    </div>
  );
};
