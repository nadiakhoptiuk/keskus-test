import { request } from 'graphql-request';

import { getPrivacyPolicyPage } from './queries/getPrivacyPolicyPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { PrivacyPolicyDataType, PrivacyPolicyPageData } from '@/app/(shared)/types/common.types';

export const fetchPrivacyPolicyPage = async (
  locale: LocaleEnum,
): Promise<PrivacyPolicyPageData | undefined> => {
  try {
    const data: PrivacyPolicyDataType = await request(
      process.env.API_BASE_URL as string,
      getPrivacyPolicyPage,
      {
        locale: locale,
      },
    );

    return data.policyPage.data.attributes;
  } catch {
    return undefined;
  }
};
