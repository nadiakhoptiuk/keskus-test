'use client';

import { FC, Fragment } from 'react';
import { Dialog, DialogPanel, TransitionChild, Transition } from '@headlessui/react';

import useBlockScroll from '@/app/(shared)/hooks/useBlockScroll';
import { classnames } from '@/app/(shared)/utils/classnames';

import { CustomIcon } from '../CustomIcon';

import { WithChildren } from '@/app/(shared)/types/common.types';

type Props = {
  isOpen: boolean;
  closeModal: () => void;
  modalClassName?: string;
  dialogClassName?: string;
  overlayClassName?: string;
  containerClassName?: string;
  closeButtonClassName?: string;
  hideCloseButton?: boolean;
};

export const BaseModal: FC<Props & WithChildren> = ({
  isOpen,
  closeModal,
  children,
  modalClassName = '',
  dialogClassName = '',
  overlayClassName = '',
  containerClassName = '',
  closeButtonClassName = '',
  hideCloseButton = false,
}) => {
  useBlockScroll(isOpen);

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className={classnames('relative z-10', dialogClassName)}
          onClose={closeModal}
        >
          <TransitionChild
            as={Fragment}
            enter="transition duration-200 ease-out"
            enterFrom="transform scale-100 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-200 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-100 opacity-0"
          >
            <div
              className={classnames(
                'fixed inset-0 bottom-0 left-0 right-0 top-0 bg-black/25 backdrop-blur-sm',
                overlayClassName,
              )}
            />
          </TransitionChild>

          <div className="fixed inset-0 bottom-0 left-0 right-0 top-0 z-30 h-full w-full overflow-y-hidden bg-[rgba(0,0,0,0.5)]">
            <div className="flex text-center">
              <TransitionChild
                as={Fragment}
                enter="transition duration-200 ease-out"
                enterFrom="transform scale-95 opacity-0"
                enterTo="transform scale-100 opacity-100"
                leave="transition duration-200 ease-out"
                leaveFrom="transform scale-100 opacity-100"
                leaveTo="transform scale-95 opacity-0"
              >
                <DialogPanel
                  className={classnames(
                    'absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ',
                    modalClassName,
                  )}
                >
                  <div className={classnames('relative h-full', containerClassName)}>
                    {children}
                    <button
                      onClick={closeModal}
                      className={classnames(
                        'absolute flex h-[50px] w-[50px] items-center justify-center',
                        { hidden: hideCloseButton },
                        closeButtonClassName,
                      )}
                    >
                      <CustomIcon icon="closeMenu" />
                    </button>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
