import { request } from 'graphql-request';

import { getMetaData } from './queries/getMetaData';

import { LocaleEnum, PageNameVariableEnum } from '@/app/(shared)/types/enums';
import { FinalPageMetaDataType, PageMetaDataType } from '@/app/(shared)/types/common.types';

export const fetchMetaData = async (
  locale: LocaleEnum,
  pageName: PageNameVariableEnum,
): Promise<FinalPageMetaDataType | undefined> => {
  try {
    const data: Record<PageNameVariableEnum, PageMetaDataType> = await request(
      process.env.API_BASE_URL as string,
      getMetaData(pageName),
      {
        locale: locale,
      },
    );

    const { metaTitle, metaDescription, metaImage, keywords } = data[pageName].data.attributes.seo;

    return {
      metaTitle,
      metaDescription,
      metaImage: metaImage.data.attributes,
      keywords,
    };
  } catch {
    return undefined;
  }
};
