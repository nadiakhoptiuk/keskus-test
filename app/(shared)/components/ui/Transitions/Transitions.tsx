import { FC } from 'react';
import { Transition, TransitionChild } from '@headlessui/react';

import { WithChildren } from '@/app/(shared)/types/common.types';

export const TransitionNavbarChild: FC<WithChildren> = ({ children }) => {
  return (
    <TransitionChild
      enter="ease-out duration-300"
      enterFrom="opacity-0  translate-x-full"
      enterTo="opacity-100 translate-x-0"
      leave="ease-in duration-300"
      leaveFrom="opacity-100 translate-x-0"
      leaveTo="opacity-0 translate-x-full"
    >
      {children}
    </TransitionChild>
  );
};

export const TransitionDropdown: FC<
  WithChildren & {
    isOpen: boolean;
  }
> = ({ children, isOpen }) => {
  return (
    <Transition
      as="div"
      appear
      show={isOpen}
      enter="transition ease-out duration-300"
      enterFrom="opacity-0 scale-95"
      enterTo="opacity-100 scale-100"
      leave="transition ease-in duration-300"
      leaveFrom="opacity-100 scale-100"
      leaveTo="opacity-0 scale-95"
    >
      {children}
    </Transition>
  );
};
