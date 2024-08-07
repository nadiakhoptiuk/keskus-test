import { request } from 'graphql-request';

import { getHomePage } from './queries/getHomePage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { HomePageData, HomePageFetchData } from '@/app/(shared)/types/common.types';

export const fetchHomePage = async (locale: LocaleEnum): Promise<HomePageFetchData> => {
  try {
    const data: HomePageData = await request(process.env.API_BASE_URL as string, getHomePage, {
      locale: locale,
    });

    return {
      homepage: data.homePage.data.attributes,
      tabPanels: data.tabPanels.data,
      irregularActivities: data.activities.data,
    };
  } catch {
    return undefined;
  }
};
