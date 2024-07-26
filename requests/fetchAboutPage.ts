import { request } from 'graphql-request';

import { getAboutPage } from './queries/getAboutPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AboutPageData, AboutPageType } from '@/app/(shared)/types/common.types';

export const fetchAboutPage = async (locale: LocaleEnum): Promise<AboutPageType> => {
  try {
    const data: AboutPageData = await request(process.env.API_BASE_URL as string, getAboutPage, {
      locale: locale,
    });

    return data.aboutUsPage.data.attributes;
  } catch {
    return undefined;
  }
};
