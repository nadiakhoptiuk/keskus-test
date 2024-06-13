import { FC } from 'react';
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';

import { CustomIcon } from '@/app/(shared)/components/ui/CustomIcon';
import { TransitionDropdown } from '@/app/(shared)/components/animations/Transitions';
import { classnames } from '@/app/(shared)/utils/classnames';
import { useLanguageToggle } from '@/app/(shared)/hooks/useLanguageToggle';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { LocaleProps } from '@/app/(shared)/types/i18n.types';
import { WithClassName } from '@/app/(shared)/types/common.types';

const options = [
  { id: 'ukrainian', locale: LocaleEnum.UK, value: 'uk', unavailable: false },
  { id: 'english', locale: LocaleEnum.EN, value: 'en', unavailable: false },
  { id: 'estonian', locale: LocaleEnum.ET, value: 'et', unavailable: false },
];

type Props = WithClassName &
  LocaleProps & {
    color: 'blue' | 'white';
  };

export const LanguageToggle: FC<Props> = ({ locale, color, className }) => {
  const { currentLocale, handleChange } = useLanguageToggle(locale);

  return (
    <Listbox value={{ locale: currentLocale }} onChange={handleChange}>
      {({ open }) => {
        return (
          <div className={classnames('relative', className)}>
            <ListboxButton
              className={classnames(
                'baseTransition inline-flex w-20 items-center justify-center gap-x-1 rounded-full border px-5 py-1 text-base font-medium uppercase',
                open && 'pointer-events-none',
                color === 'blue' &&
                  'border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-zinc-50',
                color === 'white' &&
                  'border-zinc-50 text-zinc-50 hover:bg-zinc-50 hover:text-blue-600',
              )}
            >
              {currentLocale}

              <CustomIcon icon="arrow-sm" className="size-3" />
            </ListboxButton>

            <TransitionDropdown>
              <ListboxOptions
                className={classnames(
                  'absolute left-1/2 z-50 mt-2 w-full -translate-x-1/2 overflow-hidden rounded-xl border shadow-sm',
                  color === 'blue' && 'border-blue-600 bg-zinc-50',
                  color === 'white' && 'border-zinc-50 bg-zinc-50',
                )}
              >
                {options.map(option => (
                  <ListboxOption
                    key={option.id}
                    value={option}
                    disabled={option.unavailable}
                    className="baseTransition block w-full cursor-pointer p-2 text-center text-base font-medium uppercase text-blue-600 hover:bg-blue-600 hover:text-zinc-50"
                  >
                    {option.value}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </TransitionDropdown>
          </div>
        );
      }}
    </Listbox>
  );
};
