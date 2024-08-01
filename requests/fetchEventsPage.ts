import { request } from 'graphql-request';

import { getEventsPage } from './queries/getEventsPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { EventsPageData, EventsPageDataType } from '@/app/(shared)/types/common.types';

export const fetchEventsPage = async (
  locale: LocaleEnum,
): Promise<EventsPageDataType | undefined> => {
  try {
    const data: EventsPageData = await request(process.env.API_BASE_URL as string, getEventsPage, {
      locale: locale,
    });

    return {
      generalInfo: data.eventsPage.data.attributes,
      activities: data.activities.data,
    };
  } catch {
    return undefined;
  }
};
