import { FC, useState, useEffect } from 'react';
import { useCopyToClipboard } from 'react-use';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { classnames } from '@/app/(shared)/utils/classnames';

import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  label: string;
  value: string;
};

const INTERVAL = 2500;

export const Clipboard: FC<Props> = ({ label, value, className }) => {
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

  return (
    <div className={classnames('w-[230px] space-y-1 md:w-[280px]', className)}>
      <Typography as="span" className="text-base text-zinc-500">
        {label}
      </Typography>

      <div className="relative">
        <input
          className="block w-full text-wrap border-transparent bg-blue-50 py-3 pl-4 pr-14 text-base font-normal text-black focus:border-blue-50 focus:ring-0"
          type="text"
          defaultValue={value}
          disabled
        />

        <Button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-blue-600 hover:text-yellow-400"
          onClick={handleCopy}
        >
          <CustomIcon icon="clipboard" />
        </Button>

        {isVisible && (
          <span
            className={classnames(
              'baseTransition absolute -top-7 right-0 z-10 inline-block rounded bg-black/65 px-2 py-1 text-xs font-medium text-white opacity-0 shadow-sm transition-opacity',
              isVisible && 'opacity-100',
            )}
            role="tooltip"
          >
            Скопійовано
          </span>
        )}
      </div>
    </div>
  );
};
