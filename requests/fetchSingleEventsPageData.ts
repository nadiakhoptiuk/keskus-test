import { request } from 'graphql-request';

import { getSingleEventPageData } from './queries/getSingleEventPageData';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { EventSinglePageData, EventSinglePageDataType } from '@/app/(shared)/types/common.types';

export const fetchSingleEventPageData = async (
  locale: LocaleEnum,
  slug: string,
): Promise<EventSinglePageDataType | undefined> => {
  try {
    const data: EventSinglePageData = await request(
      process.env.API_BASE_URL as string,
      getSingleEventPageData,
      {
        locale: locale,
        slug: slug,
      },
    );

    return {
      labels: data.eventsPage.data.attributes.labels,
      event: data.activities.data[0],
    };
  } catch {
    return undefined;
  }
};
