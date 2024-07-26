import { request } from 'graphql-request';

import { getContactsPage } from './queries/getContactsPage';

import { LocaleEnum } from '@/app/(shared)/types/enums';
import { ContactsPageData, ContactsPageType } from '@/app/(shared)/types/common.types';

export const fetchContactsPage = async (locale: LocaleEnum): Promise<ContactsPageType> => {
  try {
    const data: ContactsPageData = await request(
      process.env.API_BASE_URL as string,
      getContactsPage,
      {
        locale: locale,
      },
    );

    return data.contactsPage.data.attributes;
  } catch {
    return undefined;
  }
};
