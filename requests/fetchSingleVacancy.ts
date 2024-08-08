import { request } from 'graphql-request';

import { getSingleVacancy } from './queries/getSingleVacancyPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import {
  SinglePageVacancyData,
  SinglePageVacancyDataType,
} from '@/app/(shared)/types/common.types';

export const fetchSingleVacancy = async (
  locale: LocaleEnum,
  slug: string,
): Promise<SinglePageVacancyDataType | undefined> => {
  try {
    const data: SinglePageVacancyData = await request(
      process.env.API_BASE_URL as string,
      getSingleVacancy,
      {
        locale: locale,
        slug: slug,
      },
    );

    return {
      applyLabel: data.vacanciesPage.data.attributes.link_to_apply_label,
      vacancy: data.vacancies.data[0].attributes,
    };
  } catch {
    return undefined;
  }
};
