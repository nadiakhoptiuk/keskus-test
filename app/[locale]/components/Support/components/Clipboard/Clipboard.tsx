'use client';
import { FC } from 'react';

import { useClipboard } from '@/app/[locale]/components/Support/Support.hook';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { classnames } from '@/app/(shared)/utils/classnames';

import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  label: string;
  value: string;
  clipboardNotificate: string;
  clipboardAria: string;
};

export const Clipboard: FC<Props> = ({
  label,
  value,
  className,
  clipboardNotificate,
  clipboardAria,
}) => {
  const { handleCopy, isVisible } = useClipboard(value);

  return (
    <div className={classnames('w-full max-w-[280px] space-y-1', className)}>
      <Typography as="span" className="text-base text-zinc-500">
        {label}
      </Typography>

      <div className="relative w-fit border-transparent bg-blue-50 py-3 pl-4 pr-14 shadow-sm">
        <span className="block w-fit !text-wrap text-base font-normal text-black">{value}</span>

        <Button
          className="absolute right-4 top-1/2 h-6 w-6 -translate-y-1/2 transform text-blue-600 hocus:text-yellow-400"
          onClick={handleCopy}
          aria-label={clipboardAria}
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
            {clipboardNotificate}
          </span>
        )}
      </div>
    </div>
  );
};
