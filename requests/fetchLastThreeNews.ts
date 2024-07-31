import { request } from 'graphql-request';

import { getLastThreeNews } from './queries/getLastThreeNews';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { NewsSectionDataType, NewsSectionFetchData } from '@/app/(shared)/types/common.types';

export const fetchLastThreeNews = async (locale: LocaleEnum): Promise<NewsSectionDataType> => {
  try {
    const data: NewsSectionFetchData = await request(
      process.env.API_BASE_URL as string,
      getLastThreeNews,
      {
        locale: locale,
      },
    );

    return { generalInfo: data.newsPage.data.attributes, lastThreeNews: data.news.data };
  } catch {
    return undefined;
  }
};
