import { request } from 'graphql-request';

import { getGalleryPage } from './queries/getGalleryPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { GalleryPageData, GalleryPageFetchData } from '@/app/(shared)/types/common.types';

export const fetchGalleryPage = async (
  locale: LocaleEnum,
): Promise<GalleryPageFetchData | undefined> => {
  try {
    const data: GalleryPageData = await request(
      process.env.API_BASE_URL as string,
      getGalleryPage,
      {
        locale: locale,
      },
    );

    return {
      page_title: data.galleryPage.data.attributes.page_title,
      gallery: data.galleryEvents.data,
    };
  } catch {
    return undefined;
  }
};
