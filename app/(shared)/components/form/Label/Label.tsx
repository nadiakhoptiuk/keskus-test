import { FC } from 'react';

import { classnames } from '@/app/(shared)/utils/classnames';

import { WithChildren, WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithChildren &
  WithClassName & {
    labelText?: string;
  };

export const Label: FC<Props> = ({ labelText, children, className }) => {
  return (
    <label className={classnames('relative', className)}>
      {labelText && <span className="text-black">{labelText}</span>}

      {children}
    </label>
  );
};
