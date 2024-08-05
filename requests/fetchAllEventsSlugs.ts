import { request } from 'graphql-request';

import { getAllEventsSlugs } from './queries/getAllEventsSlugs';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AllEventsSlugsData, AllSlugsCommonType } from '@/app/(shared)/types/common.types';

export const fetchAllEventsSlugs = async (locale: LocaleEnum): Promise<AllSlugsCommonType> => {
  try {
    const data: AllEventsSlugsData = await request(
      process.env.API_BASE_URL as string,
      getAllEventsSlugs,
      {
        locale: locale,
      },
    );

    return data.activities.data.map(({ attributes: { slug } }) => {
      return {
        slug: slug,
      };
    });
  } catch {
    return [];
  }
};
