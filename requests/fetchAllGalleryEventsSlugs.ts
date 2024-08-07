import { request } from 'graphql-request';

import { getAllGalleryEventsSlugs } from './queries/getAllGalleryEventSlugs';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { AllGalleryEventsSlugsData, AllSlugsCommonType } from '@/app/(shared)/types/common.types';

export const fetchAllGalleryEventsSlugs = async (
  locale: LocaleEnum,
): Promise<AllSlugsCommonType> => {
  try {
    const data: AllGalleryEventsSlugsData = await request(
      process.env.API_BASE_URL as string,
      getAllGalleryEventsSlugs,
      {
        locale: locale,
      },
    );

    return data.galleryEvents.data.map(({ attributes: { slug } }) => {
      return {
        slug: slug,
      };
    });
  } catch {
    return [];
  }
};
