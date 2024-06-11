import { FC } from 'react';

import { Button } from '@/app/(shared)/components/ui/Button';
import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { TransitionDropdown } from '../animations/Transitions';
import { classnames } from '@/app/(shared)/utils/classnames';
import { useLanguageToggle } from '@/app/(shared)/hooks/useLanguageToggle';

import { WithClassName } from '@/app/(shared)/types/common.types';

const languages = [
  { name: 'Ukrainian', code: 'uk' },
  { name: 'Estonian', code: 'et' },
  { name: 'English', code: 'en' },
];

type Props = WithClassName & {
  color: 'blue' | 'white';
};

export const LanguageToggle: FC<Props> = ({ color, className }) => {
  const { dropdownRef, isOpen, selected, setIsOpen, setLanguage } = useLanguageToggle();

  return (
    <div className={classnames('relative', className)}>
      <Button
        onClick={setIsOpen}
        className={classnames(
          'inline-flex w-20 items-center justify-center gap-x-1 rounded-full border px-5 py-1 text-base font-medium uppercase',
          isOpen && 'pointer-events-none',
          color === 'blue' && 'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-zinc-50',
          color === 'white' && 'border-zinc-50 text-zinc-50 hover:bg-zinc-50 hover:text-blue-600',
        )}
      >
        {selected || languages[0].code}

        <CustomIcon icon="arrow-sm" className="size-3" />
      </Button>

      <TransitionDropdown isOpen={isOpen}>
        {isOpen && (
          <div
            ref={dropdownRef}
            className={classnames(
              'absolute left-1/2 z-50 mt-2 w-full -translate-x-1/2 overflow-hidden rounded-xl border shadow-sm',
              color === 'blue' && 'border-blue-600 bg-zinc-50',
              color === 'white' && 'border-zinc-50 bg-zinc-50',
            )}
          >
            {languages.map(({ code }) => (
              <Button
                key={code}
                className="baseTransition block w-full p-2 text-center text-base font-medium uppercase text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
                onClick={() => setLanguage(code)}
              >
                {code}
              </Button>
            ))}
          </div>
        )}
      </TransitionDropdown>
    </div>
  );
};
