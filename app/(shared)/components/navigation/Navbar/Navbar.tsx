'use client';

import { FC, useState } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';

import { useNavbarItems } from '@/app/(shared)/hooks/useNavbarItems';
import { useBlockScroll } from '@/app/(shared)/hooks/useBlockScroll';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { Overlay } from '@/app/(shared)/components/ui/Overlay';
import { TransitionNavbarChild } from '@/app/(shared)/components/animations/Transitions';
import { ContactUsButton } from '../../ui/ContactUsButton';

export const Navbar: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  useBlockScroll(isOpen);
  const menuItems = useNavbarItems();

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button
        className="transition-color size-8 py-0.5 leading-none text-blue-600 hover:text-yellow-400 focus-visible:text-yellow-400"
        onClick={openMenu}
      >
        <CustomIcon icon="burger" />
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeMenu}>
          <Overlay />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto overflow-x-hidden">
            <TransitionNavbarChild>
              <DialogPanel className="absolute right-0 top-0 z-50 min-h-full w-full max-w-[600px] bg-blue-600 pl-10 pr-5 pt-6 max-md:pb-12 md:px-20 md:pb-[112px] md:pt-[42px] xl:pl-20 xl:pr-28">
                <div className="relative z-40 mb-15 flex items-center justify-end max-md:gap-x-8 md:gap-x-[36px] xl:gap-x-10">
                  <ContactUsButton className="with-divider mr-[36px] hidden !bg-white !text-blue-600 after:right-[-36px] after:bg-grey hocus:!bg-yellow-400 md:inline-flex" />

                  <LanguageToggle
                    color="white"
                    listboxClassName="max-md:h-7 max-md:w-15 max-md:px-2 max-md:text-ui_med_14 max-md:py-1"
                  />
                  <Button
                    className="text-zinc-50 transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400"
                    onClick={closeMenu}
                  >
                    <CustomIcon icon="closeMenu" />
                  </Button>
                </div>

                <nav className="relative z-10 grid gap-y-8 pl-11 md:gap-y-10">
                  {menuItems.map(({ title, href }) => (
                    <NavbarLink
                      key={title.toLowerCase()}
                      href={href}
                      title={title}
                      variant="header"
                      onClick={closeMenu}
                    />
                  ))}
                </nav>

                <a
                  href={process.env.NEXT_PUBLIC_EVOLUNTEER_URL}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="base-transition relative ml-11 mt-16 block w-fit font-kyiv-type-sans text-ui_med_20 text-yellow-400 before:absolute before:-top-8 before:left-0 before:h-[1px] before:w-[195px] before:bg-[#A3A3A3] before:opacity-50 before:content-[''] after:absolute after:-bottom-8 after:left-0 after:h-[1px] after:w-[195px] after:bg-[#A3A3A3] after:opacity-50 after:content-[''] hocus:text-white md:mt-20 md:text-ui_med_36 md:before:w-[345px] md:after:w-[345px]"
                >
                  E-VOLUNTEER
                </a>

                <ContactUsButton className="mt-[104px] flex w-full max-w-[233px] items-center border-[1px] !bg-white leading-[1.0] !text-blue-600 hocus:!bg-yellow-400 md:hidden" />
              </DialogPanel>
            </TransitionNavbarChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
