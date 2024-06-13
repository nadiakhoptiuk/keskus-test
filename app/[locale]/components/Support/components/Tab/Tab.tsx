import { FC } from 'react';
import { Tab as BaseTab, TabProps } from '@headlessui/react';

import { WithChildren } from '@/app/(shared)/types/common.types';

export const Tab: FC<WithChildren & TabProps> = ({ children, ...props }) => {
  return (
    <BaseTab
      className="baseTransition w-[86px] rounded border border-blue-600 px-1 py-1.5 text-base font-medium text-blue-600 focus:outline-none data-[hover]:bg-blue-600 data-[selected]:bg-blue-600 data-[selected]:data-[hover]:bg-blue-600 data-[hover]:text-zinc-50 data-[selected]:data-[hover]:text-zinc-50 data-[selected]:text-zinc-50 data-[focus]:outline-1 data-[focus]:outline-zinc-50 xl:w-[146px]"
      {...props}
    >
      {children}
    </BaseTab>
  );
};
