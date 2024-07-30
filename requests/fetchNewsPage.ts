import { request } from 'graphql-request';

import { getNewsPage } from './queries/getNewsPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { NewsPageData, NewsPageFetchData } from '@/app/(shared)/types/common.types';

export const fetchNewsPage = async (locale: LocaleEnum): Promise<NewsPageFetchData | undefined> => {
  try {
    const data: NewsPageData = await request(process.env.API_BASE_URL as string, getNewsPage, {
      locale: locale,
    });

    return {
      newspage: data.newsPage.data.attributes,
      news: data.news.data,
    };
  } catch {
    return undefined;
  }
};
