getVacanciesPage;

import { request } from 'graphql-request';

import { getVacanciesPage } from './queries/getVacanciesPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { VacanciesPageData, VacanciesPageFetchData } from '@/app/(shared)/types/common.types';

export const fetchVacanciesPage = async (
  locale: LocaleEnum,
): Promise<VacanciesPageFetchData | undefined> => {
  try {
    const data: VacanciesPageData = await request(
      process.env.API_BASE_URL as string,
      getVacanciesPage,
      {
        locale: locale,
      },
    );

    return {
      vacanciesPage: data.vacanciesPage.data.attributes,
      vacancies: data.vacancies.data,
    };
  } catch {
    return undefined;
  }
};
