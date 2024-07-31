import { gql } from 'graphql-request';

export const getServicesPage = gql`
  query ($locale: I18NLocaleCode) {
    servicesPage(locale: $locale) {
      data {
        attributes {
          page_title
          services_cards {
            id
            title
            icon {
              alt
              image {
                data {
                  attributes {
                    url
                  }
                }
              }
            }
            description
          }
        }
      }
    }
  }
`;
