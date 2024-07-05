import { FC } from 'react';

import { VacancyItem } from '../components/VacancyItem';

import { ButtonInfoType, VacancyItemType } from '../components/VacancyItem/VacancyItem.types';

type Props = {
  vacancies: VacancyItemType[];
  buttonsData: ButtonInfoType[];
};

export const VacanciesList: FC<Props> = ({ vacancies, buttonsData }) => {
  return (
    <ul className="space-y-[72px] md:space-y-25">
      {vacancies.map((vacancy, index) => (
        <VacancyItem key={index} vacancy={vacancy} buttonsData={buttonsData} />
      ))}
    </ul>
  );
};
