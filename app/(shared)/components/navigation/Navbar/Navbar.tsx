import { useState } from 'react';
import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { Overlay } from '@/app/(shared)/components/ui/Overlay';
import { menuItems } from '@/app/(shared)/components/navigation/Navbar/Navbar.constants';

import { NavbarLinkProps } from '@/app/(shared)/types/common.types';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button
        className="size-8 py-0.5 leading-none text-blue-600 transition-all duration-300 hover:text-yellow-400"
        onClick={openMenu}
      >
        <CustomIcon icon="burger" />
      </Button>

      <Transition appear show={isOpen}>
        <Dialog
          as="div"
          className="relative z-10 focus:outline-none"
          onClose={closeMenu}
        >
          <Overlay />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <TransitionChild
              enter="ease-out duration-300"
              enterFrom="opacity-0  translate-x-full"
              enterTo="opacity-100 translate-x-0"
              leave="ease-in duration-300"
              leaveFrom="opacity-100 translate-x-0"
              leaveTo="opacity-0 translate-x-full"
            >
              <DialogPanel className="ml-auto h-screen w-full max-w-[600px] bg-blue-600 pb-[50px] pl-36 pt-[42px]">
                <div className="mb-4 flex items-center justify-end">
                  <Button
                    className="text-zinc-50 transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400"
                    onClick={closeMenu}
                  >
                    <CustomIcon icon="closeMenu" />
                  </Button>
                </div>

                <nav className="grid gap-y-10">
                  {menuItems.map((item: NavbarLinkProps) => (
                    <NavbarLink
                      key={item.title.toLowerCase()}
                      href={item.href}
                      title={item.title}
                    />
                  ))}
                </nav>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
