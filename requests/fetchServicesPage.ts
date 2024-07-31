import { request } from 'graphql-request';

import { getServicesPage } from './queries/getServicesPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { ServicesPageData, ServicesPageDataType } from '@/app/(shared)/types/common.types';

export const fetchServicesPage = async (
  locale: LocaleEnum,
): Promise<ServicesPageDataType | undefined> => {
  try {
    const data: ServicesPageData = await request(
      process.env.API_BASE_URL as string,
      getServicesPage,
      {
        locale: locale,
      },
    );

    return data.servicesPage.data.attributes;
  } catch {
    return undefined;
  }
};
