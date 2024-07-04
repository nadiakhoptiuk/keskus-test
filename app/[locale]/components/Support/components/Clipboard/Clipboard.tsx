import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { Typography } from '@/app/(shared)/components/ui/Typography';
import { classnames } from '@/app/(shared)/utils/classnames';
import { useClipboard } from '@/app/[locale]/components/Support/Support.hook';

import { WithClassName } from '@/app/(shared)/types/common.types';

type Props = WithClassName & {
  label: string;
  value: string;
};

export const Clipboard: FC<Props> = ({ label, value, className }) => {
  const { handleCopy, isVisible, t } = useClipboard(value);

  return (
    <div className={classnames('w-full max-w-[280px] space-y-1', className)}>
      <Typography as="span" className="text-base text-zinc-500">
        {label}
      </Typography>

      <div className="relative">
        <input
          className="block w-full text-wrap border-transparent bg-blue-50 py-3 pl-4 pr-14 text-base font-normal text-black shadow-sm focus:border-blue-50 focus:ring-0"
          type="text"
          defaultValue={value}
          disabled
        />

        <Button
          className="absolute right-4 top-1/2 -translate-y-1/2 transform text-blue-600 hocus:text-yellow-400"
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
            {t('clipboardSuccess')}
          </span>
        )}
      </div>
    </div>
  );
};
