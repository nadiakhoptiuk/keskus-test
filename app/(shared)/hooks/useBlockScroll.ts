import { useEffect } from 'react';

const useBlockScroll = (isOpen: boolean) => {
  useEffect(() => {
    if (isOpen) {
      document.documentElement.classList.add('no-scroll');
    } else {
      document.documentElement.classList.remove('no-scroll');
    }

    // Функція очищення для скидання класу
    return () => {
      document.documentElement.classList.remove('no-scroll');
    };
  }, [isOpen]);
};

export default useBlockScroll;
