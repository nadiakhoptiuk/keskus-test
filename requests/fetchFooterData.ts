import { request } from 'graphql-request';

import { getFooterData } from './queries/getFooterData';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { FooterDataFetchType, FooterDataType } from '@/app/(shared)/types/common.types';

export const fetchFooterData = async (
  locale: LocaleEnum,
): Promise<FooterDataFetchType | undefined> => {
  try {
    const data: FooterDataType = await request(process.env.API_BASE_URL as string, getFooterData, {
      locale: locale,
    });

    return {
      socials: data.socialNetwork.data.attributes.socials,
      policyTitle: data.policyPage.data.attributes.page_title,
      contacts: data.contactsPage.data.attributes.contacts,
    };
  } catch {
    return undefined;
  }
};
