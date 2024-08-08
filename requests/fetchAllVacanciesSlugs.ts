import { request } from 'graphql-request';

import { getAllVacanciesSlugs } from './queries/getAllVacanciesSlugs';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AllSlugsCommonType, AllVacanciesSlugsData } from '@/app/(shared)/types/common.types';

export const fetchAllVacanciesSlugs = async (locale: LocaleEnum): Promise<AllSlugsCommonType> => {
  try {
    const data: AllVacanciesSlugsData = await request(
      process.env.API_BASE_URL as string,
      getAllVacanciesSlugs,
      {
        locale: locale,
      },
    );

    return data.vacancies.data.map(({ attributes: { slug } }) => {
      return {
        slug: slug,
      };
    });
  } catch {
    return [];
  }
};
