import { request } from 'graphql-request';

import { getSingleNewsPageData } from './queries/getSingleNewsPageData';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { SingleNewsPageDataType, SingleNewsPageData } from '@/app/(shared)/types/common.types';

export const fetchSingleNewsPageData = async (
  locale: LocaleEnum,
  slug: string,
): Promise<SingleNewsPageDataType | undefined> => {
  try {
    const data: SingleNewsPageData = await request(
      process.env.API_BASE_URL as string,
      getSingleNewsPageData,
      {
        locale: locale,
        slug: slug,
      },
    );

    return {
      generalInfo: data.newsPage.data.attributes,
      currentNewsData: data.currentNewsData.data[0],
      lastThreeNews: data.lastThreeNews.data,
    };
  } catch {
    return undefined;
  }
};
