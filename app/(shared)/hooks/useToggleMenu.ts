import { useLockBodyScroll, useToggle } from 'react-use';

export const useToggleMenu = () => {
  const [isMenuOpen, toggleMenu] = useToggle(false);

  useLockBodyScroll(isMenuOpen);

  return { isMenuOpen, toggleMenu };
};
