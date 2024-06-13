import { LocaleProps } from '@/app/(shared)/types/i18n.types';
import { FC, useState } from 'react';
import { Dialog, DialogPanel, Transition } from '@headlessui/react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { LanguageToggle } from '@/app/(shared)/components/ui/LanguageToggle';
import { NavbarLink } from '@/app/(shared)/components/navigation/NavbarLink';
import { Overlay } from '@/app/(shared)/components/ui/Overlay';
import { TransitionNavbarChild } from '@/app/(shared)/components/animations/Transitions';
import { menuItems } from '@/app/(shared)/components/navigation/Navbar/Navbar.constants';

export const Navbar: FC<LocaleProps> = ({ locale }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <Button
        className="transition-color size-8 py-0.5 leading-none text-blue-600 hover:text-yellow-400"
        onClick={openMenu}
      >
        <CustomIcon icon="burger" />
      </Button>

      <Transition appear show={isOpen}>
        <Dialog as="div" className="relative z-10 focus:outline-none" onClose={closeMenu}>
          <Overlay />

          <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
            <TransitionNavbarChild>
              <DialogPanel className="absolute right-0 top-0 z-50 min-h-full w-full max-w-[600px] bg-blue-600 pb-12 pl-[84px] pr-5 pt-6 md:pt-[42px] xl:pb-[50px] xl:pl-36">
                <div className="relative z-40 mb-[60px] flex items-center justify-end gap-x-10">
                  <LanguageToggle color="white" locale={locale} />

                  <Button
                    className="text-zinc-50 transition-all duration-300 hover:text-yellow-400 focus:text-yellow-400"
                    onClick={closeMenu}
                  >
                    <CustomIcon icon="closeMenu" />
                  </Button>
                </div>

                <nav className="relative z-10 grid gap-y-8 md:gap-y-10">
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
              </DialogPanel>
            </TransitionNavbarChild>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
