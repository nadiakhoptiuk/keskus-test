import { useRef, useState } from 'react';
import { useClickAway, useKey, useToggle } from 'react-use';

export const useLanguageToggle = () => {
  const [isOpen, setIsOpen] = useToggle(false);
  const [selected, setSelected] = useState<string>('');

  const dropdownRef = useRef<HTMLDivElement>(null);

  useClickAway(dropdownRef, () => setIsOpen(false));
  useKey(
    'Escape',
    () => {
      if (isOpen) {
        setIsOpen(false);
      }
    },
    {
      event: 'keydown',
    },
    [isOpen],
  );

  const setLanguage = (code: string) => {
    setSelected(code);
    setIsOpen(false);
  };

  return {
    dropdownRef,
    isOpen,
    selected,
    setIsOpen,
    setLanguage,
    setSelected,
  };
};
