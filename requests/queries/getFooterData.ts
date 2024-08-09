import { gql } from 'graphql-request';

export const getFooterData = gql`
  query ($locale: I18NLocaleCode) {
    socialNetwork {
      data {
        attributes {
          socials {
            link
            social_network
          }
        }
      }
    }
    policyPage(locale: $locale) {
      data {
        attributes {
          page_title
        }
      }
    }
    contactsPage(locale: $locale) {
      data {
        attributes {
          contacts {
            id
            link
            contact_type
            contact_title
            content
          }
        }
      }
    }
  }
`;
