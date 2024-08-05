import { request } from 'graphql-request';

import { getSingleEventPageData } from './queries/getSingleEventPageData';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { ActivitiesData, ActivityCommonType } from '@/app/(shared)/types/common.types';

export const fetchSingleEventPageData = async (
  locale: LocaleEnum,
  slug: string,
): Promise<ActivityCommonType | undefined> => {
  try {
    const data: ActivitiesData = await request(
      process.env.API_BASE_URL as string,
      getSingleEventPageData,
      {
        locale: locale,
        slug: slug,
      },
    );

    return data.activities.data[0];
  } catch {
    return undefined;
  }
};
