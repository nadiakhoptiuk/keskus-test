import { gql } from 'graphql-request';

export const getContactsPage = gql`
  query ($locale: I18NLocaleCode) {
    contactsPage(locale: $locale) {
      data {
        attributes {
          page_title
          contacts {
            id
            contact_type
            contact_title
            content
            link
          }
          text_description
          contact_us_text_yellow_block
        }
      }
    }
  }
`;
