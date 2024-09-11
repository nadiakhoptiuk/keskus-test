import { useEffect } from 'react';

export const useBlockScroll = (isOpen: boolean) => {
  useEffect(() => {
    const scrollbarWidth = window.innerWidth - document.documentElement.offsetWidth;

    if (isOpen) {
      document.documentElement.style.paddingRight = `${scrollbarWidth}px`;
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.style.paddingRight = '0px';
      document.documentElement.classList.remove('no-scroll');
    }

    return () => {
      document.documentElement.classList.remove('no-scroll');
      document.documentElement.style.paddingRight = '0px';
    };
  }, [isOpen]);
};
