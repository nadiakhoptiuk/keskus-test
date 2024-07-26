import { request } from 'graphql-request';

import { getFounders } from './queries/getFounders';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { FounderType, FoundersData } from '@/app/(shared)/types/common.types';

export const fetchFounders = async (locale: LocaleEnum): Promise<FounderType[]> => {
  try {
    const data: FoundersData = await request(process.env.API_BASE_URL as string, getFounders, {
      locale: locale,
    });

    return data.founders.data;
  } catch {
    return [];
  }
};
