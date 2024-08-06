import { useEffect, useState } from 'react';
import { useCopyToClipboard } from 'react-use';

const INTERVAL = 2500;

export const useClipboard = (value: string) => {
  const [_, copyToClipboard] = useCopyToClipboard();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleCopy = () => {
    copyToClipboard(value);
    setIsVisible(true);
  };

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setIsVisible(false);
      }, INTERVAL);

      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return {
    handleCopy,
    isVisible,
  };
};
