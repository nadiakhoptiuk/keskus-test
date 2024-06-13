import { useEffect, useState } from 'react';

export const useClient = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);

  useEffect(() => {
    if (isBrowser) return;

    if (typeof window !== 'undefined') {
      setIsBrowser(true);
    }
  }, [isBrowser]);

  return { isBrowser };
};
