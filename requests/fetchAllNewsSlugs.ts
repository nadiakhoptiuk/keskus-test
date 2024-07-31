import { request } from 'graphql-request';

import { getAllNewsSlugs } from './queries/getAllNewsSlugs';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AllNewsSlugsData, AllNewsSlugsType } from '@/app/(shared)/types/common.types';

export const fetchAllNewsSlugs = async (locale: LocaleEnum): Promise<AllNewsSlugsType> => {
  try {
    const data: AllNewsSlugsData = await request(
      process.env.API_BASE_URL as string,
      getAllNewsSlugs,
      {
        locale: locale,
      },
    );

    return data.news.data.map(({ attributes: { slug } }) => {
      return {
        slug: slug,
      };
    });
  } catch {
    return [];
  }
};
