import { FC } from 'react';

import { FounderCard } from '../FounderCard';

import { fetchFounders } from '@/requests/fetchFounders';

import { LocaleProps } from '@/app/(shared)/types/i18n.types';

export const FoundersList: FC<LocaleProps> = async ({ locale }) => {
  const founders = await fetchFounders(locale);

  return (
    <ul className="mb-10 grid gap-y-8 md:mb-15 md:grid-cols-2 md:gap-8 xl:grid-cols-3 2xl:gap-10">
      {founders.map(({ id, attributes }) => (
        <FounderCard key={id} {...attributes} />
      ))}
    </ul>
  );
};
