import request from 'graphql-request';

import { getSinglePageMetaData } from './queries/getSinglePageMetaData';

import {
  FinalPageMetaDataType,
  RequestCommonDataType,
  RequestGalleryDataType,
} from '@/app/(shared)/types/common.types';

import {
  ChapterNameVariableEnum,
  LocaleEnum,
  SinglePageNameVariableEnum,
} from '@/app/(shared)/types/enums';
import { getSinglePageMetaDataWithoutImage } from './queries/getSinglePageMetaDataWithoutImage';

type FetchArgumentsType = {
  pageName: SinglePageNameVariableEnum;
  chapterName: ChapterNameVariableEnum;
  locale: LocaleEnum;
  slug: string;
};

const requestForGallery = async ({ pageName, chapterName, locale, slug }: FetchArgumentsType) => {
  const data: RequestGalleryDataType = await request(
    process.env.API_BASE_URL as string,
    getSinglePageMetaData(pageName, chapterName, 'main_image'),
    {
      locale: locale,
      slug: slug,
    },
  );

  const { metaTitle, metaDescription, keywords } = data.commonData.data.attributes.seo;

  const {
    title: singleTitle,
    main_image: {
      image: {
        data: {
          attributes: { url, width, height },
        },
      },
    },
  } = data.singlePageData.data[0].attributes;

  return {
    metaTitle,
    metaDescription: `${metaDescription} ${singleTitle}`,
    metaImage: { url, width, height },
    keywords,
  };
};

const requestForNewsAndEvents = async ({
  pageName,
  chapterName,
  locale,
  slug,
}: FetchArgumentsType) => {
  const data: RequestCommonDataType = await request(
    process.env.API_BASE_URL as string,
    getSinglePageMetaData(pageName, chapterName, 'image'),
    {
      locale: locale,
      slug: slug,
    },
  );

  const { metaTitle, metaDescription, keywords } = data.commonData.data.attributes.seo;

  const {
    title: singleTitle,
    image: {
      image: {
        data: {
          attributes: { url, width, height },
        },
      },
    },
  } = data.singlePageData.data[0].attributes;

  return {
    metaTitle,
    metaDescription: `${metaDescription} ${singleTitle}`,
    metaImage: { url, width, height },
    keywords,
  };
};

const requestForVacancies = async ({ pageName, chapterName, locale, slug }: FetchArgumentsType) => {
  const data: RequestCommonDataType = await request(
    process.env.API_BASE_URL as string,
    getSinglePageMetaDataWithoutImage(pageName, chapterName),
    {
      locale: locale,
      slug: slug,
    },
  );

  const { metaTitle, metaDescription, metaImage, keywords } = data.commonData.data.attributes.seo;

  const { title: singleTitle } = data.singlePageData.data[0].attributes;

  return {
    metaTitle,
    metaDescription: `${metaDescription} ${singleTitle}`,
    metaImage: metaImage.data.attributes,
    keywords,
  };
};

export const fetchSinglePageMetaData = async ({
  locale,
  pageName,
  chapterName,
  slug,
}: FetchArgumentsType): Promise<FinalPageMetaDataType | undefined> => {
  try {
    if (chapterName === ChapterNameVariableEnum.GALLERY) {
      return await requestForGallery({ pageName, chapterName, locale, slug });
    }

    if (chapterName === ChapterNameVariableEnum.VACANCIES) {
      return await requestForVacancies({ pageName, chapterName, locale, slug });
    }

    return await requestForNewsAndEvents({ pageName, chapterName, locale, slug });
  } catch {
    return undefined;
  }
};
