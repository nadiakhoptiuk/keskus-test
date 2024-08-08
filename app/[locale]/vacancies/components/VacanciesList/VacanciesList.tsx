import { FC } from 'react';

import { VacancyItem } from '../VacancyItem';

import { ButtonInfoType } from '../VacancyItem/VacancyItem.types';
import { VacancyShortTypeWithId } from '@/app/(shared)/types/common.types';

type Props = {
  vacancies: VacancyShortTypeWithId[];
  buttonsData: ButtonInfoType[];
  applyLabel: string;
  readMoreLabel: string;
};

export const VacanciesList: FC<Props> = ({ vacancies, buttonsData, applyLabel, readMoreLabel }) => {
  return (
    <ul className="space-y-[72px] md:space-y-25">
      {vacancies.map(vacancy => (
        <VacancyItem
          key={vacancy.id}
          vacancy={vacancy}
          buttonsData={buttonsData}
          applyLabel={applyLabel}
          readMoreLabel={readMoreLabel}
        />
      ))}
    </ul>
  );
};
