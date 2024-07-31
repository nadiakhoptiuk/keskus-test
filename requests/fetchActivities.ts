import { request } from 'graphql-request';

import { getActivities } from './queries/getActivities';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { ActivitiesData, ActivityCommonType } from '@/app/(shared)/types/common.types';

export const fetchActivities = async (locale: LocaleEnum): Promise<ActivityCommonType[]> => {
  try {
    const data: ActivitiesData = await request(process.env.API_BASE_URL as string, getActivities, {
      locale: locale,
    });

    return data.activities.data;
  } catch {
    return [];
  }
};
