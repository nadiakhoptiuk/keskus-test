import { request } from 'graphql-request';

import { getSingleGalleryEvent } from './queries/getSingleGalleryEvent';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { GalleryEventsFetchData, SingleGalleryEventType } from '@/app/(shared)/types/common.types';

export const fetchSingleGalleryEvent = async (
  locale: LocaleEnum,
  slug: string,
): Promise<SingleGalleryEventType | undefined> => {
  try {
    const data: GalleryEventsFetchData = await request(
      process.env.API_BASE_URL as string,
      getSingleGalleryEvent,
      {
        locale: locale,
        slug: slug,
      },
    );

    return data.galleryEvents.data[0].attributes;
  } catch {
    return undefined;
  }
};
